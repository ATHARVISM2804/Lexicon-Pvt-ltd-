import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./CtaSection.module.css";

export default function CtaSection({
  title = "Start a conversation with the firm.",
  text = "Questions about the portfolio, the media studio, or a potential partnership are all welcome.",
  label = "Contact Lexicon One",
  to = "/contact",
}) {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className={styles.title}>{title}</h2>
        </Reveal>
        <Reveal delay={100} className={styles.side}>
          <p className={styles.text}>{text}</p>
          <Button to={to}>{label}</Button>
        </Reveal>
      </div>
    </section>
  );
}
