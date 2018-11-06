"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

var _Header = _interopRequireDefault(require("./Header"));

var _BackToTop = _interopRequireDefault(require("./BackToTop"));

var _Alert = _interopRequireDefault(require("./Alert"));

var _Loading = _interopRequireDefault(require("./Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    style: {
      height: "100%",
      background: "#fff"
    }
  }, _react.default.createElement(_component.Style, {
    name: "main"
  }), _react.default.createElement(_Header.default, null), children, _react.default.createElement(_BackToTop.default, null), _react.default.createElement(_Alert.default, null), _react.default.createElement(_Loading.default, null));
}