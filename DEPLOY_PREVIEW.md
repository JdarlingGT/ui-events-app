# Deploy Preview Setup

This repository includes automatic deploy previews for every pull request using GitHub Actions and GitHub Pages.

## How it works

### 🚀 Deploy Preview Workflow (`.github/workflows/deploy-preview.yml`)

When a pull request is opened, updated, or reopened:

1. **Build the application**: Builds the v4 app as a static site using Next.js static export
2. **Deploy to gh-pages**: Creates a unique subdirectory `pr-{number}` on the `gh-pages` branch
3. **Comment on PR**: Adds/updates a comment with the preview URL

**Preview URL format**: `https://[owner].github.io/[repo]/pr-[number]/`

### 🧹 Cleanup Workflow (`.github/workflows/cleanup-preview.yml`)

When a pull request is closed:

1. **Remove deployment**: Deletes the `pr-{number}` directory from `gh-pages`
2. **Update index**: Regenerates the list of available deployments
3. **Notify**: Comments on the PR about cleanup completion

### 📄 GitHub Pages Workflow (`.github/workflows/pages.yml`)

Automatically deploys the `gh-pages` branch to GitHub Pages when content is pushed.

## Configuration

### Next.js Static Export

The v4 app is configured for static export with the following changes:

- **next.config.mjs**: Conditional static export mode and basePath support
- **package.json**: Added `build:static` script for static builds
- **fonts.ts**: System font fallbacks for offline builds
- **utils.ts**: Environment variable fallbacks
- **blocks.ts**: Server actions disabled for static export

### Environment Variables

The workflows use these environment variables:

- `NEXT_BASE_PATH`: Set to `/pr-{number}` for each preview
- `NEXT_PUBLIC_APP_URL`: Preview URL for absolute links
- `NEXT_OUTPUT_MODE`: Set to `export` for static builds

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Set **Source** to "Deploy from a branch"
3. Select **Branch**: `gh-pages` and **Folder**: `/ (root)`
4. Save the configuration

### 2. Configure Repository Permissions

Ensure the GitHub Actions have the necessary permissions:

1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"

### 3. Repository Secrets (if needed)

No additional secrets are required for basic functionality. The workflows use the default `GITHUB_TOKEN`.

## Features

- ✅ **Automatic deployment** on PR open/update
- ✅ **Unique URLs** for each PR (`/pr-123/`, `/pr-456/`, etc.)
- ✅ **PR comments** with preview links
- ✅ **Automatic cleanup** when PRs are closed
- ✅ **Deploy index** showing all active previews
- ✅ **Build caching** for faster subsequent builds

## Limitations

- **API routes**: Not supported in static export (disabled)
- **Server actions**: Not supported in static export (disabled)
- **Dynamic imports**: Limited support in static builds
- **External APIs**: Must handle offline/build-time scenarios

## Troubleshooting

### Build Failures

Common issues and solutions:

1. **Font loading errors**: Check network connectivity or use system fonts
2. **Server actions**: Ensure `"use server"` directives are conditional
3. **Environment variables**: Provide fallbacks for undefined values
4. **API routes**: Remove or disable for static export

### Preview Not Working

1. Check GitHub Pages is enabled in repository settings
2. Verify `gh-pages` branch exists and has content
3. Check workflow permissions in repository settings
4. Review workflow logs for deployment errors

## Example Preview URLs

- PR #123: `https://owner.github.io/repo/pr-123/`
- PR #456: `https://owner.github.io/repo/pr-456/`
- Index: `https://owner.github.io/repo/` (lists all active previews)

## Customization

### Different App

To deploy a different app (e.g., `www` instead of `v4`):

1. Update `deploy-preview.yml` build commands
2. Change output directory in deployment step
3. Ensure the app supports static export

### Custom Domain

To use a custom domain:

1. Add `CNAME` file to `gh-pages` branch
2. Update `NEXT_PUBLIC_APP_URL` in workflows
3. Configure DNS settings

### Additional Steps

Add more steps to the workflow:

- Lighthouse audits
- Visual regression testing
- Slack/Discord notifications
- Database seeding for previews

## Cost Considerations

- **GitHub Actions**: Generous free tier, pay-per-minute for overages
- **GitHub Pages**: Free for public repositories
- **Storage**: Each preview consumes repository storage
- **Bandwidth**: GitHub Pages has bandwidth limits

The system automatically cleans up closed PRs to minimize storage usage.