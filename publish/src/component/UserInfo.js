"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withData = (0, _connect.default)(function (_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  return {
    location: state.location,
    userInfo: state.userInfo,
    user: state.user,
    onLogout: handlers.handleLogout
  };
});

var _default = withData(UserInfo);

exports.default = _default;

function UserInfo(_ref2) {
  var location = _ref2.location,
      userInfo = _ref2.userInfo,
      user = _ref2.user,
      onLogout = _ref2.onLogout;
  var showLogout = location.pattern === "/user/:loginname" && userInfo && user && userInfo.loginname === user.loginname;
  return _react.default.createElement("div", {
    className: "user-info"
  }, _react.default.createElement(User, {
    if: !showLogout && userInfo,
    info: userInfo
  }), _react.default.createElement(Login, {
    if: !showLogout && !userInfo,
    redirect: location.raw
  }), _react.default.createElement(Logout, {
    if: showLogout,
    onLogout: onLogout
  }));
}

function Login(props) {
  if (!props.if) {
    return null;
  }

  return _react.default.createElement("ul", {
    className: "login-no"
  }, _react.default.createElement(_component.Link, {
    as: "li",
    className: "login",
    to: "/login?redirect=".concat(props.redirect)
  }, "\u767B\u5F55"));
}

function Logout(props) {
  if (!props.if) {
    return null;
  }

  return _react.default.createElement("ul", {
    className: "login-no"
  }, _react.default.createElement("li", {
    className: "login",
    onClick: props.onLogout
  }, "\u9000\u51FA"));
}

function User(props) {
  if (!props.if) {
    return null;
  }

  var _props$info = props.info,
      loginname = _props$info.loginname,
      avatar_url = _props$info.avatar_url;
  return _react.default.createElement(_component.Link, {
    as: "div",
    to: "/user/".concat(loginname),
    className: "login-yes"
  }, _react.default.createElement("div", {
    className: "avertar"
  }, avatar_url && _react.default.createElement("img", {
    src: avatar_url
  })), _react.default.createElement("div", {
    className: "info"
  }, loginname && _react.default.createElement("p", null, loginname)));
}