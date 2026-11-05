import { Link } from "react-router-dom";
import { company } from "../data/site.js";
import { sectors, approach } from "../data/sectors.js";
import { facts } from "../data/content.js";
import { leadership } from "../data/leadership.js";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Figure from "../components/ui/Figure.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Hero from "../components/sections/Hero.jsx";
import FactStrip from "../components/sections/FactStrip.jsx";
import ParallaxBand from "../components/sections/ParallaxBand.jsx";
import ProcessTrack from "../components/sections/ProcessTrack.jsx";
import CtaSection from "../components/sections/CtaSection.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Home.module.css";

const founder = leadership.find((p) => p.id === "jon-stewart");

/* The four areas of ownership as an index: the three sectors plus the
   studio, each opening its own page. */
const areas = [
  ...sectors.map((s) => ({
    to: `/portfolio/${s.id}`,
    label: s.label,
    line: s.summary,
    image: s.image,
    alt: s.alt,
  })),
  {
    to: "/media",
    label: "Media studio",
    line: "We invest in and produce media projects across video, social, and audio.",
    image: "/images/media.jpg",
    alt: "Projector casting a beam of light in a darkened room",
  },
];

export default function Home() {
  usePageMeta("Lexicon One Enterprises — Asset Management", company.summary);

  return (
    <>
      <Hero
        size="home"
        eyebrow="Private asset management · Deerfield, Illinois"
        title={
          <>
            Innovate <em className={styles.amp}>and</em> Lead.
          </>
        }
        lede="Lexicon One Enterprises acquires, manages, and grows financial holdings, real estate, and automotive assets for the long term."
        image="/images/hero-tower-poster.jpg"
        video="/video/hero-tower.mp4"
        videoSmall="/video/hero-tower-mobile.mp4"
        actions={
          <>
            <Button to="/portfolio" variant="light">
              View the portfolio
            </Button>
            <Button to="/contact" variant="ghost">
              Private inquiries
            </Button>
          </>
        }
      />

      {/* At a glance */}
      <section className={styles.glance} aria-label="At a glance">
        <div className="container">
          <FactStrip items={facts} />
        </div>
      </section>

      {/* Letter from the founder.
          DRAFT copy written for Jon Stewart's approval; replace with his own
          words once he has reviewed it. */}
      <section className="section">
        <div className={`container ${styles.letter}`}>
          <Reveal className={styles.letterFigure} variant="wipe">
            <Figure
              src={founder.portrait}
              alt={`${founder.name}, ${founder.role} of Lexicon One Enterprises`}
            />
          </Reveal>
          <Reveal className={styles.letterBody} delay={120}>
            <p className={styles.eyebrow}>A letter from the founder</p>
            <p className={styles.letterLead}>
              Lexicon One was built on a simple idea: own good assets, look
              after them properly, and give them the time they need.
            </p>
            <p className={styles.letterText}>
              We invest across financial holdings, real estate, and automotive
              assets. We study every opportunity before we commit, we stay
              closely involved while we own it, and we are patient about when to
              sell. That discipline is the same whether we are holding a
              building, an investment, or a car.
            </p>
            <p className={styles.letterText}>
              If you would like to talk about working with us, I would be glad
              to hear from you.
            </p>
            <p className={styles.signature}>
              <span className={styles.signName}>{founder.name}</span>
              <span className={styles.signRole}>{founder.role}</span>
            </p>
            <Button to="/about#team">Meet the team</Button>
          </Reveal>
        </div>
      </section>

      {/* What we manage: numbered index */}
      <section className="section sectionTint">
        <div className="container">
          <SectionHeading
            title="What we manage"
            intro="Four areas of ownership, each run on its own terms. Choose one to see what we do and how."
          />
          <ol className={styles.index}>
            {areas.map((area, i) => (
              <Reveal as="li" key={area.to} delay={i * 80} className={styles.indexItem}>
                <Link to={area.to} className={styles.indexRow}>
                  <span className={`${styles.indexNo} figures`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.indexName}>{area.label}</span>
                  <span className={styles.indexLine}>{area.line}</span>
                  <span className={styles.indexThumb} aria-hidden="true">
                    <Figure src={area.image} alt="" />
                  </span>
                  <svg
                    className={styles.indexArrow}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 11h14M12 5l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ParallaxBand
        image="/images/bg-night.jpg"
        eyebrow="The thesis"
        quote="Value grows for owners who can wait for it."
        attribution="Lexicon One Enterprises — Innovate and Lead."
      />

      {/* How we work */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Assess, manage, grow"
            intro="Every asset we own goes through the same three steps, in the same order."
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
          <Reveal className={styles.mediaBody} delay={100}>
            <p className={styles.eyebrowGold}>The media studio</p>
            <h2 className={styles.mediaTitle}>Where investment meets media</h2>
            <p className={styles.mediaText}>
              Alongside our core work, we invest in and produce series,
              short-form video, podcasts, and brand partnerships, and stay
              involved from first idea to release.
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
