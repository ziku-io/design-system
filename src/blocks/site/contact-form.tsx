import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import type { Icon } from "@phosphor-icons/react"
import { CheckCircleIcon, SpinnerIcon } from "@phosphor-icons/react"

import { Alert, AlertDescription } from "@/components/ui/alert"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CopyButton } from "@/blocks/copy/copy-button"
import { Link } from "@/lib/link"
import { useStrings, type UIStrings } from "@/lib/strings"
import { cn } from "@/lib/utils"

/**
 * A factory, not a constant: the messages are the app's, from
 * `UIStringsProvider`. Pass the same topic values the form offers, and the
 * server rejects a topic the page never showed.
 *
 * One shape either way (`topic` optional), so the values' type does not
 * change with a prop; the refinement makes it required, and limited to the
 * list, only when there is a list.
 */
export const contactSchema = (t: UIStrings["site"], topics?: readonly string[]) =>
  z
    .object({
      topic: z.string().optional(),
      name: z.string().trim().min(1, t.nameRequired),
      email: z.email(t.invalidEmail),
      message: z.string().trim().min(10, t.messageTooShort),
    })
    .superRefine((values, ctx) => {
      if (!topics || topics.length === 0) return
      if (!values.topic || !topics.includes(values.topic)) {
        ctx.addIssue({ code: "custom", path: ["topic"], message: t.topicRequired })
      }
    })

export interface ContactTopic {
  value: string
  label: string
  /** One line on when to pick it: "Sizing a cluster, a quote, a contract". */
  description?: string
}

export interface ContactFormProps extends Omit<React.ComponentProps<"form">, "onSubmit"> {
  onSubmit: (values: ContactValues) => Promise<void> | void
  /** The server's message when sending failed. The form keeps what was typed. */
  error?: string | null
  /** True once the message went: the form is replaced by a confirmation. */
  sent?: boolean
  /** What the message is about, as cards above the fields, so the app can
   *  route it (sales, support, security) instead of reading one inbox. Two to
   *  six. Left out, the form asks nothing. */
  topics?: ContactTopic[]
}

export type ContactValues = z.infer<ReturnType<typeof contactSchema>>

function assertTopics(topics: ContactTopic[] | undefined) {
  if (!topics) return
  if (topics.length < 2 || topics.length > 6) {
    throw new Error("ContactForm: topics takes 2 to 6, got " + topics.length)
  }
  const values = topics.map((t) => t.value)
  if (new Set(values).size !== values.length) {
    throw new Error("ContactForm: topic values must be unique, got " + values.join(", "))
  }
}

/** Name, email, message, and what it is about. The app sends it; the form
 *  validates and waits. */
export function ContactForm({
  onSubmit,
  error,
  sent,
  topics,
  className,
  ...props
}: ContactFormProps) {
  assertTopics(topics)
  const t = useStrings().site
  const topicValues = React.useMemo(() => topics?.map((topic) => topic.value), [topics])
  const schema = React.useMemo(() => contactSchema(t, topicValues), [t, topicValues])
  const form = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: { topic: undefined, name: "", email: "", message: "" },
  })
  const busy = form.formState.isSubmitting

  if (sent) {
    return (
      <div
        role="status"
        className="grid justify-items-center gap-2 rounded-lg border p-8 text-center"
      >
        <CheckCircleIcon aria-hidden className="size-6 text-success-fg" />
        <p className="text-base font-semibold">{t.sentTitle}</p>
        <p className="text-sm text-muted-foreground">{t.sentDescription}</p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        data-slot="contact-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid gap-5", className)}
        noValidate
        {...props}
      >
        {error && (
          <Alert variant="danger">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {topics && (
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.topic}</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                    className="grid gap-2 sm:grid-cols-2"
                  >
                    {topics.map((topic) => (
                      // The whole card is the label, so the card is the target.
                      <label
                        key={topic.value}
                        className="flex cursor-pointer items-start gap-3 rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent"
                      >
                        <RadioGroupItem value={topic.value} className="mt-0.5" />
                        <span className="grid gap-0.5">
                          <span className="text-sm font-medium">{topic.label}</span>
                          {topic.description && (
                            <span className="text-xs text-pretty text-muted-foreground">
                              {topic.description}
                            </span>
                          )}
                        </span>
                      </label>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.name}</FormLabel>
                <FormControl>
                  <Input autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.email}</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.message}</FormLabel>
              <FormControl>
                <Textarea rows={6} placeholder={t.messagePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-fit" disabled={busy}>
          {busy && <SpinnerIcon className="animate-spin" />}
          {t.send}
        </Button>
      </form>
    </Form>
  )
}

export interface ContactChannel {
  icon: Icon
  /** What the channel is for: "Security reports". */
  label: string
  /** The address, number or handle, as the reader would type it. */
  value: string
  /** Makes the value a link: `mailto:`, `https:`. */
  href?: string
  /** One line under it: the response time, the PGP fingerprint's owner. */
  note?: string
  /** A copy button beside the value: for anything long or exact. */
  copy?: boolean
  /** Set the value in mono: keys, fingerprints, IDs. */
  mono?: boolean
}

export interface ContactChannelsProps extends React.ComponentProps<"dl"> {
  channels: ContactChannel[]
}

/** A long address may truncate; a key or fingerprint never does, because a
 *  fingerprint missing its tail cannot be checked. Mono values wrap instead. */
const MONO_OR_TRUNCATE = (mono?: boolean) =>
  mono ? "font-mono text-xs leading-5 [overflow-wrap:anywhere]" : "truncate"

/** The ways to reach a team besides the form, each with what it is for and
 *  how fast it answers. */
export function ContactChannels({ channels, className, ...props }: ContactChannelsProps) {
  if (channels.length === 0) throw new Error("ContactChannels: needs at least one channel")
  return (
    <dl data-slot="contact-channels" className={cn("grid gap-6", className)} {...props}>
      {channels.map(({ icon: ChannelIcon, label, value, href, note, copy, mono }) => (
        // The icon sits in the label's line, unframed: an icon in a bordered
        // tile was the one pattern on these pages that read as a template.
        <div key={label} className="grid min-w-0 gap-0.5">
          <dt className="flex items-center gap-2 text-sm font-medium">
            <ChannelIcon aria-hidden className="size-4 shrink-0 text-muted-foreground" />
            {label}
          </dt>
          <dd className="flex min-w-0 items-start gap-1">
            {href ? (
              <Link
                href={href}
                className={cn(
                  "rounded-sm text-sm text-link outline-none hover:underline hover:underline-offset-4 focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
                  MONO_OR_TRUNCATE(mono),
                )}
              >
                {value}
              </Link>
            ) : (
              <span className={cn("text-sm", MONO_OR_TRUNCATE(mono))}>{value}</span>
            )}
            {copy && <CopyButton value={value} label={label} size="icon-xs" />}
          </dd>
          {note && <dd className="text-xs text-pretty text-muted-foreground">{note}</dd>}
        </div>
      ))}
    </dl>
  )
}
