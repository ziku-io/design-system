import { readFileSync } from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"

/** The palette comment in globals.css promises every text/surface pairing is
 *  >= 4.5:1 and that no two status hues sit close enough to be confused. This
 *  test is what makes that promise true rather than aspirational. */

const css = readFileSync(path.join(__dirname, "globals.css"), "utf8")

function block(marker: string): Record<string, string> {
  const start = css.indexOf(marker)
  if (start === -1) throw new Error(`palette block not found: ${marker}`)
  const seg = css.slice(start, css.indexOf("\n}", start))
  const out: Record<string, string> = {}
  for (const [, name, hex] of seg.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/g))
    out[name] = hex
  return out
}

const channel = (c: number) =>
  c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) =>
    channel(parseInt(hex.slice(i, i + 2), 16) / 255),
  )
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

function hue(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  const max = Math.max(r, g, b)
  const d = max - Math.min(r, g, b)
  if (d === 0) return 0
  const h =
    max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4
  return h * 60
}

const STATUS = ["danger", "warning", "success", "info"] as const

const pairs: [string, string][] = [
  ["foreground", "background"],
  ["foreground", "card"],
  ["foreground", "muted"],
  ["muted-foreground", "background"],
  ["muted-foreground", "card"],
  ["primary-foreground", "primary"],
  ["tooltip-foreground", "tooltip"],
  ["link", "background"],
  ["link", "card"],
  ...STATUS.flatMap(
    (s): [string, string][] => [
      [`${s}-foreground`, s],
      [`${s}-fg`, `${s}-subtle`],
      [`${s}-fg`, "background"],
      [`${s}-fg`, "card"],
    ],
  ),
]

describe.each([
  ["dark", ":root,\n.dark {"],
  ["light", "\n.light {"],
])("%s palette", (_mode, marker) => {
  const t = block(marker)

  it.each(pairs)("%s on %s is readable", (fg, bg) => {
    expect(contrast(t[fg], t[bg])).toBeGreaterThanOrEqual(4.5)
  })

  it("keeps the accent hues apart", () => {
    const hues = ["primary", ...STATUS].map((k) => hue(t[k]))
    for (const [i, a] of hues.entries())
      for (const b of hues.slice(i + 1)) {
        const gap = Math.abs(a - b)
        expect(Math.min(gap, 360 - gap)).toBeGreaterThanOrEqual(30)
      }
  })

  it("separates cards from the page", () => {
    expect(t.card).not.toBe(t.background)
  })
})
