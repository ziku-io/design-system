import * as React from "react"

import { storageKey, storagePrefix } from "@/lib/storage"

export const ZOOM_MIN = 75
export const ZOOM_MAX = 150
export const ZOOM_DEFAULT = 100
export const ZOOM_STEPS: readonly number[] = [75, 90, 100, 110, 125, 150]

/** `localStorage` throws in private windows and embedded webviews. Zoom still
 * applies for the current session when persistence is unavailable. */
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
    // The current session retains the selected zoom.
  }
}

const clampZoom = (value: number): number =>
  Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round(value)))

const listeners = new Set<() => void>()
let zoom: number | undefined

const getZoom = (): number => {
  if (zoom === undefined) {
    const raw = Number(readRaw(storageKey("zoom")))
    zoom = Number.isFinite(raw) && raw > 0 ? clampZoom(raw) : ZOOM_DEFAULT
  }
  return zoom
}

const setZoom = (next: number): void => {
  zoom = clampZoom(next)
  writeRaw(storageKey("zoom"), String(zoom))
  if (typeof document !== "undefined")
    document.documentElement.style.setProperty("--app-zoom", String(zoom / 100))
  listeners.forEach((listener) => listener())
}

const subscribe = (listener: () => void): (() => void) => {
  listeners.add(listener)
  if (typeof document !== "undefined")
    document.documentElement.style.setProperty("--app-zoom", String(getZoom() / 100))
  return () => listeners.delete(listener)
}

export interface ZoomControl {
  zoom: number
  setZoom: (zoom: number) => void
}

/** The root font-size multiplier, between 75 and 150. */
export function useZoom(): ZoomControl {
  const zoom = React.useSyncExternalStore(subscribe, getZoom, () => ZOOM_DEFAULT)
  return { zoom, setZoom }
}

/** Inline before the first paint to apply persisted zoom without reflow. */
export function antiFlashScript(prefix: string = storagePrefix()): string {
  return `(function(){try{var z=parseFloat(localStorage.getItem(${JSON.stringify(prefix)}+".zoom"));if(z>=${ZOOM_MIN}&&z<=${ZOOM_MAX})document.documentElement.style.setProperty("--app-zoom",String(z/100))}catch(e){}})()`
}
