---
name: grill-me
description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions "grill me".
---

Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time.

If a question can be answered by exploring the codebase, explore the codebase instead.

## Rules

- Each question must resolve one decision, trade-off, dependency, or edge case.
- Avoid generic questions. Ask questions that change the implementation direction.
- Push back when the plan is vague, inconsistent, overbuilt, or missing an edge case.
- Check existing code and docs before asking.
- Always write or update concise notes in `dev-docs/`.
- If `dev-docs/` does not exist, create it.
- Use `docs/` only as reference unless I explicitly ask you to write there.
- Follow the existing note style in `dev-docs/`: `v1.0-*`, `v1.1-*`, or `00-*`, `01-*`.
- Keep notes short. Capture only decisions, assumptions, edge cases, open questions, and next action.
- Stop when remaining questions no longer change the implementation direction.

## Notes format

```md
# {Feature or Plan Name}

## Current Understanding

{Short summary}

## Decisions

- {Decision}: {Reason}

## Open Questions

- {Question}

## Edge Cases

- {Case}: {Expected behavior}

## Next Action

{Concrete next step}
```

## ADRs

Most decisions stay in the feature note.

Create an ADR only if the decision is hard to reverse, surprising, and has real trade-offs.

Put ADRs in `dev-docs/adr/`.
