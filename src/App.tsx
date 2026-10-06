import { useState, useEffect, useRef } from "react";
import { defaultContent } from "@/data/epkData";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Photos from "@/components/Photos";
import Stats from "@/components/Stats";
import PressCoverage from "@/components/PressCoverage";
import DownloadableAssets from "@/components/DownloadableAssets";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

function App() {
  const content = defaultContent;
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    function onMove(e: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
        }
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-bg overflow-x-hidden">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[5] hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(220,20,60,0.06), transparent 60%)",
          transform: "translate(-200px, -200px)",
          transition: "opacity 0.3s",
        }}
      />

      <ScrollProgress />
      <Nav content={content} />
      <main>
        <Hero content={content} />
        <About content={content} />
        <Stats />
        <Music content={content} />
        <Photos content={content} />
        <PressCoverage />
        <DownloadableAssets />
        <Contact content={content} />
      </main>
      <Footer content={content} />
      <StickyBookingBar content={content} />
      <BackToTop />
    </div>
  );
}

export default App;
