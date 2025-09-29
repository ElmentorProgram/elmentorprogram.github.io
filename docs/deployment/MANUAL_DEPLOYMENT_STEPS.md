# Manual Deployment Steps for Navigation Fix

## 1. Verify Build Success

First, make sure the project builds correctly with the navigation fixes:

```bash
cd d:\Github_personal\elmentor-landing-page-clean
npm run build
```

## 2. Test Locally

Before deploying, test the built version locally to ensure navigation works properly:

```bash
# From the project directory
npm run preview
```

Verify that:

- Clicking on navigation links scrolls to the correct sections
- The URL hash updates correctly
- No "Page Not Found" errors occur

## 3. Deploy to GitHub Pages

There are several ways to deploy:

### Option A: Using the GitHub Pages workflow in GitHub Actions

1. Commit and push your changes to the main repository
2. GitHub Actions will automatically build and deploy the site

### Option B: Manual deployment using the gh-pages package

1. Install gh-pages if not already installed:

```bash
npm install -D gh-pages
```

2. Add deployment scripts to package.json:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. Run the deploy command:

```bash
npm run deploy
```

### Option C: Manual deployment using git

1. Build the project
2. Copy the contents of the dist folder to a separate directory
3. Initialize a git repo in that directory
4. Add, commit, and push to the gh-pages branch

## 4. Verify Deployment

After deployment, visit:
https://aymanaboghonim.github.io/elmentor-landing-page-clean/

Check that:

- All navigation links work correctly
- Scrolling is smooth
- The URL updates correctly with the hash
- No "Page Not Found" errors occur

## 5. Troubleshooting

If navigation issues persist:

1. Check browser console for any errors
2. Verify that the section IDs match the navigation link targets
3. Check that React Router is handling routes correctly
4. Ensure the scrollIntoView function is working as expected
