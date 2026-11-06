import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { AsciiHero } from "performative-ui"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  EnvelopeSimpleIcon,
  FileImageIcon,
  FilePdfIcon,
  KeyIcon,
  PulseIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react"

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
import { SURFACE } from "@/lib/surfaces"
import { cn } from "@/lib/utils"
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
import { ContactChannels, ContactForm } from "./contact-form"
import { NewsletterBand, NewsletterForm } from "./newsletter"
import {
  wait,
  nav,
  footerColumns,
  FooterNewsletter,
  LandingNewsletter,
  Frame,
  deeper,
  Ask,
  series,
  MetricChart,
  StatusTable,
  Screenshot,
  InvoiceDraft,
  Receipts,
  Team,
  genericFeatures,
  genericFaq,
  GenericLanding,
  AsciiBackground,
  deploySession,
  rpcSession,
  plans,
  faq,
  comparison,
  posts,
  DIRECTIONS,
  MORE_DIRECTIONS,
  Look,
  INK,
  CLEARING,
  DotGrid,
  Blueprint,
  Contours,
  Signal,
  Grain,
  BAND,
  HeroLab,
  seeded,
  Scanlines,
  HexField,
  Radar,
  Hatching,
  Network,
} from "./site.stories.kit"

/**
 * Whole public pages, built from the site blocks. Four landing pages first
 * (any product, then AI, crypto and distributed systems), then the pages they
 * link to. Copy the closest one; the words and numbers are made up.
 */
const meta: Meta = {
  title: "Site/1. Pages",
  parameters: { layout: "fullscreen" },
}
export default meta

export const LandingPage: StoryObj = {
  name: "01. Landing: generic",
  render: () => <GenericLanding />,
}

/** AI. The ASCII field sits behind the hero; a deploy session plays under it. */
export const LandingAI: StoryObj = {
  name: "02. Landing: AI",
  render: () => (
    <Frame cta="Deploy a model">
      <Hero
        title="Open models on your own GPUs"
        description="An OpenAI-compatible endpoint in front of your cluster. Batching, routing and quotas built in. Prompts never leave your network."
        actions={
          <>
            <Button size="lg">Deploy a model</Button>
            <Button size="lg" variant="outline">
              Read the docs
            </Button>
          </>
        }
        command="curl -fsSL https://get.example.com/infer | sh"
        background={<AsciiBackground />}
        media={
          <Terminal
            title="jay@gpu-01: ~"
            lines={deploySession}
            play
            className="mx-auto max-w-3xl"
          />
        }
        mediaFrame={false}
      />
      <Section className="pt-0 sm:pt-0">
        <Specs
          items={[
            { value: "38", unit: "ms", label: "p50 time to first token, 8B model on one H100" },
            { value: "2,400", unit: "tok/s", label: "Throughput per H100 at batch size 32" },
            { value: "41", unit: "s", label: "From deploy command to first request" },
            { value: "0", unit: "bytes", label: "Prompt data sent outside your network" },
          ]}
        />
      </Section>
      <Section title="Four parts, all on your hardware">
        <FeatureSplit
          mediaFrame={false}
          rows={[
            {
              title: "Batching you never tune",
              description:
                "Requests join a running batch at the next token, so a long prompt never holds up a short one.",
              points: [
                "Continuous batching across every card",
                "Prefix cache shared between requests",
                "Speculative decoding on by default",
              ],
              media: (
                <WindowFrame
                  title="infer.internal/metrics"
                  meta={<Badge variant="success">Healthy</Badge>}
                >
                  <MetricChart
                    data={series(24, 2300, 180)}
                    label="Tokens per second, per GPU"
                    unit="tok/s"
                  />
                </WindowFrame>
              ),
            },
            {
              title: "Keys and quotas per team",
              description:
                "Each team gets a key, a model list and a token budget. Over budget is a 429 with the reset time, never a surprise bill.",
              media: (
                <WindowFrame title="infer.internal/teams">
                  <StatusTable
                    head={["Team", "Model", "Tokens today"]}
                    rows={[
                      {
                        cells: ["search", "llama-3.1-8b", "41.2 M"],
                        status: "success",
                        label: "Within quota",
                      },
                      {
                        cells: ["support", "qwen-2.5-32b", "18.9 M"],
                        status: "success",
                        label: "Within quota",
                      },
                      {
                        cells: ["research", "llama-3.1-70b", "96.0 M"],
                        status: "warning",
                        label: "92% used",
                      },
                      {
                        cells: ["eval", "mistral-7b", "120.4 M"],
                        status: "danger",
                        label: "Over quota",
                      },
                    ]}
                  />
                </WindowFrame>
              ),
            },
            {
              title: "Weights pulled once, kept on your disks",
              description:
                "The first deploy fetches from the hub you name. Every node after that reads from the store.",
              media: (
                <Terminal
                  title="jay@gpu-01: ~"
                  lines={[
                    { kind: "command", text: "infer models ls" },
                    { kind: "output", text: "NAME             SIZE      NODES   SOURCE" },
                    { kind: "output", text: "llama-3.1-8b     16.1 GB   8/8     store" },
                    { kind: "output", text: "qwen-2.5-32b     65.5 GB   4/4     store" },
                    { kind: "output", text: "llama-3.1-70b    141 GB    8/8     store" },
                    { kind: "comment", text: "# no node has called the hub since 2026-10-02" },
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>
      <Section
        tone="muted"
        title="Your client already works"
        description="Point any OpenAI SDK at your endpoint. Nothing else changes."
      >
        <CodeBlock
          title="client.py"
          code={`from openai import OpenAI

client = OpenAI(base_url="https://infer.internal/v1", api_key="mock_key_0000")

reply = client.chat.completions.create(
    model="llama-3.1-8b",
    messages=[{"role": "user", "content": "Summarise this incident."}],
)`}
        />
      </Section>
      <Section className="pb-0 sm:pb-0">
        <LogoStrip
          label="Serves models from"
          logos={["Llama", "Qwen", "Mistral", "Gemma", "DeepSeek"].map((name) => ({
            name,
            logo: <span className="font-mono text-base">{name}</span>,
          }))}
        />
      </Section>
      <LandingNewsletter />
      <Section width="narrow" title="Questions">
        <Faq
          items={[
            {
              id: "gpus",
              question: "Which GPUs does it run on?",
              answer:
                "NVIDIA from A10 up, and AMD MI300. One node can mix cards; the scheduler places models by memory.",
            },
            {
              id: "air-gapped",
              question: "Does it work air-gapped?",
              answer: "Yes. Load weights into the store from a disk, and nothing calls out.",
            },
            {
              id: "fine-tunes",
              question: "Can I serve my own fine-tunes?",
              answer:
                "Any safetensors checkpoint, including LoRA adapters hot-swapped per request.",
            },
          ]}
        />
      </Section>
      <Ask
        title="Serve your first model in 10 minutes"
        description="One command on any machine with a GPU."
        action="Deploy a model"
      />
    </Frame>
  ),
}

/** Crypto. A split hero with a live session; the node table, latency and
 *  failover each get a row of their own. */
export const LandingCrypto: StoryObj = {
  name: "03. Landing: crypto",
  render: () => (
    <Frame cta="Run a node">
      <Hero
        layout="split"
        title="Ethereum and Solana RPC on your hardware"
        description="Archive nodes, a balancer and failover in one install. No rate limits, no third party reading your requests."
        actions={
          <>
            <Button size="lg">Run a node</Button>
            <Button size="lg" variant="outline">
              Read the docs
            </Button>
          </>
        }
        command="docker run -p 8545:8545 example/rpc"
        media={<Terminal title="jay@rpc-1: ~" lines={rpcSession} play />}
        mediaFrame={false}
      />
      <Section className="pt-0 sm:pt-0">
        <Specs
          items={[
            { value: "9", unit: "ms", label: "p50 eth_call, client in the same region" },
            { value: "99.99", unit: "%", label: "Uptime over 90 days with one standby" },
            { value: "0", label: "Requests logged by anyone but you" },
          ]}
        />
      </Section>
      <Section title="Three processes, all on your machines">
        <FeatureSplit
          mediaFrame={false}
          rows={[
            {
              title: "Archive history since genesis",
              description:
                "Every node keeps full state, so historical calls answer locally instead of falling back to a provider.",
              points: [
                "Snapshots restore a new node in 3 hours",
                "Pruned mode for a cheaper standby",
              ],
              media: (
                <WindowFrame
                  title="rpc.internal/nodes"
                  meta={<Badge variant="success">3 of 3 at tip</Badge>}
                >
                  <StatusTable
                    head={["Node", "Chain", "Height"]}
                    rows={[
                      {
                        cells: ["rpc-1", "ethereum", "21,904,117"],
                        status: "success",
                        label: "Primary",
                      },
                      {
                        cells: ["rpc-2", "ethereum", "21,904,117"],
                        status: "success",
                        label: "Standby",
                      },
                      {
                        cells: ["rpc-3", "solana", "312,440,882"],
                        status: "success",
                        label: "Primary",
                      },
                      {
                        cells: ["rpc-4", "solana", "312,440,861"],
                        status: "warning",
                        label: "21 slots behind",
                      },
                    ]}
                  />
                </WindowFrame>
              ),
            },
            {
              title: "Routes by method, skips a node that lags",
              description:
                "Heavy trace calls go to the node with spare CPU. A node that falls behind the tip stops getting reads until it catches up.",
              media: (
                <WindowFrame title="rpc.internal/latency">
                  <MetricChart data={series(24, 9, 3, 1)} label="p50 eth_call, ms" unit="ms" />
                </WindowFrame>
              ),
            },
            {
              title: "A standby that takes over in under a second",
              description:
                "Health checks every 250 ms. Clients keep the same URL; in-flight requests retry once on the standby.",
              media: (
                <Terminal
                  title="jay@rpc-1: ~"
                  lines={[
                    { kind: "command", text: "rpc chaos kill rpc-1" },
                    { kind: "warn", text: "rpc-1 unreachable (3 missed checks)" },
                    { kind: "output", text: "promoting rpc-2 to primary" },
                    { kind: "ok", text: "rpc-2 serving  (failover 640 ms, 0 failed requests)" },
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>
      <Section
        tone="muted"
        title="Same JSON-RPC, your URL"
        description="Swap the endpoint in your wallet, indexer or bot."
      >
        <CodeBlock
          title="Terminal"
          prompt
          code={`curl -s http://localhost:8545 -H 'content-type: application/json' \\
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'`}
        />
      </Section>
      <Section className="pb-0 sm:pb-0">
        <LogoStrip
          label="Runs on"
          logos={["Ethereum", "Solana", "Base", "Arbitrum", "Optimism"].map((name) => ({
            name,
            logo: <span className="font-mono text-base">{name}</span>,
          }))}
        />
      </Section>
      <LandingNewsletter />
      <Ask
        title="Your own endpoint, running today"
        description="One container, one config file."
        action="Run a node"
      />
    </Frame>
  ),
}

// ---- Distributed systems: a queue that survives a zone -----------------------

/** Distributed systems. Code is the hero picture: for a library the API is
 *  the product. A chaos run, the throughput and consumer lag follow. */
export const LandingQueue: StoryObj = {
  name: "04. Landing: distributed systems",
  render: () => (
    <Frame cta="Create a queue">
      <Hero
        layout="split"
        title="A queue that survives losing a zone"
        description="Raft-replicated across three zones. Exactly-once delivery to your consumers. Postgres is the only dependency."
        actions={
          <>
            <Button size="lg">Create a queue</Button>
            <Button size="lg" variant="outline">
              Read the docs
            </Button>
          </>
        }
        media={
          <CodeBlock
            title="worker.ts"
            code={`import { queue } from "@example/queue"

const jobs = queue("invoices", { zones: 3 })

await jobs.publish({ id: "inv_0001", amount: 1200 })

for await (const job of jobs.consume()) {
  await render(job.data)
  await job.ack() // exactly once, even across a failover
}`}
          />
        }
        mediaFrame={false}
      />
      <Section className="pt-0 sm:pt-0">
        <Specs
          items={[
            { value: "3", unit: "zones", label: "Replicas, one per availability zone" },
            { value: "<1", unit: "s", label: "Leader failover after losing a zone" },
            { value: "1.2", unit: "M msg/s", label: "Sustained publish rate, 3 × c7i.4xlarge" },
            { value: "0", label: "Duplicate deliveries in 12 months of Jepsen runs" },
          ]}
        />
      </Section>
      <Section title="Any two zones commit">
        <FeatureSplit
          mediaFrame={false}
          rows={[
            {
              title: "Lose a zone, keep every message",
              description:
                "A publish returns once two of three replicas have it on disk. The third catches up when it comes back.",
              points: [
                "Raft log on local NVMe, fsync before ack",
                "Leader elected in under a second",
                "Checked with Jepsen on every release",
              ],
              media: (
                <Terminal
                  title="jay@ops: ~"
                  play
                  lines={[
                    { kind: "command", text: "queue chaos partition --zone eu-west-1b" },
                    { kind: "warn", text: "zone eu-west-1b isolated (leader lost)" },
                    { kind: "output", text: "election term 41 → 42" },
                    { kind: "ok", text: "eu-west-1a leader after 640 ms" },
                    { kind: "output", text: "published during fault   48,112" },
                    { kind: "ok", text: "delivered exactly once   48,112   lost 0   duplicated 0" },
                  ]}
                />
              ),
            },
            {
              title: "1.2 million messages a second on three machines",
              description:
                "Batches commit together, so throughput rises with load instead of latency.",
              media: (
                <WindowFrame title="queue.internal/throughput">
                  <MetricChart
                    data={series(24, 1150, 90, 2)}
                    label="Published, thousand msg/s"
                    unit="k/s"
                  />
                </WindowFrame>
              ),
            },
            {
              title: "Lag you can see before it pages you",
              description:
                "Every consumer group reports lag and its oldest unacked message. Alert on age, not on queue depth.",
              media: (
                <WindowFrame title="queue.internal/consumers">
                  <StatusTable
                    head={["Group", "Lag", "Oldest"]}
                    rows={[
                      {
                        cells: ["invoices", "12", "0.4 s"],
                        status: "success",
                        label: "Keeping up",
                      },
                      { cells: ["emails", "380", "2.1 s"], status: "success", label: "Keeping up" },
                      {
                        cells: ["exports", "41,920", "6 min"],
                        status: "warning",
                        label: "Falling behind",
                      },
                    ]}
                  />
                </WindowFrame>
              ),
            },
          ]}
        />
      </Section>
      <Section>
        <Testimonial
          quote="We lost a whole zone during a deploy in March. The queue did not notice and neither did our customers."
          name="Leo Birch"
          role="Platform lead, Ash Studio"
          logo={<span className="font-mono text-base">Ash Studio</span>}
          metric={{ value: "0", label: "messages lost across 14 zone failures" }}
        />
      </Section>
      <LandingNewsletter />
      <Section width="narrow" title="Questions">
        <Faq
          items={[
            {
              id: "postgres",
              question: "Why Postgres?",
              answer:
                "It stores queue metadata and consumer offsets. Messages live in the Raft log, not in Postgres.",
            },
            {
              id: "two-zones",
              question: "Can I run it in two zones?",
              answer:
                "No. Two replicas cannot outvote each other, so a split would stop writes. Three is the minimum.",
            },
            {
              id: "ordering",
              question: "Is delivery ordered?",
              answer: "Per partition key, yes. Across keys, no.",
            },
          ]}
        />
      </Section>
      <Ask
        title="Create a queue in one command"
        description="Three zones, one binary, Postgres you already run."
        action="Create a queue"
      />
    </Frame>
  ),
}

export const PricingPage: StoryObj = {
  name: "05. Pricing",
  render: () => (
    <Frame currentHref="/pricing">
      <Section
        align="center"
        title="Free to run. Paid when you want help."
        description="Every plan is the same software."
      >
        <PricingTable plans={plans} />
      </Section>
      <Section title="Compare plans">
        <PlanComparison plans={plans} groups={comparison} />
      </Section>
      <Section width="narrow" title="Questions">
        <Faq items={faq} />
      </Section>
    </Frame>
  ),
}

export const TermsPage: StoryObj = {
  name: "06. Terms",
  render: () => (
    <Frame currentHref="/terms">
      <LegalPage
        title="Terms of service"
        updated={new Date("2026-11-01")}
        intro={
          <p>
            These terms cover the managed and supported plans. The self-hosted build is under its
            own licence.
          </p>
        }
        sections={[
          {
            id: "service",
            title: "The service",
            body: (
              <p>
                We operate the software in your cloud account. You keep ownership of the account and
                the data.
              </p>
            ),
          },
          {
            id: "payment",
            title: "Payment",
            body: (
              <ul>
                <li>Billed monthly per node, in advance. Prices exclude VAT.</li>
                <li>A node added mid-month is billed from the day it joins.</li>
              </ul>
            ),
          },
          {
            id: "availability",
            title: "Availability",
            body: (
              <p>
                We commit to 99.95% monthly uptime per cluster. A missed month credits 10% of its
                fee.
              </p>
            ),
          },
          {
            id: "termination",
            title: "Ending the service",
            body: (
              <p>
                Either side can end it with 30 days' notice. We hand over every credential within 24
                hours.
              </p>
            ),
          },
        ]}
      />
    </Frame>
  ),
}

export const BlogPage: StoryObj = {
  name: "07. Blog",
  render: () => (
    <Frame currentHref="/blog">
      <Section
        width="narrow"
        title="Engineering"
        description="Postmortems, benchmarks and design notes."
      >
        <PostList posts={posts} />
      </Section>
      <NewsletterBand
        title="Get the next postmortem by email"
        description="One email per post. Unsubscribe from any of them."
        onSubmit={() => wait(600)}
      />
    </Frame>
  ),
}

export const BlogPostPage: StoryObj = {
  name: "08. Blog post",
  render: () => (
    <Frame currentHref="/blog">
      <ArticlePage
        title="Postmortem: 14 minutes of stale reads"
        description="A clock jump on one replica let it serve reads after it lost the lease. What we changed."
        author={{ name: "Jay Oak", role: "Storage" }}
        published={new Date("2026-10-28")}
        readingMinutes={7}
        cover={
          <WindowFrame title="queue.internal/reads" meta={<Badge variant="danger">Incident</Badge>}>
            <MetricChart
              data={series(24, 2, 6, 4).map((p) => ({ ...p, v: Math.max(0, p.v) }))}
              label="Stale reads, per second"
              unit="/s"
            />
          </WindowFrame>
        }
      >
        <p>
          On 27 October between 14:02 and 14:16 UTC, one replica in zone b answered reads with data
          up to 9 seconds old. No write was lost. About 0.4% of reads in that window were stale.
        </p>
        <h2>What happened</h2>
        <p>
          The replica's clock stepped forward 11 seconds after an NTP correction. It believed its
          read lease was still valid when the leader had already moved.
        </p>
        <ul>
          <li>Leases now use a monotonic clock, never wall time.</li>
          <li>A replica refuses reads when its clock moves by more than 500 ms in one step.</li>
        </ul>
        <h2>Checking your install</h2>
        <p>
          Run <code>queue doctor --leases</code> on each node. Version 2.8.1 and later carry the
          fix.
        </p>
        <blockquote>No write was lost. Reads were stale for up to 9 seconds.</blockquote>
      </ArticlePage>
    </Frame>
  ),
}

/** Topics route the message; channels say how fast each answers; the
 *  people who reply are on the page; and the links under it answer the
 *  questions nobody needs to write in for. */
export const ContactPage: StoryObj = {
  name: "09. Contact",
  render: function ContactPage() {
    const [sent, setSent] = React.useState(false)
    return (
      <Frame currentHref="/contact">
        <Section
          title="Talk to an engineer"
          description="Sizing a cluster, a migration, or an incident you are in now. Pick what it is about and it reaches the right person."
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
            <div className="grid content-start gap-10">
              <ContactChannels
                channels={[
                  {
                    icon: EnvelopeSimpleIcon,
                    label: "Email",
                    value: "hello@example.com",
                    href: "mailto:hello@example.com",
                    note: "Answered within one working day.",
                  },
                  {
                    icon: ShieldCheckIcon,
                    label: "Security reports",
                    value: "security@example.com",
                    href: "mailto:security@example.com",
                    note: "Answered within 48 hours, every day.",
                  },
                  {
                    icon: KeyIcon,
                    label: "PGP fingerprint",
                    value: "0000 0000 0000 0000 0000  0000 0000 0000 0000 0000",
                    copy: true,
                    mono: true,
                    note: "Encrypt anything sensitive before you send it.",
                  },
                  {
                    icon: PulseIcon,
                    label: "Status",
                    value: "status.example.com",
                    href: "https://status.example.com",
                    note: "Check here first during an outage.",
                  },
                ]}
              />
              <div className="grid gap-3 border-t pt-8">
                <div className="flex -space-x-2">
                  {["Jay Oak", "Mia Fern", "Leo Birch"].map((name) => (
                    <UserAvatar key={name} name={name} className="size-9 ring-2 ring-background" />
                  ))}
                </div>
                <p className="text-sm text-pretty text-muted-foreground">
                  The people who build it answer. Jay, Mia and Leo reply from Lisbon, 09:00 to 18:00
                  WET, Monday to Friday.
                </p>
              </div>
            </div>
            <div className={cn(SURFACE, "p-6 shadow-overlay sm:p-8")}>
              <ContactForm
                sent={sent}
                onSubmit={() => wait(600).then(() => setSent(true))}
                topics={[
                  {
                    value: "sales",
                    label: "Sizing or pricing",
                    description: "Nodes, plans, a quote or a contract.",
                  },
                  {
                    value: "support",
                    label: "Help with my install",
                    description: "Errors, upgrades, configuration.",
                  },
                  {
                    value: "security",
                    label: "Security report",
                    description: "Or write to security@ with PGP.",
                  },
                  {
                    value: "other",
                    label: "Something else",
                    description: "Press, partnerships, a hello.",
                  },
                ]}
              />
            </div>
          </div>
        </Section>
        <Section className="pt-0 sm:pt-0" title="Faster than writing">
          <PageLinks
            links={[
              {
                href: "/docs",
                title: "Docs",
                description: "Install, configure and run it in production.",
              },
              {
                href: "https://status.example.com",
                title: "Status",
                description: "Live uptime and incident history.",
              },
              { href: "/blog", title: "Changelog", description: "What changed in each release." },
            ]}
          />
        </Section>
      </Frame>
    )
  },
}

/** The chrome in European Portuguese: skip link, menu, dates, reading time,
 *  the contact form. Headlines stay English: they are the app's. */
export const Translated: StoryObj = {
  name: "10. Translated (pt-PT)",
  render: () => (
    <UIStringsProvider strings={ptPT}>
      <Frame currentHref="/blog">
        <Section width="narrow">
          <PostList posts={posts.slice(0, 2)} />
        </Section>
        <Section width="narrow">
          <ContactForm onSubmit={() => wait(600)} />
        </Section>
      </Frame>
    </UIStringsProvider>
  ),
}
