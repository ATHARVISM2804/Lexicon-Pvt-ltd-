# Lexicon One: home page, then the rest of the site

**Goal:** classy, gently animated, fast, and built **phone-first**, because most visitors will open the site on a phone.

## Where we are now

Measured with Lighthouse, simulating a mid-range phone on a 4G connection, on 6 November 2026.

| Measure | Now | Target |
|---|---|---|
| Performance score | 82 | **95+** |
| Main content visible (LCP) | 4.5 s | **under 2.5 s** |
| First paint | 2.0 s | under 1.2 s |
| Page weight on first load | 3.4 MB | under 1.5 MB before the film starts |
| Layout shift | 0.053 | under 0.02 |
| Accessibility | 96 | 100 |
| SEO | 92 | 100 |

**Why it's slow:**
1. **Google Fonts blocks the first paint** for about 0.6 s.
2. **The headline waits for its entrance animation** before it counts as shown, which inflates the main-content time.
3. **The hero film downloads straight away,** before the page is usable.
4. **Every photo is 1920px wide,** even on a 390px-wide phone.
5. **robots.txt is missing,** so the site answers that request with the home page (43 SEO errors).

---

## Phase 1: home page

### 1A. Speed, phone-first (do first; everything else builds on it)
- **Host the fonts ourselves** (Cormorant and Instrument Sans) and preload them. This removes the 0.6 s block.
- **Show the headline instantly,** then animate the decoration around it, so the main content appears in about 1 s.
- **Load the film after the page settles.** The poster frame shows at once; the video starts about 1 s later. The phone film drops from 4 MB to about 2.5 MB using H.265 with an H.264 fallback.
- **Responsive images** at 640, 1080 and 1600px wide, so phones download about 70% less.
- **Smooth scrolling only on desktop.** Phones keep their native scrolling, which feels better on touch and is lighter on the battery.
- **Load the animation library only where it's used,** to trim the JavaScript.
- **Add robots.txt and a sitemap,** and fix the logo link label (accessibility).

### 1B. Phone-first layout
- **Sticky bottom bar on phones** with **Call** and **Private inquiry** buttons, appearing once you scroll past the hero. This is the single biggest win for a phone audience.
- **"What we manage" becomes swipeable image cards on phones** (photo, number, name, one line), since hover effects don't exist on touch. Desktop keeps the index with hover-reveal photos.
- **"Assess, Manage, Grow" becomes a swipeable carousel on phones** with progress dots and a drawn connecting line.
- **Founder letter on phones:** a smaller portrait beside the name, with the opening line as a large pull quote.
- **At a glance:** a 2×2 grid with hairlines that draw in.
- **Thesis band:** parallax stutters on iPhones, so on phones it becomes a slow, silent cinemagraph built from the film.
- **Media band:** swap the stock projector photo for a looping cut from the film.
- **Footer on phones:** collapsible sections, and phone and address as large tap targets.
- **Basics everywhere:**
  - tap targets of at least 44px;
  - body text at least 16px;
  - safe space for iPhone notches;
  - correct landscape layout on phones.

### 1C. Classier motion (restrained and consistent)
- **Headline reveal:** lines rise in on load, with the gold "and" arriving last.
- **Section headings** reveal line by line with a gold hairline, used the same way everywhere.
- **Images** wipe into view and settle from a slight zoom (already built); tune the timing.
- **Numbers and figures** fade up (no counting-up animations).
- **One signature scroll moment:** the hero film draws into a gold frame (already built). Lighter on phones.
- **Rules:**
  - animate only position and opacity, so everything holds 60fps;
  - nothing longer than 1.2 s;
  - respect "Reduce Motion".

### 1D. Visual polish
- **Section rhythm:** alternate ivory and navy so the page reads in chapters. Give every section the same spacing.
- **Fewer small uppercase labels:** keep them only where they add information.
- **One quote band only;** remove the duplicates.
- **Typography check on phones:** headline sizes, line lengths and orphan words.

**Done when:** the home page scores **95+ performance and 100 accessibility on a phone**, loads its main content **under 2.5 s on 4G**, and has no layout issues from 320px to 1440px.

---

## Phase 2: the same treatment on the other pages

Shared components (header, section heading, image reveal, cards, sticky phone bar, footer) carry the work across. Each page then gets:

| Page | Phone-first changes | Motion and polish |
|---|---|---|
| **About** | Team cards stack with large portraits; principles as a swipe carousel; the Deerfield section as a full-width image with a caption | Line reveals; principle icons draw in |
| **Portfolio** | The stacked cards become swipeable full-height cards on phones; the gallery becomes a horizontal snap strip | Desktop keeps the stacked cards; purchase-test icons draw in |
| **Sector pages (3)** | Mandate, Approach and Horizon as tappable panels that expand; "Other sectors" as a swipe row | Line art (growth line, tower, car) sized for phones |
| **Media** | Formats as a swipe row; stages as a carousel | Iris line art; optional film cut in the hero |
| **Contact** | Big tap-to-call and tap-to-email buttons first, form second; correct phone keyboards (email, tel); sticky "Send inquiry" | Calm confirmation animation on send |
| **Privacy / 404** | Readable line length on phones | — |

**Done when:** every page scores 95+ performance and 100 accessibility on a phone, and passes the device check below.

---

## Phase 3: checks before each push
- **Devices:** iPhone SE, iPhone 14 and 14 Pro Max, Pixel 7, iPad Mini, a 13" laptop and 1440px desktop, in both Safari and Chrome.
- **Lighthouse on a phone** for every page.
- **On-screen checks:** confirm the video is visible and moving, the text is readable on its brightest frames, nothing scrolls sideways, and the console shows no errors.
- **Send one test inquiry** through the live contact form.

---

## Order of work
1. Phase 1A (speed), then 1B (phone layout), then 1C (motion) and 1D (polish). Review on your phone, then push.
2. Phase 2, page by page: About, Portfolio and sectors, Media, Contact. Review after each, push together.
3. Phase 3 checks before every push.
