"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Loading;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loading(_ref) {
	var text = _ref.text;

	return _react2.default.createElement(
		"div",
		{ id: "wxloading", className: "wx_loading" },
		_react2.default.createElement(
			"div",
			{ className: "wx_loading_inner" },
			_react2.default.createElement("i", { className: "wx_loading_icon" }),
			text,
			"..."
		)
	);
}