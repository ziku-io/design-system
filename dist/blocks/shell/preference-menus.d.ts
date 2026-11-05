import { PopoverContent } from '../../components/ui/popover';
import * as React from "react";
/**
 * `− [110] % +` and a reset. The field takes any whole number in range; minus
 * and plus step through `ZOOM_STEPS`; the reset (back to 100%) shows only when
 * there is something to reset.
 */
export declare function ZoomStepper({ className }: {
    className?: string;
}): React.JSX.Element;
/** Light, dark, or whatever the OS says. */
export declare function ThemePicker({ className }: {
    className?: string;
}): React.JSX.Element;
export interface LanguageOption {
    /** What the app keys its dictionaries on: "en", "pt-PT". */
    code: string;
    /** The language's own name, "Português", not this dictionary's word for
     *  it: a reader who cannot read the current language still finds theirs. */
    label: string;
}
export interface LanguagePickerProps {
    options: LanguageOption[];
    value: string;
    /** The app swaps its dictionary (`UIStringsProvider`) and anything else it
     *  keys on the language; the library holds no language of its own. */
    onChange: (code: string) => void;
    className?: string;
}
export declare function LanguagePicker({ options, value, onChange, className }: LanguagePickerProps): React.JSX.Element;
export interface PreferencesMenuProps {
    /** Present → a Language row. Absent for an app with one language. */
    language?: Omit<LanguagePickerProps, "className">;
    /** Where the panel opens, for a trigger in a footer rather than a top bar. */
    side?: React.ComponentProps<typeof PopoverContent>["side"];
    align?: React.ComponentProps<typeof PopoverContent>["align"];
    className?: string;
}
/**
 * Appearance, language and zoom, behind one icon in the top bar.
 *
 * A popover, not a dropdown menu: a menu moves focus item to item with the
 * arrows and closes on a pick, which suits a list of actions and fights a
 * panel of controls. Here Tab walks the controls and the panel stays open
 * while the reader tries a zoom level or two.
 */
export declare function PreferencesMenu({ language, side, align, className, }: PreferencesMenuProps): React.JSX.Element;
