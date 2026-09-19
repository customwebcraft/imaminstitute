"use client";

import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";

const announcements = [
  {
    image: "/images/announcements/announcement-6.jpg",
    date: "Admissions Open",
    category: "Featured",
    title: "Admissions Highlighted for 2026",
    description: "Applications are open for students ready to begin a career in nursing and healthcare.",
  },
  {
    image: "/images/announcements/announcement-1.jpg",
    date: "Student Welcome",
    category: "Orientation",
    title: "Welcome to the New BS Nursing Batch",
    description: "Imam Institute welcomes new BS Nursing students with an Orientation Day and White Coat Ceremony.",
  },
  {
    image: "/images/announcements/announcement-2.jpg",
    date: "Career Opportunity",
    category: "Hiring",
    title: "Principal Position Open",
    description: "Imam Institute is seeking a qualified male or female Principal with an MSN and relevant professional experience.",
  },
  {
    image: "/images/announcements/announcement-3.jpg",
    date: "Admissions Update",
    category: "Entry Test",
    title: "BS Nursing Entry Test",
    description: "Applicants and parents are invited to the BS Nursing Generic entry test at Imam Institute.",
  },
  {
    image: "/images/announcements/announcement-4.jpg",
    date: "Admissions Open",
    category: "Paramedical",
    title: "Free Admissions at Imam Paramedical Institute",
    description: "Explore nationally recognized paramedical certification programs, including technician and healthcare specializations.",
  },
  {
    image: "/images/announcements/announcement-5.jpg",
    date: "Research & Innovation",
    category: "Research 2026",
    title: "Participating in Research Program 2026",
    description: "Imam Institute is empowering future healthcare professionals through research and innovation.",
  },
];

export default function News() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Latest Updates</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-navy text-display">News & Announcements</h2>
          </div>
          <Link href="/news" className="text-sm font-semibold uppercase tracking-[0.18em] text-crimson transition hover:text-crimson-dark">
            All News →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {announcements.map((item) => (
            <FadeUp key={item.image}>
              <Link href="/news" className="block rounded-[1.75rem] border border-border bg-white p-6 transition card-shadow-hover">
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-navy-light">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="flex items-center justify-between gap-3 text-sm text-ink-muted">
                  <span>{item.date}</span>
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{item.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-crimson transition hover:text-crimson-dark">
                  View News & Events →
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
