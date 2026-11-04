import { afterEach, describe, expect, it } from "vitest"
import { act, cleanup, render, screen } from "@testing-library/react"
import { Toaster, toast } from "./sonner"

afterEach(() => {
  act(() => void toast.dismiss())
  cleanup()
})

describe("toast", () => {
  it("has `danger`, drawn as Sonner's error type", async () => {
    render(<Toaster />)
    act(() => void toast.danger("Upload failed"))
    const el = (await screen.findByText("Upload failed")).closest("[data-sonner-toast]")
    expect(el?.getAttribute("data-type")).toBe("error")
  })

  it("keeps the plain call and the other types", async () => {
    render(<Toaster />)
    act(() => {
      toast("Saved")
      toast.success("Sent")
    })
    expect(await screen.findByText("Saved")).toBeTruthy()
    const sent = (await screen.findByText("Sent")).closest("[data-sonner-toast]")
    expect(sent?.getAttribute("data-type")).toBe("success")
  })

  it("sits in the bottom-right corner", async () => {
    render(<Toaster />)
    act(() => void toast("Saved"))
    await screen.findByText("Saved")
    const list = document.querySelector("[data-sonner-toaster]")
    expect(list?.getAttribute("data-y-position")).toBe("bottom")
    expect(list?.getAttribute("data-x-position")).toBe("right")
  })
})
