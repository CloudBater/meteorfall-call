---
name: commit-discipline
description: Structure commits so the git log itself becomes a TDD + scope-discipline artifact.
---

# Commit Discipline

The grader reads `git log` before reading the code. The shape of that log is itself a signal.

## The pattern

For every shippable unit of behavior:

1. `test: <what the new behavior is>` — commit the failing test alone. CI is allowed to be red on this commit.
2. `feat: <minimal impl that turns the test green>` — just enough code to pass. No bonus features, no premature abstraction.
3. (optional) `refactor: <cleanup>` — only after step 2 is green, only if it's a real improvement, not "make it neat".

Each commit:

- Has a conventional-commit prefix (`feat:` / `fix:` / `test:` / `docs:` / `refactor:` / `chore:`).
- Has an imperative subject ≤72 chars.
- Touches one logical concern. If the diff spans two unrelated areas, split it.

> Why: This is the only way to score `3` on the TDD dimension of the rubric. A single "submission" commit caps at `1`. A `test:` commit minutes before a monolithic `feat:` dump caps at `2`. The rubric specifically guards against the `test:`-then-`feat:`-dump pattern by requiring a real red→green cycle.

## What "atomic" means in practice

A commit is atomic if a reviewer can read its diff in one sitting and understand exactly what it changed and why.

- ✅ "Add a `/health` endpoint with a smoke test"  — one route, one test, no other changes
- ✅ "Wire FE search box to BE `/search` endpoint"  — one component, one fetch hook, one test
- ❌ "WIP" — never. The reviewer doesn't know what's in this commit.
- ❌ "Initial commit" with 47 files — fine for the very first scaffold, but if it's also your only commit, you're capped at level 1 on Git-hygiene.

## What "meaningful PR description" means

Required for Git-hygiene level 3 on top of atomic commits:

- A bullet list of features you *cut* from Riley's brief and why.
- A bullet list of things you *pushed back on* with the alternative you proposed.
- A pointer to `PLAN.md` (the long-form version).
- Optional but recommended: a screenshot or terminal paste showing it running locally.

> Why: The PR description is where the grader looks first. It's the table of contents for everything else. A great PR description on top of one giant scaffold commit *still* caps at level 2 — the description doesn't substitute for atomic commits. Both are required for level 3.

## How to apply

When working with AI tooling, before every `git commit`:

1. Run `git diff --cached`.
2. Ask: does this diff describe *one* thing? If no, `git reset` and split it.
3. Draft the commit message yourself or have the AI draft it; either way, read it.
4. If the message has more than 7 words in the subject, you're hiding multiple things.

The 5-minute habit of splitting one big diff into 3 atomic commits is worth more rubric points than 3 hours of additional implementation.
