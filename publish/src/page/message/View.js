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

var _ = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function View(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  var tab = state.tab,
      hasRead = state.hasRead,
      hasNotRead = state.hasNotRead;

  var hasReadClass = (0, _classnames2.default)({
    item: true,
    br: true,
    selected: tab === "hasRead"
  });
  var hasNotReadClass = (0, _classnames2.default)({
    item: true,
    br: true,
    selected: tab === "hasNotRead"
  });
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      "div",
      { className: "page" },
      _react2.default.createElement(
        "ul",
        { className: "tabs" },
        _react2.default.createElement(
          "li",
          {
            className: hasReadClass,
            "data-tab": "hasRead",
            onClick: handlers.handleTabChange
          },
          "\u5DF2\u8BFB\u6D88\u606F"
        ),
        _react2.default.createElement(
          "li",
          {
            className: hasNotReadClass,
            "data-tab": "hasNotRead",
            onClick: handlers.handleTabChange
          },
          "\u672A\u8BFB\u6D88\u606F",
          hasNotRead.length > 0 && _react2.default.createElement(
            "i",
            { className: "iconfont read", onClick: handlers.handleMarkAll },
            "\uE60C"
          )
        )
      ),
      _react2.default.createElement(MessageContent, { list: state[tab] })
    )
  );
}

function MessageContent(_ref2) {
  var list = _ref2.list;

  if (!list || !list.length) {
    return _react2.default.createElement(Empty, null);
  }
  return _react2.default.createElement(
    "div",
    null,
    list.map(function (data) {
      return _react2.default.createElement(MessageInfo, _extends({}, data, { key: data.id }));
    })
  );
}

function Empty() {
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

function MessageInfo(props) {
  var id = props.id,
      title = props.title,
      author = props.author,
      type = props.type,
      reply = props.reply,
      topic = props.topic;

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
        "div",
        { className: "info" },
        _react2.default.createElement(
          "span",
          { className: "cl" },
          _react2.default.createElement(
            "span",
            { className: "name" },
            author.loginname
          ),
          type === "at" && _react2.default.createElement(
            "span",
            { className: "name" },
            "\u5728\u56DE\u590D\u4E2D@\u4E86\u60A8"
          ),
          type === "reply" && _react2.default.createElement(
            "span",
            { className: "name" },
            "\u56DE\u590D\u4E86\u60A8\u7684\u8BDD\u9898"
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "cr" },
          _react2.default.createElement(
            "span",
            { className: "name" },
            _.getLastTimeStr(reply.create_at, true)
          )
        )
      )
    ),
    _react2.default.createElement("div", {
      className: "reply_content",
      dangerouslySetInnerHTML: { __html: reply.content }
    }),
    _react2.default.createElement(
      _component.Link,
      { className: "topic-title", to: "/topic/" + topic.id },
      "\u8BDD\u9898\uFF1A",
      topic.title
    )
  );
}