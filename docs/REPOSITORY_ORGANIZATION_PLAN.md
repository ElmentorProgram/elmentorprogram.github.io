# Elmentor Website Clean Architecture Plan

## Current Status

- Most documentation is already properly organized in the docs/ directory
- Several script files (.ps1 and .bat) are at the root level
- Standard project files (README.md, package.json, config files) are at the root

## Recommended Changes

### 1. Move Scripts to a Dedicated Directory

Move all script files to a scripts/ directory:

- deploy.bat → scripts/deploy.bat
- deploy.ps1 → scripts/deploy.ps1
- direct-deploy.ps1 → scripts/direct-deploy.ps1
- maintain.bat → scripts/maintain.bat
- maintain.ps1 → scripts/maintain.ps1
- move-to-temp.ps1 → scripts/move-to-temp.ps1

### 2. Maintain Clean Root Directory

Keep only these essential files at the root:

- README.md (project overview)
- package.json and package-lock.json (dependencies)
- tsconfig.json, vite.config.ts (configuration)
- .gitignore (git configuration)

### 3. Update References

Ensure any documentation or workflows referencing these scripts are updated to point to the new locations.

### 4. Documentation Enhancement

- Update README.md to clearly describe the repository structure
- Add a section about where to find scripts and how to use them
- Include clear guidelines for future contributors on where to place new files

## Benefits

- Cleaner root directory
- Better organization of development resources
- More maintainable project structure
- Self-documenting directory structure
- Easier navigation for future developers
