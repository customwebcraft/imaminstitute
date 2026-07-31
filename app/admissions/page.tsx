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
        <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">Admissions for BS Nursing 2026 are open. Review eligibility, required documents, and the application process before submitting your enquiry.</p>

        <div className="mt-10 grid gap-8 rounded-[2rem] border border-border bg-off-white p-8">
          <div>
            <h2 className="text-xl font-semibold text-navy">Eligibility</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-ink-muted">
              <li>Intermediate (Pre-Medical) or equivalent with minimum passing grades.</li>
              <li>Age requirement as per PNMC regulations.</li>
              <li>Strong interest in nursing and healthcare service.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-navy">Required Documents</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-ink-muted">
              <li>Matriculation and Intermediate certificates.</li>
              <li>Character certificate from school or college.</li>
              <li>Recent passport-size photographs.</li>
              <li>CNIC / B-Form copy.</li>
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
