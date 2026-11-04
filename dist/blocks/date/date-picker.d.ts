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
}
export interface DatePickerProps extends PickerBase {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
}
/** One day, in a popover. Closes on pick. */
export declare function DatePicker({ value, onChange, placeholder, disabled, min, max, className, ...aria }: DatePickerProps): React.JSX.Element;
export interface DateRangePreset {
    label: string;
    /** Called with today at midnight, when the preset is clicked. */
    range: (today: Date) => DateRange;
}
/** "Last 7 days" includes today, so it starts six days back. */
export declare function defaultRangePresets(t: UIStrings["datePicker"]): DateRangePreset[];
export interface DateRangePickerProps extends PickerBase {
    value: DateRange | undefined;
    onChange: (range: DateRange | undefined) => void;
    /** Shortcuts beside the calendar. Defaults to today, the last 7, 30 and 90
     *  days, this month and this year. `false` for none. */
    presets?: DateRangePreset[] | false;
}
/** A period: two months side by side on a desktop, one on a phone, with
 *  shortcuts for the periods a dashboard asks for most. */
export declare function DateRangePicker({ value, onChange, presets, placeholder, disabled, min, max, className, ...aria }: DateRangePickerProps): React.JSX.Element;
