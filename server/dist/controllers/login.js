"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = Login;
exports.checkLogin = checkLogin;
exports.isLogin = isLogin;
exports.search = search;
exports.searchNote = searchNote;
exports.update = update;
exports.write = write;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _data = require("./data");

var _utils = require("../lib/utils");

var _DbHelper = _interopRequireDefault(require("../lib/DbHelper"));

var sqlite3 = new _DbHelper["default"]();
var result = {
  message: "failed",
  data: []
};

function update(_x, _x2) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ctx.renderJson({
              login: 'login update hello 123'
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _update.apply(this, arguments);
}

function write(_x3, _x4) {
  return _write.apply(this, arguments);
}
/**
 * 是否登录
 * @param {*} ctx koa上下文
 * @param {*} next 路由
 * @returns isLogin 0: 未登录， 1，登录
 */


function _write() {
  _write = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ctx.render('write');

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _write.apply(this, arguments);
}

function checkLogin(_x5, _x6) {
  return _checkLogin.apply(this, arguments);
}
/**
 * 判断当前环境是否登录
 * @param {*} ctx koa上下文
 * @param {*} next 路由
 * @returns isLogin 0: 未登录， 1，登录
 */


function _checkLogin() {
  _checkLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx, next) {
    var isLogin, cacheToken, cookieToken;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            isLogin = 0;
            cacheToken = _utils.cache.get("token");
            cookieToken = ctx.cookies.get("token");

            if (cacheToken && cacheToken.length && cacheToken === cookieToken) {
              isLogin = 1;
            }

            return _context3.abrupt("return", {
              data: {
                isLogin: isLogin
              },
              message: 'success'
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _checkLogin.apply(this, arguments);
}

function isLogin(_x7, _x8) {
  return _isLogin.apply(this, arguments);
}
/**
 * 用户登录
 * @param {*} ctx koa上下文
 * @param {*} params 用户名 密码
 * @returns 查询结果
 */


function _isLogin() {
  _isLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ctx, next) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return checkLogin(ctx, next);

          case 2:
            data = _context4.sent;
            _context4.next = 5;
            return ctx.renderJSON(data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _isLogin.apply(this, arguments);
}

function Login(_x9, _x10) {
  return _Login.apply(this, arguments);
}
/**
 * 搜索page
 * @param {*} ctx 
 * @param {*} next 
 */


function _Login() {
  _Login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(ctx, next) {
    var query, date, time, pwds, result, data, token;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            query = ctx.request.body;
            date = new Date();
            time = "".concat(date.getFullYear()).concat(date.getMonth() + 1);
            pwds = [];

            if (query.pwd.includes('#')) {
              pwds = query.pwd.split('#');
            }

            result = {
              data: null,
              message: 'failed'
            };
            _context5.next = 8;
            return (0, _data.checkUser)(ctx, {
              uname: query.uname,
              pwd: pwds[0]
            });

          case 8:
            data = _context5.sent;

            if (time === pwds[1] && data.data.length && data.data[0].user_Id) {
              result = {
                data: data,
                message: 'success'
              };
              token = (0, _utils.guid)(5);

              _utils.cache.set('token', token, 21600);

              ctx.cookies.set("token", token, {
                domain: ctx.hostname,
                path: '/',
                maxAge: 21600000,
                overwrite: true
              });
            }

            _context5.next = 12;
            return ctx.renderJSON(result);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _Login.apply(this, arguments);
}

function search(_x11, _x12) {
  return _search.apply(this, arguments);
}
/**
 * 关键字搜索笔记
 * @param {*} ctx 
 * @param {*} next 
 * @returns 
 */


function _search() {
  _search = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(ctx, next) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return ctx.render('search');

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _search.apply(this, arguments);
}

function searchNote(_x13, _x14) {
  return _searchNote.apply(this, arguments);
}

function _searchNote() {
  _searchNote = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(ctx, next) {
    var _yield$checkLogin, isLogin, searchParams, _ctx$request$body, article_id, category, title, isPush, conditions, extendSql, response;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return checkLogin(ctx, next);

          case 2:
            _yield$checkLogin = _context7.sent;
            isLogin = _yield$checkLogin.data.isLogin;

            if (isLogin) {
              _context7.next = 7;
              break;
            }

            result.message = 'not login';
            return _context7.abrupt("return", ctx.renderJson(result));

          case 7:
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

            _context7.next = 16;
            return sqlite3.selectTable("article", searchParams, conditions, extendSql);

          case 16:
            response = _context7.sent;

            if (response.message.includes("success")) {
              result = {
                data: response.data,
                message: "success"
              };
            }

            _context7.next = 20;
            return ctx.renderJson(result);

          case 20:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _searchNote.apply(this, arguments);
}