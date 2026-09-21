"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = Array.from({ length: 10 }, (_, index) => `/images/gallery/gallery-${index + 1}.jpg`);
const announcements = Array.from({ length: 6 }, (_, index) => `/images/announcements/announcement-${index + 1}.jpg`);

export default function GalleryExperience({ mode = "all" }: { mode?: "all" | "carousel" | "media" }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.children[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveSlide(index);
  };

  const moveSlide = (direction: number) => {
    goToSlide((activeSlide + direction + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-6 md:px-10">
      {(mode === "all" || mode === "carousel") && <section className="!py-0" aria-labelledby="photo-gallery-heading">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">A closer look</p>
            <h2 id="photo-gallery-heading" className="mt-3 text-4xl font-semibold text-navy text-display">Life on campus</h2>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/gallery" className="text-sm font-semibold text-crimson transition hover:text-navy">View full gallery <span aria-hidden="true">→</span></Link>
            <div className="hidden gap-2 sm:flex">
            <button type="button" onClick={() => moveSlide(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy transition hover:border-crimson hover:text-crimson" aria-label="Previous gallery image"><ChevronLeft size={18} /></button>
            <button type="button" onClick={() => moveSlide(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy transition hover:border-crimson hover:text-crimson" aria-label="Next gallery image"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
        <div ref={sliderRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryImages.map((src, index) => (
            <div key={src} className="relative min-w-[85%] snap-start overflow-hidden rounded-[1.75rem] bg-navy-light sm:min-w-[48%] lg:min-w-[31%]">
              <div className="relative aspect-[4/3]">
                <Image src={src} alt={`Imam Institute campus gallery image ${index + 1}`} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 85vw" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-2" aria-label="Gallery slides">
          {galleryImages.map((src, index) => (
            <button key={src} type="button" onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-8 bg-crimson" : "w-2 bg-navy/25"}`} aria-label={`Go to gallery image ${index + 1}`} />
          ))}
        </div>
      </section>}

      {(mode === "all" || mode === "media") && <section className="!py-0" aria-labelledby="announcements-heading">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Institute updates</p>
        <h2 id="announcements-heading" className="mt-3 text-4xl font-semibold text-navy text-display">News & announcements</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((src, index) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-navy-light">
              <Image src={src} alt={`Imam Institute announcement ${index + 1}`} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>}

    </div>
  );
}
