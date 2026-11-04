import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Label } from "./label"
import { Button } from "./button"
import { Toggle } from "./toggle"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "you@company.com" },
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" {...args} />
    </div>
  ),
}
export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "not-an-email" },
}
export const Disabled: Story = {
  args: { disabled: true, defaultValue: "read only" },
}
export const File: Story = { args: { type: "file", placeholder: undefined } }

/**
 * `ghost` shows no chrome until it is pointed at, for a field inside something
 * already bordered. `cell` fills a table cell, so the grid does not move when a
 * row goes from reading to editing. Both were app-level CSS classes before.
 */
export const Variants: Story = {
  render: () => (
    <div className="grid w-72 gap-4">
      <div className="grid gap-2">
        <Label>Default</Label>
        <Input placeholder="you@company.com" />
      </div>
      <div className="grid gap-2">
        <Label>Ghost</Label>
        <Input variant="ghost" placeholder="Untitled view" />
        <Textarea variant="ghost" rows={2} placeholder="Notes" />
        <Select>
          <SelectTrigger variant="ghost" className="w-full">
            <SelectValue placeholder="Pick one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Lead</SelectItem>
            <SelectItem value="b">Active</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Cell</Label>
        <div className="rounded-md border">
          <Input variant="cell" defaultValue="1,240.00" />
        </div>
      </div>
    </div>
  ),
}

/** `size="sm"` on every control in a toolbar: input, select, toggle and button
 *  all land on h-8, so the row lines up with no height override. */
export const Small: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Input size="sm" placeholder="Filter by name…" aria-label="Filter by name" className="w-48" />
      <Select defaultValue="open">
        <SelectTrigger size="sm" aria-label="Status">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
        </SelectContent>
      </Select>
      <Toggle size="sm" variant="outline" aria-label="Mine only">
        Mine
      </Toggle>
      <Button size="sm">Apply</Button>
    </div>
  ),
}
