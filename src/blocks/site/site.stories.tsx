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

/** The site blocks one at a time. Whole pages are under Site. */
const meta: Meta = {
  title: "Blocks/Site",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}
export default meta

// ---- One block each -----------------------------------------------------------

export const TerminalSession: StoryObj = {
  name: "Terminal",
  render: () => (
    <Section width="narrow">
      <Terminal title="jay@gpu-01: ~" lines={deploySession} play />
    </Section>
  ),
}

export const Window: StoryObj = {
  name: "Window frame",
  render: () => (
    <Section width="narrow">
      <WindowFrame title="rpc.internal/latency" meta={<Badge variant="success">Healthy</Badge>}>
        <MetricChart data={series(24, 9, 3, 1)} label="p50 eth_call, ms" unit="ms" />
      </WindowFrame>
    </Section>
  ),
}

export const SpecsRow: StoryObj = {
  name: "Specs",
  render: () => (
    <Section>
      <Specs
        items={[
          { value: "38", unit: "ms", label: "p50 time to first token" },
          { value: "99.99", unit: "%", label: "Uptime over 90 days" },
        ]}
      />
    </Section>
  ),
}

export const Command: StoryObj = {
  name: "Command",
  render: () => (
    <Section width="narrow">
      <CodeBlock prompt code="curl -fsSL https://get.example.com/infer | sh" />
    </Section>
  ),
}

export const Quote: StoryObj = {
  name: "Testimonial",
  render: () => (
    <Section>
      <Testimonial
        quote="We lost a whole zone during a deploy in March. The queue did not notice and neither did our customers."
        name="Leo Birch"
        role="Platform lead, Ash Studio"
        logo={<span className="font-mono text-base">Ash Studio</span>}
        metric={{ value: "0", label: "messages lost across 14 zone failures" }}
      />
    </Section>
  ),
}

export const Newsletter: StoryObj = {
  name: "Newsletter",
  render: () => (
    <Section width="narrow">
      <NewsletterForm
        onSubmit={() => wait(600)}
        error="That did not go through. Try again in a minute."
      />
    </Section>
  ),
}

export const ContactFailed: StoryObj = {
  name: "Contact form, failed",
  render: () => (
    <Section width="narrow">
      <ContactForm
        onSubmit={() => {}}
        error="The message did not send. Write to hello@example.com instead."
      />
    </Section>
  ),
}

export const NoPosts: StoryObj = {
  name: "Post list, empty",
  render: () => (
    <Section width="narrow" title="Engineering">
      <PostList posts={[]} />
    </Section>
  ),
}
