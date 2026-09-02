import { Icon } from '@phosphor-icons/react';
import * as React from "react";
export interface NavItem {
    title: string;
    href: string;
    icon?: Icon;
    /**
     * A count or a dot after the label: unread tickets, items awaiting triage.
     *
     * A number is drawn as a pill and read out after the item's name, so the nav
     * says "Requests, 3" rather than "Requests (3)" — both apps were building
     * that string into `title` themselves, which puts the count inside the link's
     * name and leaves nothing to style. Anything else is rendered as given.
     */
    badge?: React.ReactNode;
}
export interface NavGroup {
    label?: string;
    items: NavItem[];
}
export interface ShellUser {
    name: string;
    email: string;
    /** What to show under the name in the sidebar instead of the address: a job
     *  title, a team, a tenant. The dropdown still shows the email, because that
     *  is the one place a user goes to check which account they are signed in as.
     *  Without this an app that wants a role there has to lie in `email`. */
    role?: string;
    avatarUrl?: string;
}
export interface AppShellProps {
    /** Logo / product name shown at the top of the sidebar */
    brand: React.ReactNode;
    /**
     * Where the brand links to. `null` renders it as plain content, for an app
     * whose home is behind the nav rather than at `/`.
     */
    brandHref?: string | null;
    /**
     * Anything above the nav and outside the brand's link: a workspace switcher,
     * a tenant picker, a search box. It could not go in `brand`, because a
     * dropdown inside a link is neither valid markup nor operable with a
     * keyboard, and an app that wanted one had to put it in the top bar instead.
     */
    sidebarHeader?: React.ReactNode;
    nav: NavGroup[];
    /** Current pathname, used to highlight the active item */
    currentPath?: string;
    user?: ShellUser;
    /** Extra items in the user dropdown (Settings, Billing…) */
    userMenu?: React.ReactNode;
    onSignOut?: () => void;
    /** Right side of the top bar (search, notifications…) */
    headerActions?: React.ReactNode;
    /** Left side of the top bar, after the trigger (breadcrumbs, page title) */
    headerContent?: React.ReactNode;
    /**
     * Classes for the three regions a page has reasons to reach: hiding the
     * chrome for print, sticking the header, colouring the sidebar. Without
     * these a consumer's stylesheet has to select on this library's own
     * `data-slot` attributes, which makes any restructure here a silent break
     * over there.
     */
    classNames?: {
        /** The whole sidebar column, spacer included, so `print:hidden` works. */
        sidebar?: string;
        header?: string;
        main?: string;
    };
    /**
     * Drops `main`'s gutter for a page that runs to the edges — a map, a board, a
     * document preview. The alternative was a negative margin in the page that
     * had to match this file's padding, and a version bump already broke one.
     */
    bleed?: boolean;
    children: React.ReactNode;
}
/** Standard authenticated app layout: collapsible sidebar nav + top bar + content area. */
export declare function AppShell({ brand, brandHref, sidebarHeader, nav, currentPath, user, userMenu, onSignOut, headerActions, headerContent, classNames, bleed, children, }: AppShellProps): React.JSX.Element;
