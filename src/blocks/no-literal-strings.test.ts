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
 * JSX text: what sits between the end of one tag and the start of the next.
 *
 * The terminator has to be a real tag, `</` or `<` and a name, which is what
 * keeps TypeScript out of the results: a generic closes its `>` before a `(`,
 * a `,` or a space, so `Record<string, Foo>` and `useState<Bar>(null)` are not
 * text and are not reported.
 *
 * Both terminators are needed. `Grouped by {col}` sat between two self-closing
 * icons, so it ended at `<CaretDownIcon` rather than at a closing tag, and a
 * version of this check that only looked for `</` walked straight past it.
 *
 * The `>` must not be the second half of an arrow, or the return type in
 * `(v) => Promise<void>` reads as the word "Promise".
 */
const TEXT = /([^=])>([^<>]*?)<[A-Za-z\/]/g

/** An interpolation is the block doing its job. What is left around one is not.
 *  Stripped innermost-first and repeatedly, because an expression can nest a
 *  template literal or a callback that nests braces of its own. */
const EXPRESSION = /\{[^{}]*\}/g

function withoutExpressions(text: string): string {
  let out = text
  for (let before = ""; before !== out;) {
    before = out
    out = out.replace(EXPRESSION, " ")
  }
  return out
}

/** Entities, punctuation, and a lone symbol are not words. */
const WORD = /\p{L}{2,}/u

/**
 * Characters that never appear in a sentence a user reads, and always appear in
 * the TypeScript this scan runs over. Text carrying one of them is code that
 * happened to sit between a `>` and a `<`, not a literal.
 *
 * `,` and `.` are deliberately absent: prose is full of them, and rejecting on
 * them would let a whole sentence through.
 */
const CODE = /[[\]="'`;\\|&$():]/

/** A comment is not rendered, so it is not a literal. */
const COMMENTS = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g

/**
 * Attributes a person hears or reads. Text reaches the user through these too,
 * and the scan above only ever looked between the tags: `aria-label={`Remove
 * ${col.header}`}` shipped English to every screen reader for a release.
 *
 * The value is a literal when it is quoted or a backtick string. An expression
 * is the block reading its dictionary, which is the whole point.
 */
const SPOKEN =
  /\b(?:aria-label|aria-placeholder|title|placeholder|alt)\s*=\s*(?:"([^"]*)"|'([^']*)'|\{`([^`]*)`\})/g

/** Every backtick string, so the words around an interpolation are seen. */
const TEMPLATE = /`(?:[^`\\]|\\.)*`/g
const INTERPOLATION = /\$\{[^{}]*\}/g

function withoutInterpolations(text: string): string {
  let out = text
  for (let before = ""; before !== out;) {
    before = out
    out = out.replace(INTERPOLATION, " ")
  }
  return out
}

/**
 * A word in a template literal, ignoring the class lists that make up most of
 * them. A Tailwind class carries a `-`, a `:`, a `/` or a digit; a word a user
 * reads does not.
 *
 * ponytail: a token shape, not a parser, so a class list of bare utilities
 * (`flex items-center` is fine, `flex block` is not) would be reported. The
 * upgrade path is walking the TypeScript AST and only reading the templates
 * that sit in JSX. Until one trips it, this is two lines.
 */
const PROSE = /(?:^|\s)\p{L}{2,}(?=\s|$)/u

function templateProse(literal: string): string {
  return withoutInterpolations(literal.slice(1, -1))
}

describe("blocks", () => {
  const files = sources(BLOCKS)

  it("finds the block sources", () => {
    expect(files.length).toBeGreaterThan(5)
  })

  it.each(files.map((f) => [f.slice(BLOCKS.length + 1), f]))(
    "%s renders no literal text",
    (_name, file) => {
      const src = readFileSync(file, "utf8").replace(COMMENTS, "")
      const found: string[] = []
      for (const [, , text] of src.matchAll(TEXT)) {
        // `Page {n} of {total}` is three literals around two expressions, and
        // the two English ones are exactly the kind that hid here for a release.
        const trimmed = withoutExpressions(text).trim()
        // A leftover brace means the match started inside an expression, at the
        // `>` of an arrow function, rather than at the end of a tag.
        if (/[{}]/.test(trimmed) || CODE.test(trimmed)) continue
        if (WORD.test(trimmed)) found.push(trimmed)
      }
      expect(found).toEqual([])
    },
  )

  it.each(files.map((f) => [f.slice(BLOCKS.length + 1), f]))(
    "%s puts no literal in an attribute a user reads",
    (_name, file) => {
      const src = readFileSync(file, "utf8").replace(COMMENTS, "")
      const found: string[] = []
      for (const [, quoted, single, template] of src.matchAll(SPOKEN)) {
        const text =
          template === undefined ? (quoted ?? single ?? "") : templateProse(`\`${template}\``)
        if (WORD.test(text)) found.push(text.trim())
      }
      expect(found).toEqual([])
    },
  )

  it.each(files.map((f) => [f.slice(BLOCKS.length + 1), f]))(
    "%s wraps no sentence around an interpolation",
    (_name, file) => {
      const src = readFileSync(file, "utf8").replace(COMMENTS, "")
      const found: string[] = []
      for (const [literal] of src.matchAll(TEMPLATE)) {
        const text = templateProse(literal)
        if (PROSE.test(text)) found.push(text.trim())
      }
      expect(found).toEqual([])
    },
  )
})
