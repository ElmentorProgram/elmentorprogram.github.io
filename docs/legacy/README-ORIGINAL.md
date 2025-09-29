# Elmentor Landing Page

A clean, maintainable landing page for Elmentor/DevOps Visions community built with React, TypeScript, and Vite.

![Elmentor Landing Page](src/assets/images/elmentor-logo.png)

## 📋 Overview

This repository contains the source code for the Elmentor Program landing page, which showcases the DevOps Visions community and their activities. The site is built with modern web technologies to ensure performance, accessibility, and maintainability.

## ✨ Features

- Clean, type-safe code with TypeScript and React
- Component-based architecture for maintainability
- Comprehensive design system with CSS variables
- Fully responsive design for all device sizes
- Accessibility features built-in
- Performance optimizations
- GitHub Pages deployment setup with automated username detection
- Arabic version support with RTL layout
- Hash-based routing for GitHub Pages compatibility

## 🎨 Visual Updates & Enhancements

### Latest Updates (June 2025)

- **News Section**: Year-based archive functionality (2023, 2024, 2025)
- **Background Colors**: Unified backgrounds across all sections for visual harmony
- **Navigation**: Professional gradient background in navbar
- **Branding**: Consistent entity naming throughout the site
- **Terminology**: Updated references from "DevOps Visions Program Official Channels" to "DevOps Visions Public Community"

See [docs/VISUAL_CONSISTENCY.md](./docs/VISUAL_CONSISTENCY.md) for detailed information.

## 🌐 Live Demo

The landing page is deployed and available at: [https://aymanaboghonim.github.io/elmentor-landing-page-clean/](https://aymanaboghonim.github.io/elmentor-landing-page-clean/)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18.x or higher)
- npm (v9.x or higher)

```bash
.\deploy-menu.bat
```

This provides a user-friendly interface to:

- Choose your preferred deployment method
- Fix Git ownership issues
- Access documentation

### Direct Deployment

1. Make sure you have:

   - Git installed
   - Node.js and npm installed
   - GitHub CLI installed and authenticated (`gh auth login`)

2. Run the direct deployment script:
   ```bash
   .\direct-deploy.bat
   ```

This will:

- Automatically detect your GitHub username
- Update all project files with your username
- Build the project
- Deploy it to GitHub Pages
- Show you the URL where your site is live

## Getting Started

### Important Note on Assets and Build

The project currently uses SVG placeholders for certain assets that were not available in the original repository:

- Community gathering images (Tokyo, Cairo, Seattle)
- Some logo files

See `ASSET_ISSUE_RCA.md` for details on these placeholder assets.

There's also a TypeScript build issue in HeroSection.tsx. Use development mode for now (see `QUICK_FIX_GUIDE.md`).

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/elmentor-landing-page-clean.git
   cd elmentor-landing-page-clean
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Migrate assets (if not already done):

   - Follow instructions in [ASSET_MIGRATION_GUIDE.md](./ASSET_MIGRATION_GUIDE.md)
   - Or run one of the provided asset copy scripts

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Project Structure

```
elmentor-landing-page-clean/
├── public/                      # Public static assets
│   ├── gatherings/              # Community gathering images
│   └── aymanaboghonim-circles.png     # Circles diagram
├── src/
│   ├── assets/                  # Project assets
│   │   └── images/              # Image assets
│   ├── components/              # React components
│   │   ├── sections/            # Page section components
│   │   └── ...                  # Reusable components
│   ├── styles/                  # CSS files
│   ├── utils/                   # Utility functions
│   ├── App.tsx                  # Main application component
│   └── main.tsx                 # Entry point
└── ... configuration files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Check TypeScript types
- `node build-and-verify.js` - Build and verify the project

## Building and Deploying

### Recommended Deployment Method

We've provided several deployment options, but the recommended method is the direct deployment approach that resolves Git ownership issues:

```bash
# Run the direct deployment script:
.\direct-deploy.bat
```

This script:

- Works around Git "dubious ownership" errors
- Automatically detects your GitHub username
- Updates all project configurations
- Builds the project and deploys to GitHub Pages
- Provides detailed logs

### Additional Deployment Options

If you encounter issues with the direct deployment, we've provided alternative approaches:

**Option 1: Fix Git Ownership then Deploy**

```bash
# First, fix Git ownership issues:
.\fix-git-ownership.bat

# Then run the enhanced deployment:
.\enhanced-one-click-deploy.bat
```

**Option 2: Original Deployment Scripts**
These scripts may work on systems not affected by Git ownership issues:

```bash
.\one-click-deploy.bat
# or
.\auto-deploy-silent.bat
```

### Solving the "Dubious Ownership" Error

If you encounter Git "dubious ownership" errors during deployment, please see:

- [GIT_OWNERSHIP_FIX_GUIDE.md](./GIT_OWNERSHIP_FIX_GUIDE.md) - Complete solution to Git ownership issues

### Detailed Documentation

For additional deployment information:

- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - General deployment options
- [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) - GitHub Pages specific deployment
- [POST_DEPLOYMENT_CHECKLIST.md](./POST_DEPLOYMENT_CHECKLIST.md) - Post-deployment verification
- [DEPLOYMENT_SUCCESS.md](./DEPLOYMENT_SUCCESS.md) - Confirmation of successful deployment

**Option 3: CI/CD with GitHub Actions**

- After pushing to GitHub, deployment happens automatically via GitHub Actions workflow

## Documentation

This project includes comprehensive documentation:

- [COMPREHENSIVE_FINAL_VALIDATION.md](./COMPREHENSIVE_FINAL_VALIDATION.md) - Detailed verification results
- [FINAL_VERIFICATION_REPORT.md](./FINAL_VERIFICATION_REPORT.md) - Section-by-section verification
- [ASSET_MIGRATION_GUIDE.md](./ASSET_MIGRATION_GUIDE.md) - Instructions for asset migration
- [PROJECT_MAINTENANCE_GUIDE.md](./PROJECT_MAINTENANCE_GUIDE.md) - Guide for future maintenance
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Implementation summary
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Deployment instructions
- [FINAL_CHECKLIST.md](./FINAL_CHECKLIST.md) - Final implementation checklist

## Features

### Sections

1. **Header** - Navigation header with logo and links
2. **HeroSection** - Main hero section with parallax background
3. **AboutSection** - About program cards and information
4. **CirclesSection** - Program hierarchy diagram
5. **ActivitiesSection** - Community activities cards
6. **FounderSection** - Founder biography and social links
7. **BenefitsSection** - Program benefits cards
8. **IntroductoryVideoSection** - YouTube video embed
9. **NewsSection** - Community news and updates
10. **CommunityGatheringSection** - Community gathering event cards
11. **ContactSection** - Contact information and links
12. **CommunityPresenceSection** - Social media and platform links
13. **Footer** - Navigation, copyright, and CTA

### Technical Features

- Responsive design for all device sizes
- Keyboard navigation and accessibility features
- Animation effects with performance in mind
- SEO meta tags and semantic HTML
- Progressive enhancement approach

## License

This project is for demonstration purposes only. All rights to the original design and content belong to aymanaboghonim/DevOps Visions.

## Acknowledgements

- Original design and content by aymanaboghonim/DevOps Visions
- Built with React and TypeScript
- Icons from React Icons
- Animations built with CSS
