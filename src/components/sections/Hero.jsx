import { useEffect, useRef, useState } from "react";
import useParallax from "../../hooks/useParallax.js";
import { isDesktopPointer, prefersReducedMotion } from "../../lib/scroll.js";
import Figure from "../ui/Figure.jsx";
import styles from "./Hero.module.css";

/* Full-bleed hero: photograph (or a looping film over it) behind a navy
   gradient, with the headline stack animating in on load. The photograph
   stays underneath as the film's poster. */
export default function Hero({
  eyebrow,
  title,
  lede,
  image,
  video,
  videoSmall,
  posterSmall,
  alt = "",
  actions,
  size = "interior",
}) {
  const parallaxRef = useParallax(0.12, 0.12);
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const frameRef = useRef(null);
  const contentRef = useRef(null);
  // Phones get the lighter encode; decided once, after mount.
  const [videoSrc, setVideoSrc] = useState(null);
  // Chosen on first render so a phone never fetches the landscape still.
  const [poster] = useState(() =>
    posterSmall && window.matchMedia("(max-width: 860px)").matches ? posterSmall : image
  );
  const videoRef = useRef(null);

  /* Signature move on the home film: as the page scrolls on, the film
     draws in to a gold-framed window and the headline lifts away. */
  useEffect(() => {
    if (!video || size !== "home" || prefersReducedMotion() || !isDesktopPointer()) {
      return undefined;
    }
    let ctx;
    let cancelled = false;
    import("../../lib/motion.js").then(({ gsap }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
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
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [video, size]);

  // Phones get the portrait cut and its own poster; decided once, after mount.
  /* The poster is the first paint; the film starts once the page has
     finished loading, so it never competes with the content for bandwidth. */
  useEffect(() => {
    if (!video) return undefined;
    const small = window.matchMedia("(max-width: 860px)").matches;
    const start = () => setVideoSrc(small && videoSmall ? videoSmall : video);
    if (document.readyState === "complete") {
      const id = window.setTimeout(start, 200);
      return () => window.clearTimeout(id);
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, [video, videoSmall]);

  /* Make autoplay stick everywhere. React sets `muted` only as a property,
     and iOS Safari will not autoplay without the attribute, so set both and
     start playback explicitly. If the device still refuses (Low Power Mode),
     start on the first touch, click, scroll or key press, and resume
     whenever the tab comes back into view. */
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !videoSrc) return undefined;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("muted", "");
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      const attempt = el.play();
      if (attempt && attempt.catch) attempt.catch(() => {});
    };
    const kick = () => {
      tryPlay();
      if (!el.paused) removeKicks();
    };
    const events = ["touchstart", "pointerdown", "scroll", "keydown"];
    const removeKicks = () =>
      events.forEach((e) => window.removeEventListener(e, kick));
    events.forEach((e) => window.addEventListener(e, kick, { passive: true }));
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    tryPlay();

    return () => {
      removeKicks();
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [videoSrc]);



  return (
    <section
      ref={sectionRef}
      className={`${styles.hero} ${styles[size]} ${video ? styles.hasVideo : ""}`}
    >
      <div className={styles.media} ref={mediaRef} aria-hidden="true">
        <div className={styles.mediaInner} ref={parallaxRef}>
          <div className={styles.pointerLayer}>
            <Figure src={poster} alt={alt} priority />
            {videoSrc ? (
              <video
                ref={videoRef}
                className={styles.video}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                {/* HEVC first (about a third smaller where supported),
                    H.264 for every other browser. */}
                <source src={videoSrc.replace(/\.mp4$/, ".hevc.mp4")} type='video/mp4; codecs="hvc1"' />
                <source src={videoSrc} type="video/mp4" />
              </video>
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
