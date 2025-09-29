# Elmentor Website Repository Organization

## Repository Structure

The Elmentor website repository follows a clean, organized structure to ensure maintainability and ease of navigation:

### Root Directory

The root directory contains only essential files needed for the project:

- \README.md\: Main project documentation
- \package.json\ and \package-lock.json\: Node.js dependencies
- \ sconfig.json\, \ite.config.ts\: Project configuration
- \.gitignore\ and other Git configuration files
- \index.html\: Main entry point for the web application

### Key Directories

- \/src\: Source code for the website
- \/public\: Static assets
- \/dist\: Build output (generated, not committed)
- \/docs\: Documentation (organized by topic)
- \/scripts\: Utility and automation scripts
- \/.temp\: Temporary development files (not tracked in Git)

## Documentation Organization

Documentation is organized into logical categories:

- \/docs/deployment\: Deployment procedures and GitHub Pages setup
- \/docs/design\: Brand identity and visual design guidelines
- \/docs/development\: Development procedures, contributing guides
- \/docs/legacy\: Historical documentation from previous iterations

## Scripts Organization

All scripts are stored in the \/scripts\ directory:

- \deploy.ps1\: Main GitHub Pages deployment script
- \direct-deploy.ps1\: Alternative deployment process
- \maintain.ps1\: Site maintenance utilities
- Other utility scripts as needed

## Best Practices for Repository Maintenance

1. **Keep the Root Clean**: Only essential files should be at the root level
2. **Document Everything**: All directories should have README.md files explaining their purpose
3. **Use Consistent Naming**: Follow the established naming conventions
4. **Script Organization**: All automation scripts go in the /scripts directory
5. **Documentation Placement**: All documentation goes in the /docs directory in the appropriate category

## Adding New Files

When adding new files to the repository:

- **Code**: Add to the appropriate directory under /src
- **Documentation**: Add to the appropriate category in /docs
- **Scripts**: Add to /scripts
- **Static Assets**: Add to /public

Following these guidelines ensures the repository remains clean, well-organized, and easy to navigate for all contributors.
