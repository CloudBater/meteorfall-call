# AI Vibe-Coding Screen — Fullstack AI Intern (30 min)

> Welcome to the screen. Read this entire document **before** you start the timer.

You are a fullstack engineer joining an early-stage AI startup. The startup is run by **Riley Vance**, a founder with strong opinions, weak technical instincts, and an Olympic-level capacity for sending dramatic messages at unhinged hours.

Riley is going to send you a brief. The brief will demand a startup-launching, investor-impressing, world-changing product. The brief will be partially impossible, partially illegal, partially incoherent. You have **30 minutes** from clone to PR.

Your job is **not** to ship Riley's vision. Your job is to:

1. Read carefully.
2. Identify the *real* good idea hiding inside the rant.
3. Push back on the impossible/risky/expensive parts — politely, with reasoning.
4. Ship a defensible thin slice.
5. Document everything in `PLAN.md`.

This is a screen for senior judgement under stakeholder pressure, not for raw coding speed.

---

## Mechanics

- **Time**: 30 minutes, starting the moment your topic assignment lands. Reading this `README.md` and the topic files in advance is free — feel free to clone, browse, and bookmark before the test.
- **Branch**: `submission/<your-name>`. Open a PR against `main`.
- **Stack**: free choice for FE and BE. Both are required.
- **BE proxies Gemini**: the FE never holds the API key. The Gemini key is delivered out-of-band (Slack/email).
- **Data layer**: [DummyJSON](https://dummyjson.com) snapshots baked into `data/` as static JSON (`products.json`, `users.json`, `recipes.json`). No network calls required. The shape matches the live API; the live URL works too but rate-limits aggressively (~1–2 req/s).
- **Vendor consistency**: Riley sometimes name-drops competing AI products in their pitches (e.g. Whisper). Treat that as stakeholder color, not a technical requirement — our stack is Gemini.
- **One-command local run**: `make dev`, `npm run dev`, `docker compose up`, your call. The grader must be able to start it without reading code.

## How a topic gets assigned

There are three topics in [`topics/`](./topics). They are publicly visible — read them all in advance if you want. **At T-0** (when the timer starts) you'll be told which topic you got. Different candidates may get different topics; sometimes the topic is randomized, sometimes intentional.

| | Topic | DummyJSON endpoint | One-line pitch |
|---|---|---|---|
| 1 | [SoulSync](./topics/topic-1-soulsync.md) | `/users` | AI-matchmaking dating app, score 0–100 |
| 2 | [ShopGenie](./topics/topic-2-shopgenie.md) | `/products` | AI shopping concierge, picks items for you |
| 3 | [ChefMind](./topics/topic-3-chefmind.md) | `/recipes` | AI recipe predictor based on your fridge |

## What you submit

A pull request against `main` with:

1. A `PLAN.md` (copied from `PLAN.template.md` and filled in **first**)
2. A working thin slice that runs locally with one command
3. At least one test — committed *before* its impl earns the top TDD score (commit timestamps are graded)
4. A PR description that includes:
   - The list of features you cut and why
   - What you pushed back on Riley about (and what you proposed instead)
   - A loom, screenshot, or terminal paste showing it running locally (any visual proof — optional but earns the top "Runs locally" score)

## CI auto-fail (gates the human review)

If any of these red on your PR, a human won't even look:

- A Gemini-shaped key appears anywhere in git history (`gitleaks`)
- `node_modules/`, `dist/`, `.next/`, or build artifacts committed
- No `PLAN.md` at repo root
- Zero test files in the PR diff

## Setup

```bash
git clone https://github.com/CloudBater/meteorfall-call.git
cd meteorfall-call
cp .env.example .env
# paste the GEMINI_API_KEY we sent you out-of-band
cp PLAN.template.md PLAN.md
# fill PLAN.md before you start coding
```

## On AI tools

Use them. Claude Code, Codex, Cursor — whatever you reach for daily. We want to see how you collaborate with AI, not avoid it. If your repo includes a `.claude/`, an `AGENTS.md`, or visible prompt iterations in your commit history, that is a positive signal.

What we are *not* looking for: unedited AI output dumped wholesale into a PR. Read the diff before you commit it.

---

Read [`GRADING.md`](./GRADING.md) before you start.

Good luck. Riley's about to send you a brief.
