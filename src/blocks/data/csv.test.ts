import { describe, expect, it } from "vitest"

import { csvDelimiter, csvValue, toCsv } from "./csv"

interface Row {
  name: string
  hours: number
  when: Date | null
}

const columns = [
  { header: "Name", value: (r: Row) => r.name },
  { header: "Hours", value: (r: Row) => r.hours },
  { header: "When", value: (r: Row) => r.when },
]

describe("csvValue", () => {
  it("writes nothing for an absent value rather than the word for it", () => {
    // "null" in a spreadsheet cell is a value somebody has to clean up.
    expect(csvValue(null, ".")).toBe("")
    expect(csvValue(undefined, ".")).toBe("")
  })

  it("writes a number in the target decimal, with no thousands separator", () => {
    expect(csvValue(1234.5, ".")).toBe("1234.5")
    expect(csvValue(1234.5, ",")).toBe("1234,5")
    // A thousands separator is what turns one number into two columns.
    expect(csvValue(1234567.5, ",")).toBe("1234567,5")
  })

  it("refuses to write a number that is not one", () => {
    expect(csvValue(NaN, ".")).toBe("")
    expect(csvValue(Infinity, ".")).toBe("")
  })

  it("writes a date as ISO 8601, and an invalid one as nothing", () => {
    expect(csvValue(new Date("2026-03-01T00:00:00Z"), ".")).toBe("2026-03-01T00:00:00.000Z")
    expect(csvValue(new Date("nonsense"), ".")).toBe("")
  })
})

describe("csvDelimiter", () => {
  // The pairing is the point: a comma decimal with a comma delimiter is a file
  // that opens as garbage in the locale it was written for.
  it("follows the decimal, because Excel splits on its locale's list separator", () => {
    expect(csvDelimiter(",")).toBe(";")
    expect(csvDelimiter(".")).toBe(",")
  })
})

describe("toCsv", () => {
  const rows: Row[] = [
    { name: "Alpha", hours: 7.5, when: new Date("2026-03-01T00:00:00Z") },
    { name: "Beta", hours: 0, when: null },
  ]

  it("writes the header row and one line per row, CRLF separated", () => {
    const out = toCsv(rows, columns)
    expect(out.split("\r\n")).toEqual([
      "Name,Hours,When",
      "Alpha,7.5,2026-03-01T00:00:00.000Z",
      "Beta,0,",
    ])
  })

  it("switches both separators together for a comma decimal", () => {
    const out = toCsv([rows[0]], columns, ",")
    expect(out.split("\r\n")[1]).toBe("Alpha;7,5;2026-03-01T00:00:00.000Z")
  })

  it("quotes only the fields that need it, and doubles an inner quote", () => {
    const tricky: Row[] = [
      { name: "Silva, Lda.", hours: 1, when: null },
      { name: 'He said "no"', hours: 2, when: null },
      { name: "two\nlines", hours: 3, when: null },
    ]
    const lines = toCsv(tricky, columns).split("\r\n")
    expect(lines[1]).toBe('"Silva, Lda.",1,')
    expect(lines[2]).toBe('"He said ""no""",2,')
    expect(lines[3]).toBe('"two\nlines",3,')
  })

  it("does not quote a comma-free field just because the dialect uses semicolons", () => {
    expect(toCsv([{ name: "Silva, Lda.", hours: 1, when: null }], columns, ",").split("\r\n")[1]).toBe(
      "Silva, Lda.;1;",
    )
  })

  it("defuses a field a spreadsheet would run as a formula", () => {
    // The reason this matters: the name came from a text box somebody else
    // filled in, and the file opens on an accountant's machine.
    const attacks: Row[] = [
      { name: "=1+1", hours: 1, when: null },
      { name: "+34 600 000 000", hours: 1, when: null },
      { name: "-5", hours: 1, when: null },
      { name: "@SUM(A1:A9)", hours: 1, when: null },
    ]
    const lines = toCsv(attacks, columns).split("\r\n").slice(1)
    expect(lines.map((l) => l.split(",")[0])).toEqual(["'=1+1", "'+34 600 000 000", "'-5", "'@SUM(A1:A9)"])
  })

  it("still quotes a defused field that also needs quoting", () => {
    expect(toCsv([{ name: '=HYPERLINK("x")', hours: 1, when: null }], columns).split("\r\n")[1]).toBe(
      '"\'=HYPERLINK(""x"")",1,',
    )
  })

  it("writes a header-only document for no rows", () => {
    expect(toCsv([], columns)).toBe("Name,Hours,When")
  })
})
