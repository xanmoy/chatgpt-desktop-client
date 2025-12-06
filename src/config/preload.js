import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    // Add specific IPC methods here as needed
    // Example: send: (channel, data) => ipcRenderer.send(channel, data),
    // Example: on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
});

// Note: Currently no IPC communication is needed for this app,
// but the structure is in place for future secure IPC implementation
