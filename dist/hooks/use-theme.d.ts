export type Theme = "dark" | "light";
/**
 * The active theme, read from the class on <html>. Dark unless `.light` is set,
 * matching the CSS. Updates when the class changes, so it works with next-themes.
 */
export declare function useTheme(): Theme;
