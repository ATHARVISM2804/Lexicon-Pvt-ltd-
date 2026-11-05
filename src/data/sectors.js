/* Sector content. `image` values map to files in /public/images —
   see CONTENT-CHECKLIST.md for which ones to replace with the firm's own. */

export const sectors = [
  {
    id: "financial",
    art: "growth",
    label: "Financial holdings",
    title: "Capital, protected and grown",
    summary:
      "We invest in a diversified mix of financial assets, protecting capital first and then growing it steadily over time.",
    body: "Financial holdings are the foundation of the portfolio. We choose investments for their strength before their returns, and size them so no single position can put the whole portfolio at risk. Every position is reviewed regularly against the facts, not market noise.",
    image: "/images/financial.jpg",
    alt: "Glass office tower facade in daylight",
    points: [
      {
        term: "Mandate",
        desc: "Protect capital first, then grow it through every market cycle.",
      },
      {
        term: "Approach",
        desc: "Careful allocation and sizing, with every position actively reviewed.",
      },
      {
        term: "Horizon",
        desc: "Long-term. We buy to hold, and sell only when an investment has done its job.",
      },
    ],
  },
  {
    id: "real-estate",
    art: "tower",
    label: "Real estate",
    title: "Property that earns and appreciates",
    summary:
      "We buy and manage residential and commercial property that produces income while we own it and gains value over time.",
    body: "We look at every property in full: its condition, its location, its tenants, and what it could become. We buy on fundamentals, manage hands-on, and improve properties where we see value others have missed.",
    image: "/images/real-estate.jpg",
    alt: "Contemporary residence lit at dusk",
    points: [
      {
        term: "Mandate",
        desc: "Own property that pays income and grows in value.",
      },
      {
        term: "Approach",
        desc: "Buy on fundamentals, manage directly, and improve where it adds value.",
      },
      {
        term: "Horizon",
        desc: "Measured in years of ownership, not quarters.",
      },
    ],
  },
  {
    id: "automotive",
    art: "car",
    label: "Automotive",
    title: "Vehicles held as serious assets",
    summary:
      "We acquire and care for high-value vehicles as investments, from purchase and documented condition through to the right moment to sell.",
    body: "Every vehicle is bought as an investment, never on impulse. We document its history and condition, store and maintain it properly, and time both the purchase and the sale against the market.",
    image: "/images/automotive.jpg",
    alt: "Performance sedan on an open road",
    points: [
      {
        term: "Mandate",
        desc: "Treat every vehicle with the same discipline as any other investment.",
      },
      {
        term: "Approach",
        desc: "Documented history and condition, expert care, and well-timed sales.",
      },
      {
        term: "Horizon",
        desc: "As long as the vehicle keeps gaining value.",
      },
    ],
  },
];

export const principles = [
  {
    title: "Sector fluency",
    icon: "compass",
    desc: "Each sector works differently. We only invest where we understand exactly how value is made.",
  },
  {
    title: "Discipline over impulse",
    icon: "shield",
    desc: "We buy, hold, and sell on the facts of each asset, not on market headlines.",
  },
  {
    title: "Patient capital",
    icon: "hourglass",
    desc: "Good assets need time to grow. We give them that time instead of chasing quick wins.",
  },
  {
    title: "Straight talk",
    icon: "chat",
    desc: "We talk plainly about results, risks, and plans, so partners always know where they stand.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Assess",
    icon: "search",
    desc: "We study every asset in full before we buy: its condition, its market, its risks, and its numbers.",
  },
  {
    step: "02",
    title: "Manage",
    icon: "sliders",
    desc: "We manage each asset hands-on while we own it, improving its income, costs, and position.",
  },
  {
    step: "03",
    title: "Grow",
    icon: "growth",
    desc: "We reinvest what we earn with the same care, so value keeps building across the portfolio.",
  },
];

export const mediaServices = [
  {
    step: "01",
    title: "Invest",
    icon: "briefcase",
    desc: "We put capital behind media projects with a clear audience and lasting appeal.",
  },
  {
    step: "02",
    title: "Develop",
    icon: "film",
    desc: "We work on the creative side too, from first idea through production, as a hands-on partner.",
  },
  {
    step: "03",
    title: "Scale",
    icon: "layers",
    desc: "We release each project on the platforms where its audience already is, and grow it over time.",
  },
];
