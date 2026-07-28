import Reveal from "../ui/Reveal.jsx";
import styles from "./FactStrip.module.css";

/* Qualitative facts only. The firm has published no figures, so nothing
   numeric is asserted here. */
export default function FactStrip({ items }) {
  return (
    <div className={styles.strip}>
      {items.map((item, i) => (
        <Reveal className={styles.item} key={item.label} delay={i * 90}>
          <p className={styles.value}>{item.value}</p>
          <p className={styles.label}>{item.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
