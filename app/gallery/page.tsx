import Image from "next/image";
import GalleryExperience from "@/components/gallery/GalleryExperience";

const galleryImages = Array.from({ length: 16 }, (_, index) => `/images/gallery/gallery-${index + 1}.jpg`);

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-navy-light">
              <Image
                src={src}
                alt={`Imam Institute campus gallery image ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        <div className="mt-24">
          <GalleryExperience mode="media" />
        </div>
      </div>
    </section>
  );
}
