import { afterEach, describe, expect, it, vi } from "vitest"
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"

import { COPY_FEEDBACK_MS, CopyButton, CopyField } from "./copy-button"
import { defaultStrings } from "@/lib/strings"

const t = defaultStrings.copy

function stubClipboard(writeText: ((text: string) => Promise<void>) | undefined) {
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: writeText ? { writeText } : undefined,
  })
}

afterEach(() => {
  cleanup()
  vi.useRealTimers()
  stubClipboard(undefined)
})

const button = (label: string) => screen.getByRole("button", { name: t.copy(label) })
const announced = () => document.querySelector("[aria-live]")?.textContent

describe("CopyButton", () => {
  it("copies the exact value, says so, then resets", async () => {
    vi.useFakeTimers()
    const writeText = vi.fn().mockResolvedValue(undefined)
    const onCopy = vi.fn()
    stubClipboard(writeText)
    render(<CopyButton value=" PT50 0000 " label="IBAN" onCopy={onCopy} />)

    await act(async () => fireEvent.click(button("IBAN")))
    expect(writeText).toHaveBeenCalledWith(" PT50 0000 ")
    expect(onCopy).toHaveBeenCalledWith(" PT50 0000 ")
    expect(announced()).toBe(t.copied)

    act(() => vi.advanceTimersByTime(COPY_FEEDBACK_MS))
    expect(announced()).toBe("")
  })

  it("says it failed when the clipboard rejects", async () => {
    const refusal = new Error("NotAllowedError")
    const onError = vi.fn()
    stubClipboard(vi.fn().mockRejectedValue(refusal))
    render(<CopyButton value="x" label="code" onError={onError} />)

    await act(async () => fireEvent.click(button("code")))
    expect(onError).toHaveBeenCalledWith(refusal)
    expect(announced()).toBe(t.failed)
  })

  it("says it failed when there is no clipboard at all", async () => {
    stubClipboard(undefined)
    const onError = vi.fn()
    render(<CopyButton value="x" label="code" onError={onError} />)

    await act(async () => fireEvent.click(button("code")))
    expect(onError).toHaveBeenCalledOnce()
    expect(announced()).toBe(t.failed)
  })

  it("is disabled with nothing to copy", () => {
    render(<CopyButton value="" label="phone" />)
    expect((button("phone") as HTMLButtonElement).disabled).toBe(true)
  })
})

describe("CopyField", () => {
  it("renders the term and value, with no button when copy is off", () => {
    render(
      <dl>
        <CopyField label="Status" value="Paid" copy={false} />
      </dl>,
    )
    expect(screen.getByText("Status").tagName).toBe("DT")
    expect(screen.getByText("Paid")).toBeTruthy()
    expect(screen.queryByRole("button")).toBeNull()
  })
})
