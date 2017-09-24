'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // base controller class


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _relite = require('relite');

var _BaseView = require('../component/BaseView');

var _BaseView2 = _interopRequireDefault(_BaseView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
	function Controller(location, context) {
		_classCallCheck(this, Controller);

		this.location = location;
		this.context = context;
		this.bindStoreToView = this.bindStoreToView.bind(this);
		this.goTo = this.goTo.bind(this);
		this.goReplace = this.goReplace.bind(this);
		this.childContext = {
			location: location,
			goTo: this.goTo,
			goReplace: this.goReplace
		};
	}

	_createClass(Controller, [{
		key: 'init',
		value: function init() {
			var initialState = this.initialState,
			    actions = this.actions,
			    context = this.context,
			    methods = this.methods,
			    location = this.location,
			    needLogin = this.needLogin;

			var __INITIAL_STATE__ = null;
			var userInfo = {};

			// get user infomation from local storage
			if (context.isClient) {
				var userInfoJSON = localStorage.getItem('userInfo');
				if (userInfoJSON) {
					userInfo = JSON.parse(userInfoJSON);
				}
				if (window.__INITIAL_STATE__) {
					__INITIAL_STATE__ = window.__INITIAL_STATE__;
					window.__INITIAL_STATE__ = undefined;
				}
			}

			var store = this.store = (0, _relite.createStore)(actions, _extends({}, initialState, __INITIAL_STATE__, {
				location: location,
				userInfo: userInfo,
				isClient: context.isClient,
				isServer: context.isServer
			}));

			if (needLogin && !userInfo.loginname) {
				var targetPath = '/login';
				var redirect = getRedirect(context.prevLocation) || getRedirect(location);
				if (redirect) {
					targetPath += '?redirect=' + encodeURIComponent(redirect);
				}
				return this.goReplace(targetPath);
			}

			// add logger and bind store to view in client
			if (context.isClient) {
				var logger = (0, _relite.createLogger)({
					name: this.name
				});
				store.subscribe(logger);
			}

			// bind methods
			this.methods = Object.keys(methods).reduce(function (obj, key) {
				obj[key] = methods[key].bind(obj);
				return obj;
			}, Object.create(this));

			// INIT action had invoked at server side, just render page directly
			if (__INITIAL_STATE__) {
				return this.bindStoreToView();
			}

			var INIT = store.actions.INIT;

			if (!INIT) {
				return this.bindStoreToView();
			}
			return INIT().then(this.bindStoreToView);
		}
	}, {
		key: 'bindStoreToView',
		value: function bindStoreToView() {
			var context = this.context,
			    store = this.store;

			if (context.isClient) {
				this.unsubscribe = store.subscribe(this.refreshView.bind(this));
				window.scrollTo(0, 0);
			}
			return this.render();
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			if (this.unsubscribe) {
				this.unsubscribe();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var View = this.View,
			    store = this.store,
			    methods = this.methods,
			    childContext = this.childContext;

			return _react2.default.createElement(
				_BaseView2.default,
				{ context: childContext },
				_react2.default.createElement(View, { state: store.getState(), methods: methods })
			);
		}
	}]);

	return Controller;
}();

exports.default = Controller;


function getRedirect(location) {
	if (location && location.raw.indexOf('/login') !== 0) {
		return location.raw;
	}
}