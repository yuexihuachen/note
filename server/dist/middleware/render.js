"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nunjucks = _interopRequireDefault(require("nunjucks"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * render 使用html路径家在模版
 * renderString 使用字符串模版
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(ctx, next) {
    var tpl, render, renderString;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            /**
             *  为啥放外面，因为build transform es5的时候不处理html
             * @param {String} pageName 页面名称
             * @returns 页面地址
             */
            tpl = function tpl(pageName) {
              return _path["default"].resolve(__dirname, "../../views/".concat(pageName, "/index.html"));
            };

            render = /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name, scope) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", new Promise(function (resolve, reject) {
                          _nunjucks["default"].render(name, scope, function (err, result) {
                            if (err) return reject(err);
                            resolve(result);
                          });
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function render(_x3, _x4) {
                return _ref2.apply(this, arguments);
              };
            }();

            renderString = /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(src, scope) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", new Promise(function (resolve, reject) {
                          _nunjucks["default"].renderString(src, scope, function (err, result) {
                            if (err) return reject(err);
                            resolve(result);
                          });
                        }));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function renderString(_x5, _x6) {
                return _ref3.apply(this, arguments);
              };
            }();
            /**
             * 
             * @param {String} pageName 加载page的视图
             * @reture 返回html
             */


            ctx.render = /*#__PURE__*/function () {
              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(pageName) {
                var scope, html;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        scope = ctx.state.scope || {};
                        scope = _objectSpread(_objectSpread({}, {
                          title: 'Technical blog',
                          keywords: 'Front-end, back-end, linux, database, algorithm, design pattern',
                          description: 'study without limit'
                        }), scope);
                        _context3.next = 4;
                        return render(tpl(pageName), scope);

                      case 4:
                        html = _context3.sent;
                        ctx.state.scope = null;
                        ctx.body = html.trim().replace(/\n\s*/gmi, '');

                      case 7:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }();
            /**
             * 渲染一个原始字符串而不是加载一个模板。不允许用户定义自己的模板
             * @param {String} pageName 加载page的视图
             * @reture 返回html
             */


            ctx.renderString = /*#__PURE__*/function () {
              var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(pageName) {
                var scope, template;
                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        scope = ctx.state.scope;
                        template = _fs["default"].readFileSync(tpl(pageName));
                        ctx.state.scope = null;
                        _context4.next = 5;
                        return renderString(template.toString(), scope);

                      case 5:
                        return _context4.abrupt("return", _context4.sent);

                      case 6:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x8) {
                return _ref5.apply(this, arguments);
              };
            }();
            /**
             * @param {Object} 返回的数据
             * 
             */


            ctx.renderJSON = ctx.renderJson = /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        ctx.body = JSON.stringify(data);

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x9) {
                return _ref6.apply(this, arguments);
              };
            }();

            _context6.next = 8;
            return next();

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;