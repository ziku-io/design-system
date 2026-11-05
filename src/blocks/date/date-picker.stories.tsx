import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { DatePicker, DateRangePicker, type DateRange } from "./date-picker"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
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

/**
 * In a plain form: `name` sends `due` and `period[from]`/`period[to]` as
 * `YYYY-MM-DD`, and `required` stops the submit while empty, opening the
 * picker instead. Send it empty, then pick, then send: the line under the
 * button shows what the form posted.
 */
export const InAForm: StoryObj = {
  render: function InAForm() {
    const [due, setDue] = React.useState<Date | undefined>()
    const [period, setPeriod] = React.useState<DateRange | undefined>()
    const [sent, setSent] = React.useState("")
    return (
      <form
        className="grid max-w-xs gap-3"
        onSubmit={(e) => {
          e.preventDefault()
          setSent(
            [...new FormData(e.currentTarget)].map(([k, v]) => k + "=" + String(v)).join(" & "),
          )
        }}
      >
        <input type="hidden" name="client" value="jay.oak@example.com" />
        <div className="grid gap-2">
          <Label htmlFor="form-due">Due date</Label>
          <DatePicker id="form-due" name="due" required value={due} onChange={setDue} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="form-period">Billing period</Label>
          <DateRangePicker
            id="form-period"
            name="period"
            required
            value={period}
            onChange={setPeriod}
          />
        </div>
        <Button type="submit">Send</Button>
        {sent && <code className="text-xs break-all">{sent}</code>}
      </form>
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
