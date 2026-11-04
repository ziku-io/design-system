import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import { FileDrop } from "./file-drop"

afterEach(cleanup)

describe("FileDrop limits line", () => {
  it("reads accepted types as words, not MIME syntax", () => {
    render(<FileDrop accept=".pdf,image/*,application/pdf" onFiles={() => {}} />)
    // `.pdf` and `application/pdf` are the same thing to a reader: said once.
    expect(screen.getByText("PDF, Images")).toBeTruthy()
  })

  it("drops 'each' when the zone takes one file", () => {
    render(<FileDrop maxFiles={1} maxSize={1024} onFiles={() => {}} />)
    expect(screen.getByText(/up to 1 KB$/)).toBeTruthy()
  })
})
