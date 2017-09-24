'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('../share/hoc');

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _hoc.purify)()(UserInfo);


function UserInfo(_ref) {
	var location = _ref.location,
	    userInfo = _ref.userInfo;

	return _react2.default.createElement(
		'div',
		{ className: 'user-info' },
		userInfo && !!userInfo.loginname ? _react2.default.createElement(User, { userInfo: userInfo }) : _react2.default.createElement(Login, { location: location })
	);
}

function Login(_ref2) {
	var location = _ref2.location;


	if (location.pathname === '/login') {
		return null;
	}

	var currentPath = '' + location.pathname + location.search + location.hash;
	var targetPath = '/login?redirect=' + currentPath;
	return _react2.default.createElement(
		'ul',
		{ className: 'login-no' },
		_react2.default.createElement(
			'li',
			{ className: 'login' },
			_react2.default.createElement(
				_Link2.default,
				{ to: targetPath },
				'\u767B\u5F55'
			)
		)
	);
}

function User(_ref3) {
	var userInfo = _ref3.userInfo;

	return _react2.default.createElement(
		_Link2.default,
		{ tagName: 'div', className: 'login-yes', to: '/user/' + userInfo.loginname },
		_react2.default.createElement(
			'div',
			{ className: 'avertar' },
			userInfo.avatar_url && _react2.default.createElement('img', { src: userInfo.avatar_url })
		),
		_react2.default.createElement(
			'div',
			{ className: 'info' },
			userInfo.loginname && _react2.default.createElement(
				'p',
				null,
				userInfo.loginname
			)
		)
	);
}