import Image from "next/image";
import { trustBadges } from "@/lib/data";
import { ShieldCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="bg-navy-deep py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Fully Accredited & Verified</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white text-display">Recognized by Every Major Authority</h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center">
              <div className="absolute right-4 top-4 text-gold opacity-80">
                <ShieldCheck size={20} />
              </div>
              <div className="mx-auto mb-6 h-14 w-14 overflow-hidden">
                <Image src={badge.logo} alt={badge.label} width={64} height={64} className="object-contain" />
              </div>
              <p className="text-sm font-semibold text-white/90">{badge.label}</p>
              <p className="mt-2 text-xs text-white/50">{badge.sublabel}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Proud Education Partner</p>
            <p className="mt-3 text-lg font-semibold text-white">TCF Alumni Pathways</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Scholarships</p>
            <p className="mt-3 text-lg font-semibold text-white">PEEF &amp; Need-Based Merit Scholarships Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
