import * as React from "react"

import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"
import { Label } from "@/components/ui/label"
import { FileDrop, UploadList, type UploadItem } from "./file-drop"
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
}

export interface UploadSlotsProps {
  slots: UploadSlot[]
  /** What each slot holds now, keyed by slot id. An absent key is an empty slot. */
  value: Partial<Record<string, UploadItem>>
  /** One file for one slot. The app uploads it and puts the item in `value`. */
  onFile: (slotId: string, file: File) => void
  onReject?: (slotId: string, rejected: FileRejection[]) => void
  onRemove?: (slotId: string) => void
  onRetry?: (slotId: string) => void
  disabled?: boolean
  className?: string
}

/**
 * A set of named documents, one file each: the front and back of a licence,
 * a proof of address. Each slot is its own drop zone with its own rules, and
 * turns into the uploaded file once it holds one.
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
  const t = useStrings()
  const baseId = React.useId()
  const ids = new Set(slots.map((s) => s.id))
  // Two slots under one id would share a value and a callback: a back photo
  // would land in the front's place without anyone noticing.
  if (ids.size !== slots.length) throw new Error("UploadSlots: slot ids must be unique")
  const unknown = Object.keys(value).filter((k) => !ids.has(k))
  if (unknown.length)
    throw new Error("UploadSlots: value has keys no slot declares: " + unknown.join(", "))

  return (
    <div data-slot="upload-slots" className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {slots.map((slot) => {
        const inputId = baseId + slot.id
        const held = value[slot.id]
        return (
          <div key={slot.id} className="grid content-start gap-2">
            <div className="grid gap-0.5">
              <Label htmlFor={inputId}>
                {slot.label}
                {slot.optional && (
                  <span className="font-normal text-muted-foreground">{t.upload.optional}</span>
                )}
              </Label>
              {slot.description && (
                <p className="text-xs text-muted-foreground">{slot.description}</p>
              )}
            </div>
            {held ? (
              <UploadList
                items={[held]}
                onRemove={onRemove && (() => onRemove(slot.id))}
                onRetry={onRetry && (() => onRetry(slot.id))}
              />
            ) : (
              <FileDrop
                id={inputId}
                accept={slot.accept}
                maxSize={slot.maxSize}
                maxFiles={1}
                disabled={disabled}
                onFiles={([file]) => onFile(slot.id, file)}
                onReject={onReject && ((rejected) => onReject(slot.id, rejected))}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
