# Client Service Context & Architecture State (Next.js BFF)

## Overview
- **Framework**: Next.js 16 (Port: 3000)
- **Role**: BFF (Backend-for-Frontend), Controller, SSR & ISR
- **Cache-Aside Layer**: Redis 7 (Port: 6379)

## Architecture & Data Flow
1. **Controller & Cache Check**: Next.js intercepts incoming user requests and checks Redis:
   - **HIT (~5ms)**: Returns cached content directly to the user (no DB/Strapi hit).
   - **MISS (~200ms)**: Calls Strapi (:1337) or Directus (:8055), populates Redis cache with TTL, and renders response.
2. **Cache Invalidation Route**: `POST /api/revalidate`
   - Triggered by Strapi CMS webhooks on content change.
   - Clears matching Redis keys (`cache:post:{slug}`, `cache:list:{type}:{page}`, `cache:page:{path}`).
3. **Authentication Flow**:
   - Authenticates via Directus (`POST /auth/login`), caches session token in Redis (`session:{token}`, TTL 24h).
