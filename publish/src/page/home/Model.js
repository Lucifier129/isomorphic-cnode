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
  pageTitle: '首页',
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

/**
 * 在 View 创建前将首屏数据合并到 state 里
 */
var COMPONENT_WILL_CREATE = exports.COMPONENT_WILL_CREATE = function COMPONENT_WILL_CREATE(state, data) {
  return ADD_TOPICS(state, data);
};

/**
 * 
 * 滚动到底部时，加载新的数据并更新查询参数
 */
var SCROLL_TO_BOTTOM = exports.SCROLL_TO_BOTTOM = function SCROLL_TO_BOTTOM(state, _ref) {
  var data = _ref.data,
      searchParams = _ref.searchParams;

  state = ADD_TOPICS(state, data);
  state = UPDATE_SEARCH_PARAMS(state, searchParams);
  return state;
};

/**
 * 更新查询参数
 */
var UPDATE_SEARCH_PARAMS = exports.UPDATE_SEARCH_PARAMS = function UPDATE_SEARCH_PARAMS(state, searchParams) {
  return _extends({}, state, {
    searchParams: searchParams
  });
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
exports.ADD_TOPICS = ADD_TOPICS;