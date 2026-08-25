import { z } from 'zod';
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodEmail;
}, z.core.$strip>;
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
export interface ForgotPasswordFormProps {
    onSubmit: (values: ForgotPasswordValues) => Promise<void> | void;
    error?: string | null;
    /** When true, shows the "check your inbox" state instead of the form */
    sent?: boolean;
    loginHref?: string;
}
export declare function ForgotPasswordForm({ onSubmit, error, sent, loginHref, }: ForgotPasswordFormProps): import("react").JSX.Element;
