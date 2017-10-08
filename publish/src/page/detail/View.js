"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = View;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _component = require("react-imvc/component");

var _hoc = require("../../shared/hoc");

var _util = require("../../shared/util");

var _ = _interopRequireWildcard(_util);

var _Layout = require("../../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function View(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  var isLogin = state.isLogin,
      topic = state.topic,
      activeReplyId = state.activeReplyId,
      replyOfOthers = state.replyOfOthers;


  if (!topic) {
    return _react2.default.createElement(
      _Layout2.default,
      null,
      _react2.default.createElement(NoTopic, null),
      ";"
    );
  }

  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      "div",
      { id: "page" },
      _react2.default.createElement(
        "h2",
        { className: "topic-title" },
        topic.title
      ),
      _react2.default.createElement(TopicAuthorInfo, { topic: topic }),
      _react2.default.createElement(StaticTopicContent, { content: topic.content }),
      _react2.default.createElement(TopicReplyCount, { count: topic.reply_count }),
      _react2.default.createElement(ReplyForm, {
        "if": isLogin,
        id: -1,
        name: "replyOfTopic",
        onSubmit: handlers.handleReplyTopic
      }),
      _react2.default.createElement(TopicReplyList, {
        replies: topic.replies,
        replyOfOthers: replyOfOthers,
        activeReplyId: activeReplyId,
        isLogin: isLogin,
        handlers: handlers
      })
    )
  );
}

var StaticTopicContent = (0, _hoc.staticify)()(TopicContent);

function TopicContent(_ref2) {
  var content = _ref2.content;

  return _react2.default.createElement("section", {
    className: "markdown-body topic-content",
    dangerouslySetInnerHTML: { __html: content }
  });
}

function TopicReplyCount(_ref3) {
  var count = _ref3.count;

  return _react2.default.createElement(
    "h3",
    { className: "topic-reply" },
    _react2.default.createElement(
      "strong",
      null,
      count
    ),
    " \u56DE\u590D"
  );
}

function NoTopic() {
  return _react2.default.createElement(
    "div",
    { style: { height: "100%", background: "#fff" } },
    _react2.default.createElement(
      "div",
      { className: "no-data" },
      _react2.default.createElement(
        "i",
        { className: "iconfont icon-empty" },
        "\uE60A"
      ),
      "\u8BE5\u8BDD\u9898\u4E0D\u5B58\u5728!"
    )
  );
}

function TopicAuthorInfo(_ref4) {
  var topic = _ref4.topic;

  var tagClass = (0, _classnames3.default)(_defineProperty({
    tag: true
  }, _.getTabClassName(topic.tab, topic.good, topic.top), true));
  return _react2.default.createElement(
    "section",
    { className: "author-info" },
    _react2.default.createElement(_component.Link, {
      as: "img",
      className: "avatar",
      src: topic.author.avatar_url,
      to: "/user/" + topic.author.loginname
    }),
    _react2.default.createElement(
      "div",
      { className: "col" },
      _react2.default.createElement(
        "span",
        null,
        topic.author.loginname
      ),
      _react2.default.createElement(
        "time",
        null,
        "\u53D1\u5E03\u4E8E:",
        _.getLastTimeStr(topic.create_at, true)
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "right" },
      _react2.default.createElement(
        "span",
        { className: tagClass },
        _.getTabStr(topic.tab, topic.good, topic.top)
      ),
      _react2.default.createElement(
        "span",
        { className: "name" },
        topic.visit_count,
        "\u6B21\u6D4F\u89C8"
      )
    )
  );
}

function ReplyForm(props) {
  if (!props.if) {
    return null;
  }

  var id = props.id,
      name = props.name,
      onSubmit = props.onSubmit;


  return _react2.default.createElement(
    "section",
    { className: "reply" },
    _react2.default.createElement(_component.Input, {
      as: "textarea",
      name: name,
      rows: "8",
      className: "text",
      placeholder: "\u56DE\u590D\u652F\u6301Markdown\u8BED\u6CD5,\u8BF7\u6CE8\u610F\u6807\u8BB0\u4EE3\u7801"
    }),
    _react2.default.createElement(
      "button",
      { className: "button", onClick: onSubmit, "data-id": id },
      "\u786E\u5B9A"
    )
  );
}

function TopicReplyList(_ref5) {
  var replies = _ref5.replies,
      replyOfOthers = _ref5.replyOfOthers,
      activeReplyId = _ref5.activeReplyId,
      isLogin = _ref5.isLogin,
      handlers = _ref5.handlers;

  return _react2.default.createElement(
    "section",
    { className: "reply-list" },
    _react2.default.createElement(
      "ul",
      null,
      replies.map(function (reply) {
        return _react2.default.createElement(PureReplyItem, {
          key: reply.id,
          reply: reply,
          replyContent: replyOfOthers[reply.id],
          showReplyForm: isLogin && activeReplyId === reply.id,
          handlers: handlers
        });
      })
    )
  );
}

var PureReplyItem = (0, _hoc.purify)()(ReplyItem);

function ReplyItem(_ref6) {
  var reply = _ref6.reply,
      replyContent = _ref6.replyContent,
      handlers = _ref6.handlers,
      showReplyForm = _ref6.showReplyForm;

  return _react2.default.createElement(
    "li",
    null,
    _react2.default.createElement(
      "section",
      { className: "user" },
      _react2.default.createElement(_component.Link, {
        as: "img",
        className: "head",
        src: reply.author.avatar_url,
        to: "/user/" + reply.author.loginname
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
            reply.author.loginname
          ),
          _react2.default.createElement(
            "span",
            { className: "name mt10" },
            _react2.default.createElement("span", null),
            "\u53D1\u5E03\u4E8E:",
            _.getLastTimeStr(reply.create_at, true)
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "cr" },
          _react2.default.createElement(LikeIcon, {
            id: reply.id,
            like: reply.isUps,
            onClick: handlers.handleLikeReply
          }),
          reply.ups.length,
          _react2.default.createElement(ShowFormButton, {
            id: reply.id,
            onClick: handlers.handleToggleReplyForm
          })
        )
      )
    ),
    _react2.default.createElement("div", {
      className: "reply_content",
      dangerouslySetInnerHTML: { __html: reply.content }
    }),
    _react2.default.createElement(ReplyForm, {
      "if": showReplyForm,
      id: reply.id,
      name: "replyOfOthers." + reply.id,
      value: replyContent,
      onSubmit: handlers.handleReplyOther
    })
  );
}

function LikeIcon(_ref7) {
  var id = _ref7.id,
      like = _ref7.like,
      onClick = _ref7.onClick;

  var className = (0, _classnames3.default)({
    iconfont: true,
    icon: true,
    uped: like
  });
  return _react2.default.createElement(
    "span",
    { className: className, onClick: onClick, "data-id": id },
    "\uE608"
  );
}

function ShowFormButton(_ref8) {
  var id = _ref8.id,
      onClick = _ref8.onClick;

  return _react2.default.createElement(
    "span",
    { className: "iconfont icon", onClick: onClick, "data-id": id },
    "\uE609"
  );
}