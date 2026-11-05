export declare const ZOOM_MIN = 75;
export declare const ZOOM_MAX = 150;
export declare const ZOOM_DEFAULT = 100;
export declare const ZOOM_STEPS: readonly number[];
/** What the reader picks. `system` follows the OS, and keeps following it. */
export declare const THEMES: readonly ["light", "dark", "system"];
export type ThemePreference = (typeof THEMES)[number];
/** What is on screen: `system` resolved against the OS. */
export type ResolvedTheme = Exclude<ThemePreference, "system">;
export declare const THEME_DEFAULT: ThemePreference;
export interface ZoomControl {
    zoom: number;
    setZoom: (zoom: number) => void;
}
/** The root font-size multiplier, between 75 and 150. */
export declare function useZoom(): ZoomControl;
export declare const resolveTheme: (theme: ThemePreference) => ResolvedTheme;
export interface ThemeControl {
    /** What the reader picked. */
    theme: ThemePreference;
    /** What is on screen. */
    resolved: ResolvedTheme;
    setTheme: (theme: ThemePreference) => void;
}
export declare function useTheme(): ThemeControl;
/** Inline before the first paint to apply the persisted zoom and theme, so the
 *  page neither resizes nor flashes light under a dark-mode reader. */
export declare function antiFlashScript(prefix?: string): string;
