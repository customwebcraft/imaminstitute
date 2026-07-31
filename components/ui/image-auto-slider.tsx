"use client";

import React from "react";
import Image from "next/image";

const images = [
  { src: "/images/campus-group.jpg", alt: "Students at SMBBMU International Nursing Seminar" },
  { src: "/images/campus-group.jpg", alt: "Campus event" },
  { src: "/images/campus-group.jpg", alt: "Clinical training" },
  { src: "/images/campus-group.jpg", alt: "Lab session" },
  { src: "/images/campus-group.jpg", alt: "Faculty" },
  { src: "/images/campus-group.jpg", alt: "Graduation" },
];

const duplicated = [...images, ...images, ...images];

export function ImageAutoSlider() {
  return (
    <div className="relative w-full overflow-hidden select-none">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--tw-gradient-from) 0%, transparent 100%)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--tw-gradient-from) 0%, transparent 100%)" }}
      />

      <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
        {duplicated.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={320}
              height={320}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
