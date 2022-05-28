"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allPage = allPage;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function allPage(_x, _x2) {
  return _allPage.apply(this, arguments);
}

function _allPage() {
  _allPage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var category, pagePath;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.state.scope.matchPage = ctx.params.page;
            category = ctx.state.scope.category;
            pagePath = 'index';

            if (!category.find(function (item) {
              return item.alias_name === ctx.params.page;
            })) {
              pagePath = 'error';
            }

            _context.next = 6;
            return ctx.render(pagePath);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _allPage.apply(this, arguments);
}