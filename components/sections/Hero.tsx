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
    <section className="relative min-h-screen bg-navy text-white overflow-hidden flex items-center pt-28 md:pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/campus-group.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/65 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/20" />
      </div>

      <div
        className="hero-orb-drift absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none z-[2]"
        style={{ background: "radial-gradient(circle, rgba(192,57,43,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div
        className="hero-bg-pulse absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full pointer-events-none z-[2]"
        style={{ background: "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div
        className="hero-shimmer-line absolute top-0 bottom-0 w-32 pointer-events-none z-[2]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)" }}
        aria-hidden="true"
      />

      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 20% 50%, rgba(37, 99, 235, 0.14) 0%, transparent 70%)"
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
            <div className="relative h-[560px] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
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
              className="absolute -bottom-6 -left-6 min-w-[220px] rounded-2xl bg-white p-6 shadow-[0_20px_50px_rgba(15,36,86,0.16)]"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}