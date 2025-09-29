# Automated Deployment Options

This document outlines the various automated deployment options available for the aymanaboghonim/DevOps Visions landing page.

## Option 1: Fully Automated Silent Mode

For a completely hands-off deployment experience with no user interaction:

```bash
# Just run this batch file
.\auto-deploy-silent.bat
```

What it does:

- Creates GitHub repository automatically (uses default username "aymanaboghonim")
- Updates all configuration files with correct repository information
- Commits and pushes code to GitHub
- Builds the project and deploys to GitHub Pages
- Creates a log file with detailed information
- Creates a success marker file upon completion

Advanced usage with custom GitHub username:

```powershell
.\auto-deploy-silent.ps1 -GithubUsername "your-username"
```

## Option 2: Interactive Setup

For an interactive setup experience with prompts:

```bash
# Step 1: Create repository and push code
.\setup-github-repo.bat

# Step 2: Deploy to GitHub Pages
.\deploy-github-pages.bat
```

What it does:

- Guides you through the process with interactive prompts
- Provides colorful output with status information
- Performs the same repository setup and deployment steps

## Option 3: CI/CD with GitHub Actions

For continuous deployment using GitHub Actions:

1. The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`
2. After pushing code to GitHub, the workflow will:
   - Build the project
   - Deploy to GitHub Pages automatically

To use this option:

1. Push your code to GitHub (using either Option 1 or 2)
2. Go to the repository's "Actions" tab
3. Ensure workflows are enabled
4. The site will be automatically built and deployed on every push to the main branch

## Authentication Notes

For all deployment options, GitHub authentication is required:

- **GitHub CLI authentication**: For Options 1 and 2, GitHub CLI (`gh`) is used. If not already authenticated, the script will attempt to use environment variables or prompt for authentication.
- **GitHub Actions authentication**: For Option 3, GitHub Actions handles authentication automatically.

If you encounter authentication issues with silent mode:

1. Run `gh auth login` manually once to set up authentication
2. Or, set the `GITHUB_TOKEN` environment variable with a Personal Access Token

## Log Files

All deployment options create log files:

- **Silent mode**: `github_setup.log` with detailed progress information
- **Success marker**: `github_setup_success_[timestamp].txt` created upon successful completion

## Troubleshooting

If deployment fails:

1. Check the log files for specific error messages
2. Ensure you have proper GitHub authentication
3. Verify internet connectivity
4. Check GitHub API status if repository creation fails
5. Make sure ports are not blocked by firewall

For manual intervention, follow the steps in `GITHUB_PAGES_DEPLOYMENT.md`.
