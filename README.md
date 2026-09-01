# @ziku/ui

Browse it at **https://ziku-io.github.io/design-system/**

## Install

Pin a tag; the package ships prebuilt, so there is no build step on install.

React 19 or later is required. The components take `ref` as a plain prop
instead of going through `forwardRef`, which React 18 drops silently: every
`asChild` trigger would lose its ref and the menus it opens would do nothing.

```jsonc
"@ziku/ui": "github:ziku-io/design-system#v0.1.0"
```

```tsx
import "@ziku/ui/styles.css"
import { AppShell, Button, DataTable } from "@ziku/ui"
```

Blocks render English until you tell them otherwise. Wrap the app once, next to
your router's link component, and pass any subset — the rest stays English:

```tsx
<LinkProvider component={Link}>
  <UIStringsProvider strings={{ auth: { signIn: "Iniciar sessão" } }}>
    <App />
  </UIStringsProvider>
</LinkProvider>
```

Cut a release with `pnpm release patch` — see CLAUDE.md.

Ziku design system. shadcn/ui components themed after GitHub (dark by default), plus ready-made auth pages and app navigation, documented in Storybook.

```bash
pnpm install
pnpm dev              # Storybook on :6006
pnpm test             # renders every story in jsdom, fails on any React error
pnpm build            # library -> dist/
pnpm build-storybook  # static docs -> storybook-static/
```

## In an app

```bash
pnpm add @ziku/ui
```

```tsx
import "@ziku/ui/styles.css"
import { AppShell, Button, LoginForm } from "@ziku/ui"
```

Full docs (install, tokens, auth flows, navigation rules) live in Storybook under **Docs**.

## Layout

```
src/components/ui/   shadcn components (+ .stories.tsx each)
src/blocks/auth/     AuthLayout, LoginForm, RegisterForm, ForgotPasswordForm
src/blocks/shell/    AppShell (sidebar nav + top bar)
src/blocks/search/   CommandMenu (cmdk ⌘K palette), SearchTrigger
src/blocks/data/     DataTable (TanStack v9: chips, sorting, grouping, saved views), Kanban
src/blocks/modal/    Modal (title bar, scrolling body, footer)
src/blocks/page/     PageHeader, EmptyState
src/docs/            MDX docs pages
src/styles/          globals.css (GitHub Primer tokens, dark default)
src/lib/             cn, Link/LinkProvider, UIStrings/UIStringsProvider, Phosphor icon aliases
```

Icons: Phosphor only. Search is cmdk, tables are TanStack. Every string a block
renders lives in `src/lib/strings.tsx` and is overridable per app.
