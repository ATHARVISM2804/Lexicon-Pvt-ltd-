import Reveal from "../ui/Reveal.jsx";
import Figure from "../ui/Figure.jsx";
import styles from "./SectorFeature.module.css";

/* A sector presented as an image paired with its mandate. Alternating
   `flip` puts the image on the opposite side so the page reads as a rhythm. */
export default function SectorFeature({ sector, index, flip }) {
  return (
    <article
      className={`${styles.feature} ${flip ? styles.flip : ""}`}
      id={sector.id}
    >
      <Reveal className={styles.figure}>
        <Figure src={sector.image} alt={sector.alt} />
      </Reveal>

      <Reveal className={styles.body} delay={100}>
        <p className={styles.label}>
          <span className={styles.index}>{String(index).padStart(2, "0")}</span>
          {sector.label}
        </p>
        <h2 className={styles.title}>{sector.title}</h2>
        <p className={styles.summary}>{sector.summary}</p>
        <p className={styles.text}>{sector.body}</p>

        <dl className={styles.points}>
          {sector.points.map((point) => (
            <div className={styles.point} key={point.term}>
              <dt>{point.term}</dt>
              <dd>{point.desc}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </article>
  );
}
