import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"
import { Button } from "./button"
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
}
export default meta
export const Default: StoryObj<typeof Card> = {
  render: () => <CardExample />,
}

export const Glass: StoryObj<typeof Card> = {
  render: () => (
    <div className="rounded-2xl bg-[radial-gradient(circle_at_top_left,_#c7d2fe,_transparent_45%),radial-gradient(circle_at_bottom_right,_#bae6fd,_transparent_50%),#e8edf7] p-8">
      <CardExample variant="glass" />
    </div>
  ),
}

function CardExample({ variant }: { variant?: "default" | "glass" }) {
  return (
    <Card className="w-96" variant={variant}>
      <CardHeader>
        <CardTitle>Project settings</CardTitle>
        <CardDescription>Manage how this project behaves.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Body content goes here.</CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}
