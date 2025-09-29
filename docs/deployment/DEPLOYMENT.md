# Deployment Guide

This document provides instructions for deploying the Elmentor Landing Page to GitHub Pages.

## Prerequisites

- Node.js (v18.x or higher)
- npm (v9.x or higher)
- Git configured with appropriate permissions

## Deployment Options

### Option 1: Quick Deployment (Recommended)

Use our simplified deployment batch file:

```bash
# Windows
.\deploy.bat
```

This script will:

1. Build the project
2. Verify the correct base path configuration
3. Deploy to GitHub Pages

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy:gh-pages
   ```

## Configuration

### Base Path

The project is configured to use the base path `/elmentor-landing-page-clean/` for GitHub Pages compatibility. This is set in `vite.config.ts`:

```typescript
// For production build and preview
config.base = "/elmentor-landing-page-clean/";
```

### Custom Domain Configuration

If you want to use a custom domain:

1. Update the base path in `vite.config.ts` to `/` or your custom subdirectory.
2. Create a `CNAME` file in the `public` directory with your domain name.
3. Configure your DNS settings to point to GitHub Pages.

## Troubleshooting

### 404 Errors on Page Refresh

The site uses a HashRouter to prevent 404 errors on GitHub Pages. This handles client-side routing without needing server configuration.

### Assets Not Loading

If assets are not loading correctly:

1. Check the base path configuration in `vite.config.ts`
2. Verify that asset paths in components use the correct relative paths
3. Run `npm run build` and inspect the generated HTML in the `dist` directory

### Git "Dubious Ownership" Errors

If you encounter Git "dubious ownership" errors during deployment, use:

```bash
.\scripts\fix-git-ownership.ps1
```

## Automated Deployment

The deployment process is automated with GitHub Actions. To use this feature:

1. Fork the repository
2. Enable GitHub Pages in your repository settings
3. The site will automatically deploy when changes are pushed to the main branch
