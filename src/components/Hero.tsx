import { useEffect, useState, useRef } from "react";
import { Instagram, Play } from "lucide-react";
import type { SiteContent } from "@/data/epkData";
import MagneticButton from "@/components/MagneticButton";

export default function Hero({ content }: { content: SiteContent }) {
  const { hero } = content;
  const heading = `${hero.firstName} ${hero.lastName}`;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const slides =
    hero.sliderImages && hero.sliderImages.length > 0
      ? hero.sliderImages.filter((s) => s.length > 0)
      : [hero.backgroundImage];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;
  const contentParallax = scrollY * 0.15;
  const fadeOpacity = Math.max(0, 1 - scrollY / 500);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            <img
              src={img}
              alt={`${heading} ${i + 1}`}
              className={`w-full h-full object-cover ${
                i === currentSlide ? "animate-kenburns" : ""
              }`}
              style={{ transformOrigin: "center 40%" }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === currentSlide ? "w-8 bg-primary" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      <div
        className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-20"
        style={{
          transform: `translateY(${contentParallax}px)`,
          opacity: fadeOpacity,
        }}
      >
        <p
          className="animate-clip-reveal text-primary font-display font-medium uppercase mb-5 md:mb-7"
          style={{ fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)", letterSpacing: "0.4em" }}
        >
          {hero.subtitle}
        </p>

        <h1 className="font-display font-bold uppercase leading-[0.8] tracking-tight text-white">
          <span
            className="animate-clip-reveal-delay-1 block"
            style={{ fontSize: "clamp(2.75rem, 11vw, 9rem)" }}
          >
            {hero.firstName}
          </span>
          <span
            className="animate-clip-reveal-delay-2 block gradient-text"
            style={{
              fontSize: "clamp(2.75rem, 11vw, 9rem)",
            }}
          >
            {hero.lastName}
          </span>
        </h1>

        <p
          className="animate-fade-up-delay text-white/80 font-light mt-5 md:mt-7 max-w-md leading-relaxed"
          style={{ fontSize: "clamp(0.875rem, 2vw, 1.0625rem)" }}
        >
          {hero.description}
        </p>

        <div className="animate-fade-up-delay flex flex-nowrap items-center gap-2 md:gap-3 mt-8 md:mt-10 overflow-x-auto no-scrollbar">
          <MagneticButton
            href={content.contact.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ripple bg-primary text-primary-fg font-display font-bold uppercase text-xs md:text-sm px-5 md:px-7 py-3.5 md:py-4 tracking-wide transition-all duration-300 hover:bg-accent hover:shadow-[0_0_30px_rgba(220,20,60,0.4)] whitespace-nowrap"
          >
            <Instagram className="w-4 h-4" />
            Book Now
          </MagneticButton>

          <MagneticButton
            href="#about"
            className="btn-ripple border border-white/30 text-white font-display font-bold uppercase text-xs md:text-sm px-5 md:px-7 py-3.5 md:py-4 tracking-wide backdrop-blur-sm bg-white/5 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-transparent whitespace-nowrap"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Showreel
          </MagneticButton>
        </div>

        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          style={{ opacity: fadeOpacity }}
        >
          <span className="text-muted text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
