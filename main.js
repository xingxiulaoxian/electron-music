const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')
  function createWindow () {
    // 创建一个窗口.
    win = new BrowserWindow({width: 800, height: 600, frame: false})
      
    // 然后加载应用的 index.html。
    win.loadURL(url.format({
      pathname: path.join(__dirname, '/public/index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }
  
  app.on('ready', createWindow)
