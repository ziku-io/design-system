import type { Meta, StoryObj } from "@storybook/react-vite"
import { PlusIcon, TrashIcon, SpinnerIcon } from "@phosphor-icons/react"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Button", variant: "default", size: "default" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "link", "danger", "success", "warning"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
    </div>
  ),
}
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
    </div>
  ),
}
export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button>
        <PlusIcon /> New item
      </Button>
      <Button variant="danger">
        <TrashIcon /> Delete
      </Button>
    </div>
  ),
}
export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <SpinnerIcon className="animate-spin" /> Saving…
      </>
    ),
  },
}
