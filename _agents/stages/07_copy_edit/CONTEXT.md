# Stage 07: Copy Edit

## Purpose
Copy-edit the approved draft to professional standard after the 05↔06 loop has settled the argument: clarity, coherence, consistency and correctness, in service of the reader. Every change is logged and justified; every substantive problem goes to the author as a query. **This stage does not change the argument, the structure or the running example.**

It runs once, after the loop. Running it inside the loop is wasted work, because stage 06 rewrites paragraphs. It deliberately does not load the TTNW rubric: a copy editor should cut material the rubric would reward.

## Modes
- **edit** (default): full edit, producing the edited draft, style sheet and notes with queries.
- **cleanup**: after the author has answered the queries, apply the answers and produce the final text.

## Level of edit
Set by the human when starting the stage: **light**, **medium** (default) or **heavy**. Definitions in `references/editing-practice.md` › Level of edit. Use heavy when the draft is more than 15% over the brief's word target or the latest score file flags stacked precedents.

## Inputs
| File | Layer | Purpose |
|------|-------|---------|
| Approved draft from `../06_revise/output/` or `../04_draft/output/` | 4 (working) | The text to edit |
| `../01_op_ed_selection/output/[topic-slug]-brief.md` | 4 (working) | Reader, content type, word target, running example |
| `../03_research/output/[topic-slug]-research.md` | 4 (working) | Source record for quotations, numbers, names, dates |
| Latest `../05_score/output/[topic-slug]-score-vN.md` | 4 (working) | Cold-reader answers and open style flags — context only, not a to-do list |
| `stages/07_copy_edit/references/editing-practice.md` | 3 (reference) | Procedure: four Cs, levels, passes, queries, style sheets (~1,800 tokens) |
| `stages/07_copy_edit/references/copy-edit-rules.md` | 3 (reference) | Line-level rules extracted from the style guide (~1,200 tokens) |
| `_config/house-style-sheet.md` | 3 (reference) | House mechanical decisions |
| `_config/banned-words.md` | 3 (reference) | Kill list |

**Cleanup mode also loads:** `output/[topic-slug]-copyedit-notes.md` with the author's answers, and `output/[topic-slug]-copyedit.md`.

**Does not load:** `_config/ttnw-rubric.md`, `_config/voice.md`, `_config/writing-rules.md`. Voice is preserved by editing lightly, not by re-imposing it.

**For anything not covered:** read `../style-guide/index.md`. It is authoritative.

## Process (edit mode)

Follow the passes in `references/editing-practice.md` in order, one concern per pass:

0. **Read-through** — no changes. Note thesis, reader, running example, recurring patterns. Start `[topic-slug]-style-sheet.md`.
1. **Structure** — queries only.
2. **Trim** — heavy only. One precedent per point; cut to within the brief's word target. Log every cut.
3. **Language** — clarity and coherence, with `copy-edit-rules.md`.
4. **Mechanics** — consistency against `house-style-sheet.md` and the post's style sheet.
5. **Correctness** — spawn a fresh subagent with **only** the edited draft and the research file. It checks every quotation word for word, every number, name and date, and every citation against the research record, and returns a table of mismatches. Resolve each: correct to the research record, mark `[SOURCE NEEDED]`, or query. Then check internal consistency (dates, sums, names) and bias-free and legal flags yourself.
6. **Correlate parts** — title, standfirst, headings, footnote markers and notes, links, internal references.
7. **Clean-up read** — the whole piece as the reader will see it. Check every edited sentence for introduced errors.

**Hard limits** (from stage 06, plus the copy editor's):
- Change how it reads, not what it says. Whole precedents may be cut at heavy level; every number, name, date and caveat that stays is kept exactly.
- Never alter code, commands, config values, file paths, identifiers, URLs or words inside quotation marks.
- Never fix structure, thesis or evidence selection — query it.
- Never resolve a fact from memory. The research file is the record.
- Unclear thinking gets `[REVIEW]` and a query, not polish.

## Process (cleanup mode)
Apply each answered query. Delete every `<!-- Qn -->` anchor. Confirm no `[REVIEW]` or `[SOURCE NEEDED]` markers remain; if any do, stop and list them. Update the post's style sheet. Re-run passes 6 and 7 on the changed passages. Unanswered must-answer queries block the stage.

## Outputs
- `[topic-slug]-copyedit.md` → `output/` — the edited text, query anchors inline as `<!-- Qn -->`. In cleanup mode, overwritten with the final text and no anchors.
- `[topic-slug]-style-sheet.md` → `output/` — every decision made for this post.
- `[topic-slug]-copyedit-notes.md` → `output/`, in this order:
  1. **Summary** — level of edit; reader assumed; words and footnotes before → after; number of changes by category (error / house style / clarity / cut); number of queries (must answer / FYI).
  2. **Queries** — numbered, each with the quoted passage, the problem, a proposed fix, must-answer or FYI, and an `Answer:` line for the author.
  3. **Correctness table** — each quotation, number and citation checked: matches / corrected / flagged.
  4. **Change log** — grouped by pass: before → after, with the category. Cuts listed with the reason. Every caveat or qualification removed, or "none".
  5. **Proposed house style sheet additions** — decisions that should apply to future posts.

## Quality Checks (human review gate)
- Answer every must-answer query, then run cleanup mode.
- Skim the change log for anything that altered meaning or voice. If the edit changed what you meant, reject it in the notes and re-run cleanup.
- Approve or reject the proposed house style sheet additions; approved ones go into `_config/house-style-sheet.md` with a line in its additions log.
- Re-run stage 05 (including the cold-reader check) if the edit removed more than 25% of the words or any heading changed. Otherwise proceed to stage 08.
- **Edit-source signal:** if the same change category dominates the log post after post, fix `_config/writing-rules.md` or `_config/banned-words.md` so the drafter stops producing it.
