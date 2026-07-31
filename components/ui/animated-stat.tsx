"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function AnimatedStat({ value, suffix = "", label, delay = 0 }: AnimatedStatProps) {
  const reduced = useReducedMotion();
  const { count, ref } = useAnimatedCounter(value, 2200);

  return (
    <motion.div
      ref={ref as any}
      className="flex flex-col items-center rounded-2xl border border-white/10 bg-navy/60 p-8 text-center"
      initial={reduced ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <motion.div
        className="mb-6 h-[3px] rounded-full bg-crimson"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: delay + 0.2 }}
        style={{ width: "40px", transformOrigin: "left" }}
      />

      <span className="mb-3 font-playfair text-6xl font-bold leading-none text-white tabular-nums md:text-7xl">
        {reduced ? value : count}
        {suffix}
      </span>

      <span className="font-dm text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
        {label}
      </span>
    </motion.div>
  );
}
