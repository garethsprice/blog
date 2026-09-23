# Stage 08: Publish

## Purpose
Convert the copy-edited final text into Jekyll-ready markdown with correct frontmatter. Output a file committable to the blog repo. Formatting only — wording changes belong in stage 07.

## Inputs
| File | Layer | Purpose |
|------|-------|---------|
| `../07_copy_edit/output/[topic-slug]-copyedit.md` (after cleanup mode) | 4 (working) | The final text to format |
| `../07_copy_edit/output/[topic-slug]-copyedit-notes.md` | 4 (working) | Confirms queries closed and correctness checked |
| `../01_op_ed_selection/output/[topic-slug]-brief.md` | 4 (working) | For metadata (audience, content type) |
| `stages/08_publish/references/jekyll-template.md` | 3 (reference) | Frontmatter format, conventions |
| `_config/pre-publish-checklist.md` | 3 (reference) | Final gate checks |

## Process

### Frontmatter
```yaml
---
layout: post
title: "[from final draft H1, title case per _config/house-style-sheet.md, quoted]"
description: "[standfirst: 2 sentences — essay: status shift, then gap + consequence; practical guide: reader's decision, then source of the advice. Plain, under 160 chars where possible]"
created_date: YYYY-MM-DD
updated_date: YYYY-MM-DD
---
```

### Body
- Strip review comments, TTNW scores, revision notes
- Clean H2/H3 structure
- Add alt text placeholders for images
- Ensure all footnotes use APA format with links
- No closing CTA unless the topic warrants a specific one (not generic)

### Pre-publish checklist
Refuse to run if the copy-edit notes show any unanswered must-answer query, or the text still contains `<!-- Q`, `[REVIEW]` or `[SOURCE NEEDED]`.

Run every item from `_config/pre-publish-checklist.md`. Items the stage 07 notes already verify (correctness table, style sheet) can be confirmed from the notes. Report results. Flag failures.

### Output filename
`YYYY-MM-DD-[slug].md` — matches Jekyll convention in the parent blog repo.

## Outputs
- `YYYY-MM-DD-[slug].md` → `output/`

## Quality Checks (human review gate)
- Frontmatter correct?
- First paragraph still good after formatting?
- Standfirst follows the two-sentence format for this content type (see `../style-guide/head-matter.md`)?
- Ready to copy to `../_posts/` and commit.
