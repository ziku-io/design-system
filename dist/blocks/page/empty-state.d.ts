import { Icon } from '@phosphor-icons/react';
import * as React from "react";
export interface EmptyStateProps extends Omit<React.ComponentProps<"div">, "title"> {
    icon?: Icon;
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Call to action, usually a Button */
    action?: React.ReactNode;
}
export declare function EmptyState({ icon: Icon, title, description, action, className, ...props }: EmptyStateProps): React.JSX.Element;
