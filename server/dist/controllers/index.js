"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkNote = checkNote;
exports.home = home;
exports.index = index;
exports.update = update;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _DbHelper = _interopRequireDefault(require("../lib/DbHelper"));

var sqlite3 = new _DbHelper["default"]();
var result = {
  message: "failed",
  code: -1,
  data: []
};

function index(_x, _x2) {
  return _index.apply(this, arguments);
}

function _index() {
  _index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.logger.error('hello');
            _context.next = 3;
            return ctx.render('index');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _index.apply(this, arguments);
}

function home(_x3, _x4) {
  return _home.apply(this, arguments);
}

function _home() {
  _home = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ctx.render('home');

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _home.apply(this, arguments);
}

function update(_x5, _x6) {
  return _update.apply(this, arguments);
}
/**
 * 搜索笔记
 * @param {*} ctx 
 * @param {*} next 
 * @returns 
 */


function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx, next) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return ctx.renderJSON({
              hello: 'update'
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _update.apply(this, arguments);
}

function checkNote(_x7, _x8) {
  return _checkNote.apply(this, arguments);
}

function _checkNote() {
  _checkNote = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ctx, next) {
    var searchParams, _ctx$request$body, article_id, category, title, isPush, conditions, extendSql, response;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            searchParams = ['article_id', 'title', 'category_id', 'is_push'];
            _ctx$request$body = ctx.request.body, article_id = _ctx$request$body.article_id, category = _ctx$request$body.category, title = _ctx$request$body.title, isPush = _ctx$request$body.isPush;
            conditions = {}, extendSql = '';

            if (category) {
              conditions.category_id = category;
            }

            if (title) {
              extendSql = "title like '%".concat(title, "%'");
            }

            if (isPush > -1) {
              conditions.is_push = isPush;
            }

            if (article_id) {
              conditions.article_id = article_id;
              searchParams.push('content');
            }

            _context4.next = 9;
            return sqlite3.selectTable("article", searchParams, conditions, extendSql);

          case 9:
            response = _context4.sent;

            if (response.message.includes("success")) {
              result = {
                data: response.data,
                code: 0,
                message: "success"
              };
            }

            _context4.next = 13;
            return ctx.renderJson(result);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _checkNote.apply(this, arguments);
}