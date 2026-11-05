import { useRef } from "react";
import { mediaServices } from "../data/sectors.js";
import { formats } from "../data/content.js";
import Hero from "../components/sections/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import SwipeDots from "../components/ui/SwipeDots.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
import LineArt from "../components/ui/LineArt.jsx";
import ProcessTrack from "../components/sections/ProcessTrack.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Media.module.css";

export default function Media() {
  const formatsRef = useRef(null);
  usePageMeta(
    "Media Studio — Lexicon One Enterprises",
    "Lexicon One develops and scales media projects across platforms, combining strategic investment with creative execution.",
  );

  return (
    <>
      <Hero
        eyebrow="The media studio"
        title="Investment and media, under one roof"
        lede="Our media studio invests in and produces projects across video, social, and audio, with the same care we bring to every other asset."
        image="/images/loop-crown-poster.jpg"
        video="/video/loop-crown.mp4"
      />

      {/* Services */}
      <section className="section sectionTint">
        <div className="container">
          <SectionHeading
            eyebrow="What the studio does"
            title="Invest, develop, scale"
            intro="Every project goes through the same three stages."
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
            intro="We work across formats and choose the one that suits each audience best."
          />
          <div className={`${styles.formatGrid} swipe-row`} ref={formatsRef}>
            {formats.map((item, i) => (
              <Reveal className={styles.format} key={item.title} delay={i * 80}>
                <span className={styles.formatIcon}>
                  <Icon name={item.icon} size={26} />
                </span>
                <h3 className={styles.formatTitle}>{item.title}</h3>
                <p className={styles.formatText}>{item.desc}</p>
              </Reveal>
            ))}
          </div>
          <SwipeDots
            targetRef={formatsRef}
            count={formats.length}
            label="Format"
          />
        </div>
      </section>

      {/* Standard */}
      <section className={`section ${styles.standardBand}`}>
        <div className={`container ${styles.standardInner}`}>
          <LineArt name="iris" className={styles.standardArt} />
          <Reveal className={styles.standardBody} variant="right" delay={100}>
            <p className={styles.eyebrowGold}>The standard</p>
            <h2 className={styles.standardTitle}>
              Two questions, one decision
            </h2>
            <p className={styles.standardText}>
              Every project has to pass two tests: is the idea good enough to
              find an audience, and is it a sound use of capital? We go ahead
              only when the answer to both is yes.
            </p>
            <p className={styles.standardText}>
              Understanding both finance and media is what the studio was built
              for.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Bring the studio a project."
        text="Have a project, a partnership, or a production in mind? Start with a conversation."
        label="Contact the studio"
      />
    </>
  );
}
