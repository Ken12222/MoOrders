# MoStock landing page

A Vite + React landing page for MoStock, an AI ordering system that takes
orders on WhatsApp and sends them to your backend.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in /dist
npm run preview   # serve the production build
```

## Edit the copy

Every piece of text lives in **`src/content.js`**. Search for `TODO` to find
what you still need to fill in:

- `links` – your demo booking, sign-up, login, and docs URLs
- `stats` – placeholder numbers, replace with real ones or delete
- `nav` – the "Pricing" link currently jumps to the closing call to action

## Structure

```
src/
  content.js            all copy and links
  styles/global.css     colour, type, and spacing tokens + buttons
  components/
    AnnouncementBar     dismissible top banner
    Header              nav, Resources dropdown, mobile menu
    Hero + HeroDemo     headline and the animated WhatsApp → order demo
    StatsStrip          four key numbers
    AiSection           "order taker" section with voice-note mockup
    PipelineSection     chat → AI → backend flow diagram
    FeatureCards        dashboard and API cards
    CtaBanner           closing call to action
    Footer
```

## Design tokens

Colours, fonts, and radii are CSS variables at the top of
`src/styles/global.css` (`--purple`, `--lav-50`, `--font-display`, and so on).
Fonts are self-hosted through `@fontsource` packages: Fraunces (headings),
IBM Plex Sans (body), and Poppins (navigation and buttons).

## Notes

- The hero demo starts when it scrolls into view and respects
  `prefers-reduced-motion` (it shows the finished state instead of animating).
- The demo conversation, order card, and catalog example are all in
  `src/content.js` (`demo` and `ai`), so you can swap in your own product examples.
