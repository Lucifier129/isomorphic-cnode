'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _BaseController = require('../../share/BaseController');

var _BaseController2 = _interopRequireDefault(_BaseController);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _model = require('./model');

var actions = _interopRequireWildcard(_model);

var _methods = require('../../share/methods');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'Login', _this.View = _view2.default, _this.actions = actions, _this.initialState = {
            showMenu: false,
            token: '',
            alertText: '',
            showLoading: false
        }, _this.methods = {
            openMenu: _methods.openMenu,
            closeMenu: _methods.closeMenu,
            hideAlert: function hideAlert() {
                var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;

                UPDATE_FIELD({
                    key: 'alertText',
                    value: ''
                });
            },
            showAlert: function showAlert(text) {
                var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;

                UPDATE_FIELD({
                    key: 'alertText',
                    value: text
                });
                setTimeout(this.hideAlert, 1000);
            },
            switchLoading: function switchLoading() {
                var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;

                UPDATE_FIELD({
                    key: 'showLoading',
                    value: status
                });
            },
            login: function login() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _store$actions, UPDATE_FIELD, FETCH_USER_INFO, _store$getState, token, location, _ref2, userInfo, _token, targetPath;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _store$actions = _this2.store.actions, UPDATE_FIELD = _store$actions.UPDATE_FIELD, FETCH_USER_INFO = _store$actions.FETCH_USER_INFO;
                                    _store$getState = _this2.store.getState(), token = _store$getState.token, location = _store$getState.location;

                                    if (token) {
                                        _context.next = 5;
                                        break;
                                    }

                                    _this2.showAlert('令牌格式错误, 应为36位UUID字符串');
                                    return _context.abrupt('return');

                                case 5:
                                    _context.prev = 5;
                                    _context.next = 8;
                                    return FETCH_USER_INFO();

                                case 8:
                                    _ref2 = _context.sent;
                                    userInfo = _ref2.userInfo;
                                    _token = _ref2.token;

                                    localStorage.setItem('userInfo', JSON.stringify(_extends({}, userInfo, {
                                        token: _token
                                    })));
                                    targetPath = location.query.redirect || '/user/' + userInfo.loginname;

                                    _this2.goReplace(targetPath);
                                    _context.next = 19;
                                    break;

                                case 16:
                                    _context.prev = 16;
                                    _context.t0 = _context['catch'](5);

                                    _this2.showAlert(_context.t0.message);

                                case 19:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2, [[5, 16]]);
                }))();
            },
            handleInput: function handleInput(_ref3) {
                var currentTarget = _ref3.currentTarget;
                var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;


                UPDATE_FIELD({
                    key: 'token',
                    value: currentTarget.value
                });
            },
            readPic: function readPic(_ref4) {
                var _this3 = this;

                var currentTarget = _ref4.currentTarget;
                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    var _store$actions2, GET_TOKEN_BY_IMG, UPDATE_FIELD, file, reader;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _store$actions2 = _this3.store.actions, GET_TOKEN_BY_IMG = _store$actions2.GET_TOKEN_BY_IMG, UPDATE_FIELD = _store$actions2.UPDATE_FIELD;
                                    file = currentTarget.files[0];
                                    reader = new FileReader();


                                    reader.onload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                        var dataURL, base64;
                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        dataURL = reader.result;
                                                        base64 = dataURL.replace('base64,', '');


                                                        _this3.switchLoading(true);

                                                        _context2.prev = 3;
                                                        _context2.next = 6;
                                                        return GET_TOKEN_BY_IMG(base64);

                                                    case 6:
                                                        _context2.next = 11;
                                                        break;

                                                    case 8:
                                                        _context2.prev = 8;
                                                        _context2.t0 = _context2['catch'](3);

                                                        _this3.showAlert(_context2.t0.message);

                                                    case 11:
                                                        _context2.prev = 11;

                                                        _this3.switchLoading(false);
                                                        return _context2.finish(11);

                                                    case 14:
                                                    case 'end':
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _callee2, _this3, [[3, 8, 11, 14]]);
                                    }));
                                    reader.readAsDataURL(file);

                                case 5:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this3);
                }))();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
}(_BaseController2.default);

exports.default = _class;