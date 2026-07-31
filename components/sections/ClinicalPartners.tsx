"use client";

import { MapPin } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { hospitals } from "@/lib/data";

export default function ClinicalPartners() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Clinical Training</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-navy text-display">Learn Where Real Care Happens</h2>
          <p className="mt-4 text-base leading-7 text-ink-muted">Our students rotate through three major hospitals from their first semester — not just in their final year.</p>
        </div>

        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {hospitals.map((hospital) => (
            <StaggerItem key={hospital.number} className="group rounded-[2rem] border border-border bg-white p-8 transition card-shadow-hover hover:border-navy/30">
              <div className="relative overflow-hidden rounded-3xl bg-navy-light p-6">
                <span className="text-5xl font-semibold text-navy/10">{hospital.number}</span>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="rounded-full bg-crimson px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">Hospital {hospital.number}</span>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
                  <MapPin size={16} /> {hospital.location}
                </div>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-navy">{hospital.name}</h3>
              {hospital.fullName ? <p className="mt-1 text-sm text-ink-muted">{hospital.fullName}</p> : null}
              <p className="mt-5 text-sm leading-7 text-ink-muted">{hospital.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
