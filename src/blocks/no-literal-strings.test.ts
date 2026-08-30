import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"

/**
 * No block renders a word it did not get from the dictionary.
 *
 * The "Translated" stories prove a block *can* be translated. They cannot prove
 * it is translated everywhere, because a literal that nothing overrides renders
 * the same in both languages and the story still looks right. Three of them
 * survived that way and were found by a person looking at a Portuguese app with
 * an English "Filter" button in it.
 *
 * So this reads the source instead. Any JSX text node in `src/blocks/` holding
 * two or more letters is a literal somebody has to justify, and the only
 * justification is being in `useStrings()`.
 */
const BLOCKS = join(import.meta.dirname, ".")

function sources(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return sources(path)
    // Stories and tests are allowed their own words: they are the caller.
    return name.endsWith(".tsx") && !name.includes(".stories.") && !name.includes(".test.")
      ? [path]
      : []
  })
}

/**
 * JSX text: what sits between the end of an opening tag and a closing one.
 *
 * The closing `</` is what keeps TypeScript out of the results. A generic ends
 * its `>` before a `(`, a `,` or a space, never before `</`, so
 * `Record<string, Foo>` and `useState<Bar>(null)` are not text and are not
 * reported.
 */
const TEXT = />([^<>]*?)<\//g

/** An interpolation is the block doing its job. What is left around one is not.
 *  Stripped innermost-first and repeatedly, because an expression can nest a
 *  template literal or a callback that nests braces of its own. */
const EXPRESSION = /\{[^{}]*\}/g

function withoutExpressions(text: string): string {
  let out = text
  for (let before = ""; before !== out; ) {
    before = out
    out = out.replace(EXPRESSION, " ")
  }
  return out
}

/** Entities, punctuation, and the em dash placeholder are not words. */
const WORD = /\p{L}{2,}/u

describe("blocks", () => {
  const files = sources(BLOCKS)

  it("finds the block sources", () => {
    expect(files.length).toBeGreaterThan(5)
  })

  it.each(files.map((f) => [f.slice(BLOCKS.length + 1), f]))(
    "%s renders no literal text",
    (_name, file) => {
      const src = readFileSync(file, "utf8")
      const found: string[] = []
      for (const [, text] of src.matchAll(TEXT)) {
        // `Page {n} of {total}` is three literals around two expressions, and
        // the two English ones are exactly the kind that hid here for a release.
        const trimmed = withoutExpressions(text).trim()
        // A leftover brace means the match started inside an expression, at the
        // `>` of an arrow function, rather than at the end of a tag.
        if (/[{}]/.test(trimmed)) continue
        if (WORD.test(trimmed)) found.push(trimmed)
      }
      expect(found).toEqual([])
    },
  )
})
