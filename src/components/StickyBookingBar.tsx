import { Instagram } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

export default function StickyBookingBar({ content }: { content: SiteContent }) {
  const { contact } = content;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pointer-events-none">
      <div className="px-4 pb-4 pointer-events-auto">
        <a
          href={contact.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-primary text-primary-fg font-display font-bold uppercase text-sm py-3.5 tracking-wide animate-pulse-cta"
        >
          <Instagram className="w-4 h-4 mr-2" />
          Book Now
        </a>
      </div>
    </div>
  );
}
