"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _component = require("react-imvc/component");

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _BackToTop = require("./BackToTop");

var _BackToTop2 = _interopRequireDefault(_BackToTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers,
      children = _ref.children;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_component.Style, { name: "main" }),
    _react2.default.createElement(_Header2.default, { state: state, handlers: handlers }),
    children,
    _react2.default.createElement(_BackToTop2.default, null)
  );
}