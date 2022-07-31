
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssNormalize = require("postcss-normalize");

/**
 * loaders 用于对模块的源代码进行转换
 * loader 可以在 import 或 "load(加载)" 模块时预处理文件
 * @param {*} preProcessor 
 * @returns 
 */
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: 'css-loader',
      options: cssOptions
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
          () => [
            require("postcss-flexbugs-fixes"),
            require("postcss-preset-env")({
              autoprefixer: {
                flexbox: "no-2009",
              },
              stage: 3,
            }),
            postcssNormalize(),
          ]
        ]
      }
      }
    }
  ].filter(Boolean)

  if (preProcessor) {
    loaders.push({
      loader: preProcessor,
      options: {
        // `dart-sass` 是首选
        implementation: require('sass'),
      },
    })
  }
  return loaders
}

// style文件regexes
const cssRegex = /\.css$/
const sassRegex =  /\.(scss|sass)$/
const photoRegex = /\.(png|jpg|gif|bmp|jpeg)$/
const fontsRegex = /\.(woff|woff2|eot|ttf|otf|svg)$/
const jsRegex = /\.(js|mjs|jsx|ts|tsx)$/

const cssModule = function () {
  return {
    test: cssRegex,
    use: getStyleLoaders({
      importLoaders: 1,
      sourceMap: true
    }),
    sideEffects: true
  }
}

const sACssModule = function () {
  return {
    test: sassRegex,
    use: getStyleLoaders({
      importLoaders: 3,
    }, 'sass-loader'),
    sideEffects: true
  }
}

const photoModule = () => {
  return {
    test: photoRegex,
    type: "asset/resource",
    generator: {
      filename: 'images/[name][ext][query]'
    }
  }
}

const fontsModule = () => {
  return {
    test: fontsRegex,
    type: "asset/resource",
    generator: {
      filename: 'common/font/[name][ext][query]'
    }
  };
}

const jsModule = () => {
  return  {
    test: jsRegex,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: "babel-loader"
      },
      {
        loader: 'thread-loader' 
      },
    ],
  }
}

module.exports = {
  cssModule,
  sACssModule,
  photoModule,
  fontsModule,
  jsModule
}