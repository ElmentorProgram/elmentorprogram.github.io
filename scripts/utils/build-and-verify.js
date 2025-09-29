#!/usr/bin/env node

/**
 * Build and Verification Script for Elmentor/DevOps Visions Landing Page
 *
 * This script automates the process of building the project and running basic
 * verification checks to ensure everything is working correctly before deployment.
 */

import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk"; // You may need to install this: npm install chalk
import { promisify } from "util";

// Get dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// promisify exec
const execAsync = promisify(exec);

// Configuration
const projectRoot = path.resolve(__dirname);
const buildDir = path.join(projectRoot, "dist");
const assetsToVerify = [
  "src/assets/images/elmentor-logo.svg",
  "src/assets/images/founder-mohamed-radwan.svg",
  "src/assets/images/DevOps-Visions.svg",
  "src/assets/images/DevOps-Visions_Horizontal_Green.svg",
  "public/elmentor-circles.svg",
  "public/gatherings/tokyo-2022.svg",
  "public/gatherings/cairo-2023.svg",
  "public/gatherings/seattle-2023.svg",
];

// Helpers
const log = {
  info: (msg) => console.log(chalk.blue("INFO: ") + msg),
  success: (msg) => console.log(chalk.green("SUCCESS: ") + msg),
  warning: (msg) => console.log(chalk.yellow("WARNING: ") + msg),
  error: (msg) => console.log(chalk.red("ERROR: ") + msg),
};

const runCommand = async (command, successMsg) => {
  log.info(`Running: ${command}`);

  try {
    const { stdout, stderr } = await execAsync(command, { cwd: projectRoot });

    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);

    log.success(successMsg || "Command executed successfully");
  } catch (error) {
    log.error(`Command failed: ${error.message}`);
    throw error;
  }
};

const checkFile = (filePath) => {
  const fullPath = path.join(projectRoot, filePath);
  if (!fs.existsSync(fullPath)) {
    log.warning(`Missing file: ${filePath}`);
    return false;
  }
  return true;
};

// Main execution
async function main() {
  try {
    log.info("Starting build and verification process...");

    // 1. Verify essential assets are present
    log.info("Checking required assets...");
    const missingAssets = assetsToVerify.filter((asset) => !checkFile(asset));

    if (missingAssets.length > 0) {
      log.warning(
        "Some assets are missing. You may need to run the asset migration script.",
      );
      log.info(
        "See ASSET_MIGRATION_GUIDE.md for instructions on copying assets from the original project.",
      );
    } else {
      log.success("All required assets are present.");
    }

    // 2. Install dependencies
    log.info("Installing dependencies...");
    await runCommand("npm install", "Dependencies installed successfully");

    // 3. Run type checking
    log.info("Running type checking...");
    await runCommand(
      "npm run typecheck || npx tsc --noEmit",
      "Type checking passed",
    );

    // 4. Run linting (if configured)
    if (fs.existsSync(path.join(projectRoot, ".eslintrc"))) {
      log.info("Running linting...");
      await runCommand("npm run lint", "Linting passed");
    }

    // 5. Build the project
    log.info("Building project...");
    await runCommand("npm run build", "Build completed successfully");

    // 6. Verify build output
    if (!fs.existsSync(buildDir)) {
      throw new Error("Build directory not found. Build may have failed.");
    }

    const htmlFile = path.join(buildDir, "index.html");
    if (!fs.existsSync(htmlFile)) {
      throw new Error("index.html not found in build directory.");
    }

    log.info("Checking for essential files in build output...");
    let hasJs = false;
    let hasCss = false;

    fs.readdirSync(buildDir, { recursive: true }).forEach((file) => {
      if (typeof file === "string") {
        if (file.endsWith(".js")) hasJs = true;
        if (file.endsWith(".css")) hasCss = true;
      }
    });

    if (!hasJs) log.warning("No JavaScript files found in build output.");
    if (!hasCss) log.warning("No CSS files found in build output.");

    if (hasJs && hasCss) {
      log.success("Build verification successful. Essential files present.");
    }

    // 7. Check for common issues
    log.info("Checking for common issues...");
    const htmlContent = fs.readFileSync(htmlFile, "utf8");

    if (htmlContent.includes("undefined") && htmlContent.includes("null")) {
      log.warning(
        'Potential issues found in HTML output: "undefined" or "null" values.',
      );
    }

    // Final success message
    log.success("Build and verification completed successfully!");
    log.info(
      "The project is ready for deployment. See DEPLOYMENT_GUIDE.md for next steps.",
    );

    // Summary of any warnings
    if (missingAssets.length > 0) {
      log.warning("Remember to add the missing assets before deployment:");
      missingAssets.forEach((asset) => console.log(`  - ${asset}`));
    }
  } catch (error) {
    log.error(`Build process failed: ${error.message}`);
    process.exit(1);
  }
}

// Execute main function
main();
