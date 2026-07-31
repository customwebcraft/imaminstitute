"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ value, suffix = "", className }: AnimatedCounterProps) {
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
      count.set(value);
    } else if (reduced) {
      setDisplay(value);
    }
  }, [inView, value, count, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}