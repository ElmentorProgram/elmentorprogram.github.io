# GitHub Pages Clean Structure Guide

This guide outlines the proper structure for the GitHub Pages (gh-pages) branch following DevOps Visions standards.

## Purpose

The `gh-pages` branch serves one specific purpose:

- Host the built version of our website for GitHub Pages

It should **not** be used for:

- Development work
- Source code storage
- Documentation beyond what's needed for the deployed site

## Standard Structure

The following represents the proper structure for the `gh-pages` branch:

```
elmentor-landing-page-clean/
├── assets/           # Compiled JS/CSS and other assets
├── index.html        # Main HTML file (built)
├── .nojekyll         # Disables Jekyll processing
├── README.md         # Brief explanation of the branch purpose
└── {static-assets}   # Other static files needed by the site
```

## Cleanup Guidelines

When maintaining the `gh-pages` branch:

1. **Remove unnecessary files:**

   - Source code files (.tsx, .ts, etc.)
   - Development configuration files (tsconfig.json, etc.)
   - Scripts not needed for the deployed site
   - Documentation beyond a basic README

2. **Ensure required files exist:**
   - `.nojekyll` file to disable Jekyll processing
   - All compiled assets from the build process
   - A README.md explaining the branch purpose

## Deployment Best Practices

1. **Always deploy from the main branch:**

   - Build the website on the `main` branch
   - Push only the build output to `gh-pages`

2. **Use the provided deployment scripts:**

   - Scripts in `scripts/deployment/` handle the correct structure
   - They ensure only the necessary files are included

3. **Never manually edit files on gh-pages:**
   - All changes should be made on `main` and re-deployed
   - This maintains a clean separation of concerns

## Verifying Proper Structure

After deployment, verify that:

1. The website functions correctly
2. No unnecessary files are present
3. The structure follows the guidelines above

## Related Documentation

- [GitHub Pages Branching Guide](./GITHUB_PAGES_BRANCHING_GUIDE.md)
- [Deployment Documentation](./DEPLOYMENT_DOCUMENTATION.md)
- [Comprehensive Deployment Guide](./COMPREHENSIVE_GUIDE.md)
