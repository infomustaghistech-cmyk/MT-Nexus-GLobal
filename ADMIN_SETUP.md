# Admin panel setup

## Local Supabase configuration

The ignored `.env` file contains the public Supabase project URL and anon/publishable key used by the browser app. These values are not an admin password or a server secret; Supabase Row Level Security (RLS) must protect the database. Never put a `service_role` key in a `VITE_` variable or any frontend file.

For a fresh checkout, copy `.env.example` to `.env` and fill in the Supabase project URL and anon/publishable key. Add the same two variables to the hosting provider's build environment before deployment. Vite embeds `VITE_` values into the browser bundle, so moving the anon key to `.env` prevents accidental repository commits but does not make the key secret.

## Create the administrator

1. In Supabase Dashboard, create or invite the administrator under **Authentication → Users** and set a strong password.
2. Open `supabase/admin-security.sql`, replace `YOUR_ADMIN_EMAIL` with that account's email, and run it in **SQL Editor**. This grants the account an `app_metadata.role` of `admin`.
3. Sign out and back in to refresh the JWT after changing `app_metadata`.
4. Confirm the `portfolio-images` Storage bucket exists and is set to public so existing portfolio image URLs can load. The SQL file restricts writes to users with the admin role.

The existing admin screen now signs in with Supabase Auth; the old `admin` / `admin123` browser-side credentials have been removed. Access is also enforced by the RLS policies in the SQL setup, not only by hiding the admin UI.

## Existing policy review

Before deploying the SQL, review the current policies in **Database → Policies**. PostgreSQL combines permissive policies with `OR`, so any older broad write policy can still allow anonymous changes after these policies are added. Remove old policies that grant public insert/update/delete access to content or messages. Keep public read access for portfolio content, approved feedback, and public image delivery, plus public insert for the contact form.

The SQL expects the current tables `projects`, `messages`, `feedbacks`, `blogs`, and `services`, and the existing `feedbacks.is_approved` column.
