import { useState } from "react";
import { Play } from "lucide-react";
import type { SiteContent } from "@/data/epkData";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
  return match ? match[1] : "";
}

export default function About({ content }: { content: SiteContent }) {
  const { about } = content;
  const [playing, setPlaying] = useState(false);

  const words = about.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(about.highlightWord.toLowerCase())
  );

  const videoId = getYouTubeId(about.showreelUrl);

  return (
    <section id="about" className="relative z-10 bg-bg border-b border-border overflow-hidden">
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,30,66,0.12), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
        <Reveal direction="up" duration={0.8}>
          <h2
            className="font-display font-bold uppercase leading-[0.85] tracking-tight text-fg mb-12"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            {words.map((word, i) => (
              <span key={i} className={i === highlightIdx ? "text-accent" : ""}>
                {word}{i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal direction="left" duration={0.8}>
            <TiltCard maxTilt={5} className="group glass-card relative w-full overflow-hidden flex-1 flex flex-col h-full">
              {playing ? (
                <div className="relative aspect-[9/16] bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={about.showreelTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="group block relative w-full overflow-hidden flex-1 cursor-pointer"
                  aria-label="Play showreel"
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      src={about.showreelThumbnail}
                      alt={about.showreelTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-bg/30 group-hover:bg-bg/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 rounded-full animate-pulse-cta">
                        <Play className="w-6 h-6 text-primary fill-current ml-1" />
                      </div>
                    </div>
                  </div>
                </button>
              )}
              <div className="border-t border-border p-4 bg-noir-surface">
                <h3 className="font-display font-bold text-white text-sm uppercase leading-tight">
                  {about.showreelTitle}
                </h3>
                <p className="text-secondary text-[10px] mt-1 font-light leading-relaxed">
                  {about.showreelDescription}
                </p>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal direction="right" duration={0.8} delay={0.15}>
            <div className="flex flex-col justify-center space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-secondary text-sm md:text-base font-light leading-relaxed"
                  style={{
                    animation: `fade-up 0.6s ease ${0.1 * i}s both`,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
