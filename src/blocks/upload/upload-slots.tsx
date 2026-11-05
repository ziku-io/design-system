import * as React from "react"
import {
  ArrowClockwiseIcon,
  CheckCircleIcon,
  CircleDashedIcon,
  DownloadSimpleIcon,
  FileIcon,
  WarningCircleIcon,
  XIcon,
} from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FileDrop, type UploadItem } from "./file-drop"
import type { FileRejection } from "./validate-files"

export interface UploadSlot {
  id: string
  /** What goes here: "Driving licence, front". */
  label: string
  /** A line under the label: "A photo, all four corners visible." */
  description?: string
  accept?: string
  maxSize?: number
  /** Marked as optional beside the label. Every slot is required otherwise. */
  optional?: boolean
  /**
   * Takes any number of files, added over time: invoices, receipts. It stays
   * in the picker after each file and takes several in one drop. Without it a
   * slot holds one file and leaves the picker once it has it.
   */
  multiple?: boolean
}

export interface UploadSlotsProps {
  slots: UploadSlot[]
  /**
   * What each slot holds, keyed by slot id: the files from this visit and from
   * earlier ones. An absent key or `[]` is an empty slot. A slot without
   * `multiple` holding more than one is refused.
   */
  value: Partial<Record<string, UploadItem[]>>
  /** One file for the slot the reader picked. Called once per file, so a
   *  batch of invoices is several calls. The app uploads each and adds it to
   *  `value`. */
  onFile: (slotId: string, file: File) => void
  /** Files the picked slot refused, by its own rules. */
  onReject?: (slotId: string, rejected: FileRejection[]) => void
  /** Called after the reader confirms. The app deletes it and drops it from `value`. */
  onRemove?: (slotId: string, itemId: string) => void
  onRetry?: (slotId: string, itemId: string) => void
  disabled?: boolean
  className?: string
}

/**
 * A set of named documents filled from one drop zone: the front and back of a
 * licence, a proof of address, a running pile of invoices.
 *
 * Left, the zone and a select saying which document the next files are; it
 * starts on the first one still missing and moves on once that one is in. A
 * `multiple` document takes a batch in one drop and stays selected.
 * Right, the checklist: every document, with its files once it has them, each
 * one downloadable when the app gives it a `url` and removable after a
 * confirmation. The list is what was saved, so a reader coming back in a later
 * session sees and fetches what they sent last time.
 */
export function UploadSlots({
  slots,
  value,
  onFile,
  onReject,
  onRemove,
  onRetry,
  disabled,
  className,
}: UploadSlotsProps) {
  const strings = useStrings()
  const t = strings.upload
  const format = strings.format
  const inputId = React.useId()
  const ids = new Set(slots.map((s) => s.id))
  // Two slots under one id would share a value and a callback: a back photo
  // would land in the front's place without anyone noticing.
  if (ids.size !== slots.length) throw new Error("UploadSlots: slot ids must be unique")
  const unknown = Object.keys(value).filter((k) => !ids.has(k))
  if (unknown.length)
    throw new Error("UploadSlots: value has keys no slot declares: " + unknown.join(", "))
  const held = (slot: UploadSlot) => value[slot.id] ?? []
  for (const slot of slots)
    if (!slot.multiple && held(slot).length > 1)
      throw new Error(
        "UploadSlots: slot " +
          slot.id +
          " holds " +
          held(slot).length +
          " files but is not multiple",
      )

  const missing = slots.filter((s) => held(s).length === 0)
  // Still taking files: everything missing, and every multiple slot.
  const open = slots.filter((s) => s.multiple || held(s).length === 0)
  const firstOpen = missing.find((s) => !s.optional) ?? missing[0] ?? open[0]
  const [picked, setPicked] = React.useState<string | undefined>(firstOpen?.id)
  // A pick that has since been filled (here, or by the app) is no longer a
  // target; fall forward to the next missing document instead of dropping a
  // second file onto it.
  const target = open.find((s) => s.id === picked) ?? firstOpen
  const done = slots.filter((s) => held(s).length > 0).length

  const take = (files: File[]) => {
    if (!target) return
    for (const file of files) onFile(target.id, file)
    // A pile keeps its pick: the next invoice goes where the last one went.
    // Otherwise on to the next document, so a stack of scans goes in one
    // after another without touching the select.
    if (target.multiple) return
    setPicked(missing.find((s) => s.id !== target.id && !s.optional)?.id)
  }

  return (
    <div
      data-slot="upload-slots"
      className={cn("grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]", className)}
    >
      <div className="grid content-start gap-3">
        {open.length === 0 ? (
          <p className="flex items-center gap-2 rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
            <CheckCircleIcon aria-hidden className="size-4 text-success-fg" />
            {t.allIn}
          </p>
        ) : (
          <>
            <div className="grid gap-1.5">
              <Label htmlFor={inputId + "-pick"}>{t.thisFileIs}</Label>
              <Select value={target?.id} onValueChange={setPicked} disabled={disabled}>
                <SelectTrigger id={inputId + "-pick"} className="w-full">
                  <SelectValue placeholder={t.pickDocument} />
                </SelectTrigger>
                <SelectContent>
                  {open.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Keyed on the slot, so the rejection list under the zone belongs
             *  to the document it was about and clears when the pick changes. */}
            <FileDrop
              key={target?.id}
              id={inputId}
              accept={target?.accept}
              maxSize={target?.maxSize}
              // A batch only into a document that takes one: several files
              // for a single-file document would have nowhere to go.
              maxFiles={target?.multiple ? undefined : 1}
              disabled={disabled || !target}
              onFiles={take}
              onReject={onReject && target && ((rejected) => onReject(target.id, rejected))}
            />
          </>
        )}
      </div>

      <section aria-labelledby={inputId + "-list"} className="grid content-start gap-2">
        <div className="flex items-baseline justify-between gap-2">
          <h3 id={inputId + "-list"} className="text-sm font-medium">
            {t.documents}
          </h3>
          <span className="text-xs text-muted-foreground tabular-nums">
            {t.uploadedCount(done, slots.length)}
          </span>
        </div>
        <ul className="grid gap-2">
          {slots.map((slot) => {
            const files = held(slot)
            return (
              <li key={slot.id} className="flex items-start gap-2 rounded-lg border bg-card p-3">
                <SlotIcon files={files} />
                <div className="grid min-w-0 flex-1 gap-1">
                  <span className="text-sm">
                    {slot.label}
                    {slot.optional && (
                      <span className="ml-1.5 text-muted-foreground">{t.optional}</span>
                    )}
                    {slot.multiple && files.length > 0 && (
                      <span className="ml-1.5 text-xs text-muted-foreground tabular-nums">
                        {format.number(files.length)}
                      </span>
                    )}
                  </span>
                  {slot.description && files.length === 0 && (
                    <span className="text-xs text-muted-foreground">{slot.description}</span>
                  )}
                  {files.length === 0 ? (
                    <span className="text-xs text-muted-foreground">{t.missing}</span>
                  ) : (
                    // The files on the document's own row, not cards inside the
                    // card: the row is the document, the files are its value.
                    <ul className="grid gap-1">
                      {files.map((item) => (
                        <FileLine
                          key={item.id}
                          item={item}
                          onRemove={onRemove && (() => onRemove(slot.id, item.id))}
                          onRetry={onRetry && (() => onRetry(slot.id, item.id))}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

/** One file under its document: name, size, when, and what can be done to it. */
function FileLine({
  item,
  onRemove,
  onRetry,
}: {
  item: UploadItem
  onRemove?: () => void
  onRetry?: () => void
}) {
  const strings = useStrings()
  const t = strings.upload
  const format = strings.format
  return (
    <li className="grid gap-1">
      <div className="flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
        <FileIcon aria-hidden className="size-3.5 shrink-0" />
        <span className="truncate text-foreground">{item.name}</span>
        <span className="shrink-0 tabular-nums">{format.fileSize(item.size)}</span>
        {item.uploadedAt && (
          <span className="hidden shrink-0 sm:inline">{t.uploadedOn(item.uploadedAt)}</span>
        )}
        <span className="ml-auto flex shrink-0 items-center">
          {item.status === "failed" && onRetry && (
            <Button variant="ghost" size="icon-xs" aria-label={t.retry} onClick={onRetry}>
              <ArrowClockwiseIcon />
            </Button>
          )}
          {/* A link, not a button that fetches: the app's own URL, so its
           *  auth, its headers and its filename apply, and the browser's
           *  download handling (open, save, resume) comes with it. */}
          {item.url && item.status === "done" && (
            <Button variant="ghost" size="icon-xs" asChild>
              <a href={item.url} download={item.name} aria-label={t.download(item.name)}>
                <DownloadSimpleIcon />
              </a>
            </Button>
          )}
          {onRemove && <ConfirmRemove name={item.name} onConfirm={onRemove} />}
        </span>
      </div>
      {item.status === "uploading" && (
        <Progress value={item.progress} aria-label={t.uploading} className="h-1" />
      )}
      {item.status === "failed" && (
        <span className="text-xs text-danger-fg">{item.error ?? t.failed}</span>
      )}
    </li>
  )
}

/**
 * The cross, behind a confirmation. A file sent in another session may be the
 * only copy the reader has; one stray click on a 24px target was enough to
 * lose it.
 */
function ConfirmRemove({ name, onConfirm }: { name: string; onConfirm: () => void }) {
  const t = useStrings()
  const [open, setOpen] = React.useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-xs" aria-label={t.upload.remove(name)}>
          <XIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="grid w-64 gap-3 p-3" role="alertdialog">
        <p className="text-sm">{t.upload.removeConfirm(name)}</p>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
            {t.common.cancel}
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              setOpen(false)
              onConfirm()
            }}
          >
            {t.upload.removeAction}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

/** Missing, uploading, in, or failed: the mark at the start of a row. A
 *  failure anywhere in the slot wins, then an upload in flight. */
function SlotIcon({ files }: { files: UploadItem[] }) {
  // One return, not four: the literal scan reads the gap between two JSX
  // returns as text.
  const [Ic, tone] =
    files.length === 0
      ? [CircleDashedIcon, "text-muted-foreground"]
      : files.some((f) => f.status === "failed")
        ? [WarningCircleIcon, "text-danger-fg"]
        : files.some((f) => f.status === "uploading")
          ? [FileIcon, "text-muted-foreground"]
          : [CheckCircleIcon, "text-success-fg"]
  return <Ic aria-hidden className={cn("mt-0.5 size-4 shrink-0", tone)} />
}
