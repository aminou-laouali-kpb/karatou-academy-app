-- Rapatrié depuis l'historique de production. Tables d'un AUTRE produit (« Viral Script
-- Studio ») qui partage ce projet Supabase ; conservées ici uniquement pour que l'historique
-- local corresponde à la prod. Sans politique RLS : inaccessibles à anon/authenticated.
create table public.vsg_brand_profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  niche text,
  audience text,
  tone text,
  style_notes text,
  example_scripts text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.vsg_extractions (
  id uuid primary key default gen_random_uuid(),
  source_url text not null,
  platform text not null,
  title text,
  duration_seconds numeric,
  transcript text,
  transcript_source text,
  created_at timestamptz not null default now()
);

create table public.vsg_generations (
  id uuid primary key default gen_random_uuid(),
  extraction_id uuid references public.vsg_extractions(id) on delete set null,
  brand_profile_id uuid references public.vsg_brand_profiles(id) on delete set null,
  provider text not null,
  model text,
  extra_instructions text,
  output_script text not null,
  created_at timestamptz not null default now()
);

alter table public.vsg_brand_profiles enable row level security;
alter table public.vsg_extractions enable row level security;
alter table public.vsg_generations enable row level security;
