import Link from "next/link";
import { programs } from "@/lib/data";

export const metadata = {
  title: "Programs | Imam Institute",
  description: "Explore the academic programs at Imam Institute of Nursing & Allied Health Sciences, including BS Nursing and upcoming allied health certifications.",
};

export default function ProgramsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Academic Programs</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Programs at Imam Institute</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">Browse our flagship BS Nursing program and the allied health pathways launching soon.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <div key={program.slug} className="rounded-[1.75rem] border border-border bg-navy-light p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xl font-semibold text-navy">{program.name}</span>
                <span className="rounded-full bg-crimson px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">{program.status === "active" ? "Active" : "Coming Soon"}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{program.description}</p>
              <div className="mt-5 flex items-center justify-between gap-4 text-sm text-ink-muted">
                <span>{program.duration}</span>
                {program.status === "active" ? (
                  <Link href={`/programs/${program.slug}`} className="text-crimson font-semibold transition hover:text-crimson-dark">
                    Learn More →
                  </Link>
                ) : (
                  <span className="text-ink-muted">Notify Me</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
