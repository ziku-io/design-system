import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { Input } from "./input"
import { Button } from "./button"

const meta: Meta = { title: "Components/Form", tags: ["autodocs"] }
export default meta

const schema = z.object({ username: z.string().min(3, "At least 3 characters") })

function Demo() {
  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema), defaultValues: { username: "" } })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => undefined)} className="grid w-72 gap-4" noValidate>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl><Input placeholder="ziku" {...field} /></FormControl>
              <FormDescription>Public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
export const Default: StoryObj = { render: () => <Demo /> }
