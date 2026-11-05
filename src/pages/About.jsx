import { useRef } from "react";
import { principles } from "../data/sectors.js";
import { leadership } from "../data/leadership.js";
import Hero from "../components/sections/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import SwipeDots from "../components/ui/SwipeDots.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Figure from "../components/ui/Figure.jsx";
import Icon from "../components/ui/Icon.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./About.module.css";

export default function About() {
  const principlesRef = useRef(null);
  usePageMeta(
    "About — Lexicon One Enterprises",
    "Lexicon One Enterprises is an asset management firm in Deerfield, Illinois, managing financial holdings, real estate, and automotive assets for long-term value.",
  );

  return (
    <>
      <Hero
        eyebrow="About the firm"
        title="Built for the long term"
        lede="Lexicon One Enterprises is a private asset management firm based in Deerfield, Illinois, led by its founder and president, Jon Stewart."
        image="/images/bg-rotunda.jpg"
      />

      {/* Narrative */}
      <section className="section">
        <div className="container">
          <div className={styles.narrative}>
            <Reveal>
              <p className={styles.eyebrow}>Who we are</p>
            </Reveal>
            <Reveal delay={100}>
              <p className={styles.lead}>
                We buy good assets, look after them closely, and hold them for
                the long term.
              </p>
              <p className={styles.text}>
                Lexicon One manages a portfolio across three sectors: financial
                holdings, real estate, and automotive assets. Each sector is
                managed on its own terms, and every asset is held to the same
                standard: it has to perform today and grow in value over time.
              </p>
              <p className={styles.text}>
                Alongside this, our media studio invests in and produces
                projects across video, social, and audio platforms.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The team */}
      <section className="section sectionTint" id="team">
        <div className="container">
          <SectionHeading
            eyebrow="The team"
            title="Who leads Lexicon One"
            intro="A senior team covering the firm's capital decisions and how its work reaches the world."
          />

          <ul className={styles.teamGrid}>
            {leadership.map((person, i) => (
              <Reveal
                as="li"
                className={styles.card}
                key={person.id}
                delay={i * 90}
              >
                <div className={styles.portrait}>
                  {person.portrait ? (
                    <Figure
                      src={person.portrait}
                      alt={person.name}
                      sizes="180px"
                    />
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

      {/* Motto */}
      <section className="section sectionDark">
        <div className={`container ${styles.mottoInner}`}>
          <Reveal variant="left">
            <p className={styles.eyebrowGold}>The motto</p>
            <h2 className={styles.mottoTitle}>Innovate and Lead.</h2>
          </Reveal>
          <Reveal delay={100} variant="right" className={styles.mottoBody}>
            <p className={styles.mottoText}>
              Two words that describe how we work: find opportunities others
              have missed, then act on them with confidence.
            </p>
            <div className={styles.mottoSplit}>
              <div>
                <h3 className={styles.mottoSub}>Innovate</h3>
                <p className={styles.mottoText}>
                  Look for value in places others overlook, and try new ways of
                  putting capital to work.
                </p>
              </div>
              <div>
                <h3 className={styles.mottoSub}>Lead</h3>
                <p className={styles.mottoText}>
                  Move first and stand behind our decisions, while keeping risk
                  sensible and reporting honestly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Principles"
            title="What guides every decision"
            intro="Four principles behind how we invest, manage, and report."
          />
          <div
            className={`${styles.principleGrid} swipe-row`}
            ref={principlesRef}
          >
            {principles.map((item, i) => (
              <Reveal
                className={styles.principle}
                key={item.title}
                delay={i * 80}
              >
                <span className={styles.principleMark} aria-hidden="true" />
                <span className={styles.principleIcon}>
                  <Icon name={item.icon} size={26} />
                </span>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleText}>{item.desc}</p>
              </Reveal>
            ))}
          </div>
          <SwipeDots
            targetRef={principlesRef}
            count={principles.length}
            label="Principle"
          />
        </div>
      </section>

      {/* Location */}
      <section className="section sectionTint">
        <div className={`container ${styles.placeInner}`}>
          <Reveal className={styles.placeFigure} variant="wipe">
            <Figure
              src="/images/chicago.jpg"
              alt="The Chicago skyline"
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal className={styles.placeBody} variant="right" delay={100}>
            <p className={styles.eyebrow}>Where we work</p>
            <h2 className={styles.placeTitle}>Deerfield, Illinois</h2>
            <p className={styles.text}>
              Our office is in Deerfield, just north of Chicago: close to the
              city's financial and property markets, with room to think long
              term.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="What we own, and how we hold it."
        text="See each area of ownership: what we buy, how we manage it, and how long we keep it."
        label="View the portfolio"
        to="/portfolio"
      />
    </>
  );
}
