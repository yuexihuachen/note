"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _path = _interopRequireDefault(require("path"));

/**
 * 设置可访问目录
 */
var _default = function _default() {
  var opts = {
    maxage: 2160000000
  };

  if (process.env && process.env.NODE_ENV === 'development') {
    opts = {};
  }

  return (0, _koaStatic["default"])(_path["default"].resolve(__dirname, "../../../client/dist"), opts);
};

exports["default"] = _default;