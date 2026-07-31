export const metadata = {
  title: "Faculty | Imam Institute",
  description: "Meet the qualified nursing and allied health faculty guiding students at Imam Institute of Nursing & Allied Health Sciences.",
};

const faculty = [
  { name: "Dr. Amina Khan", title: "Dean of Nursing", department: "Nursing" },
  { name: "Ms. Sara Ali", title: "Senior Lecturer", department: "Nursing" },
  { name: "Mr. Bilal Ahmed", title: "Clinical Instructor", department: "Nursing" },
  { name: "Ms. Nadia Hussain", title: "Lab Coordinator", department: "Nursing" },
];

export default function FacultyPage() {
  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Faculty</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] text-navy text-display">Meet Our Residential Faculty</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">A qualified teaching team with clinical and academic leadership in nursing education.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faculty.map((member) => (
            <div key={member.name} className="rounded-[1.75rem] bg-white p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy">{member.name}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-crimson">{member.title}</p>
              <p className="mt-4 text-sm leading-7 text-ink-muted">Department of {member.department}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
