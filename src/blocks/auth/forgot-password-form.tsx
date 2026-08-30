import * as React from "react"
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
import { useStrings, type UIStrings } from "@/lib/strings"

/** A factory, not a constant: the messages are the app's, from `UIStringsProvider`. */
export const forgotPasswordSchema = (t: UIStrings["auth"]) =>
  z.object({
    email: z.email(t.invalidEmail),
  })
export type ForgotPasswordValues = z.infer<ReturnType<typeof forgotPasswordSchema>>

export interface ForgotPasswordFormProps {
  onSubmit: (values: ForgotPasswordValues) => Promise<void> | void
  error?: string | null
  /** When true, shows the "check your inbox" state instead of the form */
  sent?: boolean
  /** `null` renders no way back — for a page that is not reached from a login. */
  loginHref?: string | null
}

export function ForgotPasswordForm({
  onSubmit,
  error,
  sent,
  loginHref = "/login",
}: ForgotPasswordFormProps) {
  const t = useStrings().auth
  const schema = React.useMemo(() => forgotPasswordSchema(t), [t])
  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  })
  const busy = form.formState.isSubmitting

  if (sent) {
    return (
      <Card>
        <CardHeader className="items-center text-center">
          <EnvelopeSimpleIcon className="size-8 text-primary" />
          <CardTitle className="text-xl">{t.sentTitle}</CardTitle>
          <CardDescription>
            {t.sentDescription(form.getValues("email") || t.thatEmail)}
          </CardDescription>
        </CardHeader>
        {loginHref && (
          <CardContent className="text-center text-sm">
            <Link href={loginHref} className="text-link underline underline-offset-4">
              {t.backToSignIn}
            </Link>
          </CardContent>
        )}
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t.resetTitle}</CardTitle>
        <CardDescription>{t.resetDescription}</CardDescription>
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
                  <FormLabel>{t.email}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder={t.emailPlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={busy}>
              {busy && <SpinnerIcon className="animate-spin" />}
              {t.sendResetLink}
            </Button>
            {loginHref && (
              <p className="text-center text-sm text-muted-foreground">
                <Link href={loginHref} className="text-link underline underline-offset-4">
                  {t.backToSignIn}
                </Link>
              </p>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
