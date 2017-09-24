'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Reply;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Reply(props) {
	var hasErr = props.hasErr,
	    replyId = props.replyId,
	    content = props.content,
	    addReply = props.addReply,
	    handleInput = props.handleInput;


	var className = {
		'text': true,
		'err': hasErr
	};
	return _react2.default.createElement(
		'section',
		{ className: 'reply' },
		_react2.default.createElement('textarea', {
			rows: '8',
			className: className,
			placeholder: '\u56DE\u590D\u652F\u6301Markdown\u8BED\u6CD5,\u8BF7\u6CE8\u610F\u6807\u8BB0\u4EE3\u7801',
			value: content,
			onChange: handleInput
		}),
		_react2.default.createElement(
			'button',
			{
				className: 'button',
				onClick: addReply,
				'data-reply': replyId
			},
			'\u786E\u5B9A'
		)
	);
}