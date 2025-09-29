# Deployment Process Documentation

This document describes the deployment process for the Elmentor Landing Page Clean project and explains the different deployment scripts available.

> **See Also:** For information about the branch structure and GitHub Pages setup, see the [GitHub Pages & Branching Guide](./GITHUB_PAGES_BRANCHING_GUIDE.md).

## Deployment Scripts

The project includes several deployment scripts with varying levels of functionality:

### 1. Simple Deployment (Recommended)

**Files:**

- `scripts/deployment/deploy.ps1` (PowerShell)
- `scripts/deployment/deploy.bat` (Windows Batch)

**Key Features:**

- Simple and reliable
- Minimal dependencies
- Handles GitHub Pages deployment efficiently
- Creates a separate deployment directory to avoid git issues
- Supports both GitHub CLI and direct git push methods
- Follows DevOps Visions standards

**Usage:**

```powershell
# Using PowerShell
./scripts/deployment/deploy.ps1

# Using Command Prompt
.\scripts\deployment\deploy.bat
```

### 2. Clean Structure Deployment

**Files:**

- `scripts/deployment/deploy-clean.ps1` (PowerShell)
- `scripts/deployment/deploy-clean.bat` (Windows Batch)

**Key Features:**

- Includes extensive pre-deployment checks
- Verifies assets, dependencies, and configuration
- Provides detailed feedback during deployment
- Performs TypeScript error checking
- Better error handling and reporting
- Follows DevOps Visions standards

**Usage:**

```powershell
# Using PowerShell
./scripts/deployment/deploy-clean.ps1

# Using Command Prompt
.\scripts\deployment\deploy-clean.bat
```

## Deployment Process

The deployment process follows these steps:

1. **Build Preparation:**

   - Clean up previous build artifacts
   - Ensure all dependencies are installed
   - Verify critical assets are present

2. **Building the Project:**

   - Run `npm run build` to create production-ready files
   - Optimize assets and generate output in the `dist` directory

3. **GitHub Pages Setup:**

   - Create a `.nojekyll` file to disable Jekyll processing
   - Copy all built files to the deployment directory
   - Initialize a git repository for deployment

4. **Deployment:**

   - Push the built files to the `gh-pages` branch
   - This branch is automatically served by GitHub Pages

5. **Verification:**
   - The site becomes available at `https://[username].github.io/elmentor-landing-page-clean/`

## Common Issues and Solutions

### Authentication Issues

If you encounter authentication issues:

1. Ensure you're logged in to GitHub:

   ```
   gh auth login
   ```

2. Or set up SSH keys for GitHub:
   ```
   ssh-keygen -t ed25519 -C "your_email@example.com"
   gh ssh-key add ~/.ssh/id_ed25519.pub
   ```

### Build Errors

If the build fails:

1. Check for missing dependencies:

   ```
   npm install
   ```

2. Verify TypeScript compatibility:

   ```
   npx tsc --noEmit
   ```

3. Look for missing assets in the error message

### GitHub Pages Not Updating

If your GitHub Pages site isn't updating:

1. Check the repository settings to ensure GitHub Pages is enabled
2. Verify the deployment branch is set to `gh-pages`
3. Allow 5-10 minutes for changes to propagate
4. Clear your browser cache

## Maintaining a Clean Structure

For guidance on maintaining a clean project structure, refer to the [CLEAN_STRUCTURE_GUIDE.md](./CLEAN_STRUCTURE_GUIDE.md) document.
