import type { Meta, StoryObj } from "@storybook/react-vite"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select"

const meta: Meta<typeof Select> = { title: "Components/Select", component: Select, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof Select>

const items = (
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Roles</SelectLabel>
      <SelectItem value="owner">Owner</SelectItem>
      <SelectItem value="admin">Admin</SelectItem>
      <SelectItem value="member">Member</SelectItem>
    </SelectGroup>
  </SelectContent>
)

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56"><SelectValue placeholder="Pick a role" /></SelectTrigger>
      {items}
    </Select>
  ),
}
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-56"><SelectValue placeholder="Pick a role" /></SelectTrigger>
      {items}
    </Select>
  ),
}
export const Invalid: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56" aria-invalid><SelectValue placeholder="Pick a role" /></SelectTrigger>
      {items}
    </Select>
  ),
}
