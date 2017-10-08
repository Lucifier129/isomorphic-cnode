"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = exports.initialState = {
  pageTitle: "消息",
  tab: "hasNotRead",
  hasRead: [],
  hasNotRead: []
};

var COMPONENT_WILL_CREATE = exports.COMPONENT_WILL_CREATE = function COMPONENT_WILL_CREATE(state, _ref) {
  var hasRead = _ref.hasRead,
      hasNotRead = _ref.hasNotRead;

  var tab = hasNotRead.length > 0 ? "hasNotRead" : "hasRead";
  state = CHANGE_TAB(state, tab);
  return _extends({}, state, {
    hasRead: hasRead,
    hasNotRead: hasNotRead
  });
};

var CHANGE_TAB = exports.CHANGE_TAB = function CHANGE_TAB(state, tab) {
  return _extends({}, state, {
    tab: tab
  });
};