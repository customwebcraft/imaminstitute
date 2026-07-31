import { Metadata } from "next";
import FacultyPageClient from "./FacultyPageClient";

export const metadata: Metadata = {
  title: "Faculty | Imam Institute",
  description: "Meet the experienced leadership, faculty, and administration of Imam Institute of Nursing & Allied Health Sciences.",
};

export default function FacultyPage() {
  return <FacultyPageClient />;
}
