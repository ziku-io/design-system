import * as React from "react"
import type { Icon } from "@phosphor-icons/react"
import { SignOutIcon, CaretUpDownIcon } from "@phosphor-icons/react"

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
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/lib/link"
import { useStrings } from "@/lib/strings"

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
  /** What to show under the name in the sidebar instead of the address: a job
   *  title, a team, a tenant. The dropdown still shows the email, because that
   *  is the one place a user goes to check which account they are signed in as.
   *  Without this an app that wants a role there has to lie in `email`. */
  role?: string
  avatarUrl?: string
}

export interface AppShellProps {
  /** Logo / product name shown at the top of the sidebar */
  brand: React.ReactNode
  nav: NavGroup[]
  /** Current pathname, used to highlight the active item */
  currentPath?: string
  user?: ShellUser
  /** Extra items in the user dropdown (Settings, Billing…) */
  userMenu?: React.ReactNode
  onSignOut?: () => void
  /** Right side of the top bar (search, notifications…) */
  headerActions?: React.ReactNode
  /** Left side of the top bar, after the trigger (breadcrumbs, page title) */
  headerContent?: React.ReactNode
  children: React.ReactNode
}

function initials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

/** Standard authenticated app layout: collapsible sidebar nav + top bar + content area. */
export function AppShell({
  brand,
  nav,
  currentPath,
  user,
  userMenu,
  onSignOut,
  headerActions,
  headerContent,
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
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/">{brand}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
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
        {user && (
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent">
                      <Avatar className="size-8 rounded-lg">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback className="rounded-lg">
                          {initials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{user.name}</span>
                        <span className="truncate text-xs text-muted-foreground">
                          {user.role ?? user.email}
                        </span>
                      </div>
                      <CaretUpDownIcon className="ml-auto size-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    align="start"
                    className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
                  >
                    <DropdownMenuLabel className="font-normal">
                      <div className="text-sm font-medium">{user.name}</div>
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
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        )}
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          {/* min-w-0: a flex child defaults to min-width:auto, so a long
           *  breadcrumb here pushes `headerActions` off the right edge. */}
          <div className="flex min-w-0 flex-1 items-center gap-2">{headerContent}</div>
          {headerActions && <div className="flex items-center gap-2">{headerActions}</div>}
        </header>
        {/* `tabIndex={-1}`: an anchor moves focus only to something focusable,
         *  so without it the skip link scrolls and leaves the focus where it
         *  was, which is back in the nav. */}
        <main
          id="content"
          tabIndex={-1}
          className="flex flex-1 flex-col gap-6 p-4 md:p-6 outline-none"
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
