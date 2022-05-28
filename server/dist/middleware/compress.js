"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaCompress = _interopRequireDefault(require("koa-compress"));

/**
 * 针对网络传输的数据进行压缩来提高传输速度
 * 针对html css js json文件做gzip压缩
 * 超过2k就压缩
 */
var _default = function _default() {
  return (0, _koaCompress["default"])({
    filter: function filter(content_type) {
      var gaipFile = ['text/html', 'text/css', 'application/javascript', 'application/json'];
      return gaipFile.includes(content_type);
    },
    threshold: 1024,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    br: false
  });
};

exports["default"] = _default;