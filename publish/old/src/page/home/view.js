'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // view


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../../share/util');

var _hoc = require('../../share/hoc');

var _Header = require('../../component/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Link = require('../../component/Link');

var _Link2 = _interopRequireDefault(_Link);

var _BackToTop = require('../../component/BackToTop');

var _BackToTop2 = _interopRequireDefault(_BackToTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _hoc.connectScroll)(['methods', 'handleScroll'])(View);


function View(_ref) {
	var state = _ref.state,
	    methods = _ref.methods;
	var showMenu = state.showMenu,
	    topics = state.topics,
	    location = state.location,
	    userInfo = state.userInfo,
	    searchKey = state.searchKey;
	var openMenu = methods.openMenu,
	    closeMenu = methods.closeMenu;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_Header2.default, {
			fixHead: true,
			needAdd: true,
			showMenu: showMenu,
			openMenu: openMenu,
			closeMenu: closeMenu,
			location: location,
			userInfo: userInfo,
			pageType: (0, _util.getTitleStr)(searchKey.tab)
		}),
		_react2.default.createElement(
			'section',
			{ id: 'page' },
			_react2.default.createElement(
				'ul',
				{ className: 'posts-list' },
				topics.map(function (topic) {
					return _react2.default.createElement(PureTopic, _extends({}, topic, { key: topic.id }));
				})
			)
		),
		_react2.default.createElement(_BackToTop2.default, null)
	);
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

	return _react2.default.createElement(
		_Link2.default,
		{ tagName: 'li', to: '/topic/' + id },
		_react2.default.createElement(
			'h3',
			{ className: (0, _util.getTabClassName)(tab, good, top), title: (0, _util.getTabStr)(tab, good, top) },
			title
		),
		_react2.default.createElement(
			'div',
			{ className: 'content' },
			_react2.default.createElement('img', { className: 'avatar', src: author.avatar_url }),
			_react2.default.createElement(
				'div',
				{ className: 'info' },
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						{ className: 'name' },
						author.loginname
					),
					reply_count > 0 && _react2.default.createElement(
						'span',
						{ className: 'status' },
						_react2.default.createElement(
							'b',
							null,
							reply_count
						),
						'/',
						visit_count
					)
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'time',
						null,
						(0, _util.getLastTimeStr)(create_at, true)
					),
					_react2.default.createElement(
						'time',
						null,
						(0, _util.getLastTimeStr)(last_reply_at, true)
					)
				)
			)
		)
	);
}