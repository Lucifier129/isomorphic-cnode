"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = View;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

var _hoc = require("../../shared/hoc");

var _Layout = _interopRequireDefault(require("../../component/Layout"));

var _ = _interopRequireWildcard(require("../../shared/util"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function View(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  return _react.default.createElement(_Layout.default, null, _react.default.createElement("section", {
    id: "page"
  }, _react.default.createElement("ul", {
    className: "posts-list"
  }, state.topics.map(function (topic) {
    return _react.default.createElement(PureTopic, _extends({}, topic, {
      key: topic.id
    }));
  }))));
}

var PureTopic = (0, _hoc.purify)()(Topic);

function Topic(props) {
  var id = props.id,
      title = props.title,
      good = props.good,
      top = props.top,
      tab = props.tab,
      author = props.author,
      reply_count = props.reply_count,
      create_at = props.create_at,
      last_reply_at = props.last_reply_at,
      visit_count = props.visit_count;
  return _react.default.createElement(_component.Link, {
    as: "li",
    prefetch: true,
    to: "/topic/".concat(id)
  }, _react.default.createElement("h3", {
    className: _.getTabClassName(tab, good, top),
    title: _.getTabStr(tab, good, top)
  }, title), _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("img", {
    className: "avatar",
    src: author.avatar_url
  }), _react.default.createElement("div", {
    className: "info"
  }, _react.default.createElement("p", null, _react.default.createElement("span", {
    className: "name"
  }, author.loginname), reply_count > 0 && _react.default.createElement("span", {
    className: "status"
  }, _react.default.createElement("b", null, reply_count), "/", visit_count)), _react.default.createElement("p", null, _react.default.createElement("time", null, _.getLastTimeStr(create_at, true)), _react.default.createElement("time", null, _.getLastTimeStr(last_reply_at, true))))));
}