import { useEffect, useState } from "react";
import { Instagram, Facebook, Youtube, Headphones, Music2, Linkedin, Menu, X } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

export default function Nav({ content }: { content: SiteContent }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = content.footer.socials;

  const iconMap: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-4 h-4" />,
    facebook: <Facebook className="w-4 h-4" />,
    youtube: <Youtube className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
    spotify: <Headphones className="w-4 h-4" />,
    apple: <Music2 className="w-4 h-4" />,
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Photos", href: "#photos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Desktop nav with underline animation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-secondary text-sm font-light hover:text-primary transition-colors duration-200 group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-secondary hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Socials with hover lift */}
        <div className="flex items-center gap-2">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="w-9 h-9 border border-border flex items-center justify-center text-secondary transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:bg-primary/5"
            >
              {iconMap[social.icon] || <Headphones className="w-4 h-4" />}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/98 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-secondary text-sm font-light hover:text-primary transition-colors py-2 border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
