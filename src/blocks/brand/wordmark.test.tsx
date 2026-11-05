import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { Wordmark } from "./wordmark"

describe("Wordmark", () => {
  // A blank name renders an invisible logo, which nobody notices until launch.
  it("rejects a blank name", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() => render(<Wordmark>{"  "}</Wordmark>)).toThrow()
  })
})
