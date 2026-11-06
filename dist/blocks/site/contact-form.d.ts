import { z } from 'zod';
import { Icon } from '@phosphor-icons/react';
import { UIStrings } from '../../lib/strings';
import * as React from "react";
/**
 * A factory, not a constant: the messages are the app's, from
 * `UIStringsProvider`. Pass the same topic values the form offers, and the
 * server rejects a topic the page never showed.
 *
 * One shape either way (`topic` optional), so the values' type does not
 * change with a prop; the refinement makes it required, and limited to the
 * list, only when there is a list.
 */
export declare const contactSchema: (t: UIStrings["site"], topics?: readonly string[]) => z.ZodObject<{
    topic: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    email: z.ZodEmail;
    message: z.ZodString;
}, z.core.$strip>;
export interface ContactTopic {
    value: string;
    label: string;
    /** One line on when to pick it: "Sizing a cluster, a quote, a contract". */
    description?: string;
}
export interface ContactFormProps extends Omit<React.ComponentProps<"form">, "onSubmit"> {
    onSubmit: (values: ContactValues) => Promise<void> | void;
    /** The server's message when sending failed. The form keeps what was typed. */
    error?: string | null;
    /** True once the message went: the form is replaced by a confirmation. */
    sent?: boolean;
    /** What the message is about, as cards above the fields, so the app can
     *  route it (sales, support, security) instead of reading one inbox. Two to
     *  six. Left out, the form asks nothing. */
    topics?: ContactTopic[];
}
export type ContactValues = z.infer<ReturnType<typeof contactSchema>>;
/** Name, email, message, and what it is about. The app sends it; the form
 *  validates and waits. */
export declare function ContactForm({ onSubmit, error, sent, topics, className, ...props }: ContactFormProps): React.JSX.Element;
export interface ContactChannel {
    icon: Icon;
    /** What the channel is for: "Security reports". */
    label: string;
    /** The address, number or handle, as the reader would type it. */
    value: string;
    /** Makes the value a link: `mailto:`, `https:`. */
    href?: string;
    /** One line under it: the response time, the PGP fingerprint's owner. */
    note?: string;
    /** A copy button beside the value: for anything long or exact. */
    copy?: boolean;
    /** Set the value in mono: keys, fingerprints, IDs. */
    mono?: boolean;
}
export interface ContactChannelsProps extends React.ComponentProps<"dl"> {
    channels: ContactChannel[];
}
/** The ways to reach a team besides the form, each with what it is for and
 *  how fast it answers. */
export declare function ContactChannels({ channels, className, ...props }: ContactChannelsProps): React.JSX.Element;
