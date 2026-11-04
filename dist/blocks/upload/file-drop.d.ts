import { FileRejection, FileRules } from './validate-files';
import * as React from "react";
export interface FileDropProps extends FileRules {
    /** The files that passed the rules. The app uploads them; this only picks. */
    onFiles: (files: File[]) => void;
    /** The ones that did not. They are also listed under the zone. */
    onReject?: (rejected: FileRejection[]) => void;
    disabled?: boolean;
    className?: string;
    id?: string;
}
/**
 * A drop zone that is also a file input. The input is real and focusable, so
 * the keyboard and a screen reader get the platform's own file dialog; the
 * zone around it only adds dragging.
 */
export declare function FileDrop({ accept, maxSize, maxFiles, onFiles, onReject, disabled, className, id, }: FileDropProps): React.JSX.Element;
/** Where one file is. A union, so a failed upload cannot also carry progress. */
export type UploadStatus = {
    status: "uploading";
    progress: number;
} | {
    status: "done";
} | {
    status: "failed";
    error?: string;
};
export type UploadItem = {
    id: string;
    name: string;
    size: number;
} & UploadStatus;
export interface UploadListProps extends React.ComponentProps<"ul"> {
    items: UploadItem[];
    onRemove?: (id: string) => void;
    onRetry?: (id: string) => void;
}
/** The files an app is holding: uploading, done or failed. */
export declare function UploadList({ items, onRemove, onRetry, className, ...props }: UploadListProps): React.JSX.Element | null;
