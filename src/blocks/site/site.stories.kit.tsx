import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { AsciiHero } from "performative-ui"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { FileImageIcon, FilePdfIcon } from "@phosphor-icons/react"

import { UserAvatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useTheme } from "@/lib/preferences"
import { UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"
import { SiteFooter, SiteLayout, type SiteFooterColumn, type SiteLink } from "./site-layout"
import {
  CtaBand,
  Faq,
  FeatureList,
  FeatureSplit,
  Hero,
  LogoStrip,
  PageLinks,
  PricingTable,
  Section,
  Specs,
  Testimonial,
  type FaqItem,
  type Feature,
  type PageLink,
  type Plan,
} from "./sections"
import { Terminal, WindowFrame, type TerminalLine } from "./visuals"
import { CodeBlock } from "./code-block"
import { PlanComparison, type ComparisonGroup } from "./plan-comparison"
import { ArticlePage, LegalPage, PostList, type PostSummary } from "./long-form"
import { ContactForm } from "./contact-form"
import { NewsletterBand, NewsletterForm } from "./newsletter"

/**
 * Shared material for the site stories: the frame, mock data, the product
 * fragments, the hero backgrounds and the colour-direction overrides. Not a
 * story file (it does not end in `.stories.tsx`, so Storybook and the smoke
 * test skip it) and not library code (`.stories.` in its name keeps the
 * literal-text and design-rule scans off it): everything here is example content.
 */

export const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

// ---- Frame ------------------------------------------------------------------

export const nav: SiteLink[] = [
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export const footerColumns: SiteFooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Pricing", href: "/pricing" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]

/** The newsletter in every page's footer: one line on what it is, the form. */
export function FooterNewsletter() {
  const [sent, setSent] = React.useState(false)
  return (
    <div className="grid gap-3">
      <div className="grid gap-1">
        <p className="text-sm font-medium">Release notes, once a month</p>
        <p className="text-sm text-muted-foreground">What shipped and what broke. Nothing else.</p>
      </div>
      <NewsletterForm sent={sent} onSubmit={() => wait(600).then(() => setSent(true))} />
    </div>
  )
}

/** The newsletter band at the end of a landing page, after the closing ask. */
export function LandingNewsletter() {
  const [sent, setSent] = React.useState(false)
  return (
    <NewsletterBand
      title="Release notes, once a month"
      description="What shipped, what broke and how we fixed it. Nothing else, and one click to leave."
      sent={sent}
      onSubmit={() => wait(600).then(() => setSent(true))}
    />
  )
}

/** The one footer every example page ends with: built once, passed to every
 *  `SiteLayout`, the way an app should do it. */
export const footer = (
  <SiteFooter
    columns={footerColumns}
    aside={<FooterNewsletter />}
    owner="Ziku"
    note="Rua Exemplo 1, 0000-000 Lisboa"
  />
)

export function Frame({
  currentHref,
  cta = "Start free",
  children,
}: {
  currentHref?: string
  cta?: string
  children: React.ReactNode
}) {
  return (
    <SiteLayout
      brand="ziku"
      nav={nav}
      currentHref={currentHref}
      actions={
        <>
          <Button variant="ghost" asChild>
            <a href="/login">Sign in</a>
          </Button>
          <Button asChild>
            <a href="/register">{cta}</a>
          </Button>
        </>
      }
      footer={footer}
    >
      {children}
    </SiteLayout>
  )
}

export const deeper: PageLink[] = [
  {
    href: "/docs/architecture",
    title: "Architecture",
    description: "Every component, what it stores and where.",
  },
  {
    href: "/blog",
    title: "Changelog",
    description: "What changed in each release, and why.",
  },
  {
    href: "/pricing",
    title: "Pricing",
    description: "Free to self-host. Paid for support and managed nodes.",
  },
  { href: "/docs", title: "Docs", description: "Install, configure and run it in production." },
]

/** The last band of a technical landing page: where to read more, then the ask. */
export function Ask({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action: string
}) {
  return (
    <Section>
      <PageLinks links={deeper} />
      <CtaBand
        title={title}
        description={description}
        actions={<Button size="lg">{action}</Button>}
      />
    </Section>
  )
}

// ---- Visuals: real components in a window -----------------------------------

/** A smooth, deterministic series: stories must render the same every time. */
export const series = (n: number, base: number, swing: number, phase = 0) =>
  Array.from({ length: n }, (_, i) => ({
    t: `${String(Math.floor(i / 2)).padStart(2, "0")}:${i % 2 ? "30" : "00"}`,
    v: Math.round(base + swing * Math.sin(i / 3 + phase) + (swing / 3) * Math.sin(i * 1.7 + phase)),
  }))

export function MetricChart({
  data,
  label,
  unit,
}: {
  data: { t: string; v: number }[]
  label: string
  unit: string
}) {
  const config = { v: { label, color: "var(--chart-1)" } } satisfies ChartConfig
  return (
    <div className="grid gap-1 p-4">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium tabular-nums">
          {data[data.length - 1].v.toLocaleString("en")} {unit}
        </span>
      </div>
      <ChartContainer config={config} className="aspect-auto h-44 w-full">
        <AreaChart data={data} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="t" tickLine={false} axisLine={false} minTickGap={32} />
          <YAxis width={36} tickLine={false} axisLine={false} />
          <Area
            dataKey="v"
            type="monotone"
            stroke="var(--color-v)"
            fill="var(--color-v)"
            fillOpacity={0.12}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}

export function StatusTable({
  head,
  rows,
}: {
  head: string[]
  rows: { cells: string[]; status: "success" | "warning" | "danger"; label: string }[]
}) {
  return (
    <Table className="font-mono text-xs">
      <TableHeader>
        <TableRow>
          {head.map((h) => (
            <TableHead key={h} className="font-sans">
              {h}
            </TableHead>
          ))}
          <TableHead className="text-right font-sans">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.cells[0]}>
            {r.cells.map((c, i) => (
              <TableCell key={i} className="tabular-nums">
                {c}
              </TableCell>
            ))}
            <TableCell className="text-right">
              <Badge variant={r.status} className="font-sans">
                {r.label}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

// ---- Generic: any product ----------------------------------------------------

/** A stand-in for a product screenshot: an app window drawn in tokens. */
export function Screenshot() {
  return (
    <div aria-hidden className="grid aspect-[16/10] grid-cols-[22%_1fr] bg-background">
      <div className="grid content-start gap-2 border-r bg-muted/40 p-3">
        {[60, 80, 70, 50].map((w) => (
          <div key={w} className="h-2 rounded-sm bg-muted" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="grid content-start gap-3 p-4">
        <div className="h-3 w-1/3 rounded-sm bg-muted" />
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="grid grid-cols-[1fr_4rem_3rem] gap-3 border-b pb-2">
            <div className="h-2 rounded-sm bg-muted" />
            <div className="h-2 rounded-sm bg-muted" />
            <div className="h-2 rounded-sm bg-success-subtle" />
          </div>
        ))}
      </div>
    </div>
  )
}

/** Three fragments of the product, one per point: small enough to read at a
 *  glance, real enough to show what the point means. */
export function InvoiceDraft() {
  return (
    <div className="grid h-full content-start gap-2.5 p-4 text-sm">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">INV-0043</span>
        <Badge variant="info">Draft</Badge>
      </div>
      {[
        ["Client", "Fern & Birch Lda"],
        ["Rate", "€85 / hour"],
        ["VAT", "23%"],
        ["IBAN", "PT50 0000 … 0000 0"],
      ].map(([label, value]) => (
        <div key={label} className="flex justify-between gap-3 border-b pb-2">
          <span className="text-muted-foreground">{label}</span>
          <span className="truncate tabular-nums">{value}</span>
        </div>
      ))}
    </div>
  )
}

export function Receipts() {
  return (
    <div className="grid h-full content-start gap-2 p-4 text-sm">
      <span className="font-mono text-xs text-muted-foreground">INV-0042 · Ash Studio</span>
      {[
        { name: "taxi-airport.pdf", size: "84 KB", Icon: FilePdfIcon },
        { name: "hotel-lisbon.pdf", size: "212 KB", Icon: FilePdfIcon },
        { name: "train-ticket.png", size: "1.2 MB", Icon: FileImageIcon },
      ].map(({ name, size, Icon }) => (
        <div
          key={name}
          className="flex items-center gap-2 rounded-md border bg-background px-3 py-2"
        >
          <Icon aria-hidden className="size-4 shrink-0 text-muted-foreground" />
          <span className="truncate">{name}</span>
          <span className="ml-auto shrink-0 text-xs text-muted-foreground tabular-nums">
            {size}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Team() {
  return (
    <div className="grid h-full content-start gap-2.5 p-4 text-sm">
      {[
        { name: "Jay Oak", role: "Approves" },
        { name: "Mia Fern", role: "Drafts" },
        { name: "Leo Birch", role: "Drafts" },
        { name: "Ivy Ash", role: "Read only" },
      ].map(({ name, role }) => (
        <div key={name} className="flex items-center gap-2.5">
          <UserAvatar name={name} className="size-7" />
          <span>{name}</span>
          <Badge variant="outline" className="ml-auto">
            {role}
          </Badge>
        </div>
      ))}
    </div>
  )
}

export const genericFeatures: Feature[] = [
  {
    media: <InvoiceDraft />,
    title: "Repeat invoices in two fields",
    description:
      "Client, rates, VAT and IBAN carry over from the last one. You change the hours and send.",
  },
  {
    media: <Receipts />,
    title: "Receipts filed with the invoice",
    description:
      "Drop a PDF on an invoice and it stays under that client, ready for the accountant.",
  },
  {
    media: <Team />,
    title: "Seats for the whole office",
    description: "Partners approve, assistants draft. Nobody shares a password.",
  },
]

export const genericFaq: FaqItem[] = [
  {
    id: "card",
    question: "Do I need a card to start?",
    answer: "No. Solo is free for as long as you send fewer than 10 invoices a month.",
  },
  {
    id: "certified",
    question: "Is the invoicing certified in Portugal?",
    answer: "Yes, certificate 0000/AT. The number prints on every invoice.",
  },
  {
    id: "leave",
    question: "Can I leave and take my data?",
    answer: "Settings → Export downloads every invoice as PDF and every record as CSV.",
  },
]

/** Any product: hero, who uses it, features, how, questions, the ask again.
 *  Price lives on its own page, reached from the hero's secondary button. */
export function GenericLanding() {
  return (
    <Frame>
      <Hero
        title="Send an invoice in under a minute"
        description="ziku fills in the client, the VAT and the IBAN from last time. You check the total and press send."
        actions={
          <>
            <Button size="lg">Start free</Button>
            <Button size="lg" variant="outline">
              See pricing
            </Button>
          </>
        }
        media={<Screenshot />}
      />
      <Section className="pt-0 sm:pt-0">
        <LogoStrip
          label="Sending invoices for 1,200 firms in Portugal, including"
          logos={["Fern & Birch", "Ash Studio", "Oak Partners", "Leo Birch Lda"].map((name) => ({
            name,
            logo: <span className="text-lg font-semibold tracking-tight">{name}</span>,
          }))}
        />
      </Section>
      <Section
        tone="muted"
        title="The paperwork after the work"
        description="Everything between finishing a job and the money arriving."
      >
        <FeatureList items={genericFeatures} />
      </Section>
      <Section>
        <FeatureSplit
          rows={[
            {
              title: "Know who paid without opening the bank",
              description:
                "Transfers are matched to invoices by amount and reference every morning.",
              points: [
                "Works with 14 Portuguese banks",
                "Partial payments stay open",
                "Nothing is marked paid without a transfer",
              ],
              media: <Screenshot />,
            },
            {
              title: "January without the shoebox",
              description:
                "Your accountant gets SAF-T and a CSV of every expense, with receipts attached.",
              media: <Screenshot />,
            },
          ]}
        />
      </Section>
      <Section tone="muted">
        <Testimonial
          quote="We used to spend Friday afternoons on invoices. Now it is the ten minutes before lunch."
          name="Mia Fern"
          role="Partner, Fern & Birch"
          logo={<span className="text-lg font-semibold tracking-tight">Fern & Birch</span>}
          metric={{ value: "−80%", label: "time spent on invoicing each week" }}
        />
      </Section>
      <LandingNewsletter />
      <Section width="narrow" title="Questions">
        <Faq items={genericFaq} />
      </Section>
      <Section className="pt-0 sm:pt-0">
        <CtaBand
          title="Send your first invoice today"
          description="No card. Your data exports whenever you want it."
          actions={<Button size="lg">Start free</Button>}
        />
      </Section>
    </Frame>
  )
}

// ---- AI: inference on your own GPUs -----------------------------------------

/**
 * performative-ui's `AsciiHero`, bare, behind the hero text. It paints on a
 * canvas, which cannot read a CSS variable, so the colour is resolved from the
 * theme on every theme change: one muted ink, not the package's violet-to-pink
 * default. Nothing renders for a reader who asked for reduced motion.
 *
 * A story, not a library export: the library takes no runtime dependency on a
 * decoration. An app that wants it copies this component.
 */
export function AsciiBackground() {
  const { resolved } = useTheme()
  const [ink, setInk] = React.useState<string | null>(null)
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setInk(null)
    setInk(getComputedStyle(document.documentElement).getPropertyValue("--muted-foreground").trim())
  }, [resolved])
  if (!ink) return null
  return (
    <AsciiHero
      variant="bare"
      palette={[ink]}
      baseOpacity={0.18}
      spotlightOpacity={0.55}
      spotlightRadius={10}
      fontFamily="Geist Mono Variable, ui-monospace, monospace"
      // A clearing behind the headline and buttons: characters brightened
      // under the cursor sat right behind the description and broke it up.
      className="absolute inset-0 [mask-image:radial-gradient(ellipse_45%_30%_at_50%_22%,transparent_55%,black)] [&>canvas]:absolute [&>canvas]:inset-0 [&>canvas]:size-full"
    />
  )
}

export const deploySession: TerminalLine[] = [
  { kind: "command", text: "infer deploy llama-3.1-8b --gpus 8" },
  { kind: "output", text: "pulling weights            16.1 GB   from model store" },
  { kind: "output", text: "loading on 8 × H100        tensor parallel 8" },
  { kind: "output", text: "warming kv cache           32 slots" },
  { kind: "ok", text: "ready  https://infer.internal/v1  (41 s)" },
  { kind: "command", text: "infer bench --concurrency 32 --duration 60s" },
  { kind: "output", text: "requests        1,920" },
  { kind: "output", text: "ttft p50        38 ms     p99   91 ms" },
  { kind: "ok", text: "throughput      2,412 tok/s per GPU" },
]

// ---- Crypto: RPC on your own hardware ---------------------------------------

export const rpcSession: TerminalLine[] = [
  { kind: "command", text: "rpc status" },
  { kind: "output", text: "chain       height        peers   lag" },
  { kind: "output", text: "ethereum    21,904,117    48      0 blocks" },
  { kind: "output", text: "solana      312,440,882   61      0 slots" },
  { kind: "ok", text: "all nodes at tip" },
  { kind: "command", text: "cast block-number --rpc-url localhost:8545" },
  { kind: "output", text: "21904117" },
  { kind: "comment", text: "# 9 ms, no rate limit, nothing logged off this box" },
]

// ---- The pages a landing page links to --------------------------------------

export const plans: Plan[] = [
  {
    id: "self-hosted",
    name: "Self-hosted",
    price: "€0",
    description: "The open-source build on your machines.",
    features: ["Every feature", "Community support", "Apache 2.0"],
    action: <Button variant="outline">Read the docs</Button>,
  },
  {
    id: "supported",
    name: "Supported",
    price: "€400",
    period: "/ node / month",
    description: "Self-hosted, with an engineer on call.",
    features: ["4-hour response, 24/7", "Signed release builds", "Upgrade reviews"],
    action: <Button>Start free</Button>,
    highlighted: true,
  },
  {
    id: "managed",
    name: "Managed",
    price: "Custom",
    description: "We run it in your cloud account.",
    features: ["Everything in Supported", "Your VPC, our pager", "SOC 2 report"],
    action: <Button variant="outline">Talk to us</Button>,
  },
]

export const faq: FaqItem[] = [
  {
    id: "license",
    question: "Is the self-hosted build the same code?",
    answer: "Yes. Paid plans buy support and operations, not features.",
  },
  {
    id: "node",
    question: "What counts as a node?",
    answer: "One machine running the server process. Clients and load balancers are free.",
  },
  {
    id: "data",
    question: "Do you see our data on the managed plan?",
    answer: (
      <>
        No. It runs in your account with keys you hold.{" "}
        <a href="/docs/architecture">How access works</a>.
      </>
    ),
  },
]

export const comparison: ComparisonGroup[] = [
  {
    title: "Software",
    rows: [
      { feature: "Every feature", values: { "self-hosted": true, supported: true, managed: true } },
      {
        feature: "Nodes",
        values: {
          "self-hosted": "Unlimited",
          supported: "Billed per node",
          managed: "Billed per node",
        },
      },
      {
        feature: "Signed release builds",
        hint: "Reproducible, with SBOM",
        values: { "self-hosted": false, supported: true, managed: true },
      },
    ],
  },
  {
    title: "Support",
    rows: [
      {
        feature: "Response time",
        values: { "self-hosted": "Community", supported: "4 h, 24/7", managed: "1 h, 24/7" },
      },
      {
        feature: "Upgrade reviews",
        values: { "self-hosted": false, supported: true, managed: true },
      },
      {
        feature: "We run it for you",
        hint: "In your cloud account",
        values: { "self-hosted": false, supported: false, managed: true },
      },
    ],
  },
  {
    title: "Security",
    rows: [
      {
        feature: "Encryption at rest",
        values: { "self-hosted": true, supported: true, managed: true },
      },
      { feature: "SSO and SCIM", values: { "self-hosted": false, supported: true, managed: true } },
      {
        feature: "SOC 2 report",
        values: { "self-hosted": false, supported: false, managed: true },
      },
    ],
  },
]

export const posts: PostSummary[] = [
  {
    href: "/blog/stale-reads",
    title: "Postmortem: 14 minutes of stale reads",
    description:
      "A clock jump on one replica let it serve reads after it lost the lease. What we changed.",
    published: new Date("2026-10-28"),
    author: "Jay Oak",
    readingMinutes: 7,
  },
  {
    href: "/blog/batching",
    title: "Continuous batching on one H100",
    description:
      "How the scheduler keeps 32 requests in flight without raising first-token latency.",
    published: new Date("2026-09-14"),
    author: "Mia Fern",
    readingMinutes: 9,
  },
  {
    href: "/blog/reorgs",
    title: "Handling reorgs in the RPC cache",
    published: new Date("2026-08-02"),
    author: "Leo Birch",
    readingMinutes: 5,
  },
]

// ---- Colour directions, to pick one -----------------------------------------
//
// Throwaway: the same generic landing page under five colour treatments, as
// scoped overrides in a story-only stylesheet. Whichever is picked moves into
// the library as tokens with measured contrast; the rest are deleted.

export const DIRECTIONS = `
/* Every direction but A flattens the stages, so only its own idea shows. */
[data-look]:not([data-look="stages"]) {
  --stage-1: transparent; --stage-2: transparent; --stage-3: transparent; --stage-4: transparent;
}

/* B. Brand bands: the hero and the closing ask in deep lavender. */
[data-look="brand"] [data-slot="site-hero"],
[data-look="brand"] [data-slot="cta-band"] {
  background: #4b4983;
  color: #fbfbff;
  --foreground: #fbfbff;
  --muted-foreground: #d9d8f5;
  --primary-button: #fbfbff;
  --primary-button-foreground: #3f3d70;
  --border: #6a68a3;
  --background: #4b4983;
}
[data-look="brand"] [data-slot="site-hero"] { --card: #5b5995; }
/* The picture inside the band keeps the page's own light tokens. */
[data-look="brand"] [data-slot="site-hero"] > div:last-child > div:last-child,
[data-look="brand"] [data-slot="site-hero"] [data-slot="code-block"] {
  --foreground: #44484e; --muted-foreground: #676b72; --border: #dfe2e8;
  --background: #f4f6f8; --card: #fdfdff; --muted: #edeff3;
  color: #44484e;
}

/* B and E: the hero band runs up under the floating bar, and the line after
   it gets room to breathe off the band's edge. */
[data-look="brand"] [data-slot="site-hero"],
[data-look="ink"] [data-slot="site-hero"] {
  margin-top: -72px;
  padding-top: 168px;
}
[data-look="brand"] [data-slot="site-hero"] + section,
[data-look="ink"] [data-slot="site-hero"] + section { padding-top: 64px; }

/* C. Tinted page: a pale lavender ground, white cards, deeper tinted bands. */
[data-look="tint"] {
  --background: #f3f2fc;
  --muted: #e4e2f8;
  --border: #dcdaf0;
  background: var(--background);
}
[data-look="tint"] [data-slot="cta-band"],
[data-look="tint"] [data-slot="newsletter-band"] > div > div {
  background: var(--card);
  border: 1px solid var(--border);
}

/* D. Colour accents: neutral page, colour in the details. */
[data-look="accents"] [data-slot="specs"] > div:nth-child(1) { border-color: var(--chart-1); }
[data-look="accents"] [data-slot="specs"] > div:nth-child(2) { border-color: var(--chart-2); }
[data-look="accents"] [data-slot="specs"] > div:nth-child(3) { border-color: var(--chart-3); }
[data-look="accents"] [data-slot="specs"] > div:nth-child(4) { border-color: var(--chart-4); }
[data-look="accents"] [data-slot="specs"] > div:nth-child(1) dd > span:first-child { color: var(--chart-1); }
[data-look="accents"] [data-slot="specs"] > div:nth-child(2) dd > span:first-child { color: var(--chart-2); }
[data-look="accents"] [data-slot="specs"] > div:nth-child(3) dd > span:first-child { color: var(--chart-3); }
[data-look="accents"] [data-slot="specs"] > div:nth-child(4) dd > span:first-child { color: var(--chart-4); }
[data-look="accents"] [data-slot="feature-list"] > li > div:first-child { padding: 0; }
[data-look="accents"] [data-slot="feature-list"] > li > div:first-child > div { border-top-width: 3px; }
[data-look="accents"] [data-slot="feature-list"] > li:nth-child(1) > div:first-child > div { border-top-color: var(--chart-1); }
[data-look="accents"] [data-slot="feature-list"] > li:nth-child(2) > div:first-child > div { border-top-color: var(--chart-2); }
[data-look="accents"] [data-slot="feature-list"] > li:nth-child(3) > div:first-child > div { border-top-color: var(--chart-3); }
[data-look="accents"] [data-slot="feature-split"] [data-slot="window-frame"],
[data-look="accents"] [data-slot="feature-split"] .scroll-drift > div > div { border-top: 3px solid var(--chart-2); }
[data-look="accents"] [data-slot="testimonial"] > div:last-child span:first-child { color: var(--chart-1); }
[data-look="accents"] [data-slot="cta-band"] { background: var(--primary-button); --muted-foreground: #56548d; color: #3f3d70; }
[data-look="accents"] [data-slot="cta-band"] [data-slot="button"] { background: #fdfdff; }

/* E. Ink hero: a dark slate hero and closing ask on a light page. */
[data-look="ink"] [data-slot="site-hero"],
[data-look="ink"] [data-slot="cta-band"] {
  background: #1d1f24;
  color: #e6e8eb;
  --foreground: #e6e8eb;
  --muted-foreground: #a9adb3;
  --background: #1d1f24;
  --card: #25272d;
  --muted: #2a2d33;
  --border: #363940;
  --primary-button: #3a3870;
  --primary-button-foreground: #e4e3ff;
}
`

export const MORE_DIRECTIONS = `
/* F. Duotone bands: sections alternate full-width white and lavender. */
[data-look="duotone"] [data-slot="site-section"] { background: transparent; border: 0; }
[data-look="duotone"] main > section:nth-of-type(even) { background: #ecebff; }
[data-look="duotone"] [data-slot="cta-band"] { background: var(--card); border: 1px solid var(--border); }

/* G. Warm editorial: paper ground, ink-brown type, clay buttons. */
[data-look="warm"] {
  --background: #f6f3ee;
  --card: #fffdf9;
  --muted: #efe9e1;
  --accent: #f1e6dc;
  --border: #e3dcd2;
  --foreground: #3d3a35;
  --muted-foreground: #6b655c;
  --primary-button: #efd9c9;
  --primary-button-foreground: #7a4a2e;
  background: var(--background);
}
[data-look="warm"] [data-slot="cta-band"],
[data-look="warm"] [data-slot="newsletter-band"] > div > div { background: #efe5d8; }

/* H. Brand type: headings in deep lavender, everything else neutral. */
[data-look="type"] h1,
[data-look="type"] h2,
[data-look="type"] h3,
[data-look="type"] blockquote,
[data-look="type"] [data-slot="testimonial"] > div:last-child span:first-child { color: #3f3d70; }
[data-look="type"] [data-slot="cta-band"],
[data-look="type"] [data-slot="newsletter-band"] > div > div { background: var(--card); border: 1px solid var(--border); }

/* I. Solid buttons and a deep brand footer. */
[data-look="solid"] { --primary-button: #5b57a8; --primary-button-foreground: #ffffff; }
[data-look="solid"] footer {
  background: #2f2d55;
  color: #f1f0ff;
  --foreground: #f1f0ff;
  --muted-foreground: #c9c7ee;
  --border: #4a4880;
}
[data-look="solid"] [data-slot="cta-band"],
[data-look="solid"] [data-slot="newsletter-band"] > div > div { background: var(--card); border: 1px solid var(--border); }

/* J. Pastel cards on a white page: each card and band its own pastel. */
[data-look="pastel"] { --background: #ffffff; --muted: #f6f7f9; background: #ffffff; }
[data-look="pastel"] [data-slot="feature-list"] > li:nth-child(1) > div:first-child { background: #eceaff; }
[data-look="pastel"] [data-slot="feature-list"] > li:nth-child(2) > div:first-child { background: #e2f4f6; }
[data-look="pastel"] [data-slot="feature-list"] > li:nth-child(3) > div:first-child { background: #fdeee0; }
[data-look="pastel"] [data-slot="testimonial"] { background: #f3f0fb; border-color: transparent; }
[data-look="pastel"] [data-slot="testimonial"] > div:last-child { background: #e6e3fa; }
[data-look="pastel"] [data-slot="cta-band"] { background: #e2f4f6; }
[data-look="pastel"] [data-slot="newsletter-band"] > div > div { background: #fdeee0; }
`

export function Look({
  look,
  children,
}: {
  look:
    | "stages"
    | "brand"
    | "tint"
    | "accents"
    | "ink"
    | "duotone"
    | "warm"
    | "type"
    | "solid"
    | "pastel"
  children: React.ReactNode
}) {
  return (
    <div data-look={look}>
      <style>{DIRECTIONS + MORE_DIRECTIONS}</style>
      {children}
    </div>
  )
}

// ---- Hero backgrounds, to pick one -------------------------------------------
//
// Throwaway like the colour directions: the same hero over six backgrounds in
// its `background` slot, which already fades toward the bottom and sinks as
// the page scrolls. Every pattern is drawn in theme tokens, so it holds in dark.

export const INK = "color-mix(in oklab, var(--muted-foreground) 28%, transparent)"

/** A clearing behind the headline, description and buttons, so no line runs
 *  through a word. */
export const CLEARING = "radial-gradient(ellipse 36% 26% at 50% 22%, transparent 45%, black 85%)"

export function DotGrid() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(${INK} 1.2px, transparent 1.4px)`,
        backgroundSize: "22px 22px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
      }}
    />
  )
}

export function Blueprint() {
  const fine = "color-mix(in oklab, var(--muted-foreground) 12%, transparent)"
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: [
          `linear-gradient(${INK} 1px, transparent 1px)`,
          `linear-gradient(90deg, ${INK} 1px, transparent 1px)`,
          `linear-gradient(${fine} 1px, transparent 1px)`,
          `linear-gradient(90deg, ${fine} 1px, transparent 1px)`,
        ].join(","),
        backgroundSize: "128px 128px, 128px 128px, 32px 32px, 32px 32px",
        backgroundPosition: "center top",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black 25%, transparent 80%)",
      }}
    />
  )
}

/** Topographic rings: each one a circle pushed out by two slow waves. */
export function Contours() {
  const rings = Array.from({ length: 16 }, (_, k) => {
    const r0 = 60 + k * 42
    const pts = Array.from({ length: 96 }, (_, i) => {
      const t = (i / 96) * Math.PI * 2
      const r = r0 * (1 + 0.09 * Math.sin(3 * t + k * 0.45) + 0.05 * Math.sin(5 * t - k * 0.8))
      return `${(900 + r * Math.cos(t) * 1.35).toFixed(1)},${(120 + r * Math.sin(t)).toFixed(1)}`
    })
    return `M${pts.join("L")}Z`
  })
  return (
    <svg
      className="absolute inset-0 h-full w-full text-muted-foreground"
      style={{ maskImage: CLEARING }}
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      stroke="currentColor"
      strokeOpacity={0.16}
      strokeWidth={1}
    >
      {rings.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}

/** Horizontal wires with dashes travelling along them at different speeds. */
export function Signal() {
  const wires = Array.from({ length: 14 }, (_, i) => ({
    y: 40 + i * 44,
    dash: `${8 + (i % 4) * 10} ${40 + (i % 5) * 26}`,
    speed: 14 + (i % 6) * 5,
    reverse: i % 3 === 0,
  }))
  return (
    <>
      <style>{`
        @keyframes site-signal { to { stroke-dashoffset: -400; } }
        @media (prefers-reduced-motion: no-preference) {
          .site-signal path { animation: site-signal linear infinite; }
        }
      `}</style>
      <svg
        className="site-signal absolute inset-0 h-full w-full text-muted-foreground"
        style={{ maskImage: CLEARING }}
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
      >
        {wires.map((w) => (
          <g key={w.y}>
            <line x1="0" x2="1440" y1={w.y} y2={w.y} strokeOpacity={0.08} />
            <path
              d={`M0 ${w.y} H1440`}
              strokeOpacity={0.35}
              strokeDasharray={w.dash}
              style={{
                animationDuration: `${w.speed}s`,
                animationDirection: w.reverse ? "reverse" : "normal",
              }}
            />
          </g>
        ))}
      </svg>
    </>
  )
}

/** A flat brand tint with paper grain: texture without a pattern. */
export function Grain() {
  return (
    <>
      <div className="absolute inset-0 bg-accent" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.18] mix-blend-multiply" aria-hidden>
        <filter id="site-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#site-grain)" />
      </svg>
    </>
  )
}

export const BAND = `
[data-hero-lab="band"] [data-slot="site-hero"] {
  background: #4b4983;
  color: #fbfbff;
  --foreground: #fbfbff;
  --muted-foreground: #d9d8f5;
  --primary-button: #fbfbff;
  --primary-button-foreground: #3f3d70;
  --border: #6a68a3;
  --card: #5b5995;
  margin-top: -72px;
  padding-top: 168px;
}
[data-hero-lab="band"] [data-slot="site-hero"] > div:last-child > div:last-child {
  --foreground: #44484e; --muted-foreground: #676b72; --border: #dfe2e8;
  --background: #f4f6f8; --card: #fdfdff; --muted: #edeff3;
  color: #44484e;
}
`

/** One hero over a given background, with the first band under it for scale. */
export function HeroLab({
  background,
  band = false,
}: {
  background: React.ReactNode
  band?: boolean
}) {
  return (
    <div data-hero-lab={band ? "band" : undefined}>
      {band && <style>{BAND}</style>}
      <Frame>
        <Hero
          title="Send an invoice in under a minute"
          description="ziku fills in the client, the VAT and the IBAN from last time. You check the total and press send."
          actions={
            <>
              <Button size="lg">Start free</Button>
              <Button size="lg" variant="outline">
                See pricing
              </Button>
            </>
          }
          background={background}
          media={<Screenshot />}
        />
      </Frame>
    </div>
  )
}

// ---- Hero backgrounds, round two ----------------------------------------------

/** Deterministic noise: stories render the same on every load. */
export function seeded(seed: number) {
  let x = seed
  return () => {
    x = (x * 1664525 + 1013904223) % 4294967296
    return x / 4294967296
  }
}

export function Scanlines() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(to bottom, ${INK} 0 1px, transparent 1px 5px)`,
        maskImage: CLEARING,
      }}
    />
  )
}

export function HexField() {
  const rand = seeded(7)
  const rows = Array.from({ length: 48 }, () =>
    Array.from({ length: 220 }, () => "0123456789abcdef"[Math.floor(rand() * 16)]).join(""),
  )
  return (
    <pre
      className="absolute inset-0 overflow-hidden font-mono text-[11px] leading-5 tracking-[0.2em] text-muted-foreground opacity-25 select-none"
      style={{ maskImage: CLEARING }}
    >
      {rows.join("\n")}
    </pre>
  )
}

export function Radar() {
  const rings = Array.from({ length: 14 }, (_, i) => 90 + i * 90)
  const ticks = Array.from({ length: 72 }, (_, i) => (i * 5 * Math.PI) / 180)
  return (
    <svg
      className="absolute inset-0 h-full w-full text-muted-foreground"
      style={{ maskImage: CLEARING }}
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      {rings.map((r) => (
        <circle key={r} cx={720} cy={0} r={r} strokeOpacity={r % 360 === 0 ? 0.28 : 0.13} />
      ))}
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={720 + Math.cos(t) * 520}
          y1={Math.sin(t) * 520}
          x2={720 + Math.cos(t) * (i % 3 === 0 ? 556 : 538)}
          y2={Math.sin(t) * (i % 3 === 0 ? 556 : 538)}
          strokeOpacity={0.3}
        />
      ))}
      <line x1={720} y1={0} x2={720} y2={800} strokeOpacity={0.12} />
      <line x1={0} y1={360} x2={1440} y2={360} strokeOpacity={0.08} />
    </svg>
  )
}

export function Hatching() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${INK} 0 1px, transparent 1px 11px)`,
        maskImage:
          "radial-gradient(circle at 0% 0%, black, transparent 38%), radial-gradient(circle at 100% 30%, black, transparent 34%)",
      }}
    />
  )
}

export function Network() {
  const rand = seeded(42)
  const nodes = Array.from({ length: 110 }, () => ({ x: rand() * 1440, y: rand() * 760 }))
  const edges: [number, number][] = []
  nodes.forEach((a, i) =>
    nodes.forEach((b, j) => {
      if (j > i && Math.hypot(a.x - b.x, a.y - b.y) < 165) edges.push([i, j])
    }),
  )
  return (
    <svg
      className="absolute inset-0 h-full w-full text-muted-foreground"
      style={{ maskImage: CLEARING }}
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      stroke="currentColor"
    >
      {edges.map(([i, j]) => (
        <line
          key={i + "-" + j}
          x1={nodes[i].x}
          y1={nodes[i].y}
          x2={nodes[j].x}
          y2={nodes[j].y}
          strokeOpacity={0.14}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 9 === 0 ? 3.5 : 2}
          className="fill-current"
          stroke="none"
          opacity={i % 9 === 0 ? 0.45 : 0.28}
        />
      ))}
    </svg>
  )
}
