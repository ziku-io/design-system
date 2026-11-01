import { DropdownMenuContent } from '../../components/ui/dropdown-menu';
import * as React from "react";
export interface PreferenceMenuProps {
    /** Where the panel opens, for a trigger in a footer rather than a top bar. */
    side?: React.ComponentProps<typeof DropdownMenuContent>["side"];
    align?: React.ComponentProps<typeof DropdownMenuContent>["align"];
    className?: string;
}
/** The root font-size multiplier, as a short list rather than a slider. */
export declare function ZoomMenu({ side, align, className }: PreferenceMenuProps): React.JSX.Element;
