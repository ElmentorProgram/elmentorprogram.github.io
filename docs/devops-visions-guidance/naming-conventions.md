# Naming Conventions

This document outlines the standard naming conventions for DevOps Visions projects.

## File and Directory Naming

### General Guidelines

- Use lowercase for all filenames (except when conventions dictate otherwise)
- Use hyphens (\-\) to separate words in filenames
- Be descriptive but concise
- Use standard extensions appropriate to the file type

### Special Cases

- React components: PascalCase (e.g., \UserProfile.tsx\)
- Configuration files: Use standard naming with appropriate prefixes (e.g., \.eslintrc.js\)
- Documentation: Use markdown (\.md\) with descriptive names
- Test files: Name should match the file being tested with \.test\ or \.spec\ suffix

## Code Naming

### Variables and Functions

- Use camelCase for variables and functions
- Use descriptive, meaningful names
- Avoid abbreviations unless they are common and well-understood
- Boolean variables should be prefixed with \is\, \has\, \should\, etc.

Examples:
`	ypescript
const userData = fetchUserData();
function calculateTotalPrice() { /* ... */ }
const isUserLoggedIn = true;
`

### Classes and Interfaces

- Use PascalCase for classes, interfaces, types, and enums
- Classes should be nouns or noun phrases
- Interfaces should be nouns, noun phrases, or adjectives

Examples:
`	ypescript
class UserRepository { /* ... */ }
interface ApiResponse { /* ... */ }
type UserData = { /* ... */ };
enum ConnectionStatus { /* ... */ }
`

### Constants

- Use UPPER_SNAKE_CASE for constants and environment variables
- Exception: When using TypeScript, enum values may follow the parent enum's conventions

Examples:
`	ypescript
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = 'https://api.example.com';
`

## Git Branch Naming

- Use lowercase and hyphens
- Include a prefix that describes the type of work
- Be descriptive but concise

Examples:
`feature/user-authentication
bugfix/login-validation
refactor/api-client
hotfix/security-vulnerability
release/v1.2.0`

## Pull Request Naming

- Be descriptive and concise
- Reference issue numbers when applicable
- Include type of change (feature, bugfix, etc.)

Examples:
`Feature: Add user authentication system (#42)
Fix: Correct validation in login form (#56)
Refactor: Improve API client performance`

## Special Guidelines for Elmentor Landing Page

To maintain compatibility with the website functionality:

- Do not rename any files in the \src/\ directory
- Do not rename any files in the \public/\ directory
- Do not modify build configuration file names
- Do not rename deployment scripts

When adding new documentation or support files, follow these naming conventions while ensuring no disruption to the existing website functionality.
