import { about } from "@/lib/data";

export const metadata = {
  title: "About | Imam Institute",
  description: "Learn about Imam Institute of Nursing & Allied Health Sciences, a PNMC registered and SMBBMU affiliated institution in Jacobabad.",
};

export default function AboutPage() {
  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">About the Institute</p>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Our Story, Vision & Mission</h1>
          <p className="max-w-3xl text-lg leading-8 text-ink-muted">{about.short}</p>
          <p className="text-base leading-8 text-ink-muted">{about.full}</p>
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
