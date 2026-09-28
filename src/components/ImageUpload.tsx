import { useRef, useState } from "react";
import { Upload, Loader2, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  folder: string;
  label?: string;
  aspectRatio?: string;
}

export default function ImageUpload({
  value,
  onChange,
  folder,
  label,
  aspectRatio = "h-32",
}: ImageUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be under 10MB");
      return;
    }

    setError("");
    setUploading(true);

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from("site-images")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("site-images")
        .getPublicUrl(fileName);

      onChange(data.publicUrl);
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div>
      {label && (
        <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block">
          {label}
        </label>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />

      <div className="flex items-stretch gap-2">
        {/* Upload button */}
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="shrink-0 inline-flex items-center gap-2 bg-card border border-border text-secondary px-3 py-2 text-xs uppercase tracking-wider transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
        >
          {uploading ? (
            <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Uploading...</>
          ) : (
            <><Upload className="w-3.5 h-3.5" /> Upload</>
          )}
        </button>

        {/* Clear button */}
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="shrink-0 inline-flex items-center gap-1 border border-border text-muted px-2 py-2 text-xs transition-colors hover:border-accent hover:text-accent"
            aria-label="Remove image"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        {/* URL display (read-only) */}
        <div className="flex-1 min-w-0">
          <div className="bg-card border border-border px-3 py-2 text-[10px] text-muted font-light truncate">
            {value || "No image uploaded"}
          </div>
        </div>
      </div>

      {error && (
        <p className="text-accent text-[10px] mt-1.5">{error}</p>
      )}

      {/* Preview */}
      {value && (
        <div className={`mt-2 w-full ${aspectRatio} object-cover border border-border overflow-hidden`}>
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
