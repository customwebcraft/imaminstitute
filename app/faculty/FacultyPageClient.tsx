"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { facultyMembers, type FacultyMember } from "@/lib/data";

type Tab = "leadership" | "faculty" | "administration";

const tabs: { id: Tab; label: string }[] = [
  { id: "leadership", label: "Leadership" },
  { id: "faculty", label: "Faculty" },
  { id: "administration", label: "Administration" },
];

export default function FacultyPageClient() {
  const [activeTab, setActiveTab] = useState<Tab>("leadership");
  const [selected, setSelected] = useState<FacultyMember | null>(null);

  const filtered = facultyMembers.filter((member) => member.department === activeTab);

  return (
    <main className="min-h-screen bg-off-white">
      <div className="bg-navy-deep text-white py-24 px-6 text-center">
        <p className="text-crimson text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our People</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          The dedicated professionals shaping the future of nursing education at Imam Institute.
        </p>
      </div>

      <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-6 flex gap-1 py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 text-sm font-semibold rounded-lg transition-colors ${
                activeTab === tab.id ? "text-navy bg-navy-light" : "text-ink-muted hover:text-navy hover:bg-navy-light/50"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelected(member)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="relative h-64 bg-navy-light">
                  <Image src={member.photo} alt={member.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <p className="text-crimson text-[10px] font-semibold tracking-widest uppercase mb-1">{member.role}</p>
                  <h3 className="font-playfair text-xl font-bold text-navy">{member.name}</h3>
                  {member.quote ? <p className="text-ink-muted text-sm mt-2 leading-relaxed italic line-clamp-2">"{member.quote}"</p> : null}
                  {member.message ? <span className="inline-block mt-3 text-xs font-medium text-navy hover:text-crimson transition-colors">Read message →</span> : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected ? (
          <>
            <motion.div className="fixed inset-0 bg-black/50 z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} />
            <motion.div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white z-50 overflow-y-auto shadow-2xl" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 35 }}>
              <div className="relative h-72 bg-navy-deep">
                <Image src={selected.photo} alt={selected.name} fill className="object-cover object-top opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-9 h-9 bg-white/15 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors text-xl">×</button>
                <div className="absolute bottom-6 left-6">
                  <p className="text-crimson text-xs font-semibold tracking-widest uppercase mb-1">{selected.role}</p>
                  <h2 className="font-playfair text-3xl font-bold text-white">{selected.name}</h2>
                </div>
              </div>

              <div className="p-8">
                {selected.message ? (
                  <>
                    <p className="text-crimson text-xs font-semibold tracking-widest uppercase mb-4">Message from the {selected.role}</p>
                    <div className="space-y-4">
                      {selected.message.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-ink-muted leading-relaxed text-[15px]">{paragraph}</p>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-ink-muted italic">"{selected.quote}"</p>
                )}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
