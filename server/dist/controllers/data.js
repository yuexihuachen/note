"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.category = category;
exports.checkUser = checkUser;
exports.setArticle = setArticle;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _login = require("./login");

var _DbHelper = _interopRequireDefault(require("../lib/DbHelper"));

var sqlite3 = new _DbHelper["default"]();
var result = {
  message: "failed",
  data: []
};
/**
 * 文章类别
 * @param {*} ctx 
 * @param {*} next 
 * @returns array
 */

function category(_x, _x2) {
  return _category.apply(this, arguments);
}
/**
 * 查询用户信息
 * @param {*} ctx koa上下文
 * @param {*} params 用户名 密码
 * @returns 查询结果
 */


function _category() {
  _category = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var category;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sqlite3.selectTable('category', ['*']);

          case 2:
            category = _context.sent;
            _context.next = 5;
            return ctx.renderJSON(category);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _category.apply(this, arguments);
}

function checkUser(_x3, _x4) {
  return _checkUser.apply(this, arguments);
}
/**
 * 新增文章
 * @param {*} ctx 
 * @param {*} next 
 * @returns 
 */


function _checkUser() {
  _checkUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, _ref) {
    var uname, pwd, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            uname = _ref.uname, pwd = _ref.pwd;
            _context2.next = 3;
            return sqlite3.selectTable('users', ['user_id'], {
              user_name: uname,
              pwd: pwd
            });

          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _checkUser.apply(this, arguments);
}

function setArticle(_x5, _x6) {
  return _setArticle.apply(this, arguments);
}

function _setArticle() {
  _setArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx, next) {
    var _yield$checkLogin, isLogin, _ctx$request$body, id, category, title, content, isPush, response;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _login.checkLogin)(ctx, next);

          case 2:
            _yield$checkLogin = _context3.sent;
            isLogin = _yield$checkLogin.data.isLogin;

            if (isLogin) {
              _context3.next = 7;
              break;
            }

            result.message = 'not login';
            return _context3.abrupt("return", ctx.renderJson(result));

          case 7:
            _ctx$request$body = ctx.request.body, id = _ctx$request$body.id, category = _ctx$request$body.category, title = _ctx$request$body.title, content = _ctx$request$body.content, isPush = _ctx$request$body.isPush;
            response = null;

            if (!id) {
              _context3.next = 15;
              break;
            }

            _context3.next = 12;
            return sqlite3.updateTableRows("article", {
              title: title,
              content: content,
              category_id: category,
              is_push: isPush
            }, {
              article_id: id
            });

          case 12:
            response = _context3.sent;
            _context3.next = 18;
            break;

          case 15:
            _context3.next = 17;
            return sqlite3.insertTable("article", {
              title: title,
              content: content,
              category_id: category,
              is_push: isPush
            });

          case 17:
            response = _context3.sent;

          case 18:
            if (response.message.includes("success")) {
              result = {
                data: response.data,
                message: "success"
              };
            }

            _context3.next = 21;
            return ctx.renderJson(result);

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _setArticle.apply(this, arguments);
}