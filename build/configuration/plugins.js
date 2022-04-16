/**
 * 插件
 */
// 将样式表抽离成专门的单独文件。
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 提供带 Content-Encoding 编码的压缩版的资源（gzip压缩）
const CompressionPlugin = require('compression-webpack-plugin')
// 针对css容错处理，修复
const safePostCssParser = require('postcss-safe-parser')
// 清理插件--清理 /dist 文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// manifest 缓存
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// 加载normalize.css或sanitize.css 提供了跨浏览器的高度一致性。
const postcssNormalize = require('postcss-normalize')
const webpack = require('webpack')
const NODE_ENV = 'development'

const name = '[name]'
const hash = '[hash]'

function devToolPluginFun () {
  return new webpack.EvalSourceMapDevToolPlugin({ // js source map
    test: /\.(js|mjs)$/,
    filename: `${name}${NODE_ENV === 'production' ? `-${hash}` : ''}.js.map`
  })
}

function miniCssExtractPluginFun () {
  return new MiniCssExtractPlugin({ // 适用于所有用例，css抽出
    filename: `${name}${NODE_ENV === 'production' ? `-${hash}` : ''}.css`
  })
}

function optimizeCSSAssetsPluginFun () {
  return new OptimizeCSSAssetsPlugin({
    cssProcessorOptions: {
      parser: safePostCssParser,
      map: {
        inline: false,
        annotation: true
      }
    }
  })
}

function compressionPluginFun () {
  return new CompressionPlugin({
    algorithm: 'gzip',
    test: /\.(js|css)$/
  })
}

function manifestPluginFun () {
  return new WebpackManifestPlugin({
    fileName: 'manifest.json',
    publicPath: '/',
    filter: function (file) {
      const flag = file.path.match(/.(js|css)$/)// && !file.path.includes('assets\/dist/')
      return flag
    },
    generate: (seed, files) => {
      const manifestFiles = files.reduce(function (manifest, file) {
        manifest[file.name.replace(/\//gmi, '.')] = file.path
        return manifest
      }, seed)
      
      return {
        assets: manifestFiles
      }
    },
    serialize: (manifest) => JSON.stringify(manifest, null, 4)
  })
}

function CopyPluginFun(){
  return new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "../../client/src/pages/note/markdown-it_files"),
        to: path.resolve(__dirname, "../../client/dist/assets/note/"), 
      },
    ],
  })
}


function cleanWebpackPluginFun () {
  return new CleanWebpackPlugin()
}

module.exports = {
  devToolPluginFun,
  miniCssExtractPluginFun,
  optimizeCSSAssetsPluginFun,
  compressionPluginFun,
  manifestPluginFun,
  CopyPluginFun,
  cleanWebpackPluginFun
}