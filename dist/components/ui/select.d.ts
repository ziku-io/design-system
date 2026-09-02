import { Select as SelectPrimitive } from 'radix-ui';
import { FieldVariant } from '../../lib/field-variants';
import * as React from "react";
declare function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>): React.JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): React.JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): React.JSX.Element;
declare function SelectTrigger({ className, size, children, variant, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
    /** `ghost` is the tinted field, `cell` the borderless one. Same two
     *  treatments as `Input` and `Textarea`, from the same definition. */
    variant?: FieldVariant;
}): React.JSX.Element;
declare function SelectContent({ className, children, position, align, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>): React.JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): React.JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): React.JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): React.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): React.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): React.JSX.Element;
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, };
