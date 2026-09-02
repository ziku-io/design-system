import * as React from "react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, createEvent, fireEvent, render, screen } from "@testing-library/react"

import { Combobox, type ComboboxItem } from "./combobox"

afterEach(cleanup)

const PEOPLE: ComboboxItem[] = [
  { id: "1", label: "Ana Silva" },
  { id: "2", label: "António Silvestre" },
  { id: "3", label: "Ada Lovelace" },
]

function setup() {
  const onSelect = vi.fn()
  function Host() {
    const [query, setQuery] = React.useState("")
    const matches = PEOPLE.filter((p) => p.label.toLowerCase().includes(query.toLowerCase()))
    return (
      <Combobox
        label="Assign to"
        items={matches}
        query={query}
        onQueryChange={setQuery}
        onSelect={onSelect}
      />
    )
  }
  render(<Host />)
  return { onSelect, input: screen.getByRole("combobox") }
}

const key = (input: HTMLElement, k: string) => fireEvent.keyDown(input, { key: k })

describe("Combobox", () => {
  it("takes the highlighted result on Enter, not the first one", () => {
    const { onSelect, input } = setup()
    fireEvent.change(input, { target: { value: "Sil" } })
    expect(screen.getAllByRole("option")).toHaveLength(2)

    key(input, "ArrowDown")
    key(input, "Enter")

    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ label: "António Silvestre" }))
  })

  it("wraps at both ends and points at what it highlights", () => {
    const { input } = setup()
    fireEvent.focus(input)

    const active = () => screen.getByRole("option", { selected: true }).textContent
    expect(active()).toBe("Ana Silva")
    key(input, "ArrowUp")
    expect(active()).toBe("Ada Lovelace")
    key(input, "ArrowDown")
    expect(active()).toBe("Ana Silva")

    // aria-activedescendant has to name the option a screen reader should read.
    const id = input.getAttribute("aria-activedescendant")
    expect(screen.getByRole("option", { selected: true }).id).toBe(id)
  })

  it("clamps the highlight when the list shrinks under it", () => {
    const { onSelect, input } = setup()
    fireEvent.focus(input)
    key(input, "ArrowDown")
    key(input, "ArrowDown")

    // Three matches down to one: an index of 2 now points past the end.
    fireEvent.change(input, { target: { value: "Lovelace" } })
    key(input, "Enter")

    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ label: "Ada Lovelace" }))
  })

  it("leaves Enter alone when the list is closed, so the form can submit", () => {
    render(<Combobox label="Assign to" items={[]} onSelect={() => {}} />)
    const input = screen.getByRole("combobox")
    const event = createEvent.keyDown(input, { key: "Enter" })
    fireEvent(input, event)
    // Swallowing this is how a combobox breaks the form it is sitting in.
    expect(event.defaultPrevented).toBe(false)
    expect(input.getAttribute("aria-expanded")).toBe("false")
  })
})
