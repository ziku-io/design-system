export interface FileRules {
  /** The `<input accept>` syntax: `.pdf`, `image/*`, `application/pdf`, comma-separated. */
  accept?: string
  /** Bytes, per file. */
  maxSize?: number
  /** How many may be accepted in this call. Pass what is left, not the total,
   *  when the app already holds some. */
  maxFiles?: number
}

export interface FileRejection {
  file: File
  reason: "type" | "size" | "count"
}

/**
 * Splits picked or dropped files into the ones the rules allow and the ones
 * they do not, each with its reason.
 *
 * `accept` is checked here as well as on the input: the input's filter is a
 * hint the OS file dialog may ignore, and a drop ignores it entirely.
 */
export function validateFiles(
  files: File[],
  { accept, maxSize, maxFiles }: FileRules,
): { accepted: File[]; rejected: FileRejection[] } {
  if (maxSize !== undefined && !(maxSize > 0))
    throw new Error("validateFiles: maxSize must be a positive number of bytes")
  if (maxFiles !== undefined && !(Number.isInteger(maxFiles) && maxFiles >= 0))
    throw new Error("validateFiles: maxFiles must be a whole number, 0 or more")

  const patterns = (accept ?? "")
    .split(",")
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean)

  const accepted: File[] = []
  const rejected: FileRejection[] = []
  for (const file of files) {
    if (patterns.length > 0 && !patterns.some((p) => matches(file, p)))
      rejected.push({ file, reason: "type" })
    else if (maxSize !== undefined && file.size > maxSize) rejected.push({ file, reason: "size" })
    else if (maxFiles !== undefined && accepted.length >= maxFiles)
      rejected.push({ file, reason: "count" })
    else accepted.push(file)
  }
  return { accepted, rejected }
}

function matches(file: File, pattern: string): boolean {
  if (pattern.startsWith(".")) return file.name.toLowerCase().endsWith(pattern)
  const type = file.type.toLowerCase()
  if (pattern.endsWith("/*")) return type.startsWith(pattern.slice(0, -1))
  return type === pattern
}
