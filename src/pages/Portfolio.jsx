import { useEffect, useRef } from "react";
import { sectors } from "../data/sectors.js";
import { isDesktopPointer, prefersReducedMotion } from "../lib/scroll.js";
import { criteria, galleryItems } from "../data/content.js";
import Hero from "../components/sections/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
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

  const stackRef = useRef(null);

  /* As each card arrives, the one beneath it eases back and dims. */
  useEffect(() => {
    if (prefersReducedMotion() || !isDesktopPointer()) return undefined;
    let mm;
    let cancelled = false;
    import("../lib/motion.js").then(({ gsap }) => {
      if (cancelled) return;
      mm = gsap.matchMedia();
      mm.add("(min-width: 961px)", () => {
        const cards = gsap.utils.toArray("article", stackRef.current);
        cards.slice(0, -1).forEach((card, i) => {
          const scrollTrigger = {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top 6.5rem",
            scrub: true,
          };
          // Scale the card and raise a paper veil over it (see --dim in
          // SectorFeature.module.css); the card itself stays opaque.
          gsap.fromTo(
            card,
            { scale: 1, "--dim": 0 },
            { scale: 0.94, "--dim": 0.65, ease: "none", scrollTrigger }
          );
        });
      });
    });
    return () => {
      cancelled = true;
      mm?.revert();
    };
  }, []);

  return (
    <>
      <Hero
        eyebrow="The portfolio"
        title="What we own and manage"
        lede="Financial holdings, real estate, and automotive assets: three sectors, each managed on its own terms for long-term value."
        image="/images/portfolio-hero.jpg"
      />

      <section className={`section ${styles.features}`}>
        <div className="container" ref={stackRef}>
          {sectors.map((sector, i) => (
            <SectorFeature
              key={sector.id}
              sector={sector}
              index={i + 1}
              flip={i % 2 === 1}
              href={`/portfolio/${sector.id}`}
              stack
            />
          ))}
        </div>
      </section>

      {/* Investment criteria */}
      <section className="section sectionDark">
        <div className="container">
          <SectionHeading
            eyebrow="Investment criteria"
            title="What every purchase must pass"
            intro="Four tests every asset has to meet before we buy it, in any sector."
          />
          <dl className={styles.criteria}>
            {criteria.map((item, i) => (
              <Reveal
                as="div"
                className={styles.criterion}
                key={item.term}
                delay={i * 80}
              >
                <dt>
                  <span className={styles.criterionIcon}>
                    <Icon name={item.icon} size={26} />
                  </span>
                  {item.term}
                </dt>
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
            intro="Residential and commercial property, vehicles, and the financial holdings behind them."
          />
          <Gallery items={galleryItems} />
        </div>
      </section>

      <CtaSection
        title="Discuss the portfolio."
        text="Questions about a sector, our approach, or a specific opportunity? Get in touch."
      />
    </>
  );
}
