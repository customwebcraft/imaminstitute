import FadeUp from "@/components/motion/FadeUp";
import { about } from "@/lib/data";

export default function Vision() {
  return (
    <section className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-10">
        <FadeUp delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-mid p-10">
            <span className="pointer-events-none absolute right-6 top-6 text-[8rem] font-semibold uppercase tracking-[-0.05em] text-white/5">“</span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Vision</p>
            <p className="mt-6 text-2xl leading-[1.45] text-white/85 text-display italic">{about.vision}</p>
            <div className="mt-8 h-1 w-24 bg-gold" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-mid p-10">
            <span className="pointer-events-none absolute right-6 top-6 text-[8rem] font-semibold uppercase tracking-[-0.05em] text-white/5">“</span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Mission</p>
            <p className="mt-6 text-2xl leading-[1.45] text-white/85 text-display italic">{about.mission}</p>
            <div className="mt-8 h-1 w-24 bg-gold" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
