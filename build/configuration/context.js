const path = require('path');
const clientRootPath = path.resolve(__dirname, '../../client')
/**
 * clientRootPath client跟目录
 * clientEntryPath client 入口
 * clientOutputPath client 输出目录 
 */
module.exports = {
    clientRootPath,
    clientEntryPath: `${clientRootPath}/src`,
    clientOutputPath: `${clientRootPath}/dist`
}