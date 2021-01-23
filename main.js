const { app, BrowserWindow, ipcMain } = require("electron");

let splash;

app.on("ready", () => {
    // create main browser window
    mainWindow = new BrowserWindow({
        title: "Electron-Example",
        width: 1150,
        height: 650,
        minWidth: 550,
        minHeight: 417,
		
        webPreferences: {
            nodeIntegration: true,
        },
        frame: false,
        show: false,
    });

    splash = new BrowserWindow({ 
      width: 350, 
      height: 350, 
      transparent: true, 
      frame: false, 
      alwaysOnTop: true, 
	  resizable: false,
      title: "Electron-Example" 
    });


    splash.loadURL(`file://${__dirname}/app/splash.html`);
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

    ipcMain.handle("exit", () => {
      BrowserWindow.getFocusedWindow().destroy();
    });

    ipcMain.handle("min", () => {
      BrowserWindow.getFocusedWindow().minimize();
    });

    ipcMain.handle("max", () => {
      BrowserWindow.getFocusedWindow().maximize();
    });


    // if main window is ready to show, then destroy the splash window and show up the main window
    mainWindow.once("ready-to-show", () => {
        splash.destroy();
        mainWindow.show();
    });
});
