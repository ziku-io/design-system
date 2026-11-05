import * as React from "react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { StatTile } from "./stat-tile"

afterEach(cleanup)

function Filter() {
  const [pressed, setPressed] = React.useState(false)
  return <StatTile label="Overdue" value="4" pressed={pressed} onPressedChange={setPressed} />
}

describe("StatTile pressed", () => {
  it("is a plain tile, not a button, without onPressedChange", () => {
    render(<StatTile label="Overdue" value="4" />)
    expect(screen.queryByRole("button")).toBeNull()
  })

  it("toggles and reflects the state in aria-pressed", () => {
    render(<Filter />)
    const tile = screen.getByRole("button", { name: /Overdue/ })
    expect(tile.getAttribute("aria-pressed")).toBe("false")
    fireEvent.click(tile)
    expect(tile.getAttribute("aria-pressed")).toBe("true")
    fireEvent.click(tile)
    expect(tile.getAttribute("aria-pressed")).toBe("false")
  })

  it("is disabled while loading or failed", () => {
    const onPressedChange = vi.fn()
    render(<StatTile label="Overdue" value="4" error onPressedChange={onPressedChange} />)
    const tile = screen.getByRole("button", { name: /Overdue/ }) as HTMLButtonElement
    expect(tile.disabled).toBe(true)
    fireEvent.click(tile)
    expect(onPressedChange).not.toHaveBeenCalled()
  })

  it("throws on pressed without onPressedChange", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() => render(<StatTile label="Overdue" value="4" pressed />)).toThrow(/onPressedChange/)
  })
})
