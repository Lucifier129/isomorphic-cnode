"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _connect = require("react-imvc/hoc/connect");

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withData = (0, _connect2.default)(function (_ref) {
  var state = _ref.state;

  return {
    content: state.alertText
  };
});

exports.default = withData(Alert);


function Alert(props) {
  if (!props.content) {
    return null;
  }
  return _react2.default.createElement(
    "div",
    { id: "wxAlert", className: "wx_loading" },
    _react2.default.createElement(
      "div",
      { id: "wx_alert_inner", className: "wx_alert_inner" },
      props.content
    )
  );
}