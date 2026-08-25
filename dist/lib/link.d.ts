import * as React from "react";
export type LinkProps = React.ComponentProps<"a"> & {
    href: string;
};
export declare function LinkProvider({ component, children, }: {
    component: React.ComponentType<LinkProps>;
    children: React.ReactNode;
}): React.JSX.Element;
export declare function Link(props: LinkProps): React.JSX.Element;
