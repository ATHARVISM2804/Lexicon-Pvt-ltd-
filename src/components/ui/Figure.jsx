import { useEffect, useRef, useState } from "react";
import { placeholders } from "../../data/placeholders.js";
import { imageSizes } from "../../data/imageSizes.js";
import styles from "./Figure.module.css";

/* An image that resolves out of its own blurred thumbnail rather than
   popping in (except `priority` images, which show at once: they are the
   page's main content). The placeholder is inlined, so there is something on screen
   the moment the layout paints. */
export default function Figure({
  src,
  alt = "",
  className = "",
  priority = false,
  // How wide the image renders, so the browser picks the right file.
  sizes = "100vw",
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const blur = placeholders[src];
  // Every photograph in /images ships as WebP at several widths beside the
  // JPEG (see scripts/image-sizes.mjs).
  const widths = imageSizes[src];
  const webp = widths
    ? widths
        .map((w, i) =>
          i === widths.length - 1
            ? `${src.replace(/\.jpg$/, ".webp")} ${w}w`
            : `${src.replace(/\.jpg$/, `-${w}.webp`)} ${w}w`
        )
        .join(", ")
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
        {webp ? <source srcSet={webp} sizes={sizes} type="image/webp" /> : null}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${styles.img} ${loaded || priority ? styles.loaded : ""}`}
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
