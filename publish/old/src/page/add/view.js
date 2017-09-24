'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Add;

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

function Add(_ref) {
	var state = _ref.state,
	    methods = _ref.methods;
	var userInfo = state.userInfo,
	    location = state.location,
	    showMenu = state.showMenu,
	    tab = state.tab,
	    title = state.title,
	    content = state.content,
	    tabs = state.tabs,
	    err = state.err;
	var openMenu = methods.openMenu,
	    closeMenu = methods.closeMenu,
	    addTopic = methods.addTopic,
	    updateTitle = methods.updateTitle,
	    updateTab = methods.updateTab,
	    updateContent = methods.updateContent;


	return _react2.default.createElement(
		'div',
		{ style: { height: '100%', background: '#fff' } },
		_react2.default.createElement(_Header2.default, {
			pageType: '\u4E3B\u9898',
			fixHead: true,
			showMenu: showMenu,
			openMenu: openMenu,
			closeMenu: closeMenu,
			userInfo: userInfo,
			location: location
		}),
		_react2.default.createElement(
			'div',
			{ className: 'add-container' },
			_react2.default.createElement(
				'div',
				{ className: 'line' },
				'\u9009\u62E9\u5206\u7C7B\uFF1A',
				_react2.default.createElement(
					'select',
					{ className: 'add-tab', value: tab, onChange: updateTab },
					tabs.map(function (_ref2) {
						var type = _ref2.type,
						    text = _ref2.text;
						return _react2.default.createElement(
							'option',
							{ value: type, key: type },
							text
						);
					})
				),
				' ',
				_react2.default.createElement(
					'a',
					{ className: 'add-btn', onClick: addTopic },
					'\u53D1\u5E03'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'line' },
				_react2.default.createElement('input', {
					type: 'text',
					className: (0, _classnames2.default)({
						'add-title': true,
						'err': err === 'title'
					}),
					value: title,
					onChange: updateTitle,
					placeholder: '\u6807\u9898\uFF0C\u5B57\u657010\u5B57\u4EE5\u4E0A',
					maxLength: '100'
				})
			),
			_react2.default.createElement('textarea', {
				onChange: updateContent,
				value: content,
				className: (0, _classnames2.default)({
					'add-content': true,
					'err': err === 'content'
				}),
				placeholder: '\u56DE\u590D\u652F\u6301Markdown\u8BED\u6CD5,\u8BF7\u6CE8\u610F\u6807\u8BB0\u4EE3\u7801',
				rows: '35'
			})
		)
	);
} /**
   * view
   */