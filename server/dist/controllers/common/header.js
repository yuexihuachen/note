"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = index;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _DbHelper = _interopRequireDefault(require("../../lib/DbHelper"));

var sqlite3 = new _DbHelper["default"]();

function index(_x, _x2) {
  return _index.apply(this, arguments);
}

function _index() {
  _index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(scope, ctx) {
    var category;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sqlite3.selectTable('category', ['*']);

          case 2:
            category = _context.sent;
            scope.category = category.data;
            scope.keywords = 'Front-end, back-end, linux, database, algorithm, design pattern';

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _index.apply(this, arguments);
}