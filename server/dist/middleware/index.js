"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("./bodyParser"));

var _compress = _interopRequireDefault(require("./compress"));

var _render = _interopRequireDefault(require("./render"));

var _router = _interopRequireDefault(require("./router"));

var _helmet = _interopRequireDefault(require("./helmet"));

var _favicon = _interopRequireDefault(require("./favicon"));

var _static = _interopRequireDefault(require("./static"));

var _logger = _interopRequireDefault(require("./logger"));

var _bundle = _interopRequireDefault(require("./bundle"));

var _init = _interopRequireDefault(require("./init"));

var _main = _interopRequireDefault(require("./main"));

var _default = function _default(app) {
  app.use(_init["default"]);
  app.use(_main["default"]);
  app.use(_logger["default"]);
  app.use((0, _static["default"])());
  app.use((0, _favicon["default"])());
  app.use((0, _helmet["default"])());
  app.use(_render["default"]);
  app.use((0, _bodyParser["default"])());
  app.use((0, _compress["default"])());
  app.use((0, _bundle["default"])());
  app.use((0, _router["default"])());
};

exports["default"] = _default;