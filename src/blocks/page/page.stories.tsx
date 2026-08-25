import type { Meta, StoryObj } from "@storybook/react-vite"
import { PlusIcon, TrayIcon } from "@phosphor-icons/react"
import { PageHeader } from "./page-header"
import { EmptyState } from "./empty-state"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "Blocks/Page",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}
export default meta

export const Header: StoryObj = {
  render: () => (
    <PageHeader
      title="Members"
      description="People with access to this workspace."
      actions={
        <>
          <Button variant="outline">Export</Button>
          <Button>
            <PlusIcon /> Invite
          </Button>
        </>
      }
    />
  ),
}
export const Empty: StoryObj = {
  render: () => (
    <EmptyState
      icon={TrayIcon}
      title="Inbox zero"
      description="Nothing needs your attention right now."
      action={<Button variant="outline">Refresh</Button>}
    />
  ),
}
