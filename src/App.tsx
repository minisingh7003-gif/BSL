import { useState, useEffect, useRef } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Photos from "@/components/Photos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import AdminPanel from "@/components/AdminPanel";
import ScrollProgress from "@/components/ScrollProgress";

function App() {
  const { content, loading } = useSiteContent();
  const [showAdmin, setShowAdmin] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#admin") {
      setShowAdmin(true);
    }
  }, []);

  useEffect(() => {
    if (showAdmin) return;
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
  }, [showAdmin]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="font-display font-bold text-primary text-lg uppercase tracking-[0.3em] animate-pulse">
          Loading
        </div>
      </div>
    );
  }

  if (showAdmin) {
    return <AdminPanel onClose={() => { setShowAdmin(false); window.location.hash = ""; }} />;
  }

  return (
    <div className="relative min-h-screen w-full bg-bg overflow-x-hidden">
      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[5] hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(197,160,89,0.06), transparent 60%)",
          transform: "translate(-200px, -200px)",
          transition: "opacity 0.3s",
        }}
      />

      <ScrollProgress />
      <Nav content={content} />
      <main>
        <Hero content={content} />
        <About content={content} />
        <Music content={content} />
        <Photos content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
      <StickyBookingBar content={content} />
    </div>
  );
}

export default App;
