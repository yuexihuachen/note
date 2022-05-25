const { clientOutputPath } = require('./context')
const { NODE_ENV } = require('./env')

/**
 * 
 * output 输出目录 
 */
const outputPath = () => {
  let options = {
    path: clientOutputPath,
    filename: '[name].js',
  }
  if (NODE_ENV === 'production') {
    options =   {
      path: clientOutputPath,
      hashDigestLength: 16,
      filename: '[name]-[hash].js'
    }
  }
  return options
}
/**
 * 输出
 */
module.exports = {
  output: outputPath()
}