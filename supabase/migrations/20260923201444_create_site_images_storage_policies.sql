/*
# Create storage policies for site-images bucket

Creates RLS policies on storage.objects to allow anon + authenticated CRUD
on objects in the site-images bucket. Uses Supabase storage helper functions.
*/

DROP POLICY IF EXISTS "anon_read_site_images" ON storage.objects;
CREATE POLICY "anon_read_site_images"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'site-images');

DROP POLICY IF EXISTS "anon_insert_site_images" ON storage.objects;
CREATE POLICY "anon_insert_site_images"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'site-images');

DROP POLICY IF EXISTS "anon_update_site_images" ON storage.objects;
CREATE POLICY "anon_update_site_images"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'site-images')
WITH CHECK (bucket_id = 'site-images');

DROP POLICY IF EXISTS "anon_delete_site_images" ON storage.objects;
CREATE POLICY "anon_delete_site_images"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id = 'site-images');
