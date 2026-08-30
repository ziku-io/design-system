/**
 * Call once, before the first render. Two calls with the same prefix are a hot
 * reload and harmless; two with different prefixes would leave half the app
 * reading a key the other half never writes, which only shows up on a refresh.
 */
export declare function setStoragePrefix(next: string): void;
/** The prefix in force. Exported for tests and for an app that has to build a
 *  key the library does not build for it. */
export declare const storagePrefix: () => string;
/** `storageKey("views", "clients")` -> `"ziku.views.clients"`. */
export declare const storageKey: (...parts: string[]) => string;
