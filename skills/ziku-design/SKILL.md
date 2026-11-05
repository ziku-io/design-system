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
