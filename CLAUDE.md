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

**Dark is the default.** No class on `<html>` renders dark; `.light` opts out;
`.dark` also works so next-themes behaves. Tokens live on `:root, .dark` and are
overridden by `.light`. Never define a colour only inside one of those blocks.

**One brand accent, a blue-purple** (`#5b5bd6`). It drives `--primary`,
`--ring`, `--link` and the sidebar active state. Use `text-link` for inline
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
4.5:1. If you change one, compute the ratio against both themes' page *and*
card backgrounds before committing.

**The unlayered CSS block at the bottom of `globals.css`** overrides shadcn
defaults where GitHub's structure differs. Keep it short. If it grows past a
handful of rules, fork the component instead.

**Storybook is not on `@storybook/addon-themes`.** It renders no toolbar in
Storybook 10; the theme switcher is a hand-rolled `globalTypes` toolbar in
`.storybook/preview.tsx`. Don't reinstall the addon.

**Package shape.** `tw-animate-css` is a runtime dependency, not a dev one — the
shipped stylesheet imports it. `prepare` runs the build so the package works as
a git dependency. Consumers compile `globals.css` themselves, so `tailwindcss`
is a peer.

## Layout

```
src/components/ui/   shadcn components, each with a co-located .stories.tsx
src/blocks/auth/     AuthLayout, LoginForm, RegisterForm, ForgotPasswordForm
src/blocks/shell/    AppShell (sidebar nav, ⌘K palette, user menu)
src/blocks/data/     DataTable (TanStack v9), Kanban, saved views
src/blocks/search/   CommandMenu (cmdk), SearchTrigger
src/blocks/page/     PageHeader, EmptyState
src/docs/            MDX docs pages
src/styles/          globals.css — GitHub Primer tokens
```

**TanStack Table is v9**, which has a different API from v8: `useTable` with
explicitly registered `tableFeatures`, not `useReactTable` with `getXRowModel`
options. The package ships skills docs under
`node_modules/@tanstack/react-table/skills/` — read those rather than recalling
v8 patterns.

## Conventions

Named exports. `interface` for object shapes. Blocks take an `onSubmit` and
render UI only — no fetching, no routing; links go through `LinkProvider` so the
consuming app supplies its router.

Document a deliberate simplification with a `ponytail:` comment naming the
ceiling and the upgrade path.
