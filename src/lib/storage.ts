/**
 * Where the library keeps a user's own preferences in the browser.
 *
 * Everything the library stores is namespaced, so two Ziku apps served from the
 * same origin do not read each other's saved views. The default namespace is
 * the library's own name; an app that already owns a namespace, or that is
 * replacing something it used to store itself, installs its own once at start
 * up and every key follows.
 *
 * ponytail: a module value with a setter, the same shape as `installTheme` in
 * the apps. No provider: this is read outside the tree as often as inside it,
 * and a key is not something a subtree should be able to disagree about.
 */
const DEFAULT_PREFIX = "ziku"

let prefix = DEFAULT_PREFIX

/**
 * Call once, before the first render. Two calls with the same prefix are a hot
 * reload and harmless; two with different prefixes would leave half the app
 * reading a key the other half never writes, which only shows up on a refresh.
 */
export function setStoragePrefix(next: string): void {
  if (!next || next.includes(".")) {
    throw new Error(`Storage prefix must be a non-empty string with no dots, got "${next}"`)
  }
  if (prefix !== DEFAULT_PREFIX && prefix !== next) {
    throw new Error(`Storage prefix is already "${prefix}", cannot change it to "${next}"`)
  }
  prefix = next
}

/** The prefix in force. Exported for tests and for an app that has to build a
 *  key the library does not build for it. */
export const storagePrefix = (): string => prefix

/** `storageKey("views", "clients")` -> `"ziku.views.clients"`. */
export const storageKey = (...parts: string[]): string => [prefix, ...parts].join(".")
