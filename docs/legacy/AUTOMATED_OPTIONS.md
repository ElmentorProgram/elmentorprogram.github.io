# Automated Deployment Options

This document provides instructions for the different automated deployment options available.

## Option 1: Config-File Based Deployment (Recommended)

This is the simplest option that requires minimal configuration and no user interaction during the actual deployment.

1. Edit the `github-config.txt` file and set your GitHub username:

   ```
   GITHUB_USERNAME=your-actual-username
   ```

2. Run the silent deployment:
   ```
   silent-deploy.bat
   ```

The process runs completely automatically with no further input required.

## Option 2: Direct Edit and Run

1. Edit the `auto-deploy.ps1` file and change this line at the top:

   ```powershell
   $GithubUsername = "your-actual-username"  # Replace with your username
   ```

2. Run the automatic deployment:
   ```
   auto-deploy.bat
   ```

The script will confirm you've updated the username and then run automatically.

## Option 3: Manual Scripting

For developers who want more control:

1. Use `auto-deploy.ps1` directly:

   ```powershell
   # Run with a specific username
   .\auto-deploy.ps1 -GithubUsername "your-username"

   # Or set environment variable and run
   $env:GITHUB_TOKEN="your-token"  # Optional, for repository creation
   .\auto-deploy.ps1
   ```

## Option 4: Linux/macOS Users

If you're using Linux or macOS:

```bash
# Make the script executable
chmod +x auto-deploy.sh

# Edit the script to set your username
# GITHUB_USERNAME="your-username"

# Run the script
./auto-deploy.sh
```

## Authentication Notes

- For repository creation, set the `GITHUB_TOKEN` environment variable with a Personal Access Token
- Without a token, you'll need to manually create the repository first
- For deployment, you might need to authenticate with Git

## Troubleshooting

If deployment fails:

1. Check the `deploy.log` file for detailed error messages
2. Ensure your GitHub username is correct
3. Verify you have proper GitHub permissions

For more detailed information, see `DEPLOYMENT_GUIDE.md`.
