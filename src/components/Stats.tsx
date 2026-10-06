import { useEffect, useRef, useState } from "react";
import { statsData } from "@/data/epkData";
import Reveal from "@/components/Reveal";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 2000;
          const startTime = performance.now();
          function tick(now: number) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative z-10 bg-[#111111] border-b border-border overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(220,20,60,0.05), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {statsData.map((stat, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1} duration={0.6}>
              <div className="text-center">
                <div
                  className="font-display font-bold text-primary leading-none mb-2"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-secondary text-[10px] md:text-xs uppercase tracking-[0.2em] font-light">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
