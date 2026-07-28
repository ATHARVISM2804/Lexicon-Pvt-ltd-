import { mediaServices } from "../data/sectors.js";
import { formats } from "../data/content.js";
import Hero from "../components/sections/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Figure from "../components/ui/Figure.jsx";
import ProcessTrack from "../components/sections/ProcessTrack.jsx";
import ParallaxBand from "../components/sections/ParallaxBand.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Media.module.css";

export default function Media() {
  usePageMeta(
    "Media Studio — Lexicon One Enterprises",
    "Lexicon One develops and scales media projects across platforms, combining strategic investment with creative execution."
  );

  return (
    <>
      <Hero
        eyebrow="The media studio"
        title="Strategic capital, creative execution"
        lede="Alongside its core operations, Lexicon One develops and scales media projects across platforms — at the intersection of finance and content."
        image="/images/media.jpg"
      />

      {/* Premise */}
      <section className="section">
        <div className={`container ${styles.premise}`}>
          <Reveal>
            <p className={styles.eyebrow}>The premise</p>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.lead}>
              Content behaves like an asset class. It can be underwritten,
              operated, and compounded — provided you speak both languages.
            </p>
            <p className={styles.text}>
              Investors often treat media as a bet, and creators often treat
              capital as a mystery. The studio works in the overlap: financial
              discipline applied to creative work, and creative judgment applied
              to where the capital goes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section sectionTint">
        <div className="container">
          <SectionHeading
            eyebrow="What the studio does"
            title="Invest, develop, scale"
            intro="Every project moves through the same three stages, in the same order."
          />
          <ProcessTrack items={mediaServices} />
        </div>
      </section>

      {/* Formats */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Formats"
            title="Where the work lives"
            intro="The studio is platform-agnostic. Format follows the audience, not the other way round."
          />
          <div className={styles.formatGrid}>
            {formats.map((item, i) => (
              <Reveal
                className={styles.format}
                key={item.title}
                delay={i * 80}
              >
                <h3 className={styles.formatTitle}>{item.title}</h3>
                <p className={styles.formatText}>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standard */}
      <section className={`section ${styles.standardBand}`}>
        <div className={`container ${styles.standardInner}`}>
          <Reveal className={styles.standardFigure} variant="wipe">
            <Figure
              src="/images/workspace.jpg"
              alt="Creative studio workspace with natural light"
            />
          </Reveal>
          <Reveal className={styles.standardBody} variant="right" delay={100}>
            <p className={styles.eyebrowGold}>The standard</p>
            <h2 className={styles.standardTitle}>Two reviews, one decision</h2>
            <p className={styles.standardText}>
              A project answers to two questions: does the work deserve an
              audience, and does the position deserve the capital. It proceeds
              only when both answers are yes.
            </p>
            <p className={styles.standardText}>
              That double fluency — finance and content read side by side — is
              what the studio was built to provide.
            </p>
          </Reveal>
        </div>
      </section>

      <ParallaxBand
        image="/images/bg-night.jpg"
        eyebrow="The studio"
        quote="Underwrite the story as carefully as the spreadsheet."
      />

      <CtaSection
        title="Bring the studio a project."
        text="Partnerships, productions, and platform conversations all start the same way."
        label="Contact the studio"
      />
    </>
  );
}
