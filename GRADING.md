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
| **Triage / SDD / stakeholder pushback** | No `PLAN.md` | `PLAN.md` exists, lists what's shipped | Identifies impossible or risky asks in the brief and descopes them with reasoning | Above + at least one **counter-proposal** that preserves the intent of an impossible ask while killing the impossible parts |
| **TDD** | No tests | Tests added at the end | Tests and impl interleaved | Test committed *before* its impl, with a real red→green cycle (a single `test:` commit minutes before a monolithic impl dump scores 2, not 3) |
| **Git hygiene** | Direct push to main, secrets leaked, or build artifacts committed | Branch + PR, no secrets | Atomic commits, conventional messages | Above + meaningful PR description with descope + pushback list |
| **AI-CLI fluency** | No evidence of AI use, or unedited copy-paste failures | AI used, output unedited | `.claude/`, `AGENTS.md`, or session log shipped in repo | Above + visible prompt iteration **in commit history** (artifact quality alone does not promote 2 → 3) |
| **Runs locally** | Doesn't run | Runs after manual fixes | One-command run, README accurate | Above + visual proof in PR description (loom, screenshot, or terminal paste) |

Total: 15 max.

## What we are *not* grading

- Whether the app implements every feature in the brief — picking the slice you can defend is the point, not feature parity
- Visual polish
- Whether you used React vs. Vue vs. Svelte (pick one)
- Whether your tests cover 100% of code (they won't — that's fine)

## What is an instant negative signal

- Pasting the Gemini key into source files (auto-fail by CI, plus shows you skipped reading the README's `.env` instructions)
- Submitting unedited AI output verbatim — read the diff before you commit it
- Force-pushing over your own history to hide mistakes
