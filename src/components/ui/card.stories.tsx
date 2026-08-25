import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
const meta: Meta<typeof Card> = { title: "Components/Card", component: Card, tags: ["autodocs"] }
export default meta
export const Default: StoryObj<typeof Card> = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Project settings</CardTitle>
        <CardDescription>Manage how this project behaves.</CardDescription>
        <CardAction><Button variant="ghost" size="sm">Edit</Button></CardAction>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Body content goes here.</CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
}
