export const institute = {
  name: "Imam Institute of Nursing & Allied Health Sciences",
  shortName: "Imam Institute",
  abbreviation: "IINAHS",
  tagline: "Empowering Future Healthcare Professionals Since 2019",
  heroHeadline: "Welcome to Imam Institute of Nursing & Allied Health Sciences Jacobabad",
  established: 2019,
  firstBatch: 2020,
  location: "Jacobabad, Sindh, Pakistan",
  phone: "+92 312 3421447",
  whatsapp: "+92 312 3421447",
  email: "info@imaminstitute.edu.pk",
  facebook: "https://www.facebook.com/profile.php?id=100070957160051",
  youtube: "https://youtube.com/@imaminstitute",
  googleMap: "https://maps.app.goo.gl/R4bGzRdP163MaZs26",
};

export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  department: "leadership" | "faculty" | "administration";
  photo: string;
  quote?: string;
  message?: string;
};

export const stats = [
  { value: 500, suffix: "+", label: "Students Enrolled" },
  { value: 15, suffix: "+", label: "Qualified Faculty" },
  { value: 2019, suffix: "", label: "Year Established" },
  { value: 5, suffix: "+", label: "Programs Offered" },
];

export const accreditations = [
  { label: "Registered with PNMC", logo: "/logos/pnmc.png" },
  { label: "Affiliated with SMBBMU", logo: "/logos/smbbmu.png" },
  { label: "Approved by Govt. of Sindh", logo: "/logos/sindh-govt.png" },
  { label: "Imam Institute Certified", logo: "/logos/imam-cert.png" },
];

export const about = {
  short: `Imam Institute of Nursing & Allied Health Sciences was established in 2019 with a vision to develop skilled, competent, and compassionate nursing professionals. Since admitting its first BS Nursing batch in 2020, the institute has consistently achieved excellent academic results and maintained high standards in nursing education.`,
  full: `The institute is approved by the Government of Sindh, registered with the Pakistan Nursing & Midwifery Council (PNMC), and affiliated with Shaheed Mohtarma Benazir Bhutto Medical University (SMBBMU) Larkana. Our students receive clinical training at Imam Medical Center Jacobabad, Jacobabad Institute of Medical Sciences (JIMS), and Civil Hospital Jacobabad. At Imam Institute, we are committed to academic excellence, professional integrity, and preparing highly qualified nursing professionals to serve both national and international healthcare communities.`,
  vision: `Imam Institute of Nursing envisions developing skilled human resource in nursing field while enabling them for incoming generation, reducing unemployment and contributing in socio-economic stability.`,
  mission: `To create an academic, learning and collaborative environment for the preparation of caring, competent and professional nurses, who will accomplish their role in hospital and community.`,
};

export const programs = [
  {
    slug: "bs-nursing",
    name: "BS Nursing",
    department: "Department of Nursing",
    duration: "4 Years",
    status: "active",
    featured: true,
    description: `The Department of Nursing is dedicated to preparing compassionate, skilled, and competent nursing professionals through quality education, hands-on clinical training, and evidence-based learning. Our experienced faculty and modern learning environment empower students to deliver safe, ethical, and patient-centered care while meeting the evolving needs of the healthcare industry.`,
    accreditation: "PNMC Certified",
  },
  {
    slug: "cmw",
    name: "Community Mid Wifery (CMW)",
    department: "Department of Nursing",
    duration: "TBA",
    status: "future",
    featured: false,
    description: "Launching soon — community midwifery program for women's health.",
    accreditation: "PNMC",
  },
  {
    slug: "lhv",
    name: "Lady Health Visitor (LHV)",
    department: "Department of Nursing",
    duration: "TBA",
    status: "future",
    featured: false,
    description: "Launching soon — community health program.",
    accreditation: "PNMC",
  },
  {
    slug: "cna",
    name: "Certified Nursing Assistant (CNA)",
    department: "Department of Nursing",
    duration: "TBA",
    status: "future",
    featured: false,
    description: "Launching soon — entry-level clinical nursing certification.",
    accreditation: "PNMC",
  },
];

export const whyUs = [
  { icon: "GraduationCap", title: "Experienced & Qualified Faculty", desc: "BSN & MSN qualified faculty with extensive clinical and academic expertise." },
  { icon: "Award", title: "Recognized by PNMC", desc: "Officially registered with the Pakistan Nursing & Midwifery Council." },
  { icon: "Building2", title: "Affiliated with SMBBMU Larkana", desc: "Full university affiliation with Shaheed Mohtarma Benazir Bhutto Medical University." },
  { icon: "FlaskConical", title: "Modern Skills & Science Labs", desc: "State-of-the-art nursing skills labs and science laboratories." },
  { icon: "Hospital", title: "Hands-on Clinical Training", desc: "Real hospital rotations from early semesters at 3 partner hospitals." },
  { icon: "Users", title: "Student-Centered Environment", desc: "Small cohorts, personalized attention, and a supportive campus culture." },
  { icon: "Coins", title: "Affordable Fee Structure", desc: "Quality nursing education at competitive tuition rates." },
  { icon: "Medal", title: "Merit & Scholarship Opportunities", desc: "Need-based and merit scholarships available for deserving students." },
  { icon: "Monitor", title: "Digital Classrooms & Library", desc: "Technology-integrated learning with a well-stocked academic library." },
  { icon: "TrendingUp", title: "Excellent Academic Results", desc: "Consistently top performance in SMBBMU examinations since first batch." },
  { icon: "Briefcase", title: "Career Guidance & Development", desc: "Professional development support and hospital placement network." },
  { icon: "Trophy", title: "Sports, Seminars & Co-curricular", desc: "Active student life with events, seminars, and extracurricular activities." },
];

export const hospitals = [
  {
    number: "01",
    name: "Imam Medical Center",
    location: "Jacobabad",
    desc: "Primary clinical training facility providing comprehensive exposure across all major nursing departments.",
  },
  {
    number: "02",
    name: "JIMS",
    fullName: "Jacobabad Institute of Medical Sciences",
    location: "Jacobabad",
    desc: "Diverse clinical rotations covering medical, surgical, pediatric, and OBG departments.",
  },
  {
    number: "03",
    name: "Civil Hospital",
    location: "Jacobabad",
    desc: "Major public teaching hospital offering unparalleled community and emergency nursing experience.",
  },
  {
    number: "04",
    name: "GMMMC",
    fullName: "Ghulam Muhammad Mahar Medical College",
    location: "Sukkur",
    desc: "House Job Opportunities available at GMMMC for Imam Institute graduates — expanding career pathways for our nursing professionals.",
    badge: "House Job Opportunities",
  },
];

export const facultyMembers: FacultyMember[] = [
  {
    id: "abid-hussain-soomro",
    name: "Mr. Abid Hussain Soomro",
    role: "Chief Executive Officer",
    department: "leadership",
    photo: "/images/faculty/ceo.jpg",
    quote: "Every aspiring healthcare professional deserves the opportunity to learn, grow, and succeed.",
    message: `At Imam Institute of Nursing & Allied Health Sciences, our vision has always been to make quality nursing education accessible to the youth of Jacobabad and surrounding communities. Since our establishment in 2019, we have been committed to empowering students with knowledge, practical skills, and professional values that prepare them to serve society with compassion and excellence.

We believe that every aspiring healthcare professional deserves the opportunity to learn, grow, and succeed. Through quality education and clinical training, we are proud to shape the next generation of competent and caring nurses who will contribute to a healthier Pakistan.`,
  },
  {
    id: "shahid-hussain-soomro",
    name: "Mr. Shahid Hussain Soomro",
    role: "Additional Director",
    department: "leadership",
    photo: "/images/faculty/additional-director.jpg",
    quote: "Today's students are tomorrow's healthcare leaders.",
    message: `At Imam Institute of Nursing & Allied Health Sciences we are dedicated to creating an environment where students can achieve academic excellence while developing the skills, confidence, and compassion required in the nursing profession. Our commitment is to provide quality education, modern clinical training, and continuous support that prepares every student for a successful healthcare career.

We believe that today's students are tomorrow's healthcare leaders, and we remain committed to guiding them towards professional excellence and lifelong learning.`,
  },
  {
    id: "zahid-abbasi",
    name: "Sir Zahid Abbasi",
    role: "Clinical Instructor",
    department: "faculty",
    photo: "/images/faculty/clinical-instructor.jpg",
    quote: "Clinical excellence begins with compassionate care.",
  },
  {
    id: "faiz-muhammad",
    name: "Sir Faiz Muhammad",
    role: "Nursing Instructor",
    department: "faculty",
    photo: "/images/faculty/nursing-instructor.jpg",
    quote: "Every patient deserves a skilled and caring nurse.",
  },
  {
    id: "sadia-mushtaque",
    name: "Miss Sadia Mushtaque",
    role: "Nursing Lecturer",
    department: "faculty",
    photo: "/images/faculty/nursing-lecturer.jpg",
    quote: "Education is the foundation of every great nurse.",
  },
  {
    id: "shakeel-pathan",
    name: "Sir Shakeel Pathan",
    role: "General Subjects Teacher",
    department: "faculty",
    photo: "/images/faculty/general-subjects-teacher.jpg",
    quote: "A strong academic foundation opens every door.",
  },
  {
    id: "aisha",
    name: "Miss Aisha",
    role: "Senior Nursing Instructor",
    department: "faculty",
    photo: "/images/faculty/senior-nursing-instructor.jpg",
    quote: "Nursing is both an art and a science.",
  },
  {
    id: "mir-mansab",
    name: "Sir Mir Mansab",
    role: "Senior Nursing Lecturer",
    department: "faculty",
    photo: "/images/faculty/senior-nursing-lecturer.jpg",
    quote: "We shape nurses who transform communities.",
  },
  {
    id: "waqar-ahmed-soomro",
    name: "Mr. Waqar Ahmed Soomro",
    role: "Nursing Lecturer",
    department: "faculty",
    photo: "/images/faculty/nursing-lecturer-waqar-ahmed.jpg",
    quote: "Clinical knowledge with human empathy — that is nursing.",
  },
  {
    id: "ali-nawaz-hisbani",
    name: "Mr. Ali Nawaz Hisbani",
    role: "Vice Principal",
    department: "administration",
    photo: "/images/faculty/vice-principal.jpg",
    quote: "A well-managed institute creates space for great learning.",
  },
  {
    id: "mumtaz-kanasor",
    name: "Mr. Mumtaz Kanasor",
    role: "Administrator",
    department: "administration",
    photo: "/images/faculty/administrator.jpg",
    quote: "Serving the institute is serving the future of healthcare.",
  },
];

export const trustBadges = [
  { label: "Government Approved", sublabel: "Govt. of Sindh", icon: "ShieldCheck", logo: "/logos/sindh-govt.png" },
  { label: "PNMC Registered", sublabel: "Pakistan Nursing Council", icon: "Award", logo: "/logos/pnmc.png" },
  { label: "SMBBMU Affiliated", sublabel: "University Affiliated", icon: "Building2", logo: "/logos/smbbmu.png" },
];

export const newsItems = [
  {
    title: "Admissions Open for BS Nursing 2026 — Limited Seats Available",
    date: "March 2026",
    category: "Admissions",
    badgeColor: "bg-crimson text-white",
    href: "/news/admissions-open",
    description: "Secure your seat now for the flagship BS Nursing program in Jacobabad.",
    icon: "🎓",
  },
  {
    title: "Imam Institute Students Attend International Nursing Seminar at SMBBMU",
    date: "February 2026",
    category: "Events",
    badgeColor: "bg-navy text-white",
    href: "/news/sem-invite",
    description: "Our students participated in a knowledge exchange seminar at SMBBMU.",
    icon: "🌍",
  },
  {
    title: "Clinical Affiliation Renewed with JIMS for Academic Year 2025–26",
    date: "January 2026",
    category: "Academic",
    badgeColor: "bg-gold text-ink",
    href: "/news/jims-affiliation",
    description: "The institute secures another year of hands-on clinical partnerships.",
    icon: "🏥",
  },
];

export const galleryItems = [
  {
    id: "campus-seminar",
    src: "/images/campus-group.jpg",
    alt: "Imam Institute students at SMBBMU international nursing seminar",
    featured: true,
  },
  {
    id: "lab-skills",
    src: "/images/gallery-lab.jpg",
    alt: "Nursing skills lab at Imam Institute",
    featured: false,
  },
  {
    id: "classroom",
    src: "/images/gallery-classroom.jpg",
    alt: "Digital classroom environment at Imam Institute",
    featured: false,
  },
];
