import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "./switch"
import { Label } from "./label"

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="n" defaultChecked />
      <Label htmlFor="n">Email notifications</Label>
    </div>
  ),
}
export const Disabled: Story = {
  render: () => (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Switch id="d1" disabled />
        <Label htmlFor="d1">Off, disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="d2" disabled defaultChecked />
        <Label htmlFor="d2">On, disabled</Label>
      </div>
    </div>
  ),
}
export const Invalid: Story = { args: { "aria-invalid": true } }
