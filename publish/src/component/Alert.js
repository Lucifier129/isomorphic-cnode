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
    content: state.alertText
  };
});

var _default = withData(Alert);

exports.default = _default;

function Alert(props) {
  if (!props.content) {
    return null;
  }

  return _react.default.createElement("div", {
    id: "wxAlert",
    className: "wx_loading"
  }, _react.default.createElement("div", {
    id: "wx_alert_inner",
    className: "wx_alert_inner"
  }, props.content));
}