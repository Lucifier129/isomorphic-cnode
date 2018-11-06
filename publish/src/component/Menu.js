"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _component = require("react-imvc/component");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _UserInfo = _interopRequireDefault(require("./UserInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withData = (0, _connect.default)(function (_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  return {
    showMenu: state.showMenu,
    onClose: handlers.handleCloseMenu
  };
});

var _default = withData(Menu);

exports.default = _default;

function Menu(props) {
  var className = (0, _classnames.default)({
    "nav-list": true,
    show: props.showMenu
  });
  return _react.default.createElement("section", {
    id: "sideBar",
    className: className,
    onClick: props.onClose
  }, _react.default.createElement(_UserInfo.default, null), _react.default.createElement("ul", {
    className: "list-ul"
  }, _react.default.createElement(MenuItemWithCheck, {
    className: "icon-quanbu iconfont",
    to: "/list?tab=all"
  }, "\u5168\u90E8"), _react.default.createElement(MenuItemWithCheck, {
    className: "icon-hao iconfont",
    to: "/list?tab=good"
  }, "\u7CBE\u534E"), _react.default.createElement(MenuItemWithCheck, {
    className: "icon-fenxiang iconfont",
    to: "/list?tab=share"
  }, "\u5206\u4EAB"), _react.default.createElement(MenuItemWithCheck, {
    className: "icon-wenda iconfont",
    to: "/list?tab=ask"
  }, "\u95EE\u7B54"), _react.default.createElement(MenuItemWithCheck, {
    className: "icon-zhaopin iconfont",
    to: "/list?tab=job"
  }, "\u62DB\u8058"), _react.default.createElement(MenuItemWithCheck, {
    className: "icon-xiaoxi iconfont line",
    to: "/message"
  }, "\u6D88\u606F"), _react.default.createElement(MenuItemWithCheck, {
    className: "icon-about iconfont",
    to: "/about"
  }, "\u5173\u4E8E")));
}

var withCurrentPath = (0, _connect.default)(function (_ref2) {
  var state = _ref2.state;
  return {
    current: state.location.raw
  };
});
var MenuItemWithCheck = withCurrentPath(MenuItem);

function MenuItem(props) {
  if (props.to === props.current) {
    var to = props.to,
        _current = props.current,
        _rest = _objectWithoutProperties(props, ["to", "current"]);

    return _react.default.createElement("li", _rest);
  }

  var current = props.current,
      rest = _objectWithoutProperties(props, ["current"]);

  return _react.default.createElement(_component.Link, _extends({
    as: "li"
  }, rest));
}