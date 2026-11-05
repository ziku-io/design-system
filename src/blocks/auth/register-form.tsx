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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Link } from "@/lib/link"
import { AuthFooter, AuthLogo } from "./auth-layout"
import { useStrings, type UIStrings } from "@/lib/strings"

/** Digits, spaces, `+`, `-` and parentheses, holding 6 to 20 digits. Loose on
 *  purpose: the server owns real number validation, this catches typos. */
const PHONE_CHARS = /^[\d\s+\-()]+$/
const isPhone = (v: string) => {
  const digits = v.replace(/\D/g, "").length
  return PHONE_CHARS.test(v) && digits >= 6 && digits <= 20
}

const PHONE_MODES = ["optional", "required"] as const
export type PhoneMode = (typeof PHONE_MODES)[number]

export interface RegisterSchemaOptions {
  /** Absent: no phone field, and any `phone` in the input is dropped. */
  phone?: PhoneMode
  /** `true`: the consent box must be ticked. */
  consent?: boolean
}

/** What `onSubmit` receives. `phone` is trimmed and only present when filled
 *  in; `consent` is only present when the form asked for it. */
export interface RegisterValues {
  name: string
  email: string
  password: string
  confirmPassword: string
  phone?: string
  consent?: true
}

/** A factory, not a constant: the messages are the app's, from `UIStringsProvider`. */
export const registerSchema = (t: UIStrings["auth"], options: RegisterSchemaOptions = {}) =>
  z
    .object({
      name: z.string().min(2, t.nameTooShort),
      email: z.email(t.invalidEmail),
      password: z.string().min(8, t.passwordTooShort),
      confirmPassword: z.string(),
      phone: z
        .string()
        .trim()
        .optional()
        .superRefine((v, ctx) => {
          if (!options.phone) return
          if (!v) {
            if (options.phone === "required")
              ctx.addIssue({ code: "custom", message: t.phoneRequired })
            return
          }
          if (!isPhone(v)) ctx.addIssue({ code: "custom", message: t.invalidPhone })
        }),
      consent: z
        .boolean()
        .optional()
        .refine((v) => !options.consent || v === true, t.consentRequired),
    })
    .refine((v) => v.password === v.confirmPassword, {
      path: ["confirmPassword"],
      message: t.passwordsDoNotMatch,
    })
    .transform(({ phone, consent: _consent, ...rest }): RegisterValues => ({
      ...rest,
      ...(options.phone && phone ? { phone } : {}),
      ...(options.consent ? { consent: true as const } : {}),
    }))
/** What the fields hold while the user types, before the schema shapes it. */
export type RegisterInput = z.input<ReturnType<typeof registerSchema>>

export interface RegisterFormProps {
  onSubmit: (values: RegisterValues) => Promise<void> | void
  error?: string | null
  title?: string
  description?: string
  /** `null` renders no "sign in" link. */
  loginHref?: string | null
  providers?: React.ReactNode
  /** Adds a tel field after the name. Absent: no field. */
  phone?: PhoneMode
  /** The label of a checkbox that must be ticked to submit, e.g. a link to
   *  the privacy policy. Absent: no checkbox. */
  consent?: React.ReactNode
}

export function RegisterForm({
  onSubmit,
  error,
  title,
  description,
  loginHref = "/login",
  providers,
  phone,
  consent,
}: RegisterFormProps) {
  const t = useStrings().auth
  // A value read from config bypasses the type; "yes" must not quietly become
  // an optional field. Concatenated, not templated, so the no-literal scan
  // (which reads templates as UI copy) skips a developer's error.
  if (phone !== undefined && !PHONE_MODES.includes(phone)) {
    throw new Error(
      "RegisterForm: phone must be one of " +
        PHONE_MODES.join(", ") +
        ", got " +
        JSON.stringify(phone),
    )
  }
  const hasConsent = consent != null
  const schema = React.useMemo(
    () => registerSchema(t, { phone, consent: hasConsent }),
    [t, phone, hasConsent],
  )
  const form = useForm<RegisterInput, unknown, RegisterValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      consent: false,
    },
  })
  const busy = form.formState.isSubmitting

  const text = (
    name: "name" | "email" | "password" | "confirmPassword" | "phone",
    label: React.ReactNode,
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
            <Input {...input} {...field} value={field.value ?? ""} />
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
        <AuthLogo />
        <CardTitle className="text-xl">{title ?? t.registerTitle}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5" noValidate>
            {/* First: one click beats two fields, and it is what most
             *  people who have a choice pick. */}
            {providers && (
              <>
                <div className="grid gap-2">{providers}</div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-card px-2 text-muted-foreground">{t.or}</span>
                </div>
              </>
            )}
            {error && (
              <Alert variant="danger">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {text("name", t.name, {
              autoComplete: "name",
              placeholder: t.namePlaceholder,
            })}
            {phone &&
              text(
                "phone",
                phone === "optional" ? (
                  <>
                    {t.phone}{" "}
                    <span className="font-normal text-muted-foreground">{t.optional}</span>
                  </>
                ) : (
                  t.phone
                ),
                { type: "tel", autoComplete: "tel" },
              )}
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
            {hasConsent && (
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start gap-2">
                      <FormControl>
                        <Checkbox
                          className="mt-0.5"
                          checked={field.value === true}
                          onCheckedChange={(v) => field.onChange(v === true)}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          name={field.name}
                        />
                      </FormControl>
                      <FormLabel className="block text-sm leading-snug font-normal">
                        {consent}
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <Button type="submit" className="w-full" disabled={busy}>
              {busy && <SpinnerIcon className="animate-spin" />}
              {t.createAccount}
            </Button>
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
        <AuthFooter />
      </CardContent>
    </Card>
  )
}
