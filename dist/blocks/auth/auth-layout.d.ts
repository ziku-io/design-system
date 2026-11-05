import * as React from "react";
export interface AuthLayoutProps extends React.ComponentProps<"main"> {
    /** Shown at the top of the form's card. A string is set as a `Wordmark`; pass
     *  a node for a drawn logo. */
    logo?: React.ReactNode;
    /** Small print at the bottom of the form's card, e.g. terms links */
    footer?: React.ReactNode;
}
/** The layout's logo, for the top of a form's card. Nothing outside `AuthLayout`. */
export declare function AuthLogo(): React.JSX.Element | null;
/** The layout's small print, for the bottom of a form's card. */
export declare function AuthFooter(): React.JSX.Element | null;
/** Centered single-column layout for login / register / reset pages. */
export declare function AuthLayout({ logo, footer, className, children, ...props }: AuthLayoutProps): React.JSX.Element;
