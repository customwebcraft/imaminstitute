import Image from "next/image";
import { facultyMembers } from "@/lib/data";

export const metadata = { title: "Chairman's Message | Imam Institute", description: "A message from the leadership of Imam Institute of Nursing & Allied Health Sciences." };

export default function ChairmanMessagePage() {
  const chairman = facultyMembers.find((member) => member.id === "abid-hussain-soomro");
  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Leadership vision</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Chairman&apos;s Message</h1>
        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
          {chairman && <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-navy-light"><Image src={chairman.photo} alt={chairman.name} fill sizes="220px" className="object-cover object-top" /></div>}
          <div className="rounded-[1.75rem] bg-white p-8 shadow-sm md:p-10">
            <p className="text-5xl leading-none text-crimson/30">&ldquo;</p>
            <div className="mt-3 space-y-5 text-base leading-8 text-ink-muted"><p>At Imam Institute, our vision is to make quality nursing education accessible to the youth of Jacobabad and surrounding communities.</p><p>We are committed to developing competent, compassionate healthcare professionals through strong academics, practical clinical training, and professional values. Every student should have the confidence and support to learn, grow, and serve society with excellence.</p><p>Together, we are shaping the next generation of caring nurses who will contribute to a healthier Pakistan.</p></div>
            <div className="mt-8 border-t border-border pt-5"><p className="font-semibold text-navy">Mr. Abid Hussain Soomro</p><p className="text-sm text-ink-muted">Chief Executive Officer</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
