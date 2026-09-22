import Image from "next/image";
import Link from "next/link";
import { Facebook, Phone, AtSign, MapPin, Music2 } from "lucide-react";
import { accreditations, institute } from "@/lib/data";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/chairman-message", label: "Chairman's Message" },
  { href: "/why-choose-us", label: "Why Choose Us?" },
  { href: "/programs", label: "Programs" },
  { href: "/faculty", label: "Faculty" },
  { href: "/admissions", label: "Admissions" },
  { href: "/admissions/2026-27", label: "Admissions 2026–27" },
  { href: "/clinical-affiliations", label: "Clinical Affiliations" },
  { href: "/campus-life", label: "Campus Life" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/news", label: "News & Events" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/approvals", label: "Approvals" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/downloads", label: "Downloads" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const programs = [
  { href: "/programs/bs-nursing", label: "BS Nursing" },
  { href: "/programs/cmw", label: "CMW (Coming Soon)" },
  { href: "/programs/lhv", label: "LHV (Coming Soon)" },
  { href: "/programs/cna", label: "CNA (Coming Soon)" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1A3D] text-white">
      <section className="border-y border-border bg-white py-5 text-navy">
        <div className="mx-auto flex max-w-7xl items-center px-6 md:px-10">
          <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {accreditations.map((item) => (
              <div key={item.label} className="inline-flex items-center gap-3">
                <div className="relative flex h-9 w-20 items-center justify-center overflow-hidden grayscale transition hover:grayscale-0">
                  {item.logo ? (
                    <Image src={item.logo} alt={item.label} fill sizes="80px" className="object-contain" />
                  ) : (
                    <span className="text-xs font-bold uppercase tracking-wide">PNMC</span>
                  )}
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="space-y-5 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
              <Image src="/logos/imam-logo.png" alt="Imam Institute logo" fill sizes="48px" className="object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{institute.shortName}</p>
              <p className="mt-2 text-sm text-white/70">{institute.tagline}</p>
            </div>
          </div>
          <div className="grid gap-3 text-sm text-white/70">
            <a href={`tel:${institute.phone}`} className="inline-flex items-center gap-2 hover:text-white"><Phone size={16} /> {institute.phone}</a>
            <a href={`mailto:${institute.email}`} className="inline-flex items-center gap-2 hover:text-white"><AtSign size={16} /> {institute.email}</a>
            <a href={institute.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Facebook size={16} /> Facebook</a>
            <div className="inline-flex items-start gap-2 text-white/70"><MapPin size={16} /> {institute.address}</div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a href={institute.facebook} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-white"><Facebook size={20} /></a>
            <a href={institute.tiktok} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-white" aria-label="TikTok"><Music2 size={20} /></a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Programs</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {programs.map((program) => (
              <li key={program.href}>
                <Link href={program.href} className="transition hover:text-white">
                  {program.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-sm text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 Imam Institute of Nursing & Allied Health Sciences. All rights reserved.</p>
          <p>PNMC · SMBBMU · SMF Karachi · Govt. of Sindh Approved</p>
        </div>
      </div>
    </footer>
  );
}
