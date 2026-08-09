# Technical Implementation Specification
## AI Web-Build Training — Landing Page (v1)

**Status:** Single source of truth for implementation. Supersedes prior strategy/design docs where any conflict exists — this file is what gets handed to OpenCode.

---

# 1. Executive Technical Summary

A single, static, mobile-first landing page built with **Next.js (App Router) + TypeScript + Tailwind CSS**, deployed on **Vercel**. No database, no CMS, no user accounts, no backend beyond a single optional serverless function reserved for a future lead-capture upgrade (not built in v1).

**V1 lead flow:** visitor clicks one CTA → opens the WhatsApp group invite link directly. No form, no wait, no intermediate step. This is the simplest, fastest, lowest-friction option and is the explicit recommendation over a name+WhatsApp-number form for v1 (reasoning in Section 15).

The whole build is one route (`/`), ~9 content sections, a header, a footer, and a mobile sticky CTA. Everything is designed to be buildable, testable, and deployable in a single OpenCode session.

---

# 2. Product & Conversion Objective

**Single objective:** convert cold Meta-ad traffic into a click-through to the WhatsApp group for the free live training titled around "build and launch websites with AI agents."

**Single primary conversion event:** WhatsApp CTA click (tracked as a proxy `Lead` event — see Section 16 for the explicit limitation this implies).

**Non-objectives (do not build):** email capture, blog, login, dashboard, multi-page site, paid checkout, CMS-driven content.

---

# 3. Target User

Nigerian digital marketers, performance marketers, media buyers, funnel builders, and growth operators — comfortable with digital tools (Meta Ads Manager, Canva, WordPress/Elementor, Systeme.io) but not software engineers. Significant mobile traffic, price-sensitive, high pre-existing skepticism toward "make money online" style pages. Trust is earned through demonstration and specificity, not claims.

---

# 4. Final Messaging Strategy

**Who:** digital marketers and funnel builders
**What:** build and launch real websites/landing pages themselves
**How:** by directing AI coding agents (not by learning to code line-by-line)
**Why:** speed, independence from developers, and control over their own ideas
**Next step:** join a free live training via WhatsApp

**Headline formula chosen:** lead with the capability + the specific removal (no developer, no builder, no waiting), because "learn AI coding" is generic and doesn't communicate outcome. The word "direct" reassures the target user that they don't need to learn Code Academy-style syntax; they remain in charge.

**Tone:** direct, specific, calm. No countdown, no fake urgency, no "unlock"/"revolutionize"/"future is here" language anywhere in the copy.

---

# 5. Complete Landing Page Copy

All copy is final and ready to implement. Bracketed placeholders (`[LIKE_THIS]`) must not be filled with invented data — they stay as literal placeholder strings in the code until the person supplies real values (see Section 30 checklist).

## Header

- Wordmark/logo text: `[BRAND_NAME]` (placeholder — no business name has been finalized)
- Single header CTA: "Join free training"

## Hero

- Eyebrow: `FREE LIVE TRAINING`
- H1: **Build and launch real websites yourself — using AI, not a developer.**
- Subheadline: A live session for marketers, media buyers, and funnel builders who are tired of waiting on developers or fighting page builders to bring their own ideas online.
- Primary CTA: **Join the free training**
- CTA microcopy: You'll join a WhatsApp group with the session link, time, and reminders. No email needed.
- Visual caption (beneath hero teaser): AI agent building a live page — see the full demo below

## Section 2 — The Shift

- Eyebrow: `THE SHIFT`
- H2: **You don't need a developer for every website change anymore.**
- Body: If you've waited days for a small landing-page change, paid a developer for a one-line fix, or hit a wall inside a builder because it couldn't do what you needed — that gap between idea and live page is the real bottleneck. The gap between you and a live page is what we remove.
- Old way: Idea → Designer → Developer → Revisions → Launch (weeks)
- New way: Idea → Specification → AI agent → Review → Deploy (same day)

## Section 3 — See It Work

- Eyebrow: `SEE IT WORK`
- H2: **Watch a real build, start to finish.**
- Body: A real landing page built live, in one session, no cuts.
- Caption: `[DEMO_LENGTH_PLACEHOLDER]` — e.g. "Full build, recorded in real time — [MM:SS]"

## Section 4 — How It Works (5 steps)

1. Specify — describe the page you want in plain language
2. Direct — give examples, structure, references
3. Generate — the agent writes the working files
4. Review — you decide what changes
5. Deploy — the page goes live, no separate handoff

## Section 5 — Who It's For / Not For

- Eyebrow: `WHO IT'S FOR`
- For: marketers, media buyers, funnel builders, founders who want to direct builds.
- Not for: people who want a full dev team handed over, or who expect a low-code tool rather than directing AI.

## Section 6 — Instructor

- Name: **Abass Odunola**
- Positioning: Product Designer · UI/UX practitioner
- One line: a product designer, not a developer.
- Photo placeholder: `[INSTRUCTOR_PHOTO]`

## Section 7 — FAQ

1. **Do I need any coding experience?** No. You'll direct the agent in plain language. Understanding what a good page needs to do matters more than knowing how to code it.
2. **Is this just ChatGPT with extra steps?** No. A coding agent works inside a real project — creating and editing actual files and running them — rather than just giving you code to copy and paste.
3. **Why not just use Framer, Webflow, or WordPress?** Those are still useful tools. This isn't about replacing them — it's about having another option when you need something a template can't do, or when you want to move without waiting on a build queue.
4. **What if the AI gets something wrong?** It will, sometimes. Part of the session covers how to review, catch, and correct that — the agent doesn't remove the need for your judgment.
5. **What do I need to attend?** A laptop and an internet connection. Specific tool setup will be covered in the session.
6. **Is this really free?** Yes. This live session is free. It leads into a paid, hands-on cohort for anyone who wants to go further, but the session itself has no cost.
7. **What happens after I join the WhatsApp group?** You'll get the session link, a reminder before it starts, and any setup steps you should complete beforehand.

## Section 8 — Final CTA

- H2: The session covers everything above — live.
- CTA: **Join the free training**
- Microcopy: Join the WhatsApp group now — session details and reminders go out there.

## Footer

- `[BRAND_NAME]` + line: "The gap between you and a live page is what we remove."

---

# 6. Final Information Architecture

```
Header → Hero → The Shift → See It Work (demo) → How It Works → What You'll Learn → Who It's For/Not For → Instructor → FAQ → Final CTA → Footer
```

Mobile-only sticky CTA bar active from the point the hero CTA scrolls out of view through the FAQ section, suppressed once the Final CTA section is in view.

---

# 7. Section-by-Section UX Specification

| Section | Objective | Psychological purpose | CTA present | Mobile behavior |
|---|---|---|---|---|
| Hero | Establish what/who/why in <10s | Immediate relevance recognition | Yes, primary | CTA appears before the visual, full-width button |
| The Shift | Frame relevance + explain the mechanism | Problem recognition + concept literacy | No | Before/after stacks vertically |
| See It Work | Prove it's real | Belief shift ("it can actually do that") | No (video interaction only) | Full-width video, tap-to-play |
| How It Works | Teach the real process | Reduces "black box" anxiety | No | Vertical step stack |
| What You'll Learn | Set concrete expectations | Justifies the time investment | No | Single-column cards |
| Who For/Not For | Self-qualification | Reduces mismatched signups, increases felt relevance for the right visitor | No | "For" card first, then "not for" |
| Instructor | Build trust in the teacher | Credibility transfer | No | Photo above text |
| FAQ | Remove final objections | Friction/risk reduction | No inline (last item soft-links to Final CTA) | Accordion, 48px tap rows |
| Final CTA | Close | Clear, calm final action | Yes, primary (largest) | Full-width button, generous padding |

Sticky mobile CTA: same button treatment as primary CTA, always visible on mobile between hero and FAQ, fires the same click handler and destination as the primary CTAs.

---

# 8. Visual Design Specification

- Base font stack: **Space Grotesk** (display/headings), **Inter** (body), **IBM Plex Mono** (step labels, captions, metadata only — never decorative).
- One accent color (`--accent`, amber-gold `#C6841E`) used only for CTA fills and rare emphasis — never as a second competing action color.
- Default component treatment is a 1px border, not a shadow. Shadows are reserved for the demo video container (subtle), the sticky CTA (elevated), and a modal if one is ever added (not in v1).
- Section backgrounds alternate between `--background` and `--muted` for scroll rhythm — no dividers/rules needed between sections.
- Radius stays in the 4–20px range everywhere except the eyebrow/badge pills (999px).

---

# 9. Design Token System

Implemented as CSS custom properties in `globals.css`, mapped into Tailwind via `tailwind.config.ts` `theme.extend`, so every component references semantic Tailwind classes (`bg-background`, `text-foreground`, `bg-accent`) — never raw hex values in component code.

```css
/* globals.css — :root */
:root {
  --background: #F7F5F1;
  --foreground: #17191C;
  --card: #FFFFFF;
  --card-foreground: #17191C;

  --primary: #1E3A5C;
  --primary-foreground: #FFFFFF;

  --secondary: #EDE8DD;
  --secondary-foreground: #17191C;

  --muted: #EFEDE7;
  --muted-foreground: #6B6A63;

  --accent: #C6841E;
  --accent-hover: #B27419;
  --accent-active: #9C6415;
  --accent-foreground: #FFFFFF;
  --accent-soft: #F5E6CC;

  --border: #E2DDD1;
  --input: #FFFFFF;
  --ring: #C6841E;

  --success: #3F7A5C;
  --destructive: #A8412E;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --radius-pill: 999px;

  --shadow-subtle: 0 1px 2px rgba(23,25,28,0.04);
  --shadow-card: 0 2px 8px rgba(23,25,28,0.06);
  --shadow-elevated: 0 8px 24px rgba(23,25,28,0.10);
}
```

```ts
// tailwind.config.ts — theme.extend excerpt
colors: {
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  card: { DEFAULT: 'var(--card)', foreground: 'var(--card-foreground)' },
  primary: { DEFAULT: 'var(--primary)', foreground: 'var(--primary-foreground)' },
  secondary: { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
  muted: { DEFAULT: 'var(--muted)', foreground: 'var(--muted-foreground)' },
  accent: { DEFAULT: 'var(--accent)', hover: 'var(--accent-hover)', active: 'var(--accent-active)', foreground: 'var(--accent-foreground)', soft: 'var(--accent-soft)' },
  border: 'var(--border)',
  input: 'var(--input)',
  ring: 'var(--ring)',
  success: 'var(--success)',
  destructive: 'var(--destructive)',
},
fontFamily: {
  display: ['"Space Grotesk"', 'sans-serif'],
  body: ['"Inter"', 'sans-serif'],
  mono: ['"IBM Plex Mono"', 'monospace'],
},
borderRadius: {
  sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)', full: 'var(--radius-pill)',
},
boxShadow: {
  subtle: 'var(--shadow-subtle)', card: 'var(--shadow-card)', elevated: 'var(--shadow-elevated)',
},
```

**Rule enforced project-wide:** no component file may contain a raw hex value, an arbitrary Tailwind bracket color (`bg-[#...]`), or an arbitrary shadow/radius value. Every visual value routes through this token layer. If OpenCode encounters a value not covered by a token while building, it should add the token to `globals.css`/`tailwind.config.ts` first, not hardcode it inline.

**One accessibility adjustment to the approved palette:** `--muted-foreground` (#6B6A63) on `--muted` (#EFEDE7) gives a contrast ratio of approximately 4.6:1 — sufficient for body text at 16px+ but should not be used below 14px. `--accent-foreground` (white) on `--accent` (#C6841E) gives approximately 3.1:1, which is sufficient for the large-scale CTA button text (18px/600 clears the 3:1 large-text threshold) but must not be reused for small text or icons at accent-on-background sizes below 18px/600.

---

# 10. Responsive Design Specification

Breakpoints (Tailwind defaults, no custom breakpoints needed): base (< 640px, covers 320/375/390/430), `sm` unused, `md: 768px` (tablet), `lg: 1024px` (desktop).

| Element | Mobile (base) | Tablet (md:) | Desktop (lg:) |
|---|---|---|---|
| Container padding | 20px (16px at ≤ 375px via a `min-[375px]` conditional if needed) | 40px | clamp to 80px max |
| Hero H1 | 30–34px | 42px | 56px |
| Hero layout | Stacked (text → CTA → visual) | Stacked | Stacked (deliberately, not side-by-side) |
| Before/after (Shift section) | Stacked, arrow rotated down | Side by side | Side by side |
| Outcome cards | 1 column | 2 columns | 3 columns |
| Who for/not for | Stacked, "for" first | Side by side | Side by side |
| Build-strip | Vertical stack, vertical rule | Vertical | Horizontal, horizontal rule |
| FAQ | Full width, 48px min tap row height | Same | Max 720px centered |
| Sticky CTA | Active | Suppressed (≥ 768px) | Not rendered |

All layout changes are implemented with Tailwind responsive prefixes on a single component tree — no separate mobile/desktop component variants.

---

# 11. Component Architecture

```
components/
  layout/
    Header.tsx
    Footer.tsx
    StickyCTA.tsx
  sections/
    Hero.tsx
    TheShift.tsx
    DemoVideo.tsx
    BuildStrip.tsx
    LearningOutcomes.tsx
    AudienceFit.tsx
    Instructor.tsx
    FAQ.tsx
    FinalCTA.tsx
  ui/
    CTAButton.tsx
    Eyebrow.tsx
    ContentCard.tsx
    FramedMedia.tsx
    StepMarker.tsx
    AccordionItem.tsx
```

**CTAButton.tsx** is the single reusable CTA component (size prop: `default | large`), used by Hero, FinalCTA, and StickyCTA — enforces "one CTA system, no competing styles" at the code level.

**ContentCard.tsx** covers outcome cards, who-for/not-for list containers, and FAQ item shells — one component, prop-driven variants.

Component count is intentionally small (≈16 files) for a single-page site — no page router beyond `app/page.tsx`.

---

# 12. Content Architecture

```
content/
  copy.ts       — all section copy from Section 5 above, typed and exported as constants
  faq.ts         — FAQ question/answer array
  outcomes.ts    — learning outcomes array
  audience.ts    — for/not-for list arrays
  config.ts      — runtime placeholders (see below)
```

```ts
// content/config.ts
export const siteConfig = {
  brandName: "[BRAND_NAME]",
  webinarDate: "[WEBINAR_DATE]",
  webinarTime: "[WEBINAR_TIME]",
  whatsappGroupLink: "[WHATSAPP_GROUP_LINK]",
  canonicalUrl: "[CANONICAL_URL]",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};
```

Editing copy or placeholders never requires touching a layout component.

---

# 13. Asset Architecture

```
public/
  images/
    instructor.jpg        [INSTRUCTOR_PHOTO placeholder]
    og-image.jpg           [OG_IMAGE placeholder, 1200x630]
    demo-poster.jpg         [DEMO_POSTER placeholder]
  videos/
    ai-agent-build.mp4      [DEMO_VIDEO placeholder]
  icons/
    favicon.ico
    icon.svg
```

Until real assets exist, `demo-poster.jpg` and `instructor.jpg` should be neutral placeholder images (flat `--muted` background with a centered mono-font label, generated as simple SVGs, e.g. "Instructor photo — coming soon") rather than stock photography.

---

# 14. Video/Demo Specification

- Format: self-hosted `.mp4` (H.264), no third-party embed.
- Aspect ratio: `16/9` via CSS `aspect-ratio`, `object-fit: cover` on mobile crops.
- Poster image: required, shown by default; video element uses `preload="none"` and `poster={demoPoster}` so no video bytes download until the visitor taps play.
- Play interaction: custom play-button overlay replaces itself with native controls once tapped; uses the native `<video controls>` element after first play — no custom scrubber library.
- Autoplay: none on this component (autoplay-with-loop is reserved only for the small hero teaser clip, which should be a separate, much smaller, muted, looping asset — recommend under 2MB, under 6 seconds — kept visually distinct from this full demo).
- Loading strategy: video tag present in the DOM at build but loads no bytes until interaction (`preload="none"`); the component itself can still be code-split/lazy-mounted via `next/dynamic` if desired, though with `preload="none"` this is a minor optimization.
- Fallback: if `[DEMO_VIDEO]` placeholder is still in place, render the labeled placeholder state ("Demo video — coming soon") instead of a broken video element — check via a simple existence/config flag in `content/config.ts`, not a runtime file-fetch check.
- Accessibility: video needs a visible text caption/label already covered by the section copy; if spoken narration exists in the final asset, captions (`<track kind="captions">`) should be added once a transcript exists — flagged as a launch-checklist item.

---

# 15. WhatsApp / Lead Capture Flow

**Decision: Option A — direct WhatsApp group link, no form, for v1.**

Reasoning:
- **Friction:** a form adds a field, a submit action, and a wait state for zero benefit to the visitor.
- **Simplicity/budget:** Option B requires a storage destination, a serverless function, validation, and error states — real implementation surface for a v1 whose brief says "do not over-engineer."
- **Nigerian user behavior:** WhatsApp deep links reliably open the native app on mobile (the majority of this traffic).
- **What's lost:** no captured name/number if the visitor doesn't ultimately join the group. This is an honest, acceptable tradeoff for an initial test.

**Implementation:**
- CTA renders as an `<a>` tag, `href={siteConfig.whatsappGroupLink}`, `target="_blank"`, `rel="noopener noreferrer"`.
- `onClick` handler fires tracking events (Meta Pixel `Lead`, GA4 `whatsapp_click` with a `location` param: `hero | sticky | final`) synchronously before the browser follows the link — no artificial delay needed since it's a native anchor navigation.
- No phone number formatting, no validation, no modal — none of the form requirements apply in v1 since no form exists.

---

# 16. Analytics & Tracking Specification

**Meta Pixel** (loaded via `next/script`, `strategy="afterInteractive"`):
- `PageView` — fires automatically on load.
- `Lead` — fires on every WhatsApp CTA click (hero, sticky, final — same event, `location` custom parameter distinguishes source).

**Google Analytics (GA4)** (also via `next/script`):
- `page_view` — automatic.
- `whatsapp_click` — custom event, params: `{ location: 'hero' | 'sticky' | 'final' }`.
- `faq_expand` — optional, low-priority, only if trivial to add (params: `{ question: string }`).

**UTM handling:** on page load, read `utm_source/medium/campaign/content/term` from the URL query string and store them in `sessionStorage`. Not appended to the WhatsApp link itself, but included as custom parameters on the `Lead`/`whatsapp_click` events.

**Explicit tracking limitation:** a WhatsApp CTA click proves intent to join, not group membership. There is no technical mechanism on this landing page to confirm someone actually joined or stayed in the WhatsApp group. Do not report "conversions" as confirmed joins — label the event as `whatsapp_click` / `Lead (click)`, never `Registration Confirmed`.

**Failure isolation:** both Pixel and GA scripts load via `next/script` with no blocking behavior on the CTA's own click handler — if either script fails to load or errors, the anchor tag's native `href` navigation still proceeds unaffected. Wrap each tracking call (`fbq(...)`, `gtag(...)`) in its own try/catch that swallows and no-ops on error.

---

# 17. SEO Specification

- `<title>`: "Build websites with AI agents — free live training"
- Meta description: "A free live session for Nigerian marketers and funnel builders on building and launching real websites using AI coding agents — no developer needed."
- Canonical: `[CANONICAL_URL]`
- Open Graph: `og:title`, `og:description` (same as above), `og:image` → `[OG_IMAGE]` (1200×630), `og:type: website`
- Twitter card: `summary_large_image`, same title/description/image
- Favicon + `icon.svg`
- Single `<h1>` (hero headline only), logical `h2`/`h3` descent through sections — no skipped heading levels
- Image `alt` text required on every `<img>` — descriptive ("Instructor photo of Abass Odunola"), not "image1"
- `robots`: `index, follow`
- No structured data (JSON-LD) — not genuinely useful for a single lead-gen page at this stage.

---

# 18. Accessibility Specification

- Semantic landmarks: `<header>`, `<main>`, `<footer>`, one `<h1>`, sequential heading levels within `<main>`.
- All interactive elements are real `<button>` or `<a>` tags — no `<div onClick>`.
- Visible focus states on every interactive element using `ring` token (`focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`).
- FAQ accordion: native `<details>/<summary>` or a fully keyboard-operable custom component with `aria-expanded` state — native `<details>` is recommended for v1.
- Color contrast: verified per Section 9's accessibility note.
- `prefers-reduced-motion`: all scroll-reveal/stagger/hero-teaser-loop animations wrapped in a media query check.
- Video: native controls after first play are keyboard-accessible; the custom play-button overlay is a real `<button>` with `aria-label="Play demo video"`.
- Form: N/A in v1 (no form built).

---

# 19. Performance Specification

- Fonts: self-hosted via `next/font/google` for Space Grotesk, Inter, IBM Plex Mono — subset to Latin only.
- JS: no animation library dependency — CSS transitions/`@keyframes` and the native Intersection Observer API (small custom hook, ~20 lines) handle all scroll-reveal behavior. No Framer Motion, no GSAP.
- Images: `next/image` for all raster images (instructor photo, OG image, demo poster).
- Video: `preload="none"` as specified in Section 14.
- Third-party scripts: only Meta Pixel and GA4, both `next/script strategy="afterInteractive"`.
- Target Lighthouse (mobile, throttled): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- No icon font library — use lightweight inline SVGs for the handful of icons needed (checkmark, dash, play, chevron).

---

# 20. Error Handling

| Scenario | Behavior |
|---|---|
| Analytics script fails to load | Silently no-ops (try/catch per Section 16); page and CTA remain fully functional |
| WhatsApp link placeholder still unset (`[WHATSAPP_GROUP_LINK]`) | CTA renders but should visibly warn only in local/dev builds (console warning), not in production UI |
| Video fails to load/play | Falls back to poster image with the play button still visible; a caught `onError` on the `<video>` element swaps to a "video unavailable — check back soon" state |
| Missing instructor/OG image asset | `next/image` with a defined fallback/placeholder source, never a broken image icon |
| Network failure generally | Static page has no server-side data dependency; network failure only affects font/script loading, not core content rendering |

No form exists in v1, so form-specific error states are deferred to the future-upgrade spec.

---

# 21. Security / Privacy

- No secrets in client-side code. `NEXT_PUBLIC_*` env vars are exposed to the browser — only non-sensitive IDs (Pixel ID, GA ID) should use this prefix. No server-side secrets in v1.
- No `.env` files committed to GitHub — `.env.local` is gitignored by default; verify explicitly.
- No personal data is collected in v1 (no form). If Option B is built later, add a one-line privacy notice near the form.

---

# 22. Browser Compatibility

Support current versions of Chrome, Safari, Edge, Firefox, Mobile Safari (iOS), and Android Chrome. No polyfills needed. Do not add support for Internet Explorer or legacy Android browsers.

---

# 23. Testing Strategy

**Functional:** every CTA instance (hero, sticky, final) opens the correct WhatsApp link in a new tab and fires both tracking events; FAQ accordion items expand/collapse independently; video poster shows by default, tapping play loads and plays the video, native controls work after first play.

**Responsive:** manually verify at 320 / 375 / 390 / 430 / 768 / 1024 / 1440px — hero headline wrap (no orphaned single words), CTA tap target size (≥ 48px height), before/after and who-for/not-for stacking, build-strip orientation switch, sticky CTA appears/disappears at correct scroll points and breakpoint.

**Accessibility:** full keyboard traversal, visible focus ring on every stop, screen-reader spot check (VoiceOver or NVDA), contrast-check the accent-on-white CTA text and muted-foreground body text.

**Performance:** run Lighthouse (mobile, throttled) against the deployed Vercel preview URL; verify the video does not download until interaction.

**Analytics:** confirm via Meta Pixel Helper and GA4 DebugView that `PageView`/`page_view` fire once on load and `Lead`/`whatsapp_click` fire exactly once per CTA click with the correct `location` parameter; confirm UTM params are captured.

**Browser:** manual smoke test on Chrome, Safari, Edge, Firefox desktop, and Mobile Safari + Android Chrome.

---

# 24. Project/File Structure

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── layout/ (Header, Footer, StickyCTA)
│   ├── sections/ (Hero, TheShift, DemoVideo, BuildStrip, LearningOutcomes, AudienceFit, Instructor, FAQ, FinalCTA)
│   └── ui/ (CTAButton, Eyebrow, ContentCard, FramedMedia, StepMarker, AccordionItem)
├── content/
│   ├── copy.ts
│   ├── faq.ts
│   ├── outcomes.ts
│   ├── audience.ts
│   └── config.ts
├── lib/
│   └── analytics.ts
├── public/
│   ├── images/
│   ├── videos/
│   └── icons/
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── .env.local (gitignored)
```

---

# 25. Environment Variables

```
NEXT_PUBLIC_META_PIXEL_ID=       # Meta Pixel ID, e.g. 1234567890
NEXT_PUBLIC_GA_ID=               # GA4 Measurement ID, e.g. G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=            # canonical production URL, used for OG/canonical tags
```

No other secrets required for v1. All three are safely browser-exposable (Pixel/GA IDs are not sensitive) — set in Vercel's Environment Variables dashboard for Production/Preview, and in `.env.local` (gitignored) for local development.

---

# 26. Dependencies

```
next
react / react-dom
typescript
tailwindcss / postcss / autoprefixer
@types/react / @types/node (dev)
```

That's the complete dependency list for v1. No animation library, no form library, no state-management library, no UI component library, no icon font package (inline SVGs instead).

---

# 27. Implementation Sequence

1. Scaffold Next.js + TypeScript + Tailwind project.
2. Wire up `globals.css` tokens and `tailwind.config.ts` theme extension (Section 9) before building any component.
3. Build `components/ui/*` primitives first (CTAButton, Eyebrow, ContentCard, FramedMedia, StepMarker, AccordionItem).
4. Build `content/*` files with the final copy from Section 5, verbatim.
5. Build sections in page order (Hero → TheShift → DemoVideo → BuildStrip → LearningOutcomes → AudienceFit → Instructor → FAQ → FinalCTA), assembling each into `app/page.tsx` as it's completed.
6. Add Header, Footer, StickyCTA.
7. Wire up analytics (`lib/analytics.ts`, Pixel/GA `next/script` tags in `layout.tsx`, click handlers on all CTA instances).
8. Add SEO metadata (`app/layout.tsx` `metadata` export) and placeholder assets.
9. Run the full responsive/accessibility/performance pass from Section 23.
10. Fix any errors found; re-verify.
11. Report remaining manual configuration items (Section 30 checklist) back to the person.

---

# 28. OpenCode Build Instructions

*(This section is self-contained. If pasted into a fresh OpenCode session without the rest of this document, it still fully specifies the build.)*

You are building a single-page, mobile-first, conversion-focused landing page for a free live training on using AI coding agents to build websites, targeted at Nigerian digital marketers and funnel builders. This is a lead-generation page only — its single job is to get a visitor to click one CTA that opens a WhatsApp group link. It is not a course sales page, not a SaaS product page, and not a multi-page site.

**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS. Deploy target: Vercel. No database, no CMS, no backend API route in this version.

**Steps:**

1. **Scaffold** a new Next.js + TypeScript + Tailwind project.
2. **Implement the design token system exactly as specified** in the CSS and Tailwind config blocks in Section 9 — every color, radius, and shadow value used anywhere in the app must route through these tokens. Never hardcode a hex value, an arbitrary Tailwind bracket value, or an inline style color in a component.
3. **Load three fonts** via `next/font/google`: Space Grotesk (display/headings), Inter (body), IBM Plex Mono (technical labels/captions only — never decorative). Wire them into the Tailwind `fontFamily` config as `display`, `body`, `mono`.
4. **Build the UI primitives first**, in `components/ui/`: `CTAButton` (single reusable button, `size: 'default' | 'large'` prop, styled per the CTA spec — accent-filled, `radius-md`, hover/active/focus states), `Eyebrow` (mono uppercase pill label), `ContentCard`, `FramedMedia` (bordered media container used for the hero teaser and demo video), `StepMarker` (used only in the How It Works section), `AccordionItem` (native `<details>/<summary>` based, for FAQ).
5. **Create the content files** in `content/`: `copy.ts`, `faq.ts`, `outcomes.ts`, `audience.ts`, `config.ts`. Populate them with the exact copy provided in Section 5 — do not paraphrase, shorten, or invent alternative copy. Populate `config.ts` with the literal placeholder strings shown (`[BRAND_NAME]`, `[WEBINAR_DATE]`, `[WEBINAR_TIME]`, `[WHATSAPP_GROUP_LINK]`, `[CANONICAL_URL]`).
6. **Build each section component** in `components/sections/`, in this exact order, matching Sections 7, 8, 10, and 14: Hero, TheShift, DemoVideo, BuildStrip, LearningOutcomes, AudienceFit, Instructor, FAQ, FinalCTA. Assemble them into `app/page.tsx` in this order as you complete each one.
7. **Build Header, Footer, and StickyCTA** in `components/layout/`. StickyCTA is mobile-only (hidden at `md:` and above), appears once the hero CTA scrolls out of view, and disappears once the FinalCTA section scrolls into view — implement with an Intersection Observer hook, not a scroll-position pixel calculation.
8. **Implement the video component** exactly per Section 14: self-hosted `<video>` element, `preload="none"`, poster image shown by default, custom play-button overlay (a real `<button>` with `aria-label="Play demo video"`) that reveals native controls on first interaction. If the video asset path in `config.ts` is still a placeholder, render the labeled "coming soon" fallback state instead of a broken player.
9. **Implement the WhatsApp CTA behavior** exactly per Section 15: every CTA instance is a real `<a>` tag pointing to `siteConfig.whatsappGroupLink`, `target="_blank"`, `rel="noopener noreferrer"`. On click, fire the tracking calls from step 10 — do not block or delay the navigation.
10. **Wire up analytics** per Section 16: Meta Pixel and GA4 via `next/script strategy="afterInteractive"` in `app/layout.tsx`, reading IDs from `NEXT_PUBLIC_META_PIXEL_ID` and `NEXT_PUBLIC_GA_ID`. Implement `lib/analytics.ts` with `trackPixelLead(location)` and `trackGAEvent(name, params)` helper functions, each wrapped in try/catch so a failure never throws. On page load, parse `utm_source/medium/campaign/content/term` from the URL and store them in `sessionStorage`; include them as parameters on the CTA click events.
11. **Add SEO metadata** via the Next.js `metadata` export in `app/layout.tsx`, using the exact values specified in Section 17 (title, description, OG tags, Twitter card, canonical using `NEXT_PUBLIC_SITE_URL`).
12. **Implement accessibility requirements** from Section 18: semantic landmarks, one `<h1>`, sequential headings, visible focus rings using the `ring` token on every interactive element, `prefers-reduced-motion` handling on all scroll/stagger animations and the hero teaser loop, real alt text on every image.
13. **Implement the responsive behavior** exactly as specified in the table in Section 10, using Tailwind's default breakpoints (`md: 768px`, `lg: 1024px`) — do not introduce custom breakpoints.
14. **Do not add anything not specified here**: no blog, no login/dashboard, no additional pages, no dark mode, no animation library, no icon font package, no lorem ipsum, no stock photography standing in for the instructor or demo, no fabricated testimonials/numbers/statistics anywhere.
15. **Run the project locally**, inspect the browser console and terminal for errors, and fix all of them.
16. **Verify responsiveness** at 320, 375, 390, 430, 768, 1024, and 1440px widths, checking specifically for hero headline wrapping, CTA tap-target size, and the sticky CTA's appear/disappear behavior.
17. **Verify all interactions**: every CTA opens the correct link in a new tab, FAQ items expand/collapse correctly and independently, the video poster/play/controls flow works, keyboard Tab order reaches every interactive element with a visible focus state.
18. **Do not invent missing information.** Anywhere a placeholder value (`[BRAND_NAME]`, `[WEBINAR_DATE]`, `[WEBINAR_TIME]`, `[WHATSAPP_GROUP_LINK]`, `[CANONICAL_URL]`, `[INSTRUCTOR_PHOTO]`, `[DEMO_VIDEO]`, `[DEMO_POSTER]`, `[OG_IMAGE]`) is still unset, leave the literal placeholder string in place — do not fabricate a plausible-looking real value.
19. **At the end of the build, report explicitly**: which placeholder values still need to be supplied before launch (should match the checklist in Section 30), any Lighthouse/accessibility numbers achieved, and anything you were unable to fully verify (e.g. real analytics firing, since that requires real Pixel/GA IDs).

---

# 29. GitHub/Vercel Deployment Requirements

1. Initialize git in the OpenCode local project, commit, push to a new GitHub repository.
2. Connect the repository to a new Vercel project (framework preset: Next.js — auto-detected).
3. In Vercel's project settings, add the three environment variables from Section 25 for both Production and Preview environments.
4. Trigger a deploy; verify the Preview URL loads correctly and passes the Section 23 testing pass before promoting to Production.
5. Once a custom domain is available, add it in Vercel's Domains settings and update `NEXT_PUBLIC_SITE_URL` accordingly, then redeploy so canonical/OG tags reflect the real domain.
6. No additional infrastructure (no database, no external API, no serverless function) is required for v1 deployment.

---

# 30. Pre-Launch Configuration Checklist

```text
[ ] Brand/wordmark name
[ ] Webinar date
[ ] Webinar time
[ ] WhatsApp group invite link
[ ] Instructor photo
[ ] Demo video file (compressed .mp4, self-hosted)
[ ] Demo poster image
[ ] Demo video actual duration (used in the caption copy)
[ ] Meta Pixel ID
[ ] Google Analytics (GA4) Measurement ID
[ ] Canonical production URL / custom domain
[ ] Favicon + icon.svg
[ ] Open Graph image (1200×630)
[ ] Verify Meta Pixel "Lead" event firing correctly in Events Manager
[ ] Verify GA4 "whatsapp_click" event firing correctly in DebugView
[ ] Confirm WhatsApp group link is valid and not expired/full (WhatsApp group invite links can expire or hit member caps — verify before spending ad budget)
```

---

# 31. QA Checklist

```text
Functional
[ ] All 3 CTA instances (hero, sticky, final) link to the correct WhatsApp URL
[ ] All 3 CTA clicks fire both Pixel Lead and GA4 whatsapp_click events with correct `location` param
[ ] FAQ accordion items open/close independently, keyboard-operable
[ ] Video: poster shows by default, play button loads and plays video, native controls work after first play
[ ] Sticky CTA appears after hero CTA scrolls out of view (mobile only), disappears at Final CTA section

Responsive
[ ] 320px — no text overflow, no horizontal scroll, headline wraps cleanly
[ ] 375px / 390px / 430px — same checks
[ ] 768px (tablet) — two-column sections activate correctly
[ ] 1024px+ (desktop) — full grid, horizontal build-strip

Accessibility
[ ] Full keyboard Tab traversal reaches every interactive element in logical order
[ ] Visible focus ring on every interactive element
[ ] Screen reader reads heading structure and image alt text sensibly
[ ] prefers-reduced-motion disables scroll/stagger/loop animations

Performance
[ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
[ ] Video downloads zero bytes until user taps play (verified in Network tab)
[ ] No console errors on load

Analytics
[ ] PageView / page_view fire once on load
[ ] Lead / whatsapp_click fire exactly once per CTA click, correct location param
[ ] UTM params captured from a test URL and attached to click events

Browser
[ ] Chrome desktop  [ ] Safari desktop  [ ] Edge  [ ] Firefox
[ ] Mobile Safari (iOS)  [ ] Android Chrome
```

---

# 32. Known Limitations / Future Improvements

- **No confirmed-membership tracking.** As stated in Section 16, a CTA click is not proof of WhatsApp group membership. If this becomes a real limitation once ad spend starts, the recommended upgrade path is Option B below.

- **Option B (name + WhatsApp number capture) — full spec, ready to build later, not built in v1:**
  - Fields: name (text, required), WhatsApp number (tel, required, Nigerian format validated client-side as `^(\+234|0)[789]\d{9}$` with a friendly inline error message).
  - Submission: client-side `fetch` POST to a single Vercel serverless function (`app/api/lead/route.ts`), no page reload.
  - Storage: forwarding the submission to a Google Sheet via a Google Apps Script Web App URL (free) — the serverless function receives the POST and forwards it server-side, keeping the Apps Script URL out of client-side code.
  - Behavior: on successful POST, immediately redirect (`window.location.href`) to the WhatsApp link — no waiting screen.
  - Error state: if the POST fails, still redirect to WhatsApp (never block the visitor's path to the group) but show a brief inline note that the name wasn't saved.
  - Loading state: submit button shows a disabled "Joining…" state for the duration of the POST.
  - Privacy: add one line near the form — "Used only to save your spot and follow up about the training."
  - Analytics: fire `Lead`/`whatsapp_click` on successful submission rather than on raw CTA click.

- **No captions/transcript on the demo video** until a transcript exists for the real recorded asset — flagged for post-recording follow-up, not a v1 blocker.

- **No testimonials or case studies** — intentionally absent per the no-fabrication policy. The architecture supports adding a testimonials section later without a structural redesign, once real ones exist.

- **Single language (English)** — no localization layer; not needed for the initial Nigerian English-speaking target audience, but noted in case future expansion requires it.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
