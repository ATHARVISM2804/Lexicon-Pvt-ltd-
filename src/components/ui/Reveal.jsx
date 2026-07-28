import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

/* Scroll-triggered entrance.
   variant: rise | fade | scale | wipe | left | right

   Content must never be left hidden, so this errs toward showing: anything
   already on screen at mount is revealed immediately, and a timeout releases
   anything the observer has not reported on. A missing animation is a far
   better failure than invisible content. */
export default function Reveal({
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }

    // Already in view on first paint — no need to wait for a scroll.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);

    const failsafe = window.setTimeout(() => setShown(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${styles[variant]} ${
        shown ? styles.shown : ""
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
