import FadeUp from "@/components/motion/FadeUp";

export default function WelcomeVideo() {
  return (
    <section className="bg-off-white py-16 md:py-24" aria-labelledby="welcome-video-heading">
      <FadeUp>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">Watch and explore</p>
            <h2 id="welcome-video-heading" className="mt-3 text-4xl font-semibold leading-tight text-navy text-display md:text-5xl">Life at Imam Institute</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-ink-muted">Take a closer look at our campus, learning environment, and the community preparing tomorrow&apos;s healthcare professionals.</p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] bg-navy shadow-[0_24px_60px_rgba(15,36,86,0.16)]">
            <video className="aspect-video w-full object-cover" controls playsInline preload="metadata" aria-label="Life at Imam Institute video">
          <source src="/videos/imam-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
