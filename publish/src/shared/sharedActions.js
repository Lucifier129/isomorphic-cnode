"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_LOADING_TEXT = exports.UPDATE_ALERT_TEXT = exports.CLOSE_MENU = exports.OPEN_MENU = exports.UPDATE_HTML_TITLE = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UPDATE_HTML_TITLE = function UPDATE_HTML_TITLE(state, title) {
  var html = _objectSpread({}, state.html, {
    title: title
  });

  return _objectSpread({}, state, {
    html: html
  });
};

exports.UPDATE_HTML_TITLE = UPDATE_HTML_TITLE;

var OPEN_MENU = function OPEN_MENU(state) {
  if (state.showMenu) {
    return state;
  }

  return _objectSpread({}, state, {
    showMenu: true
  });
};

exports.OPEN_MENU = OPEN_MENU;

var CLOSE_MENU = function CLOSE_MENU(state) {
  if (!state.showMenu) {
    return state;
  }

  return _objectSpread({}, state, {
    showMenu: false
  });
};

exports.CLOSE_MENU = CLOSE_MENU;

var UPDATE_ALERT_TEXT = function UPDATE_ALERT_TEXT(state, alertText) {
  return _objectSpread({}, state, {
    alertText: alertText
  });
};

exports.UPDATE_ALERT_TEXT = UPDATE_ALERT_TEXT;

var UPDATE_LOADING_TEXT = function UPDATE_LOADING_TEXT(state, loadingText) {
  return _objectSpread({}, state, {
    loadingText: loadingText
  });
};

exports.UPDATE_LOADING_TEXT = UPDATE_LOADING_TEXT;