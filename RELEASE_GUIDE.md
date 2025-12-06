# Step-by-Step Release Guide

## Current Status
✅ GitHub Actions workflow is set up (`.github/workflows/release.yml`)  
⚠️ You have uncommitted changes that need to be pushed first

---

## Step 1: Commit and Push Current Changes

```bash
# Add all changes
git add .

# Commit
git commit -m "Add automated release workflow and improvements

- Added GitHub Actions for automated .deb building
- Updated README with fork acknowledgment and login notice
- Fixed security vulnerabilities (0 remaining)
- Added build automation (Makefile + npm scripts)
- Updated to Electron v39.2.6
- Added multi-size icon support
- Enabled persistent login sessions
- Changed packaging from Snap to .deb"

# Push to GitHub
git push origin beta
```

---

## Step 2: Create Your First Release

### Option A: Using Git Commands (Recommended)

```bash
# Make sure you're on the latest commit
git pull origin beta

# Create and push a tag (this triggers GitHub Actions)
git tag v1.0.1
git push origin v1.0.1
```

### Option B: Using GitHub Web Interface

1. Go to: https://github.com/git-aniket/chatgpt-desktop-client/releases
2. Click **"Draft a new release"**
3. Click **"Choose a tag"** → Type `v1.0.1` → Click **"Create new tag: v1.0.1 on publish"**
4. Title: `v1.0.1 - Initial Release`
5. Click **"Publish release"**

---

## Step 3: Watch GitHub Actions Build

1. Go to: https://github.com/git-aniket/chatgpt-desktop-client/actions
2. You'll see the workflow running
3. Wait 2-3 minutes for it to complete
4. ✅ When done, the .deb file will be attached to the release

---

## Step 4: Verify the Release

1. Go to: https://github.com/git-aniket/chatgpt-desktop-client/releases
2. You should see `v1.0.1` with the .deb file attached
3. Download and test the .deb file:

```bash
wget https://github.com/git-aniket/chatgpt-desktop-client/releases/download/v1.0.1/chatgpt-desktop-client_1.0.1_amd64.deb
sudo apt install ./chatgpt-desktop-client_1.0.1_amd64.deb
```

---

## Future Releases

For future releases, just:

```bash
# 1. Update version in package.json
nano package.json  # Change "version": "1.0.2"

# 2. Commit
git add package.json
git commit -m "Bump version to 1.0.2"
git push origin beta

# 3. Tag and push
git tag v1.0.2
git push origin v1.0.2

# 4. GitHub Actions does the rest automatically!
```

---

## What GitHub Actions Will Do Automatically

When you push a tag (e.g., `v1.0.1`):

1. ✅ Checkout your code
2. ✅ Install Node.js and dependencies
3. ✅ Generate multi-size icons
4. ✅ Build the .deb package
5. ✅ Create a GitHub release
6. ✅ Upload the .deb file
7. ✅ Generate release notes

**You don't have to do anything manually!** Just push a tag and wait.

---

## Troubleshooting

### If GitHub Actions Fails:

1. Go to Actions tab
2. Click on the failed workflow
3. Check the error logs
4. Fix the issue
5. Delete the tag: `git tag -d v1.0.1 && git push origin :refs/tags/v1.0.1`
6. Try again

### If You Need to Test Locally First:

```bash
make clean-dist
make icons
make build
# Check if dist/chatgpt-desktop-client_1.0.1_amd64.deb was created
```

---

## Quick Commands Summary

```bash
# First release
git add .
git commit -m "Initial release preparation"
git push origin beta
git tag v1.0.1
git push origin v1.0.1

# Wait for GitHub Actions to complete
# Check: https://github.com/git-aniket/chatgpt-desktop-client/releases
```

That's it! 🚀
