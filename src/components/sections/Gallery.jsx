import Reveal from "../ui/Reveal.jsx";
import Figure from "../ui/Figure.jsx";
import styles from "./Gallery.module.css";

/* Mosaic of portfolio imagery. The first tile spans two columns so the
   grid reads as a composition rather than a row of thumbnails. */
export default function Gallery({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <Reveal
          className={`${styles.tile} ${i === 0 ? styles.wide : ""}`}
          variant="wipe"
          delay={i * 80}
          key={item.src}
        >
          <Figure src={item.src} alt={item.alt} />
          <span className={styles.veil} aria-hidden="true" />
          <span className={styles.caption}>{item.caption}</span>
        </Reveal>
      ))}
    </div>
  );
}
