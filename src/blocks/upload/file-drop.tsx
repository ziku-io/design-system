import * as React from "react"
import {
  ArrowClockwiseIcon,
  CheckCircleIcon,
  FileIcon,
  UploadSimpleIcon,
  WarningCircleIcon,
  XIcon,
} from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { validateFiles, type FileRejection, type FileRules } from "./validate-files"

/**
 * The accepted types as a person reads them: `.pdf,image/*` is "PDF, Images",
 * not the MIME syntax the input takes. A type that is not an extension or an
 * image wildcard is shown by its subtype in capitals (`application/pdf` is
 * "PDF"), which is what its extension would say.
 */
function acceptLabel(accept: string, images: string): string {
  const labels = accept
    .split(",")
    .map((pattern) => pattern.trim().toLowerCase())
    .filter(Boolean)
    .map((pattern) => {
      if (pattern.startsWith(".")) return pattern.slice(1).toUpperCase()
      if (pattern === "image/*") return images
      const [type, subtype] = pattern.split("/")
      return subtype && subtype !== "*" ? subtype.toUpperCase() : type
    })
  return [...new Set(labels)].join(", ")
}

export interface FileDropProps extends FileRules {
  /** The files that passed the rules. The app uploads them; this only picks. */
  onFiles: (files: File[]) => void
  /** The ones that did not. They are also listed under the zone. */
  onReject?: (rejected: FileRejection[]) => void
  disabled?: boolean
  className?: string
  id?: string
}

/**
 * A drop zone that is also a file input. The input is real and focusable, so
 * the keyboard and a screen reader get the platform's own file dialog; the
 * zone around it only adds dragging.
 */
export function FileDrop({
  accept,
  maxSize,
  maxFiles,
  onFiles,
  onReject,
  disabled,
  className,
  id,
}: FileDropProps) {
  const t = useStrings()
  const [dragging, setDragging] = React.useState(false)
  const [rejected, setRejected] = React.useState<FileRejection[]>([])

  function take(list: FileList | null) {
    if (!list || list.length === 0) return
    const result = validateFiles(Array.from(list), { accept, maxSize, maxFiles })
    setRejected(result.rejected)
    if (result.accepted.length > 0) onFiles(result.accepted)
    if (result.rejected.length > 0) onReject?.(result.rejected)
  }

  const maxLabel = maxSize === undefined ? undefined : t.format.fileSize(maxSize)
  const limits = t.upload.limits({
    accept: accept && acceptLabel(accept, t.upload.images),
    maxSize: maxLabel,
    maxFiles,
  })
  const reason = (r: FileRejection) =>
    r.reason === "type"
      ? t.upload.wrongType(r.file.name)
      : r.reason === "size"
        ? t.upload.tooLarge(r.file.name, maxLabel ?? "")
        : t.upload.tooMany(maxFiles ?? 0)

  return (
    <div className={cn("grid gap-2", className)}>
      <label
        data-slot="file-drop"
        data-dragging={dragging}
        data-disabled={disabled}
        className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed bg-card p-6 text-center transition-colors focus-within:border-ring focus-within:ring-[1.5px] focus-within:ring-ring/80 hover:bg-accent/50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[dragging=true]:border-primary data-[dragging=true]:bg-accent"
        onDragOver={(e) => {
          e.preventDefault()
          if (!disabled) setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          if (!disabled) take(e.dataTransfer.files)
        }}
      >
        <UploadSimpleIcon aria-hidden className="size-6 text-muted-foreground" />
        <span className="text-sm">
          {maxFiles === 1 ? t.upload.dropFile : t.upload.dropHere}{" "}
          <span className="text-link underline underline-offset-4">{t.upload.browse}</span>
        </span>
        {limits && <span className="text-xs text-muted-foreground">{limits}</span>}
        <input
          id={id}
          type="file"
          className="sr-only"
          accept={accept}
          multiple={maxFiles !== 1}
          disabled={disabled}
          onChange={(e) => {
            take(e.target.files)
            // Cleared so picking the same file again still fires a change.
            e.target.value = ""
          }}
        />
      </label>
      {rejected.length > 0 && (
        <ul role="alert" className="grid gap-1 text-xs text-danger-fg">
          {rejected.map((r, i) => (
            <li key={`${r.file.name}-${i}`}>{reason(r)}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Where one file is. A union, so a failed upload cannot also carry progress. */
export type UploadStatus =
  | { status: "uploading"; progress: number }
  | { status: "done" }
  | { status: "failed"; error?: string }

export type UploadItem = {
  id: string
  name: string
  size: number
  /** Where the saved file can be fetched: the app's own download URL. Present
   *  → a download button. Set on files from an earlier session too, which is
   *  how a reader coming back gets at what they sent. */
  url?: string
  /** When it was saved. Shown beside the size once the reader may be on a
   *  later visit than the upload. */
  uploadedAt?: Date
} & UploadStatus

export interface UploadListProps extends React.ComponentProps<"ul"> {
  items: UploadItem[]
  onRemove?: (id: string) => void
  onRetry?: (id: string) => void
}

/** The files an app is holding: uploading, done or failed. */
export function UploadList({ items, onRemove, onRetry, className, ...props }: UploadListProps) {
  const t = useStrings()
  if (items.length === 0) return null
  // One width for every row's actions, so the sizes line up in a column: the
  // retry button only exists on a failed row and used to push that row's size
  // a button's width to the left of the rest.
  const slots = (onRemove ? 1 : 0) + (onRetry && items.some((i) => i.status === "failed") ? 1 : 0)
  const actionWidth = slots === 2 ? "w-16" : slots === 1 ? "w-8" : undefined
  return (
    <ul data-slot="upload-list" className={cn("grid gap-2", className)} {...props}>
      {items.map((item) => (
        // Centred: icon, size and buttons sit in the middle of the row, beside
        // a name that may carry an error under it. An uploading row is the
        // exception: its size belongs to the name line, over the bar.
        <li key={item.id} className="flex items-center gap-3 rounded-md border bg-card px-3 py-2">
          <StatusIcon item={item} />
          <div className="grid min-w-0 flex-1 gap-1">
            <div className="flex items-baseline justify-between gap-2 text-sm">
              <span className="truncate">{item.name}</span>
              {item.status === "uploading" && (
                <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                  {t.format.fileSize(item.size)}
                </span>
              )}
            </div>
            {item.status === "uploading" && (
              <Progress value={item.progress} aria-label={t.upload.uploading} className="h-1" />
            )}
            {item.status === "failed" && (
              <span className="text-xs text-danger-fg">{item.error ?? t.upload.failed}</span>
            )}
          </div>
          {item.status !== "uploading" && (
            <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
              {t.format.fileSize(item.size)}
            </span>
          )}
          {actionWidth && (
            <div className={cn("flex shrink-0 justify-end", actionWidth)}>
              {item.status === "failed" && onRetry && (
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label={t.upload.retry}
                  onClick={() => onRetry(item.id)}
                >
                  <ArrowClockwiseIcon />
                </Button>
              )}
              {onRemove && (
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label={t.upload.remove(item.name)}
                  onClick={() => onRemove(item.id)}
                >
                  <XIcon />
                </Button>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

function StatusIcon({ item }: { item: UploadItem }) {
  switch (item.status) {
    case "uploading":
      return <FileIcon aria-hidden className="size-4 shrink-0 text-muted-foreground" />
    case "done":
      return <CheckCircleIcon aria-hidden className="size-4 shrink-0 text-success-fg" />
    case "failed":
      return <WarningCircleIcon aria-hidden className="size-4 shrink-0 text-danger-fg" />
    default: {
      const never: never = item
      throw new Error("UploadList: unknown status " + JSON.stringify(never))
    }
  }
}
