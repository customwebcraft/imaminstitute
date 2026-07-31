import Link from "next/link";
import { newsItems } from "@/lib/data";

export const metadata = {
  title: "News | Imam Institute",
  description: "Stay current with news and announcements from Imam Institute of Nursing & Allied Health Sciences.",
};

export default function NewsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Latest Updates</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">News & Announcements</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">Read the latest institute announcements and academic updates.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-[1.75rem] border border-border bg-navy-light p-6 transition hover:border-crimson/30 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">{item.date}</p>
              <h2 className="mt-3 text-2xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{item.description}</p>
              <p className="mt-6 text-sm font-semibold text-crimson">Read More →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
