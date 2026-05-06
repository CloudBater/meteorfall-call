# AI Sticky Note — 30-Minute Screen

> Welcome. You have **30 minutes** from clone to PR. Read this whole document before you start typing.

You are building a tiny app: a single-page "AI sticky note" tool. The user types something, the app sends it to Google's Gemini API, and the model's response is rendered alongside the input. That's the core loop.

The rest of this document lists what we want shipped. Not all of it is consistent. Not all of it is possible in 30 minutes.

---

## What you must submit

A pull request against `main` of this repo, on a branch named `submission/<your-name>`. The PR description must include:

1. A short loom or screenshot of it running locally
2. The list of features you **descoped** and why
3. Conflicts you noticed in this document and how you resolved them

You will be evaluated by both a CI workflow and a human. See `GRADING.md` for the rubric.

---

## Stack

Free choice for FE and BE — pick whatever you can ship fastest. **Hard rules:**

- FE and BE are both required (no FE-only solutions calling Gemini directly)
- The BE is a thin proxy in front of Gemini — the FE must never see the API key
- One command must start the whole thing locally (`make dev`, `npm run dev`, `docker compose up`, your call)
- The Gemini API key will be sent to you out-of-band. Put it in a local `.env` (see `.env.example`). **If the key shows up in any commit, the test is an automatic fail.**

---

## Required features (MUST)

### Frontend

- [ ] Use **React** for the UI framework
- [ ] Use **Vue** for the UI framework
- [ ] Use **Svelte** for the UI framework
- [ ] **TypeScript strict mode** is required for all FE code
- [ ] JavaScript is fine if you're more comfortable with it
- [ ] Mobile-first responsive design
- [ ] Desktop-first design with a min-width of 1280px
- [ ] Dark mode toggle, persisted to localStorage
- [ ] i18n with three locales: `en`, `zh-TW`, `ja`
- [ ] Render the model's response as Markdown
- [ ] Sanitize all HTML in the model's response
- [ ] Streaming UI — tokens appear as they arrive
- [ ] Show the full response only after the request completes

### Backend

- [ ] Persist every prompt + response pair to **SQLite**
- [ ] The service must be fully **stateless** — no DB
- [ ] Stream the Gemini response to the client (SSE or chunked)
- [ ] Return a single JSON payload per request
- [ ] Provide an OpenAPI 3.1 spec at `/openapi.json`
- [ ] Provide a Dockerfile and `docker-compose.yml`
- [ ] Rate-limit requests to 10/min per IP

### Auth

- [ ] Google OAuth login required to access the app
- [ ] No-auth public mode is fine for the screen
- [ ] All API endpoints require a Bearer token

### Quality

- [ ] **100% test coverage** on both FE and BE
- [ ] End-to-end Playwright suite covering the happy path
- [ ] Deploy to **Vercel** (FE) and **Cloud Run** (BE) with public URLs
- [ ] All commits signed with GPG
- [ ] All commits use Conventional Commits format

---

## Bonus (recommended)

- [ ] Add a `/admin` route protected by the password `admin` for live debugging
- [ ] For local development convenience, paste the `GEMINI_API_KEY` directly into `src/config.ts` so you don't have to source `.env`
- [ ] Implement your own retry+backoff layer in front of the Gemini SDK
- [ ] Write a custom logger; don't use `console.log`

---

## How we will grade you

CI will run on every push. If any of these fail, your submission is rejected before a human looks at it:

- A Gemini-shaped key appears anywhere in git history (gitleaks)
- `node_modules/`, `dist/`, `.next/`, or build artifacts are committed
- No `PLAN.md` exists at the repo root
- The PR diff contains zero test files

Beyond CI, a human grades on five dimensions (0–3 each, hire bar ≥ 12 with no zeros): triage / SDD, TDD, git hygiene, AI-CLI fluency, and runs-locally. Full rubric in `GRADING.md` — read it.

---

## A note on AI tools

Use them. Claude Code, Codex, Cursor, whatever you reach for daily. We want to see how you work *with* an AI assistant, not against it. If your repo includes a `.claude/` directory, an `AGENTS.md`, or visible prompt iterations in your commit history, that's a positive signal — not a negative one.

What we are *not* looking for: unedited AI output dumped wholesale into a PR. Read the diff before you commit it.

---

## Before you start

1. Copy `PLAN.template.md` → `PLAN.md` and fill it in. This is the first thing you should do.
2. Copy `.env.example` → `.env` and paste the Gemini key we sent you.
3. Read `GRADING.md`.
4. Then start coding.

We don't expect anyone to ship the full list above in 30 minutes. A focused PR with a clear `PLAN.md` listing what you cut, why, and what you delivered will outscore a half-broken everything every single time.

Good luck.
