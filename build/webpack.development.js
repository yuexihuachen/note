"use strict";
const path = require('path')
/**
 * 外部依赖配置
 */
const { entry } = require("./configuration/entry");
const { output } = require("./configuration/output");
const optimizationFun = require("./configuration/optimization");

const {
  cssModule,
  sACssModule,
  photoModule,
  fontsModule,
  jsModule,
} = require("./configuration/loaders");


const [cssLoader, sACssLoader, photoLoader, fontsLoader, jsLoader] = [
  cssModule(),
  sACssModule(),
  photoModule(),
  fontsModule(),
  jsModule(),
];

const {
  miniCssExtractPluginFun,
  compressionPluginFun,
  manifestPluginFun,
  cleanWebpackPluginFun,
} = require("./configuration/plugins");

let webpackEnv = "development";
const isEnvDevelopment = webpackEnv === "development";
const isEnvProduction = webpackEnv === "production";
const optimization = optimizationFun(isEnvProduction);

console.log(entry);
console.log(`output: ${JSON.stringify(output, null, 4)}`);
console.log(isEnvProduction);

const webpackConfig = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry,
  output,
  optimization,
  resolve: {
    modules: ["node_modules"],
    aliasFields: ["browser"],
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      photoLoader, 
      jsLoader, 
      cssLoader, 
      sACssLoader, 
      fontsLoader
    ],
  },
  plugins: [
    miniCssExtractPluginFun(),
    compressionPluginFun(),
    cleanWebpackPluginFun(),
    manifestPluginFun()
  ],
  performance: false,
  stats: {
    all: true,
    assets: true
  }
};

module.exports = webpackConfig;
