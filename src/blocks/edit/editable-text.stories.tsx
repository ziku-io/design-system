import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { EditableText } from "./editable-text"
import { UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

const meta: Meta = {
  title: "Blocks/EditableText",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Text with a pencil beside it. Click it for a field with a check and a cross: Enter saves, Escape cancels, and nothing saves on blur.",
      },
    },
  },
}
export default meta

function Live(
  props: Omit<React.ComponentProps<typeof EditableText>, "value" | "onSave"> & { initial: string },
) {
  const { initial, ...rest } = props
  const [value, setValue] = React.useState(initial)
  return <EditableText value={value} onSave={setValue} {...rest} />
}

export const Default: StoryObj = {
  render: () => <Live initial="Q3 tax return" aria-label="Dossier name" />,
}

/** A page title that renames in place: the reading text takes the heading's
 *  classes, the field stays control-sized. */
export const AsTitle: StoryObj = {
  render: () => (
    <h1>
      <Live
        initial="Sociedade Silva, Lda."
        aria-label="Client name"
        className="text-2xl font-semibold tracking-tight"
      />
    </h1>
  ),
}

/** Empty: the placeholder reads muted. `required` refuses a blank save. */
export const EmptyAndRequired: StoryObj = {
  render: () => <Live initial="" placeholder="Add a reference" aria-label="Reference" required />,
}

/** `onSave` takes a second and fails: the check spins, then the field stays
 *  open with the text in it and says so. */
export const SaveFails: StoryObj = {
  render: function SaveFails() {
    const [value] = React.useState("Invoice 2026-114")
    return (
      <EditableText
        value={value}
        aria-label="Invoice name"
        onSave={() =>
          new Promise((_, reject) => setTimeout(() => reject(new Error("409 conflict")), 1000))
        }
      />
    )
  },
}

export const Disabled: StoryObj = {
  render: () => <EditableText value="Locked by an admin" onSave={() => {}} disabled />,
}

export const Translated: StoryObj = {
  render: () => (
    <UIStringsProvider strings={ptPT}>
      <Live initial="Declaração de IVA" aria-label="Nome do dossier" required />
    </UIStringsProvider>
  ),
}
