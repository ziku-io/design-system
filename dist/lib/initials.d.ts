/**
 * The one or two letters an avatar falls back to.
 *
 * It lived privately inside `AppShell` and twice more in one consumer, which
 * is three chances to disagree about the same two letters. First and last, not
 * first two: "Maria de Sousa Pinto" is MP to a reader and MD to a `slice(0, 2)`.
 *
 * ponytail: `Array.from`, so a name in a script outside the BMP does not get
 * half a code point. No transliteration and no honorific stripping — both are
 * language-specific, and this has to work in every language at once.
 */
export declare function initials(name: string): string;
