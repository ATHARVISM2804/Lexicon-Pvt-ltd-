import { sectors } from "../data/sectors.js";
import { criteria, galleryItems } from "../data/content.js";
import Hero from "../components/sections/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectorFeature from "../components/sections/SectorFeature.jsx";
import Gallery from "../components/sections/Gallery.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  usePageMeta(
    "Portfolio — Lexicon One Enterprises",
    "Financial holdings, real estate, and automotive assets — the mandate, approach, and horizon for each sector Lexicon One manages."
  );

  return (
    <>
      <Hero
        eyebrow="The portfolio"
        title="A portfolio assembled with intent"
        lede="Three sectors, each managed on its own fundamentals and held to the same standard of performance and long-term value."
        image="/images/portfolio-hero.jpg"
      />

      <section className={`section ${styles.features}`}>
        <div className="container">
          {sectors.map((sector, i) => (
            <SectorFeature
              key={sector.id}
              sector={sector}
              index={i + 1}
              flip={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Investment criteria */}
      <section className="section sectionDark">
        <div className="container">
          <SectionHeading
            eyebrow="Investment criteria"
            title="What an asset has to clear"
            intro="Four tests applied to every acquisition, regardless of which sector it belongs to."
          />
          <dl className={styles.criteria}>
            {criteria.map((item, i) => (
              <Reveal
                as="div"
                className={styles.criterion}
                key={item.term}
                delay={i * 80}
              >
                <dt>{item.term}</dt>
                <dd>{item.desc}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Across the book"
            title="The range of the portfolio"
            intro="Residential and commercial property, automotive holdings, and the financial positions that anchor them."
          />
          <Gallery items={galleryItems} />
        </div>
      </section>

      <CtaSection
        title="Discuss the portfolio."
        text="Inquiries about the firm's sectors, its approach, or a specific opportunity begin with a conversation."
      />
    </>
  );
}
