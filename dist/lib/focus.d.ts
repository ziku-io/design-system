/**
 * Where focus goes when a Modal or a Drawer opens: the first field of its body,
 * or the panel itself when the body has none.
 *
 * Radix's default is the first focusable element, which is the close button in
 * the title bar: every one opened with a ring around its X. With no field (a
 * confirm), focusing the panel lets Tab reach the footer, so a destructive
 * button is never one Enter away.
 *
 * Pass it as `onOpenAutoFocus`. The body marks itself with `data-overlay-body`.
 */
export declare function focusFirstField(event: Event): void;
