import { z } from 'zod';
import { UIStrings } from '../../lib/strings';
import * as React from "react";
/** A factory, not a constant: the messages are the app's, from `UIStringsProvider`. */
export declare const loginSchema: (t: UIStrings["auth"]) => z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginValues = z.infer<ReturnType<typeof loginSchema>>;
export interface LoginFormProps {
    onSubmit: (values: LoginValues) => Promise<void> | void;
    /** Server-side error to display above the form */
    error?: string | null;
    title?: string;
    description?: string;
    /** `null` renders no "create one" link — for an app with no self-service sign-up. */
    registerHref?: string | null;
    /** `null` renders no "forgot password" link — for an app with no mailer. */
    forgotPasswordHref?: string | null;
    /** OAuth / SSO buttons rendered under a divider */
    providers?: React.ReactNode;
}
export declare function LoginForm({ onSubmit, error, title, description, registerHref, forgotPasswordHref, providers, }: LoginFormProps): React.JSX.Element;
