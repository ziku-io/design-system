import { z } from 'zod';
import { UIStrings } from '../../lib/strings';
import * as React from "react";
/** A factory, not a constant: the messages are the app's, from `UIStringsProvider`. */
export declare const forgotPasswordSchema: (t: UIStrings["auth"]) => z.ZodObject<{
    email: z.ZodEmail;
}, z.core.$strip>;
export type ForgotPasswordValues = z.infer<ReturnType<typeof forgotPasswordSchema>>;
export interface ForgotPasswordFormProps {
    onSubmit: (values: ForgotPasswordValues) => Promise<void> | void;
    error?: string | null;
    /** When true, shows the "check your inbox" state instead of the form */
    sent?: boolean;
    /** `null` renders no way back — for a page that is not reached from a login. */
    loginHref?: string | null;
}
export declare function ForgotPasswordForm({ onSubmit, error, sent, loginHref, }: ForgotPasswordFormProps): React.JSX.Element;
