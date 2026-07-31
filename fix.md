# CLAUDE CODE — READ THIS FIRST

Read the full project specification in @prompt.md before doing anything.
That file contains the complete design system, animation specs, color tokens,
and section-by-section build instructions. Every decision below references it.

---

## SITUATION

GitHub Copilot built an initial version of this site. It has critical problems
that need to be fixed. Do NOT rewrite the entire project from scratch —
audit what exists, keep what is structurally correct, and fix what is broken.

Here is what is currently wrong (from visual inspection):

### PROBLEM 1 — Hero text is invisible (white text on white background)
The hero section background is not rendering as `navy-deep (#0F2456)`.
The `bg-navy-deep` Tailwind class is not being applied or the color token
is not defined in `tailwind.config.ts`. The text is white so it disappears.

### PROBLEM 2 — No animations running at all
Framer Motion is either not installed, not imported correctly, or every
animated component is wrapped in `"use client"` incorrectly. The word-reveal,
FadeUp, and counter animations from @prompt.md are completely absent.

### PROBLEM 3 — Hero image is tiny
The campus group photo should be a large, right-column image taking up
40% of the hero width, displayed as a tall rounded card. Instead it is
rendering as a small thumbnail. The `next/image` `fill` layout or
`width/height` props are wrong.

### PROBLEM 4 — Generic layout — looks like a template
The spacing, typography scale, and section rhythm from @prompt.md were
ignored. Everything is cramped and uses default Tailwind values instead
of the custom design tokens specified.

### PROBLEM 5 — "Apply" button in nav is just a green arrow icon
The nav CTA should be a full button with text "Apply Now" in crimson,
not a green icon button.

### PROBLEM 6 — No scroll behavior on nav
The nav stays the same on scroll. Per @prompt.md it should transition
from transparent (on dark hero) to white/95 with backdrop blur after 80px.

---

## STEP 1 — AUDIT BEFORE TOUCHING ANYTHING

Run these checks first and tell me what you find:

```bash
# Check if color tokens exist in tailwind config
cat tailwind.config.ts

# Check if framer-motion is installed
cat package.json | grep framer

# List what section components exist
ls components/sections/

# Check current Hero.tsx
cat components/sections/Hero.tsx

# Check globals.css for any conflicting styles
cat app/globals.css
```

Report back what is missing or wrong in each file before making changes.

---

## STEP 2 — FIX TAILWIND CONFIG

Open `tailwind.config.ts` and ensure it contains ALL of these color tokens.
If they are missing or incomplete, replace the colors section entirely:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep":   "#0F2456",
        "navy":        "#1B3A7A",
        "navy-mid":    "#2952A3",
        "navy-light":  "#E8EEFF",
        "crimson":     "#C0392B",
        "crimson-dark":"#9B2C1F",
        "crimson-pale":"#FCECEA",
        "gold":        "#D4A017",
        "gold-pale":   "#FBF3DC",
        "off-white":   "#F9FAFB",
        "ink":         "#111827",
        "ink-muted":   "#4B5563",
        "ink-subtle":  "#9CA3AF",
        "border":      "#E5E7EB",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dm:       ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

After saving, the `bg-navy-deep` class will produce `#0F2456` and the
hero background will work immediately.

---

## STEP 3 — FIX FONTS IN LAYOUT

Open `app/layout.tsx`. Ensure Playfair Display and DM Sans are loaded
via `next/font/google` and their CSS variables are applied to `<body>`:

```tsx
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// On the <body> tag:
<body className={`${playfair.variable} ${dmSans.variable} font-dm antialiased`}>
```

---

## STEP 4 — FIX GLOBALS.CSS

Open `app/globals.css`. Add these base styles AFTER the Tailwind directives.
Do NOT remove `@tailwind base/components/utilities`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Remove any accidental white background on hero elements */
  h1, h2, h3, h4 {
    font-family: var(--font-playfair), Georgia, serif;
  }

  body {
    font-family: var(--font-dm-sans), system-ui, sans-serif;
    color: #111827;
    background: #ffffff;
  }
}

@layer utilities {
  /* Marquee animation for accreditation ticker */
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }

  /* Word reveal animation clip */
  .word-clip {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
  }
}
```

---

## STEP 5 — REWRITE Hero.tsx COMPLETELY

Replace the entire contents of `components/sections/Hero.tsx` with this:

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// Word-by-word reveal animation
function WordReveal({ text, startDelay = 0.3 }: { text: string; startDelay?: number }) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span>{text}</span>;
  }

  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="word-clip mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.75,
              ease,
              delay: startDelay + i * 0.06,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const rawY = useSpring(scrollY, { stiffness: 80, damping: 30 });
  // Parallax: image moves up slightly as user scrolls
  const imageY = useTransform(rawY, [0, 500], [0, -60]);

  return (
    <section className="relative min-h-screen bg-navy-deep text-white overflow-hidden flex items-center">

      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 20% 50%, #1B3A7A22 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT — Content */}
          <div>
            {/* Eyebrow */}
            <motion.p
              className="text-crimson text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              <span className="inline-block w-8 h-px bg-crimson" />
              Est. 2019 · Jacobabad, Sindh, Pakistan
            </motion.p>

            {/* H1 — Word reveal */}
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.0] tracking-tight text-white mb-6">
              <WordReveal
                text="Welcome to Imam Institute of Nursing & Allied Health Sciences Jacobabad"
                startDelay={0.25}
              />
            </h1>

            {/* Subheading */}
            <motion.p
              className="font-dm text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.1 }}
            >
              Empowering Future Healthcare Professionals Since 2019
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.35 }}
            >
              <Link href="/admissions/apply">
                <motion.span
                  className="inline-block bg-crimson text-white font-semibold text-sm px-8 py-4 rounded cursor-pointer"
                  whileHover={{ scale: 1.03, backgroundColor: "#9B2C1F" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Apply for Admission
                </motion.span>
              </Link>
              <Link href="/programs">
                <motion.span
                  className="inline-block border border-white/40 text-white font-semibold text-sm px-8 py-4 rounded cursor-pointer"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.7)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Explore Programs
                </motion.span>
              </Link>
            </motion.div>

            {/* Credential pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.6 }}
            >
              {[
                { label: "PNMC Registered" },
                { label: "SMBBMU Affiliated" },
                { label: "Govt. Sindh Approved" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 text-xs text-white/80 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson inline-block" />
                  {item.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            className="relative hidden lg:block"
            style={reduced ? {} : { y: imageY }}
            initial={reduced ? false : { opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.5 }}
          >
            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden h-[560px] w-full">
              <Image
                src="/images/campus-group.jpg"
                alt="Imam Institute students at SMBBMU International Nursing Seminar"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 45vw"
                className="object-cover"
              />
              {/* Navy overlay for depth */}
              <div className="absolute inset-0 bg-navy/30" />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5 min-w-[200px]"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.0 }}
            >
              <p className="text-[10px] font-semibold tracking-widest uppercase text-ink-subtle mb-3">
                Campus Snapshot
              </p>
              <div className="space-y-1">
                {[
                  { value: "500+", label: "Students" },
                  { value: "5+",   label: "Years" },
                  { value: "15+",  label: "Faculty" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="font-playfair font-bold text-navy text-lg leading-tight">{s.value}</span>
                    <span className="text-ink-muted text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-crimson/30 rounded-2xl pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
```

---

## STEP 6 — FIX NAV.TSX

Replace the entire contents of `components/layout/Nav.tsx` with this:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "About",      href: "/about" },
  { label: "Programs",   href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty",    href: "/faculty" },
  { label: "Gallery",    href: "/gallery" },
  { label: "Contact",    href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter:  scrolled ? "blur(12px)" : "blur(0px)",
          boxShadow:       scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Crimson bottom line on scroll */}
        {scrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-crimson"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.4 }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/logos/imam-logo.png"
                alt="Imam Institute Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span
                className={`font-dm font-semibold text-sm tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                IMAM INSTITUTE
              </span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-crimson ${
                    scrolled ? "text-ink" : "text-white/85"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923123421447"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-white" strokeWidth={2.5} />
              </a>
              {/* Apply Now CTA */}
              <Link href="/admissions/apply">
                <motion.span
                  className="inline-block bg-crimson text-white text-sm font-semibold px-5 py-2.5 rounded cursor-pointer"
                  whileHover={{ backgroundColor: "#9B2C1F", scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  Apply Now
                </motion.span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded transition-colors ${
                scrolled ? "text-navy" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-navy-deep pt-20 px-6 md:hidden"
            initial={reduced ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduced ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white/85 text-xl font-medium py-3 border-b border-white/10 hover:text-crimson transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/923123421447"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded"
                >
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
                <Link
                  href="/admissions/apply"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-crimson text-white font-semibold py-3 rounded"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## STEP 7 — FIX app/layout.tsx

Make sure Nav is a normal import (no dynamic + ssr:false):

```tsx
import Nav from "@/components/layout/Nav";   // ← plain import, no dynamic()
import Footer from "@/components/layout/Footer";
```

And the body tag must have the font variables:
```tsx
<body className={`${playfair.variable} ${dmSans.variable} font-dm antialiased bg-white text-ink`}>
  <Nav />
  {children}
  <Footer />
</body>
```

---

## STEP 8 — CREATE FadeUp MOTION PRIMITIVE

Create `components/motion/FadeUp.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: FadeUpProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
```

Now wrap the first element of EVERY section with `<FadeUp>` from this file.
Import it at the top of each section file:
```tsx
import FadeUp from "@/components/motion/FadeUp";
```

---

## STEP 9 — CREATE AnimatedCounter

Create `components/motion/AnimatedCounter.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ target, suffix = "", className }: AnimatedCounterProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  useEffect(() => {
    if (inView && !reduced) {
      count.set(target);
    } else if (reduced) {
      setDisplay(target);
    }
  }, [inView, target, count, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}
```

Use this in the Stats section:
```tsx
import AnimatedCounter from "@/components/motion/AnimatedCounter";

// Inside the stats section:
<AnimatedCounter target={500} suffix="+" className="font-playfair text-7xl font-bold text-white" />
```

---

## STEP 10 — VERIFY BUILD

After all fixes:

```bash
npm run build
```

Expected result: clean build, zero TypeScript errors, zero ESLint warnings.

Then:
```bash
npm run dev
```

Open http://localhost:3000 and verify:
- [ ] Hero background is dark navy (#0F2456) — NOT white
- [ ] Hero text is WHITE and VISIBLE
- [ ] Hero headline words animate in one by one on load
- [ ] The campus group photo fills a large right-column card (~560px tall)
- [ ] Floating stat card shows "500+ Students / 5+ Years / 15+ Faculty"
- [ ] Nav is transparent on hero, transitions to white on scroll
- [ ] "Apply Now" button in nav shows full text (not just an icon)
- [ ] FadeUp animations trigger on scroll for all sections below hero
- [ ] No console errors in browser DevTools

If any check fails, read the error and fix it before moving on.

---

## DO NOT

- Do not use `ssr: false` on the Nav dynamic import — it causes build errors
- Do not export `metadata` from any file with `"use client"` at the top
- Do not animate `width`, `height`, `top`, `left` — only `transform` and `opacity`
- Do not use `.to()` on a MotionValue — use `useTransform()` instead
- Do not hardcode any hex color in JSX — use Tailwind tokens from tailwind.config.ts
- Do not use stock images anywhere — only the provided campus photo