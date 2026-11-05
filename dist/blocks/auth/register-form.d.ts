import { z } from 'zod';
import { UIStrings } from '../../lib/strings';
import * as React from "react";
declare const PHONE_MODES: readonly ["optional", "required"];
export type PhoneMode = (typeof PHONE_MODES)[number];
export interface RegisterSchemaOptions {
    /** Absent: no phone field, and any `phone` in the input is dropped. */
    phone?: PhoneMode;
    /** `true`: the consent box must be ticked. */
    consent?: boolean;
}
/** What `onSubmit` receives. `phone` is trimmed and only present when filled
 *  in; `consent` is only present when the form asked for it. */
export interface RegisterValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string;
    consent?: true;
}
/** A factory, not a constant: the messages are the app's, from `UIStringsProvider`. */
export declare const registerSchema: (t: UIStrings["auth"], options?: RegisterSchemaOptions) => z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    confirmPassword: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    consent: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodTransform<RegisterValues, {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string | undefined;
    consent?: boolean | undefined;
}>>;
/** What the fields hold while the user types, before the schema shapes it. */
export type RegisterInput = z.input<ReturnType<typeof registerSchema>>;
export interface RegisterFormProps {
    onSubmit: (values: RegisterValues) => Promise<void> | void;
    error?: string | null;
    title?: string;
    description?: string;
    /** `null` renders no "sign in" link. */
    loginHref?: string | null;
    providers?: React.ReactNode;
    /** Adds a tel field after the name. Absent: no field. */
    phone?: PhoneMode;
    /** The label of a checkbox that must be ticked to submit, e.g. a link to
     *  the privacy policy. Absent: no checkbox. */
    consent?: React.ReactNode;
}
export declare function RegisterForm({ onSubmit, error, title, description, loginHref, providers, phone, consent, }: RegisterFormProps): React.JSX.Element;
export {};
