import * as React from "react"

import { storageKey, storagePrefix } from "@/lib/storage"

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

export type ThemePreference = "system" | "light" | "dark"
export type ResolvedTheme = "light" | "dark"

const THEMES: readonly ThemePreference[] = ["system", "light", "dark"]

export const ZOOM_MIN = 75
export const ZOOM_MAX = 150
export const ZOOM_DEFAULT = 100
/** What `ZoomMenu` offers. A range input would be finer and nobody wants it. */
export const ZOOM_STEPS: readonly number[] = [75, 90, 100, 110, 125, 150]

/** `localStorage` throws in a private window and in some embedded webviews. A
 *  preference that cannot be saved is not a reason to take the app down. */
function readRaw(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
function writeRaw(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Nothing to do: the preference applies for this session and is forgotten.
  }
}

function makeStore<T>(read: () => T, write: (value: T) => void, apply: (value: T) => void) {
  const listeners = new Set<() => void>()
  let value: T | undefined
  let started = false

  const get = (): T => {
    if (value === undefined) value = read()
    return value
  }
  const emit = () => listeners.forEach((fn) => fn())
  const set = (next: T): void => {
    value = next
    write(next)
    apply(next)
    emit()
  }
  return {
    get,
    set,
    /** Re-runs `apply` for a value that did not change but resolves differently
     *  — a `system` theme when the OS switched. */
    refresh: () => {
      apply(get())
      emit()
    },
    subscribe: (fn: () => void) => {
      listeners.add(fn)
      if (!started) {
        started = true
        apply(get())
      }
      return () => {
        listeners.delete(fn)
      }
    },
  }
}

const prefersLight = (): boolean =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-color-scheme: light)").matches

export const resolveTheme = (preference: ThemePreference): ResolvedTheme =>
  preference === "system" ? (prefersLight() ? "light" : "dark") : preference

const themeStore = makeStore<ThemePreference>(
  () => {
    const raw = readRaw(storageKey("theme"))
    return THEMES.includes(raw as ThemePreference) ? (raw as ThemePreference) : "system"
  },
  (value) => writeRaw(storageKey("theme"), value),
  (value) => {
    if (typeof document === "undefined") return
    const root = document.documentElement
    // Both classes, always: `.light` is the opt-out and `.dark` is what
    // next-themes writes, so leaving a stale one behind wins over the new one.
    root.classList.remove("light", "dark")
    root.classList.add(resolveTheme(value))
  },
)

const clampZoom = (value: number): number =>
  Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round(value)))

const zoomStore = makeStore<number>(
  () => {
    const raw = Number(readRaw(storageKey("zoom")))
    return Number.isFinite(raw) && raw > 0 ? clampZoom(raw) : ZOOM_DEFAULT
  },
  (value) => writeRaw(storageKey("zoom"), String(value)),
  (value) => {
    if (typeof document === "undefined") return
    document.documentElement.style.setProperty("--app-zoom", String(value / 100))
  },
)

/**
 * The OS switching while the app is open, not only at load. Installed once, on
 * the module, because `system` has to follow it whether or not a `ThemeMenu` is
 * mounted anywhere.
 */
if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
    if (themeStore.get() === "system") themeStore.refresh()
  })
}

export interface ThemeControl {
  /** What the user chose. `system` is the default. */
  theme: ThemePreference
  /** What that means right now, which is what is on `<html>`. */
  resolved: ResolvedTheme
  setTheme: (theme: ThemePreference) => void
}

/** The theme preference, with a setter. `useTheme` reads the resolved class
 *  instead, for a component that only wants to know which one it is drawing in. */
export function useThemePreference(): ThemeControl {
  const theme = React.useSyncExternalStore(
    themeStore.subscribe,
    themeStore.get,
    () => "system" as ThemePreference,
  )
  return { theme, resolved: resolveTheme(theme), setTheme: themeStore.set }
}

export interface ZoomControl {
  /** A percentage: 100 is the library's own sizing. */
  zoom: number
  setZoom: (zoom: number) => void
}

/** The root font-size multiplier, between 75 and 150. */
export function useZoom(): ZoomControl {
  const zoom = React.useSyncExternalStore(zoomStore.subscribe, zoomStore.get, () => ZOOM_DEFAULT)
  return { zoom, setZoom: (next) => zoomStore.set(clampZoom(next)) }
}

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
export function antiFlashScript(prefix: string = storagePrefix()): string {
  return `(function(){try{var d=document.documentElement,g=function(k){try{return localStorage.getItem(${JSON.stringify(prefix)}+"."+k)}catch(e){return null}};var t=g("theme")||"system",l=t==="light"||(t==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches);d.classList.remove("light","dark");d.classList.add(l?"light":"dark");var z=parseFloat(g("zoom"));if(z>=${ZOOM_MIN}&&z<=${ZOOM_MAX})d.style.setProperty("--app-zoom",String(z/100))}catch(e){}})()`
}
