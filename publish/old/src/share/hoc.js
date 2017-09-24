'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addClassName = exports.connectScroll = exports.purify = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * high order component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var purify = exports.purify = function purify() {
    return function (InputComponent) {
        return function (_PureComponent) {
            _inherits(Pure, _PureComponent);

            function Pure() {
                _classCallCheck(this, Pure);

                return _possibleConstructorReturn(this, (Pure.__proto__ || Object.getPrototypeOf(Pure)).apply(this, arguments));
            }

            _createClass(Pure, [{
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(InputComponent, this.props);
                }
            }]);

            return Pure;
        }(_react.PureComponent);
    };
};

var connectScroll = exports.connectScroll = function connectScroll(path) {
    return function (InputComponent) {
        return function (_Component) {
            _inherits(ConnectScroll, _Component);

            function ConnectScroll() {
                var _ref;

                var _temp, _this2, _ret;

                _classCallCheck(this, ConnectScroll);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ConnectScroll.__proto__ || Object.getPrototypeOf(ConnectScroll)).call.apply(_ref, [this].concat(args))), _this2), _this2.handleScroll = function (event) {
                    var handleScroll = (0, _util.accessProp)(_this2.props, path);
                    if (typeof handleScroll === 'function') {
                        handleScroll(event);
                    }
                }, _temp), _possibleConstructorReturn(_this2, _ret);
            }

            _createClass(ConnectScroll, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    window.addEventListener('scroll', this.handleScroll);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    window.removeEventListener('scroll', this.handleScroll);
                }
            }, {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(InputComponent, this.props);
                }
            }]);

            return ConnectScroll;
        }(_react.Component);
    };
};

var addClassName = exports.addClassName = function addClassName(_ref2) {
    var path = _ref2.path,
        target = _ref2.target,
        className = _ref2.className;
    return function (InputComponent) {
        return function (_Component2) {
            _inherits(AddiClassName, _Component2);

            function AddiClassName() {
                _classCallCheck(this, AddiClassName);

                return _possibleConstructorReturn(this, (AddiClassName.__proto__ || Object.getPrototypeOf(AddiClassName)).apply(this, arguments));
            }

            _createClass(AddiClassName, [{
                key: 'componentDidUpdate',
                value: function componentDidUpdate() {
                    var shouldHide = (0, _util.accessProp)(this.props, path);
                    var method = shouldHide ? 'add' : 'remove';
                    target.reduce(function (elems, selector) {
                        return elems.concat(Array.from(document.querySelectorAll(selector)));
                    }, []).map(function (elem) {
                        elem.classList[method](className);
                    });
                }
            }, {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(InputComponent, this.props);
                }
            }]);

            return AddiClassName;
        }(_react.Component);
    };
};