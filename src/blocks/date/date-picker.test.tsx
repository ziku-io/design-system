import { describe, expect, it } from "vitest"
import { defaultRangePresets, nextRange } from "./date-picker"
import { defaultStrings } from "@/lib/strings"

// 2026-03-31 is the day before a month with fewer days, and the end of DST in
// neither hemisphere: plain day arithmetic must still land on midnight.
const TODAY = new Date(2026, 2, 31)
const presets = Object.fromEntries(
  defaultRangePresets(defaultStrings.datePicker).map((p) => [p.label, p.range(TODAY)]),
)
const t = defaultStrings.datePicker

describe("defaultRangePresets", () => {
  it("counts today inside the last 7 days", () => {
    expect(presets[t.last7Days]).toEqual({ from: new Date(2026, 2, 25), to: TODAY })
  })

  it("crosses a month boundary for the last 90 days", () => {
    expect(presets[t.last90Days].from).toEqual(new Date(2026, 0, 1))
  })

  it("starts this month on the first", () => {
    expect(presets[t.thisMonth].from).toEqual(new Date(2026, 2, 1))
  })
})

describe("nextRange", () => {
  const d = (n: number) => new Date(2026, 10, n)

  // The reported bug: with 5–20 set, clicking the 10th moved the end to the
  // 10th instead of starting over, so the start could never move later.
  it("starts over when a range is already complete", () => {
    expect(nextRange({ from: d(5), to: d(20) }, d(10))).toEqual({ from: d(10), to: undefined })
  })

  it("finishes an open range with a later day", () => {
    expect(nextRange({ from: d(5), to: undefined }, d(12))).toEqual({ from: d(5), to: d(12) })
  })

  it("swaps the ends when the second click comes first", () => {
    expect(nextRange({ from: d(12), to: undefined }, d(5))).toEqual({ from: d(5), to: d(12) })
  })
})
