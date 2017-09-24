"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Alert;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Alert(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		"div",
		{ id: "wxAlert", className: "wx_loading" },
		_react2.default.createElement(
			"div",
			{ id: "wx_alert_inner", className: "wx_alert_inner" },
			content
		)
	);
}