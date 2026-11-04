import { Icon } from '@phosphor-icons/react';
import * as React from "react";
export interface EmptyStateProps extends Omit<React.ComponentProps<"div">, "title"> {
    icon?: Icon;
    title: React.ReactNode;
    /** `h2` by default: an empty state is usually the only heading under the
     *  page's `h1`. Pass `h3` when it sits inside a titled panel. */
    as?: "h2" | "h3" | "h4";
    description?: React.ReactNode;
    /** Call to action, usually a Button */
    action?: React.ReactNode;
}
export declare function EmptyState({ icon: Icon, title, as: Heading, description, action, className, ...props }: EmptyStateProps): React.JSX.Element;
