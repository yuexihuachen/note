"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cache = void 0;
exports.guid = guid;
exports.loadFile = loadFile;
exports.randomString = randomString;

var _nodeCache = _interopRequireDefault(require("node-cache"));

var cache = new _nodeCache["default"]();
/**
 * 
 * @param {Number} 字符串长度 default 8
 * @returns  'c5hswpn36ui'
 */

exports.cache = cache;

function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  return Math.random().toString(36).slice(2, length + 2);
}

;
/**
 * 
 * @param {Number} 字符串长度 default 5
 * @param {Number} 组合字符串长度 default 5
 * @returns 'gug9y-b35zn-vcbso-l5y6r-gylck' 
 */

function guid() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var combination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var str = '';

  for (var i = 0; i < combination; i++) {
    str += "".concat(randomString(length), "-");
  }

  return str.slice(0, str.length - 1);
}

;
/**
 * 加载器函数
 * @param {String} filepath 绝对路径
 *
 */

function loadFile(filepath) {
  try {
    // require js module
    var obj = require(filepath);

    if (!obj) return obj; // it's es module

    if (obj.__esModule) return 'default' in obj ? obj["default"] : obj;
    return obj;
  } catch (err) {
    err.message = "[util] load file: ".concat(filepath, ", error: ").concat(err.message);
    throw err;
  }
}