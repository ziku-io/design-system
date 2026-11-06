---
name: ziku-ui
description: How an app built on @ziku/ui is wired and styled — setup, which block does which job, tokens, icons, copy. Use when writing or changing UI in any app whose package.json depends on @ziku/ui, or when adding or upgrading @ziku/ui in an app.
---

# @ziku/ui in an app

The app composes; the library draws. Every screen is blocks first, primitives
second, app-owned markup last. When something is missing, the gap is reported
upstream (an issue on `ziku-io/design-system`), never patched over from the
app's stylesheet.

This skill ships inside the package, so it describes the version in
`node_modules/@ziku/ui`. Props and types live in
`node_modules/@ziku/ui/dist/index.d.ts`: read the `.d.ts` for a block's exact
API before using it. Live docs: https://ziku-io.github.io/design-system/

## Where to go next

- Setting up, auditing the wiring, or upgrading the tag: [setup.md](setup.md).
- Choosing a block for a job: [blocks.md](blocks.md). Read it before writing
  any markup for a page, list, form, dialog, panel or empty/error state.
- Pages before sign-in (landing, pricing, contact, terms, blog):
  [site.md](site.md) has the shared frame and footer, both landing templates
  and the pages they link to.

## Rules

Each rule has a reason; the reason is what lets you apply it to a case it does
not name.

### Composition

- Reach for a block before a primitive, and a primitive before raw HTML.
  `DataTable` over `<table>`, `Modal`/`Drawer` over a positioned `div`,
  `Select`/`Checkbox`/`Switch` over native controls, `EmptyState` over a
  "No X yet" paragraph. The block already carries the 320px behaviour, focus
  handling, dark tokens and translated words that a hand-rolled copy lacks.
- Blocks render and report; the app fetches, routes and decides. Wire a query
  into a block through `loading`, `error`, `onRetry`. Saves go through
  `onSave`/`onSubmit`/`onAddRow` returning a promise; a rejection keeps the
  user's input on screen.
- Edge panels are `Drawer`. There is no Sheet.
- `Modal` and `Drawer` are controlled: the app owns `open`.
- Every page opens with `PageHeader` (or `Dashboard`, which has its own).

### Colour

- Tokens only: `bg-card`, `text-muted-foreground`, `border-border`. A hex,
  `rgb()`, or `black`/`white` utility in app code is a missing token, and a
  missing token belongs in the library, measured in both themes.
- One set of token names covers light and dark (`data-theme` on `<html>`).
  Write the role, never `dark:`: a `dark:` class keys on the OS, not on the
  reader's choice in `PreferencesMenu`.
- Links: `text-link`, plus `underline underline-offset-4` inside a sentence.
  `text-primary` is a fill colour tuned for text on top of it.
- Status text: `text-{danger|warning|success|info}-fg`. The bare fill
  (`text-danger`) fails contrast. Banners: `bg-x-subtle border-x-border`.
- Selected/active rows: `bg-accent`, a tint.
- Categories with no good/bad meaning (a team, a tag, a service line):
  `text-slot-N` on `bg-slot-N-subtle`, N = position in the app's own list.
  Charts: `chart-1`…`chart-5` in order.
- Emphasis comes from weight or size. The palette stays soft (OKLCH chroma
  ≤ 0.12); a stronger colour is the wrong lever.
- App-wide brand override: redefine `--primary`, `--ring`, `--link` on `:root`
  after the import, with contrast measured against page and card.

### Type and shape

- Geist ships with the stylesheet; add no font links.
- Weights 400, 500, 600. Nothing bolder.
- Page title `text-2xl font-semibold tracking-tight` (PageHeader does it);
  body `text-sm`; secondary `text-sm text-muted-foreground`; row meta
  `text-xs text-muted-foreground`; small uppercase labels are `SectionLabel`
  or `LABEL_CLASS`. Changing numbers get `tabular-nums`; IDs and codes get
  `font-mono`.
- Radius: controls `rounded-md`, surfaces `rounded-lg`, menu rows `rounded-sm`.
- Spacing: page `p-4 md:p-6`, `gap-6` between sections, `gap-5` between form
  fields, `gap-2` between inline controls, `p-4` inside a panel.
- Controls share two heights: default (36px) and `size="sm"` (32px) on Button,
  Input, SelectTrigger, Toggle. A toolbar uses one size throughout.
- Field variants: `variant="ghost"` or `"cell"` on Input, Textarea and
  SelectTrigger together. Style a field through its props, since `FormControl`
  replaces `data-slot` and a selector keyed on it silently stops matching.

### Icons

- `@phosphor-icons/react`, `*Icon` names (`HouseIcon`). Weight `regular`;
  `fill` only for a selected state.
- Size with a class: `size-3.5` beside `text-xs`, `size-4` beside `text-sm`,
  `size-6` in an empty or status screen. Buttons and menu items size icons
  already.
- Blocks take the component: `icon={WalletIcon}`.
- Muted is `text-muted-foreground`. An icon-only button carries an
  `aria-label`; an icon beside text is `aria-hidden`.

### Words

- The library's own words come from its dictionary. Wrap `UIStringsProvider`
  once (`ptPT` for European Portuguese) and override per key; a block prop
  like `title` still wins.
- App copy follows the app's own i18n. Buttons are verbs, errors say what
  happened and what fixes it, empty states say what to do in one line, toasts
  are past tense ("Invoice sent.").

### Small screens

- Every screen works at 320px. The blocks do; app layout has to as well. Rows
  of unknown length wrap or scroll, wide tables scroll inside `DataTable`, and
  side-by-side panels stack below `md`.

### Overriding the library

- App CSS restyles app markup only. A rule keyed on `[data-slot=…]`, a library
  class, or `!important` against a block is a fork that breaks on the next
  release. When a block cannot do what the screen needs, use its props or
  `className`, and if that is not enough, open an issue upstream and say so in
  the PR.
