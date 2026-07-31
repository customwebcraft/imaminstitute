import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import { about, facultyMembers } from "@/lib/data";

export const metadata = {
  title: "About | Imam Institute",
  description: "Learn about Imam Institute of Nursing & Allied Health Sciences, a PNMC registered and SMBBMU affiliated institution in Jacobabad.",
};

export default function AboutPage() {
  const leaders = facultyMembers.filter((member) => member.message);

  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">About the Institute</p>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Our Story, Vision & Mission</h1>
          <p className="max-w-3xl text-lg leading-8 text-ink-muted">{about.short}</p>
          <p className="text-base leading-8 text-ink-muted">{about.full}</p>
          <section className="py-24 bg-off-white">
            <div className="mx-auto max-w-6xl px-0 md:px-0">
              <FadeUp>
                <p className="text-crimson text-xs font-semibold tracking-[0.2em] uppercase mb-3">Leadership Messages</p>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-16">A Word from Our Leaders</h2>
              </FadeUp>

              <div className="space-y-16">
                {leaders.map((leader, index) => (
                  <FadeUp key={leader.id} delay={index * 0.15}>
                    <div className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start ${index % 2 === 0 ? "" : "md:grid-cols-[1fr_200px]"}`}>
                      <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                        <div className="relative w-48 h-56 md:w-full md:h-64 rounded-2xl overflow-hidden mx-auto md:mx-0">
                          <Image src={leader.photo} alt={leader.name} fill className="object-cover object-top" sizes="200px" />
                        </div>
                      </div>

                      <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                        <p className="text-crimson text-xs font-semibold tracking-widest uppercase mb-2">Message from the {leader.role}</p>
                        <h3 className="font-playfair text-2xl font-bold text-navy mb-6">{leader.name}</h3>
                        <span className="font-playfair text-6xl text-navy/[0.08] leading-none select-none">"</span>
                        <div className="space-y-4 -mt-4">
                          {leader.message!.split("\n\n").map((para, paragraphIndex) => (
                            <p key={paragraphIndex} className="text-ink-muted leading-relaxed">{para}</p>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="font-semibold text-navy">{leader.name}</p>
                          <p className="text-ink-muted text-sm">{leader.role}</p>
                          <p className="text-ink-subtle text-sm">Imam Institute of Nursing & Allied Health Sciences</p>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Vision</p>
              <p className="mt-4 text-lg leading-8 text-ink">{about.vision}</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Mission</p>
              <p className="mt-4 text-lg leading-8 text-ink">{about.mission}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
