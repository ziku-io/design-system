import * as React from "react";
export interface SiteLink {
    label: string;
    href: string;
}
export interface SiteFooterColumn {
    title: string;
    links: SiteLink[];
}
export interface SiteLayoutProps extends React.ComponentProps<"div"> {
    /** A string is set as a `Wordmark`; pass a node for a drawn logo. */
    brand: React.ReactNode;
    brandHref?: string;
    /** The header's links. Five at most: past that the row wraps on a laptop
     *  and the page needs an information architecture, not a longer bar. */
    nav?: SiteLink[];
    /** The href of the page on screen, marked `aria-current` in both navs. */
    currentHref?: string;
    /** Right of the nav: usually "Sign in" (ghost) and one primary verb. Also
     *  shown at the foot of the phone menu. */
    actions?: React.ReactNode;
    /** The page's foot: a `SiteFooter`. One element, built once in the app and
     *  passed to every page, so no two pages end differently. */
    footer?: React.ReactNode;
}
/** The width every public block lines up on. `Section` uses it too. */
export declare const SITE_CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6";
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
export declare function SiteLayout({ brand, brandHref, nav, currentHref, actions, footer, className, children, ...props }: SiteLayoutProps): React.JSX.Element;
export interface SiteFooterProps extends React.ComponentProps<"footer"> {
    /** Link columns, each with a heading. Four at most: past that it is a
     *  sitemap, which belongs on its own page. */
    columns: SiteFooterColumn[];
    /** Beside the columns: a `NewsletterForm` with a line above it saying what
     *  arrives and how often. Stacks under the columns below `lg`. */
    aside?: React.ReactNode;
    /** Who the copyright line names. Left out, there is no copyright line. */
    owner?: string;
    /** The other end of the bottom row: a registered address, a licence number. */
    note?: React.ReactNode;
}
/**
 * The foot of every public page: link columns, the newsletter beside them,
 * and a bottom row with the copyright and the address. Build it once and pass
 * it to `SiteLayout`'s `footer` on every page; a footer that changes from page
 * to page reads as a different site.
 */
export declare function SiteFooter({ columns, aside, owner, note, className, ...props }: SiteFooterProps): React.JSX.Element;
