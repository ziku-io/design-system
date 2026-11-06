import { z } from 'zod';
import { UIStrings } from '../../lib/strings';
import * as React from "react";
/** A factory, not a constant: the message is the app's, from `UIStringsProvider`. */
export declare const newsletterSchema: (t: UIStrings["site"]) => z.ZodObject<{
    email: z.ZodEmail;
}, z.core.$strip>;
export interface NewsletterFormProps extends Omit<React.ComponentProps<"form">, "onSubmit"> {
    onSubmit: (values: NewsletterValues) => Promise<void> | void;
    /** The server's message when the subscription failed. The address stays typed. */
    error?: string | null;
    /** True once subscribed: the form is replaced by a confirmation line. */
    sent?: boolean;
}
export type NewsletterValues = z.infer<ReturnType<typeof newsletterSchema>>;
/**
 * One field and a button, for release notes or a changelog digest. The app
 * sends the address; double opt-in is the app's mailer's job, which is why the
 * confirmation says to check the inbox rather than "You're in".
 */
export declare function NewsletterForm({ onSubmit, error, sent, className, ...props }: NewsletterFormProps): React.JSX.Element;
export type NewsletterBandProps = Omit<React.ComponentProps<"section">, "title" | "onSubmit"> & Pick<NewsletterFormProps, "onSubmit" | "error" | "sent"> & {
    /** What arrives and how often: "Release notes, once a month". */
    title: React.ReactNode;
    /** One line on what is in it, or what is not. */
    description?: React.ReactNode;
};
/**
 * The newsletter as a band of its own: on a landing page after the main
 * content and before the questions, for the reader not ready to sign up, so
 * the closing ask stays the last thing on the page; under the posts on a blog.
 * It keeps a `Section`'s vertical rhythm, so it can follow any band.
 */
export declare function NewsletterBand({ title, description, onSubmit, error, sent, className, ...props }: NewsletterBandProps): React.JSX.Element;
