"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANGE_TAB = exports.COMPONENT_WILL_CREATE = exports.initialState = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  pageTitle: "消息",
  tab: "hasNotRead",
  hasRead: [],
  hasNotRead: []
};
exports.initialState = initialState;

var COMPONENT_WILL_CREATE = function COMPONENT_WILL_CREATE(state, _ref) {
  var hasRead = _ref.hasRead,
      hasNotRead = _ref.hasNotRead;
  var tab = hasNotRead.length > 0 ? "hasNotRead" : "hasRead";
  state = CHANGE_TAB(state, tab);
  return _objectSpread({}, state, {
    hasRead: hasRead,
    hasNotRead: hasNotRead
  });
};

exports.COMPONENT_WILL_CREATE = COMPONENT_WILL_CREATE;

var CHANGE_TAB = function CHANGE_TAB(state, tab) {
  return _objectSpread({}, state, {
    tab: tab
  });
};

exports.CHANGE_TAB = CHANGE_TAB;