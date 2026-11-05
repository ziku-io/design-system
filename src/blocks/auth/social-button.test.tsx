import { render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { SocialButton, type SocialProvider } from "./social-button"

describe("SocialButton", () => {
  // A provider id read from config bypasses the type; it must not render a
  // blank button that signs nobody in.
  it("rejects an unknown provider", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() => render(<SocialButton provider={"gitlab" as SocialProvider} />)).toThrow(/google/)
  })
})
