# Content checklist — before launch

Everything below is a placeholder or a stock stand-in. Work through this list
with the client before the site goes live.

## Must replace

| Item | Where | Why |
|---|---|---|
| Leadership portraits | `src/data/leadership.js` → `portrait` | Jon Stewart and Allie Stewart are named on the page, but shown as monogram tiles. Add real photographs to `public/images/`, uncomment the `portrait` line on each entry, then run `scripts/gen-placeholders.sh`. **Never substitute stock portraits for real people.** |
| Leadership bios | `src/data/leadership.js` → `remit` | The descriptions of what each person is responsible for were written from the firm's positioning, not supplied by them. Both should confirm their own wording. |
| Contact email | `src/data/site.js` → `contact.email` | Currently `inquiries@lexiconone.com`, which is a guess. The form will not reach anyone until this is real. |
| Real estate photography | `real-estate.jpg`, `real-estate-interior.jpg`, `house-modern.jpg`, `hotel.jpg`, `interior-lounge.jpg`, `stair-interior.jpg` | Stock properties. Showing buildings the firm does not own is misleading on an asset management site — this matters most in the portfolio gallery, where images read as owned assets. |
| Automotive photography | `automotive.jpg`, `automotive-detail.jpg`, `supercar.jpg` | Stock vehicles, same reasoning. |
| Office photography | `office.jpg`, `boardroom.jpg`, `workspace.jpg` | Not the Deerfield office. Replace with the firm's own premises. |

Backgrounds (`bg-hero.jpg`, `bg-night.jpg`, `bg-street.jpg`, `bg-rotunda.jpg`,
`chicago.jpg`, `texture-facade.jpg`) are atmospheric city and architecture
shots. They are not presented as the firm's property, so they can stay.

## Copy written for the expanded sections

The following was written to fill out the pages and is **proposed positioning,
not verified fact**. Have the client confirm or rewrite each before launch:

- `src/data/content.js` → `differentiators`, `criteria`, `formats`, `faqs`
- `src/data/leadership.js` → every `role`, `remit`, and the `governance` steps.
  These describe how the firm is organised and were written from its stated
  positioning. Confirm the roles exist and the descriptions are accurate.
- The investment criteria on the portfolio page
- The format list on the media page

The at-a-glance strip (`facts`) deliberately carries no numbers — only
"Three / Asset sectors", "Deerfield, IL / Headquarters", and similar, all
drawn from what the firm has already stated.

## Confirm with the client

- **Business status.** Public records list Lexicon One Enterprises LLC as a
  permanently closed entity at the 508 Mallard Lane address. The site is written
  as an operating firm. Confirm the entity is active, or the copy needs to change.
- **Address and phone.** Verify `508 Mallard Lane, Deerfield, IL 60015` and
  `+1 847-374-1074` are current.
- **Sector descriptions.** The mandate/approach/horizon text in
  `src/data/sectors.js` was written from the firm's own summary. It is
  plausible positioning, not verified fact — the client should confirm each line.

## Deliberately absent

None of the following were invented, and none should be added without the
client supplying real figures:

- Assets under management, returns, or any performance numbers
- Named leadership, team members, or headshots
- Client names, logos, or testimonials
- Track record, deal history, or years in operation

## Image credits

All photography is from [Unsplash](https://unsplash.com), free for commercial
use under the [Unsplash License](https://unsplash.com/license). Attribution is
not required but is appreciated. Source IDs are recorded in
`public/images/CREDITS.txt`.
