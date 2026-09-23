# Stage 07: Publish

## Purpose
Convert the final draft into Jekyll-ready markdown with correct frontmatter. Output a file committable to the blog repo.

## Inputs
| File | Layer | Purpose |
|------|-------|---------|
| Final approved draft from `../06_revise/output/` or `../04_draft/output/` | 4 (working) | The draft to format |
| `../01_op_ed_selection/output/[topic-slug]-brief.md` | 4 (working) | For metadata (audience, content type) |
| `stages/07_publish/references/jekyll-template.md` | 3 (reference) | Frontmatter format, conventions |
| `_config/pre-publish-checklist.md` | 3 (reference) | Final gate checks |

## Process

### Frontmatter
```yaml
---
layout: post
title: "[from final draft H1, sentence case, quoted]"
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
Run every item from `_config/pre-publish-checklist.md`. Report results. Flag failures.

### Output filename
`YYYY-MM-DD-[slug].md` — matches Jekyll convention in the parent blog repo.

## Outputs
- `YYYY-MM-DD-[slug].md` → `output/`

## Quality Checks (human review gate)
- Frontmatter correct?
- First paragraph still good after formatting?
- Standfirst follows the two-sentence format for this content type (see `../style-guide/head-matter.md`)?
- Ready to copy to `../_posts/` and commit.
