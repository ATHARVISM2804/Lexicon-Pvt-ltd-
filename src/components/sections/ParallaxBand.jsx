import useParallax from "../../hooks/useParallax.js";
import Reveal from "../ui/Reveal.jsx";
import Figure from "../ui/Figure.jsx";
import LoopVideo from "../ui/LoopVideo.jsx";
import styles from "./ParallaxBand.module.css";

/* A full-bleed statement over a drifting photograph. Used sparingly —
   it is the loudest device on the site. */
export default function ParallaxBand({
  eyebrow,
  quote,
  attribution,
  image,
  video,
  children,
}) {
  const parallaxRef = useParallax(0.22, 0.18);

  return (
    <section className={styles.band}>
      <div className={styles.media} aria-hidden="true">
        <div className={styles.mediaInner} ref={parallaxRef}>
          {video ? <LoopVideo src={video} poster={image} /> : <Figure src={image} alt="" />}
        </div>
        <div className={styles.scrim} />
      </div>

      <div className={`container ${styles.content}`}>
        {eyebrow ? (
          <Reveal as="p" className={styles.eyebrow} variant="fade">
            {eyebrow}
          </Reveal>
        ) : null}
        {quote ? (
          <Reveal as="blockquote" className={styles.quote} delay={80}>
            {quote}
          </Reveal>
        ) : null}
        {attribution ? (
          <Reveal as="p" className={styles.attribution} delay={160}>
            {attribution}
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
