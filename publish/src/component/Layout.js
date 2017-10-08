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

var _Alert = require("./Alert");

var _Alert2 = _interopRequireDefault(_Alert);

var _Loading = require("./Loading");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    "div",
    { style: { height: "100%", background: "#fff" } },
    _react2.default.createElement(_component.Style, { name: "main" }),
    _react2.default.createElement(_Header2.default, null),
    children,
    _react2.default.createElement(_BackToTop2.default, null),
    _react2.default.createElement(_Alert2.default, null),
    _react2.default.createElement(_Loading2.default, null)
  );
}