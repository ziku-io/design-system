import * as React from "react";
export interface AuthLayoutProps extends React.ComponentProps<"main"> {
    /** Brand mark shown above the card (logo, wordmark) */
    logo?: React.ReactNode;
    /** Small text under the card, e.g. terms links */
    footer?: React.ReactNode;
}
/** Centered single-column layout for login / register / reset pages. */
export declare function AuthLayout({ logo, footer, className, children, ...props }: AuthLayoutProps): React.JSX.Element;
