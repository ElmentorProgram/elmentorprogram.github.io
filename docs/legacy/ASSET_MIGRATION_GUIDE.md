# Asset Migration Guide

This guide provides instructions for migrating all assets from the original aymanaboghonim/DevOps Visions project to the new, clean implementation.

## Current Asset Status

The clean implementation currently includes professional-quality placeholder assets:

- **SVG Logos**: Placeholder SVG versions of the aymanaboghonim and DevOps Visions logos
- **Founder Image**: Professional-looking placeholder for Mohamed Radwan's image
- **Circles Diagram**: SVG placeholder representing the six-level hierarchy diagram
- **Gathering Images**: Sample images for Tokyo, Cairo, and Seattle gatherings

## Asset Copy Scripts

We've provided multiple scripts to automatically copy the real assets from the original project:

### 1. PowerShell Script (Windows)

```powershell
# File: copy-assets.ps1

$sourceProject = "d:\Github_personal\aymanaboghonim-landing-page"
$destProject = "d:\Github_personal\elmentor-landing-page-clean"

# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "$destProject\src\assets\images"
New-Item -ItemType Directory -Force -Path "$destProject\public\gatherings"

# Copy logo files
Copy-Item "$sourceProject\src\assets\images\aymanaboghonim-logo.svg" -Destination "$destProject\src\assets\images\" -Force
Copy-Item "$sourceProject\src\assets\images\founder-mohamed-radwan.jpg" -Destination "$destProject\src\assets\images\" -Force

# Copy gathering images
Copy-Item "$sourceProject\public\gatherings\*.jpg" -Destination "$destProject\public\gatherings\" -Force

# Copy circles diagram
Copy-Item "$sourceProject\public\aymanaboghonim-circles.png" -Destination "$destProject\public\" -Force

Write-Output "Assets copied successfully!"
```

### 2. Batch Script (Windows)

```batch
@echo off
REM File: copy-assets.bat

set SOURCE_PROJECT=d:\Github_personal\aymanaboghonim-landing-page
set DEST_PROJECT=d:\Github_personal\elmentor-landing-page-clean

REM Create directories if they don't exist
mkdir "%DEST_PROJECT%\src\assets\images" 2>nul
mkdir "%DEST_PROJECT%\public\gatherings" 2>nul

REM Copy logo files
copy /Y "%SOURCE_PROJECT%\src\assets\images\aymanaboghonim-logo.svg" "%DEST_PROJECT%\src\assets\images\"
copy /Y "%SOURCE_PROJECT%\src\assets\images\founder-mohamed-radwan.jpg" "%DEST_PROJECT%\src\assets\images\"

REM Copy gathering images
copy /Y "%SOURCE_PROJECT%\public\gatherings\*.jpg" "%DEST_PROJECT%\public\gatherings\"

REM Copy circles diagram
copy /Y "%SOURCE_PROJECT%\public\aymanaboghonim-circles.png" "%DEST_PROJECT%\public\"

echo Assets copied successfully!
```

### 3. Node.js Script

```javascript
// File: copy-assets.js

const fs = require("fs");
const path = require("path");

const sourceProject = "d:/Github_personal/aymanaboghonim-landing-page";
const destProject = "d:/Github_personal/elmentor-landing-page-clean";

// Create directories if they don't exist
const directories = [
  path.join(destProject, "src", "assets", "images"),
  path.join(destProject, "public", "gatherings"),
];

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy logo files
fs.copyFileSync(
  path.join(
    sourceProject,
    "src",
    "assets",
    "images",
    "aymanaboghonim-logo.svg",
  ),
  path.join(destProject, "src", "assets", "images", "aymanaboghonim-logo.svg"),
);

fs.copyFileSync(
  path.join(
    sourceProject,
    "src",
    "assets",
    "images",
    "founder-mohamed-radwan.jpg",
  ),
  path.join(
    destProject,
    "src",
    "assets",
    "images",
    "founder-mohamed-radwan.jpg",
  ),
);

// Copy circles diagram
fs.copyFileSync(
  path.join(sourceProject, "public", "aymanaboghonim-circles.png"),
  path.join(destProject, "public", "aymanaboghonim-circles.png"),
);

// Copy gathering images
const gatheringsDir = path.join(sourceProject, "public", "gatherings");
fs.readdirSync(gatheringsDir)
  .filter((file) => file.endsWith(".jpg"))
  .forEach((file) => {
    fs.copyFileSync(
      path.join(gatheringsDir, file),
      path.join(destProject, "public", "gatherings", file),
    );
  });

console.log("Assets copied successfully!");
```

### 4. Python Script

```python
# File: copy_assets.py

import os
import shutil
from pathlib import Path

source_project = Path("d:/Github_personal/aymanaboghonim-landing-page")
dest_project = Path("d:/Github_personal/elmentor-landing-page-clean")

# Create directories if they don't exist
(dest_project / "src" / "assets" / "images").mkdir(parents=True, exist_ok=True)
(dest_project / "public" / "gatherings").mkdir(parents=True, exist_ok=True)

# Copy logo files
shutil.copy2(
    source_project / "src" / "assets" / "images" / "aymanaboghonim-logo.svg",
    dest_project / "src" / "assets" / "images" / "aymanaboghonim-logo.svg"
)

shutil.copy2(
    source_project / "src" / "assets" / "images" / "founder-mohamed-radwan.jpg",
    dest_project / "src" / "assets" / "images" / "founder-mohamed-radwan.jpg"
)

# Copy circles diagram
shutil.copy2(
    source_project / "public" / "aymanaboghonim-circles.png",
    dest_project / "public" / "aymanaboghonim-circles.png"
)

# Copy gathering images
gatherings_dir = source_project / "public" / "gatherings"
for file in gatherings_dir.glob("*.jpg"):
    shutil.copy2(file, dest_project / "public" / "gatherings" / file.name)

print("Assets copied successfully!")
```

## Main Execution Script

```batch
@echo off
REM File: EXECUTE-ASSET-COPY.bat

echo aymanaboghonim/DevOps Visions Asset Migration Tool
echo ============================================
echo.
echo This script will copy all assets from the original project to the clean implementation.
echo.

set /p CONTINUE=Do you want to continue? (Y/N):

if /i "%CONTINUE%"=="Y" (
    echo.
    echo Copying assets...

    REM Execute PowerShell script
    powershell -ExecutionPolicy Bypass -File copy-assets.ps1

    echo.
    echo Asset migration complete!
) else (
    echo.
    echo Asset migration canceled.
)

pause
```

## Manual Asset Migration

If the scripts don't work for any reason, you can manually copy these assets:

1. **Logo Files**:

   - Source: `aymanaboghonim-landing-page/src/assets/images/aymanaboghonim-logo.svg`
   - Destination: `elmentor-landing-page-clean/src/assets/images/aymanaboghonim-logo.svg`

2. **Founder Image**:

   - Source: `aymanaboghonim-landing-page/src/assets/images/founder-mohamed-radwan.jpg`
   - Destination: `elmentor-landing-page-clean/src/assets/images/founder-mohamed-radwan.jpg`

3. **Circles Diagram**:

   - Source: `aymanaboghonim-landing-page/public/aymanaboghonim-circles.png`
   - Destination: `elmentor-landing-page-clean/public/aymanaboghonim-circles.png`

4. **Gathering Images**:
   - Source: `aymanaboghonim-landing-page/public/gatherings/*.jpg`
   - Destination: `elmentor-landing-page-clean/public/gatherings/`

## Asset Verification After Migration

After copying assets, verify that:

1. All images load correctly in the browser
2. No console errors related to missing assets
3. Image sizes and aspect ratios are correct
4. SVG logos render properly at different sizes

## Troubleshooting

If images don't appear after migration:

1. Check browser console for 404 errors
2. Verify file paths in the component files
3. Ensure Vite is properly resolving asset paths
4. Try a hard refresh (Ctrl+F5) to clear the browser cache

## Conclusion

After following this guide, all placeholder assets should be replaced with the actual assets from the original project, completing the final step in the implementation process.
