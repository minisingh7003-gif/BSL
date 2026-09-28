import { useState } from "react";
import { Mail, Instagram, Check } from "lucide-react";
import type { SiteContent } from "@/data/epkData";
import Reveal from "@/components/Reveal";

function sanitize(str: string): string {
  return str.replace(/[\r\n<>]/g, "").trim();
}

export default function Contact({ content }: { content: SiteContent }) {
  const { contact } = content;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    date: "",
    city: "",
    eventType: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const words = contact.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(contact.highlightWord.toLowerCase())
  );

  function handleSendMail(e: React.FormEvent) {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const name = sanitize(formState.name);
    const email = sanitize(formState.email);
    const date = sanitize(formState.date);
    const city = sanitize(formState.city);
    const eventType = sanitize(formState.eventType);
    const message = sanitize(formState.message);

    const subject = encodeURIComponent(`Booking Inquiry — ${eventType || "Live Bollywood Music"} — ${date || "TBD"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEvent Date: ${date}\nCity: ${city}\nEvent Type: ${eventType}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${contact.bookingEmail}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  const inputClass = "w-full bg-card border border-border text-fg px-4 py-3 text-sm focus:border-primary outline-none transition-all duration-300 placeholder:text-muted focus:shadow-[0_0_20px_rgba(199,123,148,0.15)]";

  return (
    <section id="contact" className="relative z-10 bg-bg border-b border-border overflow-hidden">
      {/* Parallax glow */}
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(199,123,148,0.06), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
        <Reveal direction="up" duration={0.8}>
          <h2
            className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)" }}
          >
            {words.map((word, i) => (
              <span key={i} className={i === highlightIdx ? "text-primary" : ""}>
                {word}{i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1} duration={0.7}>
          <p className="text-secondary text-sm font-light leading-relaxed max-w-lg mb-12">
            {contact.blurb}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.15} duration={0.7}>
          <div className="max-w-2xl">
            <h3 className="font-display font-bold text-white text-lg uppercase mb-6">
              Booking <span className="text-primary">Sheet</span>
            </h3>
            <form onSubmit={handleSendMail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block transition-colors group-focus-within:text-primary">Your Name</label>
                  <input
                    required
                    maxLength={100}
                    className={inputClass}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Full name"
                  />
                </div>
                <div className="group">
                  <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block transition-colors group-focus-within:text-primary">Email</label>
                  <input
                    required
                    type="email"
                    maxLength={200}
                    className={inputClass}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block transition-colors group-focus-within:text-primary">Event Date</label>
                  <input
                    maxLength={50}
                    className={inputClass}
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    placeholder="e.g. 15 Dec 2026"
                  />
                </div>
                <div className="group">
                  <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block transition-colors group-focus-within:text-primary">City</label>
                  <input
                    maxLength={100}
                    className={inputClass}
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    placeholder="e.g. New York"
                  />
                </div>
              </div>
              <div className="group">
                <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block transition-colors group-focus-within:text-primary">Event Type</label>
                <input
                  maxLength={100}
                  className={inputClass}
                  value={formState.eventType}
                  onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                  placeholder="e.g. Wedding, Corporate Gala, Campus Show"
                />
              </div>
              <div className="group">
                <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block transition-colors group-focus-within:text-primary">Tell me about your evening</label>
                <textarea
                  required
                  rows={4}
                  maxLength={2000}
                  className={inputClass}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="The date, the city, the people who will be in the room..."
                />
              </div>
              {error && <p className="text-accent text-xs">{error}</p>}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={contact.instagramDmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-fg font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-all duration-300 hover:bg-fg hover:shadow-[0_0_30px_rgba(199,123,148,0.4)]"
                >
                  <Instagram className="w-4 h-4" />
                  Book Now
                </a>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border border-border text-white font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                >
                  {sent ? <><Check className="w-4 h-4" /> Opening...</> : <><Mail className="w-4 h-4" /> Send Mail</>}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
