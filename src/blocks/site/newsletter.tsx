import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircleIcon, SpinnerIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useStrings, type UIStrings } from "@/lib/strings"
import { cn } from "@/lib/utils"
import { stageAt } from "@/lib/surfaces"
import { SITE_CONTAINER } from "./site-layout"

/** A factory, not a constant: the message is the app's, from `UIStringsProvider`. */
export const newsletterSchema = (t: UIStrings["site"]) =>
  z.object({
    email: z.email(t.invalidEmail),
  })

export interface NewsletterFormProps extends Omit<React.ComponentProps<"form">, "onSubmit"> {
  onSubmit: (values: NewsletterValues) => Promise<void> | void
  /** The server's message when the subscription failed. The address stays typed. */
  error?: string | null
  /** True once subscribed: the form is replaced by a confirmation line. */
  sent?: boolean
}

export type NewsletterValues = z.infer<ReturnType<typeof newsletterSchema>>

/**
 * One field and a button, for release notes or a changelog digest. The app
 * sends the address; double opt-in is the app's mailer's job, which is why the
 * confirmation says to check the inbox rather than "You're in".
 */
export function NewsletterForm({
  onSubmit,
  error,
  sent,
  className,
  ...props
}: NewsletterFormProps) {
  const t = useStrings().site
  const schema = React.useMemo(() => newsletterSchema(t), [t])
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  })
  const busy = form.formState.isSubmitting

  if (sent) {
    return (
      <p role="status" className={cn("flex items-center gap-2 text-sm", className)}>
        <CheckCircleIcon aria-hidden className="size-4 shrink-0 text-success-fg" />
        {t.subscribed}
      </p>
    )
  }

  return (
    <Form {...form}>
      <form
        data-slot="newsletter-form"
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className={cn("grid gap-2", className)}
        {...props}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="sr-only">{t.newsletterEmail}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder={t.newsletterPlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="outline" disabled={busy} className="shrink-0">
            {busy && <SpinnerIcon className="animate-spin" />}
            {t.subscribe}
          </Button>
        </div>
        {error && (
          <p role="alert" className="text-sm text-danger-fg">
            {error}
          </p>
        )}
      </form>
    </Form>
  )
}

export type NewsletterBandProps = Omit<React.ComponentProps<"section">, "title" | "onSubmit"> &
  Pick<NewsletterFormProps, "onSubmit" | "error" | "sent"> & {
    /** What arrives and how often: "Release notes, once a month". */
    title: React.ReactNode
    /** One line on what is in it, or what is not. */
    description?: React.ReactNode
  }

/**
 * The newsletter as a band of its own: on a landing page after the main
 * content and before the questions, for the reader not ready to sign up, so
 * the closing ask stays the last thing on the page; under the posts on a blog.
 * It keeps a `Section`'s vertical rhythm, so it can follow any band.
 */
export function NewsletterBand({
  title,
  description,
  onSubmit,
  error,
  sent,
  className,
  ...props
}: NewsletterBandProps) {
  const headingId = React.useId()
  return (
    <section
      data-slot="newsletter-band"
      aria-labelledby={headingId}
      className={cn("py-16 sm:py-24", className)}
      {...props}
    >
      <div className={SITE_CONTAINER}>
        <div
          className={cn(
            "scroll-reveal grid gap-6 rounded-2xl p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-12",
            stageAt(1),
          )}
        >
          <div className="grid gap-1.5">
            <h2 id={headingId} className="text-xl font-semibold tracking-tight text-balance">
              {title}
            </h2>
            {description && (
              <p className="text-sm text-pretty text-muted-foreground">{description}</p>
            )}
          </div>
          <NewsletterForm onSubmit={onSubmit} error={error} sent={sent} />
        </div>
      </div>
    </section>
  )
}
