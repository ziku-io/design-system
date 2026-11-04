import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { Drawer } from "./drawer"
import { defaultStrings } from "@/lib/strings"

afterEach(cleanup)

describe("Drawer", () => {
  it("focuses the first field of the body on open", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Filters">
        <input aria-label="Owner" />
      </Drawer>,
    )
    expect(document.activeElement).toBe(screen.getByLabelText("Owner"))
  })

  it("closes from its translated close button", () => {
    const onOpenChange = vi.fn()
    render(
      <Drawer open onOpenChange={onOpenChange} title="Details">
        text
      </Drawer>,
    )
    fireEvent.click(screen.getByRole("button", { name: defaultStrings.common.close }))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it("names itself by its title", () => {
    render(
      <Drawer open onOpenChange={() => {}} title="Dossier 214">
        text
      </Drawer>,
    )
    expect(screen.getByRole("dialog", { name: "Dossier 214" })).toBeTruthy()
  })
})
