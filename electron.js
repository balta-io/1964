// electron-packager ./ 2doo --platform=win32 --arch=x64 --version=1.1.0 --out=./build --overwrite=true --asar=true --icon=C:\dev\2doo\wwwroot\assets\img\2doo.ico

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ width: 550, height: 900, icon: 'wwwroot/assets/img/2doo.png' })
    mainWindow.loadURL(`file://${__dirname}/wwwroot/index.html`)
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})