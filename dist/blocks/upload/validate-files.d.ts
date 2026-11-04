export interface FileRules {
    /** The `<input accept>` syntax: `.pdf`, `image/*`, `application/pdf`, comma-separated. */
    accept?: string;
    /** Bytes, per file. */
    maxSize?: number;
    /** How many may be accepted in this call. Pass what is left, not the total,
     *  when the app already holds some. */
    maxFiles?: number;
}
export interface FileRejection {
    file: File;
    reason: "type" | "size" | "count";
}
/**
 * Splits picked or dropped files into the ones the rules allow and the ones
 * they do not, each with its reason.
 *
 * `accept` is checked here as well as on the input: the input's filter is a
 * hint the OS file dialog may ignore, and a drop ignores it entirely.
 */
export declare function validateFiles(files: File[], { accept, maxSize, maxFiles }: FileRules): {
    accepted: File[];
    rejected: FileRejection[];
};
