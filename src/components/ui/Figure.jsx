import { useEffect, useRef, useState } from "react";
import { placeholders } from "../../data/placeholders.js";
import styles from "./Figure.module.css";

/* An image that resolves out of its own blurred thumbnail rather than
   popping in. The placeholder is inlined, so there is something on screen
   the moment the layout paints. */
export default function Figure({
  src,
  alt = "",
  className = "",
  priority = false,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const blur = placeholders[src];
  // Every photograph in /images ships with a WebP twin beside the JPEG.
  const webp = /^\/images\/.+\.jpg$/.test(src)
    ? src.replace(/\.jpg$/, ".webp")
    : null;

  // Covers the case where the browser has the image cached and fires load
  // before React attaches the handler.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <span
      className={`${styles.figure} ${className}`}
      style={blur ? { backgroundImage: `url(${blur})` } : undefined}
    >
      <picture className={styles.picture}>
        {webp ? <source srcSet={webp} type="image/webp" /> : null}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${styles.img} ${loaded ? styles.loaded : ""}`}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setLoaded(true)}
          {...rest}
        />
      </picture>
    </span>
  );
}
