import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 velvet-button text-primary-fg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
      style={{ boxShadow: "0 0 20px rgba(255,30,66,0.4)" }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
