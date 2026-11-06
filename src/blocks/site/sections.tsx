import * as React from "react"
import type { Icon } from "@phosphor-icons/react"
import { ArrowRightIcon, CaretDownIcon, CheckIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { UserAvatar } from "@/components/ui/avatar"
import { Link } from "@/lib/link"
import { useStrings } from "@/lib/strings"
import { SURFACE, stageAt } from "@/lib/surfaces"
import { cn } from "@/lib/utils"
import { SITE_CONTAINER } from "./site-layout"
import { CodeBlock } from "./code-block"

/**
 * The public site's blocks. One rule holds them together: `Hero` is the page's
 * first section and owns the `h1`; everything else sits inside a `Section`,
 * which owns the width, the vertical rhythm and the `h2`. An app that follows
 * that cannot drift on spacing, because it never writes any.
 */

/** An anchor id: lowercase letters, digits and dashes. Anything else breaks
 *  `#fragment` links or collides with a CSS selector somebody writes later. */
// Dev errors below are concatenated, not templated: the no-literal scan reads a
// template's words as UI copy.
const ANCHOR = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/** Throws on a bad or repeated id. Two FAQ answers sharing an id open each
 *  other's link, and the second one is unreachable by URL. */
export function assertAnchors(block: string, ids: string[]): void {
  const seen = new Set<string>()
  for (const id of ids) {
    if (!ANCHOR.test(id)) {
      throw new Error(
        block + ": id " + JSON.stringify(id) + " must be lowercase letters, digits and dashes",
      )
    }
    if (seen.has(id)) throw new Error(block + ": id " + JSON.stringify(id) + " is used twice")
    seen.add(id)
  }
}

/** Hero headline and section title, the two sizes the public site adds to the
 *  product scale. Display sizes, still at 600: weight never goes up. */
const DISPLAY = "text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
const TITLE = "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
const LEAD = "text-base text-pretty text-muted-foreground sm:text-lg"

/**
 * The hero's entrance on load: each line fades up a beat after the one above.
 * `fill-mode-backwards` holds a line hidden through its delay instead of
 * flashing in first. Nothing moves for a reader who asked for reduced motion.
 */
const ENTER =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:ease-settle motion-safe:fill-mode-backwards"
const enterAfter = (step: number): React.CSSProperties => ({ animationDelay: step * 90 + "ms" })

/** A stagger for `scroll-reveal` items in a row: each starts a little later in
 *  its entry, so a grid arrives left to right rather than all at once. */
export const revealStagger = (index: number): React.CSSProperties => ({
  // Concatenated: the no-literal scan reads a template's words as UI copy.
  animationRange: "entry " + index * 8 + "% entry " + (70 + index * 8) + "%",
})

/** A product screenshot framed like a surface, or, with `frame={false}`,
 *  media that brings its own (a `WindowFrame`, a `Terminal`, a `CodeBlock`). */
function Media({
  frame = true,
  stage,
  children,
  className,
  style,
}: {
  frame?: boolean
  /** Which tinted panel the picture sits on: its position among the page's
   *  pictures, so neighbours never share a hue. */
  stage: number
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    // `min-w-0`: a grid item defaults to `min-width: auto`, so a code sample as
    // media stretched the hero 209px past a 320px screen.
    <div
      style={style}
      className={cn("min-w-0 rounded-2xl p-3 sm:p-6 lg:p-8", stageAt(stage), className)}
    >
      <div
        className={cn(
          "min-w-0 [&_img]:block [&_img]:h-auto [&_img]:w-full",
          frame && cn(SURFACE, "overflow-hidden shadow-overlay"),
        )}
      >
        {children}
      </div>
    </div>
  )
}

// No eyebrow (the small uppercase line over a title) on any public block: it
// was a third line of text on every band, saying in capitals what the title
// said in words. Removed on purpose; the title carries the band.
export interface SectionProps extends Omit<React.ComponentProps<"section">, "title"> {
  title?: React.ReactNode
  description?: React.ReactNode
  /** `center` for a section of cards or a closing band, `start` for prose. */
  align?: "start" | "center"
  /** `narrow` (768px) for text: FAQ, a contact form, a long paragraph. */
  width?: "default" | "narrow"
  /** `muted` tints the band, to set off every other section on a long page. */
  tone?: "default" | "muted"
}

export function Section({
  title,
  description,
  align = "start",
  width = "default",
  tone = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const headingId = React.useId()
  const hasHeader = title || description
  return (
    <section
      data-slot="site-section"
      aria-labelledby={title ? headingId : undefined}
      className={cn("py-16 sm:py-24", tone === "muted" && "border-y bg-muted/40", className)}
      {...props}
    >
      <div
        className={cn(SITE_CONTAINER, width === "narrow" && "max-w-3xl", "grid gap-10 sm:gap-12")}
      >
        {hasHeader && (
          <header
            className={cn(
              "scroll-reveal grid max-w-2xl gap-3",
              align === "center" && "mx-auto text-center",
            )}
          >
            {title && (
              <h2 id={headingId} className={TITLE}>
                {title}
              </h2>
            )}
            {description && <p className={LEAD}>{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

export interface HeroProps extends Omit<React.ComponentProps<"section">, "title"> {
  /** The page's `h1`. Say what the product does, in the reader's words. */
  title: React.ReactNode
  description?: React.ReactNode
  /** One primary button and at most one secondary. */
  actions?: React.ReactNode
  /** An install or quick-start command under the buttons, with a copy
   *  button: for a technical reader the fastest call to action there is. */
  command?: string
  /** A product screenshot. Under the text when `centered`, beside it when `split`. */
  media?: React.ReactNode
  /** `false` when the media draws its own surface (`WindowFrame`, `Terminal`,
   *  `CodeBlock`): no second border, no second shadow. */
  mediaFrame?: boolean
  layout?: "centered" | "split"
  /** A decorative layer behind the text: an ASCII field, a pattern. It is
   *  `aria-hidden`, cannot take a click, and fades out toward the bottom so
   *  the next section starts clean. The text keeps the page's background
   *  colour behind it only through contrast you check: keep the layer faint. */
  background?: React.ReactNode
}

export function Hero({
  title,
  description,
  actions,
  command,
  media,
  mediaFrame = true,
  layout = "centered",
  background,
  className,
  ...props
}: HeroProps) {
  if (layout === "split" && !media) throw new Error('Hero: layout="split" needs media')
  const split = layout === "split"
  return (
    <section
      data-slot="site-hero"
      className={cn("relative isolate pt-16 pb-16 sm:pt-24 sm:pb-24", className)}
      {...props}
    >
      {background && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
        >
          <div className="scroll-sink absolute inset-0">{background}</div>
        </div>
      )}
      <div
        className={cn(
          SITE_CONTAINER,
          "grid gap-12",
          split && "items-center lg:grid-cols-2 lg:gap-16",
        )}
      >
        <div
          className={cn(
            "scroll-recede grid gap-5",
            !split && "mx-auto max-w-3xl justify-items-center text-center",
          )}
        >
          <h1 className={cn(DISPLAY, ENTER)} style={enterAfter(0)}>
            {title}
          </h1>
          {description && (
            <p className={cn(LEAD, "max-w-xl", ENTER)} style={enterAfter(1)}>
              {description}
            </p>
          )}
          {actions && (
            <div className={cn("mt-2 flex flex-wrap gap-3", ENTER)} style={enterAfter(2)}>
              {actions}
            </div>
          )}
          {command && (
            <CodeBlock
              code={command}
              prompt
              className={cn("mt-1 w-full max-w-xl", ENTER)}
              style={enterAfter(3)}
            />
          )}
        </div>
        {media && (
          <Media frame={mediaFrame} stage={0} className={ENTER} style={enterAfter(split ? 1 : 4)}>
            {media}
          </Media>
        )}
      </div>
    </section>
  )
}

export interface FeatureRow {
  title: string
  description: React.ReactNode
  /** Short lines under the description, each with a check. */
  points?: string[]
  media: React.ReactNode
}

export interface FeatureSplitProps extends React.ComponentProps<"div"> {
  rows: FeatureRow[]
  /** `false` when every row's media draws its own surface. */
  mediaFrame?: boolean
}

/** Text beside a screenshot, sides alternating down the page. */
export function FeatureSplit({ rows, mediaFrame = true, className, ...props }: FeatureSplitProps) {
  if (rows.length === 0) throw new Error("FeatureSplit: needs at least one row")
  return (
    <div data-slot="feature-split" className={cn("grid gap-20 sm:gap-24", className)} {...props}>
      {rows.map((row, i) => (
        <div key={row.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={cn("scroll-reveal grid content-start gap-3", i % 2 === 1 && "lg:order-last")}
          >
            <h3 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
              {row.title}
            </h3>
            <p className="text-base text-pretty text-muted-foreground">{row.description}</p>
            {row.points && row.points.length > 0 && (
              <ul className="mt-2 grid gap-2">
                {row.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm">
                    <CheckIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-success-fg" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Media frame={mediaFrame} stage={i + 1} className="scroll-drift">
            {row.media}
          </Media>
        </div>
      ))}
    </div>
  )
}

export interface LogoStripProps extends React.ComponentProps<"div"> {
  /** The line above the logos. Name who they are ("Used by finance teams at"),
   *  never a vague "Trusted by". */
  label?: React.ReactNode
  /** `name` is the key and, when `logo` is an SVG with no text, what a screen
   *  reader hears. Draw logos in `currentColor` so they take the muted tone. */
  logos: { name: string; logo: React.ReactNode }[]
}

export function LogoStrip({ label, logos, className, ...props }: LogoStripProps) {
  if (logos.length === 0) throw new Error("LogoStrip: needs at least one logo")
  return (
    <div
      data-slot="logo-strip"
      className={cn("scroll-reveal grid gap-6 text-center", className)}
      {...props}
    >
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-muted-foreground [&_img]:h-7 [&_img]:w-auto [&_svg]:h-7 [&_svg]:w-auto">
        {logos.map(({ name, logo }) => (
          <li key={name} aria-label={name}>
            {logo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export interface Plan {
  id: string
  name: string
  /** Formatted by the app, currency and all: "€29", "Free", "Custom". */
  price: string
  /** After the price: "/ month", "per seat". */
  period?: string
  description?: React.ReactNode
  features: string[]
  /** The plan's button, usually a `Button asChild` around a `Link`. */
  action: React.ReactNode
  /** At most one plan. It gets the brand border and the `recommended` badge. */
  highlighted?: boolean
}

export interface PricingTableProps extends React.ComponentProps<"ul"> {
  plans: Plan[]
}

// Written out: Tailwind only ships classes it finds as literals.
const PLAN_COLUMNS = [
  "",
  "md:max-w-sm",
  "md:grid-cols-2",
  "md:grid-cols-3",
  "md:grid-cols-2 lg:grid-cols-4",
]

export function PricingTable({ plans, className, ...props }: PricingTableProps) {
  if (plans.length < 1 || plans.length > 4) {
    throw new Error("PricingTable: takes 1 to 4 plans, got " + plans.length)
  }
  assertAnchors(
    "PricingTable",
    plans.map((p) => p.id),
  )
  const highlighted = plans.filter((p) => p.highlighted).length
  if (highlighted > 1)
    throw new Error("PricingTable: at most one plan is highlighted, got " + highlighted)
  const t = useStrings().site
  return (
    <ul
      data-slot="pricing-table"
      className={cn("mx-auto grid w-full gap-6", PLAN_COLUMNS[plans.length], className)}
      {...props}
    >
      {plans.map((plan, i) => (
        <li
          key={plan.id}
          id={plan.id}
          style={revealStagger(i)}
          className={cn(
            SURFACE,
            "scroll-reveal flex flex-col gap-6 p-6",
            plan.highlighted && "border-primary ring-1 ring-primary",
          )}
        >
          <div className="grid gap-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-semibold">{plan.name}</h3>
              {plan.highlighted && <Badge>{t.recommended}</Badge>}
            </div>
            {plan.description && (
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            )}
          </div>
          <p className="flex items-baseline gap-1">
            <span className="text-3xl font-semibold tracking-tight tabular-nums">{plan.price}</span>
            {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
          </p>
          <ul className="grid flex-1 content-start gap-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm">
                <CheckIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-success-fg" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="grid [&>*]:w-full">{plan.action}</div>
        </li>
      ))}
    </ul>
  )
}

export interface FaqItem {
  /** The anchor, so a support reply can link straight to one answer. */
  id: string
  question: string
  answer: React.ReactNode
}

export interface FaqProps extends React.ComponentProps<"div"> {
  items: FaqItem[]
}

/** Questions that open in place. Native `<details>`: it works with no script,
 *  find-in-page opens the one that matches, and a `#id` link lands on it. */
export function Faq({ items, className, ...props }: FaqProps) {
  if (items.length === 0) throw new Error("Faq: needs at least one item")
  assertAnchors(
    "Faq",
    items.map((i) => i.id),
  )
  return (
    <div data-slot="faq" className={cn("scroll-reveal divide-y border-y", className)} {...props}>
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-base font-medium outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80 [&::-webkit-details-marker]:hidden">
            {item.question}
            <CaretDownIcon
              aria-hidden
              className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="pb-5 text-sm text-pretty text-muted-foreground [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}

export interface CtaBandProps extends Omit<React.ComponentProps<"div">, "title"> {
  title: React.ReactNode
  description?: React.ReactNode
  /** The same verb as the hero's primary button. Two different asks on one
   *  page make the reader pick, and most pick neither. */
  actions: React.ReactNode
}

/** The closing ask, at the bottom of a page, inside a `Section` with no title. */
export function CtaBand({ title, description, actions, className, ...props }: CtaBandProps) {
  return (
    <div
      data-slot="cta-band"
      // Sand, not the brand tint: the button inside is the brand tint, and on
      // its own hue it all but disappeared.
      className={cn(
        "scroll-reveal grid justify-items-center gap-4 rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16",
        stageAt(3),
        className,
      )}
      {...props}
    >
      <h2 className={TITLE}>{title}</h2>
      {description && <p className={cn(LEAD, "max-w-xl")}>{description}</p>}
      <div className="mt-2 flex flex-wrap justify-center gap-3">{actions}</div>
    </div>
  )
}

// Written out: Tailwind only ships classes it finds as literals.
const COLUMNS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
}

export interface Spec {
  /** The number, as the app formats it: "38", "99.99", "1.2". */
  value: string
  /** Kept apart from the value so it can be smaller: "ms", "%", "TB/day". */
  unit?: string
  /** What was measured, and how: "p50 time to first token, 8B model". */
  label: string
}

export interface SpecsProps extends React.ComponentProps<"dl"> {
  items: Spec[]
}

/**
 * Hard numbers in a row, in place of adjectives. A technical reader trusts
 * "38 ms p50" and skims "blazing fast". Two to four: one number is a claim,
 * five is a datasheet, and the datasheet belongs on its own page.
 */
export function Specs({ items, className, ...props }: SpecsProps) {
  if (items.length < 2 || items.length > 4) {
    throw new Error("Specs: takes 2 to 4 items, got " + items.length)
  }
  return (
    <dl
      data-slot="specs"
      className={cn("grid grid-cols-2 gap-y-8", COLUMNS[items.length], className)}
      {...props}
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          style={revealStagger(i)}
          className="scroll-reveal flex flex-col-reverse gap-2 border-l-2 border-primary/40 pr-4 pl-4 sm:pl-6"
        >
          <dt className="text-sm text-pretty text-muted-foreground">{item.label}</dt>
          <dd className="flex items-baseline gap-1">
            <span className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
              {item.value}
            </span>
            {item.unit && <span className="text-base text-muted-foreground">{item.unit}</span>}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export interface PageLink {
  href: string
  title: string
  /** One line: what the reader finds there. */
  description: string
}

export interface PageLinksProps extends React.ComponentProps<"ul"> {
  links: PageLink[]
}

/**
 * Where the rest of the story lives. The landing page says what it is and
 * proves it; pricing, the threat model, the architecture and the docs each get
 * a page, and this row sends the reader to the one they came for.
 */
export function PageLinks({ links, className, ...props }: PageLinksProps) {
  if (links.length < 2 || links.length > 4) {
    throw new Error("PageLinks: takes 2 to 4 links, got " + links.length)
  }
  return (
    <ul
      data-slot="page-links"
      className={cn("grid gap-4 sm:grid-cols-2", COLUMNS[links.length], className)}
      {...props}
    >
      {links.map((link, i) => (
        <li
          key={link.href}
          style={revealStagger(i)}
          className={cn(
            SURFACE,
            "group scroll-reveal relative grid gap-1.5 p-5 transition-colors hover:bg-accent",
          )}
        >
          <Link
            href={link.href}
            className="flex items-center justify-between gap-2 rounded-sm text-base font-semibold outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:ring-[1.5px] focus-visible:after:ring-ring/80"
          >
            {link.title}
            <ArrowRightIcon
              aria-hidden
              className="size-4 text-muted-foreground transition-transform duration-200 ease-settle group-hover:translate-x-1 group-hover:text-foreground"
            />
          </Link>
          <p className="text-sm text-pretty text-muted-foreground">{link.description}</p>
        </li>
      ))}
    </ul>
  )
}

/** A point with an icon, or with a picture: a small fragment of the product
 *  (a few rows, a badge, a field) built from the library's components. */
export type Feature = {
  title: string
  description: React.ReactNode
} & ({ icon?: Icon; media?: never } | { media: React.ReactNode; icon?: never })

export interface FeatureListProps extends React.ComponentProps<"ul"> {
  items: Feature[]
  columns?: 2 | 3
}

/**
 * What the product does, as a grid of short points. With icons it is a plain
 * grid, no cards. With `media` each point sits under its own picture, framed
 * as a surface at one height so the row lines up; three is the most a row
 * should hold.
 */
export function FeatureList({ items, columns = 3, className, ...props }: FeatureListProps) {
  if (items.length < 2) throw new Error("FeatureList: needs at least 2 items, got " + items.length)
  const withMedia = items.filter((item) => item.media !== undefined).length
  // Half pictures and half icons reads as a broken grid, not a design.
  if (withMedia !== 0 && withMedia !== items.length) {
    throw new Error(
      "FeatureList: give every item media or none, got " + withMedia + " of " + items.length,
    )
  }
  return (
    <ul
      data-slot="feature-list"
      className={cn(
        "grid gap-x-8 gap-y-10 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        withMedia > 0 && "gap-x-6",
        className,
      )}
      {...props}
    >
      {items.map(({ icon: ItemIcon, media, title, description }, i) => (
        <li
          key={title}
          style={revealStagger(i % 3)}
          className="scroll-reveal grid content-start gap-2"
        >
          {media !== undefined && (
            <div aria-hidden className={cn("mb-3 h-60 rounded-2xl p-4", stageAt(i + 1))}>
              <div className={cn(SURFACE, "h-full overflow-hidden shadow-overlay")}>{media}</div>
            </div>
          )}
          {/* The icon leads the title, unframed: no bordered tile around it. */}
          <h3 className="flex items-center gap-2 text-base font-semibold">
            {ItemIcon && <ItemIcon aria-hidden className="size-4 shrink-0 text-muted-foreground" />}
            {title}
          </h3>
          <p className="text-sm text-pretty text-muted-foreground">{description}</p>
        </li>
      ))}
    </ul>
  )
}

export interface TestimonialProps extends React.ComponentProps<"figure"> {
  quote: React.ReactNode
  /** A real person's name. Required: an unsigned quote reads as made up. */
  name: string
  /** Their role and company: "Platform lead, Fern & Birch". */
  role: string
  avatar?: string
  /** The company's logo, drawn in `currentColor`. */
  logo?: React.ReactNode
  /** The number the quote is about, set large beside it: the proof, where the
   *  quote is the voice. `{ value: "0", label: "messages lost in 14 zone failures" }`. */
  metric?: { value: string; label: string }
}

/** One customer, on a card: logo, quote, who said it, and the number behind it. */
export function Testimonial({
  quote,
  name,
  role,
  avatar,
  logo,
  metric,
  className,
  ...props
}: TestimonialProps) {
  if (name.trim() === "" || role.trim() === "") {
    throw new Error("Testimonial: name and role must be non-empty")
  }
  if (metric && (metric.value.trim() === "" || metric.label.trim() === "")) {
    throw new Error("Testimonial: metric needs a value and a label")
  }
  return (
    <figure
      data-slot="testimonial"
      className={cn(
        SURFACE,
        "scroll-reveal grid overflow-hidden md:grid-cols-[minmax(0,1fr)_auto]",
        className,
      )}
      {...props}
    >
      <div className="grid content-start gap-6 p-6 sm:p-10">
        {logo && (
          <div className="text-muted-foreground [&_img]:h-6 [&_img]:w-auto [&_svg]:h-6 [&_svg]:w-auto">
            {logo}
          </div>
        )}
        <blockquote className="text-xl font-medium tracking-tight text-balance sm:text-2xl">
          {quote}
        </blockquote>
        <figcaption className="flex items-center gap-3">
          <UserAvatar name={name} src={avatar} className="size-11" />
          <div className="grid">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-sm text-muted-foreground">{role}</span>
          </div>
        </figcaption>
      </div>
      {metric && (
        <div className={cn("grid content-center gap-2 p-6 sm:p-10 md:w-72", stageAt(0))}>
          <span className="text-5xl font-semibold tracking-tight tabular-nums">{metric.value}</span>
          <span className="text-sm text-pretty text-muted-foreground">{metric.label}</span>
        </div>
      )}
    </figure>
  )
}
