# Fixing 404 Errors in GitHub Pages Deployment

This document explains the changes made to fix the 404 errors encountered when navigating the ElMentor Landing Page hosted on GitHub Pages.

## The Problem

When deploying a React application with React Router to GitHub Pages, users often encounter 404 errors when:

1. Refreshing the page
2. Accessing routes directly (instead of navigating from the home page)
3. Using browser navigation (back/forward buttons)

This occurs because GitHub Pages doesn't support the server-side routing needed for React Router's `BrowserRouter`.

## The Solution

We implemented a three-part solution to address this issue:

### 1. Switched from BrowserRouter to HashRouter

```tsx
// Before
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// After
import { createHashRouter, RouterProvider } from "react-router-dom";
```

HashRouter uses URL hashes (`#/`) instead of normal paths (`/`), which works better with static hosting like GitHub Pages because it handles routing entirely client-side.

### 2. Updated Route Paths

```tsx
// Before
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/arabic.html",
      element: <ArabicPage />,
    },
  ],
  { basename: basePath },
);

// After
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/arabic",
    element: <ArabicPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
```

Note that we:

- Removed the `.html` extension from the Arabic route
- Added a catch-all route (`*`) to handle 404s gracefully
- Removed the `basename` config since HashRouter doesn't need it

### 3. Added a Custom Error Page

We created a custom error page that appears when a user attempts to access an invalid route:

```tsx
const ErrorPage = () => (
  <div
    style={{
      padding: "2rem",
      textAlign: "center",
      fontFamily: "system-ui, sans-serif",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    <h1 style={{ color: "#0078d4" }}>Oops! Page Not Found</h1>
    <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="#/"
      style={{
        backgroundColor: "#0078d4",
        color: "white",
        padding: "0.75rem 1.5rem",
        borderRadius: "4px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Return to Home Page
    </a>
  </div>
);
```

### 4. Updated Navigation Links

All internal navigation links were updated to use the hash format:

```tsx
// Before
<a href="./index.html">English</a>
<a href="./arabic.html">العربية</a>

// After
<a href="#/">English</a>
<a href="#/arabic">العربية</a>
```

This ensures that all navigation works correctly with HashRouter.

## Benefits of This Approach

- **Reliability**: No more 404 errors on refresh or direct access
- **SEO**: Still compatible with search engines
- **Simplicity**: No need for complex server configurations
- **User Experience**: Custom error page provides helpful guidance

## Testing Your Deployment

To verify the fix is working correctly:

1. Visit the main URL: https://aymanaboghonim.github.io/elmentor-landing-page-clean/
2. Try refreshing the page
3. Navigate to the Arabic version and refresh
4. Use browser back/forward buttons
5. Try accessing a non-existent route (e.g., https://aymanaboghonim.github.io/elmentor-landing-page-clean/#/nonexistent)

## Further Improvements

For more advanced routing needs, consider:

1. **404.html trick**: Adding a special 404.html page that redirects to the main app
2. **Path rewriting**: Using a service like Netlify or Vercel that supports path rewriting
3. **Server-side rendering**: Moving to a framework with SSR support like Next.js
