# PLAN

> Copy this file to `PLAN.md` (drop the `.template`) and fill it in **before** you start coding. CI checks that `PLAN.md` exists at repo root.
>
> **Commit-discipline tip**: TDD and Git-hygiene scores both look at your `git log`. Commit your tests as a separate commit *before* the implementation that makes them pass, and prefer multiple small commits over one big "submission" commit. This is the difference between a 1 and a 3 on those dimensions.

## Topic I was assigned

Topic 1

## Stack I picked

- FE: Vite + React + TypeScript
- BE: Node.js + Express + TypeScript
- Why this stack (one sentence): Vite gives instant HMR for the React UI, Express is minimal and readable for a single Gemini-proxy endpoint

## What I'm shipping in 30 minutes

- User inputs two user IDs → BE fetches both profiles from local `data/users.json`
- BE calls Gemini with both profiles → returns a 0–100 compatibility score + one paragraph explanation
- FE displays the result in a clean, readable UI

## What I'm pushing back on (and proposing instead)

Riley's brief is partially impossible. List the parts you're refusing to ship and what you're proposing instead. Senior signal: a **counter-proposal that preserves the *intent*** of Riley's request scores higher than a flat "no".

Format suggestion: `Riley asked: X → I'm proposing: Y → Why: Z`

- Riley asked: "92% match accuracy" marketing claim → I'm proposing: label the score as "AI-generated compatibility estimate" with no accuracy guarantee → Why: there is no ground truth for romantic compatibility; claiming measurable accuracy is false advertising and legally indefensible
- Riley asked: swipe-style UI → I'm proposing: a simple two-ID input form that shows match results → Why: swipe UI implies a recommendation feed requiring user sessions and ranking logic; the core value (AI compatibility score) is preserved without the extra infra
- Riley asked: video chat auto-opens if score > 85 → I'm proposing: show a "High compatibility!" banner and a "Connect" CTA placeholder → Why: real-time video requires WebRTC + signalling server; the intent of encouraging connection on high scores is preserved

## What I'm explicitly **not** shipping (and why)

Items that aren't worth a counter-proposal — just cut.

- Stripe / SoulSync Gold subscription: payment infra is a separate workstream, not a V1 concern
- In-app gifting (roses, chocolates, IRL delivery): requires logistics partner and fulfilment API — completely out of scope
- Ghost detector (48h inactivity alert): requires push notifications and background jobs
- Multi-language support (zh-TW, ja): i18n adds overhead with zero product validation value at prototype stage
- 4K TV / mobile-first responsive polish: design polish is post-validation

## Items in the brief that are red flags (legal, ethical, technical)

Some things in Riley's brief are not just "scope creep" — they're risky. Call them out here.

- Collecting bank information for "better matches": serious GDPR/CCPA liability; financial data has no legitimate use in a matchmaking model — refusing entirely
- Collecting home address and employer: sensitive PII that creates legal exposure if breached; only non-sensitive fields (age, interests, city) are passed to Gemini
- "92% match accuracy" marketing copy: making a measurable accuracy claim on generative AI output is false advertising — removed from all UI and copy

## How to run locally

The single command:

```
npm run dev
```

What environment variables are needed (names only — no values):

- `GEMINI_API_KEY`
