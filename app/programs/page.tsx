import Link from "next/link";
import { diplomaPrograms, pharmacyPrograms, postBasicSpecializations, programs, upcomingPrograms, vocationalPrograms } from "@/lib/data";

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
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">Explore nursing, pharmacy, post-basic specializations, paramedical diplomas, and career-focused vocational training at Imam Institute and Al Mehran Vocational Training Institute.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-navy">BS Nursing</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programs.filter((program) => program.featured).map((program) => (
            <div key={program.slug} className="rounded-[1.75rem] border border-crimson/20 bg-crimson-pale p-8 md:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-2xl font-semibold text-navy">{program.name}</span>
                <span className="rounded-full bg-crimson px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">Admissions Open</span>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-muted">{program.description}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-muted">
                <span>{program.duration} · {program.accreditation}</span>
                <Link href={`/programs/${program.slug}`} className="font-semibold text-crimson transition hover:text-crimson-dark">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-14 text-2xl font-semibold text-navy">Paramedical Programs · 1 Year Diplomas</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[...programs.filter((program) => !program.featured), ...diplomaPrograms.map((program) => ({ ...program, department: "Paramedical Sciences", accreditation: "Career-focused training" }))].map((program) => (
            <div key={program.slug} className="rounded-[1.75rem] border border-border bg-navy-light p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xl font-semibold text-navy">{program.name}</span>
                <span className="rounded-full bg-crimson px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">Admissions Open</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{program.description}</p>
              <div className="mt-5 flex items-center justify-between gap-4 text-sm text-ink-muted">
                <span>{program.duration}</span>
                <Link href="/admissions/apply" className="text-crimson font-semibold transition hover:text-crimson-dark">Apply Now →</Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-14 text-2xl font-semibold text-navy">Post Basic Specialization</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {postBasicSpecializations.map((program) => (
            <div key={program.slug} className="rounded-[1.75rem] border border-crimson/20 bg-crimson-pale p-8">
              <span className="rounded-full bg-crimson px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">Advanced Nursing</span>
              <h3 className="mt-5 text-xl font-semibold text-navy">{program.name}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{program.description}</p>
              <div className="mt-5 space-y-2 text-sm text-ink-muted">
                <p><span className="font-semibold text-ink">Duration:</span> {program.duration}</p>
                <p><span className="font-semibold text-ink">Eligibility:</span> {program.eligibility}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-14 text-2xl font-semibold text-navy">Pharmacy</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {pharmacyPrograms.map((program) => (
            <div key={program.slug} className="rounded-[1.75rem] border border-border bg-navy-light p-8">
              <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">{program.category}</span>
              <h3 className="mt-5 text-xl font-semibold text-navy">{program.name}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{program.description}</p>
              <div className="mt-5 space-y-2 text-sm text-ink-muted">
                <p><span className="font-semibold text-ink">Duration:</span> {program.duration}</p>
                <p><span className="font-semibold text-ink">Eligibility:</span> {program.eligibility}</p>
                {program.requirements.map((requirement) => <p key={requirement}>• {requirement}</p>)}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-14 text-2xl font-semibold text-navy">Al Mehran Vocational Training Institute</h2>
        <p className="mb-6 max-w-3xl text-sm leading-7 text-ink-muted">A vocational and skill-training platform focused on practical, technical, and professional skills that improve employability and support successful careers.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vocationalPrograms.map((program) => (
            <div key={program.name} className="rounded-[1.5rem] border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-navy">{program.name}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">{program.description}</p>
              <div className="mt-5 space-y-1 text-sm text-ink-muted">
                <p><span className="font-semibold text-ink">Duration:</span> {program.duration}</p>
                <p><span className="font-semibold text-ink">Eligibility:</span> {program.eligibility}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-14 text-2xl font-semibold text-navy">Coming Soon</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {upcomingPrograms.map((program) => (
            <div key={program.slug} className="rounded-[1.75rem] border border-border bg-white p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xl font-semibold text-navy">{program.name}</span>
                <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">Coming Soon</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{program.description}</p>
              <p className="mt-5 text-sm text-ink-muted">{program.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
