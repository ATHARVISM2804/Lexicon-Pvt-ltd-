import styles from "./Marquee.module.css";

/* A continuous band of the firm's disciplines. The list is duplicated so
   the loop has no seam; the copy is hidden from assistive tech. */
export default function Marquee({ items }) {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item}>
              <span className={styles.dot} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <ul className={styles.list} aria-hidden="true">
          {items.map((item) => (
            <li key={`dup-${item}`}>
              <span className={styles.dot} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
