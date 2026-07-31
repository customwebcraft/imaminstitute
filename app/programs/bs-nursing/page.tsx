import { programs } from "@/lib/data";

export const metadata = {
  title: "BS Nursing | Imam Institute",
  description: "Discover the BS Nursing (Generic) program at Imam Institute, featuring clinical training, accredited faculty, and a 4-year curriculum.",
};

export default function BSNursingPage() {
  const program = programs.find((item) => item.slug === "bs-nursing");

  if (!program) {
    return null;
  }

  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Program Detail</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">{program.name}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">{program.description}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">Program Overview</h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted">{program.description}</p>
          </div>
          <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">Details</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li><span className="font-semibold text-ink">Duration:</span> {program.duration}</li>
              <li><span className="font-semibold text-ink">Accreditation:</span> {program.accreditation}</li>
              <li><span className="font-semibold text-ink">Department:</span> {program.department}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
