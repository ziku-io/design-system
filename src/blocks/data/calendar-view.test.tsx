import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"

import { CalendarView } from "./calendar-view"
import { shiftSpan, Timeline } from "./timeline"
import { DataTable } from "./data-table"
import { defaultStrings } from "@/lib/strings"

afterEach(cleanup)

interface Task {
  id: string
  title: string
  start?: Date
  due?: Date
}
const TODAY = new Date(2026, 10, 5)
const tasks: Task[] = [
  { id: "a", title: "Launch", start: new Date(2026, 10, 2), due: new Date(2026, 10, 20) },
  { id: "b", title: "Review", start: new Date(2026, 10, 9) },
  { id: "c", title: "Someday" },
]
const props = {
  items: tasks,
  itemKey: (r: Task) => r.id,
  start: (r: Task) => r.start,
  end: (r: Task) => r.due,
  label: (r: Task) => r.title,
  today: TODAY,
}
const dayOf = (el: HTMLElement) => el.closest("li")?.querySelector("time")?.getAttribute("datetime")

describe("CalendarView", () => {
  it("puts a ranged row on its end day once, and a dateless one in the count", () => {
    render(<CalendarView {...props} />)
    expect(screen.getAllByText("Launch").map(dayOf)).toEqual(["2026-11-20"])
    expect(dayOf(screen.getByText("Review"))).toBe("2026-11-09")
    expect(screen.getByText(defaultStrings.dataTable.undated(1))).toBeTruthy()
  })

  it("refuses an end before the start", () => {
    const bad = [
      { id: "x", title: "Bad", start: new Date(2026, 10, 9), due: new Date(2026, 10, 1) },
    ]
    expect(() => render(<CalendarView {...props} items={bad} />)).toThrow(/before/)
  })
})

describe("Timeline", () => {
  const f = defaultStrings.format.date
  const sep = defaultStrings.datePicker.rangeSeparator

  it("draws a bar for a range and a single-day mark for a row with no end", () => {
    render(<Timeline {...props} />)
    expect(
      screen.getByTitle(`Launch · ${f(tasks[0].start!)}${sep}${f(tasks[0].due!)}`),
    ).toBeTruthy()
    expect(screen.getByTitle(`Review · ${f(tasks[1].start!)}`)).toBeTruthy()
    expect(screen.queryByText("Someday")).toBeNull()
  })
})

describe("rescheduling", () => {
  const d = (n: number) => new Date(2026, 10, n)

  // Dragging an edge past the other one would make an end before its start.
  it("stops an edge at the other one", () => {
    expect(shiftSpan({ from: d(5), to: d(8) }, "start", 10)).toEqual({ from: d(8), to: d(8) })
    expect(shiftSpan({ from: d(5), to: d(8) }, "end", -10)).toEqual({ from: d(5), to: d(5) })
  })

  it("moves a focused bar a day with the arrows, and its end with Shift", () => {
    const onReschedule = vi.fn()
    render(<Timeline {...props} onReschedule={onReschedule} />)
    const bar = screen.getByRole("button", { name: /^Launch/ })
    fireEvent.keyDown(bar, { key: "ArrowRight" })
    expect(onReschedule).toHaveBeenLastCalledWith(tasks[0], { start: d(3), end: d(21) })
    fireEvent.keyDown(bar, { key: "ArrowLeft", shiftKey: true })
    expect(onReschedule).toHaveBeenLastCalledWith(tasks[0], { start: d(2), end: d(19) })
  })

  it("moves a milestone without giving it an end", () => {
    const onReschedule = vi.fn()
    render(<Timeline {...props} onReschedule={onReschedule} />)
    fireEvent.keyDown(screen.getByRole("button", { name: /^Review/ }), {
      key: "ArrowRight",
      shiftKey: true,
    })
    expect(onReschedule).toHaveBeenCalledWith(tasks[1], { start: d(10), end: undefined })
  })
})

describe("calendar rescheduling", () => {
  const d = (n: number) => new Date(2026, 10, n)
  const cell = (key: string) => document.querySelector(`time[datetime="${key}"]`)!.closest("li")!
  const transfer = (data: Record<string, string>) => ({
    types: Object.keys(data),
    getData: (type: string) => data[type] ?? "",
    setData: () => {},
  })

  it("moves a dropped row to that day and keeps its length", () => {
    const onReschedule = vi.fn()
    render(<CalendarView {...props} onReschedule={onReschedule} />)
    const types = { "application/x-ziku-calendar-item": "a" }
    fireEvent.drop(cell("2026-11-25"), { dataTransfer: transfer(types) })
    expect(onReschedule).toHaveBeenCalledWith(tasks[0], { start: d(7), end: d(25) })
  })

  // A file or a link dragged onto the grid is not one of ours.
  it("ignores a drop that is not a calendar item", () => {
    const onReschedule = vi.fn()
    render(<CalendarView {...props} onReschedule={onReschedule} />)
    fireEvent.drop(cell("2026-11-25"), { dataTransfer: transfer({ "text/plain": "a" }) })
    expect(onReschedule).not.toHaveBeenCalled()
  })

  it("moves a focused chip a day sideways and a week down", () => {
    const onReschedule = vi.fn()
    render(<CalendarView {...props} onReschedule={onReschedule} />)
    const chip = screen.getByRole("button", { name: "Review" })
    fireEvent.keyDown(chip, { key: "ArrowRight" })
    expect(onReschedule).toHaveBeenLastCalledWith(tasks[1], { start: d(10), end: undefined })
    fireEvent.keyDown(chip, { key: "ArrowDown" })
    expect(onReschedule).toHaveBeenLastCalledWith(tasks[1], { start: d(16), end: undefined })
  })
})

describe("calendar year scale", () => {
  const yearly = [
    { id: "j", title: "Accounts", start: new Date(2026, 0, 31) },
    { id: "n", title: "Renewal", start: new Date(2027, 2, 1) },
  ]
  const yp = { ...props, items: yearly }
  const card = (month: string) => screen.getByRole("button", { name: month }).closest("li")!

  it("lists each row in its month of the year on screen, and steps a year", () => {
    render(<CalendarView {...yp} defaultScale="year" />)
    expect(card("January").textContent).toContain("Accounts")
    expect(screen.queryByText("Renewal")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: defaultStrings.dataTable.nextYear }))
    expect(card("March").textContent).toContain("Renewal")
  })

  // 31 January dropped on February has no 31st to land on.
  it("keeps the day of the month on a drop, clamped to a shorter month", () => {
    const onReschedule = vi.fn()
    render(<CalendarView {...yp} defaultScale="year" onReschedule={onReschedule} />)
    fireEvent.drop(card("February"), {
      dataTransfer: {
        types: ["application/x-ziku-calendar-item"],
        getData: () => "j",
      },
    })
    expect(onReschedule).toHaveBeenCalledWith(yearly[0], {
      start: new Date(2026, 1, 28),
      end: undefined,
    })
  })
})

describe("DataTable layouts", () => {
  // A saved view or URL can name a layout this table does not offer.
  it("falls back to the table when the mode needs `dates` and none were given", () => {
    render(
      <DataTable
        columns={[{ key: "title", header: "Task" }]}
        data={tasks}
        rowId={(r) => r.id}
        defaultMode="calendar"
      />,
    )
    expect(screen.getByRole("table")).toBeTruthy()
  })
})
