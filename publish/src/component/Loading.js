"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withData = (0, _connect.default)(function (_ref) {
  var state = _ref.state;
  return {
    content: state.loadingText
  };
});

var _default = withData(Loading);

exports.default = _default;

function Loading(props) {
  if (!props.content) {
    return null;
  }

  return _react.default.createElement("div", {
    id: "wxloading",
    className: "wx_loading"
  }, _react.default.createElement("div", {
    className: "wx_loading_inner"
  }, _react.default.createElement("i", {
    className: "wx_loading_icon"
  }), props.content));
}