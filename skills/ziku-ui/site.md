# Public pages, ready to copy

Two landing templates and the pages they link to. Every one is rendered in
Storybook under Site → 1. Pages (generic, AI, crypto and distributed-systems
landings, then pricing, terms, blog, post, contact). Copy the
closest one, swap the words, and delete any section the product has nothing
true to put in.

Site → 2. Colour directions shows the generic landing under ten colour
treatments, and Site → 3. Hero backgrounds twelve hero backgrounds. They are
examples to choose from: the source is `site.stories.kit.tsx` in the package
repo, and whichever a product adopts belongs in its own theme.

## The frame, once per app

Every public page shares one header and one footer. Build both once; the
templates below call this PublicLayout, the app's own component.

```tsx
const footer = (
  <SiteFooter
    columns={[
      {
        title: "Product",
        links: [
          { label: "Docs", href: "/docs" },
          { label: "Pricing", href: "/pricing" },
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
    ]}
    aside={<FooterNewsletter />} // a line on what arrives, then <NewsletterForm />
    owner="Ziku"
    note="Rua Exemplo 1, 0000-000 Lisboa"
  />
)

export function PublicLayout({ path, children }: { path: string; children: React.ReactNode }) {
  return (
    <SiteLayout
      brand="ziku"
      currentHref={path}
      nav={[
        { label: "Docs", href: "/docs" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ]}
      actions={
        <>
          <Button variant="ghost" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Start free</Link>
          </Button>
        </>
      }
      footer={footer}
    >
      {children}
    </SiteLayout>
  )
}
```

## Technical landing page (AI, crypto, distributed systems, security, infra)

For a reader who is an engineer. Each band makes one claim and shows the thing
that proves it.

1. `Hero`: what it is in one line, the primary verb, docs as the secondary, the
   install `command`, and a picture of the product working: a `Terminal`
   session (`play`), a `CodeBlock` for a library, or a `WindowFrame`.
2. `Specs`: three or four measured numbers.
3. "How it works": a `FeatureSplit` of three rows, each a capability beside its
   proof: a `Terminal` run, a chart or a table of nodes in a `WindowFrame`.
4. The first real call, in a `CodeBlock`, on a `tone="muted"` band.
5. `LogoStrip` of what it runs on: chains, clouds, model families.
6. A `NewsletterBand` for the reader not ready to try it.
7. Three questions in a `Faq`, the ones that block a trial.
8. `PageLinks` to Architecture, Changelog, Pricing and Docs, then `CtaBand`
   with the hero's verb.

```tsx
<PublicLayout path="/">
  <Hero
    layout="split"
    title="Ethereum and Solana RPC on your hardware"
    description="Archive nodes, a balancer and failover in one install. No rate limits, no third party reading your requests."
    actions={<><Button size="lg">Run a node</Button><Button size="lg" variant="outline">Read the docs</Button></>}
    command="docker run -p 8545:8545 example/rpc"
    media={<Terminal title="jay@rpc-1: ~" play lines={[
      { kind: "command", text: "rpc status" },
      { kind: "ok", text: "all nodes at tip" },
    ]} />}
    mediaFrame={false}
  />
  <Section className="pt-0 sm:pt-0">
    <Specs items={[{ value: "9", unit: "ms", label: "p50 eth_call, client in the same region" }, …]} />
  </Section>
  <Section title="Three processes, all on your machines">
    <FeatureSplit mediaFrame={false} rows={[
      {
        title: "Archive history since genesis",
        description: "…",
        media: (
          <WindowFrame title="rpc.internal/nodes" meta={<Badge variant="success">3 of 3 at tip</Badge>}>
            <Table>…</Table>
          </WindowFrame>
        ),
      },
      …
    ]} />
  </Section>
  <Section tone="muted" title="Same JSON-RPC, your URL"><CodeBlock title="Terminal" prompt code="…" /></Section>
  <Section className="pb-0 sm:pb-0"><LogoStrip label="Runs on" logos={…} /></Section>
  <NewsletterBand title="Release notes, once a month" description="…" onSubmit={subscribe} sent={sent} />
  <Section width="narrow" title="Questions"><Faq items={…} /></Section>
  <Section>
    <PageLinks links={[/* Architecture, Changelog, Pricing, Docs */]} />
    <CtaBand title="Your own endpoint, running today" actions={<Button size="lg">Run a node</Button>} />
  </Section>
</PublicLayout>
```

## Generic landing page

For a product a non-engineer buys, in this order:

1. `Hero` with a screenshot; secondary button "See pricing".
2. `LogoStrip` of customers.
3. `FeatureList` of three points on a muted band, each with `media`: a small
   fragment of the product (a draft, a file list, the team), never an icon grid.
4. Two `FeatureSplit` rows.
5. One `Testimonial` on a muted band.
6. `NewsletterBand`.
7. `Faq`, then `CtaBand` last.

The generic landing (Site → 1. Pages) is the whole thing.

Neither template carries a price. Pricing is always its own page
(`PricingTable` and `PlanComparison`), linked from the hero's secondary button
or `PageLinks`.

A `Testimonial` goes on either template when a real, named customer agreed to
it: quote, name, role, their `logo`, and a `metric` (the number the quote is
about, set large beside it). One per page.

## Newsletter

`NewsletterForm` lives in the footer: `SiteFooter`'s `aside`, with a line above
it saying what arrives and how often, so every page carries it. A landing
page can add a `NewsletterBand` before its questions (the closing `CtaBand`
stays last), and the blog
index under its posts. Validate with `newsletterSchema(strings.site)`.

## No eyebrows

No small uppercase line over a title, on any public block: `Hero`, `Section`
and `FeatureSplit` rows have no prop for one. Each band has a title and at
most one line under it.

## Colour

The blocks colour themselves: the hero picture sits on the brand lavender
stage, feature pictures rotate through teal, sage and sand, the closing ask is
sand, the newsletter teal, a testimonial's number lavender. For an app-owned
panel on a public page use `bg-stage-1` to `bg-stage-4` (or `stageAt(i)`),
never a new tint and never a gradient.

## Motion

Built in, nothing to add: the hero's lines arrive in a short stagger on load,
its copy lifts and fades as you scroll away while a `background` falls
behind, `FeatureSplit` pictures drift against their text, and section headers,
specs, link cards, features, plans, the FAQ, the testimonial and the closing
band fade up as they enter. All of it is CSS (`scroll-reveal`, `scroll-drift`,
`scroll-recede`, `scroll-sink` in the stylesheet, scroll-driven animations),
off under reduced motion and absent where the browser lacks
`animation-timeline`. Put `scroll-reveal` on app-owned blocks inside a
`Section` to match; `revealStagger(i)` staggers a row of them.

## Pictures

- **`Terminal`**: a real session. Commands as `command`, results as `output`,
  outcomes as `ok`/`warn`/`error` with the word in the text too, asides as
  `comment`. `play` on at most one terminal per screen, usually the hero's.
- **`WindowFrame`**: the library's own components with the product's data: a
  `ChartContainer` area chart, a `Table` with status `Badge`s, a `StatTile`.
  Title it with a host and path in mono; put one status badge in `meta`.
- **`CodeBlock`**: the hero picture for a library or SDK.
- **A screenshot** in `media` (framed by default) when the UI itself is the
  product.
- **The ASCII field** behind a centred AI hero (`background`). The
  AsciiBackground example (Site → 3. Hero backgrounds → ASCII field) wraps performative-ui's AsciiHero with one muted ink
  resolved from `--muted-foreground`, a clearing behind the text, and nothing
  under `prefers-reduced-motion`. Copy that component, add performative-ui to
  the app, and do not import its stylesheet: it sets its own `:root` tokens
  and font.

Pass `mediaFrame={false}` whenever the media is a `Terminal`, `WindowFrame` or
`CodeBlock`; they draw their own surface.

## The pages it links to

```tsx
// /pricing: the price, every plan compared, and the questions about the price
<Section align="center" title="Free to run. Paid when you want help." description="Every plan is the same software.">
  <PricingTable plans={plans} />
</Section>
<Section title="Compare plans">
  <PlanComparison plans={plans} groups={[
    { title: "Support", rows: [{ feature: "Response time", values: { "self-hosted": "Community", supported: "4 h, 24/7", managed: "1 h, 24/7" } }] },
  ]} />
</Section>
<Section width="narrow" title="Questions"><Faq items={faq} /></Section>

// /terms and /privacy: numbered sections and a date
<LegalPage title="Terms of service" updated={new Date("2026-11-01")} intro={…} sections={…} />

// /blog: postmortems, benchmarks, design notes
<Section width="narrow" title="Engineering"><PostList posts={posts} /></Section>
<ArticlePage title={…} published={…} readingMinutes={…} cover={<WindowFrame …>…</WindowFrame>}>{body}</ArticlePage>

// /contact: who answers and how fast, then a form that routes by topic
<Section title="Talk to an engineer" description="… Pick what it is about and it reaches the right person.">
  <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
    <ContactChannels channels={[{ icon: EnvelopeSimpleIcon, label: "Email", value: "hello@…", href: "mailto:…", note: "Answered within one working day." }, …]} />
    <ContactForm topics={[{ value: "sales", label: "Sizing or pricing", description: "…" }, …]} onSubmit={send} error={error} sent={sent} />
  </div>
</Section>
<Section title="Faster than writing"><PageLinks links={[/* docs, status, changelog */]} /></Section>
```

Validate the contact form on the server with `contactSchema(strings.site, topicValues)`: a topic the page never offered is rejected.
`LegalPage`'s `updated` is the date the text changed, not the build date.
