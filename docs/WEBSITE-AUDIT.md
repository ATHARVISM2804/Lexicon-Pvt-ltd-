# Lexicon One Enterprises: website audit

**Date:** 5 November 2026
**Site audited:** the local revamp (http://localhost:5173), which has not been pushed live.
**Inputs:**
- A page-by-page review of all 8 pages at 320–1440px.
- Research on 18 real premium firms: Pictet, KKR, Brookfield, ICONIQ, Thoma Bravo, Rothschild & Co, Bessemer Trust, Cresset, BDT & MSD, Bezos Expeditions, Witkoff, Fisher Brothers, Related, Aman Residences, RM Sotheby's, Pagani, and others.
- Award-winning sites on Awwwards (TitanGate Equity, Sobha Privy Collection, Hamilton Capital, Dock by Crestyl, Stellar Management, 360 Lexington).
- Templates and design boards on Framer, Webflow and Dribbble (Heirloom Office, Brookmere, Northbrook, Fundare, Meridia, and the Dribbble private-equity and private-capital tags).

Anything marked **[NEEDS JON]** cannot be written without real facts from the client. Nothing in this audit invents facts about Lexicon.

---

## 1. Verdict in one paragraph

The foundation is right. Navy with a single gold accent, a serif display face with a quiet sans, sentence-case headlines and generous space are exactly what Pictet, ICONIQ, Rothschild and Bessemer do. What keeps Lexicon from reading as *very wealthy* is not the styling but five things:

1. It has **no real facts**. There are no dated figures, no founding year and no real holdings. "Three / Deerfield, IL / Long-term / In-house" is filler.
2. **All imagery is stock**, and AI video is close to the "glass tower" cliché.
3. It has **too many sections and labels**: 9 sections and 15 small uppercase labels on Home. Premium firms say less.
4. **The motion is generic.** The same fade-up runs everywhere, the word ticker reads as a startup site, and there is no signature moment.
5. **Unfinished touches:**
   - the contact form only opens the visitor's email app;
   - Allie's card shows initials instead of a photo;
   - there is no share preview image;
   - the address is `lexicon-bay.vercel.app`.

Premium firms such as BDT & MSD and Bezos Expeditions show that **saying less, with real specifics, reads richer than saying more**.

---

## 2. Scorecard

| Area | Now | Target | Main gap |
|---|---|---|---|
| Brand and identity | 7/10 | 9 | Logo and palette are good. Needs a real domain, email and share image |
| Content and messaging | 5/10 | 9 | No facts, generic claims, repeated ideas across pages |
| Imagery | 4/10 | 8 | 100% stock plus an AI video. The Jon portrait is 440px wide and soft |
| Typography | 7/10 | 9 | Newsreader is soft for luxury display; too many uppercase labels |
| Layout and alignment | 7/10 | 9 | Uneven gallery grid, the left-label/right-text pattern is overused, Home is long |
| Motion and animation | 5/10 | 9 | Uniform fade-ups, a cheap-looking ticker, no signature moment |
| Interaction and clicks | 6/10 | 9 | Weak hover states, no visible focus ring style, a mailto form |
| Mobile | 8/10 | 9 | Clean after the fixes; Home is 12 phone screens long |
| Performance | 6/10 | 9 | Home loads 2.4 MB of images, 3.3 MB of video and 221 KB of fonts. No WebP/AVIF, no responsive image sizes |
| Trust and credibility | 3/10 | 8 | No dated figures, press, holdings or real office imagery **[NEEDS JON]** |

---

## 3. Hero video

**Requirement:** 8–10 seconds, constantly moving.

**Status:** the current loop is **8.5 s** of a drone rising along a glass tower, with time-lapse clouds and city traffic. It meets the requirement.

**Remaining issues and fixes:**
1. **The loop point is a 1.5 s dissolve.** Fine, but a true seamless loop is better. Regenerate one clip as a *slow orbit* or *continuous forward glide* so the end can blend with the start.
2. **The Veo watermark** is visible bottom-right on some screen sizes. Either export from a Flow plan without the visible mark, or reframe so it falls under the gradient.
3. **The concept is a cliché.** Research flagged "glass tower drone shots" as the finance stock look. The strongest upgrade is **real footage**: Jon's Deerfield office, a real property at dusk, a car from the collection **[NEEDS JON]**. Until then, keep the video but add *one* signature move (see §6, M1).
4. **Formats:** add a WebM (VP9/AV1) version next to the MP4 for roughly 30–40% smaller files, and keep each loop under about 3 MB on desktop.

---

## 4. Content audit, page by page

### Global content problems
- **No real facts.** Pictet, KKR, Thoma Bravo and Fisher Brothers all show 3–4 figures, each dated ("as at 30 June 2026").
  - Lexicon needs **3–4 real figures**, for example founding year, properties held, square feet, vehicles in the collection, markets **[NEEDS JON]**.
  - Not showing assets under management is fine; ICONIQ and BDT don't.
- **Ideas repeat.** "Long-term", "managed on its own terms" and "assess / manage / grow" appear on Home, About, Portfolio and every sector page. Each page should add something new.
- **Generic links.** "See how we manage it", "View the portfolio" and "Contact Lexicon One" are fine. Remove any "Learn more"-style links and always name the destination.
- **Discretion language is missing.** Premium firms write "Private inquiries", "Inquiries are treated in confidence", "By introduction" (Aman, Heirloom, Rothschild). Lexicon's contact copy reads like lead generation.
- **The founder story is missing.** BDT names its leaders in the hero; Heirloom Office opens with a letter from the principal. Lexicon has one sentence about Jon. A **short founder's letter** (about 120 words, first person, signed) would do more than any other section **[NEEDS JON: 3–4 sentences in his words, or approve a draft]**.

### Home (9 sections, 545 words, 12 phone screens)

| Section | Verdict | Action |
|---|---|---|
| Hero (video, headline, 2 buttons) | Keep | Headline reveal line by line. Fold the founding year into the label line **[NEEDS JON]** |
| Scrolling word ticker | **Remove** | Reads as a startup or SaaS site. Every reference avoids it |
| "The firm" intro and 4 filler facts | **Replace** | Becomes the **At a glance** band of real, dated figures **[NEEDS JON]** |
| Founder (Jon) | **Upgrade** | Turn into the **Letter from the founder**: portrait, about 120 words, signature |
| What we manage (3 sector cards) | **Upgrade** | Becomes a **numbered sector index** (01–04, including Media) with an image that reveals on hover. Fisher Brothers, Stellar and ICONIQ do this |
| Built to hold (3 image cards) | Merge | Fold into the founder letter or the principles; it repeats the "long-term" idea |
| Thesis quote band | Keep (one) | One quote band per site is enough; remove the others |
| How we work (3 steps) | Keep | Add a hairline that draws itself as the visitor scrolls |
| Media studio band | Keep, shorten | Two lines and a link |
| Contact call-to-action | Upgrade | "Private inquiries" wording plus the phone number |

**Target:** 7 sections, about 350 words, about 8 phone screens.

### About
- **Keep:** "Who we are", the team, principles and location.
- **Fix:**
  - The **"Three / Deerfield / Long-term / In-house" strip** is filler. Remove it or replace it with real figures.
  - **Allie's card** shows "AS" initials. Use a real photo **[NEEDS JON]**, or present the team without portraits.
  - There are **two quote bands** on the page (the motto and "The standard"). Keep the motto and remove the parallax quote.
  - The **closing call-to-action** still says "See how the discipline is applied". Rewrite it.
- **Add:** a **heritage or milestones timeline** (Pictet, Fisher Brothers): 4–5 dated milestones **[NEEDS JON]**.

### Portfolio and sector pages
- **Gallery layout bug:** six images form an uneven grid with a single image left alone on the last row. Rebuild it as a **horizontal scroll strip** on desktop with snap scrolling on phones, or as a balanced 3×2 grid.
- **Holdings told as stories.** Each sector should show 1–3 real featured holdings with an image, a name, a city and one line, as RM Sotheby's, Witkoff and Thoma Bravo do **[NEEDS JON]**. Without real holdings, the sector pages repeat the Portfolio page. In that case merge them back into Portfolio (§5).
- **The investment criteria section is good.** Keep it.

### Media
- **Repeats itself:** the hero, "The premise" and "Two questions" all say "finance and media together". Cut "The premise".
- **Needs proof:** 2–4 real projects (title, format, platform, a still) **[NEEDS JON]**. Without them the page is all claims.
- **Remove the parallax quote band** (the second band on the page).

### Contact
- **The form must actually send.** Use a real form service (Formspree, Resend, or Netlify/Vercel forms), and show a calm confirmation such as "Thank you. Your inquiry has been received and will be treated in confidence."
- **Add a "How were you introduced to us?" field** (Aman, Heirloom). It signals a private firm, not a lead-generation site.
- **Replace the placeholder email** `inquiries@lexiconone.com` with a real one on a real domain **[NEEDS JON]**.
- The FAQ is fine. Shorten the answers to one sentence each.

---

## 5. Pages: what to add, keep and skip

| Page | Recommendation | Why |
|---|---|---|
| Home, About, Portfolio, Media, Contact | **Keep** | Matches Thoma Bravo's structure (Portfolio / Firm / Team / Media / Contact) |
| Sector pages (3) | Keep **only if** each gets real holdings; otherwise merge into Portfolio | Thin pages that repeat content look cheap |
| **Approach** | Add as a section on About, not a separate page | Witkoff "Vision", Bessemer "What makes us different" |
| **Press** | Add **only if real coverage exists** **[NEEDS JON]** | Related, Witkoff, Fisher Brothers |
| **Philanthropy** | Add **only if real** **[NEEDS JON]** | Fisher Brothers, ICONIQ Impact; strong signal of wealth |
| Insights / blog | **Skip** unless someone will post quarterly | An empty or stale page looks worse than none |
| Careers | One line in the footer | Fine for a small firm |
| Investor login, audience switchers | **Skip** | Overkill for a private firm |
| Privacy policy | **Add** (simple) | Expected on any serious site with a form |
| 404 page | **Add** (designed) | A detail people notice |

---

## 6. Design system: typography, layout, interaction

### Typography
- **Display face:** switch the display headlines to **Cormorant Garamond** (light 300 plus italic), the most "private bank" free face, used by the Meridia template with the same navy and brass palette. Alternatives: **Bodoni Moda** for high contrast at 48px and up only, or **Source Serif 4** for a more institutional feel. Keep **Newsreader** for long reading and **Instrument Sans** for interface text and labels. The best option would be a paid face (Canela, Ogg or GT Super) if the budget allows.
- **Scale (desktop):** display 88–112 / H1 64 / H2 44 / H3 28 / body 18 at 1.6 line height / labels 12–13.
- **Letter-spacing:**
  - display −0.02em at line height 1.0–1.05;
  - H2 −0.01em;
  - uppercase labels and buttons +0.12 to +0.16em at weight 500;
  - body text normal.
- **Fewer uppercase labels.** There are 15 on Home now. Keep them only where they carry information; on most sections the heading alone is enough.
- **Italic for one emphasised word only**, as already done in "Innovate *and* Lead". Stellar does the same.
- **Numbers:** use tabular lining figures (`font-variant-numeric: tabular-nums lining-nums`) on all figures.

### Colour
- Navy as the main surface, with an ivory or warm off-white alternate (already `#FAF9F6`).
- **Gold at 1–2% of the page only:** rules, small labels, the active nav underline and numerals in figures. **Never** use gold for large fills or gradients. Today, gold fills the primary button, the main hero call-to-action. Consider an outlined gold button or a white fill on navy instead.

### Layout and alignment
- The "label left, text right" pattern is used 5+ times. Vary it with a centred letter, a full-bleed index, and a sticky split.
- **Gallery grid:** fix the lone image on the last row (see Portfolio above).
- **One quote band per site**, not one per page.
- **Line length:** keep body text at 60–68 characters (a few blocks run wider).
- **Spacing:** section padding is consistent. Keep it.

### Interaction and clickability
- **Primary button:** on hover the fill wipes up from the bottom and the arrow nudges 4px (300 ms). Today the hover is a plain colour change.
- **Text links:** an underline that grows from the left on hover. Already used in the nav; apply it everywhere.
- **Focus:** a visible gold focus ring (`:focus-visible`) on every link, button and field, for keyboard users and for polish.
- **Cards:** image zooms to 1.04 over 900 ms and the caption rule extends. No drop shadows; use 1px hairlines at about 30% gold.
- **Forms:** underline-only fields with floating labels and a gold underline on focus.
- **Nav:** add one outlined **"Private inquiries"** button at the right, next to the phone number.

---

## 7. Motion system

Use **one consistent set of moves**, built on **GSAP plus ScrollTrigger**, which is now 100% free including SplitText and DrawSVG, and **Lenis** smooth scroll.

**Timing:**
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for reveals, `cubic-bezier(0.65, 0, 0.35, 1)` for scroll-linked moves.
- Durations: 0.9–1.2 s for reveals, 0.3 s for hovers.

| # | Move | Where | Reference |
|---|---|---|---|
| M1 | **Hero video shrinks into a gold-framed window** as you scroll into the next section (the signature moment) | Home hero | TitanGate Equity (Awwwards Site of the Day), Sobha's zoom on scroll |
| M2 | **Headline reveal line by line**, each line rising out of a mask, 80 ms stagger | Every H1/H2 | Standard on Awwwards finance winners |
| M3 | **Image reveal**: the image wipes upward into view while easing from 1.15× to 1× | Feature images | Meridia, Stellar |
| M4 | **Hairlines draw across** | Rules, process track, footer | Heirloom Office |
| M5 | **Sticky stacked sector cards**: each sector pins and the next slides over it | Portfolio | TitanGate's sticky scroll section |
| M6 | **Figures fade up** (no count-up; research found counters read as cheap) | At a glance band | Thoma Bravo, Fisher Brothers |
| M7 | **Hover states**: underline grow, arrow nudge, image zoom to 1.04 | Everywhere | — |

**Remove or avoid:**
- the word ticker;
- the parallax quote bands (keep one at most);
- the uniform fade-up on every block;
- magnetic buttons and custom cursors;
- scrambled text effects;
- bouncy easing;
- page wipes on every click;
- scroll-hijacking full-page snaps;
- a loading screen.

**Respect reduced motion:** for people who turn motion off, show everything static with no pinning.

---

## 8. Premium motion assets ("GIFs")

**Do not use real GIFs.** They are limited to 256 colours, so navy gradients band, and the files are heavy. Use instead:
- **muted MP4/WebM loops** of 4–8 s, under about 1.5 MB each, with a poster frame;
- **SVG line animation**, a few KB;
- **Lottie** only if designed in After Effects.

**Concepts for Lexicon:**
1. **Gold monogram draw-on:** the L/1 mark draws itself in about 2 s, then fills. Use it in the footer seal and the 404 page. SVG (S)
2. **Line-drawn tower:** architectural elevation lines draw upward on the Real Estate panel. SVG (M)
3. **Sector cinemagraphs:** one 6 s still-with-motion loop per sector (light moving across a facade, a reflection sliding over car paint, clouds over a property). Generate in Google Flow or film for real. Plays only while on screen (M)
4. **Gold growth line:** a thin rising curve on the Financial holdings panel, with no axes or numbers, so it makes no performance claim. SVG (S)
5. **Film-gate iris** opening slowly for the Media studio. SVG/CSS (S)
6. **Subtle grain** at 2–3% on navy sections for texture. CSS (S)

---

## 9. Technical and polish

- **Images:** convert to AVIF/WebP with responsive sizes. Home images drop from 2.4 MB to about 0.7 MB.
- **Fonts:** subset and preload the display face, and use `font-display: swap`.
- **Share preview card:** a 1200×630 image with the logo on navy, so links on WhatsApp, LinkedIn and iMessage look branded. Not present today.
- **Domain and email:** move from `lexicon-bay.vercel.app` to a real domain, with a matching inbox **[NEEDS JON]**.
- **SEO bug:** the word-by-word heading component leaves no real spaces between words in the page text, so search engines read headings like "Whatwemanage". Screen readers are fine because the component adds a label. Fix: put real spaces between the word pieces.
- **Analytics:** privacy-friendly analytics such as Plausible or Vercel Analytics, with no cookie banner needed.
- **Copy QA:** a final proofread of every string. Witkoff's duplicated project copy and Fisher Brothers' "{title}" cookie banner show how small errors look cheap.

---

## 10. Implementation plan

**Phase 1: polish (no client data needed, about 1 day)**
1. Remove the word ticker, the extra quote bands and the filler fact strips.
2. Display font to Cormorant Garamond; tighten the type scale; fewer uppercase labels.
3. Button, link, card and focus states (§6).
4. Contact form sends for real, with the confidentiality line and an introduction field.
5. Fix the gallery grid, the heading-spacing SEO bug and the About closing call-to-action.
6. Share preview image, 404 page, privacy page, image optimisation, WebM video.

**Phase 2: motion system (about 1 day)**
7. Add GSAP, ScrollTrigger and Lenis, then build M1–M7.
8. Monogram draw-on, line-drawn tower, gold growth line, film-gate iris (§8).

**Phase 3: content from Jon (when available)**
9. **At a glance** figures, dated.
10. **Letter from the founder** and a sharper portrait.
11. Featured holdings per sector, 1–3 each.
12. Media projects, 2–4.
13. Milestones timeline, plus press and philanthropy if real.
14. Real domain and email; real photography or footage to replace stock.

### Questions for Jon
1. What year was Lexicon founded?
2. Which 3–4 figures is he comfortable publishing (number of properties, square feet, vehicles, markets)?
3. Can he give 3–4 sentences for a founder's letter, or approve a draft?
4. Can we show 1–3 holdings per sector (name, city, photo)?
5. Which media projects can be named?
6. Is there any press coverage or philanthropy to mention?
7. Is there a domain he owns, and which email should inquiries go to?
8. Does Allie have a photo we can use, or should the team appear without portraits?

---

## Sources (selected)

**Real firms**
- Pictet: pictet.com
- KKR: kkr.com
- Brookfield: brookfield.com
- ICONIQ: iconiq.com
- Thoma Bravo: thomabravo.com
- Rothschild & Co: rothschildandco.com
- Bessemer Trust: bessemertrust.com
- Cresset: cressetcapital.com
- BDT & MSD: bdtmsd.com
- Bezos Expeditions: bezosexpeditions.com
- Witkoff: witkoff.com
- Fisher Brothers: fisherbrothers.com
- Related: related.com
- Aman Residences: aman.com/residences
- RM Sotheby's: rmsothebys.com
- Pagani: pagani.com

**Awwwards**
- awwwards.com/sites/titangate-equity
- awwwards.com/sites/sobha-privy-collection
- awwwards.com/sites/hamilton
- awwwards.com/sites/dock-by-crestyl
- awwwards.com/websites/real-estate

**Agencies and templates**
- stellarmanagement.com
- 360lexingtonave.com
- Framer Heirloom Office: framer.com/marketplace/templates/heirloom-office
- Framer Brookmere and Fundare: framer.com/community/marketplace/templates
- Meridia: html.design/download/meridia-real-estate-website-template
- Dribbble: dribbble.com/tags/private-equity and dribbble.com/tags/private_capital

**Tools**
- GSAP pricing (free): gsap.com/pricing
