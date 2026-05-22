---
name: medium-personal-article
description: Write personal, narrative-driven technical articles for Medium in a relatable storytelling style. Use when user wants to write a Medium article, republish blog post to Medium, create a personal technical article, or mentions "write in personal style" / "make it narrative" / "storytelling style".
---

# Medium Personal Article Skill

Write personal, narrative-driven technical articles for Medium. Match the voice and style of a real developer sharing real experience — not a corporate blog, not a tutorial. This skill is for **parasite SEO** and **content distribution** on Medium.

## When to Use

- User wants to write a new Medium article from original content
- User wants to republish existing blog/content to Medium
- User wants to transform technical content into a personal narrative
- User mentions: "personal style", "narrative", "storytelling", "relatable", "make it human"

## Tone and Voice

### What This Style Sounds Like

Real developer, real problem. Written by someone who actually shipped the code, hit the bug, and learned the lesson.

**Voice characteristics:**

- First person singular ("I built", "I found", "I fixed")
- Honest reactions mixed with technical detail ("I felt good. But something kept bothering me.")
- Present-tense scene openings ("It was a Tuesday. I was making coffee when the alert came in.")
- Rhetorical questions for reflection ("How many other places did I write this assumption?")
- Short punchy sentences for impact, mixed with longer technical passages
- Vulnerability and self-doubt acknowledged ("That was a mistake.")
- Blockquotes for key realizations and lessons
- Personal opinions and gut feelings ("Something in my gut said...")
- The reader is a peer, not a student

**NOT this style:**

- Passive voice ("the code was written", "the bug was fixed by")
- Corporate polish ("we are excited to announce")
- Tutorial tone ("in this article, we will learn")
- Listicle structure without narrative
- Tutorial-first ("here's how to do X") — story-first, lesson second

### Style Reference

**Opening hook:**

- Scene-setting with sensory detail or time ("It was a Tuesday.")
- Problem emerges from normalcy ("An ordinary one." then BOOM, alert)
- Direct entry into the problem, no preamble

**Section headers:**

- Emotionally charged, not descriptive
- Examples:
  - "The Line That Looked Reasonable" (not "The Bug")
  - "The Audit That Changed Everything" (not "Database Audit")
  - "I Did Not Want to Stop at 'The Code Looks Right'" (not "Testing")

**Body structure:**

- Story → Problem → Attempt → Failure → Deeper Investigation → Solution → Proof → Lesson
- Technical code blocks integrated naturally into narrative
- "I tried X. It worked. But..." rhythm
- Questions that the narrative then answers

**Closing:**

- Philosophical punchline drawn from the experience
- Optional CTA linking to product/site
- Something worth remembering, not a summary

### Example Transformations

**Descriptive header → Narrative header:**

- "Database Constraints" → "The Migration That Should Have Existed Earlier"
- "Testing" → "I Did Not Want to Stop at 'The Code Looks Right'"
- "Concurrency Issues" → "The Pattern I Thought Was Safe"

**Technical opener → Scene-setting opener:**

- "This article discusses race conditions in webhook handlers..." → "It was a Tuesday. I was making coffee when the alert came in."

**Clinical lesson → Personal lesson:**

- "Use unique constraints to enforce singleton state" → "I was relying on code-level logic where I needed database-level guarantees. That was a mistake."

## Article Structure

### Standard Sections

1. **Opening Hook** (1-2 paragraphs)
   - Scene-setting moment
   - Problem introduced
   - Present tense, first person

2. **The Line That Looked Reasonable** (1-2 paragraphs)
   - Show the bad code
   - Explain why it looked right
   - Reveal why it failed

3. **The First Fix** (1-2 paragraphs)
   - Initial solution
   - Why it worked but didn't feel complete
   - Gut feeling that something else was wrong

4. **The Deeper Investigation** (2-3 paragraphs)
   - Audit findings
   - The distinction between valid duplicates and invalid state
   - The harder question asked

5. **The Real Fix** (3-4 paragraphs)
   - Database constraints
   - Concurrency patterns
   - Why the first approach wasn't enough

6. **Proof** (1-2 paragraphs)
   - Testing approach
   - Results (with actual numbers)
   - Verification beyond HTTP 200

7. **What I Learned** (2-3 paragraphs)
   - Personal reflection section (not just bullets)
   - Named subsections: "What I Learned About X"
   - Concrete takeaways integrated into narrative

8. **Closing** (1 paragraph)
   - Philosophical statement
   - One sentence worth remembering
   - Optional CTA

## Formatting Guidelines

### Code Blocks

```python
# Show the actual code that caused the problem
# Keep it short (3-10 lines max per block)
# Add brief context before/after
```

### Ellipsis Separator (...)

Medium uses `...` (three dots, centered on its own line) as a structural pause between sections. Use it to:

- Break up major sections with dramatic pause
- Signal transition between parts of the narrative
- Separate emotional beats from technical sections

**Use between sections and within flow:**

```
## The First Fix Felt Too Easy

...

## The Audit That Changed Everything
```

```
I felt good.

...

But something kept bothering me.
```

Use 2-4 times per article. Too many breaks the rhythm.

### Blockquotes

Use for:

- Key realizations ("The bug wasn't in the data. It was in the assumption.")
- Questions asked to self ("How many other places did I write this assumption?")
- Lesson statements ("Technical debt is not free. It compounds.")

### Lists

Avoid bare bullet lists in lessons. Integrate into narrative:

**Instead of:**

```
- Use unique constraints
- Use existence checks
- Use upsert semantics
```

**Do:**

```
If the domain allows many rows, use many-row queries or existence checks. If the domain requires one row, enforce it with a unique constraint. If concurrent creates are normal, use conflict-aware inserts.
```

### Section Headers

Use H2 (`##`) for major sections. No more than 6-8 sections total.

## SEO and Canonical

- Include product/tool link naturally (1-2 mentions in body, 1 in CTA)
- Target keywords: the technical problem being solved
- Canonical: If republishing from own site, set canonical to original URL in Medium settings

## Quick Reference

| Element | Personal Style                     | Avoid                                    |
| ------- | ---------------------------------- | ---------------------------------------- |
| Opening | Scene-setting, time, sensory       | "In this article...", "Today we will..." |
| Voice   | "I", "my", "I found", "I felt"     | "we", "the developer", passive           |
| Headers | Emotionally charged                | Descriptive labels                       |
| Code    | Integrated into story              | Dumped in blocks without context         |
| Lessons | Narrative "What I Learned About X" | Bullet lists                             |
| Closing | Philosophical punchline            | Summary recap                            |
| CTA     | Subtle product mention             | Hard sell                                |
