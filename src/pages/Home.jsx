import { Link } from "react-router-dom";
import { company } from "../data/site.js";
import { sectors, approach } from "../data/sectors.js";
import { marqueeItems, facts, differentiators } from "../data/content.js";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Figure from "../components/ui/Figure.jsx";
import Marquee from "../components/ui/Marquee.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Hero from "../components/sections/Hero.jsx";
import FactStrip from "../components/sections/FactStrip.jsx";
import ParallaxBand from "../components/sections/ParallaxBand.jsx";
import ProcessTrack from "../components/sections/ProcessTrack.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Home.module.css";

export default function Home() {
  usePageMeta("Lexicon One Enterprises — Asset Management", company.summary);

  return (
    <>
      <Hero
        size="home"
        eyebrow="Asset Management · Deerfield, Illinois"
        title={
          <>
            Innovate <em className={styles.amp}>and</em> Lead.
          </>
        }
        lede="An asset management firm overseeing a diverse portfolio across financial holdings, real estate, and automotive assets — focused on performance and long-term value in every sector."
        image="/images/bg-hero.jpg"
        actions={
          <>
            <Button to="/portfolio" variant="light">
              View the portfolio
            </Button>
            <Button to="/about" variant="ghost">
              About the firm
            </Button>
          </>
        }
      />

      <Marquee items={marqueeItems} />

      {/* Introduction + facts */}
      <section className="section">
        <div className="container">
          <div className={styles.intro}>
            <Reveal>
              <p className={styles.eyebrow}>The firm</p>
            </Reveal>
            <Reveal delay={90}>
              <p className={styles.introLead}>
                Three sectors, one standard. Lexicon One manages each asset
                class on its own fundamentals and holds all of them to the same
                measure of durability.
              </p>
              <p className={styles.introText}>
                A property is not read like a portfolio position, and neither is
                read like a vehicle. What they share is the discipline applied
                to them: a complete underwrite before entry, active oversight
                while held, and patience with the timing of every exit.
              </p>
            </Reveal>
          </div>

          <div className={styles.factWrap}>
            <FactStrip items={facts} />
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section sectionTint">
        <div className="container">
          <SectionHeading
            eyebrow="The portfolio"
            title="Three sectors, one discipline"
            intro="Each asset class is managed on its own fundamentals and held to a single standard: performance today, value over the long term."
          />

          <div className={styles.sectorGrid}>
            {sectors.map((sector, i) => (
              <Reveal key={sector.id} delay={i * 100} variant="rise">
                <Link
                  to={`/portfolio#${sector.id}`}
                  className={styles.sectorCard}
                >
                  <div className={styles.sectorImage}>
                    <Figure src={sector.image} alt={sector.alt} />
                  </div>
                  <div className={styles.sectorBody}>
                    <p className={styles.sectorLabel}>{sector.label}</p>
                    <h3 className={styles.sectorTitle}>{sector.title}</h3>
                    <p className={styles.sectorText}>{sector.summary}</p>
                    <span className={styles.sectorLink}>
                      Explore sector
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Lexicon One"
            title="Built to hold, not to trade"
            intro="Three commitments that shape how every asset in the book is chosen and managed."
          />
          <div className={styles.diffGrid}>
            {differentiators.map((item, i) => (
              <Reveal
                className={styles.diff}
                key={item.title}
                variant="rise"
                delay={i * 100}
              >
                <div className={styles.diffImage}>
                  <Figure src={item.image} alt={item.alt} />
                </div>
                <h3 className={styles.diffTitle}>{item.title}</h3>
                <p className={styles.diffText}>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxBand
        image="/images/bg-night.jpg"
        eyebrow="The thesis"
        quote="Value compounds for owners who can wait for it."
        attribution="Lexicon One Enterprises — Innovate and Lead."
      />

      {/* Approach */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="From underwriting to appreciation"
            intro="Every asset moves through the same three stages. The order is the discipline."
          />
          <ProcessTrack items={approach} />
        </div>
      </section>

      {/* Media studio */}
      <section className={`section ${styles.mediaBand}`}>
        <div className={`container ${styles.mediaInner}`}>
          <Reveal className={styles.mediaFigure} variant="wipe">
            <Figure
              src="/images/media.jpg"
              alt="Projector casting a beam of light in a darkened room"
            />
          </Reveal>
          <Reveal className={styles.mediaBody} variant="right" delay={100}>
            <p className={styles.eyebrowGold}>The media studio</p>
            <h2 className={styles.mediaTitle}>Where finance meets content</h2>
            <p className={styles.mediaText}>
              Alongside its core operations, Lexicon One develops and scales
              media projects across platforms — combining strategic investment
              with creative execution.
            </p>
            <p className={styles.mediaText}>
              The discipline that manages an asset can also build an audience.
              Each project is underwritten with care, produced with intent, and
              scaled with patience.
            </p>
            <Button to="/media" variant="light">
              Inside the studio
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
