# Project Structure Guide

This document explains the organization of the Elmentor Landing Page repository.

## Directory Structure

```
elmentor-landing-page-clean/
├── public/                 # Static assets and media files
│   ├── assets/             # Images, icons, etc.
│   └── gatherings/         # Community gathering images
├── src/                    # Source code
│   ├── assets/             # Internal assets
│   │   └── images/         # Images used directly in components
│   ├── components/         # React components
│   │   └── sections/       # Page section components
│   ├── contexts/           # React contexts
│   ├── styles/             # CSS styles
│   │   └── sections/       # Section-specific styles
│   └── utils/              # Utility functions
├── scripts/                # Deployment and utility scripts
└── docs/                   # Documentation
```

## Key Files

- `src/App.tsx`: Main application component
- `src/main.tsx`: Application entry point
- `vite.config.ts`: Build configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

## Component Organization

The application uses a component-based architecture:

- **Reusable Components**: `src/components/` contains reusable UI components
- **Page Sections**: `src/components/sections/` contains the main content sections
- **Layout Components**: Header, Footer, and layout-related components

## Style Organization

Styles are organized using component-specific CSS files:

- Global styles are in `src/styles/index.css`
- Component styles are named to match their component (e.g., `Header.css` for `Header.tsx`)
- CSS variables are used for consistent styling

## Assets Organization

Assets are organized in two locations:

1. **Public Assets**: `public/assets/` contains:

   - Images loaded at runtime
   - Assets referenced directly by URL
   - Large media files

2. **Source Assets**: `src/assets/` contains:
   - Icons and small images used directly in components
   - SVG files that might be processed during build

## Build & Deployment

Deployment scripts are consolidated in the `scripts/` directory:

- `scripts/deploy.ps1`: Main deployment script
- `deploy.bat`: Windows batch file for easy deployment

## Documentation

Documentation is organized in the `docs/` directory:

- `DEPLOYMENT.md`: Deployment instructions
- `BRAND_IDENTITY.md`: Brand guidelines
- `CONTRIBUTING.md`: Contribution guidelines
- `PROJECT_STRUCTURE.md`: This file

## Best Practices

When contributing to this project, please follow these structural guidelines:

- Keep components focused on single responsibilities
- Use appropriate directory structure for new files
- Follow existing naming conventions
- Update documentation when changing the structure
