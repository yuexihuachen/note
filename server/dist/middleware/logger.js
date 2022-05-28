"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _guozishuMangoLogger = _interopRequireDefault(require("guozishu-mango-logger"));

var _utility = _interopRequireDefault(require("utility"));

var _path = _interopRequireDefault(require("path"));

/**
 * 日志系统
 * ctx.logger[error | warn | info | debug](message)
 * 记录到root logger目录
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.logger = new _guozishuMangoLogger["default"]({
              dir: _path["default"].resolve(__dirname, '../../../log'),
              file: "".concat(_utility["default"].YYYYMMDD(), ".log")
            });
            _context.next = 3;
            return next();

          case 3:
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

exports["default"] = _default;