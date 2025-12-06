# Adding Screenshots Guide

## How to Add Your Screenshot

Since you're contributing to this project, here's how to add a fresh screenshot:

### 1. Take a Screenshot

Launch the app and take a screenshot:
```bash
chatgpt-desktop-client
```

Use your screenshot tool (e.g., `gnome-screenshot`, `flameshot`, or `spectacle`):
```bash
# Using gnome-screenshot
gnome-screenshot -w

# Or using flameshot
flameshot gui
```

### 2. Save to Screenshots Directory

Save your screenshot to the `screenshots/` directory with a descriptive name:
```bash
# Recommended names:
screenshots/app-main-window.png
screenshots/app-in-use.png
screenshots/linux-desktop.png
```

### 3. Optimize the Image (Optional)

Optimize the image size for faster loading:
```bash
# Convert to WebP for smaller size
convert screenshots/your-screenshot.png -quality 85 screenshots/your-screenshot.webp

# Or optimize PNG
optipng screenshots/your-screenshot.png
```

### 4. Update README

Add your screenshot to the README:
```markdown
## 📸 **Screenshots**

![ChatGPT Desktop Client](screenshots/chatgpt.webp)

*Main application window*

![Your new screenshot](screenshots/your-screenshot.png)

*Description of your screenshot*
```

### Current Screenshots

The project currently has:
- `screenshots/chatgpt.webp` - Main banner image
- `screenshots/image1.png` - Application in use (1.1 MB - could be optimized)

### Recommendations

1. **Take a clean screenshot** showing:
   - The app running on your Linux desktop
   - ChatGPT interface visible
   - Linux desktop environment visible (taskbar, etc.)
   
2. **Optimize file size**:
   - Use WebP format for better compression
   - Or compress PNG files
   - Aim for under 500KB per screenshot

3. **Show Linux integration**:
   - Application icon in taskbar
   - Native window decorations
   - Linux desktop environment

### Example Command

```bash
# Take screenshot, save, and optimize
gnome-screenshot -w -f screenshots/app-running.png
convert screenshots/app-running.png -quality 85 -resize 1920x1080\> screenshots/app-running.webp
```

This will create an optimized WebP image ready to add to the README!
