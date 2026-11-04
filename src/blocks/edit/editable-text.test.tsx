import { afterEach, describe, expect, it, vi } from "vitest"
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"
import { EditableText } from "./editable-text"
import { defaultStrings } from "@/lib/strings"

afterEach(cleanup)

const t = defaultStrings.editable
const open = (value: string) => fireEvent.click(screen.getByRole("button", { name: t.edit(value) }))
const field = () => screen.getByRole("textbox")

describe("EditableText", () => {
  it("saves the trimmed text on Enter", async () => {
    const onSave = vi.fn()
    render(<EditableText value="Old" onSave={onSave} />)
    open("Old")
    fireEvent.change(field(), { target: { value: "  New  " } })
    await act(async () => fireEvent.keyDown(field(), { key: "Enter" }))
    expect(onSave).toHaveBeenCalledWith("New")
    expect(screen.queryByRole("textbox")).toBeNull()
  })

  it("cancels on Escape without saving", () => {
    const onSave = vi.fn()
    render(<EditableText value="Old" onSave={onSave} />)
    open("Old")
    fireEvent.change(field(), { target: { value: "New" } })
    fireEvent.keyDown(field(), { key: "Escape" })
    expect(onSave).not.toHaveBeenCalled()
    expect(screen.getByText("Old")).toBeTruthy()
  })

  it("does not call onSave when nothing changed", async () => {
    const onSave = vi.fn()
    render(<EditableText value="Same" onSave={onSave} />)
    open("Same")
    await act(async () => fireEvent.click(screen.getByRole("button", { name: t.save })))
    expect(onSave).not.toHaveBeenCalled()
  })

  it("refuses a blank value when required", async () => {
    const onSave = vi.fn()
    render(<EditableText value="Name" onSave={onSave} required />)
    open("Name")
    fireEvent.change(field(), { target: { value: "   " } })
    await act(async () => fireEvent.keyDown(field(), { key: "Enter" }))
    expect(onSave).not.toHaveBeenCalled()
    expect(screen.getByRole("alert").textContent).toBe(t.required)
  })

  it("stays open with the reader's text when onSave rejects", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    const onSave = vi.fn().mockRejectedValue(new Error("409"))
    render(<EditableText value="Old" onSave={onSave} />)
    open("Old")
    fireEvent.change(field(), { target: { value: "New" } })
    await act(async () => fireEvent.keyDown(field(), { key: "Enter" }))
    expect((field() as HTMLInputElement).value).toBe("New")
    expect(screen.getByRole("alert").textContent).toBe(t.saveFailed)
  })
})
