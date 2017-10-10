"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require("react-imvc/component");

var _connect = require("react-imvc/hoc/connect");

var _connect2 = _interopRequireDefault(_connect);

var _UserInfo = require("./UserInfo");

var _UserInfo2 = _interopRequireDefault(_UserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var withData = (0, _connect2.default)(function (_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;

  return {
    showMenu: state.showMenu,
    onClose: handlers.handleCloseMenu
  };
});

exports.default = withData(Menu);


function Menu(props) {
  var className = (0, _classnames2.default)({
    "nav-list": true,
    show: props.showMenu
  });

  return _react2.default.createElement(
    "section",
    { id: "sideBar", className: className, onClick: props.onClose },
    _react2.default.createElement(_UserInfo2.default, null),
    _react2.default.createElement(
      "ul",
      { className: "list-ul" },
      _react2.default.createElement(
        MenuItemWithCheck,
        {
          className: "icon-quanbu iconfont",
          to: "/list?tab=all"
        },
        "\u5168\u90E8"
      ),
      _react2.default.createElement(
        MenuItemWithCheck,
        { className: "icon-hao iconfont", to: "/list?tab=good" },
        "\u7CBE\u534E"
      ),
      _react2.default.createElement(
        MenuItemWithCheck,
        {
          className: "icon-fenxiang iconfont",
          to: "/list?tab=share"
        },
        "\u5206\u4EAB"
      ),
      _react2.default.createElement(
        MenuItemWithCheck,
        { className: "icon-wenda iconfont", to: "/list?tab=ask" },
        "\u95EE\u7B54"
      ),
      _react2.default.createElement(
        MenuItemWithCheck,
        {
          className: "icon-zhaopin iconfont",
          to: "/list?tab=job"
        },
        "\u62DB\u8058"
      ),
      _react2.default.createElement(
        MenuItemWithCheck,
        {
          className: "icon-xiaoxi iconfont line",
          to: "/message"
        },
        "\u6D88\u606F"
      ),
      _react2.default.createElement(
        MenuItemWithCheck,
        { className: "icon-about iconfont", to: "/about" },
        "\u5173\u4E8E"
      )
    )
  );
}

var withCurrentPath = (0, _connect2.default)(function (_ref2) {
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

    return _react2.default.createElement("li", _rest);
  }

  var current = props.current,
      rest = _objectWithoutProperties(props, ["current"]);

  return _react2.default.createElement(_component.Link, _extends({ as: "li" }, rest));
}