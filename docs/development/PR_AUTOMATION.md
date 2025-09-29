# PR Automation Tools Guide

This guide explains the automated tools and workflows implemented in this repository to streamline PR merging and prevent conflicts.

## Available Automation Tools

### 1. Automated PR Merge Tool

The repository includes scripts to automate the PR merging process while avoiding common issues:

- **Script**: `scripts/auto-merge-pr.ps1`
- **Easy Interface**: `auto-merge-pr.bat`

#### Features:

- Safely merges branches with conflict detection
- Optional automatic conflict resolution for documentation files
- Verifies branches exist before attempting merge
- Ensures working directory is clean
- Handles proper commit messages

#### Usage:

1. Run `auto-merge-pr.bat` from the repository root
2. Follow the interactive prompts to specify source/target branches
3. Choose whether to attempt automatic conflict resolution

### 2. GitHub Pages Sync Tool

Keep the GitHub Pages deployment in sync with the master branch:

- **Script**: `scripts/sync-gh-pages.ps1`
- **Easy Interface**: `sync-gh-pages.bat`

#### Features:

- Updates to the latest master branch
- Rebuilds the project
- Deploys to gh-pages branch
- Validates successful deployment

### 3. GitHub Actions Workflows

The repository includes automated GitHub Actions workflows:

#### PR Validation

- Automatically checks PRs for potential merge conflicts
- Validates documentation links to catch broken references
- Runs on all PRs targeting the master branch

#### Auto-Merge

- Automatically merges PRs that have been approved and labeled
- Requires the "automerge" label to be added to eligible PRs
- Avoids merging PRs with conflicts or failing checks

## Best Practices for Conflict-Free Development

1. **Regular Updates**:

   - Keep feature branches updated with the latest master changes
   - Use `git pull origin master` regularly on your feature branch

2. **Small, Focused PRs**:

   - Create smaller PRs focused on specific changes
   - Break large changes into multiple PRs

3. **Use Labels**:

   - Add the "automerge" label to PRs that can be automatically merged
   - Use "work in progress" label for PRs not ready to merge

4. **Review GitHub Actions Results**:

   - Check the PR validation output for potential conflicts
   - Address any issues before merging

5. **Document Changes Thoroughly**:
   - Use PR templates to clearly explain changes
   - Mention related issues or PRs

## Handling Merge Conflicts

If conflicts still occur:

1. Use the `auto-merge-pr.bat` tool with auto-resolve option for documentation files
2. For code conflicts, review them carefully in a proper merge tool
3. When in doubt, communicate with other contributors about concurrent changes
