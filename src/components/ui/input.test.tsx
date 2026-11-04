import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { Input } from "./input"
import { defaultStrings } from "@/lib/strings"

afterEach(cleanup)

const t = defaultStrings.ui
const pick = (input: HTMLElement, files: File[]) => fireEvent.change(input, { target: { files } })

describe("Input type=file", () => {
  it("keeps the native input, reachable by its label", () => {
    render(
      <>
        <label htmlFor="cv">CV</label>
        <Input id="cv" type="file" />
      </>,
    )
    const input = screen.getByLabelText("CV") as HTMLInputElement
    expect(input.type).toBe("file")
    expect(screen.getByText(t.chooseFile)).toBeTruthy()
  })

  it("shows the picked file's name and still calls onChange", () => {
    const onChange = vi.fn()
    render(<Input type="file" aria-label="CV" onChange={onChange} />)
    pick(screen.getByLabelText("CV"), [new File(["x"], "cv.pdf")])
    expect(screen.getByText("cv.pdf")).toBeTruthy()
    expect(onChange).toHaveBeenCalledOnce()
  })

  it("shows a count when several are picked", () => {
    render(<Input type="file" multiple aria-label="Receipts" />)
    pick(screen.getByLabelText("Receipts"), [new File(["a"], "a.png"), new File(["b"], "b.png")])
    expect(screen.getByText(t.filesChosen(2))).toBeTruthy()
  })
})
