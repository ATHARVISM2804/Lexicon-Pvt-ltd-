import { useEffect, useId, useRef, useState } from "react";
import styles from "./Seal.module.css";

/* Round seal for the footer: the Lexicon mark ringed by the firm's name and
   motto. The ring text is fitted to the circle with textLength so it closes
   evenly whatever the font metrics. When the footer comes into view the
   rings and the monogram draw themselves in, then the name fades round. */
export default function Seal({ className = "" }) {
  const ring = useId();
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setDrawn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`${styles.seal} ${drawn ? styles.drawn : ""} ${className}`}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Lexicon One Enterprises — Innovate and Lead"
    >
      <defs>
        <path id={ring} d="M32 32m-24.2 0a24.2 24.2 0 1 1 48.4 0a24.2 24.2 0 1 1-48.4 0" />
      </defs>
      <circle className={styles.stroke} cx="32" cy="32" r="31" pathLength="1" strokeWidth="0.7" />
      <circle className={styles.stroke} cx="32" cy="32" r="29.6" pathLength="1" strokeWidth="0.3" style={{ "--i": 1 }} />
      <circle className={styles.stroke} cx="32" cy="32" r="19.6" pathLength="1" strokeWidth="0.4" style={{ "--i": 2 }} />
      <text className={styles.text} fontFamily="var(--font-sans)" fontWeight="600" fontSize="3.5" fill="currentColor">
        <textPath href={`#${ring}`} textLength="150" lengthAdjust="spacing">
          LEXICON ONE ENTERPRISES ✦ INNOVATE AND LEAD ✦
        </textPath>
      </text>
      <g transform="translate(32 32) scale(0.6) translate(-32.5 -31.5)">
        <path
          className={styles.mark}
          d="M28 16H32V44.8H42.6V41.2L44 40V47H24.4V45.8H28V19.8L21 23.4V21.2Z"
          pathLength="1"
        />
      </g>
    </svg>
  );
}
