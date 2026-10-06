import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { SiteContent } from "@/data/epkData";
import Reveal from "@/components/Reveal";

export default function Photos({ content }: { content: SiteContent }) {
  const { photos } = content;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextPhoto = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev + 1) % photos.photos.length));
  }, [photos.photos.length]);
  const prevPhoto = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev - 1 + photos.photos.length) % photos.photos.length));
  }, [photos.photos.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, nextPhoto, prevPhoto]);

  const words = photos.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(photos.highlightWord.toLowerCase())
  );

  return (
    <section id="photos" className="relative z-10 bg-bg border-b border-border overflow-hidden">
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,0,0,0.3), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
        <Reveal direction="up" duration={0.8}>
          <h2
            className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-12"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            {words.map((word, i) => (
              <span key={i} className={i === highlightIdx ? "text-primary" : ""}>
                {word}{i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {photos.photos.map((photo, i) => (
            <Reveal
              key={i}
              direction="scale"
              delay={Math.min(i * 0.06, 0.4)}
              duration={0.6}
              className="photo-card bg-bg cursor-pointer aspect-[4/5]"
            >
              <div
                className="photo-card bg-bg cursor-pointer aspect-[4/5] w-full h-full"
                onClick={() => setLightbox(i)}
              >
                <div className="crimson-bar" />
                <img
                  src={photo.src}
                  alt={photo.credit}
                  loading="lazy"
                  className="w-full h-full object-cover img-grayscale"
                />
                <div className="photo-credit">{photo.credit}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white hover:text-primary transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={photos.photos[lightbox].src}
            alt={photos.photos[lightbox].credit}
            className="max-h-[85vh] max-w-[90vw] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-8 text-white hover:text-primary transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-primary text-[10px] uppercase tracking-[0.25em]">
              {photos.photos[lightbox].credit}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
