/**
 * CSV, in the dialect the spreadsheet on the other end actually reads.
 *
 * A table people work in every day ends up in a spreadsheet or an accountant's
 * hands eventually, and the alternative to an export is somebody selecting
 * rows with the mouse. What is exported is what is on screen: the filters and
 * the sort that are in force, and the columns that are visible, in the order
 * they are visible in.
 *
 * There is no dependency here on purpose. RFC 4180 quoting is a dozen lines,
 * and every CSV library worth adding is solving the parsing half, which nothing
 * here does.
 */
/**
 * How the numbers are written, which is one choice and not two.
 *
 * Excel splits a CSV on the list separator its regional settings name, and in a
 * locale that writes `1234,5` that separator is a semicolon. So a comma decimal
 * with a comma delimiter is a file that opens as garbage in the locale it was
 * meant for. The two travel together rather than as two props somebody can set
 * inconsistently.
 */
export type CsvDecimal = "." | ",";
export declare const csvDelimiter: (decimal: CsvDecimal) => "," | ";";
/**
 * One cell, as text.
 *
 * A number is written in the target decimal rather than `toLocaleString`d: a
 * thousands separator is what turns one number into two columns, and no
 * spreadsheet needs one to read a figure. A date goes out as ISO 8601, which
 * every spreadsheet imports as a date and every locale agrees about.
 */
export declare function csvValue(value: unknown, decimal: CsvDecimal): string;
export interface CsvColumn<T> {
    header: string;
    value: (row: T) => unknown;
}
/** The document, header row included. `\r\n` because RFC 4180 says so and
 *  because older Excel builds treat a bare `\n` as one long line. */
export declare function toCsv<T>(rows: T[], columns: CsvColumn<T>[], decimal?: CsvDecimal): string;
/**
 * Hand the file to the browser.
 *
 * The BOM is not decoration: without it Excel on Windows reads a UTF-8 CSV as
 * the local code page, and every accented character in a Portuguese client list
 * arrives broken. Every other reader ignores it.
 *
 * `URL.revokeObjectURL` on the next tick rather than immediately, because
 * Safari has not started reading the blob when the click handler returns.
 */
export declare function downloadCsv(filename: string, csv: string): void;
