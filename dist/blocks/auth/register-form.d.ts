import { z } from 'zod';
import * as React from "react";
export declare const registerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strip>;
export type RegisterValues = z.infer<typeof registerSchema>;
export interface RegisterFormProps {
    onSubmit: (values: RegisterValues) => Promise<void> | void;
    error?: string | null;
    title?: string;
    description?: string;
    loginHref?: string;
    providers?: React.ReactNode;
}
export declare function RegisterForm({ onSubmit, error, title, description, loginHref, providers, }: RegisterFormProps): React.JSX.Element;
