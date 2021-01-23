function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-btn", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-btn";
}




function Exit() {
    const { ipcRenderer } = require("electron");
    ipcRenderer.invoke("exit");
    console.log("The Exit Button is pressed");
}

function Minimize() {
    const { ipcRenderer } = require("electron");
    ipcRenderer.invoke("min");
    console.log("The Exit Button is pressed");
}

function Maximize() {
    const { ipcRenderer } = require("electron");
    ipcRenderer.invoke("max");
    console.log("The Exit Button is pressed");
}


function Suprise() {
    const { ipcRenderer } = require("electron");
    ipcRenderer.invoke("suprise");
    console.log("Opened the Suprise window");
}

function ExitSuprise() {
    const { ipcRenderer } = require("electron");
    ipcRenderer.invoke("exit-suprise");
    console.log("Opened the Suprise window");
}