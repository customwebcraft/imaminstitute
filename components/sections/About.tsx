import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import { about, accreditations } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-off-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[55%_45%] md:px-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">About the Institute</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-navy md:text-5xl">Shaping Compassionate Nurses Since 2019</h2>
          <div className="h-1 w-12 rounded-full bg-crimson" />
          <FadeUp delay={0.2}>
            <p className="text-base leading-7 text-ink-muted">{about.full.split(". ")[0] + "."}</p>
            <p className="mt-4 text-base leading-7 text-ink-muted">{about.full.split(". ").slice(1).join(". ")}</p>
            <Link href="/about" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-crimson transition hover:text-crimson-dark">
              Read Our Full Story →
            </Link>
          </FadeUp>

          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {accreditations.slice(0, 3).map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-border">
                <div className="relative h-12 w-12 overflow-hidden">
                  <Image src={item.logo} alt={item.label} fill sizes="48px" className="object-contain" />
                </div>
                <p className="text-sm font-medium text-ink">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <FadeUp delay={0.3} className="rounded-[2rem] bg-navy-deep p-8 text-white shadow-[0_30px_70px_rgba(15,36,86,0.17)]">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Vision</p>
              <p className="mt-4 text-lg italic leading-8 text-white/85">{about.vision}</p>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Mission</p>
              <p className="mt-4 text-sm leading-7 text-white/75">{about.mission}</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
