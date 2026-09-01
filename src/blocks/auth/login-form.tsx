import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { SpinnerIcon } from "@phosphor-icons/react"

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
export const loginSchema = (t: UIStrings["auth"]) =>
  z.object({
    email: z.email(t.invalidEmail),
    password: z.string().min(1, t.passwordRequired),
  })
export type LoginValues = z.infer<ReturnType<typeof loginSchema>>

export interface LoginFormProps {
  onSubmit: (values: LoginValues) => Promise<void> | void
  /** Server-side error to display above the form */
  error?: string | null
  title?: string
  description?: string
  /** `null` renders no "create one" link — for an app with no self-service sign-up. */
  registerHref?: string | null
  /** `null` renders no "forgot password" link — for an app with no mailer. */
  forgotPasswordHref?: string | null
  /** OAuth / SSO buttons rendered under a divider */
  providers?: React.ReactNode
}

export function LoginForm({
  onSubmit,
  error,
  title,
  description,
  registerHref = "/register",
  forgotPasswordHref = "/forgot-password",
  providers,
}: LoginFormProps) {
  const t = useStrings().auth
  const schema = React.useMemo(() => loginSchema(t), [t])
  const form = useForm<LoginValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  })
  const busy = form.formState.isSubmitting
  const errorId = React.useId()

  // A failed sign-in is announced by the Alert, but focus stays on the button
  // and the page looks like it did nothing. The password is the field to send
  // it to: an app that can tell which credential was wrong does not say so.
  React.useEffect(() => {
    if (error) form.setFocus("password")
  }, [error, form])

  // The two ways an app reports the same failure: it catches its own rejection
  // and passes `error`, or it lets the promise reject and tells us directly.
  const submit = async (values: LoginValues) => {
    try {
      await onSubmit(values)
    } catch (e) {
      form.setFocus("password")
      throw e
    }
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title ?? t.loginTitle}</CardTitle>
        <CardDescription>{description ?? t.loginDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="grid gap-5" noValidate>
            {error && (
              <Alert variant="danger" id={errorId}>
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>{t.password}</FormLabel>
                    {forgotPasswordHref && (
                      <Link
                        href={forgotPasswordHref}
                        className="text-sm text-link underline-offset-4 hover:underline"
                      >
                        {t.forgotPassword}
                      </Link>
                    )}
                  </div>
                  {/* A server error is about this field, so it points here.
                   *  While one is showing it replaces `FormControl`'s own
                   *  description id: the Alert is the message to read. */}
                  <FormControl
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                  >
                    <Input type="password" autoComplete="current-password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={busy}>
              {busy && <SpinnerIcon className="animate-spin" />}
              {t.signIn}
            </Button>
            {providers && (
              <>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-card px-2 text-muted-foreground">
                    {t.orContinueWith}
                  </span>
                </div>
                <div className="grid gap-2">{providers}</div>
              </>
            )}
            {registerHref && (
              <p className="text-center text-sm text-muted-foreground">
                {t.noAccount}{" "}
                <Link href={registerHref} className="text-link underline underline-offset-4">
                  {t.createOne}
                </Link>
              </p>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
