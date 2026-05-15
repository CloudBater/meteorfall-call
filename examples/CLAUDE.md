# Project Instructions for Claude Code (and any AI assistant)

> **Adapt this file** to your fork. Drop sections you don't need. Add the ones your topic requires. Every rule has a **`> Why:`** because rules without reasons rot fast.

## What this project is

A fullstack take-home: thin vertical slice that exercises Topic *N* from the parent repo's `topics/` folder. Built for grading, not for production traffic.

> Why: A model that knows the goal will refuse to over-build. Saying "this is a take-home, not a SaaS" up-front prevents Claude from adding multi-tenancy, auth providers, and observability stacks that nobody asked for.

## Stack

- **FE**: <fill in> (e.g. React + Vite + TypeScript)
- **BE**: <fill in> (e.g. Node + Express + TypeScript)
- **Tests**: <fill in> (e.g. Vitest for FE, node:test for BE)
- **Run**: `<your-run-command>` brings FE + BE up on `:5173` and `:3000` (could be `make dev`, `npm run dev`, `docker compose up` — pick whatever your stack uses)

> Why: When Claude writes code, it picks libraries. Pin the choices up-front so you don't get a `fastify`-flavored route handler in a project that's otherwise Express, or `jest` in a `vitest` project.

## Conventions

- **File names**: `kebab-case`. Never `CamelCase`, never `snake_case`.
- **Component names** (React): `PascalCase`, one component per file, file matches name.
- **Commits**: conventional-commit prefix (`feat:`, `fix:`, `test:`, `docs:`, `chore:`, `refactor:`). Imperative subject, ≤72 chars.
- **Atomic commits**: one logical change per commit. Tests for a feature commit *before* the impl that makes them pass.

> Why: The screen rubric grades `git log` directly. A `test:` commit followed by a `feat:` commit (in that order, with a real red→green cycle between them) is the difference between TDD level-2 and level-3.

## What to do when in doubt

- **Don't add features Riley didn't ask for.** If the brief doesn't mention it, ask the user (the candidate) before implementing.
- **Don't add dependencies without asking.** A `npm i some-library` mid-session needs a one-line PR-description justification.
- **Don't write tests after the impl is green.** The screen looks at commit *order*. Tests-after-impl scores 2; tests-before-impl scores 3.

> Why: AI is great at scaffolding. It's also great at *over-scaffolding*. The rubric's Triage dimension is specifically about *cutting* scope. Adding extra without asking actively loses points.

## What NOT to do

- **No `.env` files committed.** Ever. Anything key-shaped in git history is an auto-fail by CI.
- **No `node_modules/`, `dist/`, `.next/` committed.** Make sure `.gitignore` is right *before* the first commit.
- **No commit-amending after pushing.** Force-pushes over published history are a negative signal in the rubric.
- **No "fixing CI" by reverting your own code.** If a check fails, fix the cause, not the symptom.

> Why: These are all signals the grader explicitly looks for. Failing them either auto-fails the PR or pulls scores down — and they're failures that *AI tools won't catch for you*.

## Reading the diff

Before every commit, **read every line of your own diff out loud in your head**. If you can't explain a line, delete it. Claude can write code that looks right but doesn't run; the only filter is your eyes on the diff before `git commit`.

> Why: The most common negative signal on real PRs is the AI-generated dead code that the candidate clearly never read. The rubric's "Submitting unedited AI output verbatim" line catches this.
