/**
 * node app.js --name=joe
 * args['name'] //joe
 */
const args = require('minimist')(process.argv.slice(2))
const env = process.env

module.exports = {
  ...env,
  ...args
}