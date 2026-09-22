export const institute = {
  name: "Imam Institute of Nursing & Allied Health Sciences",
  shortName: "Imam Institute",
  abbreviation: "IINAHS",
  tagline: "Empowering Future Healthcare Professionals Since 2019",
  heroHeadline: "Welcome to Imam Institute of Nursing & Allied Health Sciences Jacobabad",
  established: 2019,
  firstBatch: 2020,
  location: "Jacobabad, Sindh, Pakistan",
  address: "Shah Ghazi Muhalla, Imam Baksh Road, Jacobabad",
  phone: "+92 300 2320085",
  whatsapp: "+92 300 2320085",
  email: "Imcjcd@gmail.com",
  facebook: "https://www.facebook.com/share/1HtCNHyJEi/",
  tiktok: "https://www.tiktok.com/@iionahs?_r=1&_t=ZS-99rJ3wTBjC0",
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
  { label: "Affiliated with Sindh Medical Faculty (SMF), Karachi", logo: "/logos/smf.png" },
  { label: "Affiliated with Sindh Technical Education & Vocational Training Authority (STEVTA)", logo: "/logos/stevta.png" },
  { label: "Affiliated with Pharmacy Council", logo: "/logos/pharmacy.png" },
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
    name: "BS Nursing (Generic)",
    department: "Department of Nursing",
    duration: "4 Years",
    status: "active",
    featured: true,
    description: "Build a strong foundation in nursing science, clinical practice, patient care, and professional healthcare leadership.",
    accreditation: "PNMC Registered · SMBBMU Affiliated",
  },
  {
    slug: "x-ray-technician",
    name: "X-Ray Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    featured: false,
    description: "Build practical skills in diagnostic imaging, patient preparation, radiation safety, and X-ray equipment operation.",
    accreditation: "Nationally Recognized",
  },
  {
    slug: "ecg-technician",
    name: "ECG Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    featured: false,
    description: "Learn to record and support the interpretation of electrocardiograms in clinical care settings.",
    accreditation: "Nationally Recognized",
  },
  {
    slug: "icu-technician",
    name: "ICU Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    featured: false,
    description: "Develop the technical knowledge and discipline needed to support critical care teams and intensive care services.",
    accreditation: "Nationally Recognized",
  },
  {
    slug: "physiotherapy-technician",
    name: "Physiotherapy Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    featured: false,
    description: "Gain a foundation in therapeutic support, rehabilitation exercises, mobility, and patient-centered physiotherapy care.",
    accreditation: "Nationally Recognized",
  },
  {
    slug: "peads-technician",
    name: "PEADS Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    featured: false,
    description: "Prepare to support pediatric departments with safe, compassionate, and age-appropriate clinical assistance.",
    accreditation: "Nationally Recognized",
  },
  {
    slug: "dental-technician",
    name: "Dental Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    description: "Learn the foundational laboratory and clinical support skills used in modern dental services.",
    accreditation: "Nationally Recognized",
  },
  {
    slug: "anaesthesia-technician",
    name: "Anaesthesia Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    featured: false,
    description: "Train in operating-room preparation, anaesthesia equipment support, and safe perioperative practice.",
    accreditation: "Nationally Recognized",
  },
  {
    slug: "ophthalmic-technician",
    name: "Ophthalmic Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    featured: false,
    description: "Develop essential skills for eye-care clinics, diagnostic assistance, and ophthalmic patient support.",
    accreditation: "Nationally Recognized",
  },
  {
    slug: "blood-transfusion-technician",
    name: "Blood Transfusion Technician",
    department: "Paramedical Sciences",
    duration: "1 Year Diploma",
    status: "active",
    featured: false,
    description: "Build knowledge of blood banking, sample handling, transfusion safety, and laboratory procedures.",
    accreditation: "Nationally Recognized",
  },
];

export const upcomingPrograms = [
  { slug: "cmw", name: "Community Midwifery (CMW)", department: "Department of Nursing", duration: "Coming Soon", description: "A future pathway focused on safe, compassionate maternal and newborn care." },
  { slug: "lhv", name: "Lady Health Visitor (LHV)", department: "Department of Nursing", duration: "Coming Soon", description: "A future community healthcare pathway supporting women, children, and families." },
  { slug: "cna", name: "Certified Nursing Assistant (CNA)", department: "Department of Nursing", duration: "Coming Soon", description: "A future entry pathway for foundational patient-care and nursing support skills." },
];

export const pharmacyPrograms = [
  {
    slug: "pharmacy-technician",
    name: "Pharmacy Technician",
    department: "Pharmacy",
    duration: "2 Years",
    category: "Category-B / Register-B",
    eligibility: "Matriculation (Science) from a recognized Board of Pakistan",
    description: "Professional pharmacy education focused on medicines, pharmaceutical sciences, dispensing practices, and safe medication management to prepare students for careers in healthcare and pharmaceutical services.",
    requirements: [
      "Candidates must fulfill the requirements of the relevant Pharmacy Council.",
      "Admission is subject to availability of seats and applicable regulatory requirements.",
    ],
  },
];

export const postBasicSpecializations = [
  {
    slug: "post-basic-cardiac-care",
    name: "Post Basic Specialization in Cardiac Care (CCU)",
    duration: "1 Year",
    eligibility: "BS Nursing / General Nursing*",
    description: "An advanced nursing specialization designed to strengthen knowledge and clinical skills for safe, evidence-based care of patients in cardiac and coronary care units.",
  },
  {
    slug: "post-basic-pediatric-nursing",
    name: "Post Basic Specialization in Pediatric Nursing (Peads)",
    duration: "1 Year",
    eligibility: "BS Nursing / General Nursing*",
    description: "An advanced nursing specialization focused on compassionate, age-appropriate, and clinically competent care for infants, children, and adolescents.",
  },
];

export const diplomaPrograms = [
  { slug: "dispenser", name: "Dispenser", duration: "1 Year Diploma", description: "Practical training in dispensing support, prescription handling, medicine storage, and safe patient service." },
  { slug: "lab-technician", name: "Lab Technician", duration: "1 Year Diploma", description: "Develop foundational skills in laboratory procedures, sample handling, diagnostic support, and laboratory safety." },
  { slug: "respiratory-technician", name: "Respiratory Technician", duration: "1 Year Diploma", description: "Build practical knowledge of respiratory care equipment, patient support, and clinical assistance in respiratory services." },
  { slug: "ultrasound-technician", name: "Ultrasound Technician", duration: "1 Year Diploma", description: "Learn the fundamentals of ultrasound imaging, patient preparation, equipment handling, and diagnostic support." },
  { slug: "ct-scan-technician", name: "CT Scan Technician", duration: "1 Year Diploma", description: "Gain foundational skills in CT imaging support, patient preparation, radiation safety, and scan-room procedures." },
];

export const vocationalPrograms = [
  { name: "Computer Graphic Designing", duration: "3–6 Months", eligibility: "Matric / Intermediate", description: "Career-oriented training in visual communication, digital design tools, and practical graphic design projects." },
  { name: "Web Designing & Development", duration: "3–6 Months", eligibility: "Matric / Intermediate", description: "Practical training in website design, front-end development, responsive layouts, and digital project building." },
  { name: "Computer Applications / IT", duration: "3–6 Months", eligibility: "Matric", description: "Foundational computer and information technology skills for education, office work, and everyday professional use." },
  { name: "Graphic Designing", duration: "Career Skill Course", eligibility: "Open to eligible applicants", description: "Hands-on skill development in creative design, digital composition, and professional visual content." },
  { name: "AutoCAD", duration: "Career Skill Course", eligibility: "Open to eligible applicants", description: "Technical drawing and computer-aided design training for practical drafting and design work." },
  { name: "CIT", duration: "Career Skill Course", eligibility: "Open to eligible applicants", description: "Computer information technology training focused on essential digital and office productivity skills." },
];

export const whyUs = [
  { icon: "GraduationCap", title: "Quality Nursing Education", desc: "Quality nursing education that combines strong academic foundations with practical clinical learning." },
  { icon: "Hospital", title: "Strong Clinical Training", desc: "Hands-on clinical exposure through Imam Medical Center, JIMS Hospital, and Civil Hospital Jacobabad builds confidence and patient-care skills." },
  { icon: "Users", title: "Experienced & Dedicated Faculty", desc: "Dedicated faculty focus on academic excellence, professional development, and individual student support." },
  { icon: "Monitor", title: "Modern Learning Environment", desc: "Digital classrooms, well-equipped laboratories, a library, computer lab, Anatomy & Physiology Lab, FON Museum, Science Lab, and other academic facilities." },
  { icon: "FlaskConical", title: "Practical Skills & Professional Development", desc: "Practical learning develops clinical skills, communication, teamwork, professionalism, and confidence for healthcare careers." },
  { icon: "TrendingUp", title: "Academic Excellence", desc: "Students are encouraged to maintain high academic standards, with many demonstrating excellent performance and strong GPAs." },
  { icon: "Briefcase", title: "Career-Focused Education", desc: "Our approach prepares students for examinations and future responsibilities in hospitals, healthcare institutions, and clinical settings." },
  { icon: "Award", title: "Student-Centered Support", desc: "A supportive academic environment helps every student learn, participate, improve their skills, and achieve their ambitions." },
  { icon: "Building2", title: "Affiliated & Recognized Education", desc: "University affiliation, PNMC registration, and Government of Sindh approval provide a structured and recognized academic pathway." },
  { icon: "Medal", title: "Building Future Healthcare Professionals", desc: "Since 2019, Imam Institute has developed knowledgeable, skilled, compassionate, and responsible healthcare professionals." },
];

export const whyUsClosing = "Choose Imam Institute — Learn with Purpose, Train with Confidence, and Build Your Future in Healthcare.";

export const hospitals = [
  {
    number: "01",
    name: "Imam Medical Center",
    location: "Jacobabad",
    badge: "Clinical Training Partner",
    title: "Hands-on Clinical Learning",
    desc: "Students gain practical exposure in a real healthcare environment, developing essential nursing skills through supervised clinical practice. The experience helps students connect classroom learning with patient care, clinical procedures, communication, and professional nursing practice.",
  },
  {
    number: "02",
    name: "JIMS-Jacobabad Institute of Medical Sciences",
    location: "Jacobabad",
    badge: "Clinical Training Facility",
    title: "Advanced Clinical Exposure",
    desc: "Students receive valuable clinical exposure at Jacobabad Institute of Medical Sciences (JIMS), a 133-bed healthcare facility providing a wide range of inpatient, outpatient, clinical, and diagnostic services. This environment enables students to strengthen their practical nursing skills and gain experience in patient-centered care.",
  },
  {
    number: "03",
    name: "Civil Hospital",
    location: "Jacobabad",
    badge: "Clinical Training Facility",
    title: "Comprehensive Patient Care Experience",
    desc: "Clinical training at Civil Hospital provides students with opportunities to observe and participate in patient care across a diverse healthcare setting. Through supervised clinical practice, students develop confidence, clinical competence, communication skills, and professional responsibility.",
  },
  {
    number: "04",
    name: "Ghulam Muhammad Mahar Medical College (GMMMC), Sukkur",
    location: "Sukkur",
    title: "Pathway to Professional Practice",
    desc: "Graduates may pursue house job opportunities at Ghulam Muhammad Mahar Medical College, Sukkur, providing an important transition from undergraduate nursing education to professional clinical practice. GMMMC is a constituent institution of Shaheed Mohtarma Benazir Bhutto Medical University, Larkana, and its official website lists a Nursing Unit among its institutional facilities.",
    badge: "House Job Opportunities",
  },
];

export const facultyMembers: FacultyMember[] = [
  {
    id: "abid-hussain-soomro",
    name: "Dr Abid Hussain Soomro",
    role: "Chief Executive Officer",
    department: "leadership",
    photo: "/images/faculty/ceo.jpg",
    quote: "Every aspiring healthcare professional deserves the opportunity to learn, grow, and succeed.",
    message: `At Imam Institute of Nursing & Allied Health Sciences, our vision has always been to make quality nursing education accessible to the youth of Jacobabad and surrounding communities. Since our establishment in 2019, we have been committed to empowering students with knowledge, practical skills, and professional values that prepare them to serve society with compassion and excellence.

We believe that every aspiring healthcare professional deserves the opportunity to learn, grow, and succeed. Through quality education and clinical training, we are proud to shape the next generation of competent and caring nurses who will contribute to a healthier Pakistan.`,
  },
  {
    id: "zahid-hussain-soomro",
    name: "Sir Zahid Hussain Soomro",
    role: "Director",
    department: "leadership",
    photo: "/images/faculty/clg-director.jpg",
    quote: "At Imam Institute, we are committed to providing quality nursing education, practical clinical training, and a supportive learning environment that empowers our students to become skilled, confident, and compassionate healthcare professionals.",
    message: `At Imam Institute, we are committed to providing quality nursing education, practical clinical training, and a supportive learning environment that empowers our students to become skilled, confident, and compassionate healthcare professionals.`,
  },
  {
    id: "hamid-imam-soomro",
    name: "Dr Hamid Imam Soomro",
    role: "Head of Imam Institute",
    department: "leadership",
    photo: "/images/faculty/head.jpg",
    quote: "Strong clinical partnerships help students turn knowledge into confident patient care.",
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
    id: "tahir-hussain-soomro",
    name: "Dr Tahir Hussain Soomro",
    role: "Principal - Pharmacy Department",
    department: "leadership",
    photo: "/images/faculty/principal-pharmacy.jpg",
    quote: "Education is the foundation of professional excellence.",
  },
  {
    id: "shahid-hussain-soomro-admin",
    name: "Mr. Shahid Hussain Soomro",
    role: "Additional Director",
    department: "administration",
    photo: "/images/faculty/additional-director.jpg",
    quote: "Today's students are tomorrow's healthcare leaders.",
  },
  {
    id: "vinod-kumar",
    name: "Sir Vinod Kumar",
    role: "Principal",
    department: "faculty",
    photo: "/images/faculty/clg-principal.jpg",
    quote: "Education is the foundation of professional excellence. Our aim is to nurture our students through quality education, discipline, practical learning, and professional development, preparing them to serve the healthcare community with knowledge, confidence, and compassion.",
    message: `Education is the foundation of professional excellence. Our aim is to nurture our students through quality education, discipline, practical learning, and professional development, preparing them to serve the healthcare community with knowledge, confidence, and compassion.`,
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
    department: "faculty",
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
  { label: "SMF Affiliated", sublabel: "Sindh Medical Faculty, Karachi", icon: "Building2", logo: "/logos/smf.png" },
  { label: "STEVTA Affiliated", sublabel: "Sindh Technical Education & Vocational Training Authority", icon: "Building2", logo: "/logos/stevta.png" },
  { label: "Pharmacy Council Affiliated", sublabel: "Pharmacy Council", icon: "Building2", logo: "/logos/pharmacy.png" },
  { label: "Imam Institute Certified", sublabel: "Institute Certification", icon: "Award", logo: "/logos/imam-cert.png" },
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
