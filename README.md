# ChatGPT Desktop Client for Linux

A lightweight, secure, and native desktop client for ChatGPT, **built specifically for Linux users**. While OpenAI provides official apps for Windows and macOS, this project brings a dedicated, open-source ChatGPT experience to the Linux desktop.

> **Note**: This is an enhanced fork of [xanmoy/chatgpt-desktop-client](https://github.com/xanmoy/chatgpt-desktop-client) with significant security improvements, build automation, and Linux-focused enhancements.

## 🔄 **What's Different in This Fork?**

This fork includes major improvements over the original:

- 🔒 **Security**: Fixed all 8 vulnerabilities, updated Electron to v39.2.6
- 📦 **Packaging**: Changed from Snap to native .deb packages
- 🤖 **Automation**: Added 12 npm scripts + comprehensive Makefile
- 🎨 **Icons**: Proper multi-size Linux icon integration
- 💾 **UX**: Persistent login sessions (no re-login on restart)
- 📚 **Documentation**: Linux-focused README and build guides

> [!IMPORTANT]
> **Login Notice**: Google account login is not supported. Please use **Microsoft account** or **email/password** to sign in. Anonymous usage is also available.

![ChatGPT Desktop Client](https://raw.githubusercontent.com/xanmoy/chatgpt-desktop-client/refs/heads/main/screenshots/chatgpt.webp)

## 🐧 **Why Linux?**

OpenAI's official ChatGPT desktop app is available for Windows and macOS, but **not for Linux**. This project fills that gap by providing:

- **Native Linux integration** with proper .deb packages
- **Better performance** than running in a browser
- **System tray support** and desktop notifications
- **Persistent sessions** - stay logged in between restarts
- **Enhanced security** with the latest Electron and security patches
- **Open source** - inspect, modify, and contribute to the code

![ChatGPT Desktop Client](screenshots/image1.png)

## 📦 **Installation**

### **Option 1: Install Pre-built .deb Package (Recommended)**

Download the latest `.deb` package from the [Releases](https://github.com/git-aniket/chatgpt-desktop-client/releases) page and install:

```bash
sudo apt install ./chatgpt-desktop-client_*_amd64.deb
```

### **Option 2: Build From Source**

1. **Clone the repository**:

```bash
git clone https://github.com/git-aniket/chatgpt-desktop-client.git
cd chatgpt-desktop-client
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run in development mode**:

```bash
npm start
```

4. **Build the .deb package**:

```bash
npm run dist
```

This creates `dist/chatgpt-desktop-client_1.0.1_amd64.deb`

5. **Install the built package**:

```bash
sudo apt install ./dist/chatgpt-desktop-client_1.0.1_amd64.deb
```

## 🚀 **Usage**

After installation, launch the app:

**From Application Menu**: Search for "ChatGPT Desktop"

**From Terminal**:
```bash
chatgpt-desktop-client
```

## 🤖 **Build Automation**

This project includes automation scripts to streamline development and testing.

### **Using npm Scripts**

```bash
# Development
npm start                  # Run app in development mode
npm run dev                # Same as npm start

# Building
npm run build              # Build .deb package
npm run rebuild            # Clean dist and rebuild

# Installation
npm run install:deb        # Install the built .deb package
npm run uninstall          # Uninstall the application
npm run reinstall          # Uninstall old version and install new
npm run build-and-install  # Build and install in one command

# Cleaning
npm run clean              # Remove all build artifacts
npm run clean:dist         # Remove only dist directory

# Testing
npm test                   # Run the app for testing
```

### **Using Makefile**

```bash
# Quick reference
make help                  # Show all available commands

# Common workflows
make all                   # Clean, build, and install (full workflow)
make build-and-install     # Build and install in one command
make dev                   # Run in development mode

# Building
make build                 # Build .deb package
make rebuild               # Clean and rebuild
make icons                 # Generate multi-size icons

# Installation
make install-deb           # Install the .deb package
make uninstall             # Uninstall the application
make reinstall             # Uninstall and reinstall

# Cleaning
make clean                 # Remove all build artifacts
make clean-dist            # Remove only dist directory
```

**Quick Start for Development:**
```bash
# First time setup
make install               # Install dependencies
make icons                 # Generate icons
make build-and-install     # Build and install

# Daily development
make dev                   # Test changes
make rebuild               # Rebuild after changes
make reinstall             # Reinstall to test
```

## 🗑️ **Uninstallation**

```bash
sudo apt remove chatgpt-desktop-client
```

## 🔧 **Requirements**

- **OS**: Debian, Ubuntu, Linux Mint, or other Debian-based distributions
  - ✅ Tested on **Debian 13 (Trixie)**
- **Node.js**: v16 or higher (for building from source)
- **npm**: v7 or higher (for building from source)

## 🔐 **Security**

This project takes security seriously:

- ✅ **Zero vulnerabilities** (verified with `npm audit`)
- ✅ **Latest Electron** (v39.2.6+) with all security patches
- ✅ **Secure IPC** using contextBridge API
- ✅ **No telemetry** or tracking
- ✅ **Open source** - audit the code yourself

## 🤝 **Contributing**

Contributions are welcome! This project is built by the Linux community, for the Linux community.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 📜 **License**

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.

## 🙏 **Acknowledgments**

### Original Project
This project is a fork of [chatgpt-desktop-client](https://github.com/xanmoy/chatgpt-desktop-client) by **Tanmoy Ganguly** ([@xanmoy](https://github.com/xanmoy)). Thank you for creating the foundation of this project!

### Enhancements by
**Aniket Mazumder** ([@git-aniket](https://github.com/git-aniket))
- Security fixes and Electron updates
- Build automation and .deb packaging
- Linux desktop integration improvements
- Documentation enhancements

### Technologies
- **Electron** - Framework for building cross-platform desktop apps
- **OpenAI** - For creating ChatGPT
- **Linux Community** - For inspiration and support

## ⚠️ **Disclaimer**

This is an **unofficial** third-party client. It is not affiliated with, endorsed by, or connected to OpenAI. This project simply provides a desktop wrapper around the ChatGPT web interface for Linux users.

---

**Made with ❤️ for the Linux community**

