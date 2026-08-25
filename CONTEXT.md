# SV-Client Context

## 1. Overview & Tech Stack
- **Service**: Next.js 16.3.1 (React 19, Turbopack, Tailwind CSS v4)
- **Role**: Sole Frontend & Backend-For-Frontend (BFF) Gateway (Port 3000)
- **Branch**: `dev` (deployed on server `beta-nnc: 36.50.55.218:2503`)
- **Domain**: https://sinhvien.online
- **Node.js Compatibility**: Configured `packageManager: pnpm@10.34.5` for Node 20 LTS compatibility.

## 2. API Integration & Routing
- **Strapi Client**: `src/lib/strapi.ts` consuming `/api/posts`, `/api/documents`, `/api/subjects`, `/api/grades`, `/api/school-levels`.
- **SSR & Static Routes**: `/`, `/blog`, `/blog/[slug]`, `/thcs`, `/thpt`, `/dai-hoc`, `/tai-lieu`.
- **Revalidation Webhook**: `/api/revalidate` endpoint purging cache tags based on webhook events.

## 3. Tests & CI/CD
- **Test Runner**: Vitest (`pnpm test` -> `tests/strapi-client.test.ts`). 3/3 tests passing.
- **CI Workflow**: `.github/workflows/ci.yml` (Lint, Typecheck, Unit Tests, Next.js Build on push/PR).
