# GitHub Pages Deployment Guide

This document provides step-by-step instructions for deploying the aymanaboghonim/DevOps Visions landing page to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. SSH key set up with your GitHub account (recommended) or use HTTPS authentication
4. Node.js and npm installed

## Deployment Steps

### 1. Automated Repository Setup

Use our automated script to set up your GitHub repository and update all necessary configuration:

```bash
# Run the interactive batch file
.\setup-github-repo.bat

# Or run the PowerShell script directly (replace with your GitHub username)
.\setup-github-repo.ps1 -GithubUsername "aymanaboghonim"
```

This script will:

1. Check for Git and GitHub CLI installations
2. Create a new GitHub repository (or use existing)
3. Set up Git remotes
4. Update repository URLs in:
   - `deploy-github-pages.ps1`
   - `README.md`
5. Verify the base URL in `vite.config.ts`
6. Commit and push your code to GitHub

### 2. Deploy to GitHub Pages

You have two options for deployment:

#### Option 1: Using npm script

Run:

```bash
npm run deploy
```

#### Option 2: Using batch file

Double-click `deploy-github-pages.bat` or run:

```bash
.\deploy-github-pages.bat
```

#### Option 3: Using PowerShell directly

```powershell
.\deploy-github-pages.ps1
```

### 3. Verify Deployment

After deployment completes successfully, your site should be available at:

```
https://aymanaboghonim.github.io/elmentor-landing-page-clean/
```

It may take a few minutes for the changes to propagate.

### 4. Configure GitHub Repository Settings

For the first deployment, you may need to configure your GitHub repository:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "GitHub Pages" section
4. Ensure the source is set to "gh-pages" branch

## Troubleshooting

If you encounter issues:

1. **Authentication failures**: Make sure your SSH key is properly set up or use HTTPS URL instead
2. **404 errors**: Check that the repository name in `vite.config.ts` matches your actual repository name
3. **Build errors**: Run `npm run build` locally to debug any build issues
4. **Asset loading issues**: Ensure all assets use relative paths compatible with the base URL

For further assistance, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).
