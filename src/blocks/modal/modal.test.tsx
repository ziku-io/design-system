import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import { Modal } from "./modal"

afterEach(cleanup)

describe("Modal focus on open", () => {
  it("lands on the first field of the body, not the close button", () => {
    render(
      <Modal open onOpenChange={() => {}} title="Edit">
        <input aria-label="Name" />
      </Modal>,
    )
    expect(document.activeElement).toBe(screen.getByLabelText("Name"))
  })

  it("lands on the dialog itself when the body has no field", () => {
    render(
      <Modal open onOpenChange={() => {}} title="Delete?" footer={<button>Delete</button>}>
        This cannot be undone.
      </Modal>,
    )
    expect(document.activeElement).toBe(screen.getByRole("dialog"))
  })
})
