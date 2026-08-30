import { beforeEach, describe, expect, it, vi } from "vitest"

/**
 * The prefix decides which keys a user's saved views live under. Get it wrong
 * and nobody sees an error: the views simply are not there any more, which is
 * indistinguishable from never having saved one.
 */
async function fresh() {
  vi.resetModules()
  return import("./storage")
}

describe("storage prefix", () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it("is the library's own name until an app says otherwise", async () => {
    const { storagePrefix, storageKey } = await fresh()
    expect(storagePrefix()).toBe("ziku")
    expect(storageKey("views", "clients")).toBe("ziku.views.clients")
  })

  it("takes the app's namespace", async () => {
    const { setStoragePrefix, storageKey } = await fresh()
    setStoragePrefix("acme")
    expect(storageKey("views", "clients")).toBe("acme.views.clients")
  })

  it("accepts the same prefix twice, because that is a hot reload", async () => {
    const { setStoragePrefix, storagePrefix } = await fresh()
    setStoragePrefix("acme")
    setStoragePrefix("acme")
    expect(storagePrefix()).toBe("acme")
  })

  // Changing it mid-flight leaves half the app reading a key the other half
  // never writes, and nothing goes wrong until the next refresh.
  it("refuses a second, different prefix", async () => {
    const { setStoragePrefix } = await fresh()
    setStoragePrefix("acme")
    expect(() => setStoragePrefix("other")).toThrow(/already/)
  })

  // A dot would silently nest one namespace inside another.
  it("refuses an empty prefix or one with a dot in it", async () => {
    const { setStoragePrefix } = await fresh()
    expect(() => setStoragePrefix("")).toThrow(/non-empty/)
    expect(() => setStoragePrefix("a.b")).toThrow(/no dots/)
  })
})
