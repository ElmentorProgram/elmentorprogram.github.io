# Quick Reference: Running the Project

## Asset Status

All required assets have been created as SVG placeholders:

- Logo files in `src/assets/images/`
- Gathering images in `public/gatherings/`

## Development Mode (Works!)

```bash
cd d:\Github_personal\elmentor-landing-page-clean
npm run dev
```

This will start the development server at http://localhost:3000 (or another available port).

## Production Build (Has TypeScript Issues)

There's a TypeScript error in HeroSection.tsx that prevents production build:

```
Property 'addEventListener' does not exist on type 'never'
```

## Deployment Options

### Option 1: Deploy Development Version (Recommended for Now)

1. Make sure all assets are in place
2. Run `npm run dev` and verify all content appears correctly
3. Use Vercel, Netlify, or another hosting service and deploy the repository

### Option 2: Fix TypeScript Error

Update `tsconfig.json` to be less strict about window object types, or refactor the HeroSection component.

## Other Files to Check

- `BUILD_ISSUES_STATUS.md` - Detailed explanation of issues and fixes
- `ASSET_ISSUE_RCA.md` - Root cause analysis of missing assets
- `DEPLOYMENT_GUIDE.md` - Full deployment instructions
