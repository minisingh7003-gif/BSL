import { Zap, Mic2 } from "lucide-react";
import { techRider, roomsData } from "@/data/epkData";

export default function TechRider() {
  return (
    <section id="tech-rider" className="relative z-10 bg-[#0d0d0d] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-2">
          <Mic2 className="w-6 h-6 text-primary" />
          <p className="text-primary font-display font-medium text-xs uppercase tracking-[0.3em]">
            Performance & Technical
          </p>
        </div>
        <h2
          className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-12"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          The rooms I love to <span className="text-primary">fill</span>
        </h2>

        {/* Rooms — compact inline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-16">
          {roomsData.map((room, i) => (
            <div key={i} className="bg-[#0d0d0d] p-5 group transition-colors hover:bg-card">
              <span className="font-display font-bold text-primary text-xl leading-none block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-bold text-white text-xs uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                {room.title}
              </h3>
              <p className="text-secondary text-[11px] font-light leading-relaxed">
                {room.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Rider sub-section */}
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-5 h-5 text-primary" />
          <p className="text-primary font-display font-medium text-xs uppercase tracking-[0.3em]">
            Tech Rider
          </p>
        </div>
        <p className="text-secondary text-sm font-light leading-relaxed max-w-lg mb-8">
          Everything the venue or production team needs to know before I arrive. Share it with your sound engineer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {techRider.map((section, i) => (
            <div key={i} className="bg-[#0d0d0d] p-6 md:p-8">
              <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wide mb-4">
                {section.category}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-primary text-xs leading-relaxed shrink-0 mt-0.5">›</span>
                    <span className="text-secondary text-sm font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-muted text-[10px] uppercase tracking-wider text-center mt-8">
          This section is not editable via the CMS.
        </p>
      </div>
    </section>
  );
}
