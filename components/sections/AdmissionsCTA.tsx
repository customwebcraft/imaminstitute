import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

export default function AdmissionsCTA() {
  return (
    <section className="bg-crimson text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.5fr_1fr] md:px-10">
        <FadeUp>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-white/80">Admissions 2026 — Now Open</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-display">Ready to Begin Your Healthcare Career?</h2>
            <p className="max-w-xl text-base leading-7 text-white/75">Limited seats. Strong demand. Apply before the deadline.</p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <Link href="/admissions/apply" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-4 text-sm font-semibold text-crimson transition hover:bg-white/90">
              Apply for Admission
            </Link>
            <a href="https://wa.me/923123421447" className="inline-flex items-center justify-center rounded-sm border border-white px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
              Chat with Admissions
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
