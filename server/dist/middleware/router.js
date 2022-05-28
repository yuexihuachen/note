"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaCompose = _interopRequireDefault(require("koa-compose"));

var _index = _interopRequireDefault(require("../routes/index"));

var _path = _interopRequireDefault(require("path"));

var _utils = require("../lib/utils");

var router = new _koaRouter["default"]();
var map = new Map();

var _default = function _default() {
  /**
   * 根据配置的路由映射到对应的控制器
   */
  _index["default"].forEach(function (route) {
    var _route$method = route.method,
        method = _route$method === void 0 ? 'get' : _route$method,
        match = route.match,
        controller = route.controller;
    var fileName = controller.split('.');

    var rootPath = _path["default"].resolve(__dirname, "../controllers/".concat(fileName[0], ".js")); // 避免重复加载


    if (!map.has(fileName[0])) {
      map.set(fileName[0], (0, _utils.loadFile)(rootPath));
    }

    var currentFun = map.get(fileName[0])[fileName[1]];
    router[method].call(router, match, currentFun);
  });

  return (0, _koaCompose["default"])([router.routes(), router.allowedMethods()]);
};

exports["default"] = _default;