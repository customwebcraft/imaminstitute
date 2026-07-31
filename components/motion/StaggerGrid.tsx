"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGrid({ children, className = "" }: StaggerGridProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: StaggerGridProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
