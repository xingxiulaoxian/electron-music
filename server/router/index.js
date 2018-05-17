const fs = require('fs');

// fs.readdirSync()

// console.log(routerMap)

module.exports = function (app) {
  // app.use('/api/' + )
  let dirs = fs.readdirSync(__dirname);
  let routerMap = {};
  dirs.forEach(function (item, index) {
    let original = item.replace(/\.js$/, '');
    let name = original.replace('_', '/');
    console.log('/' + name);
    app.use('/api/' + name, require(__dirname + '/' + original));
    // routerMap[original] = require(__dirname + '/' + original)
  });
}