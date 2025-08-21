# UI Events App

A modern web application for managing events, venues, and instructors.

## Project Structure

```
/
├── frontend/                       # Vite + React + TS app
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   └── src/
│       ├── app/
│       │   ├── routes.tsx
│       │   ├── providers.tsx       # React Query + Theme + Router providers
│       │   └── layout/             # shadcn-admin style shell (sidebar/header)
│       ├── components/             # shared shadcn/ui wrappers
│       ├── lib/
│       │   ├── api.ts              # typed client to /api (fetch wrappers)
│       │   ├── queryClient.ts
│       │   └── store.ts            # Zustand UI state (theme, sidebar, etc.)
│       ├── features/
│       │   ├── dashboard/
│       │   ├── events/
│       │   ├── venues/
│       │   ├── providers/
│       │   ├── tasks/
│       │   ├── calendar/
│       │   └── notifications/
│       ├── pages/                  # route components (react-router)
│       └── styles/
│           └── globals.css
├── functions/                      # Hono routes (backend API)
│   ├── index.ts                    # Hono app with /api router
│   ├── middleware/
│   │   ├── auth.ts                 # Cloudflare Access JWT verification
│   │   └── cache.ts                # LRU/Cache API helpers
│   ├── clients/
│   │   ├── wordpress.ts            # WordPress REST client (typed)
│   │   └── external.ts             # Google/AWS stubs
│   ├── schemas/                    # zod schemas for request/response
│   └── routes/
│       ├── events.ts               # /api/events, /api/events/:id
│       ├── venues.ts               # /api/venues CRUD
│       └── instructors.ts          # /api/instructors CRUD
├── public/                         # static assets
├── scripts/                        # dev/build/verify scripts
├── package.json                    # workspace root (pnpm or npm workspaces)
├── pnpm-workspace.yaml             # if using pnpm
├── tsconfig.base.json
├── wrangler.toml
├── .env.example
├── .eslintrc.cjs  /  .prettierrc
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ui-events-app
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy the environment example file and fill in your values:
   ```bash
   cp .env.example .env
   ```

### Development

To start the development server:

```bash
pnpm dev
```

This will start both the frontend and backend development servers.

### Building

To build the application for production:

```bash
pnpm build
```

### Linting

To lint the codebase:

```bash
pnpm lint
```

## Technologies Used

- **Frontend**: Vite, React, TypeScript, Tailwind CSS
- **Backend**: Hono, Cloudflare Workers
- **State Management**: Zustand, React Query
- **Validation**: Zod
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm
- **Deployment**: Cloudflare Workers

## License

This project is licensed under the MIT License.
