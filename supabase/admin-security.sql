-- Run in Supabase SQL Editor after creating the admin user in Authentication.
-- Replace the email below with that user's email before running the final UPDATE.

-- Grant the admin role in app_metadata (users cannot edit app_metadata themselves).
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
where email = 'YOUR_ADMIN_EMAIL';

create or replace function public.is_site_admin()
returns boolean
language sql
stable
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

alter table public.projects enable row level security;
alter table public.messages enable row level security;
alter table public.feedbacks enable row level security;
alter table public.blogs enable row level security;
alter table public.services enable row level security;

-- Public site reads. Admin policies below also allow admins to read unpublished rows.
drop policy if exists "site can read projects" on public.projects;
create policy "site can read projects" on public.projects for select to anon, authenticated using (true);
drop policy if exists "site can read blogs" on public.blogs;
create policy "site can read blogs" on public.blogs for select to anon, authenticated using (true);
drop policy if exists "site can read services" on public.services;
create policy "site can read services" on public.services for select to anon, authenticated using (true);
drop policy if exists "site can read approved feedback" on public.feedbacks;
create policy "site can read approved feedback" on public.feedbacks for select to anon, authenticated using (is_approved = true);

-- Contact form submissions remain public; only admins can read/manage them.
drop policy if exists "public can submit contact messages" on public.messages;
create policy "public can submit contact messages" on public.messages for insert to anon, authenticated with check (true);

-- Admin CRUD for content, messages, and reviews.
drop policy if exists "admin manages projects" on public.projects;
create policy "admin manages projects" on public.projects for all to authenticated using (public.is_site_admin()) with check (public.is_site_admin());
drop policy if exists "admin manages messages" on public.messages;
create policy "admin manages messages" on public.messages for all to authenticated using (public.is_site_admin()) with check (public.is_site_admin());
drop policy if exists "admin manages feedback" on public.feedbacks;
create policy "admin manages feedback" on public.feedbacks for all to authenticated using (public.is_site_admin()) with check (public.is_site_admin());
drop policy if exists "admin manages blogs" on public.blogs;
create policy "admin manages blogs" on public.blogs for all to authenticated using (public.is_site_admin()) with check (public.is_site_admin());
drop policy if exists "admin manages services" on public.services;
create policy "admin manages services" on public.services for all to authenticated using (public.is_site_admin()) with check (public.is_site_admin());

-- The portfolio-images bucket should be public for website image URLs, but writes are admin-only.
drop policy if exists "public can read portfolio images" on storage.objects;
create policy "public can read portfolio images" on storage.objects for select to anon, authenticated using (bucket_id = 'portfolio-images');
drop policy if exists "admin uploads portfolio images" on storage.objects;
create policy "admin uploads portfolio images" on storage.objects for insert to authenticated with check (bucket_id = 'portfolio-images' and public.is_site_admin());
drop policy if exists "admin updates portfolio images" on storage.objects;
create policy "admin updates portfolio images" on storage.objects for update to authenticated using (bucket_id = 'portfolio-images' and public.is_site_admin()) with check (bucket_id = 'portfolio-images' and public.is_site_admin());
drop policy if exists "admin deletes portfolio images" on storage.objects;
create policy "admin deletes portfolio images" on storage.objects for delete to authenticated using (bucket_id = 'portfolio-images' and public.is_site_admin());
