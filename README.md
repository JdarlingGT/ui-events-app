# shadcn/ui

Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. **Use this to build your own component library**.

> **Note**: This PR tests the new PR Preview workflow deployment.

![hero](apps/www/public/og.jpg)

## Documentation

Visit http://ui.shadcn.com/docs to view the documentation.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## Deploying apps/v4 to Netlify

This monorepo contains multiple apps, but only `apps/v4` (Next.js 15) is deployed to Netlify.

Netlify config
- Base directory: `apps/v4`
- Build command: `pnpm run build:static`
- Publish directory: `out`
- Environment: `NODE_VERSION=20`, `NEXT_OUTPUT_MODE=export`

These settings are captured in `netlify.toml` at the repo root. Netlify will ignore `apps/dash` and `apps/www` during deploys.

Local build (matches Netlify)
```bash
pnpm i
pnpm --filter v4 run build:static
npx serve apps/v4/out
```

Convenience scripts from the repo root
```bash
pnpm run build:v4
pnpm run dev:v4
```

Notes
- If you configure a Next.js `basePath`, ensure it remains consistent with any hosting subpath; the static export supports it.
- For preview deploys, Netlify will only build `apps/v4`.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
