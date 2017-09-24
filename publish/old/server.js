'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _server = require('create-app/lib/server');

var _server2 = _interopRequireDefault(_server);

var _server3 = require('react-dom/server');

var _routes = require('./src/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var defaults = {
    publicPath: '/static',
    config: {
        type: 'createHistory',
        basename: '/isomorphic-cnode'
    },
    initialState: 'undefined',
    content: ''
};

var app = (0, _server2.default)(_extends({}, defaults.config, {
    loader: function loader(module) {
        return module.default || module;
    },
    routes: _routes2.default,
    viewEngine: {
        render: _server3.renderToString
    },
    context: {
        isClient: false,
        isServer: true
    }
}));

var server = (0, _express2.default)();
server.use(defaults.publicPath, _express2.default.static(_path2.default.join(__dirname, './docs')));
server.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, './docs/favicon.ico')));

// handle page
server.get('*', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var url, _ref2, content, controller, initialState, html;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        url = replaceBasename(req.url);
                        _context.prev = 1;
                        _context.next = 4;
                        return app.render(url);

                    case 4:
                        _ref2 = _context.sent;
                        content = _ref2.content;
                        controller = _ref2.controller;
                        initialState = controller.store.getState();
                        html = renderLayout(_extends({}, defaults, {
                            content: content,
                            initialState: initialState
                        }));

                        res.end(html);
                        _context.next = 16;
                        break;

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context['catch'](1);

                        res.writeHead(500);
                        res.end(_context.t0.stack);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[1, 12]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

var port = process.env.PORT || 3002;

server.listen(port, function () {
    console.log('server started at localhost:' + port + defaults.config.basename);
});

var layout = _fs2.default.readFileSync('./layout.html', 'utf-8');
function renderLayout(options) {
    return Object.keys(options).reduce(function (html, key) {
        var value = typeof options[key] === 'string' ? options[key] : JSON.stringify(options[key]);
        return html.replace(new RegExp('{{ ' + key + ' }}', 'g'), value);
    }, layout);
}

function replaceBasename(inputUrl) {
    if (inputUrl.indexOf(defaults.config.basename) === 0) {
        return inputUrl.substr(defaults.config.basename.length);
    }
    return inputUrl;
}