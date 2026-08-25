import { z } from 'zod';
import * as React from "react";
export declare const loginSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginValues = z.infer<typeof loginSchema>;
export interface LoginFormProps {
    onSubmit: (values: LoginValues) => Promise<void> | void;
    /** Server-side error to display above the form */
    error?: string | null;
    title?: string;
    description?: string;
    registerHref?: string;
    forgotPasswordHref?: string;
    /** OAuth / SSO buttons rendered under a divider */
    providers?: React.ReactNode;
}
export declare function LoginForm({ onSubmit, error, title, description, registerHref, forgotPasswordHref, providers, }: LoginFormProps): React.JSX.Element;
