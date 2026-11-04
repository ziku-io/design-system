import { Icon } from '@phosphor-icons/react';
import { AsyncStateProps } from '../page/error-state';
import * as React from "react";
export interface DashboardProps extends Omit<React.ComponentProps<"div">, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Right of the title: a period select, an export, the primary action. */
    actions?: React.ReactNode;
    /** A row of `StatTile`s. Any count: the row fits as many as the width allows
     *  and wraps the rest, so four tiles and seven tiles need no layout change. */
    stats?: React.ReactNode;
    /** `DashboardPanel`s, laid out on a two-column grid from `lg` up. */
    children?: React.ReactNode;
}
/**
 * The home screen of an app: a header, a row of numbers, and panels under it.
 *
 * Layout only. The page fetches its own data and passes finished tiles and
 * panels in, the same contract as every other block.
 */
export declare function Dashboard({ title, description, actions, stats, children, className, ...props }: DashboardProps): React.JSX.Element;
export interface DashboardPanelProps extends Omit<React.ComponentProps<"section">, "title">, AsyncStateProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Right of the title, usually a "View all" link. */
    action?: React.ReactNode;
    /** `full` takes both columns of the grid: a work queue table, a wide chart. */
    span?: "half" | "full";
}
/** One titled section of a dashboard. A `section` with its own heading, so the
 *  page outline reads as the list of panels. */
export declare function DashboardPanel({ title, description, action, span, loading, error, onRetry, className, children, ...props }: DashboardPanelProps): React.JSX.Element;
export interface ActivityItem {
    id: string;
    /** What happened: "Ana approved dossier 214". */
    title: React.ReactNode;
    description?: React.ReactNode;
    at: Date;
    icon?: Icon;
}
export interface ActivityListProps extends React.ComponentProps<"ol">, AsyncStateProps {
    /** `undefined` only while `loading` or with an `error`: a list that has
     *  arrived and is empty is `[]`, and says so. */
    items: ActivityItem[] | undefined;
}
/** What happened lately, newest first as given. The caller sorts. */
export declare function ActivityList({ items, loading, error, onRetry, className, ...props }: ActivityListProps): React.JSX.Element;
