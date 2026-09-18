import { Award, Briefcase, Building2, Coins, FlaskConical, GraduationCap, Hospital, Medal, Monitor, Trophy, TrendingUp, Users } from "lucide-react";
import { whyUs } from "@/lib/data";

const icons = { GraduationCap, Award, Building2, FlaskConical, Hospital, Users, Coins, Medal, Monitor, TrendingUp, Briefcase, Trophy };

export const metadata = { title: "Why Choose Us? | Imam Institute", description: "Discover twelve reasons students choose Imam Institute of Nursing & Allied Health Sciences." };

export default function WhyChooseUsPage() {
  return <section className="bg-off-white"><div className="mx-auto max-w-7xl px-6 py-24 md:px-10"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">The Imam difference</p><h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Why Choose Imam Institute?</h1><p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">A focused nursing education built around academic confidence, clinical readiness, and a supportive student experience.</p><div className="mt-12 grid gap-6 md:grid-cols-3">{whyUs.map((item) => { const Icon = icons[item.icon as keyof typeof icons] ?? Award; return <article key={item.title} className="rounded-[1.5rem] border border-border bg-white p-6 transition card-shadow-hover"><div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-light text-crimson"><Icon size={24} /></div><h2 className="mt-6 text-xl font-semibold text-ink">{item.title}</h2><p className="mt-3 text-sm leading-7 text-ink-muted">{item.desc}</p></article>; })}</div></div></section>;
}
