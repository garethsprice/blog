# Stage 07: Copy Edit

## Purpose
Copy-edit the approved draft to professional standard after the 05↔06 loop has settled the argument: clarity, coherence, consistency and correctness, in service of the reader. Every change is logged and justified; every substantive problem goes to the author as a query. **This stage does not change the argument, the framing or the running example.** At heavy level it may cut or merge sections, but only as long as the message skeleton holds.

It runs once, after the loop. Running it inside the loop is wasted work, because stage 06 rewrites paragraphs. It deliberately does not load the TTNW rubric: a copy editor should cut material the rubric would reward.

## Modes
- **edit** (default): full edit, producing the edited draft, style sheet and notes with queries.
- **cleanup**: after the author has answered the queries, apply the answers and produce the final text.

## Level of edit
Set by the human when starting the stage: **light**, **medium** (default) or **heavy**. Definitions in `references/editing-practice.md` › Level of edit. Use heavy when the draft is above the bottom third of the length range for its content type, when the latest score file flags stacked precedents, or when the author asks. Heavy is an aggressive cut — 30–40% of body words — that must preserve the message; follow `references/editing-practice.md` › Heavy cutting.

## Preconditions — stop and ask if any fails
- **Content type.** The brief must state it (essay, framework, practical guide, etc.). The standfirst format, headings, length range and worked-example rule all depend on it. If it is missing, stop and ask the human; do not guess.
- **Matching score file.** The latest score file must be for the draft being edited: compare its reported word count, headings and quoted phrases with the draft. If they don't match, ignore the score file, note that it is stale, and carry on without it.

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
2. **Trim** — heavy only. Write the message skeleton, cut down the ladder to 30–40% shorter and the bottom third of the content-type range, run the deletion test, then verify with the reverse outline and a fresh cold-reader subagent. Log every cut with its rung.
3. **Language** — clarity and coherence, with `copy-edit-rules.md`.
4. **Mechanics** — consistency against `house-style-sheet.md` and the post's style sheet.
5. **Correctness** — spawn a fresh subagent with **only** the edited draft and the research file. It checks quotations word for word, numbers, dates, names, attributions, and whether each source supports its sentence, and returns a table of mismatches. Bibliographic formatting is out of its scope. Resolve each: correct to the research record, mark `[SOURCE NEEDED]`, or query. Then check internal consistency (dates, sums, names) and bias-free and legal flags yourself.
6. **Correlate parts** — title, standfirst, headings, footnote markers and notes, links, internal references.
7. **Clean-up read** — the whole piece as the reader will see it. Check every edited sentence for introduced errors.

**Hard limits** (from stage 06, plus the copy editor's):
- Change how it reads, not what it says. At heavy level, whole precedents, paragraphs and sections may be cut or merged as long as the message skeleton holds; every number, name, date and caveat that stays is kept exactly.
- Never alter code, commands, config values, file paths, identifiers or URLs. Never change words inside quotation marks; a quotation may be replaced by an exact-meaning paraphrase with the attribution kept.
- Never reframe: no new opening, running example or content type, and no reordering of the argument — query it.
- Never resolve a fact from memory. The research file is the record.
- Unclear thinking gets `[REVIEW]` and a query, not polish.

## Process (cleanup mode)
Apply each answered query. Delete every `<!-- Qn -->` anchor. Confirm no `[REVIEW]` or `[SOURCE NEEDED]` markers remain; if any do, stop and list them. Update the post's style sheet. Re-run passes 6 and 7 on the changed passages. Unanswered must-answer queries block the stage.

## Outputs
- `[topic-slug]-copyedit.md` → `output/` — the edited text, query anchors inline as `<!-- Qn -->`. In cleanup mode, overwritten with the final text and no anchors.
- `[topic-slug]-style-sheet.md` → `output/` — every decision made for this post.
- `[topic-slug]-copyedit-notes.md` → `output/`, in this order:
  1. **Summary** — level of edit; reader assumed; words and footnotes before → after; number of changes by category (error / house style / clarity / cut); number of queries (must answer / FYI). At heavy level, also the message skeleton and the cold-reader answers, so the author can confirm the message held.
  2. **Queries** — numbered, each with the quoted passage, the problem, a proposed fix, must-answer or FYI, and an `Answer:` line for the author.
  3. **Correctness table** — each quotation, number and citation checked: matches / corrected / flagged.
  4. **Change log** — grouped by pass: before → after, with the category. Cuts listed with the reason. Every caveat or qualification removed, or "none".
  5. **Proposed house style sheet additions** — decisions that should apply to future posts.

## Quality Checks (human review gate)
- Answer every must-answer query, then run cleanup mode.
- Skim the change log for anything that altered meaning or voice. If the edit changed what you meant, reject it in the notes and re-run cleanup.
- Approve or reject the proposed house style sheet additions; approved ones go into `_config/house-style-sheet.md` with a line in its additions log.
- Re-run stage 05 (including the cold-reader check) if the edit removed more than 25% of the words or any heading changed — at heavy level, always. This confirms the score held; it does not reopen the 05↔06 loop. If the score falls below 11.0, check the cuts in the change log and restore what was lost in cleanup mode. Don't run stage 06, which would undo the edit. Otherwise proceed to stage 08.
- **Edit-source signal:** if the same change category dominates the log post after post, fix `_config/writing-rules.md` or `_config/banned-words.md` so the drafter stops producing it.
