# Scripts Directory

This directory contains utility scripts for developing, building, and deploying the Elmentor landing page.

## Deployment Scripts

- `deploy.ps1` - Main deployment script for GitHub Pages
- `direct-deploy.ps1` - Direct deployment without rebuild
- `deploy.bat` - Windows batch version of deployment script

## Maintenance Scripts

- `maintain.ps1` - Repository maintenance (clean & rebuild)
- `maintain.bat` - Windows batch version of maintenance script

## Development Utilities

- `move-to-temp.ps1` - Moves files to the .temp directory (untracked by Git)
- `organize-repository.ps1` - Repository structure organization script
- `sync-gh-pages.ps1` - Synchronizes GitHub Pages branch

## Usage Examples

### Deploy to GitHub Pages

```powershell
./scripts/deploy.ps1
```

### Maintain Repository

```powershell
./scripts/maintain.ps1
```

### Move Files to .temp

```powershell
./scripts/move-to-temp.ps1 -SourcePath "path/to/file-or-folder" -DestinationName "optional-new-name"
```
