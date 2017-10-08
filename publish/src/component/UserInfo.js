"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _component = require("react-imvc/component");

var _connect = require("react-imvc/hoc/connect");

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withData = (0, _connect2.default)(function (_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;

  return {
    location: state.location,
    userInfo: state.userInfo,
    user: state.user,
    onLogout: handlers.handleLogout
  };
});

exports.default = withData(UserInfo);


function UserInfo(_ref2) {
  var location = _ref2.location,
      userInfo = _ref2.userInfo,
      user = _ref2.user,
      onLogout = _ref2.onLogout;

  var showLogout = location.pattern === "/user/:loginname" && userInfo && user && userInfo.loginname === user.loginname;
  return _react2.default.createElement(
    "div",
    { className: "user-info" },
    _react2.default.createElement(User, { "if": !showLogout && userInfo, info: userInfo }),
    _react2.default.createElement(Login, { "if": !showLogout && !userInfo, redirect: location.raw }),
    _react2.default.createElement(Logout, { "if": showLogout, onLogout: onLogout })
  );
}

function Login(props) {
  if (!props.if) {
    return null;
  }

  return _react2.default.createElement(
    "ul",
    { className: "login-no" },
    _react2.default.createElement(
      _component.Link,
      { as: "li", className: "login", to: "/login?redirect=" + props.redirect },
      "\u767B\u5F55"
    )
  );
}

function Logout(props) {
  if (!props.if) {
    return null;
  }

  return _react2.default.createElement(
    "ul",
    { className: "login-no" },
    _react2.default.createElement(
      "li",
      { className: "login", onClick: props.onLogout },
      "\u9000\u51FA"
    )
  );
}

function User(props) {
  if (!props.if) {
    return null;
  }
  var _props$info = props.info,
      loginname = _props$info.loginname,
      avatar_url = _props$info.avatar_url;

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