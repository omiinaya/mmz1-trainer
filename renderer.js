//dependencies
const electron = require('electron')

//definitions
const ipc = electron.ipcRenderer

//send boolean as an arg depending on state of the button
function toggleA(a) {
    if (document.getElementById(a).checked) {
        ipc.send('Enable', a)
        if (a == 'Enable/Disable All') {
            enableAll()
        }
    } else {
        ipc.send('Disable', a)
        if (a == 'Enable/Disable All') {
            enableAll()
        }
    }
}

function enableAll() {
    if (document.getElementById('Enable/Disable All').checked) {
        document.getElementById('God Mode').checked = true
        document.getElementById('Rank S').checked = true
        document.getElementById('Infinite Lives').checked = true
        document.getElementById('Infinite Crystals').checked = true
    } else {
        document.getElementById('God Mode').checked = false
        document.getElementById('Rank S').checked = false
        document.getElementById('Infinite Lives').checked = false
        document.getElementById('Infinite Crystals').checked = false
    }
}