webpackJsonp([1],{

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _BaseController = __webpack_require__(400);

	var _BaseController2 = _interopRequireDefault(_BaseController);

	var _react = __webpack_require__(301);

	var _react2 = _interopRequireDefault(_react);

	var _methods = __webpack_require__(405);

	var _Header = __webpack_require__(339);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_Controller) {
		_inherits(_class, _Controller);

		function _class() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, _class);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'About', _this.View = About, _this.actions = {
				UPDATE_FIELD: function UPDATE_FIELD(state, _ref2) {
					var key = _ref2.key;
					var value = _ref2.value;

					if (state[key] === value) {
						return state;
					}
					return _extends({}, state, _defineProperty({}, key, value));
				}
			}, _this.initialState = {
				showMenu: false
			}, _this.methods = {
				openMenu: _methods.openMenu,
				closeMenu: _methods.closeMenu
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		return _class;
	}(_BaseController2.default);

	exports.default = _class;


	function About(_ref3) {
		var state = _ref3.state;
		var methods = _ref3.methods;
		var showMenu = state.showMenu;
		var userInfo = state.userInfo;
		var location = state.location;
		var openMenu = methods.openMenu;
		var closeMenu = methods.closeMenu;


		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_Header2.default, {
				pageType: '关于',
				fixHead: true,
				needAdd: true,
				showMenu: showMenu,
				openMenu: openMenu,
				closeMenu: closeMenu,
				userInfo: userInfo,
				location: location
			}),
			_react2.default.createElement(
				'dl',
				{ className: 'about-info' },
				_react2.default.createElement(
					'dt',
					null,
					'关于项目'
				),
				_react2.default.createElement(
					'dd',
					null,
					'基于 cnodejs 的 api，采用 react 编写的 webapp'
				),
				_react2.default.createElement(
					'dt',
					null,
					'源码地址'
				),
				_react2.default.createElement(
					'dd',
					null,
					_react2.default.createElement(
						'a',
						{ href: 'https://github.com/Lucifier129/create-app' },
						'https://github.com/Lucifier129/create-app'
					)
				),
				_react2.default.createElement(
					'dt',
					null,
					'意见反馈'
				),
				_react2.default.createElement(
					'dd',
					null,
					_react2.default.createElement(
						'a',
						{ href: 'https://github.com/Lucifier129/create-app/issues' },
						'发表意见或者提需求'
					)
				),
				_react2.default.createElement(
					'dt',
					null,
					'当前版本'
				),
				_react2.default.createElement(
					'dd',
					null,
					'V1.0'
				)
			)
		);
	}

/***/ }

});