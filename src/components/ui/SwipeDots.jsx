import { useEffect, useState } from "react";
import styles from "./SwipeDots.module.css";

/* Progress dots for a horizontal swipe row (phones). Follows the row's
   scroll position, and a tap on a dot scrolls to that card. Hidden where
   the row is not scrollable (desktop layouts). */
export default function SwipeDots({ targetRef, count, label = "Slide" }) {
  const [active, setActive] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return undefined;
    const update = () => {
      setScrollable(el.scrollWidth > el.clientWidth + 4);
      const items = [...el.children];
      const left = el.scrollLeft + el.clientWidth * 0.35;
      let idx = 0;
      items.forEach((item, i) => {
        if (item.offsetLeft - el.offsetLeft <= left) idx = i;
      });
      setActive(idx);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetRef]);

  if (!scrollable) return null;

  const go = (i) => {
    const el = targetRef.current;
    const item = el?.children[i];
    if (item) el.scrollTo({ left: item.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className={styles.dots}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`${styles.dot} ${i === active ? styles.active : ""}`}
          aria-label={`${label} ${i + 1} of ${count}`}
          aria-current={i === active ? "true" : undefined}
          onClick={() => go(i)}
        />
      ))}
    </div>
  );
}
