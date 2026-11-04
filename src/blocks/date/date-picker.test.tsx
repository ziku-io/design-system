import { describe, expect, it } from "vitest"
import { defaultRangePresets } from "./date-picker"
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
