import { Icon } from '@phosphor-icons/react';
import * as React from "react";
/** Throws on a bad or repeated id. Two FAQ answers sharing an id open each
 *  other's link, and the second one is unreachable by URL. */
export declare function assertAnchors(block: string, ids: string[]): void;
/** A stagger for `scroll-reveal` items in a row: each starts a little later in
 *  its entry, so a grid arrives left to right rather than all at once. */
export declare const revealStagger: (index: number) => React.CSSProperties;
export interface SectionProps extends Omit<React.ComponentProps<"section">, "title"> {
    title?: React.ReactNode;
    description?: React.ReactNode;
    /** `center` for a section of cards or a closing band, `start` for prose. */
    align?: "start" | "center";
    /** `narrow` (768px) for text: FAQ, a contact form, a long paragraph. */
    width?: "default" | "narrow";
    /** `muted` tints the band, to set off every other section on a long page. */
    tone?: "default" | "muted";
}
export declare function Section({ title, description, align, width, tone, className, children, ...props }: SectionProps): React.JSX.Element;
export interface HeroProps extends Omit<React.ComponentProps<"section">, "title"> {
    /** The page's `h1`. Say what the product does, in the reader's words. */
    title: React.ReactNode;
    description?: React.ReactNode;
    /** One primary button and at most one secondary. */
    actions?: React.ReactNode;
    /** An install or quick-start command under the buttons, with a copy
     *  button: for a technical reader the fastest call to action there is. */
    command?: string;
    /** A product screenshot. Under the text when `centered`, beside it when `split`. */
    media?: React.ReactNode;
    /** `false` when the media draws its own surface (`WindowFrame`, `Terminal`,
     *  `CodeBlock`): no second border, no second shadow. */
    mediaFrame?: boolean;
    layout?: "centered" | "split";
    /** A decorative layer behind the text: an ASCII field, a pattern. It is
     *  `aria-hidden`, cannot take a click, and fades out toward the bottom so
     *  the next section starts clean. The text keeps the page's background
     *  colour behind it only through contrast you check: keep the layer faint. */
    background?: React.ReactNode;
}
export declare function Hero({ title, description, actions, command, media, mediaFrame, layout, background, className, ...props }: HeroProps): React.JSX.Element;
export interface FeatureRow {
    title: string;
    description: React.ReactNode;
    /** Short lines under the description, each with a check. */
    points?: string[];
    media: React.ReactNode;
}
export interface FeatureSplitProps extends React.ComponentProps<"div"> {
    rows: FeatureRow[];
    /** `false` when every row's media draws its own surface. */
    mediaFrame?: boolean;
}
/** Text beside a screenshot, sides alternating down the page. */
export declare function FeatureSplit({ rows, mediaFrame, className, ...props }: FeatureSplitProps): React.JSX.Element;
export interface LogoStripProps extends React.ComponentProps<"div"> {
    /** The line above the logos. Name who they are ("Used by finance teams at"),
     *  never a vague "Trusted by". */
    label?: React.ReactNode;
    /** `name` is the key and, when `logo` is an SVG with no text, what a screen
     *  reader hears. Draw logos in `currentColor` so they take the muted tone. */
    logos: {
        name: string;
        logo: React.ReactNode;
    }[];
}
export declare function LogoStrip({ label, logos, className, ...props }: LogoStripProps): React.JSX.Element;
export interface Plan {
    id: string;
    name: string;
    /** Formatted by the app, currency and all: "€29", "Free", "Custom". */
    price: string;
    /** After the price: "/ month", "per seat". */
    period?: string;
    description?: React.ReactNode;
    features: string[];
    /** The plan's button, usually a `Button asChild` around a `Link`. */
    action: React.ReactNode;
    /** At most one plan. It gets the brand border and the `recommended` badge. */
    highlighted?: boolean;
}
export interface PricingTableProps extends React.ComponentProps<"ul"> {
    plans: Plan[];
}
export declare function PricingTable({ plans, className, ...props }: PricingTableProps): React.JSX.Element;
export interface FaqItem {
    /** The anchor, so a support reply can link straight to one answer. */
    id: string;
    question: string;
    answer: React.ReactNode;
}
export interface FaqProps extends React.ComponentProps<"div"> {
    items: FaqItem[];
}
/** Questions that open in place. Native `<details>`: it works with no script,
 *  find-in-page opens the one that matches, and a `#id` link lands on it. */
export declare function Faq({ items, className, ...props }: FaqProps): React.JSX.Element;
export interface CtaBandProps extends Omit<React.ComponentProps<"div">, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    /** The same verb as the hero's primary button. Two different asks on one
     *  page make the reader pick, and most pick neither. */
    actions: React.ReactNode;
}
/** The closing ask, at the bottom of a page, inside a `Section` with no title. */
export declare function CtaBand({ title, description, actions, className, ...props }: CtaBandProps): React.JSX.Element;
export interface Spec {
    /** The number, as the app formats it: "38", "99.99", "1.2". */
    value: string;
    /** Kept apart from the value so it can be smaller: "ms", "%", "TB/day". */
    unit?: string;
    /** What was measured, and how: "p50 time to first token, 8B model". */
    label: string;
}
export interface SpecsProps extends React.ComponentProps<"dl"> {
    items: Spec[];
}
/**
 * Hard numbers in a row, in place of adjectives. A technical reader trusts
 * "38 ms p50" and skims "blazing fast". Two to four: one number is a claim,
 * five is a datasheet, and the datasheet belongs on its own page.
 */
export declare function Specs({ items, className, ...props }: SpecsProps): React.JSX.Element;
export interface PageLink {
    href: string;
    title: string;
    /** One line: what the reader finds there. */
    description: string;
}
export interface PageLinksProps extends React.ComponentProps<"ul"> {
    links: PageLink[];
}
/**
 * Where the rest of the story lives. The landing page says what it is and
 * proves it; pricing, the threat model, the architecture and the docs each get
 * a page, and this row sends the reader to the one they came for.
 */
export declare function PageLinks({ links, className, ...props }: PageLinksProps): React.JSX.Element;
/** A point with an icon, or with a picture: a small fragment of the product
 *  (a few rows, a badge, a field) built from the library's components. */
export type Feature = {
    title: string;
    description: React.ReactNode;
} & ({
    icon?: Icon;
    media?: never;
} | {
    media: React.ReactNode;
    icon?: never;
});
export interface FeatureListProps extends React.ComponentProps<"ul"> {
    items: Feature[];
    columns?: 2 | 3;
}
/**
 * What the product does, as a grid of short points. With icons it is a plain
 * grid, no cards. With `media` each point sits under its own picture, framed
 * as a surface at one height so the row lines up; three is the most a row
 * should hold.
 */
export declare function FeatureList({ items, columns, className, ...props }: FeatureListProps): React.JSX.Element;
export interface TestimonialProps extends React.ComponentProps<"figure"> {
    quote: React.ReactNode;
    /** A real person's name. Required: an unsigned quote reads as made up. */
    name: string;
    /** Their role and company: "Platform lead, Fern & Birch". */
    role: string;
    avatar?: string;
    /** The company's logo, drawn in `currentColor`. */
    logo?: React.ReactNode;
    /** The number the quote is about, set large beside it: the proof, where the
     *  quote is the voice. `{ value: "0", label: "messages lost in 14 zone failures" }`. */
    metric?: {
        value: string;
        label: string;
    };
}
/** One customer, on a card: logo, quote, who said it, and the number behind it. */
export declare function Testimonial({ quote, name, role, avatar, logo, metric, className, ...props }: TestimonialProps): React.JSX.Element;
