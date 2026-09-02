import { FieldVariant } from '../../lib/field-variants';
import * as React from "react";
export type TextareaProps = React.ComponentProps<"textarea"> & {
    /** `ghost` is the tinted field, `cell` the borderless one. Same two
     *  treatments as `Input` and `SelectTrigger`, from the same definition. */
    variant?: FieldVariant;
};
declare function Textarea({ className, variant, ...props }: TextareaProps): React.JSX.Element;
export { Textarea };
