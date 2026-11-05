/* Light scroll helpers with no dependencies, safe to import anywhere.
   The heavy motion libraries (GSAP, Lenis) live in ./motion.js and are
   loaded on demand. */

/* The single Lenis instance when smooth scrolling is on (desktop only), so
   page changes and anchors move it instead of fighting it. */
export const lenisStore = { current: null };

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Smooth scrolling and scroll-scrubbed effects are for mouse-and-trackpad
   screens; phones keep native touch scrolling. */
export const isDesktopPointer = () =>
  window.matchMedia("(min-width: 861px) and (pointer: fine)").matches;

export function scrollToTop() {
  if (lenisStore.current) lenisStore.current.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

export function scrollToElement(el) {
  if (lenisStore.current) lenisStore.current.scrollTo(el, { offset: -96, duration: 1.2 });
  else el.scrollIntoView({ block: "start", behavior: "smooth" });
}

/* Re-measure scroll-driven effects after layout changes, if they're loaded. */
export function refreshScrollEffects() {
  import("./motion.js").then((m) => m.ScrollTrigger.refresh()).catch(() => {});
}
