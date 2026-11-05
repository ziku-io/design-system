import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  BellIcon,
  CaretDownIcon,
  CheckCircleIcon,
  ClockIcon,
  UploadSimpleIcon,
  WalletIcon,
  WarningIcon,
  ChartBarIcon,
  CreditCardIcon,
  GearIcon,
  HouseIcon,
  PlusIcon,
  UsersIcon,
  FolderIcon,
} from "@phosphor-icons/react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { AppShell } from "./app-shell"
import { PreferencesMenu } from "./preference-menus"
import { PageHeader } from "@/blocks/page/page-header"
import { EmptyState } from "@/blocks/page/empty-state"
import { StatTile } from "@/blocks/page/stat-tile"
import {
  ActivityList,
  Dashboard as DashboardBlock,
  DashboardPanel,
  type ActivityItem,
} from "@/blocks/dashboard/dashboard"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Link } from "@/lib/link"
import { Button } from "@/components/ui/button"
import { CommandMenu, SearchTrigger } from "@/blocks/search/command-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
      // A count in the nav: what is waiting on this person, said in the one
      // place they look before opening anything.
      { title: "Team", href: "/team", icon: UsersIcon, badge: 3 },
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
const user = { name: "Jay Oak", email: "jay@example.com" }
const brand = "ziku"

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
        <PreferencesMenu />
      </>
    ),
    children: <DashboardContent />,
  },
}

const NOW = new Date("2026-11-04T10:30:00Z")
const minutesAgo = (m: number) => new Date(NOW.getTime() - m * 60_000)

const revenue = [
  { month: "Jun", revenue: 18.2, expenses: 12.1 },
  { month: "Jul", revenue: 21.4, expenses: 12.8 },
  { month: "Aug", revenue: 19.8, expenses: 13.5 },
  { month: "Sep", revenue: 24.6, expenses: 14.0 },
  { month: "Oct", revenue: 27.9, expenses: 14.6 },
  { month: "Nov", revenue: 31.2, expenses: 15.1 },
]
const revenueConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-2)" },
} satisfies ChartConfig

const byProject = [
  { project: "Atlas", hours: 142 },
  { project: "Beacon", hours: 98 },
  { project: "Cobalt", hours: 76 },
  { project: "Delta", hours: 51 },
  { project: "Ember", hours: 23 },
]
const hoursConfig = { hours: { label: "Hours", color: "var(--chart-1)" } } satisfies ChartConfig

const activity: ActivityItem[] = [
  { id: "1", title: "Mia Fern merged Atlas #482", at: minutesAgo(8), icon: CheckCircleIcon },
  {
    id: "2",
    title: "Leo Birch uploaded 4 files",
    description: "Beacon · Design review",
    at: minutesAgo(54),
    icon: UploadSimpleIcon,
  },
  { id: "3", title: "Invoice 1043 is 5 days overdue", at: minutesAgo(60 * 20), icon: WarningIcon },
  {
    id: "4",
    title: "Katherine Johnson joined the workspace",
    at: minutesAgo(60 * 30),
    icon: UsersIcon,
  },
]

/** What a real home screen holds: four numbers, a trend, a breakdown and a
 *  feed, all through the `Dashboard` block. */
function DashboardContent() {
  return (
    <DashboardBlock
      title="Dashboard"
      actions={
        <Button>
          <PlusIcon /> New project
        </Button>
      }
      stats={
        <>
          <StatTile
            label="Revenue"
            value="€31.2k"
            change={11.8}
            hint="vs October"
            icon={WalletIcon}
          />
          <StatTile label="Active projects" value="12" change={9.1} icon={FolderIcon} />
          <StatTile
            label="Hours logged"
            value="390"
            change={-4.2}
            hint="this month"
            icon={ClockIcon}
          />
          <StatTile label="Overdue invoices" value="2" change={-33} trend="up" icon={WarningIcon} />
        </>
      }
    >
      <DashboardPanel title="Revenue and expenses, €k" span="full">
        <ChartContainer config={revenueConfig} className="aspect-auto h-60 w-full">
          <AreaChart data={revenue} margin={{ left: 8, right: 8 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              padding={{ left: 16, right: 16 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="revenue"
              type="monotone"
              stroke="var(--color-revenue)"
              fill="var(--color-revenue)"
              fillOpacity={0.12}
            />
            <Area
              dataKey="expenses"
              type="monotone"
              stroke="var(--color-expenses)"
              fill="var(--color-expenses)"
              fillOpacity={0.12}
            />
          </AreaChart>
        </ChartContainer>
      </DashboardPanel>
      <DashboardPanel title="Hours by project">
        <ChartContainer config={hoursConfig} className="aspect-auto h-56 w-full">
          <BarChart data={byProject} layout="vertical" margin={{ left: 8, right: 8 }}>
            <CartesianGrid horizontal={false} />
            <XAxis type="number" dataKey="hours" hide />
            <YAxis type="category" dataKey="project" tickLine={false} axisLine={false} width={56} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="hours" fill="var(--color-hours)" radius={4} />
          </BarChart>
        </ChartContainer>
      </DashboardPanel>
      <DashboardPanel
        title="Recent activity"
        action={
          <Link href="#" className="text-link">
            View all
          </Link>
        }
      >
        <ActivityList items={activity} />
      </DashboardPanel>
    </DashboardBlock>
  )
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

/**
 * A job title in the account menu, between the name and the email. The email
 * stays, so the account is never ambiguous.
 */
export const WithRole: StoryObj<typeof AppShell> = {
  args: {
    brand,
    nav,
    currentPath: "/",
    user: { ...user, role: "Sócia" },
    children: <PageHeader title="Dashboard" />,
  },
}

/**
 * A breadcrumb long enough to fill the bar. The header content wrapper is
 * `min-w-0`, so it truncates instead of pushing the actions past the right
 * edge, and the skip link (Tab from the top of the page) still lands on
 * `<main>`.
 */
export const LongBreadcrumb: StoryObj<typeof AppShell> = {
  args: {
    brand,
    nav,
    user,
    currentPath: "/projects",
    headerContent: (
      <Breadcrumb>
        <BreadcrumbList className="flex-nowrap">
          <BreadcrumbItem>
            <BreadcrumbLink href="/clients">Clients</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="min-w-0">
            <BreadcrumbLink href="/clients/1" className="truncate">
              Sociedade de Consultoria e Gestão de Participações Sociais
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Documents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
    headerActions: (
      <>
        <Button variant="ghost" size="icon-sm" aria-label="Notifications">
          <BellIcon />
        </Button>
        <Button>
          <PlusIcon /> New document
        </Button>
      </>
    ),
    children: <PageHeader title="Documents" />,
  },
}

/**
 * The seams. `classNames` reaches the three regions a page has reasons to
 * change — here the header is tinted and the sidebar carries `print:hidden`,
 * neither of which used to be possible without a `!important` selector on this
 * library's `data-slot` attributes. `sidebarHeader` is the slot above the nav
 * under the brand, so a dropdown can live in it.
 * `sidebarFooter` is the matching slot under the nav, for a credit or a
 * version string. `bleed` drops `main`'s gutter for a page that runs to the
 * edges.
 */
export const Seams: StoryObj<typeof AppShell> = {
  args: {
    brand,
    nav,
    user,
    currentPath: "/",
    bleed: true,
    classNames: { sidebar: "print:hidden", header: "bg-muted/40 print:hidden" },
    sidebarHeader: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="w-full justify-between">
            Northwind <CaretDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Northwind</DropdownMenuItem>
          <DropdownMenuItem>Contoso</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    sidebarFooter: <p className="px-2 pb-1 text-[0.625rem] text-muted-foreground/70">v1.4.2</p>,
    children: (
      <div className="flex h-40 items-center justify-center bg-muted text-sm text-muted-foreground">
        Full bleed: no gutter around this.
      </div>
    ),
  },
}
