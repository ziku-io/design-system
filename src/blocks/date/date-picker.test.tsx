import { afterEach, describe, expect, it } from "vitest"
import { act, cleanup, render, screen } from "@testing-library/react"
import { DatePicker, DateRangePicker, defaultRangePresets, nextRange } from "./date-picker"
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

afterEach(cleanup)

const form = () => document.querySelector("form")!

describe("DatePicker in a form", () => {
  it("sends the local day as YYYY-MM-DD under its name", () => {
    render(
      <form>
        <DatePicker name="due" value={new Date(2026, 10, 6)} onChange={() => {}} />
      </form>,
    )
    expect(new FormData(form()).get("due")).toBe("2026-11-06")
  })

  it("sends a range as name[from] and name[to]", () => {
    const range = { from: new Date(2026, 9, 6), to: new Date(2026, 10, 4) }
    render(
      <form>
        <DateRangePicker name="period" value={range} onChange={() => {}} presets={false} />
      </form>,
    )
    const data = new FormData(form())
    expect(data.get("period[from]")).toBe("2026-10-06")
    expect(data.get("period[to]")).toBe("2026-11-04")
  })

  it("fails validation when required and empty, and marks the trigger", () => {
    render(
      <form>
        <DatePicker required value={undefined} onChange={() => {}} />
      </form>,
    )
    const trigger = screen.getByRole("button")
    expect(trigger.getAttribute("aria-required")).toBe("true")
    let valid = true
    act(() => {
      valid = form().checkValidity()
    })
    expect(valid).toBe(false)
    expect(trigger.getAttribute("aria-invalid")).toBe("true")
  })

  it("passes validation when required and picked", () => {
    render(
      <form>
        <DatePicker required value={new Date(2026, 10, 6)} onChange={() => {}} />
      </form>,
    )
    expect(form().checkValidity()).toBe(true)
  })

  it("fails a required range with only its start", () => {
    render(
      <form>
        <DateRangePicker
          required
          value={{ from: new Date(2026, 9, 6), to: undefined }}
          onChange={() => {}}
          presets={false}
        />
      </form>,
    )
    expect(form().checkValidity()).toBe(false)
  })
})
