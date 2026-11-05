import { afterEach, describe, expect, it } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"

import { ChipPicker } from "./chip-picker"

afterEach(cleanup)

describe("ChipPicker", () => {
  // Each option is a button; a Checkbox inside it was a second, nested
  // button: invalid HTML, and a React error on every open.
  it("draws no button inside an option", () => {
    render(
      <ChipPicker
        options={[
          { value: "a", label: "Alpha" },
          { value: "b", label: "Beta" },
        ]}
        value={["a"]}
        onChange={() => {}}
        placeholder="Pick"
      />,
    )
    fireEvent.click(screen.getByRole("button", { name: /Alpha|Pick/ }))
    const options = screen.getAllByRole("option")
    expect(options).toHaveLength(2)
    for (const option of options) expect(option.querySelector("button")).toBeNull()
  })
})
