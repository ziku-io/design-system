import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckCircleIcon, InfoIcon, WarningIcon, XCircleIcon } from "@phosphor-icons/react"
import { Alert, AlertDescription, AlertTitle } from "./alert"
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
}
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
/** One banner per status, each on its own tinted ground. */
export const Status: StoryObj<typeof Alert> = {
  render: () => (
    <div className="grid w-96 gap-3">
      <Alert variant="success">
        <CheckCircleIcon />
        <AlertTitle>Deployed</AlertTitle>
        <AlertDescription>Version 2.4.1 is live.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Maintenance is scheduled for Sunday.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <WarningIcon />
        <AlertTitle>Running low</AlertTitle>
        <AlertDescription>You have used 90% of your storage.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <XCircleIcon />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>Your session has expired. Sign in again.</AlertDescription>
      </Alert>
    </div>
  ),
}
