'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('isomorphic-fetch');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _client = require('create-app/lib/client');

var _client2 = _interopRequireDefault(_client);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_public_path__ = __PUBLIC_PATH__;
var config = window.__CONFIG__;

var webpackLoader = function webpackLoader(loadModule) {
	return new Promise(loadModule).then(function (module) {
		return module.default || module;
	});
};

var viewEngine = {
	render: function render(component, container) {
		console.time('render');
		var result = _reactDom2.default.render(component, container);
		console.timeEnd('render');
		return result;
	}
};

var app = (0, _client2.default)(_extends({}, config, {
	hashType: 'hashbang',
	container: '#root',
	context: _extends({}, config.context, {
		isClient: true,
		isServer: false
	}),
	loader: webpackLoader,
	routes: _routes2.default,
	viewEngine: viewEngine
}));

app.start();

if ('ontouchstart' in document) {
	_fastclick2.default.attach(document.body);
}