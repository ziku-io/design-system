import type { Meta, StoryObj } from "@storybook/react-vite"
import { Slider } from "./slider"

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => (
    <Slider defaultValue={[40]} max={100} step={1} aria-label="Volume" className="w-64" />
  ),
}

/** Two thumbs: a min and a max, as in an amount filter. */
export const Range: Story = {
  render: () => (
    <Slider defaultValue={[20, 80]} max={100} step={5} aria-label="Amount" className="w-64" />
  ),
}
