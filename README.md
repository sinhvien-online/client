# client — Next.js Frontend

> Frontend cho nền tảng giáo dục **Sinh Viên Online** — xây dựng với Next.js 16

## Quick Start

### Prerequisites
- Node.js >= 20
- pnpm >= 8

### Development

```bash
pnpm install
pnpm prepare
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                # App Router pages
├── components/         # UI, Layout, Features
├── lib/                # API client, utils
├── types/              # TypeScript types
├── config/             # Site config
└── hooks/              # Custom hooks
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Dev server |
| `pnpm build` | Build for production |
| `pnpm lint` | ESLint |
| `pnpm format` | Prettier |
| `pnpm typecheck` | TypeScript check |

## Connect to Strapi

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Tech Stack

- Next.js 16, TypeScript, Tailwind CSS 4
- Strapi 5 (Headless CMS)
- pnpm, ESLint, Prettier, Husky, commitlint, lint-staged

## License

MIT
