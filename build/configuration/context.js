const path = require('path');

const clientRootPath = path.resolve(__dirname, '../../client')

module.exports = {
    clientRootPath,
    clientEntryPath: `${clientRootPath}/src`,
    clientOutputPath: `${clientRootPath}/dist`
}