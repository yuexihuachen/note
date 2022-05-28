"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaBody = _interopRequireDefault(require("koa-body"));

/**
 * 请求头解析
 * json and form 文件大小100m
 * 不支持多文件上传
 */
var _default = function _default() {
  return (0, _koaBody["default"])({
    jsonLimit: '100mb',
    multipart: false,
    formidable: {
      maxFieldsSize: 100 * 1024 * 1024
    }
  });
};

exports["default"] = _default;