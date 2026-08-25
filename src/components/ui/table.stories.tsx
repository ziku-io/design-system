import type { Meta, StoryObj } from "@storybook/react-vite"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./table"
import { Badge } from "./badge"
const meta: Meta<typeof Table> = { title: "Components/Table", component: Table, tags: ["autodocs"], parameters: { layout: "padded" } }
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
        <TableRow><TableHead>Invoice</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Amount</TableHead></TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.id}>
            <TableCell className="font-medium">{r.id}</TableCell>
            <TableCell><Badge variant={r.status === "Paid" ? "default" : "outline"}>{r.status}</Badge></TableCell>
            <TableCell className="text-right">{r.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
