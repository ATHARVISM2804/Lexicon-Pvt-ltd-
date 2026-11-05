import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./CtaSection.module.css";

export default function CtaSection({
  title = "Private inquiries.",
  text = "Whether you have a question, an opportunity, or a partnership in mind, we would be glad to hear from you. Every inquiry is treated in confidence.",
  label = "Begin a conversation",
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
