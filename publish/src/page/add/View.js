"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = View;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _component = require("react-imvc/component");

var _Layout = _interopRequireDefault(require("../../component/Layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function View(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  return _react.default.createElement(_Layout.default, null, _react.default.createElement("div", {
    className: "add-container"
  }, _react.default.createElement("div", {
    className: "line"
  }, "\u9009\u62E9\u5206\u7C7B\uFF1A", _react.default.createElement(Select, null), " ", _react.default.createElement("a", {
    className: "add-btn",
    onClick: handlers.handlePublish
  }, "\u53D1\u5E03")), _react.default.createElement("div", {
    className: "line"
  }, _react.default.createElement(_component.Input, {
    name: "title",
    className: "add-title",
    placeholder: "\u6807\u9898\uFF0C\u5B57\u657010\u5B57\u4EE5\u4E0A",
    maxLength: "100"
  })), _react.default.createElement(_component.Input, {
    as: "textarea",
    name: "content",
    className: "add-content",
    placeholder: "\u56DE\u590D\u652F\u6301Markdown\u8BED\u6CD5,\u8BF7\u6CE8\u610F\u6807\u8BB0\u4EE3\u7801",
    rows: "35"
  })));
}

var tabList = [{
  type: "share",
  text: "分享"
}, {
  type: "ask",
  text: "问答"
}, {
  type: "job",
  text: "招聘"
}];

function Select() {
  return _react.default.createElement(_component.Input, {
    as: "select",
    name: "tab",
    className: "add-tab"
  }, tabList.map(function (_ref2) {
    var type = _ref2.type,
        text = _ref2.text;
    return _react.default.createElement("option", {
      value: type,
      key: type
    }, text);
  }));
}