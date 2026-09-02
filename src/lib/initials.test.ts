import { describe, expect, it } from "vitest"

import { initials } from "./initials"

describe("initials", () => {
  it("takes the first and the last word, not the first two", () => {
    expect(initials("Ada Lovelace")).toBe("AL")
    expect(initials("Maria de Sousa Pinto")).toBe("MP")
  })

  it("survives one name, extra spaces and nothing at all", () => {
    expect(initials("Prince")).toBe("P")
    expect(initials("  Ada   Lovelace  ")).toBe("AL")
    expect(initials("   ")).toBe("")
  })

  it("does not cut a character in half", () => {
    // Two code units, one letter: `slice(0, 2)` would return a lone surrogate.
    expect(initials("𝒜da 𝓁ovelace")).toBe("𝒜𝓁".toUpperCase())
  })
})
