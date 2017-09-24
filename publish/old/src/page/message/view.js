'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * view
                                                                                                                                                                                                                                                                   */


exports.default = Message;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../../share/util');

var _Header = require('../../component/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Link = require('../../component/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Message(_ref) {
	var state = _ref.state,
	    methods = _ref.methods;
	var showMenu = state.showMenu,
	    user = state.user,
	    userInfo = state.userInfo,
	    selectItem = state.selectItem,
	    has_read_messages = state.has_read_messages,
	    hasnot_read_messages = state.hasnot_read_messages;
	var openMenu = methods.openMenu,
	    closeMenu = methods.closeMenu,
	    changeItem = methods.changeItem;


	var currentData = state[selectItem + '_messages'] || [];

	return _react2.default.createElement(
		'div',
		{ style: { height: '100%', background: '#fff' } },
		_react2.default.createElement(_Header2.default, {
			pageType: '\u6D88\u606F',
			fixHead: true,
			needAdd: true,
			showMenu: showMenu,
			openMenu: openMenu,
			closeMenu: closeMenu,
			userInfo: userInfo,
			location: location,
			messageCount: hasnot_read_messages
		}),
		_react2.default.createElement(
			'div',
			{ className: 'page' },
			_react2.default.createElement(
				'ul',
				{ className: 'tabs' },
				_react2.default.createElement(
					'li',
					{
						className: (0, _classnames2.default)({
							'item': true,
							'br': true,
							'selected': selectItem === 'has_read'
						}),
						'data-type': 'has_read',
						onClick: changeItem
					},
					'\u5DF2\u8BFB\u6D88\u606F'
				),
				_react2.default.createElement(
					'li',
					{
						className: (0, _classnames2.default)({
							'item': true,
							'br': true,
							'selected': selectItem === 'hasnot_read'
						}),
						'data-type': 'hasnot_read',
						onClick: changeItem
					},
					'\u672A\u8BFB\u6D88\u606F',
					hasnot_read_messages.length > 0 && _react2.default.createElement(
						'i',
						{ className: 'iconfont read', onClick: markAll },
						'\uE60C'
					)
				)
			),
			currentData.length > 0 && currentData.map(function (data) {
				return _react2.default.createElement(MessageInfo, _extends({}, data, { key: data.id }));
			}),
			currentData.length === 0 && _react2.default.createElement(
				'div',
				{ className: 'no-data' },
				_react2.default.createElement(
					'i',
					{ className: 'iconfont icon-empty' },
					'\uE60A'
				),
				'\u6682\u65E0\u6570\u636E!'
			)
		)
	);
}

function MessageInfo(props) {
	var id = props.id,
	    title = props.title,
	    author = props.author,
	    type = props.type,
	    reply = props.reply,
	    topic = props.topic;

	return _react2.default.createElement(
		'div',
		{ className: 'message markdown-body' },
		_react2.default.createElement(
			'section',
			{ className: 'user' },
			_react2.default.createElement(_Link2.default, {
				tagName: 'img',
				className: 'head',
				src: author.avatar_url,
				to: '/user/' + author.loginname
			}),
			_react2.default.createElement(
				'div',
				{ className: 'info' },
				_react2.default.createElement(
					'span',
					{ className: 'cl' },
					_react2.default.createElement(
						'span',
						{ className: 'name' },
						author.loginname
					),
					type === 'at' && _react2.default.createElement(
						'span',
						{ className: 'name' },
						'\u5728\u56DE\u590D\u4E2D@\u4E86\u60A8'
					),
					type === 'reply' && _react2.default.createElement(
						'span',
						{ className: 'name' },
						'\u56DE\u590D\u4E86\u60A8\u7684\u8BDD\u9898'
					)
				),
				_react2.default.createElement(
					'span',
					{ className: 'cr' },
					_react2.default.createElement(
						'span',
						{ className: 'name' },
						(0, _util.getLastTimeStr)(reply.create_at, true)
					)
				)
			)
		),
		_react2.default.createElement('div', { className: 'reply_content', dangerouslySetInnerHTML: { __html: reply.content } }),
		_react2.default.createElement(
			_Link2.default,
			{ className: 'topic-title', to: '/topic/' + topic.id },
			'\u8BDD\u9898\uFF1A',
			topic.title
		)
	);
}