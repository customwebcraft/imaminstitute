import FadeUp from "@/components/motion/FadeUp";
import GalleryExperience from "@/components/gallery/GalleryExperience";

export default function Gallery() {
  return (
    <section className="overflow-hidden bg-off-white py-16 md:py-20">
      <FadeUp delay={0.2}>
        <GalleryExperience mode="carousel" />
      </FadeUp>
    </section>
  );
}