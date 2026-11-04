import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render } from "@testing-library/react"
import { UserAvatar } from "./avatar"

afterEach(cleanup)

const tint = (name: string) => {
  const { container } = render(<UserAvatar name={name} />)
  const cls = container.querySelector("[data-slot=avatar-fallback]")!.className
  cleanup()
  return cls.match(/bg-slot-\d-subtle/)?.[0]
}

describe("UserAvatar tint", () => {
  it("gives the same name the same slot on every render", () => {
    expect(tint("Ana Silva")).toBeDefined()
    expect(tint("Ana Silva")).toBe(tint("Ana Silva"))
  })

  it("spreads a team across more than one slot", () => {
    const names = [
      "Ana Silva",
      "Rui Costa",
      "Ada Lovelace",
      "Beatriz Costa",
      "Carlos Dias",
      "Grace Hopper",
    ]
    expect(new Set(names.map(tint)).size).toBeGreaterThan(1)
  })
})
