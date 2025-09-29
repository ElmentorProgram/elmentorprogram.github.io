const fs = require("fs");
const path = require("path");

// Define source and destination paths
const originalPath = path.resolve(
  "d:",
  "Github_personal",
  "elmentor-landing-page",
);
const cleanPath = path.resolve(
  "d:",
  "Github_personal",
  "elmentor-landing-page-clean",
);

// Asset mappings: [source, destination]
const assetMappings = [
  // Logo files
  [
    path.join(originalPath, "src", "assets", "images", "elmentor-logo.png"),
    path.join(cleanPath, "src", "assets", "images", "elmentor-logo.png"),
  ],
  // Founder image
  [
    path.join(originalPath, "src", "assets", "images", "mohamed-radwan.png"),
    path.join(cleanPath, "src", "assets", "images", "mohamed-radwan.png"),
  ],
  // Circles diagram (from public directory)
  [
    path.join(originalPath, "public", "elmentor-circles.png"),
    path.join(cleanPath, "public", "elmentor-circles.png"),
  ],
  // DevOps Visions logos
  [
    path.join(originalPath, "src", "assets", "images", "DevOps-Visions.png"),
    path.join(cleanPath, "src", "assets", "images", "DevOps-Visions.png"),
  ],
  [
    path.join(
      originalPath,
      "src",
      "assets",
      "images",
      "DevOps-Visions_Horizontal_Green.png",
    ),
    path.join(
      cleanPath,
      "src",
      "assets",
      "images",
      "DevOps-Visions_Horizontal_Green.png",
    ),
  ],
];

function copyAssets() {
  console.log("🚀 Starting asset copy process...\n");

  let successCount = 0;
  let errorCount = 0;

  assetMappings.forEach(([source, destination], index) => {
    try {
      // Check if source file exists
      if (!fs.existsSync(source)) {
        console.log(`❌ Source file not found: ${source}`);
        errorCount++;
        return;
      }

      // Ensure destination directory exists
      const destDir = path.dirname(destination);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
        console.log(`📁 Created directory: ${destDir}`);
      }

      // Copy the file
      fs.copyFileSync(source, destination);
      console.log(`✅ Copied: ${path.basename(source)}`);
      successCount++;
    } catch (error) {
      console.log(
        `❌ Error copying ${path.basename(source)}: ${error.message}`,
      );
      errorCount++;
    }
  });

  console.log(`\n📊 Copy Results:`);
  console.log(`✅ Successful: ${successCount} files`);
  console.log(`❌ Failed: ${errorCount} files`);

  if (successCount > 0) {
    console.log(
      `\n🎉 Asset copying completed! You can now run 'npm run dev' to see the website with all assets.`,
    );
  }
}

// Run the copy process
copyAssets();
