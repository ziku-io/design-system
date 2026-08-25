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

export const registerSchema = z
  .object({
    name: z.string().min(2, "Enter your name"),
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "At least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  })
export type RegisterValues = z.infer<typeof registerSchema>

export interface RegisterFormProps {
  onSubmit: (values: RegisterValues) => Promise<void> | void
  error?: string | null
  title?: string
  description?: string
  loginHref?: string
  providers?: React.ReactNode
}

export function RegisterForm({
  onSubmit,
  error,
  title = "Create an account",
  description = "Get started in under a minute",
  loginHref = "/login",
  providers,
}: RegisterFormProps) {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
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
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5" noValidate>
            {error && (
              <Alert variant="danger">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {text("name", "Name", {
              autoComplete: "name",
              placeholder: "Ada Lovelace",
            })}
            {text("email", "Email", {
              type: "email",
              autoComplete: "email",
              placeholder: "you@company.com",
            })}
            {text(
              "password",
              "Password",
              { type: "password", autoComplete: "new-password" },
              "At least 8 characters",
            )}
            {text("confirmPassword", "Confirm password", {
              type: "password",
              autoComplete: "new-password",
            })}
            <Button type="submit" className="w-full" disabled={busy}>
              {busy && <SpinnerIcon className="animate-spin" />}
              Create account
            </Button>
            {providers && (
              <>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-card px-2 text-muted-foreground">
                    or continue with
                  </span>
                </div>
                <div className="grid gap-2">{providers}</div>
              </>
            )}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href={loginHref} className="text-link underline underline-offset-4">
                Sign in
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
