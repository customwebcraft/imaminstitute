// NO "use client" here — this is a server component
import ApplyForm from "./ApplyForm";

export const metadata = {
  title: "Apply | Imam Institute",
  description: "Submit your admission enquiry for Imam Institute of Nursing & Allied Health Sciences.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-crimson text-xs font-semibold tracking-widest uppercase mb-3">Admissions 2026</p>
          <h1 className="font-playfair text-4xl md:text-5xl text-navy font-bold mb-4">Apply for Admission</h1>
          <p className="text-ink-muted text-lg">Fill in the form below and our admissions team will contact you within 24 hours.</p>
        </div>
        <ApplyForm />
      </div>
    </main>
  );
}