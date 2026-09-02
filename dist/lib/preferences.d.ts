/**
 * The two preferences the library's own CSS creates, kept here rather than in
 * every app.
 *
 * Dark is the default and `.light` opts out, so a light-preferring user needs
 * their choice persisted, resolved against the OS, painted onto `<html>` — and
 * painted *before the first paint*, or their machine flashes dark on every
 * load. Zoom is the same shape: the whole library is sized in rem, which is
 * this library's property and not an app's, so the multiplier belongs here too.
 *
 * Both live under `storageKey()`, so two Ziku apps on one origin do not read
 * each other's settings.
 *
 * ponytail: a module store with `useSyncExternalStore`, not a provider. These
 * are read outside the tree (see `antiFlashScript`) as often as inside it, and
 * a subtree that disagreed about the theme would be a bug rather than a
 * feature. One store per preference; if a third one arrives, they can share.
 */
export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";
export declare const ZOOM_MIN = 75;
export declare const ZOOM_MAX = 150;
export declare const ZOOM_DEFAULT = 100;
/** What `ZoomMenu` offers. A range input would be finer and nobody wants it. */
export declare const ZOOM_STEPS: readonly number[];
export declare const resolveTheme: (preference: ThemePreference) => ResolvedTheme;
export interface ThemeControl {
    /** What the user chose. `system` is the default. */
    theme: ThemePreference;
    /** What that means right now, which is what is on `<html>`. */
    resolved: ResolvedTheme;
    setTheme: (theme: ThemePreference) => void;
}
/** The theme preference, with a setter. `useTheme` reads the resolved class
 *  instead, for a component that only wants to know which one it is drawing in. */
export declare function useThemePreference(): ThemeControl;
export interface ZoomControl {
    /** A percentage: 100 is the library's own sizing. */
    zoom: number;
    setZoom: (zoom: number) => void;
}
/** The root font-size multiplier, between 75 and 150. */
export declare function useZoom(): ZoomControl;
/**
 * The script that has to run before the first paint.
 *
 * A consumer's build inlines it into `index.html`, above everything else:
 *
 * ```ts
 * // vite.config.ts
 * transformIndexHtml: (html) =>
 *   html.replace("<head>", `<head><script>${antiFlashScript()}</script>`)
 * ```
 *
 * Deliberately a string of plain ES5 with no imports: it runs before the bundle
 * exists. It reads the same two keys the stores write, so the class and the
 * multiplier are already right when React mounts.
 *
 * An app replacing its own theme storage should pass the key it used to write,
 * or its users' settings silently reset on the upgrade.
 */
export declare function antiFlashScript(prefix?: string): string;
