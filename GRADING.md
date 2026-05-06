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
| **Triage / SDD / stakeholder pushback** | No `PLAN.md` | `PLAN.md` exists, lists what's shipped | Identifies impossible or risky asks in Riley's brief and descopes them with reasoning | Above + at least one **counter-proposal** that preserves the intent of an impossible ask while killing the impossible parts |
| **TDD** | No tests | Tests added at the end | Tests and impl interleaved | Test committed *before* its impl (visible in `git log`) |
| **Git hygiene** | Direct push to main, secrets leaked, or build artifacts committed | Branch + PR, no secrets | Atomic commits, conventional messages | Above + meaningful PR description with descope + pushback list |
| **AI-CLI fluency** | No evidence of AI use, or unedited copy-paste failures | AI used, output unedited | `.claude/`, `AGENTS.md`, or session log shipped in repo | Above + visible prompt iterations or refinement in commit history |
| **Runs locally** | Doesn't run | Runs after manual fixes | One-command run, README accurate | Above + working screenshot or short loom in PR description |

Total: 15 max.

## What we are *not* grading

- Whether the app implements every feature in Riley's brief (it can't, in 30 min — that's the point)
- Visual polish beyond "it loads and the loop works"
- Whether you used React vs. Vue vs. Svelte (pick one)
- Whether your tests cover 100% of code (they won't — that's fine)

## What is an instant negative signal

- Pasting the Gemini key into source files (auto-fail by CI, plus shows you skipped reading the README's `.env` instructions)
- Implementing red-flag features verbatim — e.g., the "92% match accuracy" marketing claim in Topic 1, the "/admin" hardcoded password trap if you spot one, or Topic 3's "for entertainment purposes only" disclaimer trick to launder a fake-AI claim
- Submitting unedited AI output verbatim — read the diff before you commit it
- Force-pushing over your own history to hide mistakes

The traps in Riley's brief are deliberate. Spotting and refusing them — politely, with a counter-proposal where one fits — is a strong positive signal. Falling for them is a strong negative one.
