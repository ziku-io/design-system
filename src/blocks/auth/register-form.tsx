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
  FormDescription,
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
export const registerSchema = (t: UIStrings["auth"]) =>
  z
    .object({
      name: z.string().min(2, t.nameTooShort),
      email: z.email(t.invalidEmail),
      password: z.string().min(8, t.passwordTooShort),
      confirmPassword: z.string(),
    })
    .refine((v) => v.password === v.confirmPassword, {
      path: ["confirmPassword"],
      message: t.passwordsDoNotMatch,
    })
export type RegisterValues = z.infer<ReturnType<typeof registerSchema>>

export interface RegisterFormProps {
  onSubmit: (values: RegisterValues) => Promise<void> | void
  error?: string | null
  title?: string
  description?: string
  /** `null` renders no "sign in" link. */
  loginHref?: string | null
  providers?: React.ReactNode
}

export function RegisterForm({
  onSubmit,
  error,
  title,
  description,
  loginHref = "/login",
  providers,
}: RegisterFormProps) {
  const t = useStrings().auth
  const schema = React.useMemo(() => registerSchema(t), [t])
  const form = useForm<RegisterValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  })
  const busy = form.formState.isSubmitting

  const text = (
    name: keyof RegisterValues,
    label: string,
    input: React.ComponentProps<typeof Input>,
    hint?: string,
  ) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...input} {...field} />
          </FormControl>
          {hint && <FormDescription>{hint}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title ?? t.registerTitle}</CardTitle>
        <CardDescription>{description ?? t.registerDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5" noValidate>
            {error && (
              <Alert variant="danger">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {text("name", t.name, {
              autoComplete: "name",
              placeholder: t.namePlaceholder,
            })}
            {text("email", t.email, {
              type: "email",
              autoComplete: "email",
              placeholder: t.emailPlaceholder,
            })}
            {text(
              "password",
              t.password,
              { type: "password", autoComplete: "new-password" },
              t.passwordHint,
            )}
            {text("confirmPassword", t.confirmPassword, {
              type: "password",
              autoComplete: "new-password",
            })}
            <Button type="submit" className="w-full" disabled={busy}>
              {busy && <SpinnerIcon className="animate-spin" />}
              {t.createAccount}
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
            {loginHref && (
              <p className="text-center text-sm text-muted-foreground">
                {t.haveAccount}{" "}
                <Link href={loginHref} className="text-link underline underline-offset-4">
                  {t.signIn}
                </Link>
              </p>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
