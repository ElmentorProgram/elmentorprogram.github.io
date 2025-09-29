# Repository Structure

This document outlines the standard repository structure for DevOps Visions projects.

## Basic Structure

`repository-name/
├── .github/                  # GitHub specific configuration
│   ├── ISSUE_TEMPLATE/       # Issue templates
│   ├── PULL_REQUEST_TEMPLATE/ # PR templates
│   └── workflows/            # GitHub Actions workflow definitions
├── docs/                     # Documentation files
│   ├── api/                  # API documentation (if applicable)
│   ├── development/          # Developer documentation
│   └── user/                 # End-user documentation
├── src/                      # Source code
├── tests/                    # Test files
├── .gitignore                # Git ignore file
├── README.md                 # Repository overview and quick start
├── CONTRIBUTING.md           # Contribution guidelines
├── CODE_OF_CONDUCT.md        # Code of conduct
├── SECURITY.md               # Security policy
└── LICENSE                   # License file`

## Special Structure for Elmentor Landing Page

The Elmentor Landing Page has a specific structure that **must be preserved**:

`elmentor-landing-page-clean/
├── dist/                    # Build output
├── docs/                    # Documentation
│   ├── deployment/          # Deployment documentation
│   ├── development/         # Development guides
│   └── devops-visions-guidance/ # DevOps Visions standards
├── public/                  # Static assets [DO NOT MODIFY]
├── scripts/                 # Utility scripts
│   ├── deployment/          # Deployment scripts [DO NOT MODIFY]
│   ├── maintenance/         # Maintenance scripts
│   └── utils/               # Utility scripts
├── .github/                 # GitHub templates and workflows
├── .temp/                   # Untracked local development files
└── src/                     # Source code [DO NOT MODIFY]`

## Documentation Structure

Each repository should include comprehensive documentation:

- \README.md\ - Overview, getting started, basic usage
- \CONTRIBUTING.md\ - Guidelines for contributing to the project
- \CODE_OF_CONDUCT.md\ - Community behavioral expectations
- \SECURITY.md\ - Security policies and vulnerability reporting
- \docs/\ - Detailed documentation organized by topic

## Configuration Files

Standard configuration files include:

- \.gitignore\ - Patterns for files to ignore in Git
- \.editorconfig\ - Editor configuration for consistent formatting
- CI/CD configuration appropriate to the project
- Linting and formatting configuration files

## Critical Note for Elmentor Landing Page

The Elmentor Landing Page repository structure serves a working GitHub Pages website. Any restructuring or organization improvements **must not** interfere with the functionality or contents of:

- \src/\ directory (website source code)
- \public/\ directory (static assets)
- Build configuration files
- Deployment scripts

All structural changes must support and enhance the repository organization while preserving the website's functionality.
