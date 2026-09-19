"use client";

import Link from "next/link";
import { programs, upcomingPrograms } from "@/lib/data";
import FadeUp from "@/components/motion/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";

const featuredProgram = programs.find((program) => program.featured);
const paramedicalPrograms = programs.filter((program) => !program.featured);

export default function Programs() {
  return (
    <section id="programs" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Academic Programs</p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-navy md:text-5xl">Choose Your Path in Healthcare</h2>
            <div className="h-1 w-12 rounded-full bg-crimson" />
            <p className="max-w-2xl text-base leading-7 text-ink-muted">Start with BS Nursing, build practical skills through one-year paramedical diplomas, or watch for future healthcare pathways.</p>
          </div>
          <Link href="/programs" className="text-sm font-semibold uppercase tracking-[0.18em] text-crimson transition hover:text-crimson-dark">
            View All Programs →
          </Link>
        </div>

        {featuredProgram ? (
          <FadeUp delay={0.1}>
            <div className="mb-10 grid gap-6 rounded-[2rem] border border-border bg-navy-light p-6 md:grid-cols-[35%_65%] md:p-8">
              <div className="rounded-[1.5rem] bg-navy p-8 text-white">
                <p className="text-7xl font-semibold leading-none text-white/10">01</p>
                <h3 className="mt-4 text-3xl font-semibold text-white text-display">{featuredProgram.name}</h3>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-crimson">{featuredProgram.accreditation}</p>
              </div>
              <div className="space-y-5 rounded-[1.5rem] bg-white p-8">
                <p className="text-lg font-semibold text-ink">{featuredProgram.description}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
                  <span className="rounded-full bg-crimson-pale px-3 py-1 text-crimson">Most Enrolled</span>
                  <span>{featuredProgram.duration}</span>
                </div>
                <Link href={`/programs/${featuredProgram.slug}`} className="inline-flex rounded-sm bg-crimson px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-dark">
                  Learn More
                </Link>
              </div>
            </div>
          </FadeUp>
        ) : null}

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-navy">Paramedical Programs · 1 Year Diplomas</h3>
        </div>
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {paramedicalPrograms.map((program) => (
            <StaggerItem key={program.slug} className="rounded-[1.5rem] bg-navy-light p-6 transition card-shadow-hover">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-crimson px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">Admissions Open</span>
                <span className="text-sm font-medium text-ink-muted">{program.department}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy">{program.name}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">{program.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-ink">{program.duration}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <div className="mb-6 mt-14">
          <h3 className="text-2xl font-semibold text-navy">Coming Soon</h3>
        </div>
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {upcomingPrograms.map((program) => (
            <StaggerItem key={program.slug} className="rounded-[1.5rem] border border-border bg-white p-6 transition card-shadow-hover">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">Coming Soon</span>
                <span className="text-sm font-medium text-ink-muted">{program.department}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy">{program.name}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">{program.description}</p>
              <p className="mt-6 text-sm font-medium text-ink">{program.duration}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
