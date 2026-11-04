import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import type { DateRange } from "react-day-picker"
import { Calendar } from "./calendar"
import { UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Calendar>

const MONTH = new Date(2026, 10, 1)

export const Single: Story = {
  render: function Single() {
    const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 10, 4))
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={MONTH}
        className="rounded-lg border"
      />
    )
  },
}

export const Range: Story = {
  render: function Range() {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(2026, 10, 4),
      to: new Date(2026, 10, 12),
    })
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        defaultMonth={MONTH}
        numberOfMonths={2}
        className="rounded-lg border"
      />
    )
  },
}

/** Month and weekday names, the week starting on Monday, and the nav labels,
 *  all from the `ptPT` dictionary. */
export const Translated: Story = {
  render: () => (
    <UIStringsProvider strings={ptPT}>
      <Calendar mode="single" defaultMonth={MONTH} className="rounded-lg border" />
    </UIStringsProvider>
  ),
}
