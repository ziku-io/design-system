import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { CopyIcon, DownloadSimpleIcon, ShareNetworkIcon } from "@phosphor-icons/react"

import { Drawer, type DrawerProps } from "./drawer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

const meta: Meta<typeof Drawer> = {
  title: "Blocks/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A panel against an edge: title bar, a body that scrolls, a footer that does not. Use it for a whole panel (a record's details, a set of filters); a single question is a `Modal`, a few controls on one button are a `Popover`.",
      },
    },
  },
}
export default meta

/** Closed until the button is pressed, the way a page uses it. */
function Demo({ label, ...props }: Omit<DrawerProps, "open" | "onOpenChange"> & { label: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <Drawer open={open} onOpenChange={setOpen} {...props} />
    </>
  )
}

/** A record's details beside the list it came from. */
export const Details: StoryObj = {
  render: () => (
    <Demo
      label="Open dossier"
      title="Dossier 214"
      description="Sociedade Silva, Lda. · opened 4 Nov 2026"
      footer={
        <>
          <Button variant="outline">Close dossier</Button>
          <Button>Approve</Button>
        </>
      }
    >
      <dl className="grid grid-cols-[8rem_1fr] gap-x-4 gap-y-3 text-sm">
        <dt className="text-muted-foreground">Status</dt>
        <dd>
          <Badge variant="warning">Missing documents</Badge>
        </dd>
        <dt className="text-muted-foreground">Owner</dt>
        <dd>Ana Silva</dd>
        <dt className="text-muted-foreground">To refund</dt>
        <dd className="tabular-nums">€4,120.00</dd>
        <dt className="text-muted-foreground">Deadline</dt>
        <dd>30 Nov 2026</dd>
      </dl>
    </Demo>
  ),
}

/** A dozen fields: the body scrolls, the title and the footer stay put, and
 *  focus lands on the first field. */
export const Filters: StoryObj = {
  render: () => (
    <Demo
      label="Filters"
      title="Filters"
      footer={
        <>
          <Button variant="ghost" className="mr-auto">
            Reset
          </Button>
          <Button>Apply</Button>
        </>
      }
    >
      <div className="grid gap-5">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="grid gap-2">
            <Label htmlFor={`f${i}`}>Field {i + 1}</Label>
            <Input id={`f${i}`} />
          </div>
        ))}
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="mine">Only mine</Label>
          <Switch id="mine" />
        </div>
      </div>
    </Demo>
  ),
}

/** Wider, for a panel with a table or a timeline in it. */
export const Large: StoryObj = {
  render: () => (
    <Demo label="Open history" title="History" size="lg">
      <p className="text-sm text-muted-foreground">
        `size` goes sm · md · lg; on a phone it is the full width either way.
      </p>
    </Demo>
  ),
}

/** From the left, for navigation that is not the app's own sidebar. */
export const Left: StoryObj = {
  render: () => (
    <Demo label="Open sections" title="Sections" side="left" size="sm">
      <nav className="grid gap-1 text-sm">
        {["Overview", "Documents", "Payments", "Activity"].map((s) => (
          <a key={s} href="#" className="rounded-sm px-2 py-1.5 hover:bg-accent">
            {s}
          </a>
        ))}
      </nav>
    </Demo>
  ),
}

/** From the bottom: a short list of actions near the thumb on a phone. */
export const Bottom: StoryObj = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
  render: () => (
    <Demo label="Share" title="Share" side="bottom">
      <div className="grid gap-1">
        {[
          [CopyIcon, "Copy link"],
          [ShareNetworkIcon, "Send to a client"],
          [DownloadSimpleIcon, "Download PDF"],
        ].map(([Icon, label]) => {
          const I = Icon as typeof CopyIcon
          return (
            <Button key={label as string} variant="ghost" className="justify-start">
              <I /> {label as string}
            </Button>
          )
        })}
      </div>
    </Demo>
  ),
}

export const Translated: StoryObj = {
  render: () => (
    <UIStringsProvider strings={ptPT}>
      <Demo label="Abrir" title="Dossier 214" description="Aberto a 4 nov. 2026">
        <p className="text-sm">O botão de fechar diz “Fechar” a um leitor de ecrã.</p>
      </Demo>
    </UIStringsProvider>
  ),
}
