-- Allow anyone to write scores for public events
-- (Admin PIN in the app controls who can actually enter admin mode)
drop policy if exists "owner score write" on public.scores;
create policy "public score write" on public.scores
  for all using (
    exists (select 1 from public.events e
            where e.id = event_id and e.is_public = true)
  );

drop policy if exists "owner namemap write" on public.name_maps;
create policy "public namemap write" on public.name_maps
  for all using (
    exists (select 1 from public.events e
            where e.id = event_id and e.is_public = true)
  );
