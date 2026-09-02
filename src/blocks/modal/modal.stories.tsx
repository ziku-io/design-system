import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { Modal } from "./modal"
import { ConfirmProvider, useConfirm } from "./confirm"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Modal> = {
  title: "Blocks/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}
export default meta

function Demo({
  label,
  ...props
}: { label: string } & Omit<React.ComponentProps<typeof Modal>, "open" | "onOpenChange">) {
  // Open from the start so the story is the modal, not the button that opens it.
  const [open, setOpen] = useState(true)
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <Modal {...props} open={open} onOpenChange={setOpen} />
    </>
  )
}

const Field = ({ label }: { label: string }) => (
  <div className="grid gap-2">
    <Label>{label}</Label>
    <Input />
  </div>
)

const Buttons = (
  <>
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </>
)

export const Default: StoryObj = {
  render: () => (
    <Demo label="Edit client" title="Edit client" footer={Buttons}>
      <div className="grid gap-4">
        <Field label="Name" />
        <Field label="Email" />
      </div>
    </Demo>
  ),
}

export const WithDescription: StoryObj = {
  render: () => (
    <Demo
      label="Invite"
      title="Invite a teammate"
      description="They get an email with a link that expires in seven days."
      footer={
        <>
          <Button variant="outline">Cancel</Button>
          <Button>Send invite</Button>
        </>
      }
    >
      <Field label="Email" />
    </Demo>
  ),
}

/** The reason the block exists: the body scrolls, the header and footer do not. */
export const LongBody: StoryObj = {
  render: () => (
    <Demo label="Long form" title="Twenty fields" footer={Buttons}>
      <div className="grid gap-4">
        {Array.from({ length: 20 }, (_, i) => (
          <Field key={i} label={`Field ${i + 1}`} />
        ))}
      </div>
    </Demo>
  ),
}

/** A destructive confirmation: no body, just the question and two buttons. */
export const Confirm: StoryObj = {
  render: () => (
    <Demo
      label="Delete"
      size="sm"
      title="Delete this client?"
      description="Their files and time entries go with them. This cannot be undone."
      footer={
        <>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </>
      }
    />
  ),
}

export const Wide: StoryObj = {
  render: () => (
    <Demo label="Wide" size="xl" title="Reconcile invoices" footer={Buttons}>
      <p className="text-sm text-muted-foreground">
        `size` goes sm · md · lg · xl. Anything else is a width in `className`.
      </p>
    </Demo>
  ),
}

/** The question `Modal` deliberately left out. Both buttons resolve a promise
 *  the caller is awaiting, so the page reads `if (await confirm(…))`. */
export const Awaitable: StoryObj = {
  render: function ConfirmDemo() {
    const [said, setSaid] = useState<string>("")
    function Ask() {
      const { confirm, prompt } = useConfirm()
      return (
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="danger"
            onClick={async () => {
              const yes = await confirm({
                title: "Delete this client?",
                description: "Their fee notes and documents go with them.",
                confirmLabel: "Delete",
                danger: true,
              })
              setSaid(yes ? "deleted" : "kept")
            }}
          >
            Delete client
          </Button>
          <Button
            variant="outline"
            onClick={async () => {
              const name = await prompt({
                title: "Name this view",
                label: "View name",
                defaultValue: "Overdue",
              })
              setSaid(name === null ? "cancelled" : name)
            }}
          >
            Rename view
          </Button>
          <span className="text-sm text-muted-foreground">{said}</span>
        </div>
      )
    }
    return (
      <ConfirmProvider>
        <Ask />
      </ConfirmProvider>
    )
  },
}
