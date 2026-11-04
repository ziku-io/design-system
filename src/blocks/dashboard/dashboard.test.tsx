import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"

import { ActivityList } from "./dashboard"
import { StatTile } from "@/blocks/page/stat-tile"
import { defaultStrings, UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

afterEach(cleanup)

const hintLine = () => screen.getByText(defaultStrings.dashboard.change(5)).parentElement

describe("StatTile change", () => {
  it("colours a rise as up", () => {
    render(<StatTile label="Open" value="1" change={5} />)
    expect(hintLine()?.className).toContain("text-success-fg")
  })

  it("lets an explicit trend win, for metrics where falling is good", () => {
    render(<StatTile label="Overdue" value="1" change={5} trend="down" />)
    expect(hintLine()?.className).toContain("text-danger-fg")
  })

  it("renders the change in the dictionary's locale", () => {
    render(
      <UIStringsProvider strings={ptPT}>
        <StatTile label="Open" value="1" change={12.5} />
      </UIStringsProvider>,
    )
    expect(screen.getByText(ptPT.dashboard.change(12.5))).toBeTruthy()
  })
})

describe("ActivityList", () => {
  it("says so when empty instead of rendering an empty list", () => {
    render(<ActivityList items={[]} />)
    expect(screen.getByText(defaultStrings.dashboard.noActivity)).toBeTruthy()
    expect(screen.queryByRole("list")).toBeNull()
  })

  it("throws on an invalid date rather than printing one", () => {
    expect(() =>
      render(<ActivityList items={[{ id: "1", title: "x", at: new Date("nope") }]} />),
    ).toThrow()
  })
})
