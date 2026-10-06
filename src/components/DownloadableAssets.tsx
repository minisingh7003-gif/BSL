import { Download, FileText, Image, Layout, Music } from "lucide-react";
import { downloadableAssets } from "@/data/epkData";
import Reveal from "@/components/Reveal";

const iconMap: Record<string, React.ReactNode> = {
  file: <FileText className="w-6 h-6" />,
  image: <Image className="w-6 h-6" />,
  layout: <Layout className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
};

export default function DownloadableAssets() {
  return (
    <section className="relative z-10 bg-[#111111] border-b border-border overflow-hidden">
      <div
        className="absolute -top-20 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(220,20,60,0.05), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
        <Reveal direction="up" duration={0.8}>
          <h2
            className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Download <span className="text-primary">Assets</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1} duration={0.7}>
          <p className="text-secondary text-sm font-light leading-relaxed max-w-lg mb-12">
            Press materials, high-resolution photos, and technical documents for promoters and venues.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {downloadableAssets.map((asset, i) => (
            <Reveal key={i} direction="up" delay={i * 0.08} duration={0.6}>
              <a
                href={asset.url}
                className="group glass-card p-6 flex flex-col h-full transition-all duration-300 hover:border-primary hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative flex items-center justify-between mb-4">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                    {iconMap[asset.icon] || <FileText className="w-6 h-6" />}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted border border-border px-2 py-1">
                    {asset.fileType}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-sm uppercase leading-tight mb-2 relative">
                  {asset.title}
                </h3>
                <p className="text-secondary text-[11px] font-light leading-relaxed mb-4 flex-1 relative">
                  {asset.description}
                </p>
                <div className="flex items-center justify-between relative">
                  <span className="text-muted text-[10px] uppercase tracking-wider">{asset.fileSize}</span>
                  <span className="inline-flex items-center gap-1.5 text-primary text-[10px] uppercase tracking-wider font-display font-bold transition-all group-hover:gap-3">
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
