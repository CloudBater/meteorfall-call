import { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.resolve(__dirname, '../../data/users.json');

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  eyeColor: string;
  hair: { color: string; type: string };
  address: { city: string; state: string };
  university: string;
  company: { title: string; department: string };
}

interface UsersData {
  users: User[];
}

export function loadUser(id: number): User | null {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  const data: UsersData = JSON.parse(raw);
  return data.users.find((u) => u.id === id) ?? null;
}

export function safeProfile(u: User) {
  return {
    firstName: u.firstName,
    age: u.age,
    gender: u.gender,
    eyeColor: u.eyeColor,
    hair: u.hair,
    city: u.address.city,
    university: u.university,
    jobTitle: u.company.title,
    department: u.company.department,
  };
}

export async function matchHandler(req: Request, res: Response): Promise<void> {
  const { userId1, userId2 } = req.body as { userId1: number; userId2: number };

  if (!userId1 || !userId2) {
    res.status(400).json({ error: 'userId1 and userId2 are required' });
    return;
  }

  const user1 = loadUser(Number(userId1));
  const user2 = loadUser(Number(userId2));

  if (!user1) {
    res.status(404).json({ error: `User ${userId1} not found` });
    return;
  }
  if (!user2) {
    res.status(404).json({ error: `User ${userId2} not found` });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const prompt = `You are a compatibility analyst. Given two people's profiles, produce a JSON object with exactly two fields:
- "score": an integer from 0 to 100 representing their compatibility
- "reason": one paragraph (2-4 sentences) explaining the score based on their shared interests, backgrounds, and personalities

Person A: ${JSON.stringify(safeProfile(user1))}
Person B: ${JSON.stringify(safeProfile(user2))}

Respond ONLY with valid JSON. No markdown, no code blocks.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  let parsed: { score: number; reason: string };
  try {
    parsed = JSON.parse(text);
  } catch {
    res.status(502).json({ error: 'Failed to parse Gemini response', raw: text });
    return;
  }

  res.json({
    user1: { id: user1.id, name: `${user1.firstName} ${user1.lastName}` },
    user2: { id: user2.id, name: `${user2.firstName} ${user2.lastName}` },
    score: parsed.score,
    reason: parsed.reason,
  });
}
