import * as React from "react";
declare function Table({ className, containerClassName, containerRef, ...props }: React.ComponentProps<"table"> & {
    /**
     * Classes on the scroll box around the table, not on the table.
     *
     * A caller that caps the height here — a windowed body, a panel that must
     * not grow the page — needs this element and not the `<table>`: it is the
     * scrollport, so it is what `position: sticky` measures against and what a
     * virtualizer has to watch. Passing the cap to an outer wrapper instead
     * leaves this box unscrolled, and the sticky header then sticks to nothing.
     */
    containerClassName?: string;
    containerRef?: React.Ref<HTMLDivElement>;
}): React.JSX.Element;
declare function TableHeader({ className, ...props }: React.ComponentProps<"thead">): React.JSX.Element;
declare function TableBody({ className, ...props }: React.ComponentProps<"tbody">): React.JSX.Element;
declare function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): React.JSX.Element;
declare function TableRow({ className, ...props }: React.ComponentProps<"tr">): React.JSX.Element;
declare function TableHead({ className, ...props }: React.ComponentProps<"th">): React.JSX.Element;
declare function TableCell({ className, ...props }: React.ComponentProps<"td">): React.JSX.Element;
declare function TableCaption({ className, ...props }: React.ComponentProps<"caption">): React.JSX.Element;
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
