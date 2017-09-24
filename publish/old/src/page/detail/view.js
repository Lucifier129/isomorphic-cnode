'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Detail;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = require('../../share/util');

var _Header = require('../../component/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Link = require('../../component/Link');

var _Link2 = _interopRequireDefault(_Link);

var _BackToTop = require('../../component/BackToTop');

var _BackToTop2 = _interopRequireDefault(_BackToTop);

var _Reply = require('../../component/Reply');

var _Reply2 = _interopRequireDefault(_Reply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Detail(_ref) {
	var state = _ref.state,
	    methods = _ref.methods;
	var location = state.location,
	    userInfo = state.userInfo,
	    showMenu = state.showMenu,
	    topic = state.topic,
	    curReplyId = state.curReplyId,
	    replyToReply = state.replyToReply,
	    replyToTopic = state.replyToTopic;
	var openMenu = methods.openMenu,
	    closeMenu = methods.closeMenu,
	    upReply = methods.upReply,
	    addReply = methods.addReply,
	    showReply = methods.showReply,
	    updateReplyToReply = methods.updateReplyToReply,
	    updateReplyToTopic = methods.updateReplyToTopic;


	if (!topic) {
		return emptyNotice;
	}

	var pageClassName = (0, _classnames3.default)({
		'show-menu': showMenu
	});
	var tagClassName = (0, _classnames3.default)(_defineProperty({
		tag: true
	}, (0, _util.getTabClassName)(topic.tab, topic.good, topic.top), true));

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_Header2.default, {
			pageType: '\u4E3B\u9898',
			showMenu: showMenu,
			needAdd: true,
			fixHead: true,
			openMenu: openMenu,
			closeMenu: closeMenu,
			location: location,
			userInfo: userInfo
		}),
		topic && topic.title && _react2.default.createElement(
			'div',
			{ id: 'page' },
			_react2.default.createElement(
				'h2',
				{ className: 'topic-title' },
				topic.title
			),
			_react2.default.createElement(
				'section',
				{ className: 'author-info' },
				_react2.default.createElement(_Link2.default, {
					tagName: 'img',
					className: 'avatar',
					src: topic.author.avatar_url,
					to: '/user/' + topic.author.loginname
				}),
				_react2.default.createElement(
					'div',
					{ className: 'col' },
					_react2.default.createElement(
						'span',
						null,
						topic.author.loginname
					),
					_react2.default.createElement(
						'time',
						null,
						'\u53D1\u5E03\u4E8E:',
						(0, _util.getLastTimeStr)(topic.create_at, true)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'right' },
					_react2.default.createElement(
						'span',
						{ className: tagClassName },
						(0, _util.getTabStr)(topic.tab, topic.good, topic.top)
					),
					_react2.default.createElement(
						'span',
						{ className: 'name' },
						topic.visit_count,
						'\u6B21\u6D4F\u89C8'
					)
				)
			),
			_react2.default.createElement('section', {
				className: 'markdown-body topic-content',
				dangerouslySetInnerHTML: { __html: topic.content }
			}),
			_react2.default.createElement(
				'h3',
				{ className: 'topic-reply' },
				_react2.default.createElement(
					'strong',
					null,
					topic.reply_count
				),
				' \u56DE\u590D'
			),
			_react2.default.createElement(
				'section',
				{ className: 'reply-list' },
				_react2.default.createElement(
					'ul',
					null,
					topic.replies.map(function (reply) {
						return _react2.default.createElement(ReplyItem, _extends({}, reply, {
							key: reply.id,
							upReply: upReply,
							addReply: addReply,
							showReply: showReply,
							topicId: topic.id,
							curReplyId: curReplyId,
							isUps: reply.ups.indexOf(userInfo.id) !== -1,
							replyContent: replyToReply,
							updateReplyToReply: updateReplyToReply
						}));
					})
				)
			)
		),
		_react2.default.createElement(_BackToTop2.default, null),
		!!userInfo.loginname && _react2.default.createElement(_Reply2.default, {
			replyContent: replyToTopic,
			handleInput: updateReplyToTopic,
			addReply: addReply
		})
	);
}

function ReplyItem(props) {
	var id = props.id,
	    author = props.author,
	    create_at = props.create_at,
	    ups = props.ups,
	    upReply = props.upReply,
	    addReply = props.addReply,
	    showReply = props.showReply,
	    content = props.content,
	    replyContent = props.replyContent,
	    isUps = props.isUps,
	    curReplyId = props.curReplyId,
	    updateReplyToReply = props.updateReplyToReply;


	var iconUpedClassName = (0, _classnames3.default)({
		'iconfont': true,
		'icon': true,
		'uped': isUps
	});

	return _react2.default.createElement(
		'li',
		null,
		_react2.default.createElement(
			'section',
			{ className: 'user' },
			_react2.default.createElement(_Link2.default, { tagName: 'img', className: 'head', src: author.avatar_url, to: '/user/' + author.loginname }),
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
					_react2.default.createElement(
						'span',
						{ className: 'name mt10' },
						_react2.default.createElement('span', null),
						'\u53D1\u5E03\u4E8E:',
						(0, _util.getLastTimeStr)(create_at, true)
					)
				),
				_react2.default.createElement(
					'span',
					{ className: 'cr' },
					_react2.default.createElement(
						'span',
						{ className: iconUpedClassName, onClick: upReply, 'data-id': id },
						'\uE608'
					),
					ups.length,
					_react2.default.createElement(
						'span',
						{ className: 'iconfont icon', onClick: showReply, 'data-id': id },
						'\uE609'
					)
				)
			)
		),
		_react2.default.createElement('div', {
			className: 'reply_content',
			dangerouslySetInnerHTML: { __html: content } }),
		curReplyId === id && _react2.default.createElement(_Reply2.default, {
			replyId: id,
			content: replyContent,
			handleInput: updateReplyToReply,
			addReply: addReply
		})
	);
}

var emptyNotice = _react2.default.createElement(
	'div',
	{ style: { height: '100%', background: '#fff' } },
	_react2.default.createElement(
		'div',
		{ className: 'no-data' },
		_react2.default.createElement(
			'i',
			{ className: 'iconfont icon-empty' },
			'\uE60A'
		),
		'\u8BE5\u8BDD\u9898\u4E0D\u5B58\u5728!'
	)
);