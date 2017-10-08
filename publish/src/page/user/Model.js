"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANGE_TYPE = exports.COMPONENT_WILL_CREATE = exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Model
                                                                                                                                                                                                                                                                   */


var _sharedActions = require("../../shared/sharedActions");

var initialState = exports.initialState = {
  pageTitle: "用户",
  user: null,
  type: "replies",
  currentData: []
};

var COMPONENT_WILL_CREATE = exports.COMPONENT_WILL_CREATE = function COMPONENT_WILL_CREATE(state, _ref) {
  var user = _ref.user;

  state = (0, _sharedActions.UPDATE_HTML_TITLE)(state, user.loginname);
  return _extends({}, state, {
    user: user
  });
};

var CHANGE_TYPE = exports.CHANGE_TYPE = function CHANGE_TYPE(state, type) {
  return _extends({}, state, {
    type: type
  });
};