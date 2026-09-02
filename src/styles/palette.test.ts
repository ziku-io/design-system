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


/** sRGB -> CIE Lab, and the three colour-vision simulations, so the chart set
 *  can be measured rather than eyeballed. A bar carries no label, so what
 *  matters between two series is perceptual distance, not contrast: v0.15.0
 *  shipped a set at deltaE 5.7 that looked fine to normal vision and collapsed
 *  under deuteranopia. Machado 2009 matrices at full severity, applied in
 *  linear RGB, which is where they are defined. */

const unlin = (c: number) =>
  c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055

const toLinear = (hex: string) =>
  [1, 3, 5].map((i) => channel(parseInt(hex.slice(i, i + 2), 16) / 255))

const XYZ = [
  [0.4124564, 0.3575761, 0.1804375],
  [0.2126729, 0.7151522, 0.072175],
  [0.0193339, 0.119192, 0.9503041],
]
const WHITE = [0.95047, 1.0, 1.08883]

function lab(rgb: number[]) {
  const xyz = XYZ.map((row) => row.reduce((a, m, j) => a + m * rgb[j], 0))
  const f = xyz.map((v, i) => {
    const t = v / WHITE[i]
    return t > 216 / 24389 ? Math.cbrt(t) : (841 / 108) * t + 4 / 29
  })
  return [116 * f[1] - 16, 500 * (f[0] - f[1]), 200 * (f[1] - f[2])]
}

const CVD: Record<string, number[][]> = {
  protan: [
    [0.152286, 1.052583, -0.204868],
    [0.114503, 0.786281, 0.099216],
    [-0.003882, -0.048116, 1.051998],
  ],
  deutan: [
    [0.367322, 0.860646, -0.227968],
    [0.280085, 0.672501, 0.047413],
    [-0.01182, 0.04294, 0.968881],
  ],
  tritan: [
    [1.255528, -0.076749, -0.178779],
    [-0.078411, 0.930809, 0.147602],
    [0.004733, 0.691367, 0.3039],
  ],
}

/** Perceptual distance between two hexes, optionally as one form of colour
 *  blindness sees them. */
function distance(a: string, b: string, vision?: string) {
  const project = (hex: string) => {
    let rgb = toLinear(hex)
    if (vision) {
      const m = CVD[vision]
      rgb = m.map((row) =>
        Math.min(1, Math.max(0, row.reduce((s, v, j) => s + v * rgb[j], 0))),
      )
    }
    // back through the transfer function and in again, as a display would
    return lab(rgb.map((c) => channel(unlin(c))))
  }
  const [la, lb] = [project(a), project(b)]
  return Math.hypot(la[0] - lb[0], la[1] - lb[1], la[2] - lb[2])
}

const CHARTS = [1, 2, 3, 4, 5] as const
const VISIONS = [undefined, "protan", "deutan", "tritan"]

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


  it("keeps chart series apart, including to a colour blind reader", () => {
    const hexes = CHARTS.map((n) => t[`chart-${n}`])
    for (const vision of VISIONS)
      for (const [i, a] of hexes.entries())
        for (const b of hexes.slice(i + 1))
          expect(distance(a, b, vision)).toBeGreaterThanOrEqual(20)
  })

  it("draws every chart series against the surfaces it sits on", () => {
    // 3:1, the threshold for a mark carrying no text of its own.
    for (const n of CHARTS) {
      expect(contrast(t[`chart-${n}`], t.card)).toBeGreaterThanOrEqual(3)
      expect(contrast(t[`chart-${n}`], t.background)).toBeGreaterThanOrEqual(3)
    }
  })

  it("separates chart series in greyscale too", () => {
    // Lightness is staggered on purpose: a printed or greyscale chart keeps it.
    const ls = CHARTS.map((n) => luminance(t[`chart-${n}`])).sort((a, b) => a - b)
    for (let i = 1; i < ls.length; i++)
      expect((ls[i] + 0.05) / (ls[i - 1] + 0.05)).toBeGreaterThanOrEqual(1.12)
  })

  it("separates cards from the page", () => {
    expect(t.card).not.toBe(t.background)
  })
})
