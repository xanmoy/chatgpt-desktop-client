.PHONY: help install dev build clean rebuild install-deb uninstall reinstall build-and-install test icons

# Default target
help:
	@echo "ChatGPT Desktop Client - Build Automation"
	@echo ""
	@echo "Available targets:"
	@echo "  make install           - Install npm dependencies"
	@echo "  make dev               - Run app in development mode"
	@echo "  make build             - Build .deb package"
	@echo "  make icons             - Generate multi-size icons"
	@echo "  make clean             - Remove all build artifacts"
	@echo "  make clean-dist        - Remove only dist directory"
	@echo "  make rebuild           - Clean and rebuild"
	@echo "  make install-deb       - Install the built .deb package"
	@echo "  make uninstall         - Uninstall the application"
	@echo "  make reinstall         - Uninstall and reinstall .deb"
	@echo "  make build-and-install - Build and install in one command"
	@echo "  make test              - Run the app for testing"
	@echo "  make all               - Full workflow: clean, build, install"

# Install npm dependencies
install:
	npm install

# Run in development mode
dev:
	npm start

# Build .deb package
build:
	npm run dist

# Generate multi-size icons from source
icons:
	@echo "Generating multi-size icons..."
	@mkdir -p build/icons
	@convert assets/icon.png -resize 16x16 build/icons/16x16.png
	@convert assets/icon.png -resize 32x32 build/icons/32x32.png
	@convert assets/icon.png -resize 48x48 build/icons/48x48.png
	@convert assets/icon.png -resize 64x64 build/icons/64x64.png
	@convert assets/icon.png -resize 128x128 build/icons/128x128.png
	@convert assets/icon.png -resize 256x256 build/icons/256x256.png
	@cp assets/icon.png build/icons/512x512.png
	@echo "Icons generated successfully!"

# Clean all build artifacts
clean:
	rm -rf dist build/icons node_modules package-lock.json
	@echo "Cleaned all build artifacts"

# Clean only dist directory
clean-dist:
	rm -rf dist
	@echo "Cleaned dist directory"

# Rebuild from scratch
rebuild: clean-dist build

# Install the built .deb package
install-deb:
	sudo apt install -y ./dist/chatgpt-desktop-client_*_amd64.deb

# Uninstall the application
uninstall:
	sudo apt remove -y chatgpt-desktop-client

# Reinstall (remove old version first)
reinstall:
	-sudo apt remove -y chatgpt-desktop-client 2>/dev/null || true
	$(MAKE) install-deb

# Build and install in one command
build-and-install: build reinstall
	@echo "Build and installation complete!"

# Run the app for testing
test:
	npm start

# Full workflow: clean, build, and install
all: clean-dist build reinstall
	@echo "Full build and installation complete!"
