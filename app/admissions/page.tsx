import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Admissions | Imam Institute",
  description: "Learn the admissions process, eligibility, required documents, and deadlines for Imam Institute of Nursing & Allied Health Sciences.",
};

export default function AdmissionsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Admissions</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Apply to Imam Institute</h1>
        <div className="mt-8 grid gap-6 overflow-hidden rounded-[1.75rem] border border-crimson/20 bg-crimson-pale md:grid-cols-[1.1fr_0.9fr] md:items-center"><div className="p-7 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">Admissions highlighted</p><h2 className="mt-3 text-3xl font-semibold text-navy">Applications are open</h2><p className="mt-3 text-base leading-7 text-ink-muted">Admissions for BS Nursing 2026 are open. Review eligibility, required documents, and the application process before submitting your enquiry.</p></div><div className="relative aspect-[16/10] md:aspect-auto md:h-full"><Image src="/images/announcements/announcement-6.jpg" alt="Admissions announcement" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" /></div></div>

        <div className="mt-10 grid gap-8 rounded-[2rem] border border-border bg-off-white p-8">
          <div>
            <h2 className="text-xl font-semibold text-navy">Eligibility</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-ink-muted">
              <li>F.Sc. (Pre-Medical) or equivalent qualification from a recognized board/institution.</li>
              <li>At least 50% marks in F.Sc. (Pre-Medical) or equivalent.</li>
              <li>Biology must have been studied as a subject.</li>
              <li>Age limit: 14 to 35 years at the time of admission.</li>
              <li>Male and Female candidates are eligible to apply.</li>
              <li>Admission will be offered on merit, subject to institutional, university, and PNMC requirements.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-navy">Required Documents</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-ink-muted">
              <li>Matriculation Certificate & Marks Sheet</li>
              <li>F.Sc. / HSSC Certificate & Marks Sheet</li>
              <li>CNIC / B-Form</li>
              <li>Recent Passport-Size Photographs</li>
              <li>Domicile / PRC, where applicable</li>
              <li>IBCC Equivalence Certificate, where applicable</li>
              <li>Other documents required by the Institute or affiliating university</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-navy">How to Apply</h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted">Complete the enquiry form and our admissions team will contact you with the next steps for the BS Nursing program.</p>
            <Link href="/admissions/apply" className="mt-6 inline-flex rounded-sm bg-crimson px-6 py-3 text-sm font-semibold text-white transition hover:bg-crimson-dark">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
