import Image from "next/image";
import { galleryItems } from "@/lib/data";

export const metadata = {
  title: "Gallery | Imam Institute",
  description: "Explore campus life, student activities, and clinical training environments at Imam Institute through our photo gallery.",
};

export default function GalleryPage() {
  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Campus Life</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Life at Imam Institute</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">A visual tour of academic, clinical, and student life at the institute.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-[1.75rem] bg-navy-light">
              <div className="relative aspect-[4/5] overflow-hidden transition duration-500 group-hover:scale-[1.03]">
                <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-navy">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
