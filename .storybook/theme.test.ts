import { readFileSync } from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import { TOKENS } from "./theme"

const css = readFileSync(path.join(__dirname, "../src/styles/globals.css"), "utf8")
const split = css.indexOf(':root[data-theme="dark"]')
const blocks = { light: css.slice(0, split), dark: css.slice(split) }

describe("storybook theme", () => {
  it("finds the dark block in globals.css", () => expect(split).toBeGreaterThan(0))

  for (const mode of ["light", "dark"] as const)
    it.each(Object.entries(TOKENS[mode]))(`copies ${mode} --%s from globals.css`, (name, hex) => {
      const match = blocks[mode].match(new RegExp(`\\n  --${name}: (#[0-9a-f]{6});`))
      expect(match?.[1], `--${name} not found in the ${mode} block`).toBe(hex)
    })
})
