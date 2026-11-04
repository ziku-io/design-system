import { readFileSync } from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import { TOKENS } from "./theme"

const css = readFileSync(path.join(__dirname, "../src/styles/globals.css"), "utf8")

describe("storybook theme", () => {
  it.each(Object.entries(TOKENS))("copies --%s from globals.css", (name, hex) => {
    const match = css.match(new RegExp(`\\n  --${name}: (#[0-9a-f]{6});`))
    expect(match?.[1], `--${name} not found in globals.css`).toBe(hex)
  })
})
