import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form"
import { Input } from "./input"
import { Button } from "./button"

const meta: Meta = { title: "Components/Form", tags: ["autodocs"] }
export default meta

const schema = z.object({
  username: z.string().min(3, "At least 3 characters"),
})

function Demo({ error }: { error?: string } = {}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { username: "" },
  })
  const { setError } = form
  useEffect(() => {
    if (error) setError("username", { message: error })
  }, [error, setError])
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => undefined)} className="grid w-72 gap-4" noValidate>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="ziku" {...field} />
              </FormControl>
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

/** After a failed submit. FormMessage is role="alert", so it is announced while
 *  focus is still on the submit button. */
export const WithError: StoryObj = { render: () => <Demo error="At least 3 characters" /> }
