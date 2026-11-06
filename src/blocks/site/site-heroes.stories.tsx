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

/**
 * One hero over twelve backgrounds in its `background` slot, ordered from
 * quiet patterns to drawn and generated ones, then texture and a full band.
 * All drawn in theme tokens and kept clear of the copy; examples to pick from.
 */
const meta: Meta = {
  title: "Site/3. Hero backgrounds",
  parameters: { layout: "fullscreen" },
}
export default meta

export const HeroDotGrid: StoryObj = {
  name: "01. Dot grid",
  render: () => <HeroLab background={<DotGrid />} />,
}

export const HeroBlueprint: StoryObj = {
  name: "02. Blueprint",
  render: () => <HeroLab background={<Blueprint />} />,
}

export const HeroScanlines: StoryObj = {
  name: "03. Scanlines",
  render: () => <HeroLab background={<Scanlines />} />,
}

export const HeroHatching: StoryObj = {
  name: "04. Hatching",
  render: () => <HeroLab background={<Hatching />} />,
}

export const HeroContours: StoryObj = {
  name: "05. Contours",
  render: () => <HeroLab background={<Contours />} />,
}

export const HeroRadar: StoryObj = {
  name: "06. Radar",
  render: () => <HeroLab background={<Radar />} />,
}

export const HeroHexField: StoryObj = {
  name: "07. Hex field",
  render: () => <HeroLab background={<HexField />} />,
}

export const HeroNetwork: StoryObj = {
  name: "08. Network",
  render: () => <HeroLab background={<Network />} />,
}

export const HeroSignal: StoryObj = {
  name: "09. Signal",
  render: () => <HeroLab background={<Signal />} />,
}

export const HeroAscii: StoryObj = {
  name: "10. ASCII field",
  render: () => <HeroLab background={<AsciiBackground />} />,
}

export const HeroGrain: StoryObj = {
  name: "11. Grain",
  render: () => <HeroLab background={<Grain />} />,
}

export const HeroBandGrid: StoryObj = {
  name: "12. Brand band + grid",
  render: () => <HeroLab band background={<Blueprint />} />,
}
