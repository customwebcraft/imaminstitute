import Image from "next/image";
import { MapPin, Phone, AtSign } from "lucide-react";
import { institute } from "@/lib/data";

export const metadata = {
  title: "Contact | Imam Institute",
  description: "Contact Imam Institute of Nursing & Allied Health Sciences for admissions, inquiries, and campus information.",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="mb-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Contact</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Get in Touch</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">Reach out to our admissions office and visit the institute in Jacobabad.</p>

            <div className="mt-10 space-y-5 rounded-[1.75rem] border border-border bg-off-white p-8">
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-crimson" />
                <div>
                  <p className="font-semibold text-navy">Phone</p>
                  <p className="text-sm text-ink-muted">{institute.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AtSign size={20} className="text-crimson" />
                <div>
                  <p className="font-semibold text-navy">Email</p>
                  <p className="text-sm text-ink-muted">{institute.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-crimson" />
                <div>
                  <p className="font-semibold text-navy">Location</p>
                  <p className="text-sm text-ink-muted">{institute.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] overflow-hidden border border-border bg-navy-light">
            <iframe
              title="Imam Institute location"
              src="https://maps.app.goo.gl/R4bGzRdP163MaZs26"
              className="h-96 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
