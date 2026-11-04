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
  background: "#f4f6f8",
  card: "#fdfdff",
  foreground: "#44484e",
  "muted-foreground": "#676b72",
  border: "#dde0e4",
  primary: "#706cbb",
  accent: "#ebebf9",
  link: "#6063aa",
} as const

const sans =
  '"Geist Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'

export const theme = create({
  base: "light",
  brandTitle: "Ziku UI",
  brandTarget: "_self",

  colorPrimary: TOKENS.primary,
  colorSecondary: TOKENS.primary,

  appBg: TOKENS.background,
  appContentBg: TOKENS.card,
  appPreviewBg: TOKENS.background,
  appBorderColor: TOKENS.border,
  appBorderRadius: 10,

  fontBase: sans,
  fontCode:
    '"Geist Mono Variable", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',

  textColor: TOKENS.foreground,
  textMutedColor: TOKENS["muted-foreground"],
  textInverseColor: TOKENS.card,

  barBg: TOKENS.card,
  barTextColor: TOKENS["muted-foreground"],
  barSelectedColor: TOKENS.primary,
  barHoverColor: TOKENS.primary,

  buttonBg: TOKENS.card,
  buttonBorder: TOKENS.border,
  booleanBg: TOKENS.background,
  booleanSelectedBg: TOKENS.card,

  inputBg: TOKENS.card,
  inputBorder: TOKENS.border,
  inputTextColor: TOKENS.foreground,
  inputBorderRadius: 8,
})
