const { app, BrowserWindow, autoUpdater, dialog } = require("electron");
const path = require("path");
const log = require("electron-log");
log.initialize();

log.transports.file.resolvePathFn = () =>
  path.join("D:", "UnitConverter", "logs/main.log");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 650,
    icon: "src/assets/icons/ico.ico",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.removeMenu();
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
let server = "http://192.168.29.71:4010";
let url = `${server}/update/${app.getVersion()}`;

autoUpdater.setFeedURL({ url });

setInterval(() => {
  autoUpdater.checkForUpdates();
}, 60000);

autoUpdater.on("checking-for-update", () => {
  console.log("Checking for update...");
  log.info("Checking for update...");
});
autoUpdater.on("update-available", () => {
  console.log("Update available.");
  log.info("Update available.");
});

autoUpdater.on("update-downloaded", (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: "info",
    buttons: ["Restart", "Later"],
    title: "Application Update",
    message: process.platform === "win32" ? releaseNotes : releaseName,
    detail:
      "A new version has been downloaded. Restart the application to apply the updates.",
  };

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall();
  });
});
autoUpdater.on("update-not-available", () => {
  console.log("Update not available.");
  log.info("Update not available.");
});

autoUpdater.on("error", (error) => {
  console.error("AutoUpdater error ghanta:", error);
  log.error("AutoUpdater error ghangta:", error);
});
