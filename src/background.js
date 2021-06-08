'use strict'

import { app, protocol, BrowserWindow, nativeImage, Menu, Tray } from 'electron'

import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
require('@electron/remote/main').initialize()

const { title, version } = require('../package.json')
app.setName(`${title} - ${version}`)
let tray = null
let mainWindow = null

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

async function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1000,
    maxWidth: 1300,
    minHeight: 800,
    maxHeight: 1200,
    // frame: false,
    show: false,
    movable: true,
    title: 'Charlinhos Tasks',
    webPreferences: {
      contextIsolation: true
    }
  })

  mainWindow.on('minimize', e => {
    e.preventDefault()
    mainWindow.hide()
  })

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.setTitle(app.name)
    mainWindow.show()
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    mainWindow.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.once('before-quit', () => {
  window.removeAllListeners('close')
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension({
        id: 'ljjemllljcmogpfapbkkighbhhppjdbg',
        electron: '>=1.2.1'
      })
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  tray = new Tray(nativeImage.createEmpty())
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Painel',
      click: () => {
        mainWindow.show()
      }
    },
    { label: 'Sair', role: 'quit' }
  ])
  tray.setToolTip(app.name)
  tray.setContextMenu(contextMenu)
  tray.on('click', () => {
    mainWindow.show()
  })

  await createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
