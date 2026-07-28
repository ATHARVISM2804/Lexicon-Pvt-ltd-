import Reveal from "../ui/Reveal.jsx";
import styles from "./ProcessTrack.module.css";

/* Numbered because these stages genuinely run in order. */
export default function ProcessTrack({ items, tone = "light" }) {
  return (
    <ol className={`${styles.track} ${tone === "dark" ? styles.dark : ""}`}>
      {items.map((item, i) => (
        <Reveal as="li" className={styles.step} key={item.step} delay={i * 100}>
          <span className={styles.marker} aria-hidden="true" />
          <span className={styles.no}>{item.step}</span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.desc}</p>
        </Reveal>
      ))}
    </ol>
  );
}
