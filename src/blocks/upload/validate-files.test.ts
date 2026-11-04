import { describe, expect, it } from "vitest"
import { validateFiles } from "./validate-files"

const file = (name: string, type: string, size = 10) =>
  new File([new Uint8Array(size)], name, { type })
const reasons = (r: ReturnType<typeof validateFiles>) => r.rejected.map((x) => x.reason)

describe("validateFiles", () => {
  it("matches an extension case-insensitively", () => {
    expect(validateFiles([file("A.PDF", "")], { accept: ".pdf" }).accepted).toHaveLength(1)
  })

  it("matches a wildcard MIME type", () => {
    const r = validateFiles([file("a.png", "image/png"), file("a.txt", "text/plain")], {
      accept: "image/*",
    })
    expect(r.accepted.map((f) => f.name)).toEqual(["a.png"])
    expect(reasons(r)).toEqual(["type"])
  })

  it("rejects a file over maxSize", () => {
    expect(reasons(validateFiles([file("a.pdf", "application/pdf", 11)], { maxSize: 10 }))).toEqual(
      ["size"],
    )
  })

  it("rejects past maxFiles, counting only accepted files", () => {
    const r = validateFiles([file("x.txt", "text/plain"), file("a.pdf", ""), file("b.pdf", "")], {
      accept: ".pdf",
      maxFiles: 1,
    })
    expect(reasons(r)).toEqual(["type", "count"])
    expect(r.accepted.map((f) => f.name)).toEqual(["a.pdf"])
  })

  it("throws on a maxSize that cannot be met", () => {
    expect(() => validateFiles([], { maxSize: 0 })).toThrow()
  })

  it("throws on a fractional maxFiles", () => {
    expect(() => validateFiles([], { maxFiles: 1.5 })).toThrow()
  })
})
