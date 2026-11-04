import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleGroup, ToggleGroupItem } from "./toggle-group"

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof ToggleGroup>

/** The period switch over a chart. */
export const Period: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="30d" aria-label="Period">
      <ToggleGroupItem value="7d">7 days</ToggleGroupItem>
      <ToggleGroupItem value="30d">30 days</ToggleGroupItem>
      <ToggleGroupItem value="90d">90 days</ToggleGroupItem>
    </ToggleGroup>
  ),
}
