import { leadership, governance } from "../data/leadership.js";
import Hero from "../components/sections/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Figure from "../components/ui/Figure.jsx";
import ProcessTrack from "../components/sections/ProcessTrack.jsx";
import ParallaxBand from "../components/sections/ParallaxBand.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Leadership.module.css";

export default function Leadership() {
  usePageMeta(
    "Leadership — Lexicon One Enterprises",
    "The people who lead Lexicon One Enterprises across financial holdings, real estate, automotive assets, and the media studio."
  );

  return (
    <>
      <Hero
        eyebrow="Leadership"
        title="Accountability, by name"
        lede="Every holding in the portfolio has someone answerable for it — from the first underwrite through to the day it is sold."
        image="/images/leadership.jpg"
      />

      {/* Intro */}
      <section className="section">
        <div className={`container ${styles.intro}`}>
          <Reveal>
            <p className={styles.eyebrow}>How the firm is led</p>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.lead}>
              A diversified book only works if someone owns each part of it
              completely.
            </p>
            <p className={styles.text}>
              Lexicon One is deliberately a small firm. Responsibility for
              capital, and for the standard every holding is measured against,
              sits with the President rather than being diffused across layers
              of committee — and the firm's work is presented by the people who
              actually do it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The team */}
      <section className="section sectionTint">
        <div className="container">
          <SectionHeading
            eyebrow="The team"
            title="Who leads Lexicon One"
            intro="A senior team covering the firm's capital decisions and how its work reaches the world."
          />

          <ul className={styles.grid}>
            {leadership.map((person, i) => (
              <Reveal
                as="li"
                className={styles.card}
                key={person.id}
                delay={i * 90}
              >
                <div className={styles.portrait}>
                  {person.portrait ? (
                    <Figure src={person.portrait} alt={person.name} />
                  ) : (
                    <span className={styles.monogram} aria-hidden="true">
                      {person.initials}
                    </span>
                  )}
                </div>

                <div className={styles.body}>
                  <h3 className={styles.name}>{person.name}</h3>
                  <p className={styles.role}>{person.role}</p>
                  <p className={styles.remit}>{person.remit}</p>
                  {person.phone ? (
                    <a
                      className={styles.phone}
                      href={`tel:${person.phone.replace(/[^\d+]/g, "")}`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5.2 2.5 6.6 5 5.4 6.6a8 8 0 0 0 4 4L11 9.4l2.5 1.4v2.4a1 1 0 0 1-1.1 1A11.5 11.5 0 0 1 2.2 3.6a1 1 0 0 1 1-1.1h2Z"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {person.phone}
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Governance */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Governance"
            title="How decisions are made"
            intro="Three checks that sit between an idea and the firm's capital."
          />
          <ProcessTrack items={governance} />
        </div>
      </section>

      <ParallaxBand
        image="/images/bg-street.jpg"
        eyebrow="The standard"
        quote="Someone's name sits against every position in the book."
      />

      <CtaSection
        title="Speak with the firm."
        text="Questions about the portfolio, the studio, or how a mandate is run are best answered directly."
      />
    </>
  );
}
