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
  { id: "other", label: "Anything else", optional: true },
]

/** Named documents, one file each. The front is already in, the back is
 *  uploading; drop a file on the others to fill them. */
export const Documents: StoryObj = {
  render: function Documents() {
    const [value, setValue] = React.useState<Partial<Record<string, UploadItem>>>({
      "licence-front": { id: "f", name: "licence-front.jpg", size: 2_100_000, status: "done" },
      "licence-back": {
        id: "b",
        name: "licence-back.jpg",
        size: 1_950_000,
        status: "uploading",
        progress: 60,
      },
    })
    return (
      <UploadSlots
        slots={identity}
        value={value}
        onFile={(slot, file) =>
          setValue((v) => ({
            ...v,
            [slot]: { id: slot, name: file.name, size: file.size, status: "done" },
          }))
        }
        onRemove={(slot) =>
          setValue((v) => {
            const next = { ...v }
            delete next[slot]
            return next
          })
        }
        className="max-w-2xl"
      />
    )
  },
}
