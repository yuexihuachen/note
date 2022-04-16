
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssNormalize = require("postcss-normalize");

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
const photoRegex = /\.(png|jpe?g|gif|bmp|jpeg)$/
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
      filename: '[path]name][ext][query]'
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
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-transform-runtime",
            "@babel/plugin-proposal-class-properties"
          ],
        },
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