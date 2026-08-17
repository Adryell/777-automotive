---
name: "777 Automotive"
description: "A premium light automotive showroom built on stark contrast, technical geometry, and logo yellow."
colors:
  signal-yellow: "#ffcb05"
  showroom-black: "#070707"
  category-black: "#0a0a0a"
  footer-black: "#050505"
  gallery-white: "#fff"
  showroom-paper: "#f3f3f0"
  showroom-sand: "#eee5d7"
  showroom-sage: "#dfe7de"
  metallic-light: "#dce5e9"
  soft-ink: "#1f2527"
  muted-copy: "#686864"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(3.2rem, 5.25vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(3rem, 5vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "DM Sans, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
spacing:
  page-gutter: "4.5vw"
  section-y: "110px"
  card-gap: "14px"
  button-x: "23px"
  button-y: "19px"
components:
  button-primary:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.showroom-black}"
    typography: "{typography.label}"
    padding: "19px 23px"
  button-primary-hover:
    backgroundColor: "{colors.showroom-black}"
    textColor: "{colors.signal-yellow}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.showroom-black}"
    typography: "{typography.label}"
    padding: "19px 23px"
  category-card-dark:
    backgroundColor: "{colors.category-black}"
    textColor: "{colors.gallery-white}"
    height: "440px"
  category-card-accent:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.showroom-black}"
    height: "440px"
---

# Design System: 777 Automotive

## Overview

**Creative North Star: "The Precision Showroom"**

777 Automotive feels like a brightly lit premium vehicle showroom translated into an editorial landing page: clean paper surfaces, deep black display zones, and a single unmistakable yellow signal. Oversized condensed type supplies authority while detailed vehicle imagery and restrained technical geometry carry the automotive character.

The system is direct, high-contrast, and spacious. Motion suggests machinery arriving into position rather than decorative flourish: strong entrances, controlled parallax, precise hover lifts, and a continuous information marquee. All essential content remains legible and actionable with reduced motion enabled.

**Key Characteristics:**

- A full-viewport environmental showroom photograph beneath the header, darkened by a directional overlay.
- Sand, sage, and metallic blue-gray light surfaces interrupted by decisive black content bands.
- Logo yellow reserved for conversion, emphasis, and active feedback.
- Bold Archivo headlines paired with calm, readable DM Sans copy.
- Square-edged components, thin borders, circles, and engineered geometric details.
- Automotive imagery presented at large scale with restrained ambient depth.

## Colors

The palette is deliberately narrow: one energetic brand signal against a family of white, paper, gray, and near-black showroom neutrals.

### Primary

- **Signal Yellow:** The brand and action color for primary calls to action, the marquee, highlighted footer copy, icons, focus rings, selection, and key hover feedback.

### Neutral

- **Showroom Black:** The core ink color for type, inverted interactions, and high-contrast structural moments.
- **Category Black:** A subtly softened black used for dark merchandise cards.
- **Footer Black:** The deepest closing surface, anchoring the final conversion section.
- **Gallery White:** The cleanest surface for the social gallery and inverted text.
- **Showroom Paper:** The warm off-white page ground that keeps the light interface from feeling clinical.
- **Showroom Sand:** The warm hero-copy and categories ground, lending the interface a premium interior-material character.
- **Showroom Sage:** The calm social-gallery surface, separating editorial content without adding saturation noise.
- **Metallic Light:** The cool blue-gray fallback plane behind the hero media, echoing automotive paint and brushed metal.
- **Soft Ink:** A secondary dark neutral available for text and details on expanded light surfaces.
- **Muted Copy:** Supporting copy color that preserves hierarchy without sacrificing readability.

**The Yellow Is a Signal Rule.** Use yellow where the visitor should act, notice a brand cue, or receive interaction feedback; do not wash large neutral sections in it without a structural purpose.

**The Near-Black Rule.** Prefer deep near-blacks over decorative dark colors so photography, yellow, and typography remain the only visual protagonists.

## Typography

**Display Font:** Archivo (with sans-serif fallback)  
**Body Font:** DM Sans (with sans-serif fallback)

**Character:** Archivo brings dense, contemporary authority without the narrowness of a condensed display face; DM Sans keeps supporting information and actions soft, modern, and highly readable. Headlines are uppercase and tightly stacked, while body copy stays sentence case and relaxed.

### Hierarchy

- **Display:** Bold, fluid oversized scale, compressed line height and pronounced negative tracking. Use for the hero and major conversion statements.
- **Headline:** Bold, fluid section scale with tight leading. Use for section introductions.
- **Title:** Bold, fluid card scale with solid leading. Use for large category names anchored near card edges.
- **Body:** Regular weight with generous leading. Use for brief supporting copy, generally constrained to roughly 330–370px.
- **Label:** Semibold, compact size, positive tracking, and uppercase. Use for buttons, cues, metadata, and navigation-like actions.

**The Two-Speed Type Rule.** Use Archivo for declarations and DM Sans for explanation or action; do not introduce a third typographic voice.

**The Tight Display Rule.** Large headlines should feel mechanically stacked through tight line height and deliberate line breaks, never loose or paragraph-like.

## Layout

The desktop system uses a fluid page gutter of 4.5vw and generous section spacing of 110px. Beneath the 92px header, the hero photograph fills the entire remaining viewport. A left-to-right black overlay runs from 90% opacity through 74% at 38%, then opens to 22% at 72% and 8% at the far edge. Hero copy occupies at most 650px or 50vw over the left side; its primary text is white, with ACCESORIOS in signal yellow. Content grids use equal columns with 18px gaps. Section headers place the display heading and a narrow supporting paragraph at opposite edges.

At 900px and below, the photograph remains full-viewport beneath the 76px header and the overlay turns vertical, moving from 83% black at the top through 70% at 53% to 12% at the bottom. Hero copy spans the available width and reserves 19vh below; at 560px it reserves 23vh and the photo focal point shifts to 55% horizontally. Section headers stack, category panels become full width, and the Instagram grid becomes a horizontal, scroll-snapping rail of 74vw tiles.

**The Wide Stage Rule.** Let the vehicle, headlines, and category names occupy substantial scale; supporting copy remains narrow and never competes for width.

**The Mobile Rail Rule.** Dense visual collections become touch-scrollable rails instead of tiny multi-column grids.

## Elevation & Depth

The system is flat by default and creates depth through full-bleed photography, the directional hero overlay, tonal surface changes, image cropping, and hard seams. Hero type uses restrained black text shadows for reliable contrast. The photograph has no filter or drop shadow; its motion remains crop-safe inside an overflow-hidden cover frame. Image-led category panels lift by 5px on hover with a restrained ambient shadow (`0 22px 45px #0002`).

**The Crop-Safe Motion Rule.** Environmental imagery may scale and pan only inside an overflow-hidden cover frame; never apply 3D tilt, rotation, or motion that exposes the image edge.

**The Ordered Reveal Rule.** Each post-hero section reveals once at 82% viewport entry, in authored DOM order, with a 0.11s stagger, 0.9s duration, and `power4.out`: marquee, category heading/copy/cards, Instagram heading/copy/tiles/button, then footer heading/button/bottom items.

**The Marquee Clip Rule.** Reveal the marquee by clipping its container from right to left. Do not animate the marquee container's transform, because its child already owns the continuous horizontal transform.

**The Static Fallback Rule.** When reduced motion is requested, do not initialize Lenis, hero motion, ScrollTriggers, or staged reveals; all content must render immediately in its final state.

## Shapes

Controls and content containers are square-edged with no shared corner radius. Thin 1px borders define icon buttons, outline buttons, the marquee, and footer controls. The hero is one uninterrupted photographic plane beneath its overlay. Category panels rely on the hard seam between cropped image media and a separate rectangular content band rather than borders or ornamental geometry.

**The Hard Edge Rule.** Keep actionable and structural UI rectangular; reserve circles and rotated geometry for automotive illustration and atmosphere.

## Components

### Buttons

- **Shape:** Square-edged and compact, with centered uppercase labels, a 14px icon gap, and no radius.
- **Primary:** Signal-yellow fill and border with showroom-black text; standard padding is 19px by 23px, with a larger 23px by 28px footer variant.
- **Hover / Focus:** Hover inverts to black and yellow with a 2px upward shift over 300ms. Keyboard focus uses a 3px yellow outline offset by 4px.
- **Outline:** Transparent with a thin dark border; hover fills black and reverses the text to white.
- **WhatsApp Mark:** Every WhatsApp CTA renders the official `siWhatsapp.path` supplied by Simple Icons, never a hand-authored approximation, generic chat bubble, or outbound arrow. It is 19px inside text buttons and 21px in the square header action, inheriting the CTA's current color.

### Cards / Containers

- **Corner Style:** Square, clipped, and overflow-hidden.
- **Anatomy:** A 275px image field sits above a separate content band of at least 165px; media is never used as a low-contrast text backdrop.
- **Background:** The ACCESORIOS content band is near-black with white type and a yellow action; REPUESTOS uses yellow with black type and action.
- **Image Treatment:** Photography starts in grayscale and returns to color while scaling to 1.015 on hover.
- **Shadow Strategy:** Flat at rest; hover lifts the complete panel by 5px with a restrained ambient shadow.
- **Internal Padding:** Content bands use 22px 26px 24px. On compact mobile they use 18px 20px and stack the action below the heading.

### Navigation

The header is a black 92px bar with the official logo on the left and one square WhatsApp action with the authored solid mark on the right. On small screens it compresses to 76px. Social navigation repeats the square bordered icon treatment in the footer, turning yellow on hover.

### Social Gallery Tile

Square image tiles sit in a nearly gapless grid. Hover adds a translucent black veil and reveals a centered yellow Instagram icon that scales from 0.7 to 1 over 350ms. Mobile tiles retain the square ratio inside the horizontal rail.

### Information Marquee

A yellow, black-bordered strip carries repeated uppercase Archivo text in continuous linear motion. It functions as compact proof of product focus and coverage. Its section entrance clips the container from right to left while the inner track retains sole ownership of horizontal translation; reduced-motion preferences render it immediately without entrance or continuous motion.

## Do's and Don'ts

### Do:

- **Do** use official vehicle and brand imagery as the dominant visual evidence.
- **Do** use the environmental showroom photograph full-viewport beneath the header with the directional dark overlay.
- **Do** use sand, sage, and metallic blue-gray to distinguish light sections while keeping yellow reserved for brand signals.
- **Do** render hero text in white and ACCESORIOS in solid signal yellow, without an underline.
- **Do** separate category photography from its content band and stack the action beneath copy on compact mobile.
- **Do** source the official WhatsApp path from Simple Icons (`siWhatsapp`) on every WhatsApp CTA.
- **Do** preserve strong black-on-light and light-on-black contrast, with yellow as the active signal.
- **Do** use uppercase Archivo for short, emphatic headings and DM Sans for supporting copy and actions.
- **Do** preserve the ordered, once-only section reveal sequence and its reduced-motion static fallback.
- **Do** reveal the marquee with `clip-path` only, leaving its scrolling child's transform untouched.
- **Do** keep WhatsApp conversion controls visually immediate and provide visible keyboard focus.
- **Do** preserve a complete reduced-motion experience whenever adding animation.

### Don't:

- **Don't** introduce rounded cards, pill buttons, soft gradients, or generic SaaS styling.
- **Don't** add decorative accent colors beyond the established black, paper, sand, sage, metallic blue-gray, and logo-yellow system.
- **Don't** use heavy shadows on interface containers or make every element appear elevated.
- **Don't** add a halo or drop shadow to the full-bleed hero photograph, or apply 3D tilt.
- **Don't** pan or scale cover imagery far enough to expose an edge or lose the vehicle focal point.
- **Don't** place category titles directly over busy photography or bring back abstract tire/part geometry in place of product imagery.
- **Don't** substitute a generic message icon, speech bubble, or outbound arrow for the WhatsApp brand mark.
- **Don't** invent testimonials, partner logos, prices, certifications, contact details, or catalog claims to fill layouts.
- **Don't** shrink image collections into unreadable mobile grids; use the established horizontal rail behavior.
