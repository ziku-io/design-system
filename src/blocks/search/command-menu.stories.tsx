import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  ChartBarIcon,
  CreditCardIcon,
  FolderIcon,
  GearIcon,
  HouseIcon,
  PlusIcon,
  UserIcon,
  UsersIcon,
} from "@phosphor-icons/react"

import { CommandMenu, SearchTrigger } from "./command-menu"
import type { CommandMenuGroup } from "./command-menu"

const meta: Meta<typeof CommandMenu> = {
  title: "Blocks/CommandMenu",
  component: CommandMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Command palette built on cmdk. This is the search surface for every app — press ⌘K.",
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof CommandMenu>

const groups: CommandMenuGroup[] = [
  {
    heading: "Go to",
    items: [
      { id: "dashboard", label: "Dashboard", icon: HouseIcon, shortcut: "G D" },
      { id: "projects", label: "Projects", icon: FolderIcon, shortcut: "G P" },
      {
        id: "analytics",
        label: "Analytics",
        icon: ChartBarIcon,
        keywords: ["metrics", "reports"],
      },
      {
        id: "team",
        label: "Team",
        icon: UsersIcon,
        keywords: ["members", "people"],
      },
    ],
  },
  {
    heading: "Actions",
    items: [
      {
        id: "new-project",
        label: "New project",
        icon: PlusIcon,
        shortcut: "⌘N",
      },
      { id: "invite", label: "Invite member", icon: UserIcon },
      { id: "billing", label: "Billing", icon: CreditCardIcon },
      { id: "settings", label: "Settings", icon: GearIcon, shortcut: "⌘," },
    ],
  },
]

/** The header trigger plus the palette. Click it or press ⌘K. */
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div className="w-80">
        <SearchTrigger onClick={() => setOpen(true)} />
        <CommandMenu groups={groups} open={open} onOpenChange={setOpen} />
      </div>
    )
  },
}

/** Opened, so the list is visible in docs. The trigger is rendered with it
 *  because the palette itself is a portal: on its own the story leaves the
 *  story root empty, which is what "rendered nothing" means to the smoke test. */
export const Open: Story = {
  render: () => (
    <div className="w-80">
      <SearchTrigger />
      <CommandMenu groups={groups} open onOpenChange={() => {}} disableShortcut />
    </div>
  ),
}

export const Trigger: Story = {
  render: () => (
    <div className="grid w-80 gap-3">
      <SearchTrigger />
      <SearchTrigger placeholder="Search projects…" shortcut="/" />
      <SearchTrigger placeholder="No shortcut hint" shortcut={null} />
    </div>
  ),
}
