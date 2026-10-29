-- =====================================================================
-- Digital Suraksha: initial schema, RLS policies, and aggregate functions
-- Relationships:
--   learning_modules 1 ── * quiz_questions
--   workshops        1 ── * assessment_results
--   workshops        1 ── * participant_feedback
-- No names, phone numbers or banking data are stored anywhere.
-- =====================================================================

-- ---------- Tables ----------

create table public.learning_modules (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null,
  language     text not null check (language in ('en', 'ta')),
  title        text not null,
  description  text not null,
  content      jsonb not null default '{}'::jsonb,
  category     text not null,
  is_published boolean not null default true,
  created_at   timestamptz not null default now(),
  unique (slug, language)
);

create table public.quiz_questions (
  id             uuid primary key default gen_random_uuid(),
  module_id      uuid references public.learning_modules(id) on delete set null,
  language       text not null check (language in ('en', 'ta')),
  question       text not null,
  options        jsonb not null,
  correct_answer integer not null,            -- zero-based index into options
  explanation    text not null,
  created_at     timestamptz not null default now(),
  check (jsonb_typeof(options) = 'array'),
  check (jsonb_array_length(options) between 3 and 4),
  check (correct_answer >= 0 and correct_answer < jsonb_array_length(options))
);
create index quiz_questions_module_idx on public.quiz_questions (module_id);

create table public.workshops (
  id                uuid primary key default gen_random_uuid(),
  title             text not null check (char_length(title) between 3 and 150),
  location          text not null check (char_length(location) between 2 and 150),
  workshop_date     date not null,
  participant_count integer not null check (participant_count >= 0),
  is_published      boolean not null default false,  -- you decide when it becomes public
  created_at        timestamptz not null default now()
);
create index workshops_date_idx on public.workshops (workshop_date desc);

create table public.assessment_results (
  id               uuid primary key default gen_random_uuid(),
  workshop_id      uuid not null references public.workshops(id) on delete cascade,
  assessment_type  text not null check (assessment_type in ('pre-test', 'post-test')),
  participant_code text check (participant_code ~ '^[A-Z0-9]{6,12}$'),  -- random, anonymous
  score            integer not null,
  total_questions  integer not null check (total_questions between 1 and 50),
  created_at       timestamptz not null default now(),
  check (score between 0 and total_questions)
);
-- One pre-test and one post-test per anonymous code per workshop
create unique index assessment_one_per_code
  on public.assessment_results (workshop_id, participant_code, assessment_type)
  where participant_code is not null;
create index assessment_workshop_type_idx
  on public.assessment_results (workshop_id, assessment_type);

create table public.participant_feedback (
  id          uuid primary key default gen_random_uuid(),
  workshop_id uuid not null references public.workshops(id) on delete cascade,
  rating      smallint not null check (rating between 1 and 5),
  feedback    text check (feedback is null or char_length(feedback) <= 500),
  is_approved boolean not null default false,   -- only you can approve (via dashboard)
  created_at  timestamptz not null default now()
);
create index feedback_workshop_idx on public.participant_feedback (workshop_id);

-- ---------- Privileges (explicit, least-privilege) ----------

revoke all on public.learning_modules, public.quiz_questions, public.workshops,
              public.assessment_results, public.participant_feedback
  from anon, authenticated;

grant select on public.learning_modules, public.quiz_questions, public.workshops
  to anon, authenticated;
grant select, insert on public.participant_feedback to anon, authenticated;
grant insert on public.assessment_results to anon, authenticated;

-- ---------- Row Level Security ----------

alter table public.learning_modules    enable row level security;
alter table public.quiz_questions      enable row level security;
alter table public.workshops           enable row level security;
alter table public.assessment_results  enable row level security;
alter table public.participant_feedback enable row level security;

create policy "Public can read published modules"
  on public.learning_modules for select to anon, authenticated
  using (is_published);

create policy "Public can read quiz questions"
  on public.quiz_questions for select to anon, authenticated
  using (true);

create policy "Public can read published workshops"
  on public.workshops for select to anon, authenticated
  using (is_published);

-- Assessments: insert-only. No SELECT policy exists, so rows can't be read back.
create policy "Anyone can submit an assessment for a published workshop"
  on public.assessment_results for insert to anon, authenticated
  with check (
    exists (select 1 from public.workshops w
            where w.id = workshop_id and w.is_published)
  );

-- Feedback: insert-only for new (unapproved) rows; only approved rows are readable.
create policy "Anyone can submit feedback for a published workshop"
  on public.participant_feedback for insert to anon, authenticated
  with check (
    is_approved = false
    and exists (select 1 from public.workshops w
                where w.id = workshop_id and w.is_published)
  );

create policy "Public can read approved feedback"
  on public.participant_feedback for select to anon, authenticated
  using (is_approved);

-- ---------- Aggregate functions (no individual records exposed) ----------

create or replace function public.get_impact_stats()
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select jsonb_build_object(
    'workshops_conducted',
      (select count(*) from public.workshops where is_published),
    'participants_trained',
      (select coalesce(sum(participant_count), 0) from public.workshops where is_published),
    'modules_covered',
      (select count(distinct slug) from public.learning_modules where is_published),
    'pre_test_count',
      (select count(*) from public.assessment_results r
         join public.workshops w on w.id = r.workshop_id and w.is_published
        where r.assessment_type = 'pre-test'),
    'post_test_count',
      (select count(*) from public.assessment_results r
         join public.workshops w on w.id = r.workshop_id and w.is_published
        where r.assessment_type = 'post-test'),
    'avg_pre_pct',
      (select round(avg(100.0 * r.score / r.total_questions), 1)
         from public.assessment_results r
         join public.workshops w on w.id = r.workshop_id and w.is_published
        where r.assessment_type = 'pre-test'),
    'avg_post_pct',
      (select round(avg(100.0 * r.score / r.total_questions), 1)
         from public.assessment_results r
         join public.workshops w on w.id = r.workshop_id and w.is_published
        where r.assessment_type = 'post-test'),
    'feedback_count',
      (select count(*) from public.participant_feedback f
         join public.workshops w on w.id = f.workshop_id and w.is_published),
    'avg_rating',
      (select round(avg(f.rating), 2) from public.participant_feedback f
         join public.workshops w on w.id = f.workshop_id and w.is_published)
  );
$$;

-- Same-person comparison; hidden until there are at least 5 matched pairs
create or replace function public.get_paired_improvement()
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  with pairs as (
    select 100.0 * pre.score  / pre.total_questions  as pre_pct,
           100.0 * post.score / post.total_questions as post_pct
      from public.assessment_results pre
      join public.assessment_results post
        on post.workshop_id = pre.workshop_id
       and post.participant_code = pre.participant_code
       and post.assessment_type = 'post-test'
      join public.workshops w on w.id = pre.workshop_id and w.is_published
     where pre.assessment_type = 'pre-test'
       and pre.participant_code is not null
  )
  select case
    when count(*) >= 5 then jsonb_build_object(
      'pairs', count(*),
      'avg_pre_pct',  round(avg(pre_pct), 1),
      'avg_post_pct', round(avg(post_pct), 1))
    else jsonb_build_object('pairs', count(*))
  end
  from pairs;
$$;

revoke execute on function public.get_impact_stats()        from public;
revoke execute on function public.get_paired_improvement()  from public;
grant  execute on function public.get_impact_stats()        to anon, authenticated;
grant  execute on function public.get_paired_improvement()  to anon, authenticated;