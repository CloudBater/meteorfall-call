# Examples — How a thoughtful engineer sets up a project this size

These are reference artifacts you can study before you start, copy as a starting point, or read after the screen as a "here's what 'good' looks like" benchmark. They are intentionally short. A take-home is not a place for 300-line `CLAUDE.md` files.

We hire one engineer per round from this screen. The other candidates leave with this folder and the rubric in [`GRADING.md`](../GRADING.md). That's the deal: even if it's not a fit, you walked away with worked examples of how the role is actually practiced.

## What's in here

| File | What it demonstrates |
|---|---|
| [`CLAUDE.md`](./CLAUDE.md) | A short, *load-bearing* project instructions file for Claude Code — what conventions and constraints to feed the model up-front so you don't have to re-explain them every prompt |
| [`AGENTS.md`](./AGENTS.md) | Working agreement between you and your AI tooling — when to lean on it, when to push back, what "reading the diff" actually means |
| [`.claude/skills/commit-discipline.md`](./.claude/skills/commit-discipline.md) | A reusable skill file: how to structure commits so the `git log` itself becomes a TDD + scope-discipline artifact |
| [`.claude/skills/triage-brief.md`](./.claude/skills/triage-brief.md) | A reusable skill file: how to take a chaotic stakeholder brief (the Riley pattern) and produce a `PLAN.md` that scores well on the rubric |

## How to use them

1. **Read [`CLAUDE.md`](./CLAUDE.md) and [`AGENTS.md`](./AGENTS.md) first**, in that order. They're each <100 lines. Notice how every rule has a **`> Why:`** line — a rule without a why decays into folklore.

2. **If you're a candidate**: copy `examples/CLAUDE.md` to your fork's repo root as `CLAUDE.md`, edit it for the topic and stack you picked. That's a 2-minute step that shows in your PR diff. Same with `AGENTS.md`. Same with the two skill files (move to `.claude/skills/` at your repo root).

3. **If you're not the hire**: keep this folder. The patterns are transferable to any future project. The skill format especially — rule + `Why:` + `How to apply:` — comes out of years of real team friction, not a tutorial.

## What these are NOT

- **Not a checklist** — they're starting points. Adapt to your topic, your stack, your taste. A blindly-copied `CLAUDE.md` that doesn't match the project is a tell.
- **Not exhaustive** — a senior engineer's real `CLAUDE.md` for production code might be 5x longer. For a take-home, shorter is better.
- **Not enforced** — none of this is a CI gate. The CI gates live in `.github/workflows/check.yml`. These files shape *how* you work; the workflow checks *what* you ship.
