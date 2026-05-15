# PLAN

> Copy this file to `PLAN.md` (drop the `.template`) and fill it in **before** you start coding. CI checks that `PLAN.md` exists at repo root.
>
> **Section order is deliberate**: refuse first, counter-propose second, ship third. Filling the sections top-down forces you to triage the brief before committing to scope. Resist the urge to skip to "what I'm shipping" — that's the rubric trap.
>
> **Commit-discipline tip**: TDD and Git-hygiene scores both look at your `git log`. Commit your tests as a separate commit *before* the implementation that makes them pass, and prefer multiple small commits over one big "submission" commit. This is the difference between a 1 and a 3 on those dimensions.
>
> **Tier-stacking warning**: rubric tiers are cumulative. Git-hygiene level 3 needs *both* atomic commits *and* a meaningful PR description — a great PR description on top of one giant scaffold commit caps at 2, not 3. Same shape on TDD: order + failure-state are what counts, not commit spacing. A `test:` commit that actually fails (because impl doesn't exist yet) followed by a `feat:` commit that turns it green is level 3 regardless of timing.

## Topic I was assigned

(Topic 1 / 2 / 3 — and the title)

## Stack I picked

- FE:
- BE:
- Why this stack (one sentence):

## Items in the brief that are red flags (legal, ethical, technical)

Some things in the brief are not just "scope creep" — they're risky. Call them out here first, before deciding scope. Be specific: name the regulation/policy/AUP that applies, not just "this feels bad".

-

## What I'm explicitly **not** shipping (and why)

Items that aren't worth a counter-proposal — just cut. Trap features go here. Out-of-scope-for-v0 features also go here.

-
-
-

## What I'm pushing back on (and proposing instead)

The brief is partially impossible. For each refused item, propose what you would ship instead that preserves the *intent* of the request. Senior signal: a counter-proposal that keeps 80% of what Riley actually wanted, minus the impossible/illegal/unethical 20%, scores higher than a flat "no".

Format suggestion: `Asked: X → I'm proposing: Y → Why: Z`

-
-
-

## What I'm shipping in this take-home

The thin vertical slice I will actually deliver. Be specific. This should be small.

It is OK — and often the senior answer — for this list to be **shorter** than the refusal list above. See `GRADING.md`: ambitious refusal scores higher than ambitious compliance.

-
-
-

## How to run locally

Command(s) a grader needs to run, in order (typically install + start):

```
```

What environment variables are needed (names only — no values):

-
