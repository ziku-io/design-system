import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

const meta: Meta<typeof Tabs> = { title: "Components/Tabs", component: Tabs, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof Tabs>

const panels = (
  <>
    <TabsContent value="general" className="text-sm text-muted-foreground">General settings.</TabsContent>
    <TabsContent value="members" className="text-sm text-muted-foreground">Members list.</TabsContent>
    <TabsContent value="billing" className="text-sm text-muted-foreground">Billing details.</TabsContent>
  </>
)

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-96">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      {panels}
    </Tabs>
  ),
}
/** `line` drops the filled track — closer to GitHub's underlined page tabs. */
export const Line: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-96">
      <TabsList variant="line">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      {panels}
    </Tabs>
  ),
}
export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" orientation="vertical" className="flex w-96 gap-4">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      {panels}
    </Tabs>
  ),
}
