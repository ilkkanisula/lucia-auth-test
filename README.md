# Sveltekit + Lucia-auth + prisma + supabase project

This is simple authentication demo for Lucia-auth using /api/ routes. 

## Prepare
Prepare project by creating your own .env file (see .env.example file)

## Run locally

```
npx prisma generate && npx prisma db push --force-reset && npm run dev -- --open
```