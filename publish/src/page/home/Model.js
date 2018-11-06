"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_TOPICS = exports.UPDATE_SEARCH_PARAMS = exports.SCROLL_TO_BOTTOM = exports.COMPONENT_WILL_CREATE = exports.initialState = void 0;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Model
 */
var initialState = {
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

exports.initialState = initialState;

var COMPONENT_WILL_CREATE = function COMPONENT_WILL_CREATE(state, data) {
  return ADD_TOPICS(state, data);
};
/**
 * 
 * 滚动到底部时，加载新的数据并更新查询参数
 */


exports.COMPONENT_WILL_CREATE = COMPONENT_WILL_CREATE;

var SCROLL_TO_BOTTOM = function SCROLL_TO_BOTTOM(state, _ref) {
  var data = _ref.data,
      searchParams = _ref.searchParams;
  state = ADD_TOPICS(state, data);
  state = UPDATE_SEARCH_PARAMS(state, searchParams);
  return state;
};
/**
 * 更新查询参数
 */


exports.SCROLL_TO_BOTTOM = SCROLL_TO_BOTTOM;

var UPDATE_SEARCH_PARAMS = function UPDATE_SEARCH_PARAMS(state, searchParams) {
  return _objectSpread({}, state, {
    searchParams: searchParams
  });
}; // 添加主题列表


exports.UPDATE_SEARCH_PARAMS = UPDATE_SEARCH_PARAMS;

var ADD_TOPICS = function ADD_TOPICS(state, data) {
  var topics = data.map(function (item) {
    var content = item.content,
        topic = _objectWithoutProperties(item, ["content"]);

    return topic;
  });
  return _objectSpread({}, state, {
    topics: state.topics.concat(topics)
  });
};

exports.ADD_TOPICS = ADD_TOPICS;