import { z } from 'zod';
import { UIStrings } from '../../lib/strings';
import * as React from "react";
/** A factory, not a constant: the messages are the app's, from `UIStringsProvider`. */
export declare const registerSchema: (t: UIStrings["auth"]) => z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strip>;
export type RegisterValues = z.infer<ReturnType<typeof registerSchema>>;
export interface RegisterFormProps {
    onSubmit: (values: RegisterValues) => Promise<void> | void;
    error?: string | null;
    title?: string;
    description?: string;
    /** `null` renders no "sign in" link. */
    loginHref?: string | null;
    providers?: React.ReactNode;
}
export declare function RegisterForm({ onSubmit, error, title, description, loginHref, providers, }: RegisterFormProps): React.JSX.Element;
