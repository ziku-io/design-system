import * as React from "react"

import { storageKey, storagePrefix } from "@/lib/storage"

export const ZOOM_MIN = 75
export const ZOOM_MAX = 150
export const ZOOM_DEFAULT = 100
export const ZOOM_STEPS: readonly number[] = [75, 90, 100, 110, 125, 150]

/** What the reader picks. `system` follows the OS, and keeps following it. */
export const THEMES = ["light", "dark", "system"] as const
export type ThemePreference = (typeof THEMES)[number]
/** What is on screen: `system` resolved against the OS. */
export type ResolvedTheme = Exclude<ThemePreference, "system">
export const THEME_DEFAULT: ThemePreference = "system"

/** `localStorage` throws in private windows and embedded webviews. A
 *  preference still applies for the current session when it cannot persist. */
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
    // The current session retains the selection.
  }
}

/**
 * A preference held outside React: one value per page, read by every hook
 * that asks, persisted under `storageKey(name)`, and applied to `<html>`
 * whenever it changes. A module store rather than a context, for the same
 * reason as `storageKey`: a subtree has no business disagreeing about it.
 */
function preference<T>(name: string, parse: (raw: string | null) => T, apply: (value: T) => void) {
  const listeners = new Set<() => void>()
  let value: T | undefined
  const get = (): T => (value ??= parse(readRaw(storageKey(name))))
  const set = (next: T): void => {
    // A same-value set is a no-op, so a caller syncing on every render (an
    // effect, a Storybook toolbar) cannot loop through the listeners.
    if (Object.is(next, get())) return
    value = next
    writeRaw(storageKey(name), String(next))
    apply(next)
    listeners.forEach((listener) => listener())
  }
  const subscribe = (listener: () => void): (() => void) => {
    listeners.add(listener)
    apply(get())
    return () => listeners.delete(listener)
  }
  return { get, set, subscribe, notify: () => listeners.forEach((l) => l()) }
}

const hasDocument = () => typeof document !== "undefined"

// ── Zoom ──

const clampZoom = (value: number): number =>
  Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round(value)))

const zoomStore = preference<number>(
  "zoom",
  (raw) => {
    const n = Number(raw)
    return raw !== null && Number.isFinite(n) && n > 0 ? clampZoom(n) : ZOOM_DEFAULT
  },
  (zoom) => {
    if (hasDocument()) document.documentElement.style.setProperty("--app-zoom", String(zoom / 100))
  },
)

// Module-level, so each hook hands back the same function every render and a
// caller can put it in an effect's dependencies.
const setZoomStable = (next: number) => zoomStore.set(clampZoom(next))

export interface ZoomControl {
  zoom: number
  setZoom: (zoom: number) => void
}

/** The root font-size multiplier, between 75 and 150. */
export function useZoom(): ZoomControl {
  const zoom = React.useSyncExternalStore(zoomStore.subscribe, zoomStore.get, () => ZOOM_DEFAULT)
  return { zoom, setZoom: setZoomStable }
}

// ── Theme ──

const DARK_QUERY = "(prefers-color-scheme: dark)"
const systemTheme = (): ResolvedTheme =>
  typeof matchMedia !== "undefined" && matchMedia(DARK_QUERY).matches ? "dark" : "light"

export const resolveTheme = (theme: ThemePreference): ResolvedTheme =>
  theme === "system" ? systemTheme() : theme

const applyTheme = (theme: ThemePreference) => {
  if (!hasDocument()) return
  const resolved = resolveTheme(theme)
  // `data-theme` is what globals.css keys the dark tokens on; `color-scheme`
  // is for what the browser draws itself (scrollbars, date inputs, autofill).
  document.documentElement.dataset.theme = resolved
  document.documentElement.style.colorScheme = resolved
}

const themeStore = preference<ThemePreference>(
  "theme",
  // Allowlisted: a value from another version, or typed into devtools, reads
  // as the default rather than reaching the page as a theme that does not exist.
  (raw) => THEMES.find((t) => t === raw) ?? THEME_DEFAULT,
  applyTheme,
)

// `system` has to keep following the OS after the page has loaded: a laptop
// that switches to dark at sunset should take the app with it.
if (typeof matchMedia !== "undefined")
  matchMedia(DARK_QUERY).addEventListener("change", () => {
    if (themeStore.get() !== "system") return
    applyTheme("system")
    themeStore.notify()
  })

const setThemeStable = (next: ThemePreference) => {
  if (!THEMES.includes(next))
    throw new Error(`Unknown theme "${next}", expected one of ${THEMES.join(", ")}`)
  themeStore.set(next)
}

export interface ThemeControl {
  /** What the reader picked. */
  theme: ThemePreference
  /** What is on screen. */
  resolved: ResolvedTheme
  setTheme: (theme: ThemePreference) => void
}

export function useTheme(): ThemeControl {
  const theme = React.useSyncExternalStore(
    themeStore.subscribe,
    themeStore.get,
    () => THEME_DEFAULT,
  )
  return { theme, resolved: resolveTheme(theme), setTheme: setThemeStable }
}

/** Inline before the first paint to apply the persisted zoom and theme, so the
 *  page neither resizes nor flashes light under a dark-mode reader. */
export function antiFlashScript(prefix: string = storagePrefix()): string {
  const p = JSON.stringify(prefix)
  return `(function(){try{var d=document.documentElement;var z=parseFloat(localStorage.getItem(${p}+".zoom"));if(z>=${ZOOM_MIN}&&z<=${ZOOM_MAX})d.style.setProperty("--app-zoom",String(z/100));var t=localStorage.getItem(${p}+".theme");if(t!=="light"&&t!=="dark")t=matchMedia(${JSON.stringify(DARK_QUERY)}).matches?"dark":"light";d.dataset.theme=t;d.style.colorScheme=t}catch(e){}})()`
}
