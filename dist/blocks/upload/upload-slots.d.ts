import { UploadItem } from './file-drop';
import { FileRejection } from './validate-files';
import * as React from "react";
export interface UploadSlot {
    id: string;
    /** What goes here: "Driving licence, front". */
    label: string;
    /** A line under the label: "A photo, all four corners visible." */
    description?: string;
    accept?: string;
    maxSize?: number;
    /** Marked as optional beside the label. Every slot is required otherwise. */
    optional?: boolean;
}
export interface UploadSlotsProps {
    slots: UploadSlot[];
    /** What each slot holds now, keyed by slot id. An absent key is an empty slot. */
    value: Partial<Record<string, UploadItem>>;
    /** One file for one slot. The app uploads it and puts the item in `value`. */
    onFile: (slotId: string, file: File) => void;
    onReject?: (slotId: string, rejected: FileRejection[]) => void;
    onRemove?: (slotId: string) => void;
    onRetry?: (slotId: string) => void;
    disabled?: boolean;
    className?: string;
}
/**
 * A set of named documents, one file each: the front and back of a licence,
 * a proof of address. Each slot is its own drop zone with its own rules, and
 * turns into the uploaded file once it holds one.
 */
export declare function UploadSlots({ slots, value, onFile, onReject, onRemove, onRetry, disabled, className, }: UploadSlotsProps): React.JSX.Element;
