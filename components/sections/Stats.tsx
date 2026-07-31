"use client";

import { AnimatedStat } from "@/components/ui/animated-stat";

export default function Stats() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:gap-6 md:px-10 md:py-16 lg:grid-cols-4">
        <AnimatedStat value={500} suffix="+" label="Students Enrolled" delay={0} />
        <AnimatedStat value={15} suffix="+" label="Qualified Faculty" delay={0.1} />
        <AnimatedStat value={2019} label="Year Established" delay={0.2} />
        <AnimatedStat value={5} suffix="+" label="Programs Offered" delay={0.3} />
      </div>
    </section>
  );
}
