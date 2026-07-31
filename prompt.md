---

## ACTIVATE ALL PROJECT SKILLS FIRST

Before writing a single line of code, read and apply every installed skill:

```
@best-practices
@frontend-design
@shadcn
@superdesign
@ui-ux-pro-max
@vercel-react-best-practices
```

These skills govern every decision — component architecture, animation
patterns, design tokens, accessibility, and deployment. Do not skip them.

---

## PROJECT BRIEF

You are building the official website for **Imam Institute of Nursing &
Allied Health Sciences**, Jacobabad, Sindh, Pakistan.

The previous developer's site (imamcollege.vercel.app) was rejected.
It looked like a generic WordPress template. This build must look and
feel like a **PKR 10,000,000 / $10K custom website** — the kind built
for top-ranked universities like Aga Khan University, LUMS, or IBA.

Study these reference sites before designing anything:
- https://www.aku.edu (editorial authority, whitespace, photography-led)
- https://www.lums.edu.pk (clean hierarchy, confident typography)
- https://loop-agency.framer.website/projects/new-damage (animation
  approach — smooth scroll reveals, no jank, no gimmicks)

The target audience is prospective nursing students aged 17–24 and
their parents in interior Sindh. Average device: mid-range Android.
Average connection: 4G. Every animation must be GPU-accelerated only.
No layout thrashing. No heavy libraries loaded upfront.

---

## TECH STACK

```
Framework:     Next.js 14 (App Router, TypeScript, strict mode)
Styling:       Tailwind CSS v3 + CSS custom properties
Components:    shadcn/ui (Radix UI primitives)
Animations:    Framer Motion v11 — lazy loaded per section
Icons:         Lucide React
Fonts:         next/font/google
               → Playfair Display (display headings)
               → DM Sans (body, UI)
Images:        next/image — WebP, priority on hero, lazy elsewhere
Forms:         React Hook Form + Zod validation
Deployment:    Vercel (free tier)
Package mgr:   npm
```

**Do NOT install:** GSAP (license cost), Three.js (bundle too heavy),
any CSS animation library beyond Framer Motion, jQuery, Bootstrap,
Chakra UI, or Material UI.

---

## DESIGN SYSTEM

### Color Palette
The client's logo is navy blue (#1B3A7A) + red (#C0392B) + white.
Build the entire site around these — do not use teal or generic
blue. This is what makes it feel like *their* brand, not a template.

```css
:root {
  /* Primary */
  --navy:        #1B3A7A;   /* main brand, nav, footer */
  --navy-deep:   #0F2456;   /* hero bg, darkest surfaces */
  --navy-mid:    #2952A3;   /* hover, active states */
  --navy-light:  #E8EEFF;   /* tinted section bgs */

  /* Accent */
  --crimson:     #C0392B;   /* CTAs, highlights, logo red */
  --crimson-dark:#9B2C1F;   /* hover on crimson */
  --crimson-pale:#FCECEA;   /* badge fills */

  /* Neutral */
  --white:       #FFFFFF;
  --off-white:   #F9FAFB;
  --ink:         #111827;
  --ink-muted:   #4B5563;
  --ink-subtle:  #9CA3AF;
  --border:      #E5E7EB;

  /* Gold — used sparingly for accreditation / premium feel */
  --gold:        #D4A017;
  --gold-pale:   #FBF3DC;
}
```

Add all of these to `tailwind.config.ts` as named tokens.

### Typography
```
Display font:  Playfair Display
  — h1: 72px / 700 / tracking -2px / line-height 1.0
  — h2: 48px / 700 / tracking -1px / line-height 1.1
  — h3: 28px / 700 / tracking -0.5px

Body font: DM Sans
  — lead:    18px / 400 / line-height 1.7
  — body:    16px / 400 / line-height 1.75
  — small:   14px / 400
  — eyebrow: 11px / 600 / tracking 0.15em / uppercase
  — caption: 12px / 400

Pairing logic: Playfair Display creates the editorial gravitas of
top-ranked university sites. DM Sans keeps the UI clean and readable
on any screen size. Never use these fonts on the wrong element type.
```

### Spacing System
```
Section vertical padding: py-24 md:py-32 lg:py-40
Container:               max-w-7xl mx-auto px-6 md:px-10
Card internal padding:   p-6 md:p-8
Grid gap:                gap-6 md:gap-8
```

### Component Tokens (for shadcn/ui overrides)
```ts
// components.json → baseColor: "slate"
// Override in globals.css:
--radius: 0.5rem;           // cards
--radius-sm: 0.25rem;       // badges, tags
--radius-full: 9999px;      // pills
```

---

## ANIMATION SYSTEM

### Core Philosophy
Animations should feel like a luxury watch — precise, intentional,
effortless. Not a fireworks show. Every animation serves a purpose:
either it guides the eye, or it confirms an interaction. Nothing else.

Reference: loop-agency.framer.website uses smooth opacity + Y-axis
reveals with custom easing. Copy that approach exactly.

### Custom Easing Curves (use these everywhere)
```ts
export const ease = {
  out:       [0.22, 1, 0.36, 1],      // smooth deceleration
  inOut:     [0.76, 0, 0.24, 1],      // for transitions
  spring:    { type: 'spring', stiffness: 300, damping: 30 },
  springFast:{ type: 'spring', stiffness: 400, damping: 40 },
}
```

### Animation 1 — FadeUp (apply to EVERY section)
```tsx
// components/motion/FadeUp.tsx
// Reusable wrapper. Import this instead of writing motion.div inline.

const FadeUp = ({ children, delay = 0, duration = 0.7 }) => {
  const reduced = useReducedMotion()
  if (reduced) return <>{children}</>
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
```

### Animation 2 — Stagger Container
```tsx
// For grids of cards — children stagger in at 0.1s intervals
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } }
}
```

### Animation 3 — Hero Title Word Reveal
```tsx
// Split h1 into words, each word is a span with overflow:hidden
// Inner span slides up from y:100% → y:0 (mask reveal, not fade)
// Stagger: 0.06s per word, starting at 0.3s after page load
// This is the signature animation — make it look premium
```

### Animation 4 — Animated Stat Counters
```tsx
// components/motion/AnimatedCounter.tsx
// useInView → when enters viewport, useMotionValue counts 0 → target
// useSpring(count, { stiffness: 50, damping: 20 }) for smooth easing
// Format: "500+" "15+" "2019" "5+"
// NEVER show "0+" as the final value — always complete the animation
```

### Animation 5 — Scroll-linked Nav
```tsx
// Nav starts: bg transparent, text white (on dark hero)
// After scrollY > 80px: bg white/95 backdrop-blur-sm, text ink, shadow-sm
// Transition: 300ms ease — use useScroll from framer-motion
// Add a thin 2px crimson bottom border on scroll state
```

### Animation 6 — Card Hover
```tsx
// Program cards, Why-Us cards:
// whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22,1,0.36,1] } }}
// Plus: box-shadow transition via CSS (not JS) for performance
// class="transition-shadow duration-300 hover:shadow-xl"
```

### Animation 7 — Horizontal Scroll Ticker (Accreditation Bar)
```tsx
// A seamless marquee of logos: PNMC · SMBBMU · Govt of Sindh · Imam Institute
// CSS animation: translateX(0) → translateX(-50%) on 20s linear infinite
// Two copies of the list side by side — no JS, pure CSS scroll
// Pause on hover
```

### Animation 8 — Section Reveal with Line
```tsx
// Each section h2 gets a decorative animated underline
// After the heading fades in: a navy line scales scaleX 0→1
// transform-origin: left, duration: 0.6s, delay: 0.5s
// Width: 48px, height: 3px, bg: crimson
```

### Performance Rules (NON-NEGOTIABLE)
```
✓ All Framer Motion imports: dynamic with { ssr: false }
✓ useReducedMotion() check on every animated component
✓ No layout-triggering properties: never animate width/height/padding
✓ Only animate: transform, opacity — these are GPU-composited
✓ will-change: transform — only on elements that actually animate
✓ Framer Motion viewport option: once: true — never replay animations
✓ Images: next/image with sizes prop, WebP format, max 150KB each
✓ Fonts: next/font — no FOUT, automatic font-display: swap
✓ Target: LCP < 2.5s, CLS < 0.1, Lighthouse Performance ≥ 90
```

---

## FULL SITE STRUCTURE

```
app/
├── layout.tsx              ← fonts, global metadata, nav, footer
├── page.tsx                ← homepage
├── about/
│   └── page.tsx            ← full about, vision, mission, history
├── programs/
│   ├── page.tsx            ← all programs overview
│   └── bs-nursing/
│       └── page.tsx        ← BS Nursing detail page
├── admissions/
│   ├── page.tsx            ← process, eligibility, docs, deadlines
│   └── apply/
│       └── page.tsx        ← enquiry form
├── faculty/
│   └── page.tsx            ← faculty grid with department filter
├── gallery/
│   └── page.tsx            ← photo grid with lightbox
├── news/
│   ├── page.tsx            ← news list
│   └── [slug]/
│       └── page.tsx        ← news detail
└── contact/
    └── page.tsx            ← form + map + WhatsApp

components/
├── layout/
│   ├── Nav.tsx
│   └── Footer.tsx
├── sections/               ← one file per homepage section
│   ├── Hero.tsx
│   ├── AccreditationBar.tsx
│   ├── About.tsx
│   ├── Stats.tsx
│   ├── Programs.tsx
│   ├── WhyUs.tsx
│   ├── Vision.tsx
│   ├── ClinicalPartners.tsx
│   ├── Gallery.tsx
│   ├── News.tsx
│   ├── AdmissionsCTA.tsx
│   └── TrustBar.tsx
├── motion/
│   ├── FadeUp.tsx
│   ├── AnimatedCounter.tsx
│   └── StaggerGrid.tsx
└── ui/                     ← shadcn components + custom atoms
    ├── SectionEyebrow.tsx
    ├── ProgramCard.tsx
    ├── WhyCard.tsx
    └── Badge.tsx

lib/
├── data.ts                 ← ALL content as typed TS constants
├── fonts.ts                ← next/font config
└── utils.ts                ← cn() and shared helpers
```

---

## ALL REAL CONTENT (use word-for-word — never lorem ipsum)

```ts
// lib/data.ts — paste this exactly

export const institute = {
  name: 'Imam Institute of Nursing & Allied Health Sciences',
  shortName: 'Imam Institute',
  abbreviation: 'IINAHS',
  tagline: 'Empowering Future Healthcare Professionals Since 2019',
  heroHeadline: 'Welcome to Imam Institute of Nursing & Allied Health Sciences Jacobabad',
  established: 2019,
  firstBatch: 2020,
  location: 'Jacobabad, Sindh, Pakistan',
  phone: '+92 312 3421447',
  whatsapp: '+92 312 3421447',
  email: 'info@imaminstitute.edu.pk',
  facebook: 'https://facebook.com/Imam.Institute',
  youtube: 'https://youtube.com/@imaminstitute',
  googleMap: 'https://maps.app.goo.gl/R4bGzRdP163MaZs26',
}

export const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled' },
  { value: 15,  suffix: '+', label: 'Qualified Faculty' },
  { value: 2019, suffix: '',  label: 'Year Established' },
  { value: 5,   suffix: '+', label: 'Programs Offered' },
]

export const accreditations = [
  { label: 'Registered with PNMC',        logo: '/logos/pnmc.svg' },
  { label: 'Affiliated with SMBBMU',      logo: '/logos/smbbmu.png' },
  { label: 'Approved by Govt. of Sindh',  logo: '/logos/sindh-govt.png' },
  { label: 'Imam Institute Certified',    logo: '/logos/imam-cert.png' },
]

export const about = {
  short: `Imam Institute of Nursing & Allied Health Sciences was established
  in 2019 with a vision to develop skilled, competent, and compassionate
  nursing professionals. Since admitting its first BS Nursing batch in 2020,
  the institute has consistently achieved excellent academic results and
  maintained high standards in nursing education.`,
  full: `The institute is approved by the Government of Sindh, registered
  with the Pakistan Nursing & Midwifery Council (PNMC), and affiliated with
  Shaheed Mohtarma Benazir Bhutto Medical University (SMBBMU) Larkana. Our
  students receive clinical training at Imam Medical Center Jacobabad,
  Jacobabad Institute of Medical Sciences (JIMS), and Civil Hospital
  Jacobabad. At Imam Institute, we are committed to academic excellence,
  professional integrity, and preparing highly qualified nursing
  professionals to serve both national and international healthcare
  communities.`,
  vision: `Imam Institute of Nursing envisions developing skilled human
  resource in nursing field while enabling them for incoming generation,
  reducing unemployment and contributing in socio-economic stability.`,
  mission: `To create an academic, learning and collaborative environment for
  the preparation of caring, competent and professional nurses, who will
  accomplish their role in hospital and community.`,
}

export const programs = [
  {
    slug: 'bs-nursing',
    name: 'BS Nursing (Generic)',
    department: 'Department of Nursing',
    duration: '4 Years',
    status: 'active',
    featured: true,
    description: `The Department of Nursing is dedicated to preparing
    compassionate, skilled, and competent nursing professionals through
    quality education, hands-on clinical training, and evidence-based
    learning. Our experienced faculty and modern learning environment
    empower students to deliver safe, ethical, and patient-centered care
    while meeting the evolving needs of the healthcare industry.`,
    accreditation: 'PNMC Certified',
  },
  {
    slug: 'cmw',
    name: 'Community Mid Wifery (CMW)',
    department: 'Department of Nursing',
    duration: 'TBA',
    status: 'future',
    featured: false,
    description: 'Launching soon — community midwifery program for women\'s health.',
    accreditation: 'PNMC',
  },
  {
    slug: 'lhv',
    name: 'Lady Health Visitor (LHV)',
    department: 'Department of Nursing',
    duration: 'TBA',
    status: 'future',
    featured: false,
    description: 'Launching soon — community health program.',
    accreditation: 'PNMC',
  },
  {
    slug: 'cna',
    name: 'Certified Nursing Assistant (CNA)',
    department: 'Department of Nursing',
    duration: 'TBA',
    status: 'future',
    featured: false,
    description: 'Launching soon — entry-level clinical nursing certification.',
    accreditation: 'PNMC',
  },
]

export const whyUs = [
  { icon: 'GraduationCap', title: 'Experienced & Qualified Faculty',     desc: 'BSN & MSN qualified faculty with extensive clinical and academic expertise.' },
  { icon: 'Award',          title: 'Recognized by PNMC',                  desc: 'Officially registered with the Pakistan Nursing & Midwifery Council.' },
  { icon: 'Building2',      title: 'Affiliated with SMBBMU Larkana',      desc: 'Full university affiliation with Shaheed Mohtarma Benazir Bhutto Medical University.' },
  { icon: 'FlaskConical',   title: 'Modern Skills & Science Labs',        desc: 'State-of-the-art nursing skills labs and science laboratories.' },
  { icon: 'Hospital',       title: 'Hands-on Clinical Training',          desc: 'Real hospital rotations from early semesters at 3 partner hospitals.' },
  { icon: 'Users',          title: 'Student-Centered Environment',        desc: 'Small cohorts, personalized attention, and a supportive campus culture.' },
  { icon: 'Coins',          title: 'Affordable Fee Structure',            desc: 'Quality nursing education at competitive tuition rates.' },
  { icon: 'Medal',          title: 'Merit & Scholarship Opportunities',   desc: 'Need-based and merit scholarships available for deserving students.' },
  { icon: 'Monitor',        title: 'Digital Classrooms & Library',        desc: 'Technology-integrated learning with a well-stocked academic library.' },
  { icon: 'TrendingUp',     title: 'Excellent Academic Results',          desc: 'Consistently top performance in SMBBMU examinations since first batch.' },
  { icon: 'Briefcase',      title: 'Career Guidance & Development',       desc: 'Professional development support and hospital placement network.' },
  { icon: 'Trophy',         title: 'Sports, Seminars & Co-curricular',    desc: 'Active student life with events, seminars, and extracurricular activities.' },
]

export const hospitals = [
  {
    number: '01',
    name: 'Imam Medical Center',
    location: 'Jacobabad',
    desc: 'Primary clinical training facility providing comprehensive exposure across all major nursing departments.',
  },
  {
    number: '02',
    name: 'JIMS',
    fullName: 'Jacobabad Institute of Medical Sciences',
    location: 'Jacobabad',
    desc: 'Diverse clinical rotations covering medical, surgical, pediatric, and OBG departments.',
  },
  {
    number: '03',
    name: 'Civil Hospital',
    location: 'Jacobabad',
    desc: 'Major public teaching hospital offering unparalleled community and emergency nursing experience.',
  },
]

export const trustBadges = [
  { label: 'Government Approved',         sublabel: 'Govt. of Sindh',          icon: 'ShieldCheck', logo: '/logos/sindh-govt.png' },
  { label: 'PNMC Registered',             sublabel: 'Pakistan Nursing Council', icon: 'Award',       logo: '/logos/pnmc.svg' },
  { label: 'SMBBMU Affiliated',           sublabel: 'University Affiliated',    icon: 'Building2',   logo: '/logos/smbbmu.png' },
  { label: 'Imam Institute Certified',    sublabel: 'Quality Assured',          icon: 'BadgeCheck',  logo: '/logos/imam-cert.png' },
]
```

---

## HOMEPAGE — SECTION BY SECTION BUILD SPEC

### SECTION 1 — NAV
```
Layout:     Full-width, fixed top, z-50
Left:       Imam Institute logo image (from /public/logos/imam-logo.png)
            — use next/image, width 140px, height auto
Center:     About · Programs · Admissions · Faculty · Gallery · Contact
Right:      "Apply Now" button — crimson bg, white text, rounded-sm
            WhatsApp icon button — green icon, tooltip on hover

Scroll behavior:
  - Default: bg-transparent, text-white (sits on top of dark hero)
  - Scrolled (>80px): bg-white/95 backdrop-blur-sm, text-ink, shadow-sm
    + 2px crimson line at very bottom of nav
  - Transition: 300ms ease

Mobile (<768px):
  - Hamburger icon (Lucide Menu)
  - Slide-down drawer with AnimatePresence (y: -20 → 0, opacity 0→1)
  - Full-width stacked links + both CTAs
```

### SECTION 2 — HERO
```
Background: navy-deep (#0F2456) full bleed
            + subtle diagonal grid pattern overlay (CSS, 1px lines,
              opacity 0.06) — gives texture without heaviness
            + radial gradient: navy-deep center → slightly lighter edge

Left column (60%):
  - Eyebrow: "Est. 2019 · Jacobabad, Sindh" — crimson text, tracking-widest
  - H1 (Playfair Display, 72px, white):
    "Welcome to Imam Institute of Nursing & Allied Health Sciences"
    → WORD REVEAL ANIMATION — each word slides up from mask (not fade)
    → Stagger 0.06s per word, start delay 0.3s
  - Subheading (DM Sans, 20px, white/70):
    "Empowering Future Healthcare Professionals Since 2019"
    → FadeUp, delay 1.2s
  - Button row (FadeUp, delay 1.5s):
    Button 1: "Apply for Admission" → /admissions/apply
              crimson bg, white text, px-8 py-4, rounded-sm
              whileHover: crimson-dark + slight scale(1.02)
    Button 2: "Explore Programs" → /programs
              white border, white text, same size
              whileHover: white bg, navy text
  - Credential pills row (FadeUp, delay 1.8s):
    3 pills side by side — small icon + text:
    🏛 PNMC Registered · 🎓 SMBBMU Affiliated · ✓ Govt. Sindh Approved

Right column (40%):
  - The real campus group photo (students at SMBBMU seminar)
  - Treat it as a floating card: rounded-2xl, overflow-hidden
  - Slight parallax: as user scrolls, image moves up at 0.3x speed
  - FadeUp from right: x: 60 → 0, opacity 0→1, delay 0.6s
  - Below the photo: a small floating stat card (absolute bottom-left):
    "500+ Students · 5+ Years · 15+ Faculty"
    white card, navy text, shadow-xl, rounded-xl, px-4 py-3

Bottom of hero:
  - Scroll indicator: animated bouncing ChevronDown icon, opacity 0.5
  - Disappears after user scrolls 100px
```

### SECTION 3 — ACCREDITATION TICKER
```
Background: white, border-y border-border, py-5
Content:    Seamless horizontal marquee (CSS animation only, no JS):
            "PNMC Registered" [logo] · "SMBBMU Affiliated" [logo] ·
            "Govt. of Sindh Approved" [logo] · "Imam Institute Certified" [logo]
            → duplicate the list 2x for seamless loop
            → animation: translateX 0 → -50% over 25s linear infinite
            → pause on hover (animation-play-state: paused)

Use real logo images for PNMC, SMBBMU (provided), Sindh Govt (provided)
Each logo: next/image, height 32px, width auto, grayscale filter,
           hover: grayscale-0 — transition 300ms
```

### SECTION 4 — ABOUT
```
Background: off-white (#F9FAFB)
Layout:     Two columns, 55% / 45%

Left:
  - Eyebrow: "About the Institute"
  - H2 (Playfair): "Shaping Compassionate Nurses Since 2019"
  - Animated underline (3px crimson, scaleX 0→1 after heading fades in)
  - Body text: first paragraph of about.full
  - Second paragraph: about.full second paragraph
  - "Read Our Full Story →" link → /about
  - Accreditation badge row (3 logos in a row, small, with label below)

Right:
  - Dark navy card (rounded-2xl, p-8):
    - Vision block:
      "Our Vision" (eyebrow, gold text)
      about.vision text (Playfair italic, 18px, white/85)
    - Divider (1px white/10)
    - Mission block:
      "Our Mission" (eyebrow, gold text)
      about.mission text (DM Sans, 15px, white/70)
  - FadeUp from right, delay 0.3s
```

### SECTION 5 — STATS
```
Background: navy (#1B3A7A)
Layout:     4 columns, centered

Each stat:
  - Large number (Playfair Display, 72px, white) — ANIMATED COUNTER
    counts from 0 → target value when section enters viewport
    useSpring for smooth deceleration, not linear
  - Suffix ("+") rendered as separate span, appears after counter starts
  - Label (DM Sans, 14px, white/60, uppercase, tracking-wide)
  - Thin crimson line above the number (width 24px)

Dividers: 1px white/10 vertical lines between items
FadeUp with stagger on the number+label pairs
```

### SECTION 6 — PROGRAMS
```
Background: white
Layout:     Header + 2x2 grid (desktop) / 1 column (mobile)

Header:
  - Eyebrow: "Academic Programs"
  - H2: "Choose Your Path in Healthcare"
  - Lead: short description from programs array
  - "View All Programs →" link right-aligned

Card (featured — BS Nursing):
  - Full-width top card, different layout — horizontal on desktop
  - Left: navy bg, large "01", program name in Playfair, accreditation badge
  - Right: white/light bg, description, duration, "Most Enrolled" tag, CTA
  - whileHover: y -6, shadow-xl

Cards (future programs — 3 cards in a row below):
  - navy-light bg (#E8EEFF)
  - "Coming Soon" pill — crimson
  - Program name, department, brief description
  - Locked/disabled CTA ("Notify Me" → collects email)
  - whileHover: y -4

StaggerGrid animation on card container
```

### SECTION 7 — WHY US
```
Background: off-white
Layout:     Header + 3x4 grid (12 points from whyUs array)

Header:
  - Eyebrow: "Why Students Choose Us"
  - H2: "Why Choose Imam Institute?"

Each card:
  - white bg, border border-border, rounded-xl, p-6
  - Icon (Lucide, 24px, crimson, in navy-light circle bg)
  - Title (DM Sans, 16px, 600, ink)
  - Description (DM Sans, 14px, ink-muted)
  - whileHover: y -4, shadow-md, border-navy/20

StaggerGrid animation — stagger 0.07s per card
```

### SECTION 8 — VISION & MISSION (standalone)
```
Background: navy-deep (#0F2456)
Layout:     Two equal columns, full-bleed background

Left — Vision:
  - Eyebrow (gold): "Our Vision"
  - Large decorative quote mark (Playfair, 120px, white/05, absolute)
  - Text (Playfair italic, 22px, white/85): about.vision
  - Bottom: thin gold line, 40px wide

Right — Mission:
  - Eyebrow (gold): "Our Mission"
  - Large decorative quote mark
  - Text (Playfair italic, 22px, white/85): about.mission
  - Bottom: thin gold line

Vertical divider between columns (1px white/10)
FadeUp left + FadeUp right simultaneously, opposite directions
```

### SECTION 9 — CLINICAL PARTNERS
```
Background: white
Layout:     Header + 3 horizontal cards

Header:
  - Eyebrow: "Clinical Training"
  - H2: "Learn Where Real Care Happens"
  - Lead: "Our students rotate through three major hospitals from their
           first semester — not just in their final year."

Each hospital card:
  - Stacked layout: large ghost number (Playfair, 96px, navy/06) in bg
  - Hospital number pill (crimson, small, e.g. "Hospital 01")
  - Name (Playfair, 24px, navy)
  - Full name if different (DM Sans, 13px, muted)
  - Description
  - Location tag (pin icon + "Jacobabad")
  - Border-top: 3px solid navy on hover
  - whileHover: y -6, shadow-lg

StaggerGrid: 0.15s stagger
```

### SECTION 10 — GALLERY PREVIEW
```
Background: off-white
Layout:     Header + masonry-style grid (3 columns, varying heights)

Header:
  - Eyebrow: "Campus Life"
  - H2: "Life at Imam Institute"
  - "View Full Gallery →" right-aligned

Images: Use the provided real campus photos
  - The SMBBMU group photo: spans 2 columns, large
  - Fill remaining cells with tinted navy placeholder divs with icons
    (until client provides more photos — do NOT use stock images)

Each image:
  - next/image, rounded-xl, overflow-hidden
  - Hover: scale(1.03) with overflow:hidden clip on parent — smooth zoom
  - Caption overlay on hover: slides up from bottom (y: 100% → 0)

Lightbox: use shadcn Dialog component — opens full image on click
```

### SECTION 11 — NEWS / ANNOUNCEMENTS
```
Background: white
Layout:     Header + 3 cards (horizontal layout on desktop)

Header:
  - Eyebrow: "Latest Updates"
  - H2: "News & Announcements"
  - "All News →" right-aligned

Cards (from latest news — use placeholder content that feels real):
  - Card 1: "Admissions Open for BS Nursing 2026 — Limited Seats Available"
             Date: March 2026 | Category: Admissions (crimson badge)
  - Card 2: "Imam Institute Students Attend International Nursing Seminar at SMBBMU"
             Date: February 2026 | Category: Events (navy badge)
  - Card 3: "Clinical Affiliation Renewed with JIMS for Academic Year 2025–26"
             Date: January 2026 | Category: Academic (gold badge)

Each card:
  - Image placeholder: colored bg with emoji/icon (hospital, graduation, book)
  - Date (DM Sans, 12px, muted)
  - Category badge (pill, colored)
  - Headline (Playfair, 20px, ink)
  - "Read More →" link
  - whileHover: y -4, shadow-md
```

### SECTION 12 — ADMISSIONS CTA BANNER
```
Background: crimson (#C0392B), full bleed
Layout:     Left content + Right actions, vertically centered

Left:
  - Eyebrow (white/60): "Admissions 2026 — Now Open"
  - H2 (Playfair, white, 48px): "Ready to Begin Your Healthcare Career?"
  - Body (white/75): "Limited seats. Strong demand. Apply before the deadline."

Right:
  - Button 1: "Apply for Admission" (white bg, crimson text, bold)
  - Button 2: WhatsApp icon + "Chat with Admissions" (white border, white text)
  - Both buttons: whileHover scale(1.03)

Background detail: subtle radial gradient, slightly lighter center
FadeUp on left content, FadeUp from right on buttons
```

### SECTION 13 — TRUST BAR
```
Background: navy-deep, py-16
Layout:     Header + 4 badge cards in a row

Header (centered):
  - Eyebrow (gold): "Fully Accredited & Verified"
  - H2 (white): "Recognized by Every Major Authority"

Each badge card:
  - white/5 bg, border border-white/10, rounded-xl, p-6, text-center
  - Real logo image (next/image, height 48px, width auto)
  - Label (DM Sans, 14px, white/90, semibold): e.g. "Government Approved"
  - Sublabel (DM Sans, 12px, white/50): e.g. "Registered with Govt. of Sindh"
  - ShieldCheck icon (Lucide, gold, 20px) at top-right corner of card

Use REAL provided logos:
  - Sindh Govt logo → /public/logos/sindh-govt.png
  - SMBBMU logo → /public/logos/smbbmu.png
  - Imam Institute logo → /public/logos/imam-logo.png
  - PNMC (text badge if no logo provided)
```

### SECTION 14 — FOOTER
```
Background: #0A1A3D (darkest navy)
Layout:     4-column grid + bottom bar

Col 1 — Brand (wider):
  - Imam Institute logo (white version or colored on dark)
  - institute.tagline
  - Contact: phone, email, WhatsApp, location (each with Lucide icon)
  - Social links: Facebook icon, YouTube icon

Col 2 — Quick Links:
  About · Programs · Faculty · Admissions · Gallery · Contact

Col 3 — Programs:
  BS Nursing · CMW (Coming Soon) · LHV (Coming Soon) · CNA (Coming Soon)

Col 4 — Accreditations:
  3 small logos (PNMC, SMBBMU, Sindh Govt) stacked
  Each with label text

Bottom bar (border-top border-white/08):
  Left: © 2026 Imam Institute of Nursing & Allied Health Sciences.
        All rights reserved.
  Right: PNMC · SMBBMU · Govt. of Sindh Approved
```

---

## ASSET MANAGEMENT

### Logo & Image Files
Copy all provided images to `/public/`:
```
/public/logos/imam-logo.png       ← the blue/red circular logo
/public/logos/sindh-govt.png      ← green Sindh government seal
/public/logos/smbbmu.png          ← SMBBMU university logo
/public/images/campus-group.jpg   ← SMBBMU seminar group photo
```

### Image Optimization
```tsx
// All images must use next/image
// Hero photo:
<Image
  src="/images/campus-group.jpg"
  alt="Imam Institute students at SMBBMU international nursing seminar"
  width={640}
  height={480}
  priority          // LCP image — load immediately
  className="..."
/>

// All other images: priority={false}, loading="lazy"
// Provide meaningful alt text for every image — no "image1.jpg"
```

---

## SEO & METADATA

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Imam Institute of Nursing & Allied Health Sciences | Jacobabad',
    template: '%s | Imam Institute',
  },
  description: 'PNMC registered, SMBBMU affiliated nursing college in Jacobabad, Sindh. Admissions open for BS Nursing 2026. Approved by Government of Sindh.',
  keywords: [
    'nursing college Jacobabad',
    'BS nursing Sindh',
    'PNMC registered nursing institute',
    'SMBBMU affiliated college',
    'Imam Institute Jacobabad',
    'nursing admission 2026 Sindh',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    siteName: 'Imam Institute of Nursing & Allied Health Sciences',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  icons: { icon: '/logos/imam-logo.png' },
}
```

Add unique title + description to every page using Next.js `generateMetadata`.

---

## WHAT TO ABSOLUTELY AVOID

```
✗ Teal / green as primary color — the client's brand is navy + crimson
✗ Generic "medical cross" or "pill" icons for the hero — feels cheap
✗ Lorem ipsum anywhere — use real content from lib/data.ts only
✗ Stock photography — use only provided real photos
✗ CSS frameworks other than Tailwind (no Bootstrap, no plain CSS files)
✗ Animating width, height, top, left, margin — GPU kills for these
✗ Loading heavy Framer Motion features (3D transforms, drag) not needed
✗ Hardcoded hex colors in JSX — always use Tailwind tokens from config
✗ "0+" in stat counters — animation must complete to real value
✗ Generic blue (#3B82F6) for anything — use navy or crimson only
✗ Shadcn default slate theme showing through — override in globals.css
✗ Components longer than 150 lines — split into sub-components
✗ Any AI-generated stock image — feels fake and slop-like
✗ Carousel/slider on hero — the hero is static, photography is static
✗ Auto-playing video — too heavy for 4G connections
✗ Dark mode — this site is light + dark navy sections, not a dark mode toggle
```

---

## BUILD ORDER

Follow this sequence. Do not jump ahead.

```
Step 1:  Read ALL skill files (@best-practices @frontend-design
         @shadcn @superdesign @ui-ux-pro-max @vercel-react-best-practices)

Step 2:  npx create-next-app@latest imam-institute --typescript
         --tailwind --app --src-dir=false --import-alias="@/*"

Step 3:  npm install framer-motion lucide-react react-hook-form zod
         npx shadcn@latest init
         (choose: New York style, slate base, yes CSS variables)

Step 4:  Configure tailwind.config.ts with the full color palette above

Step 5:  Set up lib/fonts.ts (Playfair Display + DM Sans via next/font)
         Set up lib/data.ts (all content constants from above)
         Set up lib/utils.ts (cn() helper)

Step 6:  Copy all provided logos and photos to /public/ with correct names

Step 7:  Build app/layout.tsx (metadata, fonts, Nav, Footer, body wrapper)

Step 8:  Build motion primitives:
         components/motion/FadeUp.tsx
         components/motion/AnimatedCounter.tsx
         components/motion/StaggerGrid.tsx

Step 9:  Build Nav.tsx (with scroll behavior) + Footer.tsx

Step 10: Build homepage sections IN ORDER:
         Hero → AccreditationBar → About → Stats →
         Programs → WhyUs → Vision → ClinicalPartners →
         Gallery → News → AdmissionsCTA → TrustBar

Step 11: Wire all sections in app/page.tsx

Step 12: Build remaining pages:
         /about → /programs → /programs/bs-nursing →
         /admissions → /admissions/apply → /faculty →
         /gallery → /news → /contact

Step 13: Add metadata to every page with generateMetadata

Step 14: npm run build — fix all TypeScript errors and ESLint warnings
         npm run lint — zero warnings acceptable

Step 15: vercel --prod
         Check Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
```

---

## QUALITY CHECKLIST (run before declaring done)

```
□ Every image uses next/image with proper alt text
□ Stat counters show real animated numbers (not "0+")
□ Nav works correctly on mobile (hamburger + drawer)
□ All animations respect prefers-reduced-motion
□ No hardcoded hex colors in any .tsx file
□ All content comes from lib/data.ts (no inline strings)
□ npm run build passes with zero errors
□ Lighthouse Performance ≥ 90 on mobile
□ WhatsApp button links to correct number
□ All logos display correctly in accreditation sections
□ Contact form submits and shows success/error state
□ All internal links resolve (no 404s)
□ Site looks correct on 375px (iPhone SE) viewport
□ Fonts load without FOUT (flash of unstyled text)
□ Google Map embedded on /contact page
```

---

*Design direction: Editorial authority of AKU.edu + Animation restraint
of loop-agency.framer.website + Real content of Imam Institute.
The result: a site that a top-ranked nursing college would be proud of.*