import { create } from "storybook/theming"

/**
 * The Storybook chrome (sidebar, toolbar, docs pages) in the library's own
 * tokens, so the frame around a story matches what is inside it.
 *
 * Hex values, not `var(--…)`: the manager UI is a separate page that never
 * loads globals.css. `theme.test.ts` fails if any of these drifts from the
 * token it copies.
 */
export const TOKENS = {
  light: {
    background: "#f4f6f8",
    card: "#fdfdff",
    foreground: "#44484e",
    "muted-foreground": "#676b72",
    border: "#dde0e4",
    primary: "#706cbb",
    accent: "#ebebf9",
    link: "#6063aa",
  },
  dark: {
    background: "#14161a",
    card: "#1c1e22",
    foreground: "#d5d8db",
    "muted-foreground": "#a1a5aa",
    border: "#33363a",
    primary: "#9794e0",
    accent: "#2e2e42",
    link: "#acb1f0",
  },
} as const

type Mode = keyof typeof TOKENS

const sans =
  '"Geist Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'

const build = (mode: Mode) => {
  const t = TOKENS[mode]
  return create({
    base: mode,
    brandTitle: "Ziku UI",
    brandTarget: "_self",

    colorPrimary: t.primary,
    colorSecondary: t.primary,

    appBg: t.background,
    appContentBg: t.card,
    appPreviewBg: t.background,
    appBorderColor: t.border,
    appBorderRadius: 10,

    fontBase: sans,
    fontCode:
      '"Geist Mono Variable", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',

    textColor: t.foreground,
    textMutedColor: t["muted-foreground"],
    textInverseColor: t.card,

    barBg: t.card,
    barTextColor: t["muted-foreground"],
    barSelectedColor: t.primary,
    barHoverColor: t.primary,

    buttonBg: t.card,
    buttonBorder: t.border,
    booleanBg: t.background,
    booleanSelectedBg: t.card,

    inputBg: t.card,
    inputBorder: t.border,
    inputTextColor: t.foreground,
    inputBorderRadius: 8,
  })
}

export const themes = { light: build("light"), dark: build("dark") }
