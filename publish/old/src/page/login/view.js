'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Login;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../../component/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Loading = require('../../component/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Alert = require('../../component/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * view
 */
function Login(_ref) {
	var state = _ref.state,
	    methods = _ref.methods;
	var token = state.token,
	    alertText = state.alertText,
	    showLoading = state.showLoading,
	    userInfo = state.userInfo,
	    location = state.location,
	    showMenu = state.showMenu;
	var openMenu = methods.openMenu,
	    closeMenu = methods.closeMenu,
	    handleInput = methods.handleInput,
	    readPic = methods.readPic,
	    login = methods.login;


	return _react2.default.createElement(
		'div',
		{ style: { height: '100%', background: '#fff' } },
		_react2.default.createElement(_Header2.default, {
			pageType: '\u767B\u5F55',
			fixHead: true,
			showMenu: showMenu,
			openMenu: openMenu,
			closeMenu: closeMenu,
			location: location,
			userInfo: userInfo
		}),
		_react2.default.createElement(
			'section',
			{ className: 'page-body' },
			_react2.default.createElement(
				'div',
				{ className: 'label' },
				_react2.default.createElement('input', {
					className: 'txt',
					type: 'text',
					placeholder: 'Access Token',
					maxLength: '36',
					value: token,
					onChange: handleInput
				})
			),
			_react2.default.createElement(
				'div',
				{ className: 'label' },
				_react2.default.createElement(
					'button',
					{ className: 'button' },
					'\u9009\u62E9\u4E8C\u7EF4\u7801\u56FE\u7247'
				),
				_react2.default.createElement('input', {
					className: 'file',
					type: 'file',
					id: 'file_upload',
					onChange: readPic,
					accept: 'image/*',
					capture: 'camera'
				}),
				_react2.default.createElement(
					'button',
					{ className: 'button', onClick: login },
					'\u767B\u5F55'
				)
			)
		),
		alertText && _react2.default.createElement(_Alert2.default, { content: alertText }),
		showLoading && _react2.default.createElement(_Loading2.default, { text: '\u4E8C\u7EF4\u7801\u8BC6\u522B\u4E2D' })
	);
}