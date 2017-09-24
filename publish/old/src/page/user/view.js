'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * view
                                                                                                                                                                                                                                                                   */


exports.default = User;

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

function User(_ref) {
	var state = _ref.state,
	    methods = _ref.methods;
	var showMenu = state.showMenu,
	    user = state.user,
	    selectItem = state.selectItem,
	    userInfo = state.userInfo,
	    location = state.location;
	var openMenu = methods.openMenu,
	    closeMenu = methods.closeMenu,
	    changeItem = methods.changeItem;


	var currentData = user['recent_' + selectItem] || [];

	return _react2.default.createElement(
		'div',
		{ style: { height: '100%', background: '#fff' } },
		_react2.default.createElement(_Header2.default, {
			pageType: '\u7528\u6237\u4FE1\u606F',
			fixHead: true,
			needAdd: true,
			showMenu: showMenu,
			openMenu: openMenu,
			closeMenu: closeMenu,
			userInfo: userInfo,
			location: location
		}),
		_react2.default.createElement(
			'section',
			{ className: 'userinfo' },
			_react2.default.createElement('img', { className: 'u-img', src: user.avatar_url }),
			_react2.default.createElement('br', null),
			_react2.default.createElement(
				'span',
				{ className: 'u-name' },
				user.loginname
			),
			_react2.default.createElement(
				'div',
				{ className: 'u-bottom' },
				_react2.default.createElement(
					'span',
					{ className: 'u-time' },
					(0, _util.getLastTimeStr)(user.create_at, false)
				),
				_react2.default.createElement(
					'span',
					{ className: 'u-score' },
					'\u79EF\u5206\uFF1A',
					user.score
				)
			)
		),
		_react2.default.createElement(
			'section',
			{ className: 'topics' },
			_react2.default.createElement(
				'ul',
				{ className: 'user-tabs' },
				_react2.default.createElement(
					'li',
					{
						className: (0, _classnames2.default)({
							'item': true,
							'br': true,
							'selected': selectItem === 'replies'
						}),
						'data-type': 'replies',
						onClick: changeItem },
					'\u6700\u8FD1\u56DE\u590D'
				),
				_react2.default.createElement(
					'li',
					{
						className: (0, _classnames2.default)({
							'item': true,
							'br': true,
							'selected': selectItem === 'topics'
						}),
						'data-type': 'topics',
						onClick: changeItem },
					'\u6700\u65B0\u53D1\u5E03'
				)
			),
			currentData.length > 0 && currentData.map(function (message) {
				return _react2.default.createElement(Message, _extends({}, message, { key: message.id }));
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

function Message(props) {
	var id = props.id,
	    title = props.title,
	    author = props.author,
	    last_reply_at = props.last_reply_at;

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
				_Link2.default,
				{ tagName: 'div', to: '/topic/' + id },
				_react2.default.createElement(
					'div',
					{ className: 't-title' },
					title
				),
				_react2.default.createElement(
					'span',
					{ className: 'cl' },
					_react2.default.createElement(
						'span',
						{ className: 'name' },
						author.loginname
					)
				),
				_react2.default.createElement(
					'span',
					{ className: 'cr' },
					_react2.default.createElement(
						'span',
						{ className: 'name' },
						(0, _util.getLastTimeStr)(last_reply_at, true)
					)
				)
			)
		)
	);
}