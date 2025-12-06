# Build Automation Quick Reference

## npm Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run app in development mode |
| `npm run dev` | Same as npm start |
| `npm run build` | Build .deb package |
| `npm run rebuild` | Clean dist and rebuild |
| `npm run install:deb` | Install the built .deb package |
| `npm run uninstall` | Uninstall the application |
| `npm run reinstall` | Uninstall old and install new |
| `npm run build-and-install` | Build and install in one command |
| `npm run clean` | Remove all build artifacts |
| `npm run clean:dist` | Remove only dist directory |
| `npm test` | Run the app for testing |

## Makefile Targets

| Command | Description |
|---------|-------------|
| `make help` | Show all available commands |
| `make all` | Full workflow: clean, build, install |
| `make build-and-install` | Build and install in one command |
| `make dev` | Run in development mode |
| `make build` | Build .deb package |
| `make rebuild` | Clean and rebuild |
| `make icons` | Generate multi-size icons |
| `make install-deb` | Install the .deb package |
| `make uninstall` | Uninstall the application |
| `make reinstall` | Uninstall and reinstall |
| `make clean` | Remove all build artifacts |
| `make clean-dist` | Remove only dist directory |

## Common Workflows

### First Time Setup
```bash
make install        # Install npm dependencies
make icons          # Generate icon set
make build          # Build .deb package
make install-deb    # Install the package
```

### Development Cycle
```bash
# Make code changes...
make rebuild        # Rebuild the package
make reinstall      # Install updated version
```

### Quick Test
```bash
npm run build-and-install
```

### Clean Start
```bash
make clean          # Remove everything
make install        # Reinstall dependencies
make all            # Build and install
```
