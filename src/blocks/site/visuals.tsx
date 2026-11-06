import * as React from "react"

import { SURFACE } from "@/lib/surfaces"
import { cn } from "@/lib/utils"

/**
 * The pictures on a public page are the product itself: a window holding real
 * components (a chart, a table of nodes, a status badge) or a terminal
 * session. Built from the library's own parts, so they follow the theme, stay
 * sharp at any width and never go stale the way a screenshot does.
 */

export interface WindowFrameProps extends Omit<React.ComponentProps<"div">, "title"> {
  /** In the title bar, set in mono: a host, a path, a command. */
  title: string
  /** The right end of the title bar: a status badge, a region. */
  meta?: React.ReactNode
}

/** An app window with a title bar. Put real components in it. */
export function WindowFrame({ title, meta, className, children, ...props }: WindowFrameProps) {
  if (title.trim() === "") throw new Error("WindowFrame: title must be non-empty")
  return (
    <div
      data-slot="window-frame"
      className={cn(SURFACE, "min-w-0 overflow-hidden text-left shadow-overlay", className)}
      {...props}
    >
      <div className="flex h-10 items-center gap-3 border-b bg-muted/40 px-4">
        <span className="min-w-0 truncate font-mono text-xs text-muted-foreground">{title}</span>
        {meta && <span className="ml-auto flex shrink-0 items-center gap-2">{meta}</span>}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

/** What a terminal line is. The tone says how it reads; never colour alone,
 *  so `ok`, `warn` and `error` lines should say so in their text too. */
export type TerminalLineKind = "command" | "output" | "ok" | "warn" | "error" | "comment"

export interface TerminalLine {
  kind: TerminalLineKind
  text: string
}

const TONE: Record<TerminalLineKind, string> = {
  command: "text-foreground",
  output: "text-muted-foreground",
  ok: "text-success-fg",
  warn: "text-warning-fg",
  error: "text-danger-fg",
  comment: "text-muted-foreground italic",
}

/** How long each kind holds the screen when the session plays: a command is
 *  read, output scrolls. */
const PAUSE: Record<TerminalLineKind, number> = {
  command: 700,
  output: 160,
  ok: 260,
  warn: 260,
  error: 260,
  comment: 400,
}

export interface TerminalProps extends Omit<React.ComponentProps<"div">, "title"> {
  /** The title bar: the host or the shell, "jay@node-1". */
  title: string
  lines: TerminalLine[]
  /** Type the session out once it scrolls into view. The whole session is
   *  shown at once to a reader who asked for reduced motion, and is always
   *  readable in full by a screen reader. */
  play?: boolean
  meta?: React.ReactNode
}

/** A shell session: commands with a `$`, then what they printed. */
export function Terminal({ title, lines, play, meta, className, ...props }: TerminalProps) {
  if (lines.length === 0) throw new Error("Terminal: needs at least one line")
  for (const line of lines) {
    if (!(line.kind in TONE)) {
      throw new Error(
        "Terminal: unknown line kind " +
          JSON.stringify(line.kind) +
          ", expected one of " +
          Object.keys(TONE).join(", "),
      )
    }
  }
  const ref = React.useRef<HTMLDivElement>(null)
  const [shown, setShown] = React.useState(play ? 0 : lines.length)

  React.useEffect(() => {
    if (!play) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(lines.length)
      return
    }
    const el = ref.current
    if (!el) return
    let timer: ReturnType<typeof setTimeout> | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        let n = 0
        const step = () => {
          n += 1
          setShown(n)
          if (n < lines.length) timer = setTimeout(step, PAUSE[lines[n - 1].kind])
        }
        timer = setTimeout(step, 300)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [play, lines])

  const playing = shown < lines.length
  return (
    <WindowFrame ref={ref} title={title} meta={meta} className={className} {...props}>
      {/* The full text for a screen reader; the typed copy is decoration. */}
      <pre className="sr-only">
        {lines.map((l) => (l.kind === "command" ? "$ " : "") + l.text).join("\n")}
      </pre>
      <pre
        aria-hidden
        // The height of the whole session is held while it types, so the page
        // under it does not move with every line.
        style={play ? { minHeight: (lines.length + 1) * 24 } : undefined}
        className="overflow-x-auto bg-card px-4 py-3 font-mono text-[13px] leading-6"
      >
        {lines.slice(0, shown).map((line, i) => (
          <span key={i} className={cn("block min-h-6 whitespace-pre", TONE[line.kind])}>
            {line.kind === "command" && (
              <span className="text-muted-foreground select-none">{"$ "}</span>
            )}
            {line.text}
          </span>
        ))}
        {playing && (
          <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-foreground/70" />
        )}
      </pre>
    </WindowFrame>
  )
}
