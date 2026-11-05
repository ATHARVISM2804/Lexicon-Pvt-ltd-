import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenisStore } from "./scroll.js";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/* Smooth scrolling driven from GSAP's ticker, so ScrollTrigger and Lenis
   read the same scroll position on the same frame. Returns a teardown. */
export function startSmoothScroll() {
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
