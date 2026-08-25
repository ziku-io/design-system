import type { Meta, StoryObj } from "@storybook/react-vite"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { Label } from "./label"

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly">
      {["monthly", "yearly"].map((v) => (
        <div key={v} className="flex items-center gap-2">
          <RadioGroupItem value={v} id={v} />
          <Label htmlFor={v} className="capitalize">
            {v}
          </Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly" disabled>
      {["monthly", "yearly"].map((v) => (
        <div key={v} className="flex items-center gap-2">
          <RadioGroupItem value={v} id={`d-${v}`} />
          <Label htmlFor={`d-${v}`} className="capitalize">
            {v}
          </Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
export const Invalid: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="monthly" id="i-monthly" aria-invalid />
        <Label htmlFor="i-monthly">Monthly</Label>
      </div>
    </RadioGroup>
  ),
}
