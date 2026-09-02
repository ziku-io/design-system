import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { ZOOM_MAX, ZOOM_MIN, antiFlashScript, resolveTheme } from "./preferences"
import { storagePrefix } from "./storage"

describe("preferences", () => {
  afterEach(() => {
    localStorage.clear()
    document.documentElement.className = ""
    document.documentElement.style.removeProperty("--app-zoom")
  })

  it("resolves an explicit preference without asking the OS", () => {
    expect(resolveTheme("light")).toBe("light")
    expect(resolveTheme("dark")).toBe("dark")
  })

  describe("the anti-flash script", () => {
    // It runs before any bundle exists, so the only fair test is to run it the
    // way the browser will: as text, with nothing imported.
    const run = () => new Function(antiFlashScript())()

    beforeEach(() => {
      // jsdom's matchMedia always answers false, i.e. a dark-preferring machine.
      window.matchMedia = ((query: string) => ({
        matches: false,
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
      })) as unknown as typeof window.matchMedia
    })

    it("paints a stored light preference onto <html>", () => {
      localStorage.setItem(`${storagePrefix()}.theme`, "light")
      run()
      expect(document.documentElement.classList.contains("light")).toBe(true)
    })

    it("falls back to dark, and survives an unreadable store", () => {
      run()
      expect(document.documentElement.classList.contains("dark")).toBe(true)
      localStorage.setItem(`${storagePrefix()}.theme`, "sideways")
      expect(run).not.toThrow()
    })

    it("applies a stored zoom and ignores one out of range", () => {
      localStorage.setItem(`${storagePrefix()}.zoom`, "125")
      run()
      expect(document.documentElement.style.getPropertyValue("--app-zoom")).toBe("1.25")

      document.documentElement.style.removeProperty("--app-zoom")
      localStorage.setItem(`${storagePrefix()}.zoom`, String(ZOOM_MAX + 500))
      run()
      expect(document.documentElement.style.getPropertyValue("--app-zoom")).toBe("")
    })

    it("reads the namespace it was given, not another app's", () => {
      expect(antiFlashScript("portal")).toContain('"portal"')
      expect(ZOOM_MIN).toBeLessThan(ZOOM_MAX)
    })
  })
})
