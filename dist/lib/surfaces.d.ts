/**
 * The two materials in the library, as class strings. Same reason as
 * `field-variants.ts`: these sit next to each other on one screen, so a
 * popover that is glass and a dropdown that is opaque reads as two products.
 *
 * Neither is glass. A translucent dialog let the page show through its body
 * and turned the fields on it into white boxes on grey; the blur stays only
 * on chrome that content scrolls under (the shell header, the sidebar).
 */
/** Anything that floats: dialog, drawer, popover, menus, listboxes, chart tooltip. */
export declare const OVERLAY = "border bg-popover text-popover-foreground shadow-overlay";
/** Anything that sits on the page: cards, tiles, dashboard panels, tables. */
export declare const SURFACE = "rounded-lg border bg-card text-card-foreground";
/**
 * A panel against one edge of the screen: where it sits, the edge it slides
 * from, and the one border that faces the page. `Drawer` and the sidebar on a
 * phone share it, so the two slide the same way.
 *
 * ease-settle at 250ms in, 200 out. The panel it replaced took 500ms on
 * ease-in-out, the slowest motion in the library and the wrong curve for
 * something arriving.
 */
export declare const EDGE_PANEL: {
    readonly base: "fixed z-50 flex flex-col bg-popover text-popover-foreground shadow-overlay transition ease-settle data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-250";
    readonly right: "inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right";
    readonly left: "inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left";
    readonly bottom: "inset-x-0 bottom-0 max-h-[85dvh] rounded-t-lg border-t pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom";
};
export type EdgeSide = Exclude<keyof typeof EDGE_PANEL, "base">;
/** The scrim behind a dialog or a drawer. */
export declare const SCRIM = "fixed inset-0 z-50 bg-overlay data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0";
/**
 * The four tinted panels a public page sets its pictures on, in the order a
 * page uses them: brand first (the hero), then teal, sage and sand. Written
 * out because Tailwind only ships classes it finds as literals.
 */
export declare const STAGES: readonly ["bg-stage-1", "bg-stage-2", "bg-stage-3", "bg-stage-4"];
/** The stage for the `index`th picture on a page, cycling through the four. */
export declare const stageAt: (index: number) => "bg-stage-1" | "bg-stage-2" | "bg-stage-3" | "bg-stage-4";
