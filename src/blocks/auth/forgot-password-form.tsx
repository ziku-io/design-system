import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { SpinnerIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Link } from "@/lib/link"

export const forgotPasswordSchema = z.object({
  email: z.email("Enter a valid email"),
})
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export interface ForgotPasswordFormProps {
  onSubmit: (values: ForgotPasswordValues) => Promise<void> | void
  error?: string | null
  /** When true, shows the "check your inbox" state instead of the form */
  sent?: boolean
  loginHref?: string
}

export function ForgotPasswordForm({
  onSubmit,
  error,
  sent,
  loginHref = "/login",
}: ForgotPasswordFormProps) {
  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  })
  const busy = form.formState.isSubmitting

  if (sent) {
    return (
      <Card>
        <CardHeader className="items-center text-center">
          <EnvelopeSimpleIcon className="size-8 text-primary" />
          <CardTitle className="text-xl">Check your inbox</CardTitle>
          <CardDescription>
            If an account exists for {form.getValues("email") || "that email"}, we sent a reset
            link.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-sm">
          <Link href={loginHref} className="text-link underline underline-offset-4">
            Back to sign in
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Reset your password</CardTitle>
        <CardDescription>Enter your email and we'll send you a link</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5" noValidate>
            {error && (
              <Alert variant="danger">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={busy}>
              {busy && <SpinnerIcon className="animate-spin" />}
              Send reset link
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              <Link href={loginHref} className="text-link underline underline-offset-4">
                Back to sign in
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
