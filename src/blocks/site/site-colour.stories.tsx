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
 * The generic landing page under ten colour treatments, as examples to pick
 * from or borrow. Each is a scoped override in `site.stories.kit.tsx`; the one
 * a product adopts belongs in its theme as tokens, with contrast measured.
 */
const meta: Meta = {
  title: "Site/2. Colour directions",
  parameters: { layout: "fullscreen" },
}
export default meta

/** A: the current stages. Tinted panels behind each picture and band. */
export const DirectionAStages: StoryObj = {
  name: "A. Stages",
  render: () => (
    <Look look="stages">
      <GenericLanding />
    </Look>
  ),
}

/** B: the hero and the closing ask as full-width deep-lavender bands. */
export const DirectionBBrandBands: StoryObj = {
  name: "B. Brand bands",
  render: () => (
    <Look look="brand">
      <GenericLanding />
    </Look>
  ),
}

/** C: the whole page on a pale lavender ground, white cards on it. */
export const DirectionCTintedPage: StoryObj = {
  name: "C. Tinted page",
  render: () => (
    <Look look="tint">
      <GenericLanding />
    </Look>
  ),
}

/** D: a neutral page with colour in the details: numbers, rules, card edges. */
export const DirectionDAccents: StoryObj = {
  name: "D. Colour accents",
  render: () => (
    <Look look="accents">
      <GenericLanding />
    </Look>
  ),
}

/** E: a dark slate hero and closing ask on an otherwise light page. */
export const DirectionEInkHero: StoryObj = {
  name: "E. Ink hero",
  render: () => (
    <Look look="ink">
      <GenericLanding />
    </Look>
  ),
}

export const DirectionFDuotone: StoryObj = {
  name: "F. Duotone bands",
  render: () => (
    <Look look="duotone">
      <GenericLanding />
    </Look>
  ),
}

export const DirectionGWarm: StoryObj = {
  name: "G. Warm editorial",
  render: () => (
    <Look look="warm">
      <GenericLanding />
    </Look>
  ),
}

export const DirectionHBrandType: StoryObj = {
  name: "H. Brand type",
  render: () => (
    <Look look="type">
      <GenericLanding />
    </Look>
  ),
}

export const DirectionISolid: StoryObj = {
  name: "I. Solid buttons + brand footer",
  render: () => (
    <Look look="solid">
      <GenericLanding />
    </Look>
  ),
}

export const DirectionJPastel: StoryObj = {
  name: "J. Pastel cards",
  render: () => (
    <Look look="pastel">
      <GenericLanding />
    </Look>
  ),
}
