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
export const Empty: Story = {
  render: () => <DataTable columns={columns} data={[]} empty="No deals yet." />,
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
