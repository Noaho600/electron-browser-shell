const { BrowserWindow } = require('electron');
let mainWindow = new BrowserWindow({
  width: 1200,
  height: 800,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
});

// Load your custom start page
mainWindow.loadFile('app/start.html');
