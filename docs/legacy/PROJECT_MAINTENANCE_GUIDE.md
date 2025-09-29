# Project Maintenance Quick Reference

This document provides a quick reference for maintaining and extending the aymanaboghonim/DevOps Visions landing page implementation.

## Project Structure

```
elmentor-landing-page-clean/
├── public/                      # Public static assets
│   ├── gatherings/             # Community gathering images
│   └── aymanaboghonim-circles.png    # Circles diagram
├── src/
│   ├── assets/                 # Project assets
│   │   └── images/             # Image assets
│   ├── components/             # React components
│   │   ├── sections/           # Page section components
│   │   └── ...                 # Reusable components
│   ├── styles/                 # CSS files
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Main application component
│   └── main.tsx                # Entry point
└── ... configuration files
```

## Key Components

### Page Structure

- `App.tsx` - Main application container, defines the order of sections
- `Header.tsx` - Navigation header with logo and links
- `Footer.tsx` - Page footer with navigation, links, and copyright

### Section Components

All main page sections are in `src/components/sections/`:

- `HeroSection.tsx` - Main hero section with parallax background
- `AboutSection.tsx` - About program cards and information
- `CirclesSection.tsx` - Program hierarchy diagram
- `ActivitiesSection.tsx` - Community activities cards
- `FounderSection.tsx` - Founder biography and social links
- `BenefitsSection.tsx` - Program benefits cards
- `IntroductoryVideoSection.tsx` - YouTube video embed
- `NewsSection.tsx` - Community news and updates
- `CommunityGatheringSection.tsx` - Community gathering event cards
- `ContactSection.tsx` - Contact information and links
- `CommunityPresenceSection.tsx` - Social media and platform links

### Reusable Components

- `Button.tsx` - Reusable button with variants and icons
- `ScrollProgress.tsx` - Page scroll progress indicator
- `SEOMetaTags.tsx` - SEO meta tags for the page

### Utility Functions

- `uxEnhancements.ts` - UX improvement functions
- `performanceOptimizations.ts` - Performance optimization functions

## Design System

The project uses a consistent design system implemented through CSS variables in `src/styles/index.css`:

### Color System

- Primary colors: Microsoft Blue scale (primary-50 to primary-950)
- Secondary colors: For accents and highlights
- Gray scale: For neutral elements
- Semantic colors: Success, error, warning, info

### Typography

- Font families: Heading and body fonts
- Font sizes: From xs to 6xl
- Font weights: Light, normal, medium, semibold, bold
- Line heights: Tight, normal, relaxed, loose

### Spacing

- Spacing scale: xs, sm, md, lg, xl, 2xl, 3xl, 4xl

### Shadows

- Shadow scale: sm, md, lg, xl, 2xl

## Adding New Content

### Adding a New Section

1. Create a new component in `src/components/sections/`
2. Create a corresponding CSS file in `src/styles/`
3. Import and add the component to `App.tsx`
4. Import the CSS file in the component or in `App.tsx`

Example:

```tsx
// NewSection.tsx
import React from "react";
import "../styles/NewSection.css";

const NewSection: React.FC = () => {
  return (
    <section id="new-section" className="new-section">
      <div className="container">
        <h2>New Section Title</h2>
        {/* Content goes here */}
      </div>
    </section>
  );
};

export default NewSection;
```

### Adding New Assets

1. Place image files in `src/assets/images/` or `public/`
2. Import and use in components:

   ```tsx
   import newImage from "../../assets/images/new-image.png";

   // Then use in JSX
   <img src={newImage} alt="Description" />;
   ```

## Common Tasks

### Updating the Navigation

Edit the links array in `Header.tsx`:

```tsx
const links = [
  { href: "#hero", text: "Home" },
  { href: "#about", text: "About" },
  // Add new navigation items here
];
```

### Updating Footer Links

Edit the links in `Footer.tsx`:

```tsx
<a href="#new-section" className="footer-link">
  New Section
</a>
```

### Modifying the Color Scheme

Update the color variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #0078d4;
  /* Update colors here */
}
```

### Adding New Button Variants

Extend the Button component in `Button.tsx` and add corresponding styles in `Button.css`.

## Best Practices

1. **Component Organization**: Keep components focused and single-purpose
2. **CSS Naming**: Use BEM methodology for CSS class names
3. **Accessibility**: Include proper ARIA attributes and ensure keyboard navigation
4. **Responsive Design**: Use the existing breakpoints for consistency
5. **Code Comments**: Document complex logic or non-obvious design decisions
6. **Type Safety**: Properly type all props and state with TypeScript interfaces

## Troubleshooting

### Image Not Displaying

- Check file path and import statement
- Verify file exists in the correct location
- Check browser console for 404 errors

### CSS Not Applied

- Check class names match between component and CSS file
- Verify CSS file is imported
- Check for specificity issues

### Component Not Rendering

- Check import/export statements
- Verify component is included in the parent component
- Check for TypeScript or React errors

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Vite Documentation](https://vitejs.dev/guide/)
