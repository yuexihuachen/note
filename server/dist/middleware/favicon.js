"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaFavicon = _interopRequireDefault(require("koa-favicon"));

var _path = _interopRequireDefault(require("path"));

/**
 * 加载favicon icon
 */
var _default = function _default() {
  return (0, _koaFavicon["default"])(_path["default"].resolve(__dirname, "../../../favicon.ico"));
};

exports["default"] = _default;