import Image from "next/image";
import { accreditations } from "@/lib/data";

export default function AccreditationBar() {
  const marqueeItems = [...accreditations.filter((item) => item.label !== "Imam Institute Certified"), ...accreditations.filter((item) => item.label !== "Imam Institute Certified")];

  return (
    <section className="border-y border-border bg-white/80 py-5">
      <div className="mx-auto flex max-w-7xl items-center overflow-hidden px-6 md:px-10">
        <div className="flex w-max items-center whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, index) => (
            <div key={`${item.label}-${index}`} className="mr-10 inline-flex shrink-0 items-center gap-3">
                <div className="relative flex h-8 w-24 items-center justify-center overflow-hidden grayscale transition hover:grayscale-0">
                {item.logo ? (
                  <Image src={item.logo} alt={item.label} fill sizes="96px" className="object-contain" />
                ) : (
                  <span className="text-xs font-bold uppercase tracking-wide text-ink">PNMC</span>
                )}
              </div>
              <span className="text-sm font-medium text-navy">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
