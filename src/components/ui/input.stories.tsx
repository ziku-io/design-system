import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "./input"
import { Label } from "./label"

const meta: Meta<typeof Input> = { title: "Components/Input", component: Input, tags: ["autodocs"], args: { placeholder: "you@company.com" } }
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
export const Invalid: Story = { args: { "aria-invalid": true, defaultValue: "not-an-email" } }
export const Disabled: Story = { args: { disabled: true, defaultValue: "read only" } }
export const File: Story = { args: { type: "file", placeholder: undefined } }
