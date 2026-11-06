---
name: ziku-design
description: Design and build a screen, flow or feature UI in an app that depends on @ziku/ui, composed from its blocks. Use when adding a page, redesigning one, or turning a brief or mockup into UI in such an app.
---

# Designing a screen on @ziku/ui

The design system already made the visual decisions: palette, type, radius,
spacing, motion. Designing here means choosing structure, which blocks hold
which job, and the states the screen passes through. A screen that needs a new
look is a design-system change, not an app change.

Load the `ziku-ui` skill first (or read
`node_modules/@ziku/ui/skills/ziku-ui/SKILL.md`). Its rules and
[blocks.md](../ziku-ui/blocks.md) are the vocabulary for every step below.

## 1. Brief

Write three lines in the reply:

- Who arrives, from where, and the one thing they came to do.
- The records on screen: their type, roughly how many, and whether the app
  fetches, edits or creates them.
- Mode: new screen, redesign that keeps the information architecture, or
  redesign that changes it. Redesign: list what must survive (routes, field
  names and order, nav labels, analytics events) before changing anything.

Done when all three lines exist and every record type names its source.

## 2. Map jobs to blocks

A table in the reply, one row per region of the screen: job → block → why.
Every row names a block or primitive from `blocks.md`. A row with app-owned
markup says which block came closest and what it lacked; that gap is also an
upstream issue to propose.

Then the states, one line each: loading, empty, failed, partial (some panels
failed), saving, save rejected, and the 320px layout. A state the screen cannot
reach is written as "n/a" with the reason.

Done when every region and every state has a line.

## 3. Build

- Signed-in pages go inside the existing `AppShell`; add the nav item (with an
  icon) and a `CommandMenu` entry for the new route.
- Start the page with `PageHeader` (or `Dashboard`).
- Wire each query into its block through `loading`/`error`/`onRetry`, and each
  write through the block's callback returning a promise.
- Copy follows the `ziku-ui` Words rules. Library words come from the
  dictionary, app words from the app's i18n.
- Read the block's props in `node_modules/@ziku/ui/dist/index.d.ts` before
  using it. Its docs page at https://ziku-io.github.io/design-system/ shows
  each state rendered.

## Public pages (landing, pricing, contact, legal, blog)

Start from [site.md](../ziku-ui/site.md). Ziku products are mostly technical
(AI, crypto, distributed systems, security, infrastructure) and their reader is
an engineer; the generic template covers everything else.

Before writing a word, collect the facts: what it is, what it runs on, and
measured numbers with how they were measured. A section with no fact behind
it is cut, not padded.

- **Hero title** names the thing in under eight words: "A queue that survives
  losing a zone". Never a slogan ("The future of infrastructure"), a question,
  a colon headline, or "AI-powered".
- **Numbers, not adjectives.** "38 ms p50, 8B model on one H100" instead of
  "blazing fast". No "secure", "scalable", "enterprise-grade" without the
  mechanism next to it.
- **One ask.** The hero's primary button, the header's button and the
  `CtaBand` use the same verb ("Run a node"). Docs is the secondary. A
  technical product puts its install `command` under the buttons.
- **Every section is a picture and a claim.** Each `FeatureSplit` row pairs one
  capability with the thing that proves it: the terminal session, the chart,
  the table of nodes, in a `WindowFrame` or `Terminal`. Build those from the
  library's components with the product's real output, never a mocked-up
  generic dashboard.
- **Detail lives elsewhere.** The landing page covers what it is, proof, how it
  works (three rows), code, what it runs on, three questions, and the ask.
  No price on a landing page, ever: pricing is its own page with the plan
  comparison. At most one testimonial, from a real named customer, with the
  number it is about.
  Full pricing, the threat model, the architecture and the changelog are
  pages, reached through `PageLinks`.
- **Proof is real or absent.** No invented benchmarks, customers or
  audit claims. A number in the copy needs a source the team can show.
- **No decoration the blocks do not draw.** No gradients, glow, blobs, emoji,
  3D renders, stock photos or illustrations. The pictures are product output:
  `Terminal`, `WindowFrame` around real components, `CodeBlock`, a real
  screenshot, or the ASCII field behind an AI hero.
- **One frame.** Every public page uses the same `SiteLayout` header and the
  same `SiteFooter` element, built once. A page that changes its nav or its
  footer reads as a different site.
- **No icon in a box.** An icon sits inline before its label or title, at
  `size-4`, unframed. A glyph in a bordered or tinted tile is the most
  recognisable template pattern there is; the blocks no longer draw one.
- Legal pages state what the business has decided (retention,
  notice period, audit date, disclosure address). Leave a section out rather
  than ship boilerplate nobody agreed to, and have a person approve the text.

## 4. Check

- Typecheck and the app's tests.
- Run the `ziku-review` checklist against the diff.
- Open the screen in a browser at 320, 768 and 1440 wide, in light and dark
  (`PreferencesMenu` → Appearance), at 150% zoom. Tab through it: focus is
  visible, order follows the reading order, Escape closes overlays.
- Force each state from step 2 (offline, empty fixture, rejected save) and
  confirm it renders the block's state, not a blank region.

Done when every state from step 2 was seen in the browser, and the reply lists
any upstream gaps found.
