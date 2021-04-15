const electron = require('electron');
const app = electron.app;
app.allowRendererProcessReuse = false;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev =  require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280, 
    height: 720, 
    minWidth: 1280,
    minHeight: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  loadUrlWithNodeWorkaround(mainWindow, isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.removeMenu();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Workaround for https://github.com/electron/electron/issues/19554 otherwise fs does not work
function loadUrlWithNodeWorkaround(window, url) {
  setTimeout(() => {
    window.loadURL(url);
  }, 10);
}
