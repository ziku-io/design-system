import * as React from "react";
export interface CodeBlockProps extends Omit<React.ComponentProps<"div">, "title"> {
    /** The exact text, which is also what the copy button copies. */
    code: string;
    /** Over the code: a file name, a language, "Terminal". Also names what the
     *  copy button copies. */
    title?: string;
    /** Shell commands: each line gets a `$` that is shown but not copied. */
    prompt?: boolean;
}
/**
 * Code on a public page: an install command in the hero, a request against the
 * API further down. Monochrome on purpose: a highlighter is a dependency and a
 * theme to keep in step, and a sample short enough for a landing page reads
 * fine without one.
 */
export declare function CodeBlock({ code, title, prompt, className, ...props }: CodeBlockProps): React.JSX.Element;
