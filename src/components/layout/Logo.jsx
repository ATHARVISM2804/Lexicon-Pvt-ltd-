import styles from "./Logo.module.css";

/* The mark is a stacked monogram: LEXICON over ONE, divided by a gold rule.
   `tone` switches it for navy backgrounds. */
export default function Logo({ tone = "dark" }) {
  return (
    <span className={`${styles.logo} ${tone === "light" ? styles.light : ""}`}>
      <span className={styles.name}>Lexicon</span>
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.sub}>One Enterprises</span>
    </span>
  );
}
