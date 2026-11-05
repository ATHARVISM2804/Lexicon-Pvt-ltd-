import { contact } from "../data/site.js";
import Button from "../components/ui/Button.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./NotFound.module.css";

/* A quiet dead end: the monogram, one sentence, and two ways on. */
export default function NotFound() {
  usePageMeta("Page not found — Lexicon One Enterprises");

  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <svg className={styles.mark} viewBox="0 0 64 64" aria-hidden="true">
          <rect x="4" y="4" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="0.9" />
          <path d="M28 16H32V44.8H42.6V41.2L44 40V47H24.4V45.8H28V19.8L21 23.4V21.2Z" fill="currentColor" />
        </svg>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page could not be found.</h1>
        <p className={styles.text}>
          The address may have changed. Start again from the home page, or call
          us on {contact.phoneDisplay}.
        </p>
        <div className={styles.actions}>
          <Button to="/" variant="light">Return home</Button>
          <Button to="/contact" variant="ghost">Private inquiries</Button>
        </div>
      </div>
    </section>
  );
}
