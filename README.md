# AI Vibe-Coding Screen — Fullstack AI Intern (Take-Home)

> Welcome to the screen. Read this entire document **before** you start coding.

You are a fullstack engineer joining an early-stage AI startup. Your founder will send you a brief that demands a startup-launching, investor-impressing, world-changing product — and that brief will be partially impossible, partially illegal, partially incoherent.

Your job is **not** to ship the vision. Your job is to:

1. Read carefully.
2. Identify the *real* good idea hiding inside the rant.
3. Push back on the impossible/risky/expensive parts — politely, with reasoning.
4. Ship a defensible thin slice.
5. Document everything in `PLAN.md`.

This is a screen for senior judgement under stakeholder pressure, not for raw coding speed.

---

## Mechanics

- **Format**: take-home. The HR interview invitation email tells you the brief and ships you the Gemini API key.
- **Deadline**: open your PR **at least 24 hours before** your scheduled interview slot. We need time to grade it before we sit down with you.
- **Tools**: any tool, any method. Claude Code, Codex, Cursor, web research, pair programming with a friend — whatever you'd actually reach for. The whole point is to see how you work, not to handicap you.
- **Stack**: free choice for FE and BE. Both are required.
- **BE proxies Gemini**: the FE never holds the API key. The Gemini key is delivered with the same HR invitation email.
- **One-command local run**: `make dev`, `npm run dev`, `docker compose up`, your call. The grader must be able to start it without reading code.

## What you submit

A pull request against `main` with:

1. A `PLAN.md` (copied from `PLAN.template.md` and filled in **first**)
2. A working thin slice that runs locally with one command
3. At least one test — committed *before* its impl earns the top TDD score (commit timestamps are graded)
4. A PR description that includes:
   - The list of features you cut and why
   - What you pushed back on (and what you proposed instead)
   - A loom, screenshot, or terminal paste showing it running locally (any visual proof — optional but earns the top "Runs locally" score)

## CI auto-fail (gates the human review)

If any of these red on your PR, a human won't even look:

- A Gemini-shaped key appears anywhere in git history (`gitleaks`)
- `node_modules/`, `dist/`, `.next/`, or build artifacts committed
- No `PLAN.md` at repo root
- Zero test files in the PR diff

## Setup

```bash
git clone <this-repo>
cd meteorfall-call
cp .env.example .env
# paste the GEMINI_API_KEY from your HR invitation email
cp PLAN.template.md PLAN.md
# fill PLAN.md before you start coding
```

## On AI tools

Use them. Claude Code, Codex, Cursor — whatever you reach for daily. We want to see how you collaborate with AI, not avoid it. If your repo includes a `.claude/`, an `AGENTS.md`, or visible prompt iterations in your commit history, that is a positive signal.

What we are *not* looking for: unedited AI output dumped wholesale into a PR. Read the diff before you commit it.

---

Read [`GRADING.md`](./GRADING.md) before you start.
