# Standards and Conventions

This document outlines the coding standards, formatting conventions, and best practices for DevOps Visions projects. These guidelines help maintain consistency, quality, and readability across all repositories.

## Code Style and Formatting

### General Guidelines

- Use consistent indentation (2 or 4 spaces, no tabs)
- Use meaningful and descriptive names for variables, functions, and classes
- Limit line length to 100-120 characters
- Include comments for complex logic, but avoid obvious comments
- Remove debug code, console logs, and commented-out code before committing

### JavaScript/TypeScript

- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use TypeScript for type safety when possible
- Use ES6+ features like arrow functions, destructuring, and template literals
- Prefer const over let, avoid var
- Organize imports alphabetically and group by type

### HTML/CSS

- Use semantic HTML elements appropriately
- Follow BEM (Block Element Modifier) naming convention for CSS classes
- Use responsive design principles
- Prefer CSS variables for consistent theming

### Markdown

- Use ATX-style headers (\#\ for headers, not underlines)
- Include a single top-level header (\#\) as the document title
- Use fenced code blocks with language specified
- Use bulleted lists for unordered items, numbered lists for sequences

## Git Workflow

### Branches

- \main\ - Primary branch for production code
- \develop\ - Integration branch for features before production
- \eature/description\ - For new features
- \ugfix/description\ - For bug fixes
- \hotfix/description\ - For urgent production fixes
- \
  elease/version\ - For final testing before release
- \
  efactor/description\ - For code improvements without behavior changes

### Commits

- Write descriptive commit messages in imperative mood
- Start with a capital letter, no trailing period
- First line should be 50 chars or less, followed by blank line and details
- Reference issue numbers in the commit message

Example: \Add user authentication system (#42)\

### Pull Requests

- Keep PRs focused on a single issue or feature
- Include thorough descriptions with context and testing information
- Provide screenshots for UI changes
- Ensure all CI/CD checks pass before requesting review
- Address all reviewer comments before merging

## Code Reviews

- Review for functionality, readability, maintainability, and security
- Be constructive and respectful in feedback
- Use GitHub's review features to suggest specific changes
- Ensure code adheres to this style guide

## Special Guidelines for Elmentor Landing Page

- \*\*DO NOT modify the website source code in \src/\*\*
- \*\*DO NOT modify public assets in \public/\*\*
- **DO NOT modify build configuration files**
- **DO NOT modify deployment scripts**

All contributions must strictly preserve the website functionality while adhering to these standards.
