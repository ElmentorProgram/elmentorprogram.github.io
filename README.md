# Elmentor Landing Page

A clean, maintainable landing page for the Elmentor/DevOps Visions community built with React, TypeScript, and Vite.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-brightgreen)](https://github.com/DevOpsVisions/elmentor-landing-page-clean)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **CRITICAL NOTE**: This repository contains the GitHub Pages website serving as the landing page for our community. The website content and functionality (src/, public/, build config, deployment scripts) must be preserved at all costs. See [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📋 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run serve
```

## 🚀 Deployment

To deploy to GitHub Pages:

1. Update your GitHub username in `github-config.txt`
2. Run the deployment script:

   ```bash
   # PowerShell (recommended)
   ./deploy.ps1

   # Or using npm
   npm run deploy
   ```

### Temporary Manual Deployment (Codespace)

> ⚠️ **TEMPORARY SECTION**: This section provides manual deployment steps for use in Codespaces while GitHub Actions automated deployment is under repair. This section will be removed once automated deployment is restored.

#### Prerequisites

- GitHub Pages source must be set to `gh-pages` branch in repository settings
- Repository scripts (`deploy:gh-pages`) must be present in `package.json`
- Codespace or local development environment with Node.js installed

#### First-time Setup in a New Codespace

```bash
# Install dependencies
npm install

# Verify build works
npm run build
```

#### Quick Deploy Commands

**Option 1: Separate commands (recommended)**

```bash
npm run build
npm run deploy:gh-pages
```

**Option 2: Combined command**

```bash
npm run build && npm run deploy:gh-pages
```

**Option 3: Custom publish script (optional)**
If you add a `publish` script to `package.json`:

```json
"scripts": {
  "publish": "npm run build && npm run deploy:gh-pages"
}
```

Then run: `npm run publish`

#### Cache Busting Tip

If your site doesn't reflect changes immediately, append a timestamp to the URL:

```
https://elmentorprogram.github.io?v=1734533925
```

Replace the timestamp with the current Unix timestamp.

#### Recovery Steps (Clean Install)

If you encounter build issues or need to start fresh:

```bash
# Clean everything
rm -rf node_modules dist package-lock.json

# Fresh install
npm install

# Build and deploy
npm run build && npm run deploy:gh-pages
```

#### Quick Troubleshooting

| Issue                              | Solution                                                    |
| ---------------------------------- | ----------------------------------------------------------- |
| Site not updating after deploy     | Wait 5-10 minutes, try cache busting URL                    |
| Build fails with TypeScript errors | Run `npm run typecheck` to identify issues                  |
| `tsc not found` error              | Ensure TypeScript is installed: `npm install`               |
| `gh-pages` command fails           | Check if `gh-pages` package is installed in devDependencies |
| Permission denied errors           | Ensure you have push access to the repository               |

#### Notes

- This manual process bypasses GitHub Actions workflows
- Changes take 5-10 minutes to appear on the live site
- Always test builds locally before deploying
- This section is temporary and will be removed once automated GitHub Actions deployment is fixed

## 🛠️ Project Structure

```
elmentor-landing-page-clean/
├── dist/              # Build output
├── docs/              # Documentation
│   ├── deployment/    # Deployment documentation
│   ├── design/        # Design documents
│   ├── development/   # Development guides
│   ├── devops-visions-guidance/  # DevOps Visions standards
│   └── legacy/        # Legacy documentation
├── public/            # Static assets [DO NOT MODIFY]
├── scripts/           # Utility scripts
│   ├── deployment/    # Deployment scripts [DO NOT MODIFY]
│   ├── maintenance/   # Maintenance scripts
│   └── utils/         # Utility scripts
├── .github/           # GitHub templates and workflows
│   ├── ISSUE_TEMPLATE/ # Issue templates
│   ├── PULL_REQUEST_TEMPLATE/ # PR templates
│   └── workflows/     # GitHub Actions workflows
├── .temp/             # Untracked local development files (not in Git)
└── src/               # Source code [DO NOT MODIFY]
```

## 🧩 Features

- Modern React with TypeScript
- Fast builds with Vite
- Responsive design
- Framer Motion animations
- GitHub Pages deployment

## 🧰 Maintenance

For repository maintenance tasks:

```bash
./maintain.ps1
```

## 🔧 Development Utilities

For local development files that shouldn't be committed:

```bash
# Move or copy files to untracked .temp directory
./move-to-temp.ps1
```

The `.temp` directory is ignored by Git and provides a standardized location for:

- Development scripts
- Documentation drafts
- Temporary build outputs
- Work-in-progress files

## 📚 Documentation

For detailed documentation, see the `docs` directory:

- [Deployment Guide](docs/deployment/README.md)
- [Development Maintenance](docs/development/maintenance.md)
- [DevOps Visions Standards](docs/devops-visions-guidance/standards-and-conventions.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting a pull request.

**IMPORTANT**: Any changes to the website code, structure, or deployment configuration are subject to strict review and must follow the special guidelines in the contributing document.

## 📄 License

This project is licensed under the MIT License .
