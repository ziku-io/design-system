import { Icon } from '@phosphor-icons/react';
import * as React from "react";
export interface ErrorStateProps {
    /** What to do about it. Given a callback, the button is drawn and worded
     *  from the dictionary; pass a node to draw something else entirely. */
    onRetry?: () => void;
    action?: React.ReactNode;
    /** Overrides the dictionary's sentence, for a screen that knows more. */
    title?: React.ReactNode;
    /** `panel` is the shape `EmptyState` has, for a screen with nothing else on
     *  it. `alert` is a band, for a table that hands this to its `empty` slot
     *  and still has a toolbar and headers around it. */
    variant?: "panel" | "alert";
    icon?: Icon;
    className?: string;
}
/**
 * A read that failed, said plainly, with the way out beside it.
 *
 * Not `EmptyState`: a client whose documents did not load must not be told they
 * have none, and a list that never arrived must not read as a list with nothing
 * in it. The two say opposite things and looked identical, which is why both
 * apps that use this library had written their own version of this component
 * within a month of each other.
 */
export declare function ErrorState({ onRetry, action, title, variant, icon, className, }: ErrorStateProps): React.JSX.Element;
