/**
 * The two materials in the library, as class strings. Same reason as
 * `field-variants.ts`: these sit next to each other on one screen, so a
 * popover that is glass and a dropdown that is opaque reads as two products.
 *
 * Neither is glass. A translucent dialog let the page show through its body
 * and turned the fields on it into white boxes on grey; the blur stays only
 * on chrome that content scrolls under (the shell header, the sidebar).
 */

/** Anything that floats: dialog, sheet, popover, menus, listboxes, chart tooltip. */
export const OVERLAY = "border bg-popover text-popover-foreground shadow-overlay"

/** Anything that sits on the page: cards, tiles, dashboard panels, tables. */
export const SURFACE = "rounded-lg border bg-card text-card-foreground"
