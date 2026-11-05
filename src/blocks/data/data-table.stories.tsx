import type { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"
import {
  BuildingsIcon,
  CircleDashedIcon,
  CurrencyEurIcon,
  EnvelopeSimpleIcon,
  PlusIcon,
  UserIcon,
} from "@phosphor-icons/react"

import { DataTable } from "./data-table"
import type {
  DataTableColumn,
  DataTableQuery,
  DataTableState,
  DataTableView,
  SavedView,
} from "./types"
import { TrophyIcon, XCircleIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { UIStringsProvider } from "@/lib/strings"
import { Drawer } from "@/blocks/drawer/drawer"

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

/** What the API stores against what a person reads, the split `facetKey` and
 *  `facetLabel` exist for. */
const STAGE_KEYS = STAGES.map((s) => s.toLowerCase())
const STAGE_LABELS: Record<string, string> = Object.fromEntries(
  STAGES.map((s) => [s.toLowerCase(), s]),
)

/** One consumer's dialect: a keyset cursor, `sort_by`, one packed `filter`.
 *  The table produces the state; this produces the URL. */
function toRequest(q: DataTableQuery): string {
  const parts = [
    q.q && `q=${encodeURIComponent(q.q)}`,
    q.sort && `sort_by=${q.sort.dir === "desc" ? "-" : ""}${q.sort.key}`,
    Object.keys(q.filters).length &&
      `filter=${Object.entries(q.filters)
        .map(([field, values]) => `${field}:${values.join(",")}`)
        .join(";")}`,
  ].filter(Boolean)
  return `GET /deals?${[...parts, "limit=8"].join("&")}`
}

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

/** The shape a view's state has when nothing is set. */
const EMPTY_STATE: DataTableState = {
  sorting: [],
  columnFilters: [],
  globalFilter: "",
  columnVisibility: {},
  grouping: [],
  mode: "table",
}

type Story = StoryObj<typeof DataTable<Deal>>

/** Chips, sorting, grouping and column visibility, with three saved views. */
/** Enough rows to cross the windowing threshold several hundred times over. */
const manyDeals: Deal[] = Array.from({ length: 10_000 }, (_, i) => ({
  id: i + 1,
  name: `Deal ${String(i + 1).padStart(5, "0")}`,
  company: COMPANIES[i % COMPANIES.length],
  owner: OWNERS[i % OWNERS.length],
  stage: STAGES[i % STAGES.length],
  value: (i % 9) * 2500 + 1500,
}))

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
/** The read failed. The toolbar stays, the band says so, and Retry is the way out. */
export const Failed: Story = {
  render: () => <DataTable columns={columns} data={undefined} error onRetry={() => {}} />,
}
/** Grouped by a column with a declared `order`, the board keeps its columns
 *  while the cards load. */
export const BoardLoading: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      rowId={(d) => String(d.id)}
      renderCard={(d) => <div className="text-sm">{d.name}</div>}
      defaultMode="board"
      defaultGroup="stage"
      loading
    />
  ),
}
export const Empty: Story = {
  render: () => <DataTable columns={columns} data={[]} empty="No deals yet." />,
}

/** "Add row" under the last row opens a row of fields with a check and a
 *  cross. A facet with an `order` gets a select; the rest get a text field.
 *  Enter saves, Escape cancels. The page parses what it gets and adds the
 *  record to `data` itself; this one refuses a blank name to show the error. */
export const AddRow: Story = {
  render: function Render() {
    const [rows, setRows] = useState(deals.slice(0, 4))
    return (
      <DataTable
        columns={columns}
        data={rows}
        rowId={(d) => String(d.id)}
        search={false}
        onAddRow={async (v) => {
          await new Promise((r) => setTimeout(r, 400))
          if (!v.name) throw new Error("A deal needs a name")
          setRows((old) => [
            ...old,
            {
              id: old.length + 100,
              name: v.name,
              company: v.company,
              owner: v.owner,
              stage: (v.stage || "Lead") as Deal["stage"],
              value: Number(v.value.replace(/[^\d.]/g, "")) || 0,
            },
          ])
        }}
      />
    )
  },
}

/** Filtered down to nothing, which is not the same as having nothing: the page's
 *  `empty` slot is for an empty list, and this state gets a way back out. */
export const EmptyAfterFiltering: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={deals}
      rowId={(d) => String(d.id)}
      empty="No deals yet."
      defaultFilters={[{ id: "company", value: ["Nothing named this"] }]}
    />
  ),
}

/** Rows the consumer can open. The row is focusable and answers Enter and Space,
 *  so the list works without a pointer. */
export const ClickableRows: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={deals.slice(0, 6)}
      rowId={(d) => String(d.id)}
      onRowClick={() => {}}
    />
  ),
}

/** The toolbar, the view settings and every panel behind them, in Portuguese.
 *  The table itself is unchanged: only the dictionary is. */
export const Translated: Story = {
  render: () => (
    <UIStringsProvider
      strings={{
        common: {
          search: "Procurar",
          searchPlaceholder: "Procurar…",
          noResults: "Sem resultados.",
          none: "Nenhum",
          close: "Fechar",
        },
        dataTable: {
          allView: "Todos",
          newView: "Nova vista",
          createView: "Criar",
          saveView: "Guardar os filtros atuais como uma vista",
          deleteView: "Eliminar vista",
          viewSettings: "Definições da vista",
          viewName: "Nome da vista",
          changeIcon: "Mudar o ícone",
          back: "Voltar",
          layout: "Disposição",
          table: "Tabela",
          board: "Quadro",
          visibleColumns: "Colunas visíveis",
          hidden: (n) => `${n} ocultas`,
          filters: "Filtros",
          filter: "Filtrar",
          removeFilter: "Remover filtro",
          is: "é",
          contains: "contém",
          findColumn: "Encontrar uma coluna…",
          typeAValue: "Escreva um valor…",
          sorting: "Ordenação",
          sort: "Ordenar",
          ascending: "Crescente",
          descending: "Decrescente",
          addSort: "Adicionar ordenação",
          removeSort: "Remover",
          removeSorting: "Remover ordenação",
          group: "Agrupar",
          groupBy: "Agrupar por",
          noGrouping: "Sem agrupamento",
        },
      }}
    >
      <DataTable columns={columns} data={deals} rowId={(d) => String(d.id)} presets={presets} />
    </UIStringsProvider>
  ),
}

/**
 * Won and Lost are endings, not stages: `boardTile` renders them as compact
 * drop targets so the four stages people actually work stay on screen, and so
 * the irreversible drop does not look like the four reversible ones.
 */
export const BoardWithEndings: Story = {
  render: function BoardEndingsStory() {
    const [rows, setRows] = useState(deals.slice(0, 18))
    const boardColumns: DataTableColumn<Deal>[] = columns.map((c) =>
      c.key === "stage"
        ? {
            ...c,
            onSet: (row, label) =>
              setRows((rs) =>
                rs.map((r) => (r.id === row.id ? { ...r, stage: label as Deal["stage"] } : r)),
              ),
            boardTile: (label: string) =>
              label === "Won"
                ? ({ icon: TrophyIcon, tone: "success" } as const)
                : label === "Lost"
                  ? ({ icon: XCircleIcon, tone: "danger" } as const)
                  : undefined,
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

/**
 * Export CSV, in the overflow menu. Off unless the page passes `csv`: a table
 * of somebody's records should not grow a download button because a library
 * version did.
 *
 * `decimal: ","` is the pt-PT dialect, which writes `1234,5` and separates on
 * semicolons, because that is what Excel reads in a locale that writes numbers
 * that way. What comes out is the rows and columns on screen, filters and sort
 * included.
 */
export const Exportable: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={deals}
      rowId={(d) => String(d.id)}
      csv={{ filename: "deals", decimal: "," }}
    />
  ),
}

/**
 * Saved views on a server rather than in localStorage, so they can be shared
 * and follow a person to a second machine. The backend here is an object in
 * memory; a real one is HTTP.
 *
 * With a backend the save form offers "Share with everyone", somebody else's
 * shared view is marked in the picker, and a view the server says this person
 * may not delete offers no delete.
 */
export const ServerViews: Story = {
  render: function ServerViewsStory() {
    const [stored, setStored] = useState<SavedView[]>([
      {
        id: "s1",
        name: "Ana's pipeline",
        icon: "users",
        state: { ...EMPTY_STATE, columnFilters: [{ id: "stage", value: ["Proposal"] }] },
        shared: true,
        ownerName: "Ana",
        canDelete: false,
      },
    ])
    const backend = useMemo(
      () => ({
        list: () => Promise.resolve(stored),
        create: (view: Omit<SavedView, "id">) => {
          const saved = { ...view, id: `s${Date.now()}`, canDelete: true }
          setStored((s) => [...s, saved])
          return Promise.resolve(saved)
        },
        update: (id: string, patch: Partial<Omit<SavedView, "id">>) => {
          setStored((s) => s.map((v) => (v.id === id ? { ...v, ...patch } : v)))
          return Promise.resolve()
        },
        remove: (id: string) => {
          setStored((s) => s.filter((v) => v.id !== id))
          return Promise.resolve()
        },
      }),
      // The backend is held still on purpose: rebuilding it every render is
      // what the hook's own ref guards against, and a story should not rely on
      // that guard.
      [],
    )
    return (
      <DataTable
        columns={columns}
        data={deals}
        rowId={(d) => String(d.id)}
        viewKey="stories-deals"
        viewsBackend={backend}
      />
    )
  },
}

/**
 * A list the API pages, sorts, searches and filters.
 *
 * `paged` hands the toolbar's state to `setQuery` — debounced on the search
 * box — and the page turns that into whatever its API speaks; here a keyset
 * cursor, a `sort_by` and one packed `filter`, none of which the table knows
 * about. Rows arrive in the order they were asked for and the table leaves
 * them in it.
 *
 * The stage column also shows the key/label split: `facetKey` stores and
 * transmits `won`, `facetLabel` renders "Won". Only "Stage" can be sorted,
 * because it is the only column with a `sortKey`.
 */
export const Paged: Story = {
  render: function PagedStory() {
    const PAGE = 8
    const [query, setQuery] = useState<DataTableQuery>({ q: "", filters: {} })
    const [limit, setLimit] = useState(PAGE)
    const [request, setRequest] = useState("")

    const pagedColumns: DataTableColumn<Deal>[] = [
      { key: "name", header: "Deal", icon: UserIcon, className: "font-medium" },
      { key: "company", header: "Company", icon: BuildingsIcon, facet: true },
      {
        key: "stage",
        header: "Stage",
        icon: CircleDashedIcon,
        facet: true,
        sortKey: "stage",
        filterKey: "stage",
        order: STAGE_KEYS,
        facetKey: (r) => r.stage.toLowerCase(),
        facetLabel: (key) => STAGE_LABELS[key] ?? key,
        render: (r) => (
          <Badge
            variant={r.stage === "Won" ? "default" : r.stage === "Lost" ? "outline" : "secondary"}
          >
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

    // Stands in for the API: matches the query, then cuts the page off.
    const matched = deals.filter((d) => {
      const stages = query.filters.stage
      if (stages?.length && !stages.includes(d.stage.toLowerCase())) return false
      return !query.q || d.name.toLowerCase().includes(query.q.toLowerCase())
    })
    const sorted = query.sort
      ? [...matched].sort(
          (a, b) => a.stage.localeCompare(b.stage) * (query.sort!.dir === "desc" ? -1 : 1),
        )
      : matched

    return (
      <div className="grid gap-2">
        <code className="rounded-md border bg-muted/50 px-3 py-2 text-xs">{request}</code>
        <DataTable
          columns={pagedColumns}
          data={sorted.slice(0, limit)}
          rowId={(d) => String(d.id)}
          searchPlaceholder="Search deals…"
          paged={{
            hasMore: limit < sorted.length,
            loadingMore: false,
            more: () => setLimit((n) => n + PAGE),
            setQuery: (q) => {
              setQuery(q)
              setLimit(PAGE)
              setRequest(toRequest(q))
            },
          }}
        />
      </div>
    )
  },
}

/**
 * Ten thousand rows. Past a hundred the body is windowed: the DOM holds the
 * visible rows plus an overscan, the header sticks, and the table scrolls
 * inside its own box rather than growing the page. Scroll it, then sort a
 * column — the work is the same at ten thousand rows as at ten.
 */
export const Large: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={manyDeals}
      rowId={(d) => String(d.id)}
      searchPlaceholder="Search deals…"
    />
  ),
}

/**
 * Windowing and infinite scroll together, which is the pairing that used to be
 * worst: `paged` appended every page to the DOM and never dropped one, so the
 * fifth page cost five times the first. Scroll to the bottom of the box and the
 * next page loads — the sentinel row lives below the bottom spacer, so it comes
 * into view only when the list really has been scrolled to its end.
 */
export const PagedLarge: Story = {
  render: function PagedLargeStory() {
    const PAGE = 250
    const [limit, setLimit] = useState(PAGE)
    return (
      <DataTable
        columns={columns}
        data={manyDeals.slice(0, limit)}
        rowId={(d) => String(d.id)}
        searchPlaceholder="Search deals…"
        paged={{
          hasMore: limit < manyDeals.length,
          loadingMore: false,
          more: () => setLimit((n) => Math.min(n + PAGE, manyDeals.length)),
          // The rows are already here, so nothing has to be re-requested; the
          // table filters and sorts what it has been given.
          setQuery: () => {},
        }}
      />
    )
  },
}

interface Task {
  id: string
  title: string
  owner: string
  status: "Planned" | "In progress" | "Done"
  start?: Date
  /** Absent: a milestone, a single day. */
  due?: Date
}

// Relative to the real today, so the timeline's today line is always in range.
const on = (offset: number) => {
  const d = new Date()
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + offset)
}
const tasks: Task[] = [
  {
    id: "t1",
    title: "Discovery interviews",
    owner: "Ada Lovelace",
    status: "Done",
    start: on(-24),
    due: on(-12),
  },
  {
    id: "t2",
    title: "Brand refresh",
    owner: "Grace Hopper",
    status: "In progress",
    start: on(-10),
    due: on(8),
  },
  { id: "t3", title: "Design review", owner: "Alan Turing", status: "Planned", start: on(3) },
  {
    id: "t4",
    title: "API v2",
    owner: "Radia Perlman",
    status: "In progress",
    start: on(-6),
    due: on(26),
  },
  {
    id: "t5",
    title: "Billing migration",
    owner: "Ada Lovelace",
    status: "Planned",
    start: on(12),
    due: on(40),
  },
  { id: "t6", title: "Beta launch", owner: "Grace Hopper", status: "Planned", start: on(30) },
  {
    id: "t7",
    title: "Help centre articles",
    owner: "Alan Turing",
    status: "Planned",
    start: on(14),
    due: on(21),
  },
  {
    id: "t8",
    title: "Security audit",
    owner: "Radia Perlman",
    status: "Planned",
    start: on(1),
    due: on(4),
  },
  { id: "t9", title: "Quarterly report", owner: "Ada Lovelace", status: "Planned", start: on(5) },
  { id: "t10", title: "Customer webinar", owner: "Grace Hopper", status: "Planned", start: on(5) },
  { id: "t11", title: "Invoice run", owner: "Alan Turing", status: "Planned", start: on(5) },
  { id: "t12", title: "Board pack", owner: "Radia Perlman", status: "Planned", start: on(5) },
  { id: "t13", title: "Office move", owner: "Ada Lovelace", status: "Planned" },
]

const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" })
const taskColumns: DataTableColumn<Task>[] = [
  { key: "title", header: "Task", className: "font-medium" },
  { key: "owner", header: "Owner", icon: UserIcon, facet: true },
  {
    key: "status",
    header: "Status",
    icon: CircleDashedIcon,
    facet: true,
    order: ["Planned", "In progress", "Done"],
  },
  {
    key: "start",
    header: "Start",
    value: (r) => r.start?.getTime(),
    render: (r) => (r.start ? fmt.format(r.start) : "—"),
  },
  {
    key: "due",
    header: "Due",
    value: (r) => r.due?.getTime(),
    render: (r) => (r.due ? fmt.format(r.due) : "—"),
  },
]
const taskDates = { start: (r: Task) => r.start, end: (r: Task) => r.due }

/**
 * Planning: one bar per task from start to due, a diamond for a task with no
 * due date, a red line for today. Week, Month and Quarter change the zoom.
 * Bars drag: the body moves the task, either end moves that date. With a bar
 * focused, the arrow keys move it a day, and with Shift they move its end.
 * The chips and sort in the toolbar apply here as in the table, and the layout
 * switch on the right goes back to it. "Office move" has no date and is
 * counted, not drawn.
 */
export const Timeline: StoryObj = {
  render: function Timeline() {
    const [rows, setRows] = useState(tasks)
    return (
      <DataTable
        columns={taskColumns}
        data={rows}
        rowId={(r) => r.id}
        dates={{
          ...taskDates,
          // Drag a bar, or either end of it. The table never moves the row:
          // the page updates its data and the bar follows.
          onReschedule: (row, { start, end }) =>
            setRows((all) => all.map((r) => (r.id === row.id ? { ...r, start, due: end } : r))),
        }}
        defaultMode="timeline"
        defaultSort={{ key: "start", dir: "asc" }}
      />
    )
  },
}

/** Deadlines: the same tasks on a month grid, each on the day it is due (or
 *  starts, with no due date). A day with more than three folds the rest into
 *  "+N more". Drag a task to another day, or focus it and use the arrow keys:
 *  sideways a day, up and down a week. */
export const Calendar: StoryObj = {
  render: function Calendar() {
    const [rows, setRows] = useState(tasks)
    return (
      <DataTable
        columns={taskColumns}
        data={rows}
        rowId={(r) => r.id}
        dates={{
          ...taskDates,
          // Drag a task to another day; it keeps its length.
          onReschedule: (row, { start, end }) =>
            setRows((all) => all.map((r) => (r.id === row.id ? { ...r, start, due: end } : r))),
        }}
        defaultMode="calendar"
      />
    )
  },
}

interface Deadline {
  id: string
  title: string
  category: "Tax" | "Accounts" | "Contract" | "Licence" | "Insurance"
  owner: string
  due: Date
}

// A client's five-year filing calendar: what an accountant or a compliance
// team actually tracks. Fixed years, so the story reads the same every day.
const deadlines: Deadline[] = (() => {
  const out: Deadline[] = []
  const add = (title: string, category: Deadline["category"], owner: string, due: Date) =>
    out.push({ id: `${title}-${due.getTime()}`, title, category, owner, due })
  for (let y = 2026; y <= 2030; y++) {
    ;[1, 4, 7, 10].forEach((m, q) =>
      add(`VAT return Q${q === 0 ? 4 : q}`, "Tax", "Ana Silva", new Date(y, m, 15)),
    )
    add("Corporate tax (Modelo 22)", "Tax", "Ana Silva", new Date(y, 4, 31))
    add("Annual accounts", "Accounts", "Rui Costa", new Date(y, 5, 30))
    add("IES declaration", "Accounts", "Rui Costa", new Date(y, 6, 15))
    add("Insurance renewal", "Insurance", "Marta Reis", new Date(y, 2, 1))
    if (y % 2 === 0) add("Operating licence renewal", "Licence", "Marta Reis", new Date(y, 8, 30))
  }
  add("Supply contract: price review", "Contract", "Rui Costa", new Date(2027, 0, 31))
  add("Supply contract: renewal notice", "Contract", "Rui Costa", new Date(2028, 9, 1))
  add("Lease break option", "Contract", "Marta Reis", new Date(2029, 3, 30))
  return out
})()

const longDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
})
const deadlineColumns: DataTableColumn<Deadline>[] = [
  { key: "title", header: "Deadline", className: "font-medium" },
  {
    key: "category",
    header: "Category",
    icon: CircleDashedIcon,
    facet: true,
    order: ["Tax", "Accounts", "Contract", "Licence", "Insurance"],
    render: (r) => <Badge variant="secondary">{r.category}</Badge>,
  },
  { key: "owner", header: "Owner", icon: UserIcon, facet: true },
  {
    key: "due",
    header: "Due",
    value: (r) => r.due.getTime(),
    render: (r) => longDate.format(r.due),
    className: "tabular-nums",
  },
]

/**
 * Deadlines over five years. "All" is the list; "By month" opens the calendar
 * on its Year scale, twelve month cards with the deadlines in each, and the
 * arrows step a year at a time. A month's name opens its day grid. Chips drag
 * between months and keep their day.
 *
 * Every layout calls the same `onRowClick`, so the page decides what a click
 * opens: here, a `Drawer` with the deadline's details. The table and the views
 * render the item; the page composes what it opens.
 */
export const Deadlines: StoryObj = {
  render: function Deadlines() {
    const [rows, setRows] = useState(deadlines)
    const [open, setOpen] = useState<Deadline | null>(null)
    return (
      <>
        <DataTable
          columns={deadlineColumns}
          data={rows}
          rowId={(r) => r.id}
          defaultSort={{ key: "due", dir: "asc" }}
          presets={[
            { id: "by-month", name: "By month", icon: "calendar", state: { mode: "calendar" } },
          ]}
          dates={{
            start: (r) => r.due,
            calendarScale: "year",
            onReschedule: (row, { start }) =>
              setRows((all) => all.map((r) => (r.id === row.id ? { ...r, due: start } : r))),
          }}
          onRowClick={setOpen}
        />
        <Drawer
          open={open !== null}
          onOpenChange={(o) => !o && setOpen(null)}
          title={open?.title}
          description={open && longDate.format(open.due)}
          footer={<Button onClick={() => setOpen(null)}>Done</Button>}
        >
          {open && (
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
              <dt className="text-muted-foreground">Category</dt>
              <dd>{open.category}</dd>
              <dt className="text-muted-foreground">Owner</dt>
              <dd>{open.owner}</dd>
            </dl>
          )}
        </Drawer>
      </>
    )
  },
}
