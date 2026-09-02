import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ChipPicker } from "./chip-picker"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof ChipPicker> = {
  title: "Blocks/ChipPicker",
  component: ChipPicker,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}
export default meta

const STAGES = [
  { value: "lead", label: "Lead" },
  { value: "proposal", label: "Proposal" },
  { value: "active", label: "Active" },
  { value: "dormant", label: "Dormant" },
  { value: "closed", label: "Closed" },
]

/** Picked values stay visible in the trigger; the fourth and beyond collapse
 *  into a "+N" rather than growing the row. */
export const Stages: StoryObj = {
  render: function Stages() {
    const [value, setValue] = React.useState<string[]>(["lead", "active"])
    return (
      <div className="grid max-w-sm gap-2">
        <Label>Stages</Label>
        <ChipPicker options={STAGES} value={value} onChange={setValue} placeholder="Any stage" />
      </div>
    )
  },
}
