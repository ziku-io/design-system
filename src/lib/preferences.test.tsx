import { afterEach, describe, expect, it } from "vitest"
import { act, cleanup, fireEvent, render, renderHook, screen } from "@testing-library/react"

import { antiFlashScript, useTheme, useZoom } from "./preferences"
import { ZoomStepper } from "@/blocks/shell/preference-menus"
import { defaultStrings } from "./strings"

afterEach(cleanup)
const t = defaultStrings.preferences

describe("theme", () => {
  it("puts the picked theme on <html> and persists it", () => {
    const { result } = renderHook(() => useTheme())
    act(() => result.current.setTheme("dark"))
    expect(document.documentElement.dataset.theme).toBe("dark")
    expect(localStorage.getItem("ziku.theme")).toBe("dark")
    act(() => result.current.setTheme("light"))
    expect(document.documentElement.dataset.theme).toBe("light")
  })

  // A value from devtools or another version must not become a theme.
  it("rejects an unknown theme", () => {
    const { result } = renderHook(() => useTheme())
    expect(() => result.current.setTheme("sepia" as never)).toThrow(/light, dark, system/)
  })

  it("applies the stored theme before first paint", () => {
    localStorage.setItem("ziku.theme", "dark")
    document.documentElement.dataset.theme = ""
    new Function(antiFlashScript())()
    expect(document.documentElement.dataset.theme).toBe("dark")
  })
})

describe("ZoomStepper", () => {
  const field = () => screen.getByRole("textbox", { name: t.zoomPercent }) as HTMLInputElement

  it("steps through the levels and stops at the ends", () => {
    const { result } = renderHook(() => useZoom())
    act(() => result.current.setZoom(125))
    render(<ZoomStepper />)
    const plus = screen.getByRole("button", { name: t.zoomIn })
    fireEvent.click(plus)
    expect(field().value).toBe("150")
    expect((plus as HTMLButtonElement).disabled).toBe(true)
  })

  it("applies a typed value on Enter, clamped to the range", () => {
    render(<ZoomStepper />)
    fireEvent.change(field(), { target: { value: "300" } })
    fireEvent.keyDown(field(), { key: "Enter" })
    expect(field().value).toBe("150")
    expect(document.documentElement.style.getPropertyValue("--app-zoom")).toBe("1.5")
  })

  // An empty or junk field must not zoom the page to anything.
  it("puts the last value back when the field holds no number", () => {
    const { result } = renderHook(() => useZoom())
    act(() => result.current.setZoom(110))
    render(<ZoomStepper />)
    fireEvent.change(field(), { target: { value: "" } })
    fireEvent.blur(field())
    expect(field().value).toBe("110")
  })

  it("offers the reset only when zoom is off 100%", () => {
    const { result } = renderHook(() => useZoom())
    act(() => result.current.setZoom(100))
    render(<ZoomStepper />)
    expect(screen.queryByRole("button", { name: t.resetZoom })).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: t.zoomIn }))
    fireEvent.click(screen.getByRole("button", { name: t.resetZoom }))
    expect(field().value).toBe("100")
  })
})
