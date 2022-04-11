const path = require('path')
const env = process && process.env

module.exports = {
  serverRootPath: '/server',
  logFilePath: '/log',
  chunkMapPath: '/client/dist/assets.json',
  mode: 'development'
}