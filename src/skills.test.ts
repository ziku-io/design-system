import { existsSync, readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import * as lib from "./index"

/**
 * `skills/` ships to apps and tells their agents which export does which job.
 * A renamed or removed export would leave those agents reaching for a name
 * that no longer exists, so every export-shaped name the skills mention in
 * backticks has to resolve to a value or a type exported from the package.
 */
const SKILLS = join(import.meta.dirname, "..", "skills")
const SRC = import.meta.dirname

// Component-shaped or hook/helper-shaped names; props, classes and tokens are
// lower-case or hyphenated and fall outside both. `*Icon` names are Phosphor's.
const EXPORT_SHAPED =
  /^(?:[A-Z][A-Za-z]+|[A-Z][A-Z_]+|(?:use|to|parse|list|same|download|validate|set|anti)[A-Z]\w*)$/

function markdown(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? markdown(join(dir, e.name))
      : e.name.endsWith(".md")
        ? [join(dir, e.name)]
        : [],
  )
}

function exportedTypes(): Set<string> {
  const index = readFileSync(join(SRC, "index.ts"), "utf8")
  const files = [...index.matchAll(/from "\.\/(.+?)"/g)].map((m) => m[1])
  const names = new Set<string>()
  for (const f of files) {
    const path = [".ts", ".tsx"]
      .map((ext) => join(SRC, f + ext))
      .find((p) => {
        try {
          readFileSync(p)
          return true
        } catch {
          return false // the other extension
        }
      })
    if (!path) throw new Error(`index.ts re-exports ./${f}, which has no .ts or .tsx file`)
    for (const m of readFileSync(path, "utf8").matchAll(/export (?:interface|type) (\w+)/g))
      names.add(m[1])
  }
  return names
}

describe("skills", () => {
  const docs = markdown(SKILLS)
  const types = exportedTypes()

  it("finds the skills", () => {
    expect(docs.length).toBeGreaterThanOrEqual(4)
  })

  it("names only things the package exports", () => {
    const missing = docs.flatMap((file) =>
      [...readFileSync(file, "utf8").matchAll(/`([^`\s]+)`/g)]
        .map((m) => m[1])
        .filter((name) => EXPORT_SHAPED.test(name) && !name.endsWith("Icon"))
        .filter((name) => !(name in lib) && !types.has(name))
        .map((name) => `${file.slice(SKILLS.length + 1)}: ${name}`),
    )
    expect(missing).toEqual([])
  })
})
