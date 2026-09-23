# Week 2: Supabase Reading List

A Next.js App Router project that reads rows from a Supabase `favorite_books` table and renders them as a card list.

## Supabase setup

1. Create a Supabase project.
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL Editor. It creates the table, enables row-level security, adds an anonymous read policy, and inserts three sample rows.
3. Copy `.env.example` to `.env.local` and add the project URL and anon key.

```bash
cp .env.example .env.local
npm run dev
```

The same two environment variables must be added to the Vercel project before deploying.

## Checks

```bash
npm run lint
npm run build
```
