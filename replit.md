# Opulent Escapes

A responsive travel agency website for exploring sample holiday packages and sending trip enquiries.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/wander-trails run dev` — run the Opulent Escapes website
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

The package catalogue, itinerary details, sample ratings, and displayed agency contact information are demo content. Enquiry submissions are stored in PostgreSQL; no email notification, booking confirmation, or online payment is connected.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/wander-trails/src/pages/` — home, package catalogue, package details, contact, and not-found pages
- `artifacts/wander-trails/src/data/packages.ts` — sample destinations and itinerary content
- `artifacts/wander-trails/src/components/EnquiryForm.tsx` — validated enquiry form
- `lib/api-spec/openapi.yaml` — source of truth for the enquiry API
- `artifacts/api-server/src/routes/enquiries.ts` — enquiry submission endpoint
- `lib/db/src/schema/travel-enquiries.ts` — persisted enquiry schema

## Architecture decisions

- The catalogue content is local sample data; only enquiry submissions are persisted.
- “Book Now” deliberately opens an enquiry flow. It does not confirm a reservation or take payment.
- Prices, ratings, testimonials, and agency contact details are explicitly marked as sample content.

## Product

Visitors can browse and filter six domestic and international trip samples, view itinerary details, and submit custom or package enquiries. Enquiries are saved to the development database for review.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
