import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { UploadSlots } from "./upload-slots"

afterEach(cleanup)

const slots = [
  { id: "front", label: "Front", accept: "image/*" },
  { id: "back", label: "Back", accept: "image/*" },
]

describe("UploadSlots", () => {
  it("routes a picked file to the slot it was picked in", () => {
    const onFile = vi.fn()
    render(<UploadSlots slots={slots} value={{}} onFile={onFile} />)
    const back = screen.getByLabelText("Back") as HTMLInputElement
    const file = new File(["x"], "back.png", { type: "image/png" })
    fireEvent.change(back, { target: { files: [file] } })
    expect(onFile).toHaveBeenCalledWith("back", file)
  })

  it("shows the held file instead of a drop zone", () => {
    render(
      <UploadSlots
        slots={slots}
        value={{ front: { id: "1", name: "front.png", size: 10, status: "done" } }}
        onFile={() => {}}
      />,
    )
    expect(screen.getByText("front.png")).toBeTruthy()
    expect(screen.queryByLabelText("Front")).toBeNull()
  })

  it("throws on duplicate slot ids", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() =>
      render(<UploadSlots slots={[slots[0], slots[0]]} value={{}} onFile={() => {}} />),
    ).toThrow()
  })

  it("throws on a value key no slot declares", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    const stray = { side: { id: "1", name: "x", size: 1, status: "done" as const } }
    expect(() => render(<UploadSlots slots={slots} value={stray} onFile={() => {}} />)).toThrow()
  })
})
