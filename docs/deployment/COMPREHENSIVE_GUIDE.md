# Deployment Guide

This comprehensive guide covers all aspects of deploying the Elmentor Landing Page to GitHub Pages.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Deployment Options](#deployment-options)
- [Base Path Configuration](#base-path-configuration)
- [GitHub Pages Setup](#github-pages-setup)
- [Troubleshooting Common Issues](#troubleshooting-common-issues)
- [Advanced Deployment Options](#advanced-deployment-options)

## Prerequisites

- Node.js (v18.x or higher)
- npm (v9.x or higher)
- Git configured with appropriate permissions

## Deployment Options

### Option 1: Quick Deployment (Recommended)

Use our simplified deployment batch file:

```powershell
# PowerShell (recommended)
./scripts/deployment/deploy.ps1

# Or using batch (Windows)
.\scripts\deployment\deploy.bat
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

## Base Path Configuration

The project is configured to use the base path `/elmentor-landing-page-clean/` for GitHub Pages compatibility. This is set in `vite.config.ts`:

```typescript
// For production build and preview
config.base = '/elmentor-landing-page-clean/'
```

If you need to customize this (e.g., for a fork or renamed repository):
1. Update the base path in vite.config.ts
2. Rebuild the project

## GitHub Pages Setup

1. Ensure your repository has GitHub Pages enabled
2. GitHub Pages should be configured to use the `gh-pages` branch
3. Wait 5-10 minutes after deployment for changes to propagate

## Troubleshooting Common Issues

### 404 Errors on Page Refresh

The site uses a HashRouter to prevent 404 errors on GitHub Pages. This handles client-side routing without needing server configuration.

### Assets Not Loading

If assets are not loading correctly:
1. Check the base path configuration in `vite.config.ts`
2. Verify that asset paths in components use the correct relative paths
3. Run `npm run build` and inspect the generated HTML in the `dist` directory

### Git "Dubious Ownership" Errors

If you encounter Git "dubious ownership" errors during deployment, use:

```powershell
./scripts/utils/fix-git-ownership.ps1
```

## Advanced Deployment Options

### Custom Domain Configuration

If you want to use a custom domain:

1. Update the base path in `vite.config.ts` to `/` or your custom subdirectory
2. Create a `CNAME` file in the `public` directory with your domain name
3. Configure your DNS settings to point to GitHub Pages

### Automated Deployment with GitHub Actions

The deployment process can be automated with GitHub Actions:

1. Create a `.github/workflows/deploy.yml` file
2. Configure it to build and deploy on push to main branch
3. Example workflow available in the repository
