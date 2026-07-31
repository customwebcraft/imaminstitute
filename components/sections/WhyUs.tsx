"use client";

import { Award, BadgeCheck, Banknote, Building2, Briefcase, Coins, FlaskConical, GraduationCap, Hospital, Medal, Monitor, Trophy, TrendingUp, Users } from "lucide-react";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { whyUs } from "@/lib/data";

const iconMap = {
  GraduationCap,
  Award,
  Building2,
  FlaskConical,
  Hospital,
  Users,
  Coins,
  Medal,
  Monitor,
  TrendingUp,
  Briefcase,
};

export default function WhyUs() {
  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Why Students Choose Us</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-navy md:text-5xl">Why Choose Imam Institute?</h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-crimson" />
        </div>

        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {whyUs.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] ?? Award;
            return (
              <StaggerItem key={item.title} className="rounded-[1.5rem] border border-border bg-white p-6 transition card-shadow-hover">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-light text-crimson">
                  <IconComponent size={24} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{item.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
