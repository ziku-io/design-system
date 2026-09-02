/**
 * The two field treatments that are not the bordered box.
 *
 * A shared string rather than three: `Input`, `Textarea` and `SelectTrigger`
 * sit next to each other on the same form, and a `ghost` that means one thing
 * on the text field and another on the select is worse than no variant at all.
 * A consuming app had defined exactly this as `.input-ghost` and `.input-cell`
 * and applied them across all three, which is the shape of a missing variant.
 */
export declare const FIELD_VARIANTS: {
    /**
     * A tinted field instead of an outlined box, for a sheet of properties that
     * should read as a list. An empty one still shows where to type, which is
     * what a fully transparent field loses.
     */
    readonly ghost: "rounded-sm border border-transparent bg-muted shadow-none transition-colors hover:bg-accent focus-visible:border-ring focus-visible:bg-field";
    /**
     * A cell of an editable table: no box of its own, because the grid already
     * draws the lines. It fills the cell, so nothing moves when a row goes from
     * reading to editing.
     */
    readonly cell: "rounded-none border-0 bg-transparent shadow-none focus-visible:bg-accent focus-visible:ring-inset";
};
export type FieldVariant = keyof typeof FIELD_VARIANTS;
