-- ── KOB Platform Schema ───────────────────────────────────────────────────────

-- Events: one row per tournament/league
create table if not exists public.events (
  id          uuid primary key default gen_random_uuid(),
  owner_id    uuid references auth.users(id) on delete cascade not null,
  title       text not null default 'Event',
  format      text not null default 'traditional_tournament',
  sd_json     jsonb not null default '{}',
  admin_pin   text,
  is_public   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Scores: one row per score key per event (atomic updates, no blob overwrites)
create table if not exists public.scores (
  id          uuid primary key default gen_random_uuid(),
  event_id    uuid references public.events(id) on delete cascade not null,
  score_key   text not null,
  s1          integer,
  s2          integer,
  updated_at  timestamptz not null default now(),
  unique(event_id, score_key)
);

-- Name maps: organizer renames for display
create table if not exists public.name_maps (
  id          uuid primary key default gen_random_uuid(),
  event_id    uuid references public.events(id) on delete cascade not null,
  original    text not null,
  display     text not null,
  unique(event_id, original)
);

-- ── Row Level Security ────────────────────────────────────────────────────────

alter table public.events   enable row level security;
alter table public.scores   enable row level security;
alter table public.name_maps enable row level security;

-- Events: owner can do everything; anyone can read public events
create policy "owner full access" on public.events
  for all using (auth.uid() = owner_id);

create policy "public read" on public.events
  for select using (is_public = true);

-- Scores: anyone can read scores for public events;
--         only owner can write (admin PIN check happens in app)
create policy "public score read" on public.scores
  for select using (
    exists (select 1 from public.events e
            where e.id = event_id and e.is_public = true)
  );

create policy "owner score write" on public.scores
  for all using (
    exists (select 1 from public.events e
            where e.id = event_id and e.owner_id = auth.uid())
  );

-- Name maps: same pattern
create policy "public namemap read" on public.name_maps
  for select using (
    exists (select 1 from public.events e
            where e.id = event_id and e.is_public = true)
  );

create policy "owner namemap write" on public.name_maps
  for all using (
    exists (select 1 from public.events e
            where e.id = event_id and e.owner_id = auth.uid())
  );

-- ── Updated_at trigger ────────────────────────────────────────────────────────
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

create trigger events_updated_at   before update on public.events
  for each row execute function public.touch_updated_at();
create trigger scores_updated_at   before update on public.scores
  for each row execute function public.touch_updated_at();

-- ── Realtime ─────────────────────────────────────────────────────────────────
-- Enable realtime for scores so all viewers update live
alter publication supabase_realtime add table public.scores;
alter publication supabase_realtime add table public.name_maps;
