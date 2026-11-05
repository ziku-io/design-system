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
    /**
     * Takes any number of files, added over time: invoices, receipts. It stays
     * in the picker after each file and takes several in one drop. Without it a
     * slot holds one file and leaves the picker once it has it.
     */
    multiple?: boolean;
}
export interface UploadSlotsProps {
    slots: UploadSlot[];
    /**
     * What each slot holds, keyed by slot id: the files from this visit and from
     * earlier ones. An absent key or `[]` is an empty slot. A slot without
     * `multiple` holding more than one is refused.
     */
    value: Partial<Record<string, UploadItem[]>>;
    /** One file for the slot the reader picked. Called once per file, so a
     *  batch of invoices is several calls. The app uploads each and adds it to
     *  `value`. */
    onFile: (slotId: string, file: File) => void;
    /** Files the picked slot refused, by its own rules. */
    onReject?: (slotId: string, rejected: FileRejection[]) => void;
    /** Called after the reader confirms. The app deletes it and drops it from `value`. */
    onRemove?: (slotId: string, itemId: string) => void;
    onRetry?: (slotId: string, itemId: string) => void;
    disabled?: boolean;
    className?: string;
}
/**
 * A set of named documents filled from one drop zone: the front and back of a
 * licence, a proof of address, a running pile of invoices.
 *
 * Left, the zone and a select saying which document the next files are; it
 * starts on the first one still missing and moves on once that one is in. A
 * `multiple` document takes a batch in one drop and stays selected.
 * Right, the checklist: every document, with its files once it has them, each
 * one downloadable when the app gives it a `url` and removable after a
 * confirmation. The list is what was saved, so a reader coming back in a later
 * session sees and fetches what they sent last time.
 */
export declare function UploadSlots({ slots, value, onFile, onReject, onRemove, onRetry, disabled, className, }: UploadSlotsProps): React.JSX.Element;
