# Contributing to Elmentor Landing Page

Thank you for your interest in contributing to the Elmentor Landing Page project! This document outlines the process and guidelines for contributing to this repository.

## 🚨 CRITICAL WEBSITE PROTECTION NOTICE 🚨

**This repository contains the live GitHub Pages website serving as the landing page for our community. The following files/directories are STRICTLY OFF-LIMITS for modification:**

- \src/\ directory (website source code)
- \public/\ directory (static assets)
- \ite.config.ts\ (build configuration)
- \package.json\ and \package-lock.json\ (dependencies)
- \.github/workflows/deploy.yml\ (deployment configuration)

**Any contribution that modifies these protected files will be rejected unless explicitly approved by maintainers and thoroughly tested.**

## How to Contribute

### Issues

1. **Search** existing issues to avoid creating duplicates.
2. **Create an issue** for bugs, feature requests, or documentation improvements.
3. **Use the appropriate template** when creating issues.
4. **Label your issues** correctly to help with organization.

### Pull Requests

#### For Documentation, Templates, and Non-Website Changes

1. **Fork the repository** and create a branch from \main\ with an appropriate name:

   - \eature/description\ for features
   - \ugfix/description\ for bug fixes
   - \docs/description\ for documentation
   - \
     efactor/description\ for code refactoring

2. **Make your changes** following coding standards and conventions.

3. **Test your changes** thoroughly.

4. **Submit a pull request** using the appropriate template:
   - Include a clear title and description
   - Reference any related issues
   - Complete the website safety checklist
   - Request review from appropriate reviewers

#### For Website Changes (Rare, Requires Special Approval)

1. **First create an issue** detailing why website changes are necessary.

2. **Get maintainer approval** before proceeding.

3. **Create a separate development branch** specifically for website changes.

4. **Test thoroughly** in a local environment.

5. **Submit a pull request** using the website changes template:
   - Provide detailed explanation of changes
   - Include before/after screenshots
   - Document thorough testing performed
   - Include a rollback plan
   - Request reviews from at least two maintainers

## Development Process

### Setting Up Your Environment

1. Clone the repository:
   `ash
git clone https://github.com/DevOpsVisions/elmentor-landing-page-clean.git
cd elmentor-landing-page-clean
`

2. Install dependencies:
   `ash
npm install
`

3. Start the development server:
   `ash
npm run dev
`

### Testing

- Test all changes locally before submitting PRs
- For website changes, verify on multiple browsers and devices
- Ensure all existing functionality works correctly

## Style Guide

Please follow the DevOps Visions standards and conventions as outlined in:

- [Standards and Conventions](docs/devops-visions-guidance/standards-and-conventions.md)
- [Naming Conventions](docs/devops-visions-guidance/naming-conventions.md)
- [Repository Structure](docs/devops-visions-guidance/repository-structure.md)

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing to this project.

## Questions?

If you have questions or need help, please:

1. Check the documentation in the \docs\ directory
2. Open an issue with the question template
3. Contact the maintainers through the DevOps Visions community channels

Thank you for contributing to the Elmentor Landing Page project!
