import styles from "./Logo.module.css";

/* The mark joins the L of Lexicon and the 1 of One in a single letter: the
   L's upright carries the flag of a numeral one. Gold on a navy tile; on
   navy backgrounds (`tone="light"`) the tile drops away and the frame stays. */
export default function Logo({ tone = "dark" }) {
  return (
    <span className={`${styles.logo} ${tone === "light" ? styles.light : ""}`}>
      <svg className={styles.mark} viewBox="0 0 64 64" aria-hidden="true">
        <rect className={styles.tile} width="64" height="64" />
        <rect x="4" y="4" width="56" height="56" fill="none" stroke="var(--gold)" strokeWidth="0.9" />
        <path d="M28 16H32V44.8H42.6V41.2L44 40V47H24.4V45.8H28V19.8L21 23.4V21.2Z" fill="var(--gold)" />
      </svg>
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.words}>
        <span className={styles.name}>Lexicon</span>
        <span className={styles.sub}>One Enterprises</span>
      </span>
    </span>
  );
}
