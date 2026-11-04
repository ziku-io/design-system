import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"
import { useState } from "react"
import { Badge } from "./badge"
import { TableAddRow } from "@/blocks/data/new-row"
const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}
export default meta
const rows = [
  { id: "INV-001", status: "Paid", amount: "$250.00" },
  { id: "INV-002", status: "Pending", amount: "$150.00" },
  { id: "INV-003", status: "Unpaid", amount: "$350.00" },
]
export const Default: StoryObj<typeof Table> = {
  render: () => (
    <Table>
      <TableCaption>Recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.id}>
            <TableCell className="font-medium">{r.id}</TableCell>
            <TableCell>
              <Badge variant={r.status === "Paid" ? "default" : "outline"}>{r.status}</Badge>
            </TableCell>
            <TableCell className="text-right">{r.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

/** `TableAddRow` last in the body: "Add row", then a row of fields with a check
 *  and a cross. A column with an `order` gets a select. Enter saves, Escape
 *  cancels; the page adds the record to its own rows. */
export const AddRow: StoryObj<typeof Table> = {
  render: function Render() {
    const [list, setList] = useState(rows)
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="font-medium">{r.id}</TableCell>
              <TableCell>
                <Badge variant={r.status === "Paid" ? "default" : "outline"}>{r.status}</Badge>
              </TableCell>
              <TableCell className="text-right">{r.amount}</TableCell>
            </TableRow>
          ))}
          <TableAddRow
            columns={[
              { key: "id", header: "Invoice" },
              { key: "status", header: "Status", order: ["Paid", "Pending", "Unpaid"] },
              { key: "amount", header: "Amount" },
            ]}
            onAdd={(v) =>
              setList((old) => [
                ...old,
                { id: v.id, status: v.status || "Pending", amount: v.amount },
              ])
            }
          />
        </TableBody>
      </Table>
    )
  },
}
