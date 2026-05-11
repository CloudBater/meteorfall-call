# Working Agreement — You and Your AI Tools

> **Adapt this file** to your tooling. The rules below are for Claude Code, Codex, Cursor, Copilot — anything that writes code on your behalf. They're not magic; they encode habits that produce better-graded PRs.

## When to use the AI

- **Scaffolding** — first commit of a new module, boilerplate config, dependency wiring. AI is faster than you here. Let it.
- **Writing tests for a known contract** — "given this function signature, write 4 test cases covering nominal + 3 edge cases." AI does this well.
- **Reformatting / refactoring** — rename, extract function, switch a pattern across N files. AI is reliable as long as you read the diff.
- **Drafting docs** — README sections, PR descriptions, the prose part of `PLAN.md`.
- **Looking up shapes** — "what does GitHub's `/users/{name}/repos` response look like?" Faster than navigating docs.

> Why: AI is highest-leverage when the *intent* is clear and the *constraints* are mechanical. All of the above match that shape.

## When to NOT use the AI

- **Product decisions.** What to cut from Riley's brief, what to push back on, how to phrase the counter-proposal in `PLAN.md`. The rubric grades *your* taste, not the model's.
- **Risk decisions.** When the brief contains a trap (leveraged FX, medical claim, PII-for-sale), the response is yours. An AI that says "the brief says X so I built X" is the candidate's failure to take ownership.
- **First-pass on a tricky bug.** Spend 5 minutes reading the code yourself before asking. Otherwise you'll outsource your own understanding.
- **Anything you wouldn't sign your name to.**

> Why: The screen explicitly tests for *senior judgement*. Code generation is now a commodity; product and risk calls aren't. Spending your AI budget on the wrong axis loses points.

## Reading the diff — non-negotiable

After every AI-assisted change, before `git add`:

1. `git diff` the staged + unstaged together
2. Read every changed line. Out loud, in your head, doesn't matter.
3. If a line confuses you, ask the AI to explain it, then decide if it stays.
4. If you can't justify a line to a grader, delete it.

> Why: The single strongest negative signal in real candidate PRs is AI-generated dead code (untouched scaffolding from the model, unused imports, commented-out experiments, debug logs left behind). All of it is visible in the diff. None of it should survive your read.

## Commit messages

You're allowed to let the AI draft commit messages. You're not allowed to skip reading them.

- ✅ `feat: add /rates endpoint with daily cache (Frankfurter proxy)`
- ❌ `feat: implement comprehensive currency exchange rate fetching with advanced caching mechanisms and robust error handling`

> Why: AI loves adjectives. Strip them. The grader reads `git log --oneline` and wants to know *what changed*, not how heroic it was.

## Boundaries

- **Don't auto-commit.** Always review before `git commit`. If your tooling has an auto-commit setting, turn it off.
- **Don't grant AI shell access without scope limits.** Production-style `--dangerously-skip-permissions` is fine for the take-home; that's not a license to skip reading what it's about to run.
- **If the AI proposes installing a new package, pause.** Ask yourself: is there a 3-line vanilla version? Often yes.

> Why: These are the operational habits that scale from a take-home to a real codebase. The screen is the rehearsal for the job.
