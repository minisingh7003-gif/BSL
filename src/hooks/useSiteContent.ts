import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { defaultContent, type SiteContent } from "@/data/epkData";

const SECTIONS = ["hero", "about", "music", "photos", "contact", "footer"] as const;
type Section = (typeof SECTIONS)[number];

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const { data, error } = await supabase
          .from("site_content")
          .select("section, data");

        if (error) throw error;
        if (cancelled) return;

        if (data && data.length > 0) {
          const merged = { ...defaultContent };
          for (const row of data) {
            const section = row.section as Section;
            if (section in merged) {
              merged[section] = { ...merged[section], ...row.data };
            }
          }
          setContent(merged);
        }
      } catch (err) {
        console.error("Failed to load site content, using defaults:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  const saveSection = useCallback(async (section: Section, data: Record<string, unknown>) => {
    const { error } = await supabase
      .from("site_content")
      .upsert({ section, data }, { onConflict: "section" });

    if (error) throw error;

    setContent((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  }, []);

  return { content, loading, saveSection };
}
