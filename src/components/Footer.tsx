import { Instagram, Facebook, Youtube, Headphones, Music2, Linkedin } from "lucide-react";
import type { SiteContent } from "@/data/epkData";
import Reveal from "@/components/Reveal";

export default function Footer({ content }: { content: SiteContent }) {
  const { footer } = content;

  const iconMap: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-4 h-4 text-secondary" />,
    facebook: <Facebook className="w-4 h-4 text-secondary" />,
    youtube: <Youtube className="w-4 h-4 text-secondary" />,
    linkedin: <Linkedin className="w-4 h-4 text-secondary" />,
    spotify: <Headphones className="w-4 h-4 text-secondary" />,
    apple: <Music2 className="w-4 h-4 text-secondary" />,
  };

  return (
    <footer className="relative z-10 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Reveal direction="up" duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-border">
            {/* Name */}
            <div>
              <div className="font-display font-bold text-white text-2xl uppercase tracking-tight leading-none mb-2">
                {footer.artistName}
              </div>
              <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
                {footer.subtitle}
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-muted text-[10px] uppercase tracking-[0.25em] mb-3">Follow</p>
              <div className="flex gap-3">
                {footer.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-10 h-10 border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-1"
                  >
                    {iconMap[social.icon] || <Headphones className="w-4 h-4 text-secondary" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Streaming */}
            <div>
              <p className="text-muted text-[10px] uppercase tracking-[0.25em] mb-3">Stream On</p>
              <div className="flex flex-wrap gap-2">
                {footer.streaming.map((platform, i) => (
                  <a
                    key={i}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border px-3 py-2 transition-all duration-300 hover:border-primary hover:-translate-y-0.5"
                  >
                    {iconMap[platform.icon] || <Music2 className="w-3.5 h-3.5 text-secondary" />}
                    <span className="text-secondary text-[10px] uppercase tracking-wider">{platform.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1} duration={0.5}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} {footer.artistName}. All Rights Reserved.
            </p>
            <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
              {footer.socialHandle}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
