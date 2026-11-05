import * as React from "react"
import type { Icon } from "@phosphor-icons/react"
import { SignOutIcon } from "@phosphor-icons/react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/lib/link"
import { cn } from "@/lib/utils"
import { useStrings } from "@/lib/strings"
import { Wordmark } from "@/blocks/brand/wordmark"

export interface NavItem {
  title: string
  href: string
  icon?: Icon
  /**
   * A count or a dot after the label: unread tickets, items awaiting triage.
   *
   * A number is drawn as a pill and read out after the item's name, so the nav
   * says "Requests, 3" rather than "Requests (3)" — both apps were building
   * that string into `title` themselves, which puts the count inside the link's
   * name and leaves nothing to style. Anything else is rendered as given.
   */
  badge?: React.ReactNode
}
export interface NavGroup {
  label?: string
  items: NavItem[]
}
export interface ShellUser {
  name: string
  email: string
  /** A job title, a team, a tenant: shown in the account menu between the
   *  name and the email. The email stays, because that menu is the one place a
   *  user goes to check which account they are signed in as. */
  role?: string
  avatarUrl?: string
}

export interface AppShellProps {
  /** Logo shown at the top of the sidebar. A string is set as a `Wordmark`;
   *  pass a node for a drawn logo. Hidden when the
   *  sidebar collapses to icons, leaving only the expand toggle. */
  brand: React.ReactNode
  /**
   * Anything above the nav, under the brand: a workspace switcher, a tenant
   * picker, a search box.
   */
  sidebarHeader?: React.ReactNode
  /**
   * Anything below the nav: a build credit, a version string, a support link.
   * Hidden with the labels when the sidebar collapses to icons.
   */
  sidebarFooter?: React.ReactNode
  nav: NavGroup[]
  /** Current pathname, used to highlight the active item */
  currentPath?: string
  user?: ShellUser
  /** Extra items in the user dropdown (Settings, Billing…) */
  userMenu?: React.ReactNode
  onSignOut?: () => void
  /** Right side of the top bar, before the avatar (search, notifications…) */
  headerActions?: React.ReactNode
  /** Left side of the top bar (breadcrumbs, page title) */
  headerContent?: React.ReactNode
  /**
   * Classes for the three regions a page has reasons to reach: hiding the
   * chrome for print, sticking the header, colouring the sidebar. Without
   * these a consumer's stylesheet has to select on this library's own
   * `data-slot` attributes, which makes any restructure here a silent break
   * over there.
   */
  classNames?: {
    /** The whole sidebar column, spacer included, so `print:hidden` works. */
    sidebar?: string
    header?: string
    main?: string
  }
  /**
   * Drops `main`'s gutter for a page that runs to the edges — a map, a board, a
   * document preview. The alternative was a negative margin in the page that
   * had to match this file's padding, and a version bump already broke one.
   */
  bleed?: boolean
  children: React.ReactNode
}

/** Standard authenticated app layout: collapsible sidebar nav + top bar + content area. */
export function AppShell({
  brand,
  sidebarHeader,
  sidebarFooter,
  nav,
  currentPath,
  user,
  userMenu,
  onSignOut,
  headerActions,
  headerContent,
  classNames,
  bleed = false,
  children,
}: AppShellProps) {
  const t = useStrings().shell
  return (
    <SidebarProvider>
      {/* Before the sidebar, because that is the whole point of it.
       *
       *  It used to sit inside `SidebarInset`, which is after every nav item in
       *  DOM order: a keyboard user reached it having already tabbed past the
       *  thing it was offering to skip. One app noticed and rendered a second
       *  skip link of its own in front of the shell; the other did not, and its
       *  users tab the nav on every page load. A link that has to be
       *  reimplemented to work is a bug here, not a preference there. */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring"
      >
        {t.skipToContent}
      </a>
      <Sidebar collapsible="icon" rootClassName={classNames?.sidebar}>
        <SidebarHeader>
          {/* The toggle lives here rather than in the top bar, so it sits on the
           *  thing it collapses. Collapsed to icons there is no room for a
           *  brand, so only the toggle is left, centred in the 3rem pane. */}
          <div className="flex h-12 items-center gap-1">
            {/* Plain content, not a link: the nav's first item is already the
             *  way home. */}
            <div className="flex h-12 min-w-0 flex-1 items-center gap-2 p-2 text-sm group-data-[collapsible=icon]:hidden">
              {typeof brand === "string" ? <Wordmark>{brand}</Wordmark> : brand}
            </div>
            <SidebarTrigger className="shrink-0 group-data-[collapsible=icon]:mx-auto" />
          </div>
          {/* Hidden with the labels when
           *  the sidebar collapses to icons: a switcher 3rem wide is not one. */}
          {sidebarHeader && (
            <div className="group-data-[collapsible=icon]:hidden">{sidebarHeader}</div>
          )}
        </SidebarHeader>
        <SidebarContent>
          {nav.map((group, i) => (
            <SidebarGroup key={group.label ?? i}>
              {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={currentPath === item.href}
                        tooltip={item.title}
                      >
                        <Link href={item.href}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                      {/* Outside the link, so the count is not part of the
                       *  link's name, and after it in DOM order, so it is read
                       *  after it. Hidden with the labels when the sidebar
                       *  collapses to icons, which is `SidebarMenuBadge`'s
                       *  own behaviour. */}
                      {item.badge !== undefined && item.badge !== null && (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        {sidebarFooter && (
          <SidebarFooter>
            {/* Hidden with the labels when the sidebar collapses to icons: a
             *  credit line 3rem wide is not one. */}
            <div className="group-data-[collapsible=icon]:hidden">{sidebarFooter}</div>
          </SidebarFooter>
        )}
      </Sidebar>
      {/* A div: the `<main>` is the content below the header, not the header too. */}
      <SidebarInset as="div">
        <header
          className={cn(
            "flex h-14 shrink-0 items-center gap-2 border-b border-[var(--surface-glass-border)] bg-[var(--surface-glass)] px-4 backdrop-blur-xl",
            classNames?.header,
          )}
        >
          {/* Below `md` the sidebar is an off-screen panel, so the toggle
           *  inside it cannot be reached until it is open. */}
          <SidebarTrigger className="-ml-1 md:hidden" />
          {/* min-w-0: a flex child defaults to min-width:auto, so a long
           *  breadcrumb here pushes `headerActions` off the right edge. */}
          <div className="flex min-w-0 flex-1 items-center gap-2">{headerContent}</div>
          {headerActions && <div className="flex items-center gap-2">{headerActions}</div>}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t.accountMenu}
                  className="shrink-0 rounded-full"
                >
                  <UserAvatar name={user.name} src={user.avatarUrl} className="size-8" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="text-sm font-medium">{user.name}</div>
                  {user.role && <div className="text-xs text-muted-foreground">{user.role}</div>}
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </DropdownMenuLabel>
                {userMenu && (
                  <>
                    <DropdownMenuSeparator />
                    {userMenu}
                  </>
                )}
                {onSignOut && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={onSignOut}>
                      <SignOutIcon />
                      {t.signOut}
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </header>
        {/* `tabIndex={-1}`: an anchor moves focus only to something focusable,
         *  so without it the skip link scrolls and leaves the focus where it
         *  was, which is back in the nav. */}
        <main
          id="content"
          tabIndex={-1}
          className={cn(
            "flex flex-1 flex-col outline-none",
            bleed ? "gap-0" : "gap-6 p-4 md:p-6",
            classNames?.main,
          )}
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
