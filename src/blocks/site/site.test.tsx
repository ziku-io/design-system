import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"

import { defaultStrings } from "@/lib/strings"
import { SiteFooter, SiteLayout } from "./site-layout"
import {
  Faq,
  FeatureList,
  Hero,
  PageLinks,
  PricingTable,
  Specs,
  Testimonial,
  type Plan,
} from "./sections"
import { Terminal, WindowFrame, type TerminalLine } from "./visuals"
import { PlanComparison } from "./plan-comparison"
import { NewsletterForm } from "./newsletter"
import { CodeBlock } from "./code-block"
import { LegalPage } from "./long-form"
import { ContactChannels, ContactForm, contactSchema } from "./contact-form"

afterEach(cleanup)

// The guards render inside React, which logs the thrown error before the
// test sees it. Silence that one log, not the assertion.
function throwsOnRender(node: React.ReactNode) {
  const spy = vi.spyOn(console, "error").mockImplementation(() => {})
  try {
    expect(() => render(node)).toThrow()
  } finally {
    spy.mockRestore()
  }
}

const plan = (id: string, highlighted = false): Plan => ({
  id,
  name: id,
  price: "€0",
  features: [],
  action: null,
  highlighted,
})

describe("site guards", () => {
  it("SiteLayout rejects a sixth nav link", () => {
    const nav = Array.from({ length: 6 }, (_, i) => ({ label: `L${i}`, href: `/${i}` }))
    throwsOnRender(<SiteLayout brand="ziku" nav={nav} />)
  })

  it("Hero rejects split with no media", () => {
    throwsOnRender(<Hero title="T" layout="split" />)
  })

  it("PricingTable rejects two highlighted plans", () => {
    throwsOnRender(<PricingTable plans={[plan("a", true), plan("b", true)]} />)
  })

  it("Faq rejects a repeated id", () => {
    throwsOnRender(
      <Faq
        items={[
          { id: "a", question: "Q1", answer: "A" },
          { id: "a", question: "Q2", answer: "A" },
        ]}
      />,
    )
  })

  it("Faq rejects an id that is not an anchor", () => {
    throwsOnRender(<Faq items={[{ id: "Has Space", question: "Q", answer: "A" }]} />)
  })

  it("Specs rejects a single number", () => {
    throwsOnRender(<Specs items={[{ value: "1", label: "One" }]} />)
  })

  it("PageLinks rejects a fifth link", () => {
    const links = Array.from({ length: 5 }, (_, i) => ({
      href: "/" + i,
      title: "T",
      description: "D",
    }))
    throwsOnRender(<PageLinks links={links} />)
  })

  it("CodeBlock rejects empty code", () => {
    throwsOnRender(<CodeBlock code="  " />)
  })

  it("FeatureList rejects a single feature", () => {
    throwsOnRender(<FeatureList items={[{ title: "One", description: "d" }]} />)
  })

  it("WindowFrame rejects an empty title", () => {
    throwsOnRender(<WindowFrame title=" ">x</WindowFrame>)
  })

  it("Terminal rejects an empty session", () => {
    throwsOnRender(<Terminal title="sh" lines={[]} />)
  })

  it("Terminal rejects an unknown line kind", () => {
    const lines = [{ kind: "success", text: "done" }] as unknown as TerminalLine[]
    throwsOnRender(<Terminal title="sh" lines={lines} />)
  })

  it("PlanComparison rejects a row missing a plan's value", () => {
    throwsOnRender(
      <PlanComparison
        plans={[plan("free"), plan("team")]}
        groups={[{ title: "Limits", rows: [{ feature: "Seats", values: { free: "1" } }] }]}
      />,
    )
  })

  it("PlanComparison rejects a value for a plan that does not exist", () => {
    throwsOnRender(
      <PlanComparison
        plans={[plan("free"), plan("team")]}
        groups={[
          {
            title: "Limits",
            rows: [{ feature: "Seats", values: { free: "1", team: "5", tema: "5" } }],
          },
        ]}
      />,
    )
  })

  it("FeatureList rejects a mix of pictures and icons", () => {
    throwsOnRender(
      <FeatureList
        items={[
          { title: "One", description: "d", media: <div /> },
          { title: "Two", description: "d" },
        ]}
      />,
    )
  })

  it("Testimonial rejects an unsigned quote", () => {
    throwsOnRender(<Testimonial quote="Good" name=" " role="CTO" />)
  })

  it("Testimonial rejects a metric with no value", () => {
    throwsOnRender(
      <Testimonial
        quote="Good"
        name="Jay Oak"
        role="CTO"
        metric={{ value: "", label: "uptime" }}
      />,
    )
  })

  it("ContactForm rejects a single topic", () => {
    throwsOnRender(<ContactForm onSubmit={() => {}} topics={[{ value: "a", label: "A" }]} />)
  })

  it("ContactForm rejects a repeated topic value", () => {
    throwsOnRender(
      <ContactForm
        onSubmit={() => {}}
        topics={[
          { value: "a", label: "A" },
          { value: "a", label: "B" },
        ]}
      />,
    )
  })

  it("ContactChannels rejects an empty list", () => {
    throwsOnRender(<ContactChannels channels={[]} />)
  })

  it("SiteFooter rejects a footer with no columns", () => {
    throwsOnRender(<SiteFooter columns={[]} />)
  })

  it("SiteFooter rejects a fifth column", () => {
    const col = (i: number) => ({ title: "C" + i, links: [{ label: "L", href: "/" + i }] })
    throwsOnRender(<SiteFooter columns={[1, 2, 3, 4, 5].map(col)} />)
  })

  it("LegalPage rejects an invalid date", () => {
    throwsOnRender(
      <LegalPage
        title="Terms"
        updated={new Date("nope")}
        sections={[{ id: "a", title: "A", body: null }]}
      />,
    )
  })
})

describe("LegalPage", () => {
  it("links each contents entry to its section", () => {
    render(
      <LegalPage
        title="Terms"
        updated={new Date("2026-11-01")}
        sections={[
          { id: "payment", title: "Payment", body: null },
          { id: "data", title: "Your data", body: null },
        ]}
      />,
    )
    const toc = screen.getByRole("navigation", { name: defaultStrings.site.contents })
    const hrefs = [...toc.querySelectorAll("a")].map((a) => a.getAttribute("href"))
    expect(hrefs).toEqual(["#payment", "#data"])
    for (const id of ["payment", "data"]) expect(document.getElementById(id)).not.toBeNull()
  })
})

describe("ContactForm", () => {
  it("does not send an invalid message", async () => {
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} />)
    fireEvent.click(screen.getByRole("button", { name: defaultStrings.site.send }))
    expect(await screen.findByText(defaultStrings.site.nameRequired)).toBeTruthy()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("sends trimmed values", async () => {
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} />)
    const t = defaultStrings.site
    fireEvent.change(screen.getByLabelText(t.name), { target: { value: "  Jay Oak " } })
    fireEvent.change(screen.getByLabelText(t.email), { target: { value: "jay@example.com" } })
    fireEvent.change(screen.getByLabelText(t.message), {
      target: { value: "A question about plans." },
    })
    fireEvent.click(screen.getByRole("button", { name: t.send }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit.mock.calls[0][0]).toEqual({
      name: "Jay Oak",
      email: "jay@example.com",
      message: "A question about plans.",
    })
  })
})

describe("Terminal", () => {
  it("gives a screen reader the whole session, commands marked, while it plays", () => {
    const { container } = render(
      <Terminal
        title="sh"
        play
        lines={[
          { kind: "command", text: "rpc status" },
          { kind: "ok", text: "all nodes at tip" },
        ]}
      />,
    )
    // jsdom never reports the session as visible, so nothing has typed yet.
    expect(container.querySelector("pre.sr-only")?.textContent).toBe(
      "$ rpc status\nall nodes at tip",
    )
    expect(container.querySelector("pre[aria-hidden]")?.textContent).toBe("")
  })
})

describe("PlanComparison", () => {
  it("names a tick and a dash for a screen reader", () => {
    render(
      <PlanComparison
        plans={[plan("free"), plan("team")]}
        groups={[
          { title: "Security", rows: [{ feature: "SSO", values: { free: false, team: true } }] },
        ]}
      />,
    )
    const row = screen.getByRole("row", { name: /SSO/ })
    expect(row.textContent).toContain(defaultStrings.site.notIncluded)
    expect(row.textContent).toContain(defaultStrings.site.included)
  })
})

describe("NewsletterForm", () => {
  it("does not send a malformed address", async () => {
    const onSubmit = vi.fn()
    render(<NewsletterForm onSubmit={onSubmit} />)
    fireEvent.change(screen.getByLabelText(defaultStrings.site.newsletterEmail), {
      target: { value: "jay@" },
    })
    fireEvent.click(screen.getByRole("button", { name: defaultStrings.site.subscribe }))
    expect(await screen.findByText(defaultStrings.site.invalidEmail)).toBeTruthy()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("sends the address", async () => {
    const onSubmit = vi.fn()
    render(<NewsletterForm onSubmit={onSubmit} />)
    fireEvent.change(screen.getByLabelText(defaultStrings.site.newsletterEmail), {
      target: { value: "jay@example.com" },
    })
    fireEvent.click(screen.getByRole("button", { name: defaultStrings.site.subscribe }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit.mock.calls[0][0]).toEqual({ email: "jay@example.com" })
  })
})

describe("ContactForm topics", () => {
  const topics = [
    { value: "sales", label: "Sales" },
    { value: "support", label: "Support" },
  ]
  const t = defaultStrings.site

  function fill() {
    fireEvent.change(screen.getByLabelText(t.name), { target: { value: "Jay Oak" } })
    fireEvent.change(screen.getByLabelText(t.email), { target: { value: "jay@example.com" } })
    fireEvent.change(screen.getByLabelText(t.message), {
      target: { value: "A question about plans." },
    })
  }

  it("does not send until a topic is picked", async () => {
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} topics={topics} />)
    fill()
    fireEvent.click(screen.getByRole("button", { name: t.send }))
    expect(await screen.findByText(t.topicRequired)).toBeTruthy()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("sends the picked topic", async () => {
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} topics={topics} />)
    fill()
    fireEvent.click(screen.getByRole("radio", { name: "Support" }))
    fireEvent.click(screen.getByRole("button", { name: t.send }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit.mock.calls[0][0].topic).toBe("support")
  })

  it("rejects a topic the page never offered, on the server", () => {
    const result = contactSchema(t, ["sales", "support"]).safeParse({
      topic: "billing",
      name: "Jay Oak",
      email: "jay@example.com",
      message: "A question about plans.",
    })
    expect(result.success).toBe(false)
  })
})

describe("SiteFooter", () => {
  it("marks the page on screen, from the layout's currentHref", () => {
    render(
      <SiteLayout
        brand="ziku"
        currentHref="/terms"
        footer={
          <SiteFooter
            columns={[
              {
                title: "Legal",
                links: [
                  { label: "Terms", href: "/terms" },
                  { label: "Privacy", href: "/privacy" },
                ],
              },
            ]}
          />
        }
      >
        <p>Body</p>
      </SiteLayout>,
    )
    const footer = screen.getByRole("navigation", { name: defaultStrings.site.footerNav })
    const current = footer.querySelectorAll('[aria-current="page"]')
    expect([...current].map((a) => a.getAttribute("href"))).toEqual(["/terms"])
  })
})
