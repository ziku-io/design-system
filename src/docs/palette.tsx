import * as React from "react"

import { useTheme } from "@/hooks/use-theme"

/**
 * Documentation components for the token pages.
 *
 * Values are read from the live stylesheet with `getComputedStyle` rather than
 * copied into the page, so the docs cannot drift from `globals.css` — and they
 * follow the toolbar's theme switch.
 */

function useTokenValues(names: string[]) {
  const theme = useTheme()
  const [values, setValues] = React.useState<Record<string, string>>({})

  React.useLayoutEffect(() => {
    const styles = getComputedStyle(document.documentElement)
    const next: Record<string, string> = {}
    for (const name of names) next[name] = styles.getPropertyValue(`--${name}`).trim()
    setValues(next)
    // `theme` is the dependency that matters: the class on <html> changes and
    // every value with it.
  }, [theme, names.join(",")])

  return values
}

const mono = {
  fontFamily: "var(--font-mono, ui-monospace, monospace)",
  fontSize: 12,
} as const

/**
 * Colours are set explicitly on every cell. Storybook's docs chrome has its own
 * typography CSS, and inheriting it means the table follows the chrome's theme
 * instead of the tokens it is documenting — which reads fine by luck in one
 * theme and is unreadable in the other.
 */
const cell: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "8px 12px",
  borderBottom: "1px solid var(--border)",
  color: "var(--foreground)",
  minWidth: 0,
}

const headCell: React.CSSProperties = {
  ...cell,
  color: "var(--muted-foreground)",
  fontWeight: 500,
  fontSize: 12,
}

/** A panel that carries its own surface, so it is legible in either theme. */
const panel: React.CSSProperties = {
  margin: "16px 0",
  border: "1px solid var(--border)",
  borderRadius: 8,
  overflow: "hidden",
  background: "var(--card)",
}

export function Swatch({ token, size = 40 }: { token: string; size?: number }) {
  return (
    <span
      title={`--${token}`}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: 6,
        background: `var(--${token})`,
        border: "1px solid var(--border)",
        flexShrink: 0,
      }}
    />
  )
}

export interface TokenRow {
  token: string
  use: string
  /** Render the swatch with this text on it, to show the pairing. */
  on?: string
}

/**
 * A grid, not a `<table>`. Storybook's docs stylesheet stripes `tr` with
 * `!important`, which an inline style cannot beat, so the rows came out in the
 * chrome's colours instead of the tokens they document. Divs are not targeted.
 */
export function TokenTable({ rows }: { rows: TokenRow[] }) {
  const values = useTokenValues(rows.map((r) => r.token))
  const columns = "64px minmax(180px, 26%) 130px 1fr"

  return (
    <div style={panel} role="table">
      <div
        role="row"
        style={{ display: "grid", gridTemplateColumns: columns, background: "var(--muted)" }}
      >
        <span />
        {["Token", "Value", "Use"].map((heading) => (
          <span key={heading} role="columnheader" style={headCell}>
            {heading}
          </span>
        ))}
      </div>

      {rows.map((row, index) => (
        <div
          key={row.token}
          role="row"
          style={{
            display: "grid",
            gridTemplateColumns: columns,
            background: index % 2 ? "var(--muted)" : "var(--card)",
          }}
        >
          <span role="cell" style={cell}>
            {row.on ? (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 30,
                  borderRadius: 6,
                  background: `var(--${row.token})`,
                  color: `var(--${row.on})`,
                  border: "1px solid var(--border)",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                Aa
              </span>
            ) : (
              <Swatch token={row.token} size={30} />
            )}
          </span>
          <span role="cell" style={{ ...cell, ...mono }}>
            --{row.token}
          </span>
          <span role="cell" style={{ ...cell, ...mono, color: "var(--muted-foreground)" }}>
            {values[row.token] || "\u2014"}
          </span>
          <span role="cell" style={{ ...cell, fontSize: 13 }}>
            {row.use}
          </span>
        </div>
      ))}
    </div>
  )
}

const STATUSES = ["success", "info", "warning", "danger"] as const

/** The four status families, each shown doing all four of its jobs. */
export function StatusPalette() {
  const values = useTokenValues(STATUSES.flatMap((s) => [s, `${s}-fg`, `${s}-subtle`]))

  return (
    <div style={{ display: "grid", gap: 12, margin: "16px 0" }}>
      {STATUSES.map((status) => (
        <div
          key={status}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            padding: 12,
            border: "1px solid var(--border)",
            borderRadius: 8,
            background: "var(--card)",
          }}
        >
          <code style={{ ...mono, minWidth: 72, fontWeight: 600, color: "var(--foreground)" }}>
            {status}
          </code>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 32,
              padding: "0 14px",
              borderRadius: 6,
              background: `var(--${status})`,
              color: `var(--${status}-foreground)`,
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Button
          </span>

          <span style={{ color: `var(--${status}-fg)`, fontSize: 13, minWidth: 96 }}>
            Text on page
          </span>

          <span
            style={{
              flex: 1,
              minWidth: 220,
              padding: "8px 12px",
              borderRadius: 6,
              background: `var(--${status}-subtle)`,
              border: `1px solid var(--${status}-border)`,
              color: `var(--${status}-fg)`,
              fontSize: 13,
            }}
          >
            Banner, with a{" "}
            <span style={{ color: "var(--muted-foreground)" }}>muted description</span>
          </span>

          <code style={{ ...mono, color: "var(--muted-foreground)" }}>{values[status]}</code>
        </div>
      ))}
    </div>
  )
}

/** The brand accent, doing each of its jobs. */
export function AccentPalette() {
  const values = useTokenValues(["primary", "link", "ring", "accent"])

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "16px 0" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          height: 40,
          padding: "0 18px",
          borderRadius: 6,
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          fontWeight: 500,
        }}
      >
        Primary button
      </span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          height: 40,
          padding: "0 14px",
          color: "var(--link)",
          textDecoration: "underline",
          textUnderlineOffset: 4,
        }}
      >
        A link
      </span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          height: 40,
          padding: "0 14px",
          borderRadius: 6,
          background: "var(--field)",
          border: "1px solid var(--ring)",
          boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
          fontSize: 13,
        }}
      >
        Focus ring
      </span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          height: 40,
          padding: "0 14px",
          borderRadius: 6,
          background: "var(--accent)",
          color: "var(--accent-foreground)",
          fontSize: 13,
        }}
      >
        Hover surface
      </span>
      <code style={{ ...mono, alignSelf: "center", color: "var(--muted-foreground)" }}>
        {values.primary}
      </code>
    </div>
  )
}

/** The data-visualisation ramp. */
export function ChartPalette() {
  const tokens = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]
  const values = useTokenValues(tokens)

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "16px 0" }}>
      {tokens.map((token) => (
        <div key={token} style={{ display: "grid", gap: 6, justifyItems: "center" }}>
          <Swatch token={token} size={56} />
          <code style={{ ...mono, color: "var(--muted-foreground)" }}>{values[token]}</code>
        </div>
      ))}
    </div>
  )
}
