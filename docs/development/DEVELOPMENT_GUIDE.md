# Development Guide

This document provides comprehensive guidelines and best practices for developing and maintaining the Elmentor Landing Page.

## Table of Contents

- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Git Workflow](#git-workflow)
- [Testing Guidelines](#testing-guidelines)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting Common Issues](#troubleshooting-common-issues)

## Project Structure

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

Key files:

- `src/App.tsx`: Main application component
- `src/main.tsx`: Application entry point
- `vite.config.ts`: Build configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

## Development Setup

### Prerequisites

- Node.js (v18.x or higher)
- npm (v9.x or higher)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aymanaboghonim/elmentor-landing-page-clean.git
   cd elmentor-landing-page-clean
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## Coding Standards

### TypeScript

- Use TypeScript for all JavaScript files
- Define interfaces for all component props
- Use proper type annotations
- Avoid using `any` type

### React

- Use functional components with hooks
- Follow component naming conventions:
  - PascalCase for component files
  - camelCase for non-component files
- Use proper prop types and interfaces
- Add comments for complex logic

### CSS

- Use CSS modules or component-specific CSS files
- Follow naming conventions (e.g., `.ComponentName_elementName`)
- Use CSS variables for consistent styling
- Maintain responsive design principles

## Git Workflow

1. Create a feature branch from main:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make changes and commit:

   ```bash
   git add .
   git commit -m "Descriptive commit message"
   ```

3. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a pull request to the main branch

## Testing Guidelines

- Test all components in development and production modes
- Test on multiple browsers and screen sizes
- Verify all links work correctly
- Check for accessibility issues
- Use Lighthouse for performance and accessibility audits

## Performance Optimization

- Optimize images using compression
- Use lazy loading for non-critical components
- Minimize bundle size
- Use code splitting where appropriate
- Implement caching strategies

## Troubleshooting Common Issues

### 404 Errors on Page Refresh

The site uses a HashRouter to prevent 404 errors on GitHub Pages. If you encounter routing issues:

1. Check that HashRouter is being used in `App.tsx`
2. Ensure that all navigation links use hash-based routing

### Assets Not Loading

If assets are not loading correctly:

1. Check the base path configuration in `vite.config.ts`
2. Verify that asset paths in components use the correct relative paths
3. Ensure public assets are in the correct location
