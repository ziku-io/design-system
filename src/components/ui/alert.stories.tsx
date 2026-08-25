import type { Meta, StoryObj } from "@storybook/react-vite"
import { InfoIcon, WarningIcon } from "@phosphor-icons/react"
import { Alert, AlertDescription, AlertTitle } from "./alert"
const meta: Meta<typeof Alert> = { title: "Components/Alert", component: Alert, tags: ["autodocs"] }
export default meta
export const Default: StoryObj<typeof Alert> = {
  render: () => (
    <Alert className="w-96">
      <InfoIcon />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
}
export const Destructive: StoryObj<typeof Alert> = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <WarningIcon />
      <AlertTitle>Something went wrong</AlertTitle>
      <AlertDescription>Your session has expired. Sign in again.</AlertDescription>
    </Alert>
  ),
}
