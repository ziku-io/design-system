import { Icon } from '@phosphor-icons/react';
import * as React from "react";
export interface NavItem {
    title: string;
    href: string;
    icon?: Icon;
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
    children: React.ReactNode;
}
/** Standard authenticated app layout: collapsible sidebar nav + top bar + content area. */
export declare function AppShell({ brand, nav, currentPath, user, userMenu, onSignOut, headerActions, headerContent, children, }: AppShellProps): React.JSX.Element;
