import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckIcon } from "@phosphor-icons/react"
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "./avatar"

const meta: Meta<typeof Avatar> = { title: "Components/Avatar", component: Avatar, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar><AvatarImage src="https://github.com/shadcn.png" alt="shadcn" /><AvatarFallback>CN</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>ZK</AvatarFallback></Avatar>
    </div>
  ),
}
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>MD</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
    </div>
  ),
}
export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-primary" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>ZK</AvatarFallback>
        <AvatarBadge><CheckIcon weight="bold" /></AvatarBadge>
      </Avatar>
    </div>
  ),
}
export const Group: Story = {
  render: () => (
    <AvatarGroup>
      {["AL", "GH", "ZK"].map((i) => (
        <Avatar key={i}><AvatarFallback>{i}</AvatarFallback></Avatar>
      ))}
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
}
