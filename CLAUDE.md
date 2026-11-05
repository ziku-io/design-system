# @ziku/ui

Shared React component library for every Ziku product. shadcn/ui components
themed after GitHub, plus ready-made pages and flows (auth, app shell, data
table). Consumed by `ziku-io/app-template` as a git dependency.

## Verify before claiming done

```bash
pnpm typecheck
pnpm test              # renders every story in jsdom, fails on any React error or warning
pnpm build             # library -> dist/
pnpm build-storybook
```

`pnpm test` is the real gate: it composes and renders all stories. It is what
catches missing providers, bad icon imports and invalid props. Adding a
component without a story means adding untested code.

## Non-obvious rules

**Icons are Phosphor, always.** shadcn generates `lucide-react` imports; rewrite
them to `@/lib/icons`, which re-exports Phosphor under the lucide names so
upstream diffs stay small. Add an alias there if one is missing. Never install
lucide.

**Adding a shadcn component:**

```bash
pnpm dlx shadcn@latest add <name>
```

then: swap the lucide import, write `<name>.stories.tsx` beside it, and export it
from `src/index.ts`. Check whether `add` overwrote a neighbouring file — it
sometimes rewrites `dialog.tsx` and reintroduces lucide.

**Every user-facing string goes in the dictionary.** `src/lib/strings.tsx` holds
one flat, typed record of every word a block renders, English as the default; an
app wraps `UIStringsProvider` once and overrides any subset. A block reads its
group with `useStrings()`. Never write a literal into a block — not a label, not
a placeholder, not an `aria-label`, not a zod message. That is why the auth
schemas are factories over the strings (`loginSchema(t)`) rather than constants,
and why props like `title` keep winning over the provider. `defaultStrings` is
exported so an app can see what it is overriding.

`components/ui/` is covered too. Most of its text arrives as children, but the
few words a primitive renders on its own (close buttons, pagination, the
sidebar toggle, the command palette's hidden title) read the `ui` group. They
are nearly all screen-reader labels, which is why the no-literal test scans
that directory as well: nobody sighted notices one left in English.

`ptPT` (`src/lib/strings-pt.ts`) is a complete European Portuguese dictionary,
typed as the whole `UIStrings`, so a new key breaks the build until it is
translated there too. Numbers and dates inside a dictionary are formatted with
that dictionary's locale.

**Every primitive has to survive 320px.** An app should not have to override a
library class to make a screen work on a phone. Three rules follow from that,
and each one is already load-bearing somewhere:

- A floating surface caps against the viewport, not just its own width.
  `PopoverContent` carries `max-w-[calc(100vw-2rem)]` and
  `max-h-(--radix-popover-content-available-height)`, which is what lets
  `DataTable` keep asking for `w-88` (352px, wider than a small phone) without
  the panel leaving the screen. Dropdown and Select already had the pattern.
- Every floating surface opens below its trigger, aligned to its start edge,
  4px away, and keeps a 16px gutter (`collisionPadding`) when it has to shift
  to stay on screen. `SelectContent` is `popper`, not Radix's `item-aligned`,
  which laid the list over the trigger and hid the field that was clicked.
- A surface that can hold arbitrary content caps its height in `dvh` and
  scrolls. Without it a tall dialog centres itself and puts its own header
  above the top of the screen, out of reach: measured at -481px on a 478px
  viewport before `DialogContent` got `max-h-[calc(100dvh-2rem)]`.
- A row of unknown length wraps or scrolls. `PaginationContent` wraps,
  `TabsList` scrolls inside `max-w-full`. Both are set by the consumer's data,
  so neither can be assumed short.

`Sidebar` takes `rootClassName` as well as `className`: `className` reaches only
the fixed pane, so `print:hidden` there leaves the spacer behind as an empty
gutter. `AppShell`'s `classNames.sidebar` goes to `rootClassName` for exactly
that reason - a consumer used to hide this with `!important` on our `data-slot`
attributes, which made any restructure here a silent break over there.

`SidebarInset` needs its `min-w-0`. It is a flex child, so it defaults to
`min-width: auto` and a wide table inside it stretches the row rather than
scrolling: the inset claimed the full 983px next to a 256px sidebar instead of
the 727px left over. This one bites at desktop width, not on a phone, because
the sidebar is a slide-in panel below `md`.

**There is no Sheet.** An edge panel is `Drawer` (`src/blocks/drawer/`), which
has `Modal`'s API: a translated title bar, a body that scrolls, a footer that
does not, and focus on the first field. The raw shadcn `Sheet` left every app
to assemble its own header and footer, so it was removed. The sidebar's phone
panel and `Drawer` share `EDGE_PANEL` and `SCRIM` in `src/lib/surfaces.ts`, and
Modal and Drawer share `focusFirstField` in `src/lib/focus.ts`.

**Preferences live here, not in the app.** `src/lib/preferences.ts` holds the
zoom store (`useZoom`) and `antiFlashScript`,
the import-free string a consumer's build inlines into `index.html`. Both keys
go through `storageKey()`. Nothing in the library may hardcode an app's name.

**Controls share two heights.** `size="sm"` is h-8 and the default is h-9 on
Button, Input, SelectTrigger and Toggle alike, so a toolbar row lines up with
no override. On `Input`, `size` is that height, not the HTML attribute: width
always comes from CSS here.

**Three fields share two variants.** `Input`, `Textarea` and `SelectTrigger`
each take `variant="ghost" | "cell"`, and all three read the same strings from
`src/lib/field-variants.ts`. They sit next to each other on one form, so a
`ghost` that means one thing on the text field and another on the select is
worse than no variant at all. The bordered default is `FIELD_DEFAULT` in the
same file, applied as a class. Never style a field by `[data-slot="input"]`:
`FormControl` replaces the slot, and a stylesheet rule keyed on it left every
field inside a form transparent.

**Light and dark are one set of token names.** Light lives on `:root`, dark on
`:root[data-theme="dark"]` in the same file. `useTheme` (light, dark or system,
in `src/lib/preferences.ts` beside zoom) and `antiFlashScript` set
`data-theme` on `<html>`; components never carry a `dark:` variant, which
would key on the OS instead of the reader's pick, and `design-rules.test.ts`
refuses one. `palette.test.ts` runs every check against both blocks, so a new
token needs a value in each. The one place dark gives ground: five slots
cannot sit 20 deltaE apart as light text clear of every status hue, so the
dark floor there is 12, and the comment in `globals.css` says why.

**Two materials, both in `src/lib/surfaces.ts`.** `OVERLAY` for anything that
floats (dialog, popover, menus, listboxes, tooltips), `SURFACE` for
anything on the page (card, stat tile, dashboard panel). Neither is glass: a
translucent dialog let the page behind show through its body. The blur stays
only on chrome content scrolls under, the shell header and the sidebar. The
scrim behind a dialog is `bg-overlay`, never `bg-black/50`.

**The palette is soft on purpose.** Text is a gray (`#44484e`, about 8:1 on the
page), not black, and no token goes past OKLCH chroma 0.12: brand 0.12, status
fills 0.06 to 0.10, chart series 0.09, slots 0.09. A new colour stays under
those caps and still passes `palette.test.ts`. Pushing the chroma up to win a
contrast check is the wrong fix; move lightness instead.

Filled buttons do not use the solid fills. `default`, `danger`, `success` and
`warning` read `--{x}-button` (a light tint) with `--{x}-button-foreground`
(dark text in the same hue), and hover with `brightness-95`. The solid
`--primary` is for small marks: checkboxes, switches, progress, a calendar day.

The Storybook chrome is themed from `.storybook/theme.ts`. It copies a handful
of tokens as hex, because the manager page never loads `globals.css`;
`theme.test.ts` fails if a copy drifts.

**Type is Geist, with Geist Mono**, self-hosted via
`@fontsource-variable/geist` and `@fontsource-variable/geist-mono`, runtime
dependencies imported by `globals.css` like `tw-animate-css`. Not Inter: the
house design rule bans it as a default. Icon, type and colour conventions are
written down in `src/docs/foundations.mdx`; change that page when you change a
convention.

**The two sidebar collapse modes animate differently.** `offcanvas` slides the
fixed pane on `transform` and leaves the spacer's width unanimated; `icon`
changes the pane's own width (16rem to 3rem), which no transform can express, so
it still animates `width`. They shared one model until #27, and a collapse
re-laid-out the whole document for 200ms. Do not merge them back.

**One brand accent, a muted blue-purple** (`#706cbb`). It drives `--primary`,
`--ring` and `--link`. The sidebar's active item and every other
"selected" row use `bg-accent`, a tint, not the solid fill. Use `text-link` for inline
links, never `text-primary`: the fill is tuned for white text on top of it, the
link colour for reading against the page. A link inside a sentence also needs
`underline underline-offset-4` — colour alone fails WCAG 1.4.1 and the a11y
addon flags it.

**Status colours come in fours.** `--x` (fill), `--x-foreground` (text on the
fill), `--x-fg` (text on a page background), `--x-subtle`/`--x-border` (banner),
for `danger`, `warning`, `success` and `info`.

- **Never use the fill as text.** `text-danger` is 3.8:1 on a dark card and
  fails. That is what `--danger-fg` is for.
- `--warning-foreground` is dark, not white: white on any usable amber tops out
  near 3:1.
- `--destructive` is an alias of `--danger` so upstream shadcn snippets work.
  New code says `danger`.

**Measure, do not eyeball.** Every colour pair in the theme was checked to
4.5:1. If you change one, compute the ratio against page and card backgrounds before committing.

**No component styling in `globals.css`.** It held an unlayered block of
`[data-slot]` overrides; every one moved into the component that owns it. We
own these files: change the classes, do not override them from a stylesheet.

**Package shape.** `tw-animate-css` is a runtime dependency, not a dev one — the
shipped stylesheet imports it. Consumers compile `globals.css` themselves, so
`tailwindcss` is a peer.

**`dist/` is committed.** Consumers install this over a git tarball, and a
`prepare` script meant every install rebuilt the whole library: it needed the
full devDependency tree to resolve, an `allowBuilds` allowlist on pnpm 11, and
it broke the day a transitive dep tripped pnpm's supply-chain age policy.
Shipping the build removes all of that. **Run `pnpm build` and commit `dist/`
with any source change** — CI fails if it is stale. The build is reproducible,
so a clean tree means it is current.

## Releasing

Apps pin a tag, so a tag is a promise: once pushed, someone's lockfile points at
it forever. Never move or delete one — cut the next version instead.

```bash
pnpm release patch --dry-run   # every check, nothing written
pnpm release patch             # 0.1.0 -> 0.1.1
pnpm release minor
pnpm release 1.0.0             # an exact version
```

The script refuses to release from a branch other than main, a dirty tree, a
tree that has diverged from origin, a version at or below the highest tag, a
version below package.json, or a tag that already exists locally or on origin.
It then runs typecheck and tests, rebuilds `dist/`, commits, tags and pushes.
The tag triggers a workflow that re-verifies all of it and publishes the GitHub
Release.

Apps then pin it:

```jsonc
"@ziku/ui": "github:ziku-io/design-system#v0.1.0"
```

## Layout

```
src/components/ui/   shadcn components, each with a co-located .stories.tsx
src/blocks/auth/     AuthLayout, LoginForm, RegisterForm, ForgotPasswordForm
src/blocks/shell/    AppShell (sidebar nav, ⌘K palette, user menu)
src/blocks/data/     DataTable (TanStack v9), Kanban, saved views
src/blocks/modal/    Modal (title bar, scrolling body, footer)
src/blocks/search/   CommandMenu (cmdk), SearchTrigger
src/blocks/page/     PageHeader, EmptyState, StatTile
src/blocks/dashboard/ Dashboard, DashboardPanel, ActivityList
src/docs/            MDX docs pages
src/lib/             cn, Link/LinkProvider, UIStrings, Phosphor icon aliases
src/styles/          globals.css — GitHub Primer tokens
```

**A `DataTable` body over 100 rows is windowed** (`@tanstack/react-virtual`).
Two spacer `<tr>`s hold the scroll height rather than absolute positioning,
because a row taken out of flow stops sizing the columns and the grid collapses
to whatever the window holds. The scrollport is `Table`'s own container, via
`containerRef`/`containerClassName` — not an outer wrapper, or the sticky header
sticks to nothing. Sticky lives on the `<th>`s: `position: sticky` on a `<tr>`
does nothing in WebKit or Chromium.

Both the row measurement and the scrollport measurement read a zero as "not laid
out yet" and fall back to an estimate. Without that, jsdom — which has no layout
at all — renders an empty body, and every consumer test of a long table finds no
rows. `aria-rowcount` and `aria-rowindex` report the whole list, so a screen
reader is not told there are thirty rows.

**TanStack Table is v9**, which has a different API from v8: `useTable` with
explicitly registered `tableFeatures`, not `useReactTable` with `getXRowModel`
options. The package ships skills docs under
`node_modules/@tanstack/react-table/skills/` — read those rather than recalling
v8 patterns.

## Conventions

Named exports. `interface` for object shapes. Blocks take an `onSubmit` and
render UI only — no fetching, no routing; links go through `LinkProvider` so the
consuming app supplies its router, and words go through `UIStringsProvider` so
it supplies the language.

**A link a block renders has to be optional.** `registerHref`,
`forgotPasswordHref` and `loginHref` accept `null` to render nothing: not every
app has sign-up, and one without a mailer has no password reset. A prop that
only moves where a link points is not enough.

Document a deliberate simplification with a `ponytail:` comment naming the
ceiling and the upgrade path.

`src/blocks/no-literal-strings.test.ts` enforces the no-literal rule by reading
the block sources, so it fails on a word a "Translated" story cannot see: a
literal nothing overrides renders the same in both languages and the story still
looks right. Three of them survived a release that way.
