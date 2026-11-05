import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./SplitText.module.css";

/* Reveals a headline word by word, each word rising out of its own mask.
   Takes a plain string so the split is predictable; the whole phrase stays
   in the accessibility tree as one label, and the pieces are hidden from it. */
export default function SplitText({
  as: Tag = "h2",
  text,
  className = "",
  delay = 0,
  stagger = 45,
  immediate = false,
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || immediate || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    const failsafe = window.setTimeout(() => setShown(true), 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [immediate]);

  const words = String(text).split(" ");

  return (
    <Tag
      ref={ref}
      className={`${styles.split} ${shown ? styles.shown : ""} ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {i > 0 ? " " : null}
          <span className={styles.mask} aria-hidden="true">
            <span
              className={styles.word}
              style={{ transitionDelay: `${delay + i * stagger}ms` }}
            >
              {word}
            </span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
