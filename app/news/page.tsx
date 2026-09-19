import Image from "next/image";

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
          {announcements.map((item) => (
            <article key={item.image} className="rounded-[1.75rem] border border-border bg-navy-light p-6 transition hover:border-crimson/30 hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-white">
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="mt-6 flex items-center justify-between gap-3 text-sm text-ink-muted">
                <span>{item.date}</span>
                <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">{item.category}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
