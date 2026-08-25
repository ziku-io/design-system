import * as React from "react";
export interface PageHeaderProps extends Omit<React.ComponentProps<"div">, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Primary / secondary actions, right-aligned */
    actions?: React.ReactNode;
}
export declare function PageHeader({ title, description, actions, className, ...props }: PageHeaderProps): React.JSX.Element;
