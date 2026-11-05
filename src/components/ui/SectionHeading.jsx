import styles from "./SectionHeading.module.css";
import Reveal from "./Reveal.jsx";
import SplitText from "./SplitText.jsx";

export default function SectionHeading({ eyebrow, title, intro, align }) {
  return (
    <div className={`${styles.head} ${align === "center" ? styles.center : ""}`}>
      {eyebrow ? (
        <Reveal as="p" className={styles.eyebrow} variant="fade">
          {eyebrow}
        </Reveal>
      ) : null}
      <div className={styles.row}>
        <div>
          <SplitText as="h2" text={title} className={styles.title} />
          <Reveal as="span" className={styles.rule} variant="fade" delay={350} aria-hidden="true" />
        </div>
        {intro ? (
          <Reveal as="p" className={styles.intro} delay={140}>
            {intro}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
