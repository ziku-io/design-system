import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster, toast } from "./sonner"
import { Button } from "./button"

const meta: Meta<typeof Toaster> = {
  title: "Components/Toast",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    // In its own frame on the docs page: inline, Storybook's story box traps
    // fixed elements, and "bottom right" became the box's corner, on top of
    // the buttons. In an app the Toaster sits at the root and this is the
    // viewport's corner.
    docs: { story: { inline: false, iframeHeight: 420 } },
  },
}
export default meta

/** The Alert's five types. Each toast lands in the bottom-right corner,
 *  stacking upwards, clear of the button that sent it. */
export const Types: StoryObj<typeof Toaster> = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast("Saved", { description: "Your changes are live." })}
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Invite sent", { description: "Ana will get an email." })}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("Export started", { description: "We will email you the file." })
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning("Storage at 90%", { description: "Archive old dossiers." })}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.danger("Upload failed", { description: "The server refused the file." })
          }
        >
          Danger
        </Button>
      </div>
    </>
  ),
}

/** An action on the toast, for an undo or a retry. */
export const WithAction: StoryObj<typeof Toaster> = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Dossier archived", {
            action: { label: "Undo", onClick: () => toast.success("Restored") },
          })
        }
      >
        Archive
      </Button>
    </>
  ),
}

/** A promise: loading, then success or danger, in one toast. */
export const Promise_: StoryObj<typeof Toaster> = {
  name: "Promise",
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
            loading: "Sending invoice…",
            success: "Invoice sent.",
            error: "That did not send.",
          })
        }
      >
        Send invoice
      </Button>
    </>
  ),
}
