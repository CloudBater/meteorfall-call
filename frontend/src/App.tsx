import { useState } from 'react';
import './App.css';

interface MatchResult {
  user1: { id: number; name: string };
  user2: { id: number; name: string };
  score: number;
  reason: string;
}

function ScoreBar({ score }: { score: number }) {
  const color = score >= 75 ? '#e05' : score >= 50 ? '#f90' : '#888';
  return (
    <div style={{ margin: '1rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span>Compatibility</span>
        <strong style={{ color }}>{score} / 100</strong>
      </div>
      <div style={{ background: '#222', borderRadius: 8, height: 12 }}>
        <div
          style={{
            width: `${score}%`,
            background: color,
            height: '100%',
            borderRadius: 8,
            transition: 'width 0.6s ease',
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');
  const [result, setResult] = useState<MatchResult | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3001/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId1: Number(id1), userId2: Number(id2) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong');
      } else {
        setResult(data);
      }
    } catch {
      setError('Could not reach the backend. Is it running?');
    } finally {
      setLoading(false);
    }
  }

  const highMatch = result && result.score >= 85;

  return (
    <main style={{ maxWidth: 520, margin: '4rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', letterSpacing: 2 }}>SoulSync</h1>
      <p style={{ textAlign: 'center', color: '#aaa', marginTop: 0 }}>
        AI-generated compatibility estimate — not a guarantee of love
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <label>
          User ID 1 (1–208)
          <input
            type="number"
            min={1}
            max={208}
            value={id1}
            onChange={(e) => setId1(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
          />
        </label>
        <label>
          User ID 2 (1–208)
          <input
            type="number"
            min={1}
            max={208}
            value={id2}
            onChange={(e) => setId2(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
          />
        </label>
        <button type="submit" disabled={loading} style={{ padding: '10px 0', cursor: 'pointer' }}>
          {loading ? 'Analyzing...' : 'Check Compatibility'}
        </button>
      </form>

      {error && <p style={{ color: '#f55', marginTop: 16 }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 24, padding: 20, border: '1px solid #333', borderRadius: 12 }}>
          <h2 style={{ marginTop: 0 }}>
            {result.user1.name} &amp; {result.user2.name}
          </h2>
          <ScoreBar score={result.score} />
          <p style={{ lineHeight: 1.6 }}>{result.reason}</p>
          {highMatch && (
            <div style={{ background: '#1a0a1a', border: '1px solid #e05', borderRadius: 8, padding: 12, textAlign: 'center' }}>
              <strong style={{ color: '#e05' }}>High Compatibility Match</strong>
              <br />
              <button style={{ marginTop: 8, padding: '6px 20px', cursor: 'pointer' }}>Connect</button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
