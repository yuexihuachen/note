const safePostCssParser = require("postcss-safe-parser");
const TerserPlugin = require("terser-webpack-plugin");
// 用于优化\最小化CSS。
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = function (isEnvProduction) {
  return {
    minimize: isEnvProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "initial", // 默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
      minSize: 10000, // 生成的最小块大小
      minChunks: 1, // 共享模块的最小块数
      automaticNameDelimiter: "-", // 默认生成块名字的间隔符
      name: "common.frame", // chunk的名字，如果设成true，会根据被提取的chunk自动生成。
      cacheGroups: {
        // 切割成的每一个新chunk就是一个cache group。
        // 抽離 node_modules
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  };
};
