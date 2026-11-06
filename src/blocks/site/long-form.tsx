import * as React from "react"
import { ArrowLeftIcon } from "@phosphor-icons/react"

import { UserAvatar } from "@/components/ui/avatar"
import { Link } from "@/lib/link"
import { useStrings } from "@/lib/strings"
import { cn } from "@/lib/utils"
import { SITE_CONTAINER } from "./site-layout"
import { assertAnchors } from "./sections"

/**
 * Long-form text: a post, a policy, a changelog. The app renders its MDX or
 * markdown into this; the selectors style whatever elements come out.
 *
 * `text-base`, not the product's `text-sm`: a screen of continuous reading at
 * 14px is tiring, and nothing here competes with a toolbar for room.
 */
export const PROSE = cn(
  "text-base leading-7 text-pretty",
  "[&>*+*]:mt-5",
  "[&_h2]:mt-12 [&_h2]:scroll-mt-20 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight",
  "[&_h3]:mt-8 [&_h3]:scroll-mt-20 [&_h3]:text-base [&_h3]:font-semibold",
  "[&_h2+*]:mt-3 [&_h3+*]:mt-2",
  "[&_a]:text-link [&_a]:underline [&_a]:underline-offset-4",
  "[&_strong]:font-semibold",
  "[&_ul]:list-disc [&_ol]:list-decimal [&_ul,&_ol]:pl-6 [&_li]:mt-2 [&_li]:pl-1 [&_li::marker]:text-muted-foreground",
  "[&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground",
  "[&_code]:rounded-sm [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm",
  "[&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-card [&_pre]:p-4 [&_pre]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:p-0",
  "[&_hr]:my-10 [&_hr]:border-border",
  "[&_img]:rounded-lg [&_img]:border",
  "[&_table]:w-full [&_table]:text-sm [&_th]:border-b [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_td]:border-b [&_td]:py-2",
)

export function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="prose" className={cn(PROSE, className)} {...props} />
}

const PAGE_TITLE = "text-3xl font-semibold tracking-tight text-balance sm:text-4xl"

export interface LegalSection {
  /** The anchor: `#data-retention`. */
  id: string
  title: string
  body: React.ReactNode
}

export interface LegalPageProps extends Omit<React.ComponentProps<"article">, "title"> {
  title: React.ReactNode
  /** Shown as a date. A policy without one cannot be held to a version. */
  updated: Date
  intro?: React.ReactNode
  sections: LegalSection[]
}

/** Terms, privacy, cookies, a DPA. Numbered sections with a contents list that
 *  sticks beside them on a wide screen and sits above them on a phone. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
  className,
  ...props
}: LegalPageProps) {
  if (sections.length === 0) throw new Error("LegalPage: needs at least one section")
  if (Number.isNaN(updated.getTime())) throw new Error("LegalPage: updated is an invalid date")
  assertAnchors(
    "LegalPage",
    sections.map((s) => s.id),
  )
  const t = useStrings().site
  return (
    <article
      data-slot="legal-page"
      className={cn(SITE_CONTAINER, "py-16 sm:py-24", className)}
      {...props}
    >
      <header className="grid max-w-3xl gap-3 border-b pb-8">
        <h1 className={PAGE_TITLE}>{title}</h1>
        <p className="text-sm text-muted-foreground">
          <time dateTime={updated.toISOString().slice(0, 10)}>{t.lastUpdated(updated)}</time>
        </p>
      </header>
      <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <nav aria-label={t.contents} className="lg:sticky lg:top-20 lg:self-start">
          <h2 className="mb-3 text-sm font-medium">{t.contents}</h2>
          <ol className="grid list-decimal gap-2 pl-5 text-sm text-muted-foreground marker:tabular-nums">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="rounded-sm outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <Prose className="max-w-3xl">
          {intro && <div>{intro}</div>}
          {sections.map((s, i) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id}>
                {i + 1}. {s.title}
              </h2>
              {s.body}
            </section>
          ))}
        </Prose>
      </div>
    </article>
  )
}

export interface Author {
  name: string
  role?: string
  avatar?: string
}

function isoDay(date: Date) {
  if (Number.isNaN(date.getTime())) throw new Error("published is an invalid date")
  return date.toISOString().slice(0, 10)
}

export interface ArticlePageProps extends Omit<React.ComponentProps<"article">, "title"> {
  title: React.ReactNode
  /** The standfirst: one or two sentences under the title. */
  description?: React.ReactNode
  author?: Author
  published: Date
  /** The app counts; the body is a node, so the library cannot. */
  readingMinutes?: number
  /** An image, wider than the text column. */
  cover?: React.ReactNode
  /** The blog index. `null` renders no link back. */
  backHref?: string | null
  /** The post, rendered by the app. It is set in `Prose`. */
  children: React.ReactNode
}

/** One blog post or changelog entry: a narrow column, the byline above it. */
export function ArticlePage({
  title,
  description,
  author,
  published,
  readingMinutes,
  cover,
  backHref = "/blog",
  className,
  children,
  ...props
}: ArticlePageProps) {
  const t = useStrings().site
  const meta = [
    <time key="date" dateTime={isoDay(published)}>
      {t.published(published)}
    </time>,
    readingMinutes !== undefined && <span key="time">{t.readingTime(readingMinutes)}</span>,
  ].filter(Boolean)
  return (
    <article
      data-slot="article-page"
      className={cn(SITE_CONTAINER, "py-12 sm:py-20", className)}
      {...props}
    >
      <div className="mx-auto grid max-w-2xl gap-5">
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex w-fit items-center gap-1.5 rounded-sm text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80"
          >
            <ArrowLeftIcon aria-hidden className="size-4" />
            {t.allPosts}
          </Link>
        )}
        <h1 className={PAGE_TITLE}>{title}</h1>
        {description && <p className="text-lg text-pretty text-muted-foreground">{description}</p>}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          {author && (
            <span className="flex items-center gap-2">
              <UserAvatar name={author.name} src={author.avatar} className="size-8" />
              <span className="grid">
                <span className="font-medium text-foreground">{author.name}</span>
                {author.role && <span className="text-xs">{author.role}</span>}
              </span>
            </span>
          )}
          <span className="flex items-center gap-2 [&>*+*]:before:mr-2 [&>*+*]:before:content-['·']">
            {meta}
          </span>
        </div>
      </div>
      {cover && (
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-lg border [&_img]:block [&_img]:h-auto [&_img]:w-full">
          {cover}
        </div>
      )}
      <Prose className="mx-auto mt-10 max-w-2xl">{children}</Prose>
    </article>
  )
}

export interface PostSummary {
  href: string
  title: string
  description?: React.ReactNode
  published: Date
  author?: string
  readingMinutes?: number
}

export interface PostListProps extends React.ComponentProps<"ol"> {
  posts: PostSummary[]
}

/** The blog index: newest first, as the app sorts them. A list rather than a
 *  grid of cover cards, which reads the same on every startup's blog. */
export function PostList({ posts, className, ...props }: PostListProps) {
  const t = useStrings().site
  if (posts.length === 0) {
    return <p className="border-y py-10 text-center text-sm text-muted-foreground">{t.noPosts}</p>
  }
  return (
    <ol data-slot="post-list" className={cn("divide-y border-y", className)} {...props}>
      {posts.map((post) => (
        <li
          key={post.href}
          className="relative grid gap-2 py-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8"
        >
          <time
            dateTime={isoDay(post.published)}
            className="text-sm text-muted-foreground tabular-nums sm:pt-0.5"
          >
            {t.published(post.published)}
          </time>
          <div className="grid gap-1.5">
            <h2 className="text-lg font-semibold tracking-tight">
              {/* The title's link covers the row, so the whole row is one target
               *  and one tab stop. */}
              <Link
                href={post.href}
                className="rounded-sm outline-none after:absolute after:inset-0 hover:underline hover:underline-offset-4 focus-visible:ring-[1.5px] focus-visible:ring-ring/80"
              >
                {post.title}
              </Link>
            </h2>
            {post.description && (
              <p className="text-sm text-pretty text-muted-foreground">{post.description}</p>
            )}
            {(post.author || post.readingMinutes !== undefined) && (
              <p className="flex gap-2 text-xs text-muted-foreground [&>*+*]:before:mr-2 [&>*+*]:before:content-['·']">
                {post.author && <span>{post.author}</span>}
                {post.readingMinutes !== undefined && (
                  <span>{t.readingTime(post.readingMinutes)}</span>
                )}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
