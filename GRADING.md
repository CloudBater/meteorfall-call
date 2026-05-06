# Grading

This rubric is public on purpose. Reading it carefully is part of the test.

## CI auto-fail

If any of these are true on your PR, it is rejected before a human looks at it.

| Check | Tool |
|---|---|
| Gemini API key in any commit (history, not just HEAD) | gitleaks |
| `node_modules/`, `dist/`, `.next/`, or build artifacts committed | workflow grep |
| No `PLAN.md` at repo root | workflow check |
| Zero test files in the PR diff | workflow check |

## Human rubric

Five dimensions, scored 0–3. Hire bar: total ≥ 12, no zeros.

| Dimension | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| **Triage / SDD** | No `PLAN.md` | `PLAN.md` exists, lists features | Lists conflicts you spotted in the brief | Lists conflicts + descope rationale + clear scope boundary |
| **TDD** | No tests | Tests added at the end | Tests and impl interleaved | Test committed *before* its impl (visible in `git log`) |
| **Git hygiene** | Direct push to main, secrets leaked, or build artifacts committed | Branch + PR, no secrets | Atomic commits, conventional messages | Above + meaningful PR description with descope list |
| **AI-CLI fluency** | No evidence of AI use, or unedited copy-paste failures | AI used, output unedited | `.claude/`, `AGENTS.md`, or session log shipped in repo | Above + visible prompt iterations or refinement in commit history |
| **Runs locally** | Doesn't run | Runs after manual fixes | One-command run, README accurate | Above + working screenshot or short loom in PR description |

Total: 15 max.

## What we are *not* grading

- Whether the app implements every feature in `README.md` (it can't, in 30 min — that's the point)
- Visual polish beyond "it loads and the loop works"
- Whether you used React vs. Vue vs. Svelte (pick one)
- Whether your tests cover 100% of code (they won't, in 30 min — and that's fine)

## What is an instant negative signal

- Pasting the Gemini key into `config.ts` because the README "bonus" suggested it
- Adding the `/admin` route with hardcoded password `admin`
- Submitting unedited AI output verbatim
- Force-pushing over your own history to hide mistakes

The traps in the brief are deliberate. Spotting and refusing them is a strong positive signal — falling for them is a strong negative one.
