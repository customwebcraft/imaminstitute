"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, MessageCircle, Phone, Mail, Clock } from "lucide-react";

const navLinks = [
  { label: "About",      href: "/about" },
  { label: "Programs",   href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty",    href: "/faculty" },
  { label: "Gallery",    href: "/gallery" },
  { label: "Contact",    href: "/contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="bg-navy-deep text-white text-xs py-2 px-6 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-10">
            <span className="flex items-center gap-2">
              <Phone size={12} className="opacity-70" />
              0312 3421447
            </span>
            <span className="flex items-center gap-2">
              <Mail size={12} className="opacity-70" />
              info@imaminstitute.edu.pk
            </span>
            <span className="flex items-center gap-2">
              <Clock size={12} className="opacity-70" />
              8:00 AM – 4:00 PM
            </span>
          </div>
        </div>

        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/logos/imam-logo.png"
                alt="Imam Institute Logo"
                width={64}
                height={64}
                className="object-contain flex-shrink-0"
              />
              <div className="hidden lg:flex flex-col justify-center leading-none">
                <span
                  className="font-bold tracking-wide"
                  style={{
                    fontSize: "15px",
                    color: "#1B3A7A",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    letterSpacing: "0.04em",
                    lineHeight: 1.1,
                  }}
                >
                  IMAM INSTITUTE
                </span>

                <div
                  style={{
                    height: "1.5px",
                    backgroundColor: "#C0392B",
                    marginTop: "3px",
                    marginBottom: "3px",
                    width: "100%",
                  }}
                />

                <span
                  style={{
                    fontSize: "8.5px",
                    color: "#1B3A7A",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.06em",
                    lineHeight: 1.4,
                  }}
                >
                  OF NURSING AND ALLIED HEALTH SCIENCES
                </span>

                <span
                  style={{
                    fontSize: "9px",
                    color: "#C0392B",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    marginTop: "1px",
                    lineHeight: 1,
                  }}
                >
                  JACOBABAD
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink hover:text-navy transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/923123421447"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-white" strokeWidth={2.5} />
              </a>
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

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-navy hover:text-crimson transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        </header>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden border-t border-gray-100"
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
                    className="block text-ink text-xl font-medium py-3 border-b border-gray-100 hover:text-crimson transition-colors"
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