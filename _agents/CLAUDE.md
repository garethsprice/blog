# ICM Workspace: Blog Publishing Pipeline

**Purpose:** Takes a blog post from topic selection through publication-ready Jekyll markdown, using ICM's five-layer context hierarchy to deliver focused, stage-appropriate context at each step.

**Use:** Run `stages/00_setup/` to configure reference material. Run Claude Code from the workspace root. Say "I want to write about [topic]" and the routing table below will guide you to the right stage.

**Reference:** Van Clief & McDermott, "Interpretable Context Methodology: Folder Structure as Agent Architecture," arXiv:2603.16021v2, March 2026.

---

## Workspace Identity (Layer 0)

This workspace manages the full lifecycle of a blog post for the Res·Cog blog (startupctobook.com): selecting a topic, validating the angle before committing writing effort, researching, drafting, scoring against TTNW and the style guide, revising, and outputting Jekyll-ready markdown.

The pipeline is sequential with human review gates between stages. Each stage reads only the context it needs. No stage loads the full workspace. The folder structure is the orchestration — no framework, no coordination code.

The workspace follows ICM conventions:
- Numbered folders encode execution order
- Each stage has one job and writes output to its own `output/` folder
- `references/` folders hold stage-specific Layer 3 material; `_config/` holds shared Layer 3 material
- `output/` folders hold Layer 4 working artifacts that change every run
- Stage contracts (CONTEXT.md) specify exactly which files the agent loads — no guessing, no loading everything

The author's voice, style guide, and TTNW rubric live in the parent blog repo at `../style-guide/` and `../_posts/`. The `_config/` files in this workspace are compressed extracts optimised for per-stage token budgets. When `_config/` and `../style-guide/` conflict, the parent style guide is authoritative.

---

## Routing Table

| Task | Stages | Notes |
|------|--------|-------|
| New post from scratch | 01 → 02 → 03 → 04 → 05 → 06 → 05 → ... → 07 → 08 | Full pipeline. Loop 05↔06 until exit criteria, then copy edit once. |
| Evaluate a topic only | 01 → 02 | Stop after pre-draft TTNW. Go/no-go decision. |
| Write from existing brief | 03 → 04 → 05 → 06 → ... → 07 → 08 | Skip selection. |
| Score an existing draft | 05 | Score only, no revision. |
| Revise a scored draft | 06 → 05 | Revise then re-score. |
| Re-draft (keep research) | 04 → 05 → 06 → ... → 07 → 08 | Re-run draft stage with same research. |
| Copy edit an approved draft | 07 (edit) → human answers queries → 07 (cleanup) → 08 | Set the level: light, medium (default) or heavy. |
| Publish copy-edited text | 08 | Format and output only. Requires stage 07 cleanup to be complete. |

The 05↔06 cycle is the review loop. It is not automated — the human runs stage 05, reads the scores, then decides whether to run stage 06 (revise) or proceed to stage 07 (copy edit). Three cycles without reaching 11.0/14.0 → consider whether the angle is wrong (back to 01) rather than continuing to polish.

### Incremental recompilation

ICM supports re-running individual stages without re-running the full pipeline. If the research is good but the draft doesn't work, re-run stage 04. If the voice guide changes in `_config/`, re-run only the stages that load it (04, 06). If the copy-edit rules or house style sheet change, re-run only stage 07. The stage contracts' Inputs tables are the dependency graph.

---

## Naming Conventions

- Topic slugs: lowercase, hyphenated (`metadata-quality-bottleneck`, `cto-ic-trap`)
- Draft versions: `-draft-v1.md`, `-draft-v2.md`
- Score files: `-score-v1.md`, matching the draft version scored
- Jekyll output: `YYYY-MM-DD-slug.md`
- Research: `-research.md` (single file per post)
- Copy edit: `-copyedit.md`, `-copyedit-notes.md`, `-style-sheet.md` (one set per post; cleanup mode overwrites `-copyedit.md`)

---

## The Edit-Source Principle

After each post is published, review the pipeline:

**Did you make the same kind of edit at the same stage across multiple posts?**

| Recurring edit | Fix in Layer 3 |
|---------------|----------------|
| Keep tightening the opening | Add a stronger opening rule to writing-rules.md |
| Tone drifts formal | Add a register example to voice.md |
| Misses counterarguments | Strengthen Fx1 description in ttnw-rubric.md |
| Generic tech-blog sentences survive to scoring | Sharpen the generic-blog test in writing-rules.md |
| Banned words sneak through | Audit banned-words.md — is the replacement guidance specific enough? |
| Cutting stacked historical precedents | One-precedent and bridge-sentence rules in writing-rules.md; E4 anchor in ttnw-rubric.md |
| Rewriting clever lines as plain ones | Add the pattern to banned-words.md (aphoristic couplets, coined labels) |
| Same copy-edit category dominates the stage 07 change log | Fix the drafter's rules (writing-rules.md, banned-words.md), not the copy editor's |
| Same mechanical decision made at stage 07 on every post | Add it to `_config/house-style-sheet.md` |

Editing output fixes one post. Editing `_config/` fixes every future post.

---

## How to Use This Workspace

```
"I want to write about [topic]."
→ Run stage 01. Review brief. Run stage 02. Go/no-go.

"Brief is good, let's go."
→ Run 03 (research) → 04 (draft) → 05 (score).

"Score is 9.8. Revise."
→ Run 06 (revise) → 05 (re-score). Repeat until ≥11.0 or you decide to publish.

"This is ready."
→ Run 07 (copy edit, medium). Answer the queries. Run 07 cleanup.
→ Run 08 (publish). Commit output to blog repo.

"Just score this draft, don't revise."
→ Run stage 05 only.

"Research is fine but the draft doesn't work."
→ Re-run stage 04. Don't re-run 01-03. (Incremental recompilation.)

"The angle is wrong."
→ Go back to stage 01. The research may still be usable.
```
