import Hero from "@/components/sections/Hero";
import AccreditationBar from "@/components/sections/AccreditationBar";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Programs from "@/components/sections/Programs";
import WhyUs from "@/components/sections/WhyUs";
import Vision from "@/components/sections/Vision";
import FacultySlider from "@/components/sections/FacultySlider";
import ClinicalPartners from "@/components/sections/ClinicalPartners";
import Gallery from "@/components/sections/Gallery";
import News from "@/components/sections/News";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";
import TrustBar from "@/components/sections/TrustBar";
import WelcomeVideo from "@/components/layout/WelcomeVideo";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WelcomeVideo />
      <AccreditationBar />
      <About />
      <Stats />
      <Programs />
      <WhyUs />
      <Vision />
      <FacultySlider />
      <ClinicalPartners />
      <Gallery />
      <News />
      <AdmissionsCTA />
      <TrustBar />
    </div>
  );
}
