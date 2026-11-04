import type { Meta, StoryObj } from "@storybook/react-vite"
import { TextBolderIcon } from "@phosphor-icons/react"
import { Toggle } from "./toggle"

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Bold">
      <TextBolderIcon />
    </Toggle>
  ),
}
export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" defaultPressed>
      Archived
    </Toggle>
  ),
}
