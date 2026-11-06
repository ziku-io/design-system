import * as React from "react";
/**
 * Long-form text: a post, a policy, a changelog. The app renders its MDX or
 * markdown into this; the selectors style whatever elements come out.
 *
 * `text-base`, not the product's `text-sm`: a screen of continuous reading at
 * 14px is tiring, and nothing here competes with a toolbar for room.
 */
export declare const PROSE: string;
export declare function Prose({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
export interface LegalSection {
    /** The anchor: `#data-retention`. */
    id: string;
    title: string;
    body: React.ReactNode;
}
export interface LegalPageProps extends Omit<React.ComponentProps<"article">, "title"> {
    title: React.ReactNode;
    /** Shown as a date. A policy without one cannot be held to a version. */
    updated: Date;
    intro?: React.ReactNode;
    sections: LegalSection[];
}
/** Terms, privacy, cookies, a DPA. Numbered sections with a contents list that
 *  sticks beside them on a wide screen and sits above them on a phone. */
export declare function LegalPage({ title, updated, intro, sections, className, ...props }: LegalPageProps): React.JSX.Element;
export interface Author {
    name: string;
    role?: string;
    avatar?: string;
}
export interface ArticlePageProps extends Omit<React.ComponentProps<"article">, "title"> {
    title: React.ReactNode;
    /** The standfirst: one or two sentences under the title. */
    description?: React.ReactNode;
    author?: Author;
    published: Date;
    /** The app counts; the body is a node, so the library cannot. */
    readingMinutes?: number;
    /** An image, wider than the text column. */
    cover?: React.ReactNode;
    /** The blog index. `null` renders no link back. */
    backHref?: string | null;
    /** The post, rendered by the app. It is set in `Prose`. */
    children: React.ReactNode;
}
/** One blog post or changelog entry: a narrow column, the byline above it. */
export declare function ArticlePage({ title, description, author, published, readingMinutes, cover, backHref, className, children, ...props }: ArticlePageProps): React.JSX.Element;
export interface PostSummary {
    href: string;
    title: string;
    description?: React.ReactNode;
    published: Date;
    author?: string;
    readingMinutes?: number;
}
export interface PostListProps extends React.ComponentProps<"ol"> {
    posts: PostSummary[];
}
/** The blog index: newest first, as the app sorts them. A list rather than a
 *  grid of cover cards, which reads the same on every startup's blog. */
export declare function PostList({ posts, className, ...props }: PostListProps): React.JSX.Element;
