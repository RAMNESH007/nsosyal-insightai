-- Enable pgvector extension
create extension if not exists vector;

-- Users Table
create table users (
  id uuid references auth.users not null primary key,
  username text unique not null,
  avatar_url text,
  role text default 'viewer',
  language text default 'tr',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User Preferences (For AI Engine)
create table user_preferences (
  user_id uuid references users(id) primary key,
  topic_weights jsonb default '{}'::jsonb,
  negativity_pref float default 0.5,
  freshness_weight float default 0.8,
  social_weight float default 0.5,
  quality_weight float default 0.8,
  pace_mode text default 'balanced',
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Content (Posts)
create table content (
  id uuid default uuid_generate_v4() primary key,
  creator_id uuid references users(id),
  text text,
  media_url text,
  topic text,
  embedding vector(384), -- embedding for topic matching
  quality_score float default 1.0,
  toxicity_score float default 0.0,
  emotion_score float default 0.0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Interactions
create table interactions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references users(id),
  content_id uuid references content(id),
  type text not null, -- 'view', 'like', 'share', 'comment'
  timestamp timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Recommendation Explanations
create table recommendation_explanations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references users(id),
  content_id uuid references content(id),
  topic_match float,
  freshness float,
  social_proximity float,
  quality_score float,
  final_score float,
  reason text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
