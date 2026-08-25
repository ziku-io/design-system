import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  BuildingsIcon,
  CircleDashedIcon,
  CurrencyEurIcon,
  EnvelopeSimpleIcon,
  PlusIcon,
  UserIcon,
} from "@phosphor-icons/react"

import { DataTable } from "./data-table"
import type { DataTableColumn, DataTableView } from "./types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "Blocks/DataTable",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Filter chips, multi-column sorting, grouping, column visibility and saved views, on TanStack Table v9. Ported from the nieusync internal table.",
      },
    },
  },
}
export default meta

interface Deal {
  id: number
  name: string
  company: string
  owner: string
  stage: "Lead" | "Qualified" | "Proposal" | "Won" | "Lost"
  value: number
}

const STAGES = ["Lead", "Qualified", "Proposal", "Won", "Lost"] as const
const OWNERS = ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Radia Perlman"]
const COMPANIES = ["Northwind", "Acme", "Globex", "Initech", "Umbrella", "Soylent"]

const deals: Deal[] = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `Deal ${String(i + 1).padStart(2, "0")}`,
  company: COMPANIES[i % COMPANIES.length],
  owner: OWNERS[i % OWNERS.length],
  stage: STAGES[i % STAGES.length],
  value: (i % 9) * 2500 + 1500,
}))

const euros = (n: number) => `€${n.toLocaleString("en-GB")}`

const columns: DataTableColumn<Deal>[] = [
  { key: "name", header: "Deal", icon: UserIcon, className: "font-medium" },
  { key: "company", header: "Company", icon: BuildingsIcon, facet: true },
  { key: "owner", header: "Owner", icon: EnvelopeSimpleIcon, facet: true },
  {
    key: "stage",
    header: "Stage",
    icon: CircleDashedIcon,
    facet: true,
    order: [...STAGES],
    render: (r) => (
      <Badge variant={r.stage === "Won" ? "default" : r.stage === "Lost" ? "outline" : "secondary"}>
        {r.stage}
      </Badge>
    ),
  },
  {
    key: "value",
    header: "Value",
    icon: CurrencyEurIcon,
    value: (r) => r.value,
    render: (r) => euros(r.value),
    className: "text-right tabular-nums",
  },
]

const presets: DataTableView[] = [
  {
    id: "open",
    name: "Open",
    icon: "funnel",
    state: {
      columnFilters: [{ id: "stage", value: ["Lead", "Qualified", "Proposal"] }],
    },
  },
  {
    id: "by-stage",
    name: "Pipeline",
    icon: "board",
    state: { grouping: ["stage"] },
  },
]

type Story = StoryObj<typeof DataTable<Deal>>

/** Chips, sorting, grouping and column visibility, with three saved views. */
export const Default: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={deals}
      rowId={(d) => String(d.id)}
      presets={presets}
      defaultSort={{ key: "value", dir: "desc" }}
      searchPlaceholder="Search deals…"
      toolbar={
        <Button size="sm" className="mr-1">
          <PlusIcon /> New deal
        </Button>
      }
    />
  ),
}

/** Grouped by a facet column: collapsible group rows with counts. */
export const Grouped: Story = {
  render: () => (
    <DataTable columns={columns} data={deals} rowId={(d) => String(d.id)} defaultGroup="stage" />
  ),
}

/** Starts with a chip already on the bar. */
export const Filtered: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={deals}
      rowId={(d) => String(d.id)}
      defaultFilters={[{ id: "stage", value: ["Won"] }]}
    />
  ),
}

/** `renderCard` + a facet column unlocks the board toggle. Cards drag between
 *  columns when the grouped column defines `onSet`. */
export const Board: Story = {
  render: function BoardStory() {
    const [rows, setRows] = useState(deals.slice(0, 18))
    const boardColumns: DataTableColumn<Deal>[] = columns.map((c) =>
      c.key === "stage"
        ? {
            ...c,
            onSet: (row, label) =>
              setRows((rs) =>
                rs.map((r) => (r.id === row.id ? { ...r, stage: label as Deal["stage"] } : r)),
              ),
          }
        : c,
    )
    return (
      <DataTable
        columns={boardColumns}
        data={rows}
        rowId={(d) => String(d.id)}
        defaultMode="board"
        defaultGroup="stage"
        boardSubtitle={(rs) => euros(rs.reduce((n, r) => n + r.value, 0))}
        renderCard={(d) => (
          <div className="rounded-md border bg-card p-3 text-sm shadow-xs">
            <div className="font-medium">{d.name}</div>
            <div className="text-muted-foreground">{d.company}</div>
            <div className="mt-1 tabular-nums">{euros(d.value)}</div>
          </div>
        )}
      />
    )
  },
}

/** Pagination is available when nothing is grouped. */
export const Paginated: Story = {
  render: () => (
    <DataTable columns={columns} data={deals} rowId={(d) => String(d.id)} pageSize={8} />
  ),
}

export const Loading: Story = {
  render: () => <DataTable columns={columns} data={[]} loading />,
}
export const Empty: Story = {
  render: () => <DataTable columns={columns} data={[]} empty="No deals yet." />,
}
