import * as React from "react"

import { CopyButton } from "@/blocks/copy/copy-button"
import { SURFACE } from "@/lib/surfaces"
import { cn } from "@/lib/utils"

export interface CodeBlockProps extends Omit<React.ComponentProps<"div">, "title"> {
  /** The exact text, which is also what the copy button copies. */
  code: string
  /** Over the code: a file name, a language, "Terminal". Also names what the
   *  copy button copies. */
  title?: string
  /** Shell commands: each line gets a `$` that is shown but not copied. */
  prompt?: boolean
}

/**
 * Code on a public page: an install command in the hero, a request against the
 * API further down. Monochrome on purpose: a highlighter is a dependency and a
 * theme to keep in step, and a sample short enough for a landing page reads
 * fine without one.
 */
// ponytail: no highlighting. Add a highlighter when a docs page needs long
// samples, behind a prop, so the hero command stays dependency-free.
export function CodeBlock({ code, title, prompt, className, ...props }: CodeBlockProps) {
  if (code.trim() === "") throw new Error("CodeBlock: code must be non-empty")
  const lines = code.replace(/\n$/, "").split("\n")
  const copy = <CopyButton value={code} label={title} size="icon-sm" className="shrink-0" />
  return (
    <div
      data-slot="code-block"
      className={cn(SURFACE, "min-w-0 overflow-hidden text-left", className)}
      {...props}
    >
      {title && (
        <div className="flex items-center justify-between gap-2 border-b py-1 pr-1 pl-4">
          <span className="truncate font-mono text-xs text-muted-foreground">{title}</span>
          {copy}
        </div>
      )}
      <div className="flex items-start gap-2">
        <pre className="min-w-0 flex-1 overflow-x-auto px-4 py-3 font-mono text-sm leading-6">
          <code>
            {lines.map((line, i) => (
              // `min-h-6`: an empty line is an empty span, which has no height,
              // and the blank lines that group a sample vanished.
              <span key={i} className="block min-h-6">
                {/* A line after a trailing backslash continues the command: no new prompt. */}
                {prompt && line !== "" && !lines[i - 1]?.endsWith("\\") && (
                  <span aria-hidden className="text-muted-foreground select-none">
                    {"$ "}
                  </span>
                )}
                {line}
              </span>
            ))}
          </code>
        </pre>
        {!title && <div className="p-1.5">{copy}</div>}
      </div>
    </div>
  )
}
