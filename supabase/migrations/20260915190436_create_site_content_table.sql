/*
# Create site_content table — CMS for Bhaswati Sengupta EPK

1. New Tables
- `site_content`
  - `id` (uuid, primary key, default gen_random_uuid())
  - `section` (text, unique, not null) — identifies which section: hero, about, music, photos, video, contact, footer
  - `data` (jsonb, not null, default '{}') — flexible JSON column holding all editable content for that section
  - `updated_at` (timestamptz, default now()) — timestamp of last edit

2. Security
- Enable RLS on `site_content`.
- Allow anon + authenticated full CRUD because this is a single-tenant CMS with no sign-in required for reading; editing is gated by a simple password check in the frontend.
- All data is intentionally public/shared (it renders on the public EPK).

3. Important Notes
- The `data` jsonb column stores different shapes per section. For example:
  - hero: { title, subtitle, ctaLabel, ctaUrl, backgroundImage }
  - about: { heading, paragraphs[], image1, image2, facts[] }
  - music: { releases[] }
  - photos: { photos[] }
  - video: { title, subtitle, url, thumbnail }
  - contact: { heading, blurb, contacts[] }
  - footer: { socials[], streaming[] }
- The frontend reads from this table on page load; if no rows exist, it falls back to hardcoded defaults.
- Editing is protected by a password gate in the admin panel (stored as a frontend constant, not in the database).
*/

CREATE TABLE IF NOT EXISTS site_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text UNIQUE NOT NULL,
  data jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_site_content" ON site_content;
CREATE POLICY "anon_select_site_content"
  ON site_content FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "anon_insert_site_content" ON site_content;
CREATE POLICY "anon_insert_site_content"
  ON site_content FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_site_content" ON site_content;
CREATE POLICY "anon_update_site_content"
  ON site_content FOR UPDATE
  TO anon, authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_site_content" ON site_content;
CREATE POLICY "anon_delete_site_content"
  ON site_content FOR DELETE
  TO anon, authenticated
  USING (true);
