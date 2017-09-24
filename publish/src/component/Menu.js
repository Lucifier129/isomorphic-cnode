"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require("react-imvc/component");

var _UserInfo = require("./UserInfo");

var _UserInfo2 = _interopRequireDefault(_UserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu(props) {
  var location = props.location,
      userInfo = props.userInfo,
      onClose = props.onClose;

  var className = (0, _classnames2.default)({
    "nav-list": true,
    show: props.if
  });

  return _react2.default.createElement(
    "section",
    { id: "sideBar", className: className, onClick: onClose },
    _react2.default.createElement(_UserInfo2.default, { location: location, userInfo: userInfo }),
    _react2.default.createElement(
      "ul",
      { className: "list-ul" },
      _react2.default.createElement(
        _component.Link,
        { as: "li", className: "icon-quanbu iconfont", to: "/list?tab=all" },
        "\u5168\u90E8"
      ),
      _react2.default.createElement(
        _component.Link,
        { as: "li", className: "icon-hao iconfont", to: "/list?tab=good" },
        "\u7CBE\u534E"
      ),
      _react2.default.createElement(
        _component.Link,
        { as: "li", className: "icon-fenxiang iconfont", to: "/list?tab=share" },
        "\u5206\u4EAB"
      ),
      _react2.default.createElement(
        _component.Link,
        { as: "li", className: "icon-wenda iconfont", to: "/list?tab=ask" },
        "\u95EE\u7B54"
      ),
      _react2.default.createElement(
        _component.Link,
        { as: "li", className: "icon-zhaopin iconfont", to: "/list?tab=job" },
        "\u62DB\u8058"
      ),
      _react2.default.createElement(
        _component.Link,
        { as: "li", className: "icon-xiaoxi iconfont line", to: "/message" },
        "\u6D88\u606F"
      ),
      _react2.default.createElement(
        _component.Link,
        { as: "li", className: "icon-about iconfont", to: "/about" },
        "\u5173\u4E8E"
      )
    )
  );
}