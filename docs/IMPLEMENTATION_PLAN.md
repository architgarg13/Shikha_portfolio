# Portfolio Website — Pixel-Perfect Implementation Plan

> Derived from 7 reference screenshots studied at native resolution.

---

## TABLE OF CONTENTS

1. [Global Design System](#1-global-design-system)
2. [Navbar — Detailed Spec](#2-navbar--detailed-spec)
3. [Hero Section — Screenshot 1](#3-hero-section--screenshot-1)
4. [About Section — Screenshot 2](#4-about-section--screenshot-2)
5. [Expertise Section — Screenshot 3](#5-expertise-section--screenshot-3)
6. [Works Section — Screenshot 4](#6-works-section--screenshot-4)
7. [Testimonials Section — Screenshot 5](#7-testimonials-section--screenshot-5)
8. [Contact Section — Screenshot 6](#8-contact-section--screenshot-6)
9. [Email Modal — Screenshot 7](#9-email-modal--screenshot-7)
10. [Reusable Components](#10-reusable-components)
11. [Composables & Logic](#11-composables--logic)
12. [Animation Choreography](#12-animation-choreography)
13. [Responsive Strategy](#13-responsive-strategy)
14. [File-by-File Implementation Order](#14-file-by-file-implementation-order)
15. [Docker & Deployment](#15-docker--deployment)
16. [Asset Checklist](#16-asset-checklist)

---

## 1. Global Design System

### 1.1 Color Palette (exact from screenshots)

| Token              | Hex         | Usage                                          |
|--------------------|-------------|-------------------------------------------------|
| `--bg-primary`     | `#1a1a1a`   | Full page background                           |
| `--bg-card`        | `#242424`   | Project cards, modal card, testimonial bg hint |
| `--bg-nav-active`  | `#2a2a2a`   | Navbar active item pill/rectangle              |
| `--accent-gold`    | `#c9a96e`   | Section labels, active dots, Gmail highlight, gold bullet dots |
| `--text-white`     | `#ffffff`   | Headings, names, active nav items              |
| `--text-body`      | `#a0a0a0`   | Paragraphs, descriptions, inactive nav items   |
| `--text-muted`     | `#666666`   | Timestamps, company subtitles in testimonials  |
| `--divider`        | `#333333`   | Horizontal dividers, card borders              |
| `--border-button`  | `#555555`   | "SAY HELLO." button border                     |
| `--overlay`        | `rgba(0,0,0,0.75)` | Modal backdrop                          |

### 1.2 Typography

| Role             | Font             | Weight | Size                               | Line-Height | Letter-Spacing | Transform   |
|------------------|------------------|--------|-------------------------------------|-------------|----------------|-------------|
| Hero headline    | Playfair Display | 700    | `clamp(3rem, 7vw, 6.5rem)` (~62px at 1440px) | 1.05        | normal         | none        |
| Section heading  | Playfair Display | 400    | `clamp(2rem, 4vw, 3.5rem)` (~42px at 1440px)  | 1.15        | normal         | none        |
| Expertise skills | Playfair Display | 700    | `clamp(1.8rem, 3.5vw, 3rem)` (~36px)          | 1.2         | normal         | none        |
| Section label    | DM Sans          | 500    | 12px (0.75rem)                      | 1.0         | 0.2em          | uppercase   |
| Nav items        | DM Sans          | 500    | 12px (0.75rem)                      | 1.0         | 0.2em          | uppercase   |
| Logo "SUMIT."    | DM Sans          | 700    | 14px (0.875rem)                     | 1.0         | 0.15em         | uppercase   |
| Body paragraph   | DM Sans          | 400    | 16px (1rem)                         | 1.7         | normal         | none        |
| Experience title | DM Sans          | 700    | 18px (1.125rem)                     | 1.4         | normal         | none        |
| Experience role  | DM Sans          | 400    | 14px (0.875rem)                     | 1.5         | normal         | none        |
| Experience date  | DM Sans          | 500    | 11px (0.6875rem)                    | 1.0         | 0.15em         | uppercase   |
| Project category | DM Sans          | 500    | 12px (0.75rem)                      | 1.0         | 0.05em         | none        |
| Project title    | DM Sans          | 700    | 20px (1.25rem)                      | 1.3         | normal         | none        |
| Testimonial name | DM Sans          | 700    | 16px (1rem)                         | 1.3         | normal         | none        |
| Testimonial co.  | DM Sans          | 400    | 13px (0.8125rem)                    | 1.3         | normal         | none        |
| Testimonial body | DM Sans          | 400    | 15px (0.9375rem)                    | 1.65        | normal         | none        |
| Footer heading   | DM Sans          | 500    | 12px (0.75rem)                      | 1.0         | 0.2em          | uppercase   |
| Footer value     | DM Sans          | 400    | 15px (0.9375rem)                    | 1.6         | normal         | none        |
| Button text      | DM Sans          | 600    | 13px (0.8125rem)                    | 1.0         | 0.15em         | uppercase   |

### 1.3 Spacing System

| Token          | Value    | Usage                                             |
|----------------|----------|---------------------------------------------------|
| Page padding-x | 8% vw    | Left/right padding of all sections (~115px at 1440px) |
| Section gap    | 120px    | Vertical space between sections                   |
| Container max  | 1400px   | Max content width, centered on >1440px screens    |
| Nav height     | 56px     | Fixed navbar height                               |
| Card gap       | 20px     | Gap between project cards in grid                 |
| Card padding   | 0        | Cards have no internal padding; image + text areas are adjacent |

### 1.4 Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap');
```

---

## 2. Navbar — Detailed Spec

### 2.1 Visual Anatomy (observed from ALL screenshots)

```
┌─────────────────────────────────────────────────────────────┐
│  SUMIT.     INTRO       ABOUT       WORKS      SAY HELLO   │
│  (logo)    [active]                                         │
└─────────────────────────────────────────────────────────────┘
```

- **Position**: `fixed`, top: 0, left: 0, right: 0, z-index: 50
- **Height**: ~56px
- **Background**: Transparent on initial load → `#1a1a1a` on scroll (after ~100px)
- **Layout**: Flexbox, `justify-content: space-between`, items centered vertically
- **Padding**: `0 8vw` (same as page content padding)
- **No bottom border** visible in any screenshot

### 2.2 Logo — "SUMIT."

- Text: `SUMIT.` (with period)
- Font: DM Sans 700
- Size: 14px
- Letter-spacing: 0.15em
- Color: `#ffffff`
- Transform: uppercase
- Position: flex-start (left-aligned)

### 2.3 Nav Items

- Items: `INTRO` | `ABOUT` | `WORKS` | `SAY HELLO`
- Font: DM Sans 500, 12px, uppercase, letter-spacing 0.2em
- Color: `#a0a0a0` (inactive), `#ffffff` (active)
- Layout: Horizontal flex, gap ~60px between items
- Each item is a clickable anchor that smooth-scrolls to its section

### 2.4 Active State

- The active nav item gets a **dark rectangle background pill** behind it
- Background color: `#2a2a2a`
- The rectangle extends ~20px padding on left/right, ~12px padding top/bottom
- It has a **very subtle border** — appears to be `1px solid #333` or `#3a3a3a`
- Slightly rounded corners (~4px border-radius)
- The active item text becomes `#ffffff`
- **Active tracking**: Changes as user scrolls through sections (IntersectionObserver)

### 2.5 Active Section Mapping

| Scroll Position   | Active Nav Item |
|-------------------|-----------------|
| Hero visible      | INTRO           |
| About visible     | ABOUT           |
| Expertise visible | ABOUT           |
| Works visible     | WORKS           |
| Testimonials      | WORKS           |
| Contact visible   | SAY HELLO       |

### 2.6 Mobile Behavior

- Below 768px: Replace nav items with hamburger icon (3 horizontal lines)
- Off-canvas slide-in panel from right
- Same nav items stacked vertically
- Logo remains visible

---

## 3. Hero Section — Screenshot 1

### 3.1 Layout

```
┌──────────────────────────────────────────────────────────────────┐
│  [Navbar]                                                         │
│                                                                   │
│                                                                   │
│     ── HELLO WORLD                                                │
│                                                                   │
│     I am Sumit,                                                   │
│     a UI/UX designer                                    B        │
│     & frontend                                          E        │
│     developer based                                     H   L   │
│     in Somewhere.                                       A   I   │
│                                                          N   N   │
│                                                          C   K   │
│                                                          E   E   │
│                                           ╭──╮           .   D   │
│                                        ╭──╯  │               I   │
│                                     ╭──╯     │               N   │
│                                  ╭──╯        │               .   │
└──────────────────────────────────────────────────────────────────┘
```

- **Height**: 100vh (full viewport)
- **Display**: Flex, align-items: center (vertically centered)
- **Padding-left**: 8vw
- **Padding-top**: 56px (account for fixed navbar)

### 3.2 Section Label — "HELLO WORLD"

- **Line**: A horizontal gold line, ~40px wide, 1px height, color `#c9a96e`
- **Gap** between line and text: ~16px
- **Text**: "HELLO WORLD"
- **Font**: DM Sans 500, 12px, uppercase, letter-spacing 0.2em
- **Color**: `#c9a96e`
- **Layout**: Flex row, items center-aligned
- **Margin-bottom** below label to headline: ~32px

### 3.3 Hero Headline

- **Text**: `I am Sumit, a UI/UX designer & frontend developer based in Somewhere.`
- **Font**: Playfair Display 700
- **Size**: `clamp(3rem, 7vw, 6.5rem)` → at 1440px this is ~100px
- **Line-height**: 1.05 (very tight)
- **Color**: `#ffffff`
- **Max-width**: ~75% of viewport (prevents text from reaching the arcs/social area)
- **Natural line breaks** (no forced `<br>`; the text wraps naturally at the width):
  - Line 1: "I am Sumit,"
  - Line 2: "a UI/UX designer"
  - Line 3: "& frontend"
  - Line 4: "developer based"
  - Line 5: "in Somewhere."
- **Note**: The comma after "Sumit" and period after "Somewhere" are part of the text

### 3.4 Decorative Arcs (Bottom-Right)

- **Position**: Absolute, bottom-right of the hero section
- **Design**: 3-4 concentric quarter-circle arcs (bottom-right quadrant)
- **SVG strokes**: White (`#ffffff`), opacity ~0.12-0.15
- **Stroke width**: ~1px
- **Radii** (estimated): ~180px, ~240px, ~300px, ~360px (incrementing by ~60px)
- **Arc origin**: Near the bottom-right corner of the viewport
- **The arcs curve** from about the 3 o'clock position (right) to 6 o'clock (bottom) — i.e., quarter circle
- **SVG implementation**: Use `<path>` with arc commands, or `<circle>` with `clip-path`

```svg
<!-- Example arc path for one ring -->
<path d="M 400,0 A 400,400 0 0 1 0,400" fill="none" stroke="white" stroke-opacity="0.12" />
```

### 3.5 Social Links (Right Edge)

- **Position**: Absolute, right edge, vertically centered in the hero
- **Two labels**: "BEHANCE" and "LINKEDIN"
- **Font**: DM Sans 500, 11px, uppercase, letter-spacing 0.15em
- **Color**: `#666666` (very muted gray)
- **Rotation**: -90deg (text reads bottom-to-top)
- **Layout**: Stacked vertically with a small separator dot or ~40px gap
- **Right offset**: ~30px from viewport right edge

### 3.6 Top Accent Line

- There's a very subtle thin line at the very top of the page
- Appears to be a **dark red/maroon** accent (~`#8b3a3a` or `#6b2d2d`)
- Height: ~2-3px
- Full width
- Sits above the navbar

---

## 4. About Section — Screenshot 2

### 4.1 Layout

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                   │
│  ┌─────────────────┐    ── ABOUT                                 │
│  │                 │                                              │
│  │   [Profile      │    I am a passionate and dedicated UI/UX    │
│  │    Photo]       │    Designer with a strong focus on creating  │
│  │                 │    intuitive, user-friendly digital          │
│  │    Side-profile │    experiences. With experience working at   │
│  │    moody dark   │    Crimsons Systems, I have honed my        │
│  │    man w/       │    skills in user-centered design,          │
│  │    glasses      │    wireframing, prototyping, and crafting   │
│  │                 │    responsive solutions that align with      │
│  │                 │    both user needs and business goals...    │
│  └─────────────────┘                                             │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

- **Section id**: `about`
- **Padding**: `120px 8vw`
- **Layout**: CSS Grid or Flexbox, two columns
  - Left column: ~45% width
  - Right column: ~55% width
  - Gap: ~60px between columns

### 4.2 Profile Photo

- **Dimensions**: Roughly 500px × 600px (portrait aspect ratio, approximately 5:6)
- **Content**: Side-profile portrait, moody lighting, subject wearing glasses, dark background
- **Styling**: No border-radius, no border, but may have subtle box-shadow
- **Object-fit**: Cover
- **The image bleeds to the left edge** — appears to extend to the very left of the content area
- **Scroll animation**: Clip-path reveal from left (`inset(0 100% 0 0)` → `inset(0 0 0 0)`) + subtle scale 1.1→1.0

### 4.3 About Text Content

- **Label**: Same `SectionLabel` component — gold line + "ABOUT"
- **Label position**: Aligned to top of the text column
- **Margin-bottom** below label: ~24px
- **Paragraph**:
  - Font: DM Sans 400, 16px, line-height 1.7
  - Color: `#a0a0a0`
  - Full text: "I am a passionate and dedicated UI/UX Designer with a strong focus on creating intuitive, user-friendly digital experiences. With experience working at Crimsons Systems, I have honed my skills in user-centered design, wireframing, prototyping, and crafting responsive solutions that align with both user needs and business goals. I thrive on solving complex problems through creativity and collaboration, working closely with cross-functional teams to deliver impactful results. Constantly driven to learn and innovate, I aim to create designs that not only look great but also provide meaningful value to users."
- **Scroll animation**: Lines fade up sequentially (stagger 0.1s)

---

## 5. Expertise Section — Screenshot 3

### 5.1 Layout

```
┌──────────────────────────────────────────────────────────────────┐
│     ── EXPERTISE                                                  │
│                                                                   │
│     Visual Design, UX Research, UI Design,                       │
│     Product Design, Prototyping, Illustration                    │
│                                                                   │
│     ─────────────────────────────────────────── (divider)        │
│                                                                   │
│     EXPERIENCE                    EDUCATION                       │
│                                                                   │
│     •  Crimsons Systems           •  Gyan ganga Institute of     │
│        UI/UX Designer                technology and science      │
│        AUGUST 2024 · PRESENT         B.tech (Computer Science)   │
│                                      APRIL 2020-AUGUST 2024A    │
│        I learned concept of...                                    │
│                                      Lorem ipsum...              │
│     •  Zomit (Product Based)                                     │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

- **Section id**: `expertise` (part of the "ABOUT" nav group)
- **Padding**: `80px 8vw` (closer to the About section above)

### 5.2 Skills Headline

- **Label**: `SectionLabel` — "EXPERTISE"
- **Margin-bottom** below label: ~32px
- **Text**: "Visual Design, UX Research, UI Design, Product Design, Prototyping, Illustration"
- **Font**: Playfair Display 700
- **Size**: `clamp(1.8rem, 3.5vw, 3rem)` (~36px at 1440px)
- **Color**: `#ffffff`
- **Line-height**: 1.2
- **Wraps naturally** to ~2 lines

### 5.3 Horizontal Divider

- **Margin-top**: ~48px below the skills text
- **Margin-bottom**: ~48px above the experience/education grid
- **Style**: 1px solid `#333333`
- **Width**: 100% of content area
- **Animation**: Width 0% → 100% on scroll trigger

### 5.4 Experience & Education Grid

- **Layout**: Two columns, equal width (50/50), gap ~60px
- **Column headings**: "EXPERIENCE" and "EDUCATION"
  - Font: DM Sans 500, 12px, uppercase, letter-spacing 0.2em
  - Color: `#ffffff`
  - Margin-bottom: ~32px

### 5.5 Experience Entry Structure

Each entry:
```
•  Company Name                    ← DM Sans 700, 18px, #ffffff
   Role Title                      ← DM Sans 400, 14px, #a0a0a0
   DATE · DATE                     ← DM Sans 500, 11px, uppercase, letter-spacing 0.15em, #666666

   Description paragraph           ← DM Sans 400, 14px, #a0a0a0, line-height 1.6
```

- **Gold bullet**: Small filled circle, ~6px diameter, color `#c9a96e`
  - Positioned to the left of the company name
  - Vertical alignment: centered with the company name text
  - Left offset from content start: ~0px (bullet is at the start, text indented ~20px from bullet)
- **Gap between entries**: ~36px

### 5.6 Experience Data

**Entry 1:**
- Company: "Crimsons Systems"
- Role: "UI/UX Designer"
- Date: "AUGUST 2024 · PRESENT"
- Description: "I learned concept of UI/UX like wireframing and laws with hands on experience on various projects like ERP,CRM and many Saas website."

**Entry 2:**
- Company: "Zomit (Product Based)"
- (visible at bottom of screenshot, content cut off)

### 5.7 Education Data

**Entry 1:**
- Institution: "Gyan ganga Institute of technology and science"
- Degree: "B.tech (Computer Science)"
- Date: "APRIL 2020-AUGUST 2024A" (note: the "A" at end may be a typo in original, replicate as-is)
- Description: Lorem ipsum placeholder text

---

## 6. Works Section — Screenshot 4

### 6.1 Layout

```
┌──────────────────────────────────────────────────────────────────┐
│     ── RECENT WORKS                                               │
│                                                                   │
│     Here are some of my favorite projects I have                 │
│     done lately. Feel free to check them out.                    │
│                                                                   │
│     ┌──────────────┬──────────┐  ┌──────────────┬──────────┐    │
│     │              │Case Study│  │              │Case Study│    │
│     │  [Thumbnail] │Taxi      │  │  [Thumbnail] │Learnara  │    │
│     │              │Booking ↗ │  │              │          ↗│    │
│     └──────────────┴──────────┘  └──────────────┴──────────┘    │
│     ┌──────────────┬──────────┐  ┌──────────────┬──────────┐    │
│     │              │Website   │  │              │Applicat. │    │
│     │  [Thumbnail] │Devalive ↗│  │  [Thumbnail] │College   │    │
│     │              │          │  │              │Mgmt App ↗│    │
│     └──────────────┴──────────┘  └──────────────┴──────────┘    │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

- **Section id**: `works`
- **Padding**: `120px 8vw`

### 6.2 Section Header

- **Label**: `SectionLabel` — "RECENT WORKS"
- **Margin-bottom**: ~32px
- **Headline**: "Here are some of my favorite projects I have done lately. Feel free to check them out."
- **Font**: Playfair Display 400, `clamp(2rem, 4vw, 3.5rem)`, line-height 1.15
- **Color**: `#ffffff`
- **Margin-bottom** below headline: ~48px

### 6.3 Project Cards Grid

- **Layout**: CSS Grid, 2 columns, gap ~20px
- **Each card** fills one grid cell

### 6.4 ProjectCard — Detailed Anatomy

```
┌────────────────────────────────────────────┐
│  ┌────────────┐                            │
│  │            │   Category Label    ↗      │
│  │ Thumbnail  │   Project Title            │
│  │            │                            │
│  └────────────┘                            │
└────────────────────────────────────────────┘
```

- **Card background**: `#242424`
- **Card border**: None visible (or very subtle `1px solid #2a2a2a`)
- **Card border-radius**: 0px (sharp corners)
- **Card layout**: Flex row
- **Card height**: ~150px (estimated)
- **Card padding**: 0 (image touches edges)

**Thumbnail:**
- Width: ~40% of card width
- Height: 100% of card
- Object-fit: cover
- Slight scale on hover: 1.0 → 1.05
- Overflow: hidden on the container

**Text area (right side):**
- Padding: ~24px
- Vertical: flex column, justify-center

**Category label:**
- Font: DM Sans 500, 12px
- Color: `#c9a96e` (gold)
- Not uppercase (observed: "Case Study", "Website", "Application" — title case)
- Margin-bottom: ~8px

**Project title:**
- Font: DM Sans 700, 20px
- Color: `#ffffff`
- Line-height: 1.3

**Arrow icon (↗):**
- Position: Top-right of the text area
- A simple northeast-pointing arrow
- Color: `#ffffff`
- Size: ~16px
- On hover: translates slightly up-right (~4px, -4px)
- Could be an SVG arrow or Unicode character

### 6.5 Project Data

| # | Category      | Title                         | Thumbnail Description                    |
|---|---------------|-------------------------------|------------------------------------------|
| 1 | Case Study    | Taxi Booking App              | Light/white UI mockup, minimal           |
| 2 | Case Study    | Learnara                      | Colorful app screenshots, orange/warm    |
| 3 | Website       | Devalive                      | Light design with geometric elements     |
| 4 | Application   | College Management Application| Phone mockup showing app interface       |

---

## 7. Testimonials Section — Screenshot 5

### 7.1 Layout

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                   │
│  ┌────────────────────────────┐  ┌────────────────────────────┐  │
│  │  [Avatar]  Tim Cook        │  │  [Avatar]  Sundar Pichai   │  │
│  │            Crimsons Systems│  │            Devalive         │  │
│  │                            │  │                            │  │
│  │  Molestiae incidunt...     │  │  Excepturi nam cupiditate..│  │
│  │  ...consequatur quis ipsa  │  │  ...culpa doloremque       │  │
│  │  autem nam sit enim magni. │  │  deleniti repellat...      │  │
│  └────────────────────────────┘  └────────────────────────────┘  │
│                                                                   │
│                        •  •  •                                    │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

- **No section label** visible — this section flows as a sub-section of Works or is a standalone carousel
- **Padding**: `80px 8vw`

### 7.2 Testimonial Card — Detailed Anatomy

**Layout:**
- Two cards visible side by side on desktop (50/50)
- Gap between cards: ~40px
- Card background: Subtle, slightly lighter than page bg (could be `#1e1e1e` or `#222222`) — or same as page bg with no visible border
- Card padding: ~32px
- No visible border or border-radius

**Avatar:**
- Shape: Circle
- Size: ~48px diameter
- Object-fit: cover
- Position: Top-left of card
- Floated/inline with the name

**Name + Company (inline with avatar):**
- Layout: flex row, avatar on left, name/company stacked on right
- Gap between avatar and text: ~12px

**Name:**
- Font: DM Sans 700, 16px
- Color: `#ffffff`

**Company:**
- Font: DM Sans 400, 13px
- Color: `#666666` (muted, slightly greenish-gray tint possibly)
- Appears directly below the name

**Body text:**
- Font: DM Sans 400, 15px
- Color: `#a0a0a0`
- Line-height: 1.65
- Margin-top: ~20px below the avatar/name row

### 7.3 Testimonial Data

**Card 1:**
- Name: "Tim Cook"
- Company: "Crimsons Systems"
- Avatar: Dark photo, male
- Body: "Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias delectus culpa."

**Card 2:**
- Name: "Sundar Pichai"
- Company: "Devalive"
- Avatar: Lighter photo, person
- Body: "Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis. Quasi voluptas eius distinctio. Atque eos maxime."

**Additional cards** (unseen, for carousel): Need at least 3 total sets (3 pagination dots visible).

**Card 3 (inferred):**
- Name: TBD (placeholder)
- Company: TBD
- Body: Lorem ipsum

### 7.4 Pagination Dots

- **Count**: 3 dots
- **Layout**: Centered horizontally, below the cards
- **Margin-top**: ~40px below cards
- **Dot size**: ~8px diameter
- **Active dot**: `#c9a96e` (gold)
- **Inactive dots**: `#555555` (gray)
- **Gap between dots**: ~12px
- **Active dot** corresponds to current carousel slide (0-indexed)

### 7.5 Carousel Behavior

- **Desktop**: Shows 2 cards at a time
- **Mobile**: Shows 1 card at a time
- **Navigation**: Pagination dots (clickable) + auto-play every 5 seconds
- **Auto-play**: Pauses on hover
- **Transition**: GSAP horizontal translateX animation, duration 0.5s, ease: power2.inOut
- **Total slides**: 3 (with 2 cards each = 6 testimonials, or loop back)

### 7.6 Horizontal bars at top of screenshot

- At the very top of screenshot 5, there are two short white horizontal bars/lines
- These appear to be **decorative elements** or the top of a divider between works and testimonials
- They look like two small rectangular lines, roughly centered, stacked
- Width: ~80px each, height: ~3px, white, ~50% opacity
- Gap between them: ~8px
- These might be a **section divider element** between Works and Testimonials

---

## 8. Contact Section — Screenshot 6

### 8.1 Layout

```
┌──────────────────────────────────────────────────────────────────┐
│     ── GET IN TOUCH                                               │
│                                                                   │
│     I love to hear from you. Whether you have a                  │
│     question or just want to chat about design,                  │
│     tech & art — shoot me a message.                             │
│                                                                   │
│                                                                   │
│     REACH ME AT          SOCIAL         ┌─────────────┐          │
│                                         │             │          │
│     sumitmishra0110      Behance,       │  SAY HELLO. │          │
│     @gmail.com           Linkedin       │             │          │
│                                         └─────────────┘          │
│     +91-7987315606                                                │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

- **Section id**: `contact`
- **Padding**: `120px 8vw`

### 8.2 Section Header

- **Label**: `SectionLabel` — "GET IN TOUCH"
- **Margin-bottom**: ~32px
- **Headline**: "I love to hear from you. Whether you have a question or just want to chat about design, tech & art — shoot me a message."
- **Font**: Playfair Display 400, `clamp(2rem, 4vw, 3.5rem)`
- **Color**: `#ffffff`
- **Line-height**: 1.15
- **Note**: The em dash (—) is a proper em dash character
- **Margin-bottom** below headline: ~64px

### 8.3 Footer Info Grid

- **Layout**: Three columns (not equal width)
  - Column 1 (~30%): "REACH ME AT"
  - Column 2 (~25%): "SOCIAL"
  - Column 3 (~45%): "SAY HELLO." button (right-aligned)

**Column 1 — Reach Me At:**
- Heading: "REACH ME AT" — DM Sans 500, 12px, uppercase, letter-spacing 0.2em, `#ffffff`
- Email: "sumitmishra0110@gmail.com" — DM Sans 400, 15px, `#a0a0a0`
- Phone: "+91-7987315606" — DM Sans 400, 15px, `#a0a0a0`
- Gap between heading and first value: ~16px
- Gap between email and phone: ~8px

**Column 2 — Social:**
- Heading: "SOCIAL" — same style as "REACH ME AT"
- Values: "Behance, Linkedin" — DM Sans 400, 15px, `#a0a0a0`
- These should be clickable links

**Column 3 — SAY HELLO Button:**
- **Text**: "SAY HELLO."
- **Font**: DM Sans 600, 13px, uppercase, letter-spacing 0.15em
- **Color**: `#ffffff`
- **Background**: Transparent or very dark (`#1a1a1a` matching page)
- **Border**: 1px solid `#555555`
- **Padding**: ~16px 40px
- **Border-radius**: 0px (sharp rectangle)
- **Hover**: Could be subtle border color change or bg fill
- **Click**: Opens the EmailModal
- **Position**: Aligned to the right side, vertically centered with the other columns

---

## 9. Email Modal — Screenshot 7

### 9.1 Overlay

- **Background**: `rgba(0, 0, 0, 0.75)` — dark semi-transparent
- **Position**: Fixed, covers entire viewport
- **Z-index**: 100 (above everything)
- **Click backdrop**: Closes the modal
- **Animation**: Fade in 0.3s

### 9.2 Modal Card

- **Width**: ~380px (estimated from screenshot proportions)
- **Position**: Centered horizontally and vertically (flexbox centering)
- **Background**: `#2a2a2a` or `#2d2d2d`
- **Border-radius**: ~8px (subtle rounding visible)
- **Box-shadow**: Possibly `0 20px 60px rgba(0,0,0,0.5)`
- **Padding**: 0 (content areas handle their own padding)
- **Animation**: Scale 0.95→1.0 + opacity 0→1, duration 0.3s

### 9.3 Header Row

```
┌──────────────────────────────────────┐
│  Compose new email with           ✕  │
└──────────────────────────────────────┘
```

- **Padding**: ~20px 24px
- **Text**: "Compose new email with"
- **Font**: DM Sans 400, 16px
- **Color**: `#ffffff`
- **Close button (✕)**:
  - Position: Right side
  - Character: `×` or SVG X icon
  - Size: ~20px
  - Color: `#a0a0a0`
  - Hover: `#ffffff`
  - Cursor: pointer

### 9.4 Email Provider Options

Four stacked rows with consistent spacing:

```
┌──────────────────────────────────────┐  ← Gmail (HIGHLIGHTED)
│  🌐  Gmail in browser                │
└──────────────────────────────────────┘
    ↕ ~8px gap
┌──────────────────────────────────────┐
│  🌐  Outlook in browser             │
└──────────────────────────────────────┘
    ↕ ~8px gap
┌──────────────────────────────────────┐
│  🌐  Yahoo in browser               │
└──────────────────────────────────────┘
    ↕ ~8px gap
┌──────────────────────────────────────┐
│  💻  Default email app              │
└──────────────────────────────────────┘
```

**Each option row:**
- **Padding**: ~16px 24px
- **Background**: `#333333` or `#363636`
- **Border-radius**: ~6px
- **Margin**: ~4px 16px (horizontal margins inside the modal)
- **Layout**: Flex row, icon left + text
- **Icon**: Globe/web icon for browser options, monitor icon for default app
  - Size: ~24px
  - Color: `#a0a0a0` (or `#333` on gold bg for Gmail)
  - Margin-right: ~12px
- **Text**: DM Sans 400, 15px, `#ffffff`
- **Cursor**: Pointer
- **Hover**: Subtle background lighten

**Gmail row (highlighted/active):**
- **Background**: `#c9a96e` (gold accent!)
- **Text color**: `#1a1a1a` (dark text on gold background)
- **Icon color**: `#1a1a1a`
- This is the DEFAULT selected option
- It looks like a warm sandy gold, slightly more saturated: could also be `#d4a853` or `#dbb76c`

### 9.5 Copy Row

```
┌─────────────┬────────────────────────┐
│  📋  Copy   │  sumitmishra0110@gmail │
└─────────────┴────────────────────────┘
```

- **Layout**: Flex row, two sections side by side
- **Left section (Copy button):**
  - Background: `#333333`
  - Padding: ~16px 20px
  - Icon: Clipboard/copy icon, ~20px
  - Text: "Copy" — DM Sans 500, 14px, `#ffffff`
  - Cursor: pointer
  - On click: Copy email to clipboard, show brief "Copied!" feedback
- **Right section (Email display):**
  - Background: `#2a2a2a` or slightly different shade
  - Padding: ~16px 20px
  - Text: "sumitmishra0110@gmail.com" — DM Sans 400, 14px, `#a0a0a0`
  - Flex-grow: 1
- **Border-radius**: ~6px on the combined row
- **Margin**: ~16px from the modal edges

### 9.6 Footer Text

- **Text**: "Powered by MailtoUI"
- **Font**: DM Sans 400, 12px
- **Color**: `#666666` (very muted)
- **Alignment**: Centered
- **Margin-top**: ~16px
- **Margin-bottom**: ~8px

### 9.7 Bottom Accent Line

- Thin horizontal line at the very bottom of the modal
- Color: `#c9a96e` (gold accent)
- Width: ~100% of modal width
- Height: ~3px
- Border-radius on bottom matches modal border-radius

### 9.8 Email Provider Actions

| Option             | Action                                                           |
|--------------------|------------------------------------------------------------------|
| Gmail in browser   | `window.open('https://mail.google.com/mail/?view=cm&to=sumitmishra0110@gmail.com')` |
| Outlook in browser | `window.open('https://outlook.live.com/mail/0/deeplink/compose?to=sumitmishra0110@gmail.com')` |
| Yahoo in browser   | `window.open('https://compose.mail.yahoo.com/?to=sumitmishra0110@gmail.com')` |
| Default email app  | `window.location.href = 'mailto:sumitmishra0110@gmail.com'`     |
| Copy               | `navigator.clipboard.writeText('sumitmishra0110@gmail.com')`    |

---

## 10. Reusable Components

### 10.1 SectionLabel.vue

**Props:** `text` (String)

**Visual:**
```
──── LABEL TEXT
```

- Gold horizontal line: width 40px, height 1px, color `#c9a96e`
- Gap: 16px
- Text: DM Sans 500, 12px, uppercase, letter-spacing 0.2em, color `#c9a96e`
- Container: flex row, align-items center
- Margin-bottom: 32px (applied externally or as default)

### 10.2 DecorativeArcs.vue

- SVG element, position absolute in parent
- 4 concentric quarter-circle arcs
- White strokes, opacity 0.12
- Arc angles: 0° to 90° (quarter circle, bottom-right quadrant)
- Increasing radii with ~60px increment
- Stroke-width: 1px
- Total SVG size: ~400px × 400px
- Animation: stroke-dasharray draw-in on page load

### 10.3 SocialLinks.vue

- Vertical layout, position absolute right edge
- Two text elements rotated -90deg
- "BEHANCE" and "LINKEDIN"
- Very muted color (#666)
- Small separator between them
- Each is a clickable link

### 10.4 ProjectCard.vue

**Props:** `project` (Object: { thumbnail, category, title, link })

- Horizontal flex layout
- Dark card bg (#242424)
- Left: Image (40% width, 100% height, object-fit cover, overflow hidden)
- Right: Text content (padding 24px, flex column, justify center)
- Category in gold, title in white, arrow icon
- Hover effects on image (scale) and arrow (translate)

### 10.5 TestimonialCard.vue

**Props:** `testimonial` (Object: { avatar, name, company, body })

- Avatar circle + name/company row at top
- Body text below
- Consistent padding (~32px)

### 10.6 PaginationDots.vue

**Props:** `total` (Number), `active` (Number)
**Emits:** `change` (index)

- Horizontal row of dots
- Active: gold, Inactive: gray
- Clickable

---

## 11. Composables & Logic

### 11.1 useGsap.js

```js
// Register GSAP + ScrollTrigger plugin
// Export { gsap, ScrollTrigger } for use in components
// Call gsap.registerPlugin(ScrollTrigger) once
```

### 11.2 useLenis.js

```js
// Create Lenis smooth scroll instance
// Sync Lenis with GSAP ticker: gsap.ticker.add((time) => lenis.raf(time * 1000))
// Disable GSAP lag smoothing: gsap.ticker.lagSmoothing(0)
// Expose lenis instance for scrollTo() calls from navbar
// Cleanup on unmount
```

### 11.3 useActiveSection.js

```js
// Create IntersectionObserver watching all section elements
// threshold: 0.3 (30% visibility triggers active)
// rootMargin: '-56px 0px 0px 0px' (offset for fixed navbar height)
// Returns reactive ref: activeSection (string: 'intro'|'about'|'works'|'contact')
// Map sections to nav items:
//   #intro → 'intro'
//   #about, #expertise → 'about'
//   #works, #testimonials → 'works'
//   #contact → 'contact'
```

### 11.4 useTextReveal.js

```js
// Manual word splitting (NO paid SplitText plugin)
// Takes a ref to a DOM element containing text
// Algorithm:
//   1. Get the element's textContent
//   2. Split into words by whitespace
//   3. Replace innerHTML with wrapped words:
//      <span class="word-wrapper" style="overflow:hidden; display:inline-block;">
//        <span class="word" style="display:inline-block; transform:translateY(100%); opacity:0;">
//          word&nbsp;
//        </span>
//      </span>
//   4. Use GSAP ScrollTrigger to animate inner spans:
//      { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out' }
//
// Options: { trigger, start, stagger, duration }
// Default start: 'top 80%'
// once: true (no reverse on scroll back)
```

---

## 12. Animation Choreography

### 12.1 Page Load Timeline (Hero)

```
t=0.0s  → Navbar: translateY(-100%) → translateY(0), opacity 0→1, duration 0.6s, ease power3.out
t=0.3s  → Section label gold line: scaleX(0) → scaleX(1), origin left, duration 0.4s
t=0.4s  → Section label text: opacity 0 → 1, translateX(-10px) → translateX(0), duration 0.4s
t=0.5s  → Hero headline: word-by-word reveal, stagger 0.08s each word (~15 words = 1.2s total)
t=1.2s  → Decorative arcs: SVG stroke-dashoffset animate from full to 0, duration 1.0s, stagger 0.15s per arc
t=1.5s  → Social links: opacity 0→1, duration 0.4s
```

Total hero entrance: ~2.2s

### 12.2 Scroll Animations

**About Section (trigger: top 80%):**
- Image: `clipPath: 'inset(0 100% 0 0)'` → `'inset(0 0% 0 0)'`, scale 1.1→1.0, duration 1.0s, ease power3.out
- Text: Each line fades up, translateY(30px)→0, opacity 0→1, stagger 0.1s, duration 0.8s

**Expertise Section (trigger: top 80%):**
- Skills headline: word-by-word reveal (useTextReveal), stagger 0.08s
- Divider: scaleX(0)→scaleX(1), origin left, duration 0.6s, trigger: top 85%
- Experience/education entries: translateY(40px)→0, opacity 0→1, stagger 0.15s, duration 0.6s

**Works Section (trigger: top 85%):**
- Section label + headline: word reveal
- Project cards: translateY(60px)→0, opacity 0→1, stagger 0.2s per card, duration 0.6s

**Testimonials:**
- Cards: fade in, translateY(30px)→0, duration 0.6s

**Contact Section (trigger: top 80%):**
- Headline: word-by-word reveal
- Footer columns: translateY(30px)→0, opacity 0→1, stagger 0.15s, duration 0.6s

**Email Modal:**
- Overlay: opacity 0→1, duration 0.3s
- Card: scale(0.95)→scale(1), opacity 0→1, duration 0.3s, ease power2.out
- Close: reverse of above

### 12.3 Animation Config Constants

```js
const ANIMATION_CONFIG = {
  ease: {
    smooth: 'power3.out',
    bounce: 'power2.out',
    linear: 'none',
  },
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
  },
  stagger: {
    word: 0.08,
    line: 0.1,
    card: 0.2,
    entry: 0.15,
  },
  scrollTrigger: {
    start: 'top 80%',
    startLate: 'top 85%',
    once: true, // toggleActions: 'play none none none'
  },
};
```

---

## 13. Responsive Strategy

### 13.1 Breakpoints

| Name    | Range         | Tailwind Prefix |
|---------|---------------|-----------------|
| Mobile  | 0 – 639px     | (default)       |
| Tablet  | 640 – 1023px  | `sm:` / `md:`   |
| Desktop | 1024 – 1439px | `lg:`           |
| Wide    | 1440px+       | `xl:`           |

### 13.2 Section-by-Section Responsive Changes

**Navbar:**
- Mobile: Logo left, hamburger icon right. Nav items in slide-in off-canvas panel.
- Desktop: Full horizontal layout.

**Hero:**
- Mobile: Font-size ~36-42px. Hide decorative arcs. Hide social links. Padding: 5vw.
- Tablet: Font-size ~48-56px. Arcs smaller or hidden. Social links hidden.
- Desktop: Full layout as designed.

**About:**
- Mobile/Tablet: Stack vertically — image full width on top, text below. Image max-height 400px.
- Desktop: Side by side as designed.

**Expertise:**
- Mobile: Single column — Experience on top, Education below.
- Tablet: Same as mobile.
- Desktop: Two columns.

**Works:**
- Mobile: Single column — cards stacked. Card layout switches to vertical (image on top, text below).
- Tablet: Single column, but cards remain horizontal.
- Desktop: 2x2 grid.

**Testimonials:**
- Mobile: 1 card visible at a time.
- Desktop: 2 cards visible.

**Contact:**
- Mobile: Footer info stacks vertically. Button full width.
- Tablet: Two columns (reach me + social), button below.
- Desktop: Three columns.

**Email Modal:**
- Mobile: Width 90vw, max-width 380px.
- Desktop: Width 380-420px.

### 13.3 prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all GSAP animations */
  /* Show all elements immediately (no initial hidden state) */
  /* Disable Lenis smooth scroll */
  /* Disable carousel auto-play */
}
```

In JS: Check `window.matchMedia('(prefers-reduced-motion: reduce)')` before initializing GSAP timelines.

---

## 14. File-by-File Implementation Order

### Phase 1 — Project Scaffold (Files 1-8)

| # | File | Notes |
|---|------|-------|
| 1 | `package.json` | Vite scaffold + deps: vue, gsap, lenis, tailwindcss, @tailwindcss/vite, autoprefixer |
| 2 | `vite.config.js` | Vue plugin + Tailwind plugin |
| 3 | `tailwind.config.js` | Full design system: colors, fonts, sizes |
| 4 | `postcss.config.js` | Tailwind + autoprefixer |
| 5 | `index.html` | Root HTML with Google Fonts link, dark bg |
| 6 | `src/assets/styles/fonts.css` | Google Fonts @import |
| 7 | `src/assets/styles/base.css` | Tailwind directives, CSS custom properties, global resets |
| 8 | `src/main.js` | Create Vue app, import styles |

### Phase 2 — Docker (Files 9-12)

| # | File | Notes |
|---|------|-------|
| 9 | `Dockerfile` | Multi-stage: dev / build / production (nginx) |
| 10 | `docker-compose.yml` | Dev + production services |
| 11 | `nginx.conf` | SPA fallback config |
| 12 | `.dockerignore` | node_modules, dist, .git, screenshots |

### Phase 3 — Data Layer (Files 13-15)

| # | File | Notes |
|---|------|-------|
| 13 | `src/data/navigation.js` | Nav items array with ids and labels |
| 14 | `src/data/projects.js` | 4 project objects with all fields |
| 15 | `src/data/testimonials.js` | 6 testimonial objects (3 pages × 2) |

### Phase 4 — Composables (Files 16-19)

| # | File | Notes |
|---|------|-------|
| 16 | `src/composables/useGsap.js` | GSAP + ScrollTrigger registration |
| 17 | `src/composables/useLenis.js` | Smooth scroll + GSAP sync |
| 18 | `src/composables/useActiveSection.js` | IntersectionObserver nav tracking |
| 19 | `src/composables/useTextReveal.js` | Manual word split + GSAP animate |

### Phase 5 — Layout Shell (Files 20-22)

| # | File | Notes |
|---|------|-------|
| 20 | `src/App.vue` | Root component: Lenis init, section slots, modal state |
| 21 | `src/components/layout/TheNavbar.vue` | Full navbar with active tracking |
| 22 | `src/components/layout/SectionLabel.vue` | Reusable gold label with line |

### Phase 6 — UI Components (Files 23-28)

| # | File | Notes |
|---|------|-------|
| 23 | `src/components/ui/DecorativeArcs.vue` | SVG concentric quarter arcs |
| 24 | `src/components/ui/SocialLinks.vue` | Vertical rotated Behance/LinkedIn |
| 25 | `src/components/ui/ProjectCard.vue` | Horizontal card with hover effects |
| 26 | `src/components/ui/TestimonialCard.vue` | Avatar + name + body layout |
| 27 | `src/components/ui/PaginationDots.vue` | Gold active dots |
| 28 | `src/components/modals/EmailModal.vue` | Full modal with all options |

### Phase 7 — Sections (Files 29-34)

| # | File | Notes |
|---|------|-------|
| 29 | `src/components/sections/HeroSection.vue` | Full hero with load animations |
| 30 | `src/components/sections/AboutSection.vue` | Two-column with scroll anims |
| 31 | `src/components/sections/ExpertiseSection.vue` | Skills + experience + education |
| 32 | `src/components/sections/WorksSection.vue` | Grid of ProjectCards |
| 33 | `src/components/sections/TestimonialsSection.vue` | Carousel logic |
| 34 | `src/components/sections/ContactSection.vue` | Footer info + SAY HELLO button |

### Phase 8 — Polish

| # | Task | Notes |
|---|------|-------|
| 35 | Wire up all scroll animations | Connect useTextReveal + ScrollTrigger to each section |
| 36 | Mobile hamburger menu | Add to TheNavbar, slide-in panel |
| 37 | Responsive testing | Adjust at 375px, 768px, 1024px, 1440px |
| 38 | prefers-reduced-motion | Disable animations gracefully |
| 39 | Performance | Lazy load images, font-display swap |
| 40 | Docker build test | `docker compose up production` |

---

## 15. Docker & Deployment

### 15.1 Dockerfile

```dockerfile
# Dev stage
FROM node:20-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### 15.2 nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;
}
```

### 15.3 docker-compose.yml

```yaml
services:
  dev:
    build:
      context: .
      target: dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development

  production:
    build:
      context: .
      target: production
    ports:
      - "8080:80"
```

---

## 16. Asset Checklist

### 16.1 Images Needed

| Image | Location | Notes |
|-------|----------|-------|
| Profile photo | `public/images/profile.jpg` | Moody side-profile portrait, dark lighting, man with glasses |
| Taxi Booking App | `public/images/projects/taxi-booking.jpg` | Light/white UI mockup thumbnail |
| Learnara | `public/images/projects/learnara.jpg` | Colorful app screenshot, warm tones |
| Devalive | `public/images/projects/devalive.jpg` | Light design mockup with geometric elements |
| College Mgmt | `public/images/projects/college-mgmt.jpg` | Phone mockup showing app interface |
| Tim Cook avatar | `public/images/testimonials/tim-cook.jpg` | Small circular portrait, dark |
| Sundar Pichai avatar | `public/images/testimonials/sundar-pichai.jpg` | Small circular portrait, lighter |
| Additional avatars | `public/images/testimonials/person-3.jpg` to `person-6.jpg` | For remaining testimonial slides |

### 16.2 Placeholder Strategy

Since actual images aren't available, use:
- Profile: Generate a dark gradient placeholder or use a placeholder service
- Project thumbnails: Use colored gradient rectangles matching the approximate colors seen in screenshots
- Avatars: Use initials-based SVG circles or gradient circles

### 16.3 Icons Needed

| Icon | Usage | Implementation |
|------|-------|----------------|
| Arrow ↗ | Project cards | Inline SVG (12-16px) |
| Hamburger ☰ | Mobile nav | 3 horizontal bars, custom SVG/CSS |
| Close ✕ | Modal, mobile nav | SVG or entity |
| Globe 🌐 | Email modal options | Simple SVG globe outline |
| Monitor 🖥 | Default email option | Simple SVG monitor |
| Clipboard 📋 | Copy button | Simple SVG clipboard |

All icons should be inline SVGs for crisp rendering and easy color control.

---

## 17. Critical Visual Details (Easy to Miss)

1. **Top accent line**: Very thin (~2px) dark reddish line at the very top of the page above the navbar
2. **Nav active pill**: Has subtle border, not just background color — `1px solid #333`
3. **Section labels**: The gold line comes BEFORE the text, always with consistent 16px gap
4. **Hero headline period**: "in Somewhere." ends with a period — don't omit
5. **Gold bullet dots** in Expertise: These are filled circles, not hollow, positioned with specific left offset
6. **Project card arrows**: Small ↗ positioned in the upper-right area of the text content, NOT inline with the title
7. **Testimonial section separator**: Those two small horizontal white bars between Works and Testimonials
8. **Email modal gold line**: Thin gold accent bar at the very bottom edge of the modal card
9. **Gmail highlight**: The gold background on "Gmail in browser" — this is the default/recommended option
10. **"Powered by MailtoUI"**: Include this text in the modal footer (it's a MailtoUI-style modal)
11. **Decorative arcs position**: Bottom-RIGHT of hero, not center — arcs originate from near the corner
12. **Social links rotation**: Text rotates -90deg (reads bottom to top when positioned on right edge)
13. **Nav item spacing**: Items are NOT evenly distributed across the full width; they have specific gaps
14. **Contact em dash**: Use proper `—` (U+2014), not `--` or `-`
15. **Experience date separator**: Uses a middle dot `·` between dates, e.g., "AUGUST 2024 · PRESENT"
16. **Testimonial company text**: Appears in a slightly muted/greenish gray, distinct from the body text gray
17. **Card thumbnails**: Project thumbnails are NOT square — they're landscape orientation within the card
18. **Modal options icons**: All browser options use the SAME globe icon; only "Default email app" uses a different monitor icon
