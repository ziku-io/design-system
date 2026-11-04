import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  CheckCircleIcon,
  FolderIcon,
  PlusIcon,
  UploadSimpleIcon,
  UsersIcon,
  WalletIcon,
  WarningIcon,
} from "@phosphor-icons/react"

import { ActivityList, Dashboard, DashboardPanel, type ActivityItem } from "./dashboard"
import { StatTile } from "@/blocks/page/stat-tile"
import { DataTable } from "@/blocks/data/data-table"
import type { DataTableColumn } from "@/blocks/data/types"
import { DateRangePicker, type DateRange } from "@/blocks/date/date-picker"
import { Badge } from "@/components/ui/badge"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Link } from "@/lib/link"
import { UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

const meta: Meta = {
  title: "Blocks/Dashboard",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The starting point for an app's home screen: `Dashboard` lays out a header, a row of `StatTile`s and a grid of `DashboardPanel`s. The page fetches; the block only places what it is given.",
      },
    },
  },
}
export default meta

// Fixed, so every render and every snapshot reads the same times.
const NOW = new Date("2026-11-04T10:30:00Z")
const minutesAgo = (m: number) => new Date(NOW.getTime() - m * 60_000)

const activity: ActivityItem[] = [
  { id: "1", title: "Ana Silva approved dossier 214", at: minutesAgo(12), icon: CheckCircleIcon },
  {
    id: "2",
    title: "Rui Costa uploaded 3 invoices",
    description: "Dossier 209 · Q3 2026",
    at: minutesAgo(95),
    icon: UploadSimpleIcon,
  },
  { id: "3", title: "Payment overdue on dossier 188", at: minutesAgo(60 * 26), icon: WarningIcon },
]

interface Task {
  id: string
  dossier: string
  kind: "Review" | "Missing document" | "Payment"
  owner: string
}

const tasks: Task[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  dossier: `Dossier ${200 + i}`,
  kind: (["Review", "Missing document", "Payment"] as const)[i % 3],
  owner: ["Ana Silva", "Rui Costa"][i % 2],
}))

const columns: DataTableColumn<Task>[] = [
  { key: "dossier", header: "Dossier", className: "font-medium" },
  {
    key: "kind",
    header: "Kind",
    facet: true,
    render: (r) => <Badge variant="secondary">{r.kind}</Badge>,
  },
  { key: "owner", header: "Owner", facet: true },
]

function Stats() {
  return (
    <>
      <StatTile
        label="Open dossiers"
        value="128"
        change={8.4}
        hint="vs last month"
        icon={FolderIcon}
      />
      <StatTile label="Clients" value="86" change={2.1} icon={UsersIcon} />
      <StatTile
        label="To refund"
        value="€48,120"
        change={-3}
        hint="vs last month"
        icon={WalletIcon}
      />
      {/* Fewer overdue is good, so falling is the up direction. */}
      <StatTile label="Overdue" value="4" change={-50} trend="up" icon={WarningIcon} />
    </>
  )
}

const trend = [
  { week: "W40", opened: 18, closed: 12 },
  { week: "W41", opened: 22, closed: 19 },
  { week: "W42", opened: 17, closed: 21 },
  { week: "W43", opened: 26, closed: 20 },
  { week: "W44", opened: 31, closed: 27 },
  { week: "W45", opened: 24, closed: 29 },
]
const trendConfig = {
  opened: { label: "Opened", color: "var(--chart-1)" },
  closed: { label: "Closed", color: "var(--chart-2)" },
} satisfies ChartConfig

/** Stats, a chart, a full-width work queue, and half panels, with the period
 *  picker in the header where every dashboard puts it. */
export const Overview: StoryObj = {
  render: function Overview() {
    const [period, setPeriod] = React.useState<DateRange | undefined>({
      from: new Date(2026, 9, 6),
      to: new Date(2026, 10, 4),
    })
    return (
      <Dashboard
        title="Overview"
        description="12 open tasks across 9 dossiers."
        actions={
          <>
            <DateRangePicker value={period} onChange={setPeriod} />
            <Button>
              <PlusIcon /> New dossier
            </Button>
          </>
        }
        stats={<Stats />}
      >
        <DashboardPanel title="Dossiers per week" span="full">
          <ChartContainer config={trendConfig} className="aspect-auto h-56 w-full">
            <AreaChart data={trend} margin={{ left: 8, right: 8 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                dataKey="opened"
                type="monotone"
                stroke="var(--color-opened)"
                fill="var(--color-opened)"
                fillOpacity={0.12}
              />
              <Area
                dataKey="closed"
                type="monotone"
                stroke="var(--color-closed)"
                fill="var(--color-closed)"
                fillOpacity={0.12}
              />
            </AreaChart>
          </ChartContainer>
        </DashboardPanel>
        <DashboardPanel title="Work queue" span="full">
          <DataTable columns={columns} data={tasks} rowId={(t) => t.id} search={false} />
        </DashboardPanel>
        <DashboardPanel
          title="Recent activity"
          action={
            <Link href="#" className="text-link">
              View log
            </Link>
          }
        >
          <ActivityList items={activity} />
        </DashboardPanel>
        <DashboardPanel title="Nothing yet" description="A panel whose list is empty.">
          <ActivityList items={[]} />
        </DashboardPanel>
      </Dashboard>
    )
  },
}

/** Seven tiles: the row wraps on its own, no grid classes to change. */
export const ManyStats: StoryObj = {
  render: () => (
    <Dashboard
      title="Operations"
      stats={Array.from({ length: 7 }, (_, i) => (
        <StatTile key={i} label={`Queue ${i + 1}`} value={String(10 + i * 3)} />
      ))}
    />
  ),
}

/** The complete `ptPT` dictionary: dates, percentages and the empty list all
 *  follow, with nothing English left in the block's own words. */
export const Translated: StoryObj = {
  render: () => (
    <UIStringsProvider strings={ptPT}>
      <Dashboard
        title="Visão geral"
        stats={<StatTile label="Dossiers" value="128" change={8.4} hint="face ao mês anterior" />}
      >
        <DashboardPanel title="Atividade recente">
          <ActivityList items={activity} />
        </DashboardPanel>
        <DashboardPanel title="Vazio">
          <ActivityList items={[]} />
        </DashboardPanel>
      </Dashboard>
    </UIStringsProvider>
  ),
}
