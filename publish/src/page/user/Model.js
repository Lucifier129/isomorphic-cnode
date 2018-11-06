"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANGE_TYPE = exports.COMPONENT_WILL_CREATE = exports.initialState = void 0;

var _sharedActions = require("../../shared/sharedActions");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  pageTitle: "用户",
  user: null,
  type: "replies",
  currentData: []
};
exports.initialState = initialState;

var COMPONENT_WILL_CREATE = function COMPONENT_WILL_CREATE(state, _ref) {
  var user = _ref.user;
  state = (0, _sharedActions.UPDATE_HTML_TITLE)(state, user.loginname);
  return _objectSpread({}, state, {
    user: user
  });
};

exports.COMPONENT_WILL_CREATE = COMPONENT_WILL_CREATE;

var CHANGE_TYPE = function CHANGE_TYPE(state, type) {
  return _objectSpread({}, state, {
    type: type
  });
};

exports.CHANGE_TYPE = CHANGE_TYPE;