import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart"

const meta: Meta = {
  title: "Components/Chart",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "shadcn's chart on Recharts. Series take `var(--chart-1)` to `var(--chart-5)` in order; the tooltip writes numbers with the dictionary's `format.number`.",
      },
    },
  },
}
export default meta

const monthly = [
  { month: "Jun", opened: 42, closed: 30 },
  { month: "Jul", opened: 51, closed: 44 },
  { month: "Aug", opened: 38, closed: 41 },
  { month: "Sep", opened: 64, closed: 49 },
  { month: "Oct", opened: 72, closed: 58 },
  { month: "Nov", opened: 58, closed: 63 },
]

const config = {
  opened: { label: "Opened", color: "var(--chart-1)" },
  closed: { label: "Closed", color: "var(--chart-2)" },
} satisfies ChartConfig

export const Area_: StoryObj = {
  name: "Area",
  render: () => (
    <ChartContainer config={config} className="h-64 w-full max-w-xl">
      <AreaChart data={monthly} margin={{ left: 0, right: 8 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} width={32} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="opened"
          type="monotone"
          fill="var(--color-opened)"
          fillOpacity={0.15}
          stroke="var(--color-opened)"
        />
        <Area
          dataKey="closed"
          type="monotone"
          fill="var(--color-closed)"
          fillOpacity={0.15}
          stroke="var(--color-closed)"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  ),
}

export const Bars: StoryObj = {
  render: () => (
    <ChartContainer config={config} className="h-64 w-full max-w-xl">
      <BarChart data={monthly}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="opened" fill="var(--color-opened)" radius={4} />
        <Bar dataKey="closed" fill="var(--color-closed)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

export const Lines: StoryObj = {
  render: () => (
    <ChartContainer config={config} className="h-64 w-full max-w-xl">
      <LineChart data={monthly}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Line dataKey="opened" stroke="var(--color-opened)" strokeWidth={2} dot={false} />
        <Line dataKey="closed" stroke="var(--color-closed)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
}

const byStage = [
  { stage: "review", count: 18, fill: "var(--color-review)" },
  { stage: "documents", count: 11, fill: "var(--color-documents)" },
  { stage: "payment", count: 6, fill: "var(--color-payment)" },
]
const stageConfig = {
  count: { label: "Dossiers" },
  review: { label: "Review", color: "var(--chart-1)" },
  documents: { label: "Missing documents", color: "var(--chart-2)" },
  payment: { label: "Payment", color: "var(--chart-3)" },
} satisfies ChartConfig

export const Donut: StoryObj = {
  render: () => (
    <ChartContainer config={stageConfig} className="aspect-square h-64">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="stage" hideLabel />} />
        <Pie data={byStage} dataKey="count" nameKey="stage" innerRadius={56} strokeWidth={2} />
        <ChartLegend content={<ChartLegendContent nameKey="stage" />} />
      </PieChart>
    </ChartContainer>
  ),
}
