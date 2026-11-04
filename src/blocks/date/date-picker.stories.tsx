import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { DatePicker, DateRangePicker, type DateRange } from "./date-picker"
import { Label } from "@/components/ui/label"
import { UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

const meta: Meta = {
  title: "Blocks/DatePicker",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}
export default meta

export const Single: StoryObj = {
  render: function Single() {
    const [date, setDate] = React.useState<Date | undefined>()
    return (
      <div className="grid max-w-xs gap-2">
        <Label htmlFor="due">Due date</Label>
        <DatePicker id="due" value={date} onChange={setDate} />
      </div>
    )
  },
}

/** Presets on the left, two months on the right; one month on a phone. */
export const Range: StoryObj = {
  render: function Range() {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(2026, 9, 6),
      to: new Date(2026, 10, 4),
    })
    return <DateRangePicker value={range} onChange={setRange} className="w-72" />
  },
}

/** Only this year can be picked. */
export const Bounded: StoryObj = {
  render: function Bounded() {
    const [date, setDate] = React.useState<Date | undefined>()
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        min={new Date(2026, 0, 1)}
        max={new Date(2026, 11, 31)}
      />
    )
  },
}

export const Translated: StoryObj = {
  render: function Translated() {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(2026, 9, 6),
      to: new Date(2026, 10, 4),
    })
    return (
      <UIStringsProvider strings={ptPT}>
        <DateRangePicker value={range} onChange={setRange} className="w-72" />
      </UIStringsProvider>
    )
  },
}
