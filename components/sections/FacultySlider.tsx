"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { facultyMembers } from "@/lib/data";
import FadeUp from "@/components/motion/FadeUp";

const sliderMembers = facultyMembers.filter((member) => member.quote);

export default function FacultySlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setIndex((current) => (current - 1 + sliderMembers.length) % sliderMembers.length);
  };

  const next = () => {
    setDirection(1);
    setIndex((current) => (current + 1) % sliderMembers.length);
  };

  const member = sliderMembers[index];

  return (
    <section className="py-24 bg-navy-deep text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-crimson text-xs font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                <span className="inline-block w-6 h-px bg-crimson" />
                Our People
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">Meet Our Faculty</h2>
            </div>
            <Link href="/faculty" className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
              View all faculty <span className="text-crimson">→</span>
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={member.id}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({ x: direction * 60, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: number) => ({ x: direction * -60, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-2xl overflow-hidden"
              >
                <Image src={member.photo} alt={member.name} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={member.id + "-text"}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({ y: direction * 24, opacity: 0 }),
                  center: { y: 0, opacity: 1 },
                  exit: (direction: number) => ({ y: direction * -24, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-playfair text-9xl text-white/10 leading-none select-none block -mb-8">“</span>
                <p className="font-playfair text-2xl md:text-3xl italic text-white/85 leading-relaxed mb-8">{member.quote}</p>
                <div>
                  <p className="font-semibold text-white text-lg">{member.name}</p>
                  <p className="text-crimson text-sm font-medium mt-1">{member.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4 mt-10">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-colors" aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-colors" aria-label="Next">
                <ChevronRight size={20} />
              </button>
              <div className="flex gap-2 ml-2">
                {sliderMembers.map((_, itemIndex) => (
                  <button
                    key={itemIndex}
                    onClick={() => {
                      setDirection(itemIndex > index ? 1 : -1);
                      setIndex(itemIndex);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${itemIndex === index ? "bg-crimson w-6" : "bg-white/30"}`}
                    aria-label={`Go to slide ${itemIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
