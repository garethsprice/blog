---
layout: post
title: "Organisational Trust Is the Binding Constraint on Enterprise AI"
description: "Training an LLM on the New York Times archive was technically straightforward. Earning the newsroom's trust was the actual engineering problem."
created_date: 2026-02-04
updated_date: 2026-02-09
---

At The New York Times, I was a founding member of the internal generative AI working group. Prior to that, one of our most ambitious projects was TimesMachineAI — an internal LLM trained on the Times archive. The technical work was not where we spent most of our effort.

**Start with a real problem.** The temptation with any new technology is to build a solution looking for a problem. The Times archive is one of the most comprehensive records of modern history, but navigating it was difficult. We had a clear user need before we wrote a line of code.

**Data quality is the whole game.** The Times has been publishing since 1851. That is an extraordinary corpus — but it is also OCR'd text from microfilm, decades of evolving style guides, and metadata ranging from meticulous to nonexistent. We spent more time on data preparation than on model training. This has been true of every AI project I have worked on since.

**Organisational trust takes longer than model training.** Getting buy-in from editorial, legal, and leadership was as complex as the technical work. Newsrooms are cautious about AI for good reason — accuracy, attribution, and editorial integrity are not abstract concerns there. Building trust across those groups was the binding constraint, not compute or architecture.

**Internal tools are the right first deployment.** We built for journalists, researchers, and editors. A controlled environment let us iterate and gather feedback without the risks of a public-facing product. If you are introducing AI into an organisation with high editorial or reputational standards, start internal.

**Demos move organisations faster than documents.** Our team won the internal Maker Week hackathon, which gave the project visibility and momentum. Organisational change follows demonstration, not documentation.

These lessons shaped how I approach AI at CorralData. The technology has advanced, but the fundamentals hold: start with a real problem, respect the data, and invest as much in organisational alignment as in the models.