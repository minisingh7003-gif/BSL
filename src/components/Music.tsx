import { useState } from "react";
import { Play } from "lucide-react";
import type { SiteContent, ReleaseItem, VideoItem } from "@/data/epkData";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
  return match ? match[1] : "";
}

function ShowcaseVideo({ video, index }: { video: VideoItem; index: number }) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYouTubeId(video.url);

  return (
    <Reveal direction="up" delay={index * 0.1} duration={0.6}>
      <TiltCard maxTilt={6} className="release-card group border border-border bg-card overflow-hidden h-full">
        {playing ? (
          <div className="relative aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group block relative w-full overflow-hidden cursor-pointer"
            aria-label={`Play ${video.title}`}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-bg/20 group-hover:bg-bg/5 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse-cta rounded-full">
                  <Play className="w-5 h-5 text-primary fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </button>
        )}
        <div className="p-4 border-t border-border">
          <h3 className="font-display font-bold text-white text-sm uppercase leading-tight">
            {video.title}
          </h3>
          <p className="text-secondary text-[10px] mt-1 font-light leading-relaxed">
            {video.description}
          </p>
        </div>
      </TiltCard>
    </Reveal>
  );
}

function ReleaseCard({ release, index }: { release: ReleaseItem; index: number }) {
  return (
    <Reveal direction="scale" delay={index * 0.08} duration={0.6}>
      <TiltCard maxTilt={6} className="release-card border border-border bg-card group h-full">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={release.cover}
            alt={release.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute top-0 left-0 font-display font-bold uppercase text-[10px] tracking-wider px-3 py-1.5 text-primary-fg z-[2]"
            style={{ background: release.tagColor || "#DC143C" }}
          >
            {release.type}
          </div>
        </div>
        <div className="p-4 border-t border-border">
          <h3 className="font-display font-bold text-white text-sm uppercase leading-tight">
            {release.title}
          </h3>
          <p className="text-secondary text-[10px] uppercase tracking-wider mt-1">
            {release.year} · {release.streams}
          </p>
          <div className="flex gap-2 mt-3">
            {release.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-[10px] uppercase tracking-wider border border-border px-2.5 py-1.5 transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}

export default function Music({ content }: { content: SiteContent }) {
  const { music } = content;

  const words = music.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(music.highlightWord.toLowerCase())
  );

  return (
    <section id="music" className="relative z-10 bg-[#111111] border-b border-border overflow-hidden">
      <div
        className="absolute top-1/3 -left-40 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(220,20,60,0.04), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
        <Reveal direction="up" duration={0.8}>
          <h2
            className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            {words.map((word, i) => (
              <span key={i} className={i === highlightIdx ? "text-primary" : ""}>
                {word}{i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1} duration={0.7}>
          <p className="text-secondary text-sm font-light leading-relaxed max-w-lg mb-10">
            {music.showcaseDescription}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-px md:bg-border mb-20">
          {music.showcaseVideos.map((video, i) => (
            <ShowcaseVideo key={i} video={video} index={i} />
          ))}
        </div>

        <Reveal direction="up" duration={0.7}>
          <h3
            className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-2"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            My voice, pressed to <span className="text-primary">record</span>
          </h3>
        </Reveal>
        <Reveal direction="up" delay={0.1} duration={0.6}>
          <p className="text-secondary text-sm font-light leading-relaxed max-w-lg mb-10">
            The songs I have lived in — released playback work and an original that is entirely mine. When you book me, you are booking a recording voice, not a karaoke track with a microphone.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-px md:bg-border">
          {music.releases.map((release, i) => (
            <ReleaseCard key={i} release={release} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
