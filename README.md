# Lexicon One Enterprises — Website

A five-page marketing site for Lexicon One Enterprises, an asset management
firm overseeing financial holdings, real estate, and automotive assets, with a
media studio alongside its core operations.

Built with React 18, React Router, and Vite.

## Running it

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Design

Light editorial premium: white and warm paper grounds, navy ink, and a single
warm gold accent. Photography carries each section rather than decorating it.

| Role | Value |
|---|---|
| Ink / dark sections | `#0B1F3A` navy |
| Accent | `#C8A15A` gold (`#8A6A2F` for small text on light) |
| Paper / canvas | `#FFFFFF` / `#FAF9F6` |
| Display | Newsreader, light weights |
| Body & UI | Instrument Sans |

Typography and spacing are driven by a fluid scale in
[tokens.css](src/styles/tokens.css). Everything else composes from those tokens.

## Structure

```
public/images/        photography (see CREDITS.txt)
src/
  components/
    layout/           Header, Footer, Logo
    sections/         Hero, ParallaxBand, SectorFeature, Gallery,
                      FactStrip, ProcessTrack, Faq, CtaSection
    ui/               Button, SectionHeading, Reveal, Marquee
  data/               site.js, sectors.js, content.js, leadership.js,
                      placeholders.js (generated) — all copy lives here
  hooks/              usePageMeta, useParallax, useReducedMotion
  pages/              Home, About, Leadership, Portfolio, Media, Contact
  styles/             tokens.css, base.css
scripts/              gen-placeholders.sh
```

## Pages

`/` · `/about` · `/leadership` · `/portfolio` · `/media` · `/contact`

The leadership page lists Jon Stewart (President) and Allie Stewart (Creative
Marketing Manager) from `src/data/leadership.js`. Adding a person is one entry
in that file — the layout adapts.

Each card currently shows a typographic monogram instead of a photograph. To
use real portraits, drop the images into `public/images/`, uncomment the
`portrait` field on the entry, and run `scripts/gen-placeholders.sh` so the
blur-up previews are regenerated. The card swaps to the photograph
automatically.

## Motion

Animation is centralised so it stays consistent and can be switched off
wholesale. Everything below respects `prefers-reduced-motion` at both the CSS
and the JS level.

**`Reveal`** wraps anything that animates into view, with variants `rise`,
`fade`, `scale`, `left`, `right`, and `wipe` (a clip-path sweep for images).
It is deliberately biased toward showing content: elements already on screen
at mount reveal immediately, and a timeout releases anything the
IntersectionObserver has not reported on. Invisible content is a much worse
failure than a skipped animation — this was a real bug before the failsafe.

**`SplitText`** reveals a headline word by word, each word rising out of its
own mask. It takes a plain string so the split is predictable, keeps the whole
phrase as an `aria-label`, and hides the fragments from assistive tech.

**`Figure`** resolves an image out of its own blurred thumbnail instead of
letting it pop in. Placeholders are 20px-wide JPEGs inlined as base64 in
`src/data/placeholders.js` — regenerate with `scripts/gen-placeholders.sh`
after changing any photography.

**`PageTransition`** sweeps a navy curtain over route changes. It takes a
function child and pins `<Routes location={...}>` to a held location, because
`<Routes>` reads router context directly — merely storing a stale element does
not hold the outgoing page, React re-renders it on context change anyway.

**`useParallax(strength, buffer)`** drifts background images against the
scroll. The shift is clamped to `buffer`, which must match the negative inset
the CSS gives the moving layer, so an image can never slide far enough to
expose the edge of its container.

Smaller touches: a gold scroll-progress rule, pointer-driven drift on hero
images (fine pointers only), a fill that sweeps up inside buttons on hover,
and gallery captions that lift with an underline draw.

Component styles use **CSS Modules** (`*.module.css`), so class names are
scoped and cannot collide across components. Only genuinely global utilities
(`.container`, `.section`, `.sectionDark`) live in `base.css`.

**Editing copy** rarely means touching a component. Page text, sector
descriptions, navigation, and contact details are all in `src/data/`.

## Before launch

Read [CONTENT-CHECKLIST.md](CONTENT-CHECKLIST.md). In short:

- The contact email is a placeholder and the form will not reach anyone until
  it is replaced.
- Property, vehicle, and office photography is licensed stock and must be
  swapped for the firm's own assets.
- Public records list the entity as permanently closed — confirm status with
  the client, since the site is written as an operating firm.

No performance figures, leadership names, client logos, or track-record claims
appear anywhere on the site. They were deliberately not invented.

## Deployment

The app uses client-side routing, so the host must serve `index.html` for
unknown paths. Config for the two most common hosts is already included:
`public/_redirects` (Netlify) and `vercel.json` (Vercel). For Apache or nginx,
add an equivalent fallback rewrite.
