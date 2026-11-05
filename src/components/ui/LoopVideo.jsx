import { useEffect, useRef, useState } from "react";
import Figure from "./Figure.jsx";
import styles from "./LoopVideo.module.css";

/* A short silent film loop with its poster underneath. The film loads
   only as it nears the screen and pauses when scrolled away, so it costs
   nothing until it is seen. `src` is the H.264 file; an `.hevc.mp4` twin
   beside it is offered first. */
export default function LoopVideo({ src, poster, sizes = "100vw", className = "" }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || !("IntersectionObserver" in window)) {
      setLoad(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (entry.isIntersecting) {
          setLoad(true);
          if (v) v.play().catch(() => {});
        } else if (v) {
          v.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  // iOS needs the muted attribute itself, not just the property.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.play().catch(() => {});
  }, [load]);

  return (
    <span ref={wrapRef} className={`${styles.wrap} ${className}`}>
      <Figure src={poster} alt="" sizes={sizes} />
      {load ? (
        <video ref={videoRef} className={styles.video} autoPlay muted loop playsInline>
          <source src={src.replace(/\.mp4$/, ".hevc.mp4")} type='video/mp4; codecs="hvc1"' />
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </span>
  );
}
