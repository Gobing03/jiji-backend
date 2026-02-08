create table profiles (
  id uuid references auth.users on delete cascade,
  name text,
  primary key (id)
);

create table resources (
  id uuid default gen_random_uuid() primary key,
  title text,
  description text,
  ppt_url text,
  video_url text,
  topic text
);

create table queries (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id),
  query_text text,
  created_at timestamp default now()
);
