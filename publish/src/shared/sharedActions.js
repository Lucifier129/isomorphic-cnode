"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var UPDATE_HTML_TITLE = exports.UPDATE_HTML_TITLE = function UPDATE_HTML_TITLE(state, title) {
  var html = _extends({}, state.html, {
    title: title
  });
  return _extends({}, state, {
    html: html
  });
};

var OPEN_MENU = exports.OPEN_MENU = function OPEN_MENU(state) {
  if (state.showMenu) {
    return state;
  }
  return _extends({}, state, {
    showMenu: true
  });
};

var CLOSE_MENU = exports.CLOSE_MENU = function CLOSE_MENU(state) {
  if (!state.showMenu) {
    return state;
  }
  return _extends({}, state, {
    showMenu: false
  });
};

var UPDATE_ALERT_TEXT = exports.UPDATE_ALERT_TEXT = function UPDATE_ALERT_TEXT(state, alertText) {
  return _extends({}, state, {
    alertText: alertText
  });
};

var UPDATE_LOADING_TEXT = exports.UPDATE_LOADING_TEXT = function UPDATE_LOADING_TEXT(state, loadingText) {
  return _extends({}, state, {
    loadingText: loadingText
  });
};