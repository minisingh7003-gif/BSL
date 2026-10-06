import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crown,
  Facebook,
  Globe2,
  Heart,
  Image as ImageIcon,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Moon,
  Music2,
  Palette,
  Plane,
  Play,
  Quote,
  Send,
  Sparkles,
  Star,
  Ticket,
  Users,
  Volume2,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { clients, mediaImages, navLinks, riderHighlights, showFormats, socialLinks, testimonials } from "@/data/artistData";
import Reveal from "@/components/Reveal";

const iconMap = {
  spark: Sparkles,
  star: Star,
  rings: Heart,
  briefcase: Briefcase,
  moon: Moon,
  crown: Crown,
  globe: Globe2,
} as const;

const showToneClasses = {
  gold: "from-gold/20 via-transparent to-transparent border-gold/35",
  pink: "from-electric/20 via-transparent to-transparent border-electric/35",
  emerald: "from-emerald/45 via-transparent to-transparent border-emerald/60",
  champagne: "from-champagne/20 via-transparent to-transparent border-champagne/35",
  blue: "from-sky-900/50 via-transparent to-transparent border-sky-800/60",
  rose: "from-wine/70 via-transparent to-transparent border-rose-900/70",
} as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-champagne" style={{ scaleX: scrollYProgress }} />
      <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-line bg-ink/85 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="font-display text-4xl italic leading-none text-champagne">BS</span>
            <span className="hidden border-l border-champagne/30 pl-3 font-editorial text-[10px] uppercase tracking-[.22em] text-ivory/75 sm:block">Bhaswati<br />Sengupta</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="group relative py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-smoke transition-colors hover:text-champagne">
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a href="#booking" className="hidden items-center gap-2 border border-champagne/60 px-4 py-2.5 font-editorial text-xs uppercase tracking-[.18em] text-champagne transition-all hover:bg-champagne hover:text-ink sm:flex">
            Enquire <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center border border-line text-champagne lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-line bg-ink/95 px-5 lg:hidden">
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-line py-4 font-editorial text-lg uppercase tracking-[.12em] text-ivory transition-colors last:border-0 hover:text-champagne">{link.label}</a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 140]);
  return (
    <section id="top" className="grain relative flex min-h-[760px] items-end overflow-hidden bg-ink pb-16 pt-32 sm:min-h-screen lg:pb-24">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img src="https://picsum.photos/seed/bhaswati-hero/2200/1500" alt="Bhaswati Sengupta performing live" className="h-full w-full object-cover object-center opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="hero-glow absolute inset-0" />
      </motion.div>
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-champagne" /><span className="eyebrow text-champagne">Playback singer · live performer · worldwide bookings</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .12 }} className="max-w-5xl font-display text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[.8] tracking-[-.045em] text-ivory">
            Where Bollywood<br /><em className="text-champagne">Meets</em> the World Stage
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .3 }} className="mt-8 max-w-xl text-sm leading-7 text-ivory/75 sm:text-base">
            India&apos;s premier female live performer — Bollywood · Pop · Rock · Funk · EDM · Acoustic. Available for weddings, corporate events, clubs and private shows worldwide.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .42 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#booking" className="group inline-flex items-center gap-3 bg-champagne px-6 py-4 font-editorial text-sm font-semibold uppercase tracking-[.16em] text-ink transition-all hover:bg-ivory">
              Book Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#media" className="group inline-flex items-center gap-3 border border-ivory/35 bg-ink/20 px-6 py-4 font-editorial text-sm font-semibold uppercase tracking-[.16em] text-ivory backdrop-blur-sm transition-all hover:border-champagne hover:text-champagne">
              <Play className="h-4 w-4 fill-current" /> Watch Showreel
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .6 }} className="mt-14 flex w-fit items-center gap-3 border border-champagne/35 bg-ink/55 px-4 py-3 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-electric" />
          <span className="font-editorial text-xs uppercase tracking-[.18em] text-champagne">Live performer · Band available · Worldwide bookings</span>
        </motion.div>
        <a href="#about" className="absolute bottom-0 right-5 hidden items-center gap-3 font-editorial text-[10px] uppercase tracking-[.25em] text-smoke transition-colors hover:text-champagne sm:flex lg:right-12"><span className="flex h-12 w-8 items-start justify-center border border-smoke/50 pt-2"><ArrowDown className="h-3 w-3 animate-bounce" /></span>Scroll to explore</a>
      </div>
    </section>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1500, 1);
      setCount(Math.floor(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);
  return <span ref={elementRef}>{count}{suffix}</span>;
}

function SectionIntro({ number, eyebrow, title, copy, light = false }: { number: string; eyebrow: string; title: React.ReactNode; copy?: string; light?: boolean }) {
  return (
    <div className="mb-14 flex flex-col justify-between gap-7 lg:mb-20 lg:flex-row lg:items-end">
      <div>
        <div className="mb-5 flex items-center gap-3"><span className="font-editorial text-xs tracking-[.2em] text-champagne">{number}</span><span className="h-px w-12 bg-champagne/70" /><span className="eyebrow text-smoke">{eyebrow}</span></div>
        <h2 className={`max-w-4xl font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[.84] tracking-[-.04em] ${light ? "text-ink" : "text-ivory"}`}>{title}</h2>
      </div>
      {copy && <p className={`max-w-sm text-sm leading-7 ${light ? "text-ink/65" : "text-smoke"}`}>{copy}</p>}
    </div>
  );
}

function About() {
  const stats = [{ value: 500, suffix: "+", label: "Shows performed" }, { value: 15, suffix: "+", label: "Countries reached" }, { value: 10000, suffix: "+", label: "Guests captivated" }, { value: 20, suffix: "+", label: "Years on stage" }];
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal><SectionIntro number="01" eyebrow="The artist" title={<>A force of nature.<br /><em className="text-wine">A stage like no other.</em></>} copy="Bhaswati Sengupta is a high-energy, versatile female Bollywood performer with the vocal range and stage intelligence to command every kind of room." light /></Reveal>
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <Reveal direction="left"><div className="relative aspect-[4/5] overflow-hidden bg-wine"><img src="https://picsum.photos/seed/bhaswati-portrait/1000/1250" alt="Bhaswati Sengupta portrait" className="h-full w-full object-cover mix-blend-luminosity opacity-90 transition duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-transparent to-transparent" /><span className="absolute bottom-6 left-6 font-editorial text-xs uppercase tracking-[.2em] text-champagne">Bhaswati Sengupta / Mumbai</span></div></Reveal>
          <Reveal direction="right"><div className="flex flex-col justify-center">
            <p className="font-display text-3xl leading-tight sm:text-4xl">A voice that carries the <em className="text-wine">emotion</em> of home, and the electricity of a world stage.</p>
            <div className="mt-8 space-y-5 text-sm leading-7 text-ink/70"><p>Trained in the discipline of riyaaz and shaped by a life of live performance, Bhaswati brings a rare blend of warmth, control and magnetic stage presence. Her work spans playback vocals, original music and high-impact live entertainment.</p><p>From intimate acoustic Bollywood sets to explosive EDM-infused spectacles with a full live band, every show is built to feel personal, precise and impossible to forget. She has worked with Sachin-Jigar, Amjad Nadeem Aamir and Benny John, and continues to create performances that connect across cultures and continents.</p></div>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 border-t border-ink/15 pt-8 sm:grid-cols-4">{stats.map((stat) => <div key={stat.label}><div className="font-display text-4xl text-wine sm:text-5xl"><CountUp value={stat.value} suffix={stat.suffix} /></div><div className="mt-1 font-editorial text-[10px] uppercase tracking-[.16em] text-ink/55">{stat.label}</div></div>)}</div>
          </div></Reveal>
        </div>
        <Reveal><blockquote className="mx-auto mt-24 max-w-4xl border-y border-ink/20 py-10 text-center font-display text-3xl italic leading-tight sm:text-5xl">“The room changes the moment she sings. That is the kind of artist you remember.”</blockquote></Reveal>
      </div>
    </section>
  );
}

function Shows() {
  return (
    <section id="shows" className="bg-night py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><Reveal><SectionIntro number="02" eyebrow="Signature performances" title={<>Choose your<br /><em className="text-champagne">kind of magic.</em></>} copy="One artist, six distinct ways to make an audience feel something. Every format is custom-built for the room, the audience and the occasion." /></Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{showFormats.map((show, i) => { const Icon = [Mic2, Volume2, Music2, Heart, Briefcase, Sparkles][i]; return <Reveal key={show.title} delay={i * .06} direction="scale"><motion.article whileHover={{ y: -8 }} className={`group relative overflow-hidden border bg-gradient-to-br p-7 transition-shadow duration-500 hover:shadow-gold sm:p-9 ${showToneClasses[show.tone]}`}><div className="absolute right-6 top-5 font-display text-5xl italic text-ivory/10 transition-colors group-hover:text-champagne/20">{show.number}</div><div className="mb-16 flex h-12 w-12 items-center justify-center border border-champagne/40 text-champagne"><Icon className="h-5 w-5" /></div><h3 className="max-w-xs font-display text-3xl leading-[.9] text-ivory">{show.title}</h3><p className="mt-5 max-w-sm text-sm leading-6 text-smoke">{show.description}</p><div className="mt-7 flex flex-wrap gap-2">{show.tags.map((tag) => <span key={tag} className="border border-ivory/15 px-2.5 py-1 font-editorial text-[10px] uppercase tracking-[.14em] text-ivory/65">{tag}</span>)}</div><a href="#booking" className="mt-8 inline-flex items-center gap-2 font-editorial text-xs uppercase tracking-[.18em] text-champagne transition-all group-hover:gap-3">Enquire about this show <ArrowRight className="h-3.5 w-3.5" /></a></motion.article></Reveal>; })}</div>
      </div>
    </section>
  );
}

function Clients() {
  return <section id="clients" className="bg-emerald py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><Reveal><SectionIntro number="03" eyebrow="Built for your brief" title={<>Who books<br /><em className="text-champagne">her.</em></>} copy="For the people who know that the right live act is not background entertainment. It is the moment an event becomes a memory." /></Reveal><div className="grid border-l border-t border-champagne/20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{clients.map((client, i) => { const Icon = iconMap[client.icon]; return <Reveal key={client.title} delay={i * .04}><article className="group min-h-[230px] border-b border-r border-champagne/20 p-7 transition-colors hover:bg-ink/25 sm:p-8"><Icon className="mb-9 h-6 w-6 text-champagne transition-transform group-hover:scale-110" /><h3 className="font-display text-2xl text-ivory">{client.title}</h3><p className="mt-3 text-sm leading-6 text-ivory/60">{client.description}</p></article></Reveal>; })}</div></div></section>;
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  return <section className="overflow-hidden bg-ivory py-24 text-ink sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><Reveal><SectionIntro number="04" eyebrow="Social proof" title={<>The room<br /><em className="text-wine">remembers.</em></>} copy="A few words from the people who trust Bhaswati to make their most important events unforgettable." light /></Reveal><div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-24"><div><AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .45 }}><Quote className="h-12 w-12 text-champagne" /><blockquote className="mt-7 max-w-3xl font-display text-4xl leading-[.98] sm:text-6xl">“{current.quote}”</blockquote><div className="mt-9"><div className="font-semibold">{current.name}</div><div className="mt-1 text-sm text-ink/55">{current.role} · {current.type}</div></div></motion.div></AnimatePresence><div className="mt-12 flex gap-3"><button type="button" aria-label="Previous testimonial" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} className="flex h-12 w-12 items-center justify-center border border-ink/20 transition-colors hover:border-wine hover:text-wine"><ChevronLeft className="h-5 w-5" /></button><button type="button" aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)} className="flex h-12 w-12 items-center justify-center border border-ink/20 transition-colors hover:border-wine hover:text-wine"><ChevronRight className="h-5 w-5" /></button><div className="flex items-center gap-1.5 pl-3">{testimonials.map((item, i) => <button key={item.name} type="button" aria-label={`Show testimonial ${i + 1}`} onClick={() => setActive(i)} className={`h-1 transition-all ${i === active ? "w-8 bg-wine" : "w-3 bg-ink/20"}`} />)}</div></div></div><Reveal direction="right"><div className="relative min-h-[360px] overflow-hidden bg-wine"><img src="https://picsum.photos/seed/bhaswati-testimonial/900/1100" alt="Bhaswati performing for an audience" className="h-full w-full object-cover opacity-80 mix-blend-luminosity" /><div className="absolute inset-0 bg-gradient-to-t from-wine via-transparent to-transparent" /><div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><span className="font-display text-3xl italic text-champagne">Feel it live.</span><span className="font-editorial text-xs uppercase tracking-[.18em] text-ivory/70">★★★★★</span></div></div></Reveal></div></div></section>;
}

function Media() {
  return <section id="media" className="bg-ink py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><Reveal><SectionIntro number="05" eyebrow="Media & showreel" title={<>See the<br /><em className="text-champagne">energy.</em></>} copy="A live show is felt in the details — the first note, the build, the drop, the way a room leans in." /></Reveal><div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]"><Reveal direction="left"><div className="group relative flex aspect-video items-center justify-center overflow-hidden bg-wine"><img src="https://picsum.photos/seed/bhaswati-showreel/1400/900" alt="Bhaswati Sengupta showreel" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-br from-wine/70 via-transparent to-ink/80" /><button type="button" aria-label="Play showreel" className="relative flex h-20 w-20 items-center justify-center rounded-full border border-champagne bg-champagne text-ink transition-transform duration-500 group-hover:scale-110"><Play className="ml-1 h-7 w-7 fill-current" /></button><div className="absolute bottom-5 left-5 right-5 flex items-center justify-between"><span className="font-editorial text-xs uppercase tracking-[.18em] text-champagne">Watch showreel / 02:18</span><ArrowUpRight className="h-5 w-5 text-champagne" /></div></div></Reveal><div className="grid grid-cols-2 gap-3 sm:gap-5">{mediaImages.slice(0, 4).map((image, i) => <Reveal key={image.label} delay={i * .07} direction="scale"><div className="media-frame group aspect-square"><img src={image.src} alt={image.label} loading="lazy" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-100" /><span className="absolute bottom-3 left-3 z-10 font-editorial text-[10px] uppercase tracking-[.14em] text-ivory/80">{image.label}</span></div></Reveal>)}</div></div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{mediaImages.slice(4).map((image, i) => <Reveal key={image.label} delay={i * .08}><div className="media-frame group aspect-[1.4] sm:aspect-[1.7]"><img src={image.src} alt={image.label} loading="lazy" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-100" /><span className="absolute bottom-3 left-3 z-10 font-editorial text-[10px] uppercase tracking-[.14em] text-ivory/80">{image.label}</span></div></Reveal>)}</div></div></section>;
}

function Rider() {
  const icons = [Mic2, Volume2, Music2, Palette, Clock3, Check, Plane];
  return <section className="bg-[#E9E2D6] py-24 text-ink sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><Reveal><SectionIntro number="06" eyebrow="The experience" title={<>Everything your<br /><em className="text-wine">show needs.</em></>} copy="From first briefing to final bow, every detail is handled with care. This is more than a performance — it is a complete live experience." light /></Reveal><div className="grid gap-x-10 gap-y-0 border-t border-ink/15 md:grid-cols-2 lg:grid-cols-3">{riderHighlights.map((item, i) => { const Icon = icons[i]; return <Reveal key={item.title} delay={i * .05}><div className="flex gap-5 border-b border-ink/15 py-7"><div className="flex h-10 w-10 shrink-0 items-center justify-center border border-wine/40 text-wine"><Icon className="h-4 w-4" /></div><div><h3 className="font-display text-2xl">{item.title}</h3><p className="mt-1 text-sm leading-6 text-ink/60">{item.description}</p></div></div></Reveal>; })}</div><Reveal><div className="mt-14 flex flex-col justify-between gap-5 border border-wine/25 bg-wine px-6 py-6 text-ivory sm:flex-row sm:items-center sm:px-8"><div><div className="eyebrow text-champagne">A note for producers</div><p className="mt-2 font-display text-2xl">Professional, prepared, and ready for any stage.</p></div><a href="#booking" className="inline-flex items-center gap-2 font-editorial text-xs uppercase tracking-[.18em] text-champagne">Request the full rider <ArrowUpRight className="h-4 w-4" /></a></div></Reveal></div></section>;
}

function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", organization: "", event: "Wedding", date: "", location: "", budget: "", message: "" });
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const inputClass = "w-full border-b border-ivory/20 bg-transparent px-0 py-3 text-sm text-ivory outline-none transition-colors placeholder:text-ivory/35 focus:border-champagne";
  return <section id="booking" className="relative overflow-hidden bg-wine py-24 sm:py-32"><div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-black/20 to-transparent" /><div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><Reveal><SectionIntro number="07" eyebrow="Make it unforgettable" title={<>Let&apos;s make<br /><em className="text-champagne">your night.</em></>} copy="Tell us about the room, the people and the feeling you want to create. We respond within 24 hours." /></Reveal><div className="grid gap-14 lg:grid-cols-[1fr_.75fr] lg:gap-24"><Reveal direction="left"><form onSubmit={submit} className="grid gap-x-8 gap-y-6 sm:grid-cols-2">{([ ["name", "Your name", "text"], ["organization", "Company / organization", "text"], ["date", "Event date", "text"], ["location", "Location", "text"] ] as const).map(([key, placeholder, type]) => <label key={key} className="focus-ring block border-b border-transparent"><span className="eyebrow text-ivory/55">{placeholder}</span><input required={key === "name"} type={type} value={form[key]} onChange={(event) => update(key, event.target.value)} placeholder={key === "name" ? "Your full name" : key === "organization" ? "Who are we creating for?" : key === "date" ? "DD / MM / YYYY" : "City, country"} className={inputClass} /></label>)}<label className="focus-ring block border-b border-transparent sm:col-span-2"><span className="eyebrow text-ivory/55">Event type</span><select value={form.event} onChange={(event) => update("event", event.target.value)} className={`${inputClass} appearance-none`}><option>Wedding</option><option>Corporate Event</option><option>Club & Nightlife</option><option>Private Show</option><option>Festival</option><option>Other</option></select></label><label className="focus-ring block border-b border-transparent"><span className="eyebrow text-ivory/55">Budget range</span><select value={form.budget} onChange={(event) => update("budget", event.target.value)} className={`${inputClass} appearance-none`}><option value="">Select a range</option><option>Under $5,000</option><option>$5,000 – $15,000</option><option>$15,000 – $30,000</option><option>$30,000+</option></select></label><label className="focus-ring block border-b border-transparent sm:col-span-2"><span className="eyebrow text-ivory/55">Tell us about the show</span><textarea required rows={3} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="The date, the venue, the audience and the feeling..." className={`${inputClass} resize-none`} /></label><div className="flex items-center gap-5 sm:col-span-2"><button type="submit" className="group inline-flex items-center gap-3 bg-champagne px-6 py-4 font-editorial text-sm font-semibold uppercase tracking-[.16em] text-ink transition-colors hover:bg-ivory">{sent ? <>Request received <Check className="h-4 w-4" /></> : <>Send enquiry <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}</button>{sent && <span className="text-xs text-champagne">Thank you — we&apos;ll be in touch shortly.</span>}</div></form></Reveal><Reveal direction="right"><aside className="border-l border-champagne/25 pl-7 sm:pl-10"><div className="eyebrow text-champagne">Booking office</div><a href="mailto:bhaswatis.music@gmail.com" className="mt-4 block font-display text-2xl text-ivory transition-colors hover:text-champagne">bhaswatis.music@gmail.com</a><div className="mt-10 space-y-5 text-sm text-ivory/65"><div className="flex gap-3"><Clock3 className="h-4 w-4 shrink-0 text-champagne" /><span>We respond within 24 hours.</span></div><div className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-champagne" /><span>Mumbai · India / Available worldwide</span></div><div className="flex gap-3"><CalendarDays className="h-4 w-4 shrink-0 text-champagne" /><span>Now accepting 2026 bookings.</span></div></div><div className="mt-14 border-t border-champagne/25 pt-7"><div className="eyebrow text-champagne">Why book direct?</div><p className="mt-4 font-display text-2xl leading-tight text-ivory">One conversation. One creative vision. A show that feels made for your room.</p><p className="mt-4 text-sm leading-6 text-ivory/60">Direct booking means clear communication, a tailored setlist and a production partner who cares about every beat.</p></div></aside></Reveal></div></div></section>;
}

function Footer() {
  const socials = { Instagram, YouTube: Youtube, Facebook, Spotify: Music2, TikTok: Music2 };
  return <footer className="bg-ink py-12 sm:py-16"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-10 border-b border-line pb-10 lg:flex-row lg:items-end"><div><a href="#top" className="font-display text-5xl italic text-champagne">Bhaswati.</a><p className="mt-4 max-w-xs font-display text-2xl leading-tight text-ivory">Transforming every stage into an unforgettable experience.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-3"><div><div className="eyebrow mb-4 text-champagne">Navigate</div>{navLinks.map((link) => <a key={link.href} href={link.href} className="mb-2 block text-sm text-smoke transition-colors hover:text-champagne">{link.label}</a>)}</div><div><div className="eyebrow mb-4 text-champagne">Connect</div>{socialLinks.map((social) => { const Icon = socials[social.label as keyof typeof socials]; return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="mb-2 flex items-center gap-2 text-sm text-smoke transition-colors hover:text-champagne"><Icon className="h-3.5 w-3.5" />{social.label}</a>; })}</div><div className="col-span-2 sm:col-span-1"><div className="eyebrow mb-4 text-champagne">Availability</div><div className="flex items-center gap-2 text-sm text-smoke"><span className="h-2 w-2 rounded-full bg-emerald-400" />Worldwide bookings</div><a href="mailto:bhaswatis.music@gmail.com" className="mt-3 block text-sm text-smoke transition-colors hover:text-champagne">Email the booking office</a></div></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[10px] uppercase tracking-[.16em] text-smoke/60 sm:flex-row"><span>© {new Date().getFullYear()} Bhaswati Sengupta. All rights reserved.</span><span>Female Bollywood live performer · Available worldwide</span></div></div></footer>;
}

function App() {
  return <div className="min-h-screen overflow-x-hidden bg-ink"><Header /><main><Hero /><About /><Shows /><Clients /><Testimonials /><Media /><Rider /><Booking /></main><Footer /><a href="#booking" className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-champagne px-4 py-3 font-editorial text-xs uppercase tracking-[.16em] text-ink shadow-gold transition-transform hover:scale-105 sm:hidden"><Ticket className="h-4 w-4" /> Book</a></div>;
}

export default App;
