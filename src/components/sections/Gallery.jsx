import { useRef } from "react";
import Reveal from "../ui/Reveal.jsx";
import SwipeDots from "../ui/SwipeDots.jsx";
import Figure from "../ui/Figure.jsx";
import styles from "./Gallery.module.css";

/* Mosaic of portfolio imagery. The first and last tiles span two columns,
   so six images close every row on both the 3- and 2-column grids. */
export default function Gallery({ items }) {
  const rowRef = useRef(null);
  return (
    <>
      <div className={`${styles.grid} swipe-row`} ref={rowRef}>
        {items.map((item, i) => (
          <Reveal
            className={`${styles.tile} ${i === 0 || i === items.length - 1 ? styles.wide : ""}`}
            variant="wipe"
            delay={i * 80}
            key={item.src}
          >
            <Figure
              src={item.src}
              alt={item.alt}
              sizes="(max-width: 900px) 50vw, 33vw"
            />
            <span className={styles.veil} aria-hidden="true" />
            <span className={styles.caption}>{item.caption}</span>
          </Reveal>
        ))}
      </div>
      <SwipeDots targetRef={rowRef} count={items.length} label="Photo" />
    </>
  );
}
