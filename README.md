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
### Temporary Manual Deployment (Codespace) ⚠️

> This is a temporary fallback while automated GitHub Actions deployment is unavailable.  
> It will be removed once CI deployment is restored.

#### ✅ Prerequisites
- GitHub Pages is configured to serve from the `gh-pages` branch (Settings → Pages).
- The repository already contains the scripts:  
  - `build` (e.g. builds the site into `dist`)  
  - `deploy:gh-pages` (publishes `dist` to the `gh-pages` branch)  
- You have permission to push to the repository.

#### 🆕 First-Time Setup in a New Codespace
```bash
npm install
npm run build
```
(Optional) Preview locally if a dev server script exists:
```bash
npm run dev
```

#### ⚡ Everyday Quick Deploy
From the repository root inside the Codespace:
```bash
npm run build && npm run deploy:gh-pages
```

That’s it—once the `deploy:gh-pages` script completes, the site will update (usually within 1–2 minutes).

#### 💡 (Optional) Single Command Helper
If you *personally* want a one-liner, you can add this to your local `package.json` (NOT added in the repo yet to keep history minimal):
```json
"scripts": {
  "publish": "npm run build && npm run deploy:gh-pages"
}
```
Then run:
```bash
npm run publish
```
(Do not commit this unless the team agrees.)

#### 🔄 Cache Busting
If the browser shows an old version, append a query param to assets or page URLs:
```
https://<your-site>/<path>?v=$(date +%s)
```
Or manually hard refresh (Ctrl+Shift+R / Cmd+Shift+R).

#### 🧹 Recovery / Clean Rebuild
If builds start failing or output looks stale:
```bash
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

#### 🛠️ Troubleshooting

| Symptom | Possible Cause | Fix |
|---------|----------------|-----|
| Site not updating after deploy | CDN / browser cache | Use cache busting `?v=timestamp` or hard refresh |
| `dist` folder empty | Build failed silently | Re-run `npm run build` and inspect errors |
| Permission denied pushing to `gh-pages` | Missing repo access | Confirm your GitHub role / fork & open PR |
| `tsc: command not found` (if TypeScript) | Dev deps not installed | Run `npm install` again |
| Old assets still rendering | Service worker or cached JS | In DevTools: Application → Clear storage → Hard reload |
| Deploy script exits early | Script expects branch/state | Check `deploy:gh-pages` script body & logs |

#### 🧾 Verification Checklist
1. `npm run build` finishes with no errors.
2. `npm run deploy:gh-pages` pushes a new commit to `gh-pages`.
3. Settings → Pages shows “Published”.
4. Visit the site with `?v=<new timestamp>` to confirm changes.

#### ⏳ Temporary Notice
This section is **temporary**. Once automated GitHub Actions deployment is repaired, these manual steps will no longer be required and this subsection will be removed to reduce noise.
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
