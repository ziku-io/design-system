import type { Meta, StoryObj } from "@storybook/react-vite"
import { PlusIcon } from "@phosphor-icons/react"

import { DataTable, createDataTableColumnHelper } from "./data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof DataTable> = {
  title: "Blocks/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Sorting, filtering and pagination on TanStack Table v9. Use it for any list of records." } },
  },
}
export default meta

interface Member {
  id: string
  name: string
  email: string
  role: "Owner" | "Admin" | "Member"
  status: "Active" | "Invited"
}

const helper = createDataTableColumnHelper<Member>()
const columns = [
  helper.accessor("name", { header: "Name", cell: (c) => <span className="font-medium">{c.getValue()}</span> }),
  helper.accessor("email", { header: "Email" }),
  helper.accessor("role", { header: "Role" }),
  helper.accessor("status", {
    header: "Status",
    cell: (c) => (
      <Badge variant={c.getValue() === "Active" ? "default" : "outline"}>{c.getValue()}</Badge>
    ),
  }),
]

const names = ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Katherine Johnson", "Linus Torvalds", "Margaret Hamilton", "Ken Thompson", "Barbara Liskov", "Donald Knuth", "Radia Perlman", "Tim Berners-Lee", "Anita Borg"]
const data: Member[] = names.map((name, i) => ({
  id: String(i),
  name,
  email: `${name.split(" ")[0].toLowerCase()}@ziku.dev`,
  role: i === 0 ? "Owner" : i % 3 === 0 ? "Admin" : "Member",
  status: i % 4 === 0 ? "Invited" : "Active",
}))

type Story = StoryObj<typeof DataTable<Member>>

export const Default: Story = {
  args: {
    columns,
    data,
    filterColumn: "name",
    filterPlaceholder: "Filter members…",
    actions: <Button size="sm"><PlusIcon /> Invite</Button>,
  },
}
export const Loading: Story = { args: { columns, data: [], loading: true, filterColumn: "name" } }
export const Empty: Story = {
  args: { columns, data: [], filterColumn: "name", empty: "No members yet." },
}
/** `pageSize={0}` renders every row and drops the pager. */
export const Unpaginated: Story = { args: { columns, data: data.slice(0, 4), pageSize: 0 } }
