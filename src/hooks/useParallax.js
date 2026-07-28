import { useEffect, useRef } from "react";
import useReducedMotion from "./useReducedMotion.js";

/* Drifts an element against the scroll to give background images depth.
   Work happens in a rAF frame and only while the element is on screen. */
/* `buffer` must match the negative inset the CSS gives the moving layer
   (e.g. `inset: -18% 0` → 0.18). The shift is clamped to it so the image
   can never slide far enough to expose the edge of its container. */
export default function useParallax(strength = 0.18, buffer = 0.18) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return undefined;

    let visible = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      const parent = el.parentElement;
      const rect = parent.getBoundingClientRect();
      // Distance of the section's centre from the viewport centre.
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const limit = parent.offsetHeight * buffer;
      const shift = Math.max(-limit, Math.min(limit, -offset * strength));
      el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) update();
      },
      { rootMargin: "120px 0px" }
    );
    observer.observe(el.parentElement);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      el.style.transform = "";
    };
  }, [strength, buffer, reduced]);

  return ref;
}
