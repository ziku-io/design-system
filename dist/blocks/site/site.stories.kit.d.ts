import { SiteFooterColumn, SiteLink } from './site-layout';
import { FaqItem, Feature, PageLink, Plan } from './sections';
import { TerminalLine } from './visuals';
import { ComparisonGroup } from './plan-comparison';
import { PostSummary } from './long-form';
import * as React from "react";
/**
 * Shared material for the site stories: the frame, mock data, the product
 * fragments, the hero backgrounds and the colour-direction overrides. Not a
 * story file (it does not end in `.stories.tsx`, so Storybook and the smoke
 * test skip it) and not library code (`.stories.` in its name keeps the
 * literal-text and design-rule scans off it): everything here is example content.
 */
export declare const wait: (ms: number) => Promise<void>;
export declare const nav: SiteLink[];
export declare const footerColumns: SiteFooterColumn[];
/** The newsletter in every page's footer: one line on what it is, the form. */
export declare function FooterNewsletter(): React.JSX.Element;
/** The newsletter band at the end of a landing page, after the closing ask. */
export declare function LandingNewsletter(): React.JSX.Element;
/** The one footer every example page ends with: built once, passed to every
 *  `SiteLayout`, the way an app should do it. */
export declare const footer: React.JSX.Element;
export declare function Frame({ currentHref, cta, children, }: {
    currentHref?: string;
    cta?: string;
    children: React.ReactNode;
}): React.JSX.Element;
export declare const deeper: PageLink[];
/** The last band of a technical landing page: where to read more, then the ask. */
export declare function Ask({ title, description, action, }: {
    title: string;
    description?: string;
    action: string;
}): React.JSX.Element;
/** A smooth, deterministic series: stories must render the same every time. */
export declare const series: (n: number, base: number, swing: number, phase?: number) => {
    t: string;
    v: number;
}[];
export declare function MetricChart({ data, label, unit, }: {
    data: {
        t: string;
        v: number;
    }[];
    label: string;
    unit: string;
}): React.JSX.Element;
export declare function StatusTable({ head, rows, }: {
    head: string[];
    rows: {
        cells: string[];
        status: "success" | "warning" | "danger";
        label: string;
    }[];
}): React.JSX.Element;
/** A stand-in for a product screenshot: an app window drawn in tokens. */
export declare function Screenshot(): React.JSX.Element;
/** Three fragments of the product, one per point: small enough to read at a
 *  glance, real enough to show what the point means. */
export declare function InvoiceDraft(): React.JSX.Element;
export declare function Receipts(): React.JSX.Element;
export declare function Team(): React.JSX.Element;
export declare const genericFeatures: Feature[];
export declare const genericFaq: FaqItem[];
/** Any product: hero, who uses it, features, how, questions, the ask again.
 *  Price lives on its own page, reached from the hero's secondary button. */
export declare function GenericLanding(): React.JSX.Element;
/**
 * performative-ui's `AsciiHero`, bare, behind the hero text. It paints on a
 * canvas, which cannot read a CSS variable, so the colour is resolved from the
 * theme on every theme change: one muted ink, not the package's violet-to-pink
 * default. Nothing renders for a reader who asked for reduced motion.
 *
 * A story, not a library export: the library takes no runtime dependency on a
 * decoration. An app that wants it copies this component.
 */
export declare function AsciiBackground(): React.JSX.Element | null;
export declare const deploySession: TerminalLine[];
export declare const rpcSession: TerminalLine[];
export declare const plans: Plan[];
export declare const faq: FaqItem[];
export declare const comparison: ComparisonGroup[];
export declare const posts: PostSummary[];
export declare const DIRECTIONS = "\n/* Every direction but A flattens the stages, so only its own idea shows. */\n[data-look]:not([data-look=\"stages\"]) {\n  --stage-1: transparent; --stage-2: transparent; --stage-3: transparent; --stage-4: transparent;\n}\n\n/* B. Brand bands: the hero and the closing ask in deep lavender. */\n[data-look=\"brand\"] [data-slot=\"site-hero\"],\n[data-look=\"brand\"] [data-slot=\"cta-band\"] {\n  background: #4b4983;\n  color: #fbfbff;\n  --foreground: #fbfbff;\n  --muted-foreground: #d9d8f5;\n  --primary-button: #fbfbff;\n  --primary-button-foreground: #3f3d70;\n  --border: #6a68a3;\n  --background: #4b4983;\n}\n[data-look=\"brand\"] [data-slot=\"site-hero\"] { --card: #5b5995; }\n/* The picture inside the band keeps the page's own light tokens. */\n[data-look=\"brand\"] [data-slot=\"site-hero\"] > div:last-child > div:last-child,\n[data-look=\"brand\"] [data-slot=\"site-hero\"] [data-slot=\"code-block\"] {\n  --foreground: #44484e; --muted-foreground: #676b72; --border: #dfe2e8;\n  --background: #f4f6f8; --card: #fdfdff; --muted: #edeff3;\n  color: #44484e;\n}\n\n/* B and E: the hero band runs up under the floating bar, and the line after\n   it gets room to breathe off the band's edge. */\n[data-look=\"brand\"] [data-slot=\"site-hero\"],\n[data-look=\"ink\"] [data-slot=\"site-hero\"] {\n  margin-top: -72px;\n  padding-top: 168px;\n}\n[data-look=\"brand\"] [data-slot=\"site-hero\"] + section,\n[data-look=\"ink\"] [data-slot=\"site-hero\"] + section { padding-top: 64px; }\n\n/* C. Tinted page: a pale lavender ground, white cards, deeper tinted bands. */\n[data-look=\"tint\"] {\n  --background: #f3f2fc;\n  --muted: #e4e2f8;\n  --border: #dcdaf0;\n  background: var(--background);\n}\n[data-look=\"tint\"] [data-slot=\"cta-band\"],\n[data-look=\"tint\"] [data-slot=\"newsletter-band\"] > div > div {\n  background: var(--card);\n  border: 1px solid var(--border);\n}\n\n/* D. Colour accents: neutral page, colour in the details. */\n[data-look=\"accents\"] [data-slot=\"specs\"] > div:nth-child(1) { border-color: var(--chart-1); }\n[data-look=\"accents\"] [data-slot=\"specs\"] > div:nth-child(2) { border-color: var(--chart-2); }\n[data-look=\"accents\"] [data-slot=\"specs\"] > div:nth-child(3) { border-color: var(--chart-3); }\n[data-look=\"accents\"] [data-slot=\"specs\"] > div:nth-child(4) { border-color: var(--chart-4); }\n[data-look=\"accents\"] [data-slot=\"specs\"] > div:nth-child(1) dd > span:first-child { color: var(--chart-1); }\n[data-look=\"accents\"] [data-slot=\"specs\"] > div:nth-child(2) dd > span:first-child { color: var(--chart-2); }\n[data-look=\"accents\"] [data-slot=\"specs\"] > div:nth-child(3) dd > span:first-child { color: var(--chart-3); }\n[data-look=\"accents\"] [data-slot=\"specs\"] > div:nth-child(4) dd > span:first-child { color: var(--chart-4); }\n[data-look=\"accents\"] [data-slot=\"feature-list\"] > li > div:first-child { padding: 0; }\n[data-look=\"accents\"] [data-slot=\"feature-list\"] > li > div:first-child > div { border-top-width: 3px; }\n[data-look=\"accents\"] [data-slot=\"feature-list\"] > li:nth-child(1) > div:first-child > div { border-top-color: var(--chart-1); }\n[data-look=\"accents\"] [data-slot=\"feature-list\"] > li:nth-child(2) > div:first-child > div { border-top-color: var(--chart-2); }\n[data-look=\"accents\"] [data-slot=\"feature-list\"] > li:nth-child(3) > div:first-child > div { border-top-color: var(--chart-3); }\n[data-look=\"accents\"] [data-slot=\"feature-split\"] [data-slot=\"window-frame\"],\n[data-look=\"accents\"] [data-slot=\"feature-split\"] .scroll-drift > div > div { border-top: 3px solid var(--chart-2); }\n[data-look=\"accents\"] [data-slot=\"testimonial\"] > div:last-child span:first-child { color: var(--chart-1); }\n[data-look=\"accents\"] [data-slot=\"cta-band\"] { background: var(--primary-button); --muted-foreground: #56548d; color: #3f3d70; }\n[data-look=\"accents\"] [data-slot=\"cta-band\"] [data-slot=\"button\"] { background: #fdfdff; }\n\n/* E. Ink hero: a dark slate hero and closing ask on a light page. */\n[data-look=\"ink\"] [data-slot=\"site-hero\"],\n[data-look=\"ink\"] [data-slot=\"cta-band\"] {\n  background: #1d1f24;\n  color: #e6e8eb;\n  --foreground: #e6e8eb;\n  --muted-foreground: #a9adb3;\n  --background: #1d1f24;\n  --card: #25272d;\n  --muted: #2a2d33;\n  --border: #363940;\n  --primary-button: #3a3870;\n  --primary-button-foreground: #e4e3ff;\n}\n";
export declare const MORE_DIRECTIONS = "\n/* F. Duotone bands: sections alternate full-width white and lavender. */\n[data-look=\"duotone\"] [data-slot=\"site-section\"] { background: transparent; border: 0; }\n[data-look=\"duotone\"] main > section:nth-of-type(even) { background: #ecebff; }\n[data-look=\"duotone\"] [data-slot=\"cta-band\"] { background: var(--card); border: 1px solid var(--border); }\n\n/* G. Warm editorial: paper ground, ink-brown type, clay buttons. */\n[data-look=\"warm\"] {\n  --background: #f6f3ee;\n  --card: #fffdf9;\n  --muted: #efe9e1;\n  --accent: #f1e6dc;\n  --border: #e3dcd2;\n  --foreground: #3d3a35;\n  --muted-foreground: #6b655c;\n  --primary-button: #efd9c9;\n  --primary-button-foreground: #7a4a2e;\n  background: var(--background);\n}\n[data-look=\"warm\"] [data-slot=\"cta-band\"],\n[data-look=\"warm\"] [data-slot=\"newsletter-band\"] > div > div { background: #efe5d8; }\n\n/* H. Brand type: headings in deep lavender, everything else neutral. */\n[data-look=\"type\"] h1,\n[data-look=\"type\"] h2,\n[data-look=\"type\"] h3,\n[data-look=\"type\"] blockquote,\n[data-look=\"type\"] [data-slot=\"testimonial\"] > div:last-child span:first-child { color: #3f3d70; }\n[data-look=\"type\"] [data-slot=\"cta-band\"],\n[data-look=\"type\"] [data-slot=\"newsletter-band\"] > div > div { background: var(--card); border: 1px solid var(--border); }\n\n/* I. Solid buttons and a deep brand footer. */\n[data-look=\"solid\"] { --primary-button: #5b57a8; --primary-button-foreground: #ffffff; }\n[data-look=\"solid\"] footer {\n  background: #2f2d55;\n  color: #f1f0ff;\n  --foreground: #f1f0ff;\n  --muted-foreground: #c9c7ee;\n  --border: #4a4880;\n}\n[data-look=\"solid\"] [data-slot=\"cta-band\"],\n[data-look=\"solid\"] [data-slot=\"newsletter-band\"] > div > div { background: var(--card); border: 1px solid var(--border); }\n\n/* J. Pastel cards on a white page: each card and band its own pastel. */\n[data-look=\"pastel\"] { --background: #ffffff; --muted: #f6f7f9; background: #ffffff; }\n[data-look=\"pastel\"] [data-slot=\"feature-list\"] > li:nth-child(1) > div:first-child { background: #eceaff; }\n[data-look=\"pastel\"] [data-slot=\"feature-list\"] > li:nth-child(2) > div:first-child { background: #e2f4f6; }\n[data-look=\"pastel\"] [data-slot=\"feature-list\"] > li:nth-child(3) > div:first-child { background: #fdeee0; }\n[data-look=\"pastel\"] [data-slot=\"testimonial\"] { background: #f3f0fb; border-color: transparent; }\n[data-look=\"pastel\"] [data-slot=\"testimonial\"] > div:last-child { background: #e6e3fa; }\n[data-look=\"pastel\"] [data-slot=\"cta-band\"] { background: #e2f4f6; }\n[data-look=\"pastel\"] [data-slot=\"newsletter-band\"] > div > div { background: #fdeee0; }\n";
export declare function Look({ look, children, }: {
    look: "stages" | "brand" | "tint" | "accents" | "ink" | "duotone" | "warm" | "type" | "solid" | "pastel";
    children: React.ReactNode;
}): React.JSX.Element;
export declare const INK = "color-mix(in oklab, var(--muted-foreground) 28%, transparent)";
/** A clearing behind the headline, description and buttons, so no line runs
 *  through a word. */
export declare const CLEARING = "radial-gradient(ellipse 36% 26% at 50% 22%, transparent 45%, black 85%)";
export declare function DotGrid(): React.JSX.Element;
export declare function Blueprint(): React.JSX.Element;
/** Topographic rings: each one a circle pushed out by two slow waves. */
export declare function Contours(): React.JSX.Element;
/** Horizontal wires with dashes travelling along them at different speeds. */
export declare function Signal(): React.JSX.Element;
/** A flat brand tint with paper grain: texture without a pattern. */
export declare function Grain(): React.JSX.Element;
export declare const BAND = "\n[data-hero-lab=\"band\"] [data-slot=\"site-hero\"] {\n  background: #4b4983;\n  color: #fbfbff;\n  --foreground: #fbfbff;\n  --muted-foreground: #d9d8f5;\n  --primary-button: #fbfbff;\n  --primary-button-foreground: #3f3d70;\n  --border: #6a68a3;\n  --card: #5b5995;\n  margin-top: -72px;\n  padding-top: 168px;\n}\n[data-hero-lab=\"band\"] [data-slot=\"site-hero\"] > div:last-child > div:last-child {\n  --foreground: #44484e; --muted-foreground: #676b72; --border: #dfe2e8;\n  --background: #f4f6f8; --card: #fdfdff; --muted: #edeff3;\n  color: #44484e;\n}\n";
/** One hero over a given background, with the first band under it for scale. */
export declare function HeroLab({ background, band, }: {
    background: React.ReactNode;
    band?: boolean;
}): React.JSX.Element;
/** Deterministic noise: stories render the same on every load. */
export declare function seeded(seed: number): () => number;
export declare function Scanlines(): React.JSX.Element;
export declare function HexField(): React.JSX.Element;
export declare function Radar(): React.JSX.Element;
export declare function Hatching(): React.JSX.Element;
export declare function Network(): React.JSX.Element;
