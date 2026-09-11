# PuneRent AI

**Find Your Perfect Rental with AI**

PuneRent AI is a mobile-first Pune rental marketplace MVP for PGs, rooms, 1RK, 1BHK and 2BHK.

## Launch areas
Wakad • Bhumkar Chowk • Dange Chowk • Hinjewadi Phase 1 • Hinjewadi Phase 2 • Hinjewadi Phase 3 • Marunji

## MVP
- Tenant search and filters
- Rule-based AI Match percentage
- Favorites
- Owner property submission
- Supabase authentication/database support
- Fresh availability fields
- Demo listings clearly labelled

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```

Without Supabase environment variables, the UI runs in demo mode.

## Supabase
1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env`.
5. Restart the app.

Never expose a Supabase service-role key in frontend code.

## Future
Gemini/OpenAI search • photo uploads • admin dashboard • Google Maps • featured listings • subscriptions • demand-based area expansion