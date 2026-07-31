"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-border/70" : "border-transparent"
        }`}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
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