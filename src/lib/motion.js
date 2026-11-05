import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/* The single Lenis instance, so page changes and anchors can move it
   instead of fighting it with window.scrollTo. */
export const lenisStore = { current: null };

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Smooth scrolling driven from GSAP's ticker, so ScrollTrigger and Lenis
   read the same scroll position on the same frame. Returns a teardown. */
export function startSmoothScroll() {
  if (prefersReducedMotion()) return () => {};
  const lenis = new Lenis({ lerp: 0.1, autoRaf: false });
  lenisStore.current = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenisStore.current = null;
  };
}

export function scrollToTop() {
  if (lenisStore.current) lenisStore.current.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

export function scrollToElement(el) {
  if (lenisStore.current) lenisStore.current.scrollTo(el, { offset: -96, duration: 1.2 });
  else el.scrollIntoView({ block: "start", behavior: "smooth" });
}
