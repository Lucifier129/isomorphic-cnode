"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = View;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require("react-imvc/component");

var _Layout = require("../../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _util = require("../../shared/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function View(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  var user = state.user,
      type = state.type;

  var currentData = user["recent_" + type] || [];

  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(UserInfo, { user: user }),
    _react2.default.createElement(UserTopics, {
      type: type,
      currentData: currentData,
      onChange: handlers.handleTypeChange
    })
  );
}

function UserInfo(_ref2) {
  var user = _ref2.user;

  return _react2.default.createElement(
    "section",
    { className: "userinfo" },
    _react2.default.createElement("img", { className: "u-img", src: user.avatar_url }),
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      "span",
      { className: "u-name" },
      user.loginname
    ),
    _react2.default.createElement(
      "div",
      { className: "u-bottom" },
      _react2.default.createElement(
        "span",
        { className: "u-time" },
        (0, _util.getLastTimeStr)(user.create_at, false)
      ),
      _react2.default.createElement(
        "span",
        { className: "u-score" },
        "\u79EF\u5206\uFF1A",
        user.score
      )
    )
  );
}

function UserTopics(_ref3) {
  var currentData = _ref3.currentData,
      type = _ref3.type,
      onChange = _ref3.onChange;

  return _react2.default.createElement(
    "section",
    { className: "topics" },
    _react2.default.createElement(
      "ul",
      { className: "user-tabs" },
      _react2.default.createElement(
        TabItem,
        {
          type: "replies",
          selected: type === "replies",
          onChange: onChange
        },
        "\u6700\u8FD1\u56DE\u590D"
      ),
      _react2.default.createElement(
        TabItem,
        {
          type: "topics",
          selected: type === "topics",
          onChange: onChange
        },
        "\u6700\u65B0\u53D1\u5E03"
      )
    ),
    _react2.default.createElement(MessageList, { list: currentData })
  );
}

function TabItem(_ref4) {
  var type = _ref4.type,
      selected = _ref4.selected,
      children = _ref4.children,
      onChange = _ref4.onChange;

  var className = (0, _classnames2.default)({
    item: true,
    br: true,
    selected: selected
  });
  return _react2.default.createElement(
    "li",
    { className: className, "data-type": type, onClick: onChange },
    children
  );
}

function MessageList(_ref5) {
  var list = _ref5.list;

  if (!list || list.length === 0) {
    return _react2.default.createElement(
      "div",
      { className: "no-data" },
      _react2.default.createElement(
        "i",
        { className: "iconfont icon-empty" },
        "\uE60A"
      ),
      "\u6682\u65E0\u6570\u636E!"
    );
  }

  return _react2.default.createElement(
    "div",
    null,
    list.map(function (message) {
      return _react2.default.createElement(Message, _extends({}, message, { key: message.id }));
    })
  );
}

function Message(props) {
  var id = props.id,
      title = props.title,
      author = props.author,
      last_reply_at = props.last_reply_at;

  return _react2.default.createElement(
    "div",
    { className: "message markdown-body" },
    _react2.default.createElement(
      "section",
      { className: "user" },
      _react2.default.createElement(_component.Link, {
        as: "img",
        className: "head",
        src: author.avatar_url,
        to: "/user/" + author.loginname
      }),
      _react2.default.createElement(
        _component.Link,
        { as: "div", to: "/topic/" + id, style: { 'width': '100%' } },
        _react2.default.createElement(
          "div",
          { className: "t-title" },
          title
        ),
        _react2.default.createElement(
          "span",
          { className: "cl" },
          _react2.default.createElement(
            "span",
            { className: "name" },
            author.loginname
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "cr" },
          _react2.default.createElement(
            "span",
            { className: "name" },
            (0, _util.getLastTimeStr)(last_reply_at, true)
          )
        )
      )
    )
  );
}