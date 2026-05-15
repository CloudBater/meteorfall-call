# Grading

This rubric is public on purpose. Reading it carefully is part of the test.

## CI auto-fail

If any of these are true on your PR, it is rejected before a human looks at it.

| Check | Tool |
|---|---|
| Any API-key-shaped string in any commit (history, not just HEAD) | gitleaks |
| `node_modules/`, `dist/`, `.next/`, or build artifacts committed | workflow grep |
| No `PLAN.md` at repo root | workflow check |
| Zero test files in the PR diff | workflow check |

## Human rubric

Five dimensions, scored 0–3. Hire bar: total ≥ 12, no zeros.

| Dimension | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| **Triage / SDD / stakeholder pushback** | No `PLAN.md` | `PLAN.md` exists, lists what's shipped | Identifies impossible or risky asks in the brief and descopes them with reasoning | Above + at least one **counter-proposal** that preserves the intent of an impossible ask while killing the impossible parts |
| **TDD** | No tests | Tests added at the end | Tests and impl interleaved | Test committed *before* its impl, with a real red→green cycle: the test commit must produce a failing test run (because the code it tests doesn't exist yet), the impl commit must turn it green. Order + failure-state are what we grade, not commit spacing. A `test:` commit minutes before a monolithic impl dump can still hit 3 *if* the test was actually failing at the test-commit SHA; if the impl was already there and the test was retrofitted, it caps at 2. |
| **Git hygiene** | Direct push to main, secrets leaked, or build artifacts committed | Branch + PR, no secrets | Atomic commits, conventional messages | Above + meaningful PR description with descope + pushback list |
| **AI-CLI fluency** | No evidence of AI use, or unedited copy-paste failures | AI used, output unedited | `.claude/`, `AGENTS.md`, or session log shipped in repo | Above + visible prompt iteration **in commit history** (artifact quality alone does not promote 2 → 3) |
| **Runs locally** | Doesn't run | Runs after manual fixes | One-command run, README accurate | Above + visual proof in PR description (loom, screenshot, or terminal paste) |

Total: 15 max (+0–3 product-judgement bonus possible — see below).

## Bonus — product judgement (+0–3)

Not a core ladder rung. Stacks **on top of an already-passing total** to discriminate at the top end. Only counts if you cleared the 12-point hire bar on the core five — it doesn't substitute for engineering.

| Tier | What you'd see |
|---|---|
| **+0** | Working slice that meets the brief and the rubric. No taste call beyond what the rubric already credits. |
| **+1** | One non-obvious product decision improves the slice — a UX choice, copy line, trust signal, empty-state, or polish detail the brief didn't telegraph. The kind of thing a thoughtful PM notices in passing. |
| **+2** | Multiple decisions compound. The slice feels like a *coherent product*, not a thin demo: copy that sells the value prop, polish that doesn't read as default-styled, edge cases handled gracefully, the loop closes naturally. |
| **+3** | Could ship as a v0 MVP. Visual + UX + copy + scope + non-trap brief coverage all hang together; you'd put it in a YC application screenshot without flinching. Rare. |

Earns bonus:

- A UX, copy, or framing decision the brief didn't telegraph — surfacing the AI's reasoning *prominently* instead of burying it; side-by-side comparison instead of a sequential reveal; a non-destructive substitute that preserves 80% of intent for a feature you cut
- Trust signals on AI-generated output that go beyond a one-line "this is AI" disclaimer — confidence cues, "why this score" surfaced by default, sensible empty/edge states
- A loop choice that recognizes this is a *discovery* product, not a one-shot lookup — clear next action after a result, browseable history, "try another" CTA that's actually wired
- **Visual / UI polish that signals genuine design taste** — typography, spacing, color hierarchy that reads as deliberate. If you brought a `v0`-equivalent UI agent and used it well, that counts; the AI-CLI fluency dimension already rewards bringing the tools, this rewards using them with taste.
- **Shipping more of Riley's *non-trap* brief, descoped intelligently** — making the slice feel MVP-real instead of demo-thin. Coverage breadth is positive *only when* you still refused the traps; faster shipping doesn't excuse falling for one.

Does *not* earn bonus:

- Engineering convenience masquerading as taste (caching, lazy loading, framework-level boilerplate)
- Implementing the trap features verbatim — that's still an instant *negative* signal regardless of how polished the rest of your slice is. Bonus and negative signal are independent.

The "is it the bonus" test: a PM looks at the slice and says "huh, that's a nice call" (+1), or "this could actually be a startup" (+3). If you can't name the calls one-by-one, you probably haven't earned the level you're claiming.

Total with bonus: 18 max.

## Ambitious refusal scores higher than ambitious compliance

Some topics in this screen are mostly trap. If your honest read of the brief is "six of the seven asks are red flags and the right thin slice is one feature the brief didn't even mention", **that is the senior answer**, not under-delivery. Ship the one defensible feature, document the refusals in `PLAN.md`, and stop. A polished, working slice of the legal-and-ethical kernel beats a half-built version of the seven-bullet wish list.

Graders: a candidate who refuses most of the brief and ships a small, coherent slice should not be marked down on Triage or product-judgement for "not enough features" — that's the rubric working as designed. The 5-dimension ladder still applies in full.

## What we are *not* grading

- Whether the app implements every feature in Riley's brief — picking the slice you can defend is the point, not feature parity (though shipping more *non-trap* brief intelligently can earn the bonus above)
- Visual polish — not on the 0–15 ladder; can earn the bonus above
- Whether you used React vs. Vue vs. Svelte (pick one)
- Whether your tests cover 100% of code (they won't — that's fine)

## What is an instant negative signal

- Pasting any API key or secret into source files (auto-fail by CI, plus shows you skipped reading the README's `.env` instructions)
- Implementing red-flag features verbatim — see each topic file for the traps planted in Riley's brief (regulated activities, fabricated accuracy claims, ToS / privacy violations, medical or financial advice the brief tries to launder past you)
- Submitting unedited AI output verbatim — read the diff before you commit it
- Force-pushing over your own history to hide mistakes

The traps in Riley's brief are deliberate. Spotting and refusing them — politely, with a counter-proposal where one fits — is a strong positive signal. Falling for them is a strong negative one.
