"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

/**
 * 加载外部资源的公共方法 js/css
 */
var _default = function _default() {
  var source = {};

  try {
    var _JSON$parse = JSON.parse(_fs["default"].readFileSync("client/dist/asset-manifest.json")),
        assets = _JSON$parse.assets;

    source = assets;
  } catch (error) {
    console.error("[error] load asset-manifest.json file failed!");
    console.log('%c this is a message', 'color:#0f0;');
  }

  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
      var scope, loadSource;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              scope = ctx.state.scope;

              loadSource = function loadSource(key) {
                return "".concat(source["".concat(key)]);
              };

              ctx.state.scope = Object.assign({}, scope, {
                bundle: loadSource
              });
              _context.next = 5;
              return next();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports["default"] = _default;