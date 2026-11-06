// jsdom lacks the browser APIs Radix relies on.
globalThis.matchMedia ??= ((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
})) as typeof globalThis.matchMedia

globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Never fires here: a jsdom layout has no scrolling, so a story with a paged
// table renders its sentinel row and stops rather than looping on `more()`.
globalThis.IntersectionObserver ??= class {
  root = null
  rootMargin = ""
  thresholds = []
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
} as unknown as typeof globalThis.IntersectionObserver

if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false
  Element.prototype.setPointerCapture = () => {}
  Element.prototype.releasePointerCapture = () => {}
}
Element.prototype.scrollIntoView ??= () => {}

// jsdom has no layout, so every box measures 0×0, and Recharts' responsive
// container warns about a zero-size chart on mount, which the story smoke test
// counts as a failure. Give that one container a size; everything else keeps
// jsdom's zeros, which DataTable's windowing relies on reading as "not laid out".
const measure = Element.prototype.getBoundingClientRect
Element.prototype.getBoundingClientRect = function (this: Element) {
  if (this.classList.contains("recharts-responsive-container")) return new DOMRect(0, 0, 320, 200)
  return measure.call(this)
}

// jsdom has no canvas and logs "Not implemented" on every `getContext`, which
// the story smoke test reads as an error. Null is what a browser returns for a
// context it cannot make, so canvas code already handles it.
HTMLCanvasElement.prototype.getContext = (() =>
  null) as typeof HTMLCanvasElement.prototype.getContext
