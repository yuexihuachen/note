const path = require('path')
const env = process && process.env

module.exports = {
  staticServer: path.resolve(__dirname, '../client'),
  faviconPath: path.resolve(__dirname, '../favicons'),
  logFilePath: path.resolve(__dirname, '../log'),
  chunkMapPath: path.resolve(__dirname, '../client/dist/assets.json'),
  mode: 'development',
  dbInfomation:{
    host:env.DB_HOST || 'localhost',
    user:env.DB_USER || 'root',
    password:env.DB_PASSWORD || 'my-secret-pw',
    dataBase:env.DATABASE || 'learnDB'
  }
}