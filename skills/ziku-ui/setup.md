# Wiring @ziku/ui into an app

Audit an existing app against every numbered item; a fresh app gets all of
them. Each item says what breaks without it, so a missing one is a bug, not a
style choice.

## 1. Dependency

```jsonc
"@ziku/ui": "github:ziku-io/design-system#vX.Y.Z"
```

A tag, never a branch. The package ships `dist/`, so install runs no build.
Peers: `react` and `react-dom` 19+, `tailwindcss` 4. Vite apps add
`@tailwindcss/vite` to `plugins`.

## 2. Stylesheet

In the app's main CSS file:

```css
@import "@ziku/ui/styles.css";
@source "../../node_modules/@ziku/ui/dist";
```

`@source` is relative to the CSS file and must reach `node_modules/@ziku/ui/dist`.
Without it Tailwind never sees the library's class names and blocks render
unstyled. Fonts, tokens and `tw-animate-css` come with the import.

## 3. Storage prefix and anti-flash script

Zoom and theme persist in `localStorage` under a prefix. Pick one short name
with no dots and use it in both places.

```ts
// main.tsx, before createRoot
import { setStoragePrefix } from "@ziku/ui"
setStoragePrefix("portal")
```

```ts
// vite.config.ts — inlines the script that applies zoom and theme before first paint
import { antiFlashScript } from "@ziku/ui"

const antiFlash = {
  name: "ziku-anti-flash",
  transformIndexHtml: () => [
    { tag: "script", children: antiFlashScript("portal"), injectTo: "head-prepend" as const },
  ],
}
// plugins: [react(), tailwindcss(), antiFlash]
```

Without the script a dark-mode reader sees a white flash on every load. Do not
hard-code `color-scheme: light` or a light `theme-color` in `index.html` or CSS:
they fight the theme the reader picked.

## 4. Providers, once, at the root

```tsx
<UIStringsProvider strings={ptPT}>
  {" "}
  {/* omit only for an English-only app */}
  <LinkProvider component={RouterLink}>
    {" "}
    {/* adapter: href -> to for react-router */}
    <ConfirmProvider>
      {" "}
      {/* without it useConfirm() silently answers "no" */}
      <App />
      <Toaster />
    </ConfirmProvider>
  </LinkProvider>
</UIStringsProvider>
```

React Router adapter, since blocks pass `href`:

```tsx
const RouterLink = ({ href, ...props }: LinkProps) => <Link to={href} {...props} />
```

## 5. Shell

Signed-in pages render inside `AppShell` (`nav`, `currentPath`, `user`,
`onSignOut`). Put `SearchTrigger` plus one `CommandMenu` in `headerActions`,
and `PreferencesMenu` in the user menu for theme, zoom and language. Wrap
routes in `ErrorBoundary` with `resetKeys={[pathname]}`.

## Upgrading

1. Bump the tag in `package.json`, run `pnpm update @ziku/ui`.
2. Read the commits between the two tags:
   `gh api repos/ziku-io/design-system/compare/vOLD...vNEW --jq '.commits[].commit.message'`.
   Breaking changes say so in the subject.
3. Re-read this skill (it changed with the package) and re-run the audit above.
4. Typecheck, then open every screen at 320px and in dark mode.
