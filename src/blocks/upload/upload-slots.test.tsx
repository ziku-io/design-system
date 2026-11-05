import { afterEach, describe, expect, it, vi } from "vitest"
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"
import { UploadSlots } from "./upload-slots"
import { defaultStrings } from "@/lib/strings"

afterEach(cleanup)

const t = defaultStrings.upload
const held = { id: "1", name: "front.png", size: 10, status: "done" as const }
const slots = [
  { id: "front", label: "Front", accept: "image/*" },
  { id: "back", label: "Back", accept: "image/*" },
]
const drop = () => document.querySelector<HTMLInputElement>("input[type=file]")!
const png = (name: string) => new File(["x"], name, { type: "image/png" })

describe("UploadSlots", () => {
  it("sends a file to the first missing document, then moves to the next", () => {
    const onFile = vi.fn()
    const { rerender } = render(<UploadSlots slots={slots} value={{}} onFile={onFile} />)
    fireEvent.change(drop(), { target: { files: [png("a.png")] } })
    expect(onFile).toHaveBeenLastCalledWith("front", expect.any(File))
    rerender(<UploadSlots slots={slots} value={{ front: [held] }} onFile={onFile} />)
    fireEvent.change(drop(), { target: { files: [png("b.png")] } })
    expect(onFile).toHaveBeenLastCalledWith("back", expect.any(File))
  })

  it("lists a held file under its document, and the rest as missing", () => {
    render(<UploadSlots slots={slots} value={{ front: [held] }} onFile={() => {}} />)
    expect(screen.getByText("front.png")).toBeTruthy()
    expect(screen.getAllByText(t.missing)).toHaveLength(1)
  })

  it("refuses a file the selected document does not take", () => {
    const onFile = vi.fn()
    const onReject = vi.fn()
    const pdf = [{ id: "pdf", label: "Statement", accept: ".pdf" }]
    render(<UploadSlots slots={pdf} value={{}} onFile={onFile} onReject={onReject} />)
    fireEvent.change(drop(), { target: { files: [png("x.png")] } })
    expect(onFile).not.toHaveBeenCalled()
    expect(onReject).toHaveBeenCalledWith("pdf", expect.any(Array))
  })

  // A single-file document has room for one; a batch would lose all but one.
  it("takes one file at a time for a single-file document", () => {
    render(<UploadSlots slots={slots} value={{}} onFile={() => {}} />)
    expect(drop().multiple).toBe(false)
  })

  it("keeps a multiple slot open and takes several files in one drop", () => {
    const onFile = vi.fn()
    const pile = [{ id: "inv", label: "Invoices", multiple: true }]
    render(<UploadSlots slots={pile} value={{ inv: [held] }} onFile={onFile} />)
    expect(drop().multiple).toBe(true)
    fireEvent.change(drop(), { target: { files: [png("a.png"), png("b.png")] } })
    expect(onFile).toHaveBeenCalledTimes(2)
    expect(onFile).toHaveBeenLastCalledWith("inv", expect.any(File))
  })

  it("offers a download for a saved file with a url", () => {
    const saved = { ...held, url: "/files/1" }
    render(<UploadSlots slots={slots} value={{ front: [saved] }} onFile={() => {}} />)
    const link = screen.getByRole("link", { name: t.download("front.png") })
    expect(link.getAttribute("href")).toBe("/files/1")
  })

  it("downloads through onDownload, as a button, when given", async () => {
    let finish!: () => void
    const onDownload = vi.fn(() => new Promise<void>((r) => (finish = r)))
    const saved = { ...held, url: "/files/1" }
    render(
      <UploadSlots
        slots={slots}
        value={{ front: [saved] }}
        onFile={() => {}}
        onDownload={onDownload}
      />,
    )
    expect(screen.queryByRole("link")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: t.download("front.png") }))
    expect(onDownload).toHaveBeenCalledWith("front", saved)
    const pending = screen.getByRole("button", { name: t.downloading("front.png") })
    expect((pending as HTMLButtonElement).disabled).toBe(true)
    await act(async () => finish())
    expect(screen.getByRole("button", { name: t.download("front.png") })).toBeTruthy()
    expect(screen.queryByRole("alert")).toBeNull()
  })

  it("shows a failed state when onDownload rejects", async () => {
    const onDownload = vi.fn(() => Promise.reject(new Error("401")))
    render(
      <UploadSlots
        slots={slots}
        value={{ front: [held] }}
        onFile={() => {}}
        onDownload={onDownload}
      />,
    )
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: t.download("front.png") }))
    })
    expect(screen.getByRole("alert").textContent).toBe(t.downloadFailed)
  })

  // One stray click on the cross used to delete the only copy.
  it("removes only after the reader confirms", () => {
    const onRemove = vi.fn()
    render(
      <UploadSlots slots={slots} value={{ front: [held] }} onFile={() => {}} onRemove={onRemove} />,
    )
    fireEvent.click(screen.getByRole("button", { name: t.remove("front.png") }))
    expect(onRemove).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole("button", { name: t.removeAction }))
    expect(onRemove).toHaveBeenCalledWith("front", "1")
  })

  it("throws when a single-file slot holds two", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() =>
      render(
        <UploadSlots
          slots={slots}
          value={{ front: [held, { ...held, id: "2" }] }}
          onFile={() => {}}
        />,
      ),
    ).toThrow(/not multiple/)
  })

  it("throws on duplicate slot ids", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() =>
      render(<UploadSlots slots={[slots[0], slots[0]]} value={{}} onFile={() => {}} />),
    ).toThrow()
  })

  it("throws on a value key no slot declares", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() =>
      render(<UploadSlots slots={slots} value={{ side: [held] }} onFile={() => {}} />),
    ).toThrow()
  })
})
