import { describe, expect, it } from "vitest"
import { addDays, diffDays, spanOf, startOfWeek } from "./days"

describe("days", () => {
  // 29 March 2026 is the EU spring-forward day: 23 hours long.
  it("counts a DST day as one day", () => {
    expect(diffDays(new Date(2026, 2, 28), new Date(2026, 2, 30))).toBe(2)
    expect(addDays(new Date(2026, 2, 28), 2)).toEqual(new Date(2026, 2, 30))
  })

  it("starts a week on the locale's day", () => {
    const thu = new Date(2026, 10, 5)
    expect(startOfWeek(thu, 1)).toEqual(new Date(2026, 10, 2))
    expect(startOfWeek(thu, 0)).toEqual(new Date(2026, 10, 1))
  })

  it("treats a missing end as a one-day span", () => {
    const d = new Date(2026, 10, 5, 15)
    expect(spanOf(d, undefined)).toEqual({ from: new Date(2026, 10, 5), to: new Date(2026, 10, 5) })
  })

  it("rejects an end before the start", () => {
    expect(() => spanOf(new Date(2026, 10, 5), new Date(2026, 10, 1))).toThrow(/before/)
  })

  it("rejects an invalid date", () => {
    expect(() => spanOf(new Date("nope"), undefined)).toThrow(/invalid/)
  })
})
