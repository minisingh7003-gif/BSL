import { pressLogos } from "@/data/epkData";
import Reveal from "@/components/Reveal";

export default function PressCoverage() {
  return (
    <section id="press" className="relative z-10 bg-bg border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <Reveal direction="up" duration={0.8}>
          <h2
            className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-4 text-center"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            As Seen <span className="text-accent">In</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1} duration={0.7}>
          <p className="text-secondary text-sm font-light leading-relaxed text-center max-w-lg mx-auto mb-12">
            Featured across major publications and media outlets.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-border">
          {pressLogos.map((logo, i) => (
            <Reveal key={i} direction="scale" delay={i * 0.06} duration={0.5}>
              <div className="bg-bg h-24 md:h-28 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-noir-elevated">
                <span className="font-display font-bold text-2xl md:text-3xl text-muted group-hover:text-accent transition-colors duration-300 tracking-tight">
                  {logo.logo}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
