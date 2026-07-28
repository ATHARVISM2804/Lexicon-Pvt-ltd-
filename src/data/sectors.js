/* Sector content. `image` values map to files in /public/images —
   see CONTENT-CHECKLIST.md for which ones to replace with the firm's own. */

export const sectors = [
  {
    id: "financial",
    label: "Financial holdings",
    title: "Capital positioned with discipline",
    summary:
      "Diversified financial holdings managed to preserve capital first and compound it steadily, reviewed on a cadence that favors evidence over reaction.",
    body: "The financial book anchors the portfolio. Positions are selected for durability before yield and sized so that no single holding can rewrite the outcome. Conviction is expressed through allocation, not activity.",
    image: "/images/financial.jpg",
    alt: "Glass office tower facade in daylight",
    points: [
      {
        term: "Mandate",
        desc: "Preserve capital, then compound it across market cycles.",
      },
      {
        term: "Approach",
        desc: "Deliberate allocation and sizing, with active oversight of every position.",
      },
      {
        term: "Horizon",
        desc: "Long. Holdings are underwritten to be kept and sold on their merits.",
      },
    ],
  },
  {
    id: "real-estate",
    label: "Real estate",
    title: "Property that produces twice",
    summary:
      "Real estate held for income while owned and appreciation when the market recognizes what the underwriting saw first.",
    body: "Property rewards owners who read it completely — condition, market, tenancy, and second act. The firm acquires on fundamentals, manages hands-on, and repositions selectively where value sits unrealized.",
    image: "/images/real-estate.jpg",
    alt: "Contemporary residence lit at dusk",
    points: [
      {
        term: "Mandate",
        desc: "Own property that earns while held and appreciates over time.",
      },
      {
        term: "Approach",
        desc: "Fundamentals-led acquisition, hands-on management, selective repositioning.",
      },
      {
        term: "Horizon",
        desc: "Measured in ownership rather than quarters.",
      },
    ],
  },
  {
    id: "automotive",
    label: "Automotive",
    title: "Assets built to move",
    summary:
      "Automotive holdings stewarded with institutional discipline, from acquisition and documented condition through to timing.",
    body: "Every vehicle is underwritten as an asset rather than an impulse. Provenance and condition are documented, storage and care are managed deliberately, and both entry and exit are timed against the market rather than sentiment.",
    image: "/images/automotive.jpg",
    alt: "Performance sedan on an open road",
    points: [
      {
        term: "Mandate",
        desc: "Treat automotive value with the same rigor as any other holding.",
      },
      {
        term: "Approach",
        desc: "Documented provenance and condition, deliberate care, disciplined timing.",
      },
      {
        term: "Horizon",
        desc: "As long as the asset merits — appreciation rewards owners who wait.",
      },
    ],
  },
];

export const principles = [
  {
    title: "Sector fluency",
    desc: "Each asset class has its own fundamentals. The firm does not manage what it has not learned to read.",
  },
  {
    title: "Discipline over impulse",
    desc: "Positions are entered, held, and exited on their merits rather than on the mood of the market.",
  },
  {
    title: "Patient capital",
    desc: "Long-term value compounds quietly. Good assets are given the one thing most managers cannot offer: time.",
  },
  {
    title: "Plain-spoken candor",
    desc: "Clear language about performance, risk, and intent. Partnerships work when both sides read the same page.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Underwrite",
    desc: "An asset enters the book only after a complete read of its condition, market, downside, and the story its numbers tell.",
  },
  {
    step: "02",
    title: "Operate",
    desc: "Active oversight sector by sector — optimizing income, cost, and positioning throughout the holding period.",
  },
  {
    step: "03",
    title: "Compound",
    desc: "Proceeds are redeployed with the discipline that produced them, so value builds across the whole portfolio.",
  },
];

export const mediaServices = [
  {
    step: "01",
    title: "Invest",
    desc: "Strategic capital placed behind projects with a defined audience and a durable premise, underwritten like any other holding.",
  },
  {
    step: "02",
    title: "Develop",
    desc: "Creative execution from concept through production, with the firm engaged as a working partner rather than a passive check.",
  },
  {
    step: "03",
    title: "Scale",
    desc: "Distribution across platforms, matched to where each project's audience already is and grown with patience.",
  },
];
