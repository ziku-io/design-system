import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { PlusIcon, TrayIcon, UsersIcon } from "@phosphor-icons/react"
import { PageHeader } from "./page-header"
import { EmptyState } from "./empty-state"
import { ErrorState } from "./error-state"
import { ErrorBoundary } from "./error-boundary"
import { SectionLabel, StatTile } from "./stat-tile"
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

/** A render that threw. Press the button to break the subtree below it: the
 *  boundary catches it and the rest of the page keeps working. */
export const Boundary: StoryObj = {
  render: function Boundary() {
    const [broken, setBroken] = React.useState(false)
    function Child() {
      if (broken) throw new Error("Rendering broke")
      return <p className="text-sm text-muted-foreground">Nothing is wrong yet.</p>
    }
    return (
      <div className="flex flex-col gap-4">
        <Button variant="outline" onClick={() => setBroken(true)}>
          Break it
        </Button>
        <ErrorBoundary onError={(error) => console.info(error.message)}>
          <Child />
        </ErrorBoundary>
      </div>
    )
  },
}

/** A row of numbers on one tracking value, which is the whole point: the same
 *  uppercase label had drifted to five different letter-spacings in one app. */
export const Stats: StoryObj = {
  render: () => (
    <div className="grid gap-4">
      <SectionLabel>This month</SectionLabel>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatTile label="Billed" value="€48,120" hint="+12% on last month" trend="up" />
        <StatTile label="Outstanding" value="€9,340" hint="4 notes overdue" trend="down" />
        <StatTile label="Clients" value="86" hint="2 added" icon={UsersIcon} />
      </div>
    </div>
  ),
}
