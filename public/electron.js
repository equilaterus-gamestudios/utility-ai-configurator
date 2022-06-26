const electron = require('electron');
const remote = require('@electron/remote/main');
remote.initialize();

const app = electron.app;
app.allowRendererProcessReuse = false;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev =  require('electron-is-dev');

let mainWindow;
let fullscreen = false;


const customTitlebar = require('custom-electron-titlebar/main');
customTitlebar.setupTitlebar();

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, '/icon.png'),
    backgroundColor: '#000',
    width: 1280, 
    height: 720, 
    minWidth: 1280,
    minHeight: 720,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });
  remote.enable(mainWindow.webContents);
  loadUrlWithNodeWorkaround(mainWindow, isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();    
  } else {
    // Do nothing
  }
  customTitlebar.attachTitlebarToWindow(mainWindow);
  
  mainWindow.on('close', (e) => {
    const choice = electron.dialog.showMessageBoxSync(
      mainWindow,
      {
        type: 'question',
        buttons: ['Wait! I don\'t want to be evaporated (neither lose pending changes).', 'Yes. Close everything. (anyway, I can restore them later)'],
        title: 'Confirmation',
        message: 'Unsaved changes will be lost.'
      }
    );
    if (choice === 0) e.preventDefault();
  });

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

electron.ipcMain.handle('is-dev', async () => {
  return isDev;
})

electron.ipcMain.handle('fullscreen', async () => {
  fullscreen = !fullscreen;
  mainWindow.setFullScreen(fullscreen);
  return true;
})

// Workaround for https://github.com/electron/electron/issues/19554 otherwise fs does not work
function loadUrlWithNodeWorkaround(window, url) {
  setTimeout(() => {
    window.loadURL(url);
  }, 10);
}
