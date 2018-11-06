"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_REPLY = exports.REPLY_TO_OTHER = exports.REPLY_TO_TOPIC = exports.LIKE_REPLY = exports.HIDE_REPLY_FORM = exports.SHOW_REPLY_FORM = exports.TOGGLE_REPLY_FORM = exports.COMPONENT_WILL_CREATE = exports.initialState = void 0;

var _sharedActions = require("../../shared/sharedActions");

var _markdown = require("markdown");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  pageTitle: "详情",
  topic: null,
  activeReplyId: null,
  replyOfOthers: {},
  replyOfTopic: ""
};
/**
 * 
 * 首屏数据为 topic
 */

exports.initialState = initialState;

var COMPONENT_WILL_CREATE = function COMPONENT_WILL_CREATE(state, _ref) {
  var topic = _ref.topic;

  if (topic) {
    state = (0, _sharedActions.UPDATE_HTML_TITLE)(state, topic.title);
  }

  return _objectSpread({}, state, {
    topic: topic
  });
};
/**
 * 点击其他用户评论下的回复时，
 * 展示评论表单
 * 将当前 replyId 设置为 active 并确保 replyOfOthers[replyId] 不为 undefined
 * 如果再次点击，则收起表单
 */


exports.COMPONENT_WILL_CREATE = COMPONENT_WILL_CREATE;

var TOGGLE_REPLY_FORM = function TOGGLE_REPLY_FORM(state, _ref2) {
  var activeReplyId = _ref2.activeReplyId;

  if (activeReplyId === state.activeReplyId) {
    return HIDE_REPLY_FORM(state);
  } else {
    return SHOW_REPLY_FORM(state, activeReplyId);
  }
};

exports.TOGGLE_REPLY_FORM = TOGGLE_REPLY_FORM;

var SHOW_REPLY_FORM = function SHOW_REPLY_FORM(state, activeReplyId) {
  var replyOfOthers = state.replyOfOthers;

  if (!replyOfOthers[activeReplyId]) {
    replyOfOthers = _objectSpread({}, replyOfOthers);
    var replyItem = state.topic.replies.find(function (item) {
      return item.id === activeReplyId;
    });
    replyOfOthers[activeReplyId] = "@".concat(replyItem.author.loginname, " ");
  }

  return _objectSpread({}, state, {
    activeReplyId: activeReplyId,
    replyOfOthers: replyOfOthers
  });
};

exports.SHOW_REPLY_FORM = SHOW_REPLY_FORM;

var HIDE_REPLY_FORM = function HIDE_REPLY_FORM(state) {
  return _objectSpread({}, state, {
    activeReplyId: null
  });
};

exports.HIDE_REPLY_FORM = HIDE_REPLY_FORM;

var LIKE_REPLY = function LIKE_REPLY(state, _ref3) {
  var action = _ref3.action,
      replyId = _ref3.replyId;
  var topic = state.topic;
  var _state$userInfo = state.userInfo,
      accesstoken = _state$userInfo.token,
      userId = _state$userInfo.id;
  var replies = topic.replies.map(function (reply) {
    if (reply.id !== replyId) {
      return reply;
    }

    var ups = reply.ups;

    if (action === "down") {
      ups = ups.filter(function (id) {
        return id !== userId;
      });
    } else if (action === "up") {
      ups = ups.concat(userId);
    }

    return _objectSpread({}, reply, {
      ups: ups
    });
  });
  topic = _objectSpread({}, topic, {
    replies: replies
  });
  return _objectSpread({}, state, {
    topic: topic
  });
};

exports.LIKE_REPLY = LIKE_REPLY;

var REPLY_TO_TOPIC = function REPLY_TO_TOPIC(state, payload) {
  state = ADD_REPLY(state, payload);
  return _objectSpread({}, state, {
    replyOfTopic: ""
  });
};

exports.REPLY_TO_TOPIC = REPLY_TO_TOPIC;

var REPLY_TO_OTHER = function REPLY_TO_OTHER(state, _ref4) {
  var replyId = _ref4.replyId,
      newReplyId = _ref4.newReplyId,
      content = _ref4.content;
  state = ADD_REPLY(state, {
    replyId: newReplyId,
    content: content
  });

  var replyOfOthers = _objectSpread({}, state.replyOfOthers, _defineProperty({}, replyId, ""));

  return _objectSpread({}, state, {
    replyOfOthers: replyOfOthers
  });
};

exports.REPLY_TO_OTHER = REPLY_TO_OTHER;

var ADD_REPLY = function ADD_REPLY(state, _ref5) {
  var replyId = _ref5.replyId,
      content = _ref5.content;
  var userInfo = state.userInfo,
      topic = state.topic;
  var replyItem = createReplyItem({
    replyId: replyId,
    content: content,
    userInfo: userInfo
  });
  topic = _objectSpread({}, topic, {
    replies: topic.replies.concat(replyItem)
  });
  return _objectSpread({}, state, {
    topic: topic
  });
};

exports.ADD_REPLY = ADD_REPLY;

function createReplyItem(_ref6) {
  var replyId = _ref6.replyId,
      content = _ref6.content,
      userInfo = _ref6.userInfo;
  var create_at = new Date().getTime();
  return {
    id: replyId,
    author: {
      loginname: userInfo.loginname,
      avatar_url: userInfo.avatar_url
    },
    content: _markdown.markdown.toHTML(content),
    ups: [],
    create_at: create_at
  };
}