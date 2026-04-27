# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Hosts Neelima Mishra's personal portfolio website plus a shared API server.

## Artifacts

- **portfolio** (`/`) — React + Vite single-page portfolio for Neelima Mishra. Modern **dark bento** design (v2): pure black (#0A0A0A) background with animated dot grid + radial mesh, **acid lime #BEF264** primary, electric purple #A78BFA accent, coral pink #FB7185 highlight, sky blue + warm orange supporting. Type: **Bricolage Grotesque** display + Inter body + JetBrains Mono labels. Each section is built as an asymmetric **bento card grid** (Apple/Linear style) with hover lift, color glows, and Framer Motion scroll reveals. Pill-style scroll-spy navbar, custom cursor, and a working contact form wired to `/api/contact`. All personal data lives in `src/utils/constants.ts`. Resume PDF served from `public/resume.pdf`.
- **api-server** (`/api`) — Express 5 API. Endpoints: `GET /api/healthz`, `POST /api/contact` (validates with the generated Zod schema and persists to `contact_messages`).
- **mockup-sandbox** (`/__mockup`) — Component preview sandbox.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 18, Vite, Tailwind v4, Framer Motion, Three.js (`@react-three/fiber`, `@react-three/drei`), GSAP, Lucide, Sonner, react-hook-form
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM (`contact_messages` table)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle for the API)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
