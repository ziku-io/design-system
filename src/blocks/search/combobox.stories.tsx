import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Combobox, type ComboboxItem } from "./combobox"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Combobox> = {
  title: "Blocks/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}
export default meta

const PEOPLE: ComboboxItem[] = [
  { id: "1", label: "Ana Silva", hint: "ana@ziku.dev" },
  { id: "2", label: "António Silvestre", hint: "antonio@ziku.dev" },
  { id: "3", label: "Ada Lovelace", hint: "ada@ziku.dev" },
  { id: "4", label: "Beatriz Costa", hint: "beatriz@ziku.dev" },
]

/**
 * Type "Sil" and press Enter. Both Silvas match; the one that gets picked is
 * the one highlighted, which is the bug every hand-rolled version had.
 */
export const InAForm: StoryObj = {
  render: function InAForm() {
    const [query, setQuery] = React.useState("")
    const [picked, setPicked] = React.useState<ComboboxItem | null>(null)
    const matches = PEOPLE.filter((p) => p.label.toLowerCase().includes(query.toLowerCase()))
    return (
      <form className="grid max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
        <Label>Assign to</Label>
        <Combobox
          label="Assign to"
          placeholder="Search people…"
          items={matches}
          query={query}
          onQueryChange={setQuery}
          onSelect={(item) => {
            setPicked(item)
            setQuery(item.label)
          }}
        />
        <p className="text-sm text-muted-foreground">
          {picked ? `Assigned to ${picked.label}` : "Nobody assigned yet."}
        </p>
      </form>
    )
  },
}
