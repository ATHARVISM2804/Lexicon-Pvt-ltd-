import { useEffect, useRef, useState } from "react";
import useParallax from "../../hooks/useParallax.js";
import { gsap, prefersReducedMotion } from "../../lib/motion.js";
import Figure from "../ui/Figure.jsx";
import styles from "./Hero.module.css";

/* Full-bleed hero: photograph (or a looping film over it) behind a navy
   gradient, with the headline stack animating in on load. The media also
   drifts a little with the pointer, which gives it depth without asking
   for attention. The photograph stays underneath as the film's poster and
   as the fallback when motion is reduced. */
export default function Hero({
  eyebrow,
  title,
  lede,
  image,
  video,
  videoSmall,
  alt = "",
  actions,
  size = "interior",
}) {
  const parallaxRef = useParallax(0.12, 0.12);
  const sectionRef = useRef(null);
  const pointerRef = useRef(null);
  const mediaRef = useRef(null);
  const frameRef = useRef(null);
  const contentRef = useRef(null);
  // Phones get the lighter encode; decided once, after mount.
  const [videoSrc, setVideoSrc] = useState(null);

  /* Signature move on the home film: as the page scrolls on, the film
     draws in to a gold-framed window and the headline lifts away. */
  useEffect(() => {
    if (!video || size !== "home" || prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      };
      gsap.fromTo(
        mediaRef.current,
        { clipPath: "inset(0% 0% 0% 0% round 0px)" },
        { clipPath: "inset(7% 5% 7% 5% round 4px)", ease: "none", scrollTrigger }
      );
      gsap.fromTo(
        frameRef.current,
        { inset: "0% 0%", opacity: 0 },
        { inset: "5% 3.6%", opacity: 1, ease: "none", scrollTrigger }
      );
      gsap.to(contentRef.current, { y: -60, opacity: 0, ease: "none", scrollTrigger });
    }, sectionRef);
    return () => ctx.revert();
  }, [video, size]);

  useEffect(() => {
    if (!video) return;
    const small = window.matchMedia("(max-width: 860px)").matches;
    setVideoSrc(small && videoSmall ? videoSmall : video);
  }, [video, videoSmall]);

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
    <section
      ref={sectionRef}
      className={`${styles.hero} ${styles[size]} ${video ? styles.hasVideo : ""}`}
    >
      <div className={styles.media} ref={mediaRef} aria-hidden="true">
        <div className={styles.mediaInner} ref={parallaxRef}>
          <div className={styles.pointerLayer} ref={pointerRef}>
            <Figure src={image} alt={alt} priority />
            {videoSrc ? (
              <video
                className={styles.video}
                src={videoSrc}
                poster={image}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            ) : null}
          </div>
        </div>
        <div className={styles.scrim} />
        <div className={styles.grain} />
      </div>
      {video && size === "home" ? (
        <div className={styles.frame} ref={frameRef} aria-hidden="true" />
      ) : null}

      <div className={`container ${styles.content}`} ref={contentRef}>
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
