function Exit() {
    const { ipcRenderer } = require('electron')
    ipcRenderer.invoke("exit");
    console.log("The Exit Button is pressed");
}

function Minimize() {
    const { ipcRenderer } = require('electron')
    ipcRenderer.invoke("min");
    console.log("The Exit Button is pressed");
}

function Maximize() {
    const { ipcRenderer } = require('electron')
    ipcRenderer.invoke("max");
    console.log("The Exit Button is pressed");
}