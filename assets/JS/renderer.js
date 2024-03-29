//dependencies
const electron = require('electron')

//definitions
const ipc = electron.ipcRenderer

function toggleA(a) {
    if (document.getElementById(a).checked) {
        ipc.send('Enable', a)
    } else {
        ipc.send('Disable', a)
    }
}

function toggleAll() {
    if (document.getElementById('Enable/Disable All').checked) {
        document.getElementById('God Mode').checked = true
        document.getElementById('Rank S').checked = true
        document.getElementById('Codename Immortal').checked = true
        document.getElementById('Infinite Lives').checked = true
        document.getElementById('Infinite Crystals').checked = true
        document.getElementById('Unlock Weapons').checked = true
        document.getElementById('Max Weapons').checked = true
        ipc.send('Enable', 'All')
    } else {
        document.getElementById('God Mode').checked = false
        document.getElementById('Rank S').checked = false
        document.getElementById('Codename Immortal').checked = false
        document.getElementById('Infinite Lives').checked = false
        document.getElementById('Infinite Crystals').checked = false
        document.getElementById('Unlock Weapons').checked = false
        document.getElementById('Max Weapons').checked = false
        ipc.send('Disable', 'All')
    }
}