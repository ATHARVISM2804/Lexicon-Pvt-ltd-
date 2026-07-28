import { company } from "../data/site.js";
import { principles } from "../data/sectors.js";
import { facts } from "../data/content.js";
import Hero from "../components/sections/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Figure from "../components/ui/Figure.jsx";
import FactStrip from "../components/sections/FactStrip.jsx";
import ParallaxBand from "../components/sections/ParallaxBand.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./About.module.css";

export default function About() {
  usePageMeta(
    "About — Lexicon One Enterprises",
    "Lexicon One Enterprises is an asset management firm in Deerfield, Illinois, managing financial holdings, real estate, and automotive assets for long-term value."
  );

  return (
    <>
      <Hero
        eyebrow="About the firm"
        title="Built for the long term"
        lede="Lexicon One Enterprises manages a diverse portfolio from Deerfield, Illinois — applying a single standard of discipline across every sector it holds."
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
                An asset manager's real inventory is not capital. It is
                judgment, built across sectors and cycles.
              </p>
              <p className={styles.text}>
                {company.summary} Each holding is managed on its own
                fundamentals — a property is not read like a portfolio position,
                and neither is read like a vehicle — while all of them answer to
                the same standard of performance and durability.
              </p>
              <p className={styles.text}>
                Alongside its core operations, the firm develops and scales
                media projects across platforms, combining strategic investment
                with creative execution at the intersection of finance and
                content.
              </p>
            </Reveal>
          </div>

          <div className={styles.factWrap}>
            <FactStrip items={facts} />
          </div>
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
              Two verbs in a deliberate order. Innovation finds the structures
              others have not tried; leadership commits to them before the
              consensus arrives.
            </p>
            <div className={styles.mottoSplit}>
              <div>
                <h3 className={styles.mottoSub}>Innovate</h3>
                <p className={styles.mottoText}>
                  Look for value where the map is still blank — overlooked
                  sectors and unconventional pairings of capital and craft.
                </p>
              </div>
              <div>
                <h3 className={styles.mottoSub}>Lead</h3>
                <p className={styles.mottoText}>
                  Act first and stand behind it. Conviction, sized responsibly
                  and reported candidly, is the firm's edge.
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
            title="What every decision is checked against"
            intro="Four commitments that govern how the firm underwrites, operates, and reports."
          />
          <div className={styles.principleGrid}>
            {principles.map((item, i) => (
              <Reveal
                className={styles.principle}
                key={item.title}
                delay={i * 80}
              >
                <span className={styles.principleMark} aria-hidden="true" />
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleText}>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxBand
        image="/images/bg-street.jpg"
        eyebrow="The standard"
        quote="Manage each asset on its own terms. Hold all of them to one."
      />

      {/* Location */}
      <section className="section sectionTint">
        <div className={`container ${styles.placeInner}`}>
          <Reveal className={styles.placeFigure} variant="wipe">
            <Figure src="/images/chicago.jpg" alt="The Chicago skyline" />
          </Reveal>
          <Reveal className={styles.placeBody} variant="right" delay={100}>
            <p className={styles.eyebrow}>Where we work</p>
            <h2 className={styles.placeTitle}>Deerfield, Illinois</h2>
            <p className={styles.text}>
              The firm operates from Deerfield, north of Chicago — close enough
              to the city's financial and property markets to move quickly, far
              enough to keep a long view.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="See how the discipline is applied."
        text="The portfolio page sets out the mandate, approach, and horizon for each sector the firm manages."
        label="View the portfolio"
        to="/portfolio"
      />
    </>
  );
}
