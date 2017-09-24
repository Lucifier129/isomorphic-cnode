"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserInfo;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserInfo(_ref) {
  var location = _ref.location,
      userInfo = _ref.userInfo;

  return _react2.default.createElement(
    "div",
    { className: "user-info" },
    !!userInfo && _react2.default.createElement(User, userInfo),
    !userInfo && _react2.default.createElement(Login, { location: location })
  );
}

function Login(_ref2) {
  var location = _ref2.location;

  if (location.pathname === "/login") {
    return null;
  }

  return _react2.default.createElement(
    "ul",
    { className: "login-no" },
    _react2.default.createElement(
      _component.Link,
      { as: "li", className: "login", to: "/login?redirect=" + location.raw },
      "\u767B\u5F55"
    )
  );
}

function User(_ref3) {
  var loginname = _ref3.loginname,
      avatar_url = _ref3.avatar_url;

  return _react2.default.createElement(
    _component.Link,
    { as: "div", to: "/user/" + loginname, className: "login-yes" },
    _react2.default.createElement(
      "div",
      { className: "avertar" },
      avatar_url && _react2.default.createElement("img", { src: avatar_url })
    ),
    _react2.default.createElement(
      "div",
      { className: "info" },
      loginname && _react2.default.createElement(
        "p",
        null,
        loginname
      )
    )
  );
}