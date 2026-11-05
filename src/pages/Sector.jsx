import { useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { contact } from "../data/site.js";
import { sectors } from "../data/sectors.js";
import Hero from "../components/sections/Hero.jsx";
import Button from "../components/ui/Button.jsx";
import SwipeDots from "../components/ui/SwipeDots.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Figure from "../components/ui/Figure.jsx";
import SectorFeature from "../components/sections/SectorFeature.jsx";
import LineArt from "../components/ui/LineArt.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Sector.module.css";

/* One sector on its own page, opened from the sector cards on Home. */
export default function Sector() {
  const othersRef = useRef(null);
  const { id } = useParams();
  const index = sectors.findIndex((s) => s.id === id);
  const sector = sectors[index];

  usePageMeta(
    sector
      ? `${sector.label} — Lexicon One Enterprises`
      : "Lexicon One Enterprises",
    sector?.summary,
  );

  if (!sector) return <Navigate to="/portfolio" replace />;

  const others = sectors.filter((s) => s.id !== id);

  return (
    <>
      <Hero
        eyebrow="The portfolio"
        title={sector.label}
        lede={sector.summary}
        image={sector.image}
        actions={
          <Button href={`tel:${contact.phoneHref}`} variant="light">
            Call {contact.phoneDisplay}
          </Button>
        }
      />

      <section className="section">
        <div className="container">
          <SectorFeature sector={sector} index={index + 1} detail />
        </div>
      </section>

      {/* The sector's horizon, with its line drawing */}
      <section className="section sectionDark">
        <div className={`container ${styles.band}`}>
          <LineArt name={sector.art} className={styles.art} />
          <Reveal className={styles.bandBody} delay={150}>
            <p className={styles.bandLabel}>How long we hold</p>
            <p className={styles.bandText}>
              {sector.points.find((p) => p.term === "Horizon")?.desc}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Other sectors */}
      <section className="section sectionTint">
        <div className="container">
          <h2 className={styles.title}>Other sectors</h2>
          <div className={`${styles.grid} swipe-row`} ref={othersRef}>
            {others.map((s, i) => (
              <Reveal key={s.id} delay={i * 100} variant="rise">
                <Link to={`/portfolio/${s.id}`} className={styles.card}>
                  <span className={styles.image}>
                    <Figure
                      src={s.image}
                      alt={s.alt}
                      sizes="(max-width: 760px) 40vw, 20vw"
                    />
                  </span>
                  <span className={styles.body}>
                    <span className={styles.label}>{s.label}</span>
                    <span className={styles.name}>{s.title}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <SwipeDots
            targetRef={othersRef}
            count={others.length}
            label="Sector"
          />
          <p className={styles.all}>
            <Link to="/portfolio">See the full portfolio</Link>
          </p>
        </div>
      </section>

      <CtaSection
        title={`Talk to us about ${sector.label.toLowerCase()}.`}
        text="Questions about this sector or a specific opportunity begin with a conversation."
      />
    </>
  );
}
