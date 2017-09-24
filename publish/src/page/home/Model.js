"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Model
 */

var initialState = exports.initialState = {
  // 主题列表
  topics: [],
  // 请求参数
  searchParams: {
    page: 1,
    limit: 20,
    tab: "all",
    mdrender: true
  }
};

// 添加主题列表
var ADD_TOPICS = function ADD_TOPICS(state, data) {
  var topics = data.map(function (item) {
    var content = item.content,
        topic = _objectWithoutProperties(item, ["content"]);

    return topic;
  });

  return _extends({}, state, {
    topics: state.topics.concat(topics)
  });
};

// 添加主题列表，并更新请求参数
exports.ADD_TOPICS = ADD_TOPICS;
var ADD_TOPICS_AND_UPDATE_PARAMS = exports.ADD_TOPICS_AND_UPDATE_PARAMS = function ADD_TOPICS_AND_UPDATE_PARAMS(state, _ref) {
  var data = _ref.data,
      searchParams = _ref.searchParams;

  state = ADD_TOPICS(state, data);
  return _extends({}, state, {
    searchParams: searchParams
  });
};