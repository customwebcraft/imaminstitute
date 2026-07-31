"use client";

import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import { newsItems } from "@/lib/data";

const badgeClasses: Record<string, string> = {
  Admissions: "bg-crimson text-white",
  Events: "bg-navy text-white",
  Academic: "bg-gold text-ink",
};

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
          {newsItems.map((item) => (
            <FadeUp key={item.title}>
              <div className="rounded-[1.75rem] border border-border bg-white p-6 transition card-shadow-hover">
                <div className="mb-6 h-44 rounded-[1.5rem] bg-navy-light p-6 text-4xl text-navy flex items-end">
                  {item.icon}
                </div>
                <div className="flex items-center justify-between gap-3 text-sm text-ink-muted">
                  <span>{item.date}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${badgeClasses[item.category]}`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{item.description}</p>
                <Link href={item.href} className="mt-6 inline-flex text-sm font-semibold text-crimson transition hover:text-crimson-dark">
                  Read More →
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
