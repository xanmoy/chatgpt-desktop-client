import fs from 'fs';
import { app, BrowserWindow, shell, screen, session } from 'electron';
import path from 'path';
import { config } from './config/index.js'; // Import platform-specific user agent
import { fileURLToPath } from 'url';

// Calculate __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define path for storing window state
const stateFilePath = path.join(app.getPath('userData'), 'window-state.json');
const appUrl = 'https://chat.openai.com/'; // ChatGPT URL

let window; // Declare window globally to be accessible in all parts of the app

// Disable hardware acceleration to fix V-Sync issues (should be called before app is ready)
app.disableHardwareAcceleration();

/**
 * Loads saved window state and ensures it is within available screen bounds.
 */
function loadWindowState() {
    try {
        if (!fs.existsSync(stateFilePath)) {
            return getCenteredWindowState(800, 600);
        }

        const rawData = fs.readFileSync(stateFilePath, 'utf-8');
        const state = JSON.parse(rawData);

        if (!state.width || !state.height || isNaN(state.x) || isNaN(state.y)) {
            throw new Error("Invalid window state data");
        }

        const displays = screen.getAllDisplays();
        const display = displays.find(d => d.id === state.displayId);

        if (!display) {
            return getCenteredWindowState(state.width, state.height);
        }

        if (
            state.x < display.bounds.x || state.y < display.bounds.y ||
            state.x + state.width > display.bounds.x + display.bounds.width ||
            state.y + state.height > display.bounds.y + display.bounds.height
        ) {
            return getCenteredWindowState(state.width, state.height, display.bounds);
        }

        return state;
    } catch (error) {
        console.error("Error loading window state:", error);
        return getCenteredWindowState(800, 600);
    }
}

/**
 * Saves window state before closing.
 */
function saveWindowState() {
    if (window && !window.isMinimized() && !window.isFullScreen()) {
        try {
            const bounds = window.getBounds();
            const display = screen.getDisplayMatching(bounds);

            fs.writeFileSync(stateFilePath, JSON.stringify({
                ...bounds,
                displayId: display.id
            }));
        } catch (error) {
            console.error("Error saving window state:", error);
        }
    }
}

/**
 * Calculates a centered window state.
 */
function getCenteredWindowState(width, height, bounds = screen.getPrimaryDisplay().bounds) {
    return {
        width,
        height,
        x: Math.max(bounds.x, Math.floor(bounds.x + (bounds.width - width) / 2)),
        y: Math.max(bounds.y, Math.floor(bounds.y + (bounds.height - height) / 2)),
        displayId: screen.getPrimaryDisplay().id
    };
}

/**
 * Handles external links opening outside the app.
 */
function onNewWindow(details) {
    console.log("Opening external link:", details.url); // Log URL to check if it's the right one
    shell.openExternal(details.url); // Open sign-in page in default browser
    return { action: 'deny' }; // Block inside Electron
}

/**
 * Creates the main application window.
 */
function createWindow() {
    const windowState = loadWindowState();

    window = new BrowserWindow({
        width: windowState.width,
        height: windowState.height,
        x: windowState.x,
        y: windowState.y,
        icon: path.join(__dirname, 'assets/icon.png'),
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false,  // Security best practice
            contextIsolation: true,
            partition: 'persist:chatgpt-session', // Ensures cookies & session persist
            sandbox: true,            // Enforces security for content
            preload: path.join(__dirname, 'config', 'preload.js') // Reference to your preload.js file
        }
    });

    window.loadURL(appUrl, {
        userAgent: config.userAgent // Use the user agent from config
    });

    window.webContents.setWindowOpenHandler(onNewWindow);
    window.on('close', saveWindowState);
}

/**
 * Ensures only a single instance of the app runs.
 */
const appLock = app.requestSingleInstanceLock();
if (!appLock) {
    app.quit();
} else {
    app.on('second-instance', (event, args) => {
        if (window) {
            event.preventDefault();
            window.focus();
        }
    });

    app.whenReady().then(async () => {
        const chatgptSession = session.fromPartition('persist:chatgpt-session');

        // Force OpenAI & Google sign-in to open in an external browser
        chatgptSession.webRequest.onBeforeRequest(
            { urls: ['https://accounts.google.com/*', 'https://chat.openai.com/auth/*'] },
            (details, callback) => {
                console.log("OAuth URL blocked, opening in external browser:", details.url); // More logging
                shell.openExternal(details.url); // Open sign-in page in default browser
                callback({ cancel: true }); // Block inside Electron
            }
        );

        createWindow();
    });
}
