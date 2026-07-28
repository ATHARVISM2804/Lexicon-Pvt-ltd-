import { useEffect, useRef } from "react";
import useParallax from "../../hooks/useParallax.js";
import Figure from "../ui/Figure.jsx";
import styles from "./Hero.module.css";

/* Full-bleed hero: photograph behind a navy gradient, with the headline
   stack animating in on load. The image also drifts a little with the
   pointer, which gives the picture depth without asking for attention. */
export default function Hero({
  eyebrow,
  title,
  lede,
  image,
  alt = "",
  actions,
  size = "interior",
}) {
  const parallaxRef = useParallax(0.12, 0.12);
  const sectionRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = pointerRef.current;
    if (!section || !layer) return undefined;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return undefined;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const apply = () => {
      frame = 0;
      layer.style.transform = `translate3d(${targetX.toFixed(
        2
      )}px, ${targetY.toFixed(2)}px, 0)`;
    };

    const onMove = (event) => {
      const rect = section.getBoundingClientRect();
      // -1 … 1 across the section, scaled to a few pixels of travel.
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * -18;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * -12;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.hero} ${styles[size]}`}>
      <div className={styles.media} aria-hidden="true">
        <div className={styles.mediaInner} ref={parallaxRef}>
          <div className={styles.pointerLayer} ref={pointerRef}>
            <Figure src={image} alt={alt} priority />
          </div>
        </div>
        <div className={styles.scrim} />
        <div className={styles.grain} />
      </div>

      <div className={`container ${styles.content}`}>
        {eyebrow ? (
          <p className={`${styles.eyebrow} ${styles.enter}`}>{eyebrow}</p>
        ) : null}
        <h1 className={`${styles.title} ${styles.enter}`}>{title}</h1>
        {lede ? (
          <p className={`${styles.lede} ${styles.enter}`}>{lede}</p>
        ) : null}
        {actions ? (
          <div className={`${styles.actions} ${styles.enter}`}>{actions}</div>
        ) : null}
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
