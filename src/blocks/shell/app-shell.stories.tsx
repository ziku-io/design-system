import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  GearIcon,
  HouseIcon,
  PlusIcon,
  UsersIcon,
  FolderIcon,
} from "@phosphor-icons/react"
import { AppShell } from "./app-shell"
import { PageHeader } from "@/blocks/page/page-header"
import { EmptyState } from "@/blocks/page/empty-state"
import { Button } from "@/components/ui/button"
import { CommandMenu, SearchTrigger } from "@/blocks/search/command-menu"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const meta: Meta<typeof AppShell> = {
  title: "Blocks/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}
export default meta

const nav = [
  {
    label: "Workspace",
    items: [
      { title: "Dashboard", href: "/", icon: HouseIcon },
      { title: "Projects", href: "/projects", icon: FolderIcon },
      { title: "Analytics", href: "/analytics", icon: ChartBarIcon },
      { title: "Team", href: "/team", icon: UsersIcon },
    ],
  },
  {
    label: "Account",
    items: [
      { title: "Billing", href: "/billing", icon: CreditCardIcon },
      { title: "Settings", href: "/settings", icon: GearIcon },
    ],
  },
]
const user = { name: "Ada Lovelace", email: "ada@ziku.dev" }
const brand = <span className="px-1 text-base font-bold tracking-tight text-foreground">ziku</span>

export const Dashboard: StoryObj<typeof AppShell> = {
  args: {
    brand,
    nav,
    user,
    currentPath: "/",
    onSignOut: () => alert("sign out"),
    userMenu: (
      <>
        <DropdownMenuItem>
          <GearIcon /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon /> Billing
        </DropdownMenuItem>
      </>
    ),
    headerContent: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
    headerActions: (
      <>
        <SearchTrigger className="hidden md:inline-flex" />
        <CommandMenu
          groups={[
            {
              heading: "Go to",
              items: nav
                .flatMap((g) => g.items)
                .map((i) => ({ id: i.href, label: i.title, icon: i.icon })),
            },
            {
              heading: "Actions",
              items: [
                {
                  id: "new",
                  label: "New project",
                  icon: PlusIcon,
                  shortcut: "⌘N",
                },
              ],
            },
          ]}
        />
        <Button variant="ghost" size="icon-sm" aria-label="Notifications">
          <BellIcon />
        </Button>
      </>
    ),
    children: (
      <>
        <PageHeader
          title="Dashboard"
          description="Overview of your workspace."
          actions={
            <Button>
              <PlusIcon /> New project
            </Button>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {["Active projects", "Members", "Requests / day"].map((t, i) => (
            <div key={t} className="rounded-xl border bg-card p-5">
              <div className="text-sm text-muted-foreground">{t}</div>
              <div className="mt-1 text-2xl font-semibold">{[12, 8, "4.2k"][i]}</div>
            </div>
          ))}
        </div>
        <div className="min-h-64 flex-1 rounded-xl border bg-card" />
      </>
    ),
  },
}

export const EmptyPage: StoryObj<typeof AppShell> = {
  args: {
    brand,
    nav,
    user,
    currentPath: "/projects",
    headerContent: <span className="text-sm font-medium">Projects</span>,
    children: (
      <>
        <PageHeader
          title="Projects"
          actions={
            <Button>
              <PlusIcon /> New project
            </Button>
          }
        />
        <EmptyState
          icon={FolderIcon}
          title="No projects yet"
          description="Create your first project to get started."
          action={
            <Button>
              <PlusIcon /> New project
            </Button>
          }
        />
      </>
    ),
  },
}
