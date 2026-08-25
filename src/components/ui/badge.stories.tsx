import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckIcon } from "@phosphor-icons/react"
import { Badge } from "./badge"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Badge", variant: "default" },
  argTypes: {
    variant: { control: "select", options: ["default", "secondary", "outline", "ghost", "link", "destructive"] },
  },
}
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link" asChild><a href="#">Link</a></Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
}
export const WithIcon: Story = { args: { children: <><CheckIcon /> Verified</> } }
