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
export function focusFirstField(event: Event): void {
  event.preventDefault()
  const panel = event.currentTarget
  if (!(panel instanceof HTMLElement))
    throw new Error("focusFirstField: expected the panel element as currentTarget")
  const field = panel.querySelector<HTMLElement>(
    "[data-overlay-body] :is(input, textarea, select, [role=combobox]):not(:disabled)",
  )
  ;(field ?? panel).focus()
}
