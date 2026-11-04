import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"

/**
 * The parts of `docs/foundations.mdx` that a regex can hold. Each of these was
 * found in the source by an audit after drifting in one file at a time: 22 bold
 * icons, a duotone tile, a `font-bold` count, solid black overlays. A rule that
 * lives only in a doc is a suggestion; this makes it a build failure.
 */
const ROOT = import.meta.dirname
const DIRS = ["blocks", "components/ui"].map((d) => join(ROOT, d))

function sources(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return sources(path)
    // Stories are the caller and may show anything; tests may quote the rules.
    return name.endsWith(".tsx") && !name.includes(".stories.") && !name.includes(".test.")
      ? [path]
      : []
  })
}

const COMMENTS = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g

const RULES: [name: string, pattern: RegExp][] = [
  // Phosphor at regular weight; `fill` only marks a selected state.
  ["icon weight other than regular or fill", /weight="(?:bold|duotone|thin|light)"/],
  // Sized with a class so it follows the text, never the numeric prop.
  ["icon sized with the size prop", /<\w*Icon\b[^>]*\bsize=\{\d/],
  // Floor is size-3.5, beside text-xs. Anything smaller is not legible. A
  // filled dot (a radio's indicator, a menu's checked radio item) is a mark,
  // not a glyph, and is exempt: it carries `fill-*` and no outline to read.
  [
    "icon smaller than size-3.5",
    /<\w*Icon\b(?![^>]*\bfill-)[^>]*\bsize-(?:1|1\.5|2|2\.5|3)(?![.\d])/,
  ],
  // The same floor when the size comes from a parent's `[&_svg]` selector:
  // Button's xs sizes set 12px this way and every small icon button inherited
  // it. An avatar badge's glyph sits inside a 12px dot and is a mark, exempt by
  // its `/avatar:` group selector.
  [
    "icon smaller than size-3.5 via an svg selector",
    /^(?!.*\/avatar:).*svg[^\s"]*\]:size-(?:1|1\.5|2|2\.5|3)(?![.\d])/,
  ],
  // 400, 500 and 600 only.
  ["font weight above 600", /\bfont-(?:bold|extrabold|black)\b/],
  // Light-only library: a dark variant is dead code that looks like support.
  ["dark: variant", /\bdark:/],
  // Neutrals are tinted tokens, never raw black or white.
  ["raw black or white utility", /\b(?:bg|text|border|ring|from|to)-(?:black|white)\b/],
  // One focus ring: 1.5px of the ring colour at 80%, which is 3:1 against a
  // card and the page (WCAG 1.4.11). Thinner reads as subtle; paler fails. The
  // old 3px at 50% was thick and still only 1.96:1.
  [
    "focus ring width other than 1.5px",
    /(?:focus|has-focus|focus-visible|focus-within|hover)[^\s"]*:ring-(?:\[(?!1\.5px\])[^\]]+\]|[0-9]\b)/,
  ],
  ["focus ring opacity other than 80%", /\bring-ring\/(?!80\b)\d+/],
  // The fill is tuned for text on top of it; `text-link` is for reading.
  ["text-primary used as text", /\btext-primary\b(?!-)/],
]

describe("design rules", () => {
  const files = DIRS.flatMap(sources)

  it("finds the sources", () => {
    expect(files.length).toBeGreaterThan(30)
  })

  it.each(RULES)("no %s", (_name, pattern) => {
    const hits = files.flatMap((file) =>
      readFileSync(file, "utf8")
        .replace(COMMENTS, "")
        .split("\n")
        .flatMap((line, i) =>
          pattern.test(line) ? [`${file.slice(ROOT.length + 1)}:${i + 1}`] : [],
        ),
    )
    expect(hits).toEqual([])
  })
})
