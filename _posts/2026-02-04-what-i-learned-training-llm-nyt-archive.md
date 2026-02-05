---
layout: post
title: "What I Learned Training an LLM on the New York Times Archive"
date: 2026-02-04
---

At The New York Times, I was a founding member of the internal generative AI working group. One of our most ambitious projects was TimesMachineAI -- an internal LLM trained on the Times' vast archive. Here's what that experience taught me about bringing AI into a legacy organization.

<!--more-->

## Start with a real problem

The temptation with any new technology is to build a solution in search of a problem. We deliberately avoided that. The Times archive is one of the most comprehensive records of modern history, but navigating it was difficult. We had a clear user need before we wrote a line of code.

## Data quality is the whole game

The Times has been publishing since 1851. That's an extraordinary corpus -- but it's also OCR'd text from microfilm, decades of evolving style guides, and metadata that ranges from meticulous to nonexistent. We spent more time on data preparation than on model training. This is true for every AI project I've worked on since.

## Organizational trust takes longer than model training

Getting buy-in from editorial, legal, and leadership was as complex as the technical work. Newsrooms are rightfully cautious about AI -- there are real questions about accuracy, attribution, and editorial integrity. The technical work was the easy part. Building trust was the real engineering challenge.

## Internal tools are an ideal first use case

We were building for internal users -- journalists, researchers, editors. This gave us a controlled environment to iterate, gather feedback, and improve without the risks of a public-facing product. If you're introducing AI into an organization, start internal.

## The hackathon that changed everything

Our team won the internal Maker Week Hackathon, which gave the project visibility and momentum. Sometimes the best way to advance an ambitious project is to ship a compelling demo. Organizational change often follows demonstration, not documentation.

These lessons have directly shaped how I approach AI product development at CorralData today. The technology has advanced rapidly, but the fundamentals haven't changed: start with a real problem, respect your data, and invest as much in organizational alignment as you do in your models.
