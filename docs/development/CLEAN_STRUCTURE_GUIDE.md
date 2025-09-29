# Elmentor Landing Page - Clean Structure Maintenance Guide

This guide provides best practices for maintaining a clean, maintainable project structure for the Elmentor Landing Page project.

## Project Structure

Maintain the following structure for clarity and organization:

```
elmentor-landing-page-clean/
├── public/                  # Static assets served as-is
│   ├── assets/              # Public assets
│   │   ├── logos/           # Logo files
│   │   ├── founder/         # Founder images
│   │   ├── community/       # Community-related images
│   │   │   └── gatherings/  # Community gathering images
│   │   └── circles/         # Elmentor circles images
├── src/                     # Source code
│   ├── assets/              # Source assets (processed during build)
│   │   └── images/          # Images referenced in components
│   ├── components/          # React components
│   │   └── sections/        # Page section components
│   ├── styles/              # CSS files
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main App component
│   ├── ArabicPage.tsx       # Arabic version
│   └── main.tsx             # Entry point
├── deploy-clean.ps1         # PowerShell deployment script
└── deploy-clean.bat         # Batch deployment script
```

## Common Mistakes to Avoid

### 1. Asset Path Issues

**Problem:** Broken image links or missing assets in production.

**Solution:**

- Always use relative paths for assets
- For public assets, use paths like `./assets/logos/logo.png`
- For imported assets in components, use import statements: `import logoImage from '../assets/images/logo.png'`
- Verify all assets exist before deployment

### 2. Base Path Configuration

**Problem:** Links break when deployed to GitHub Pages.

**Solution:**

- Ensure `vite.config.ts` has the correct `base` path: `/elmentor-landing-page-clean/`
- For navigation within the app, use relative paths

### 3. Inconsistent CSS Organization

**Problem:** Style conflicts and maintenance difficulties.

**Solution:**

- Keep component-specific CSS in separate files named after the component
- Use consistent naming conventions (e.g., BEM)
- Use CSS variables for shared values

### 4. Missing Dependencies

**Problem:** Build failures due to missing dependencies.

**Solution:**

- Regularly update `package.json` with all required dependencies
- Use `--save` flag when installing new packages
- Document any non-standard dependencies

### 5. Arabic Version Compatibility

**Problem:** Arabic version layout or routing issues.

**Solution:**

- Ensure proper RTL support
- Test Arabic routes thoroughly
- Maintain translation consistency

## Deployment Best Practices

1. **Pre-Deployment Check:**

   - Run `npm run build` locally first
   - Verify all assets are properly referenced
   - Check for TypeScript errors with `npx tsc --noEmit`

2. **Use the Clean Deployment Script:**

   - Use `deploy-clean.ps1` (PowerShell) or `deploy-clean.bat` (Batch)
   - The script includes checks for common issues

3. **After Deployment:**
   - Verify the site works correctly at your GitHub Pages URL
   - Test both English and Arabic versions
   - Check different screen sizes for responsiveness

## Maintaining Code Quality

1. **Component Organization:**

   - Keep components focused on a single responsibility
   - Extract reusable parts into separate components
   - Use consistent props and naming conventions

2. **TypeScript Usage:**

   - Define interfaces for all component props
   - Use proper typing for functions and variables
   - Avoid using `any` type where possible

3. **Performance Optimization:**
   - Use React's memo, useCallback, and useMemo for optimization
   - Properly handle component lifecycle
   - Minimize state changes and rerenders

## Version Control Practices

1. **Commit Organization:**

   - Make small, focused commits
   - Write descriptive commit messages
   - Group related changes together

2. **Branch Management:**
   - Use feature branches for new features
   - Use `main` branch as the stable version
   - Use `gh-pages` branch only for deployment

## Adding New Features

When adding new features:

1. Plan the component structure first
2. Create necessary assets in the appropriate directories
3. Add component files following existing patterns
4. Update styles with component-specific CSS
5. Test thoroughly before committing

By following these guidelines, you'll maintain a clean, organized, and maintainable project structure for the Elmentor Landing Page.
