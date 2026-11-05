import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { FileDrop, UploadList, type UploadItem } from "./file-drop"
import { UploadSlots, type UploadSlot } from "./upload-slots"
import { UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

const meta: Meta = {
  title: "Blocks/Upload",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`FileDrop` picks and checks files; the app uploads them and reports back through `UploadList`. Nothing here talks to a server.",
      },
    },
  },
}
export default meta

const MB = 1024 * 1024

/** Picks are added to the list and "upload" on a timer, so the progress bar moves. */
export const Flow: StoryObj = {
  render: function Flow() {
    const [items, setItems] = React.useState<UploadItem[]>([])
    function add(files: File[]) {
      const added = files.map((f, i) => ({
        id: `${Date.now()}-${i}`,
        name: f.name,
        size: f.size,
        status: "uploading" as const,
        progress: 0,
      }))
      setItems((prev) => [...prev, ...added])
      for (const item of added) {
        const timer = setInterval(() => {
          setItems((prev) =>
            prev.map((p) => {
              if (p.id !== item.id || p.status !== "uploading") return p
              if (p.progress >= 100) {
                clearInterval(timer)
                return { id: p.id, name: p.name, size: p.size, status: "done" }
              }
              return { ...p, progress: p.progress + 20 }
            }),
          )
        }, 300)
      }
    }
    return (
      <div className="grid max-w-md gap-3">
        <FileDrop accept=".pdf,image/*" maxSize={10 * MB} onFiles={add} />
        <UploadList
          items={items}
          onRemove={(id) => setItems((prev) => prev.filter((p) => p.id !== id))}
        />
      </div>
    )
  },
}

const states: UploadItem[] = [
  { id: "1", name: "invoice-2026-10.pdf", size: 248_000, status: "uploading", progress: 45 },
  { id: "2", name: "receipt-scan.jpg", size: 1_840_000, status: "done" },
  {
    id: "3",
    name: "statement.pdf",
    size: 3_200_000,
    status: "failed",
    error: "The server refused the file.",
  },
]

/** Every state at once: uploading, done, failed with retry. */
export const States: StoryObj = {
  render: () => (
    <UploadList items={states} onRemove={() => {}} onRetry={() => {}} className="max-w-md" />
  ),
}

export const SingleFile: StoryObj = {
  render: () => (
    <FileDrop
      accept="application/pdf"
      maxFiles={1}
      maxSize={5 * MB}
      onFiles={() => {}}
      className="max-w-md"
    />
  ),
}

export const Translated: StoryObj = {
  render: () => (
    <UIStringsProvider strings={ptPT}>
      <div className="grid max-w-md gap-3">
        <FileDrop accept=".pdf" maxSize={10 * MB} maxFiles={3} onFiles={() => {}} />
        <UploadList items={states} onRemove={() => {}} onRetry={() => {}} />
      </div>
    </UIStringsProvider>
  ),
}

const identity: UploadSlot[] = [
  {
    id: "licence-front",
    label: "Driving licence, front",
    description: "A photo or scan, all four corners visible.",
    accept: "image/*,.pdf",
    maxSize: 10 * MB,
  },
  { id: "licence-back", label: "Driving licence, back", accept: "image/*,.pdf", maxSize: 10 * MB },
  {
    id: "address",
    label: "Proof of address",
    description: "From the last three months.",
    accept: ".pdf",
    maxSize: 5 * MB,
  },
  {
    id: "invoices",
    label: "Invoices",
    description: "Every invoice for the period. Add more as they arrive.",
    accept: ".pdf,image/*",
    maxSize: 10 * MB,
    multiple: true,
  },
  { id: "other", label: "Anything else", optional: true },
]

// A one-line text file as a data URL, so the story's download buttons work
// without a server. An app's `url` is its own endpoint.
const sample = (name: string) =>
  "data:text/plain;charset=utf-8," + encodeURIComponent("Sample file: " + name)
// Sent in an earlier session: these come back from the server with a URL and a date.
const saved = (id: string, name: string, size: number, on: Date): UploadItem => ({
  id,
  name,
  size,
  status: "done",
  url: sample(name),
  uploadedAt: on,
})

/**
 * Named documents from one drop zone, as a reader finds it on a second visit:
 * the licence front and two invoices came in last week and can be downloaded.
 * Choose which document the file is (it starts on the first one missing), drop
 * or browse, and it lands in the list; the select moves on to the next. Choose
 * Invoices to drop a whole batch at once; it stays selected for the next. The
 * cross asks before it removes anything.
 */
export const Documents: StoryObj = {
  render: function Documents() {
    const [value, setValue] = React.useState<Partial<Record<string, UploadItem[]>>>({
      "licence-front": [saved("f", "licence-front.jpg", 2_100_000, new Date(2026, 9, 28))],
      invoices: [
        saved("i1", "invoice-2026-0412.pdf", 184_000, new Date(2026, 9, 28)),
        saved("i2", "invoice-2026-0419.pdf", 201_000, new Date(2026, 9, 29)),
      ],
    })
    return (
      <UploadSlots
        slots={identity}
        value={value}
        onFile={(slotId, file) =>
          setValue((v) => {
            const item: UploadItem = {
              id: file.name + file.lastModified,
              name: file.name,
              size: file.size,
              status: "done",
              url: URL.createObjectURL(file),
              uploadedAt: new Date(),
            }
            return { ...v, [slotId]: [...(v[slotId] ?? []), item] }
          })
        }
        onRemove={(slot, itemId) =>
          setValue((v) => ({ ...v, [slot]: (v[slot] ?? []).filter((i) => i.id !== itemId) }))
        }
        onRetry={() => {}}
        className="max-w-4xl"
      />
    )
  },
}
