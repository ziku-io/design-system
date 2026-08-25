import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "./checkbox"
import { Label } from "./label"
const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}
export default meta
export const Default: StoryObj<typeof Checkbox> = {
  render: () => (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="a" defaultChecked />
        <Label htmlFor="a">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="b" />
        <Label htmlFor="b">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="c" disabled />
        <Label htmlFor="c">Disabled</Label>
      </div>
    </div>
  ),
}
