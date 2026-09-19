import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { institute } from "@/lib/data";

export const metadata = {
  title: "Admission Information | Imam Institute",
  description: "Review BS Nursing eligibility, required documents, and admission enquiry details for Imam Institute.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-off-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Admissions 2026–27</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Admission Information</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-muted">Review the eligibility criteria and prepare the required documents for the BS Nursing (Generic) – 4-Year Degree Program.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-[1.75rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Eligibility Criteria</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-ink-muted">
              <li><strong>Academic Qualification:</strong> F.Sc. (Pre-Medical) or equivalent qualification from a recognized board/institution.</li>
              <li><strong>Minimum Marks:</strong> At least 50% marks in F.Sc. (Pre-Medical) or equivalent.</li>
              <li><strong>Required Subjects:</strong> Biology must have been studied as a subject.</li>
              <li><strong>Age Limit:</strong> 14 to 35 years at the time of admission.</li>
              <li><strong>Gender:</strong> Male and Female candidates are eligible to apply.</li>
              <li><strong>Merit:</strong> Admission will be offered on merit, subject to applicable institutional, university, and PNMC requirements.</li>
            </ul>
          </section>

          <section className="rounded-[1.75rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Required Documents</h2>
            <p className="mt-3 text-sm leading-7 text-ink-muted">Applicants may be required to submit:</p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-ink-muted">
              <li>Matriculation Certificate &amp; Marks Sheet</li>
              <li>F.Sc. / HSSC Certificate &amp; Marks Sheet</li>
              <li>CNIC / B-Form</li>
              <li>Recent Passport-Size Photographs</li>
              <li>Domicile / PRC, where applicable</li>
              <li>IBCC Equivalence Certificate, where applicable</li>
              <li>Other documents required by the Institute or affiliating university</li>
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-[1.75rem] bg-navy p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-2xl font-semibold">Admission Enquiries</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">For any admission-related enquiries, contact us on WhatsApp and visit the Admission Office on campus with your documents.</p>
          </div>
          <a href={`https://wa.me/${institute.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20bd5a] md:mt-0">
            <MessageCircle size={18} /> Contact on WhatsApp
          </a>
        </section>

        <Link href="/admissions" className="mt-8 inline-flex text-sm font-semibold text-crimson transition hover:text-crimson-dark">← Back to admissions</Link>
      </div>
    </main>
  );
}