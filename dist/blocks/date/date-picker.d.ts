import { DateRange } from 'react-day-picker';
import { UIStrings } from '../../lib/strings';
import * as React from "react";
export type { DateRange };
interface PickerBase {
    placeholder?: string;
    disabled?: boolean;
    /** Days before this cannot be picked. */
    min?: Date;
    /** Days after this cannot be picked. */
    max?: Date;
    className?: string;
    id?: string;
    "aria-invalid"?: boolean;
    /** Sends the value with its form as `YYYY-MM-DD`, the local calendar day
     *  (not UTC). A range sends two fields, `name[from]` and `name[to]`. Empty
     *  string when nothing is picked. */
    name?: string;
    /** Blocks the form's submit while empty, through native validation: the
     *  picker opens instead. A range needs both ends. Sets `aria-required`. */
    required?: boolean;
}
/** The local calendar day as `YYYY-MM-DD`. `toISOString` would give the UTC
 *  day, which is yesterday for every midnight east of Greenwich. */
export declare function isoDay(date: Date | undefined): string;
export interface DatePickerProps extends PickerBase {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
}
/** One day, in a popover. Closes on pick. */
export declare function DatePicker({ value, onChange, placeholder, disabled, min, max, className, name, required, ...aria }: DatePickerProps): React.JSX.Element;
export interface DateRangePreset {
    label: string;
    /** Called with today at midnight, when the preset is clicked. */
    range: (today: Date) => DateRange;
}
/** "Last 7 days" includes today, so it starts six days back. */
export declare function defaultRangePresets(t: UIStrings["datePicker"]): DateRangePreset[];
/**
 * The range after a click on `day`.
 *
 * react-day-picker's own rule edits whichever end is nearer: once a range is
 * set, every click after its start moves the end, so the start could only ever
 * move earlier. Here a click on a finished range starts a new one, and the
 * next click finishes it, the two swapped if the second comes first.
 */
export declare function nextRange(current: DateRange | undefined, day: Date): DateRange;
export interface DateRangePickerProps extends PickerBase {
    value: DateRange | undefined;
    onChange: (range: DateRange | undefined) => void;
    /** Shortcuts beside the calendar. Defaults to today, the last 7, 30 and 90
     *  days, this month and this year. `false` for none. */
    presets?: DateRangePreset[] | false;
}
/** A period: two months side by side on a desktop, one on a phone, with
 *  shortcuts for the periods a dashboard asks for most. */
export declare function DateRangePicker({ value, onChange, presets, placeholder, disabled, min, max, className, name, required, ...aria }: DateRangePickerProps): React.JSX.Element;
