'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'Detail', _this.View = _view2.default, _this.actions = actions, _this.initialState = {
            showMenu: false,
            topic: null,
            curReplyId: null,
            replyToReply: '',
            replyToTopic: '',
            suffix: '\n        <br/>\n        \u6765\u81EA <a class="from" href="https://github.com/Lucifier129/isomorphic-cnode">isomorphic-cnode</a>\n        '
        }, _this.methods = {
            openMenu: _methods.openMenu,
            closeMenu: _methods.closeMenu,

            updateReplyToReply: function updateReplyToReply(_ref2) {
                var currentTarget = _ref2.currentTarget;
                var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;
                var value = currentTarget.value;


                UPDATE_FIELD({
                    key: 'replyToReply',
                    value: value
                });
            },
            updateReplyToTopic: function updateReplyToTopic(_ref3) {
                var currentTarget = _ref3.currentTarget;
                var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;
                var value = currentTarget.value;


                UPDATE_FIELD({
                    key: 'replyToTopic',
                    value: value
                });
            },
            isLogin: function isLogin() {
                var _store$getState = this.store.getState(),
                    userInfo = _store$getState.userInfo,
                    location = _store$getState.location;

                if (userInfo.id) {
                    return true;
                }
                this.goTo('/login?redirect=' + location.raw);

                return false;
            },
            upReply: function upReply(_ref4) {
                var _this2 = this;

                var currentTarget = _ref4.currentTarget;
                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _store$actions, UPDATE_FIELD, UPS_REPLAY, replyId;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (_this2.isLogin()) {
                                        _context.next = 2;
                                        break;
                                    }

                                    return _context.abrupt('return');

                                case 2:
                                    _store$actions = _this2.store.actions, UPDATE_FIELD = _store$actions.UPDATE_FIELD, UPS_REPLAY = _store$actions.UPS_REPLAY;
                                    replyId = currentTarget.getAttribute('data-id');
                                    _context.prev = 4;
                                    _context.next = 7;
                                    return UPS_REPLAY(replyId);

                                case 7:
                                    _context.next = 12;
                                    break;

                                case 9:
                                    _context.prev = 9;
                                    _context.t0 = _context['catch'](4);

                                    alert(_context.t0.message);

                                case 12:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2, [[4, 9]]);
                }))();
            },
            showReply: function showReply(_ref5) {
                var currentTarget = _ref5.currentTarget;

                if (!this.isLogin()) {
                    return;
                }

                var UPDATE_FIELDS = this.store.actions.UPDATE_FIELDS;

                var _store$getState2 = this.store.getState(),
                    curReplyId = _store$getState2.curReplyId,
                    topic = _store$getState2.topic;

                var replyId = currentTarget.getAttribute('data-id');

                var _topic$replies$filter = topic.replies.filter(function (reply) {
                    return reply.id === replyId;
                }),
                    _topic$replies$filter2 = _slicedToArray(_topic$replies$filter, 1),
                    author = _topic$replies$filter2[0].author;

                if (curReplyId === replyId) {
                    return;
                }

                UPDATE_FIELDS([{
                    key: 'curReplyId',
                    value: replyId
                }, {
                    key: 'replyToReply',
                    value: '@' + author.loginname + ' '
                }]);
            },
            addReply: function addReply(_ref6) {
                var _this3 = this;

                var currentTarget = _ref6.currentTarget;
                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var ADD_REPLY, replyId;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (_this3.isLogin()) {
                                        _context2.next = 2;
                                        break;
                                    }

                                    return _context2.abrupt('return');

                                case 2:
                                    ADD_REPLY = _this3.store.actions.ADD_REPLY;
                                    replyId = currentTarget.getAttribute('data-reply');
                                    _context2.prev = 4;
                                    _context2.next = 7;
                                    return ADD_REPLY(replyId);

                                case 7:
                                    _context2.next = 12;
                                    break;

                                case 9:
                                    _context2.prev = 9;
                                    _context2.t0 = _context2['catch'](4);

                                    alert(_context2.t0.message);

                                case 12:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this3, [[4, 9]]);
                }))();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
}(_BaseController2.default);

exports.default = _class;