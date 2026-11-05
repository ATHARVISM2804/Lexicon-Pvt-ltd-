import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger, scrollToTop } from "../../lib/motion.js";
import styles from "./PageTransition.module.css";

/* Sweeps a navy curtain up over the old page, swaps behind it, then draws
   it away. Without this, route changes are an abrupt cut.

   `children` is a function receiving the location to render. It has to work
   this way: <Routes> reads the router context directly, so simply holding a
   stale element would not hold the old page — React re-renders it on context
   change regardless. Pinning <Routes location={...}> is what actually keeps
   the outgoing page on screen until the curtain covers it. */
export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [phase, setPhase] = useState("idle"); // idle | covering | revealing

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) {
      // Same page, different hash or search — no transition needed.
      if (location !== displayLocation) setDisplayLocation(location);
      return undefined;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setDisplayLocation(location);
      if (!location.hash) scrollToTop();
      return undefined;
    }

    setPhase("covering");

    const swap = window.setTimeout(() => {
      setDisplayLocation(location);
      if (!location.hash) scrollToTop();
      setPhase("revealing");
      // The new page has different heights; re-measure scroll animations.
      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    }, 420);

    const settle = window.setTimeout(() => setPhase("idle"), 1000);

    return () => {
      window.clearTimeout(swap);
      window.clearTimeout(settle);
    };
  }, [location, displayLocation]);

  return (
    <>
      <div
        className={`${styles.curtain} ${
          phase === "covering" ? styles.cover : ""
        } ${phase === "revealing" ? styles.reveal : ""}`}
        aria-hidden="true"
      />
      <div
        className={`${styles.page} ${
          phase === "revealing" ? styles.pageIn : ""
        }`}
      >
        {children(displayLocation)}
      </div>
    </>
  );
}
