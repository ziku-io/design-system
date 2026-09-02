import type { Meta, StoryObj } from "@storybook/react-vite"
import { PlusIcon, TrayIcon } from "@phosphor-icons/react"
import { PageHeader } from "./page-header"
import { EmptyState } from "./empty-state"
import { ErrorState } from "./error-state"
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

/** A read that failed. Not the empty state: "you have none" and "we could not
 *  fetch yours" are opposite sentences and used to look identical. */
export const Failed: StoryObj = {
  render: () => <ErrorState onRetry={() => {}} />,
}

/** The band a `DataTable` puts in its `empty` slot, where the toolbar and the
 *  column headers are still on screen around it. */
export const FailedInline: StoryObj = {
  render: () => <ErrorState variant="alert" onRetry={() => {}} />,
}
