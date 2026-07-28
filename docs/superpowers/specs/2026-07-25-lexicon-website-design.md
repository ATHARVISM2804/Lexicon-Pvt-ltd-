# Lexicon One Enterprises — Website Design Spec

**Date:** 2026-07-25 (revised after first-round client review)
**Deliverable:** 5-page React marketing site (Vite + React 18 + React Router)

## Revision note

The first build was organized around a wordplay on the company name — the site
was typeset as a dictionary, with interpunct headwords (`Lex·i·con`), phonetics,
and numbered definitions, and it used no photography. The client rejected it:
the concept did not represent the brand, the dots read as arbitrary, the absence
of imagery made it look unfinished, and the overall impression was
unprofessional.

That direction was abandoned entirely. Nothing from it survives except the page
count and the underlying content facts.

## Client facts (all copy must stay within these)

- Lexicon One Enterprises: asset management firm.
- Portfolio: financial holdings, real estate, automotive assets.
- Focus: optimizing performance and long-term value per sector.
- Also develops and scales media projects across platforms — strategic
  investment plus creative execution at the intersection of finance and content.
- Address: 508 Mallard Ln, Deerfield, IL 60015 · Phone: +1 847-374-1074.
- Motto: "Innovate and Lead."
- Do NOT invent: AUM figures, leadership names, client logos, track-record
  stats, testimonials.

## Direction (client-selected)

**Light editorial premium** — white and warm paper grounds, refined serif
display against a clean sans, generous whitespace, asymmetric image-led grids.
**Navy + warm gold** palette. **Curated stock photography**, vendored locally
and documented as swappable.

### Color
| Token | Hex | Use |
|---|---|---|
| navy-900 | #0B1F3A | primary ink, dark bands, footer |
| navy-700 | #1E3A63 | hover states |
| gold | #C8A15A | accent on navy, rules, footer headings |
| gold-ink | #8A6A2F | accent for small text on light (clears 4.5:1) |
| slate-500 | #5F7186 | secondary text |
| canvas | #FAF9F6 | warm tinted sections |
| paper | #FFFFFF | base |

### Type
| Role | Face |
|---|---|
| Display | Newsreader, weights 200–400 |
| Body & UI | Instrument Sans, 400–600 |

Fluid scale (`--step--1` … `--step-5`) defined in `src/styles/tokens.css`.

### Layout
Asymmetric editorial grids throughout: split heroes (text beside a tall image),
alternating image/text sector features, three-up card and step grids. Sections
alternate paper → canvas → navy for rhythm. The CTA band is deliberately light
so it does not merge with the navy footer.

## Routes

1. **/** — Split hero ("Innovate *and* Lead."), three sector cards linking into
   the portfolio, three-step approach, navy media-studio band, CTA.
2. **/about** — Hero, firm narrative, navy motto band, four principles,
   Deerfield/Chicago location section, CTA.
3. **/portfolio** — Hero, three alternating `SectorFeature` blocks anchored at
   `#financial`, `#real-estate`, `#automotive`, each with mandate/approach/horizon.
4. **/media** — Hero, premise, invest/develop/scale, navy standard band, CTA.
5. **/contact** — Hero, office/phone/correspondence cards, inquiry form.

## Architecture

```
src/
  components/
    layout/     Header, Footer, Logo
    sections/   PageHero, SectorFeature, CtaSection
    ui/         Button, SectionHeading, Reveal
  data/         site.js, sectors.js — all copy
  hooks/        usePageMeta
  pages/        Home, About, Portfolio, Media, Contact
  styles/       tokens.css, base.css
```

Component styling uses **CSS Modules** so class names are scoped and cannot
collide — this replaced the first build's single global stylesheet, where
type- and class-selector specificity conflicts were a live problem. Only true
globals (`.container`, `.section`, `.sectionDark`, `.sectionTint`) sit in
`base.css`.

All copy lives in `src/data/`, so editing text does not mean editing layout.

## Quality floor

Responsive to 360px, visible keyboard focus, skip link, semantic landmarks,
`prefers-reduced-motion` respected, lazy-loaded below-fold imagery, and gold
accents stepped to `--gold-ink` at small sizes on light grounds for contrast.

## Open items

Tracked in `CONTENT-CHECKLIST.md`: placeholder contact email, stock photography
that must be replaced with the firm's own assets, and confirmation of the
entity's business status (public records list it as permanently closed).
