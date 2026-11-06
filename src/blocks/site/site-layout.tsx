import * as React from "react"
import { ListIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Wordmark } from "@/blocks/brand/wordmark"
import { Drawer } from "@/blocks/drawer/drawer"
import { Link } from "@/lib/link"
import { useStrings } from "@/lib/strings"
import { cn } from "@/lib/utils"

export interface SiteLink {
  label: string
  href: string
}

export interface SiteFooterColumn {
  title: string
  links: SiteLink[]
}

export interface SiteLayoutProps extends React.ComponentProps<"div"> {
  /** A string is set as a `Wordmark`; pass a node for a drawn logo. */
  brand: React.ReactNode
  brandHref?: string
  /** The header's links. Five at most: past that the row wraps on a laptop
   *  and the page needs an information architecture, not a longer bar. */
  nav?: SiteLink[]
  /** The href of the page on screen, marked `aria-current` in both navs. */
  currentHref?: string
  /** Right of the nav: usually "Sign in" (ghost) and one primary verb. Also
   *  shown at the foot of the phone menu. */
  actions?: React.ReactNode
  /** The page's foot: a `SiteFooter`. One element, built once in the app and
   *  passed to every page, so no two pages end differently. */
  footer?: React.ReactNode
}

/** Which page is on screen, for the footer's links to mark `aria-current`
 *  without the app passing the same href twice. */
const CurrentHrefContext = React.createContext<string | undefined>(undefined)

/** The width every public block lines up on. `Section` uses it too. */
export const SITE_CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6"

const MAX_NAV = 5

function NavLinks({
  links,
  currentHref,
  className,
}: {
  links: SiteLink[]
  currentHref?: string
  className?: string
}) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            aria-current={link.href === currentHref ? "page" : undefined}
            className="flex h-9 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors outline-none hover:bg-accent/60 hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80 aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

/**
 * The frame of every page a visitor sees before signing in: a header with the
 * product's name, a few links and one call to action, the page, and a footer.
 * `AppShell`'s counterpart for the public site, so the marketing pages, the
 * legal pages and the blog of every Ziku product share one header height, one
 * width and one footer.
 *
 * The header sticks and blurs, which is the one place blur is allowed: content
 * scrolls under it. Below `md` the links move into a `Drawer`.
 */
export function SiteLayout({
  brand,
  brandHref = "/",
  nav = [],
  currentHref,
  actions,
  footer,
  className,
  children,
  ...props
}: SiteLayoutProps) {
  if (nav.length > MAX_NAV) {
    throw new Error("SiteLayout: nav takes at most " + MAX_NAV + " links, got " + nav.length)
  }
  const t = useStrings().site
  const [menuOpen, setMenuOpen] = React.useState(false)
  const mainId = React.useId()

  return (
    <div
      data-slot="site-layout"
      className={cn("flex min-h-svh flex-col bg-background text-foreground", className)}
      {...props}
    >
      <a
        href={`#${mainId}`}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-popover focus:px-3 focus:py-2 focus:text-sm focus:shadow-overlay"
      >
        {t.skipToContent}
      </a>
      {/* A floating bar: inset from the top, as wide as the page's content
       *  column, so its edges line up with the hero below it. Sticky rather
       *  than fixed, so it keeps its own space and the hero never starts
       *  underneath it. Controls sit 6px inside the bar, and the bar's 16px
       *  corner is the buttons' 10px plus that inset: the curves stay
       *  concentric. Blur is allowed here and only here: content scrolls under.
       *  The page colour at 90%, not the shell's 74% glass: at 74% a table
       *  header passing under it read through and collided with the links. */}
      <header className={cn(SITE_CONTAINER, "sticky top-3 z-40 mt-3")}>
        {/* From `lg` the bar overhangs the content column by 16px on each
         *  side: symmetric edges, with the wordmark starting exactly where the
         *  headline starts. Flush edges put the logo 16px inside the column and
         *  read as a near miss; an overhang only on the left read as lopsided.
         *  The button keeps its 6px inset so it nests in the bar's corner, and
         *  its label ends about where the content does. Below `lg` the 16px
         *  page gutter is all the room there is, so the bar stays inside it. */}
        <div className="flex h-12 items-center gap-2 rounded-xl border bg-background/90 py-1.5 pr-1.5 pl-4 shadow-overlay backdrop-blur-xl lg:-mx-4">
          <Link
            href={brandHref}
            className="mr-2 shrink-0 rounded-md outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80"
          >
            {typeof brand === "string" ? <Wordmark className="text-lg">{brand}</Wordmark> : brand}
          </Link>
          {nav.length > 0 && (
            <nav aria-label={t.mainNav} className="hidden md:block">
              <NavLinks
                links={nav}
                currentHref={currentHref}
                className="flex items-center gap-0.5"
              />
            </nav>
          )}
          <div className="ml-auto hidden items-center gap-1.5 md:flex">{actions}</div>
          {(nav.length > 0 || actions) && (
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto md:hidden"
              aria-label={t.menu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <ListIcon />
            </Button>
          )}
        </div>
      </header>
      <Drawer
        open={menuOpen}
        onOpenChange={setMenuOpen}
        title={t.menu}
        size="sm"
        footer={actions && <div className="flex w-full flex-col gap-2 [&>*]:w-full">{actions}</div>}
      >
        {/* A click on a link closes the menu: a client-side router keeps the
         *  page mounted, so the drawer would otherwise stay over the new page. */}
        <nav
          aria-label={t.mainNav}
          onClick={(e) => (e.target as HTMLElement).closest("a") && setMenuOpen(false)}
        >
          <NavLinks links={nav} currentHref={currentHref} className="-mx-3 grid gap-1" />
        </nav>
      </Drawer>
      <main id={mainId} tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <CurrentHrefContext.Provider value={currentHref}>{footer}</CurrentHrefContext.Provider>
    </div>
  )
}

export interface SiteFooterProps extends React.ComponentProps<"footer"> {
  /** Link columns, each with a heading. Four at most: past that it is a
   *  sitemap, which belongs on its own page. */
  columns: SiteFooterColumn[]
  /** Beside the columns: a `NewsletterForm` with a line above it saying what
   *  arrives and how often. Stacks under the columns below `lg`. */
  aside?: React.ReactNode
  /** Who the copyright line names. Left out, there is no copyright line. */
  owner?: string
  /** The other end of the bottom row: a registered address, a licence number. */
  note?: React.ReactNode
}

/**
 * The foot of every public page: link columns, the newsletter beside them,
 * and a bottom row with the copyright and the address. Build it once and pass
 * it to `SiteLayout`'s `footer` on every page; a footer that changes from page
 * to page reads as a different site.
 */
export function SiteFooter({ columns, aside, owner, note, className, ...props }: SiteFooterProps) {
  if (columns.length === 0) throw new Error("SiteFooter: needs at least one column")
  if (columns.length > 4) {
    throw new Error("SiteFooter: takes at most 4 columns, got " + columns.length)
  }
  const t = useStrings().site
  const currentHref = React.useContext(CurrentHrefContext)
  return (
    <footer data-slot="site-footer" className={cn("border-t", className)} {...props}>
      <div className={cn(SITE_CONTAINER, "grid gap-10 py-12")}>
        <div className={cn("grid gap-10", aside && "lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16")}>
          <nav
            aria-label={t.footerNav}
            className={cn(
              "grid grid-cols-2 gap-8",
              columns.length >= 3 && "sm:grid-cols-3",
              columns.length === 4 && "lg:grid-cols-4",
            )}
          >
            {columns.map((col) => (
              <div key={col.title} className="grid content-start gap-3">
                <h2 className="text-sm font-medium">{col.title}</h2>
                <ul className="grid gap-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={link.href === currentHref ? "page" : undefined}
                        className="rounded-sm text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80 aria-[current=page]:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {aside && <div className="min-w-0">{aside}</div>}
        </div>
        {(owner || note) && (
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t pt-6 text-xs text-muted-foreground">
            {owner && <p>{t.copyright(new Date().getFullYear(), owner)}</p>}
            {note && <div>{note}</div>}
          </div>
        )}
      </div>
    </footer>
  )
}
