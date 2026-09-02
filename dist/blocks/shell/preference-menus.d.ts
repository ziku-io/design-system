import { DropdownMenuContent } from '../../components/ui/dropdown-menu';
import * as React from "react";
export interface PreferenceMenuProps {
    /** Where the panel opens, for a trigger in a footer rather than a top bar. */
    side?: React.ComponentProps<typeof DropdownMenuContent>["side"];
    align?: React.ComponentProps<typeof DropdownMenuContent>["align"];
    className?: string;
}
/**
 * System, light, dark — the three-item menu every app was writing over
 * `useThemePreference`.
 *
 * `system` is the default and the first item, because a machine set to light is
 * the case this library's dark default gets wrong.
 */
export declare function ThemeMenu({ side, align, className }: PreferenceMenuProps): React.JSX.Element;
/**
 * The root font-size multiplier, as a short list rather than a slider.
 *
 * Browser zoom scales the viewport too, which turns a desktop layout into the
 * phone one. This scales the type and the spacing and leaves the breakpoints
 * where they are, which is what someone asking for bigger text meant.
 */
export declare function ZoomMenu({ side, align, className }: PreferenceMenuProps): React.JSX.Element;
