'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _hoc = require('../share/hoc');

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = {
	path: ['showMenu'],
	target: ['html', 'body', '#page'],
	className: 'scroll-hide'
};

exports.default = (0, _hoc.addClassName)(settings)(Header);


function Header(props) {
	var showMenu = props.showMenu,
	    fixHead = props.fixHead,
	    needAdd = props.needAdd,
	    openMenu = props.openMenu,
	    closeMenu = props.closeMenu,
	    messageCount = props.messageCount,
	    userInfo = props.userInfo,
	    location = props.location,
	    pageType = props.pageType;

	var headClassName = (0, _classnames2.default)({
		'show': showMenu && fixHead,
		'fix-header': fixHead,
		'no-fix': !fixHead
	});
	return _react2.default.createElement(
		'div',
		null,
		showMenu && fixHead && _react2.default.createElement('div', { className: 'page-cover', onClick: closeMenu }),
		_react2.default.createElement(
			'header',
			{ id: 'hd', className: headClassName },
			_react2.default.createElement(
				'div',
				{ className: 'nv-toolbar' },
				fixHead && _react2.default.createElement('div', { className: 'toolbar-nav', onClick: openMenu }),
				_react2.default.createElement(
					'span',
					null,
					pageType
				),
				messageCount && messageCount > 0 && _react2.default.createElement(
					'i',
					{ className: 'num' },
					messageCount
				),
				needAdd && (!messageCount || messageCount <= 0) && _react2.default.createElement(
					_Link2.default,
					{ tagName: 'i', className: 'iconfont add-icon', to: '/add' },
					'\uE60F'
				)
			)
		),
		fixHead && _react2.default.createElement(_Menu2.default, {
			showMenu: showMenu,
			userInfo: userInfo,
			location: location,
			closeMenu: closeMenu
		})
	);
}