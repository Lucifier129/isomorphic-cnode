'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'Add', _this.needLogin = true, _this.View = _view2.default, _this.actions = actions, _this.initialState = {
            showMenu: false,
            tabs: [{
                type: 'share',
                text: '分享'
            }, {
                type: 'ask',
                text: '问答'
            }, {
                type: 'job',
                text: '招聘'
            }],
            tab: 'share',
            title: '',
            content: '',
            err: '',
            topic_id: '',
            suffix: '\n        <br/>\n        \u6765\u81EA <a class="from" href="https://github.com/Lucifier129/isomorphic-cnode">isomorphic-cnode</a>\n        '
        }, _this.methods = {
            openMenu: _methods.openMenu,
            closeMenu: _methods.closeMenu,

            addTopic: function addTopic() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _store$actions, UPDATE_FIELD, ADD_TOPIC, _store$getState, title, content, _ref2, topic_id;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _store$actions = _this2.store.actions, UPDATE_FIELD = _store$actions.UPDATE_FIELD, ADD_TOPIC = _store$actions.ADD_TOPIC;
                                    _store$getState = _this2.store.getState(), title = _store$getState.title, content = _store$getState.content;

                                    if (!(title.trim().length < 10)) {
                                        _context.next = 6;
                                        break;
                                    }

                                    return _context.abrupt('return', UPDATE_FIELD({
                                        key: 'err',
                                        value: 'title'
                                    }));

                                case 6:
                                    if (!(content.trim() === '')) {
                                        _context.next = 8;
                                        break;
                                    }

                                    return _context.abrupt('return', UPDATE_FIELD({
                                        key: 'err',
                                        value: 'content'
                                    }));

                                case 8:
                                    _context.prev = 8;
                                    _context.next = 11;
                                    return ADD_TOPIC();

                                case 11:
                                    _ref2 = _context.sent;
                                    topic_id = _ref2.topic_id;

                                    _this2.goReplace('/topic/' + topic_id);
                                    _context.next = 19;
                                    break;

                                case 16:
                                    _context.prev = 16;
                                    _context.t0 = _context['catch'](8);

                                    alert(_context.t0.message);

                                case 19:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2, [[8, 16]]);
                }))();
            },
            updateTitle: function updateTitle(_ref3) {
                var currentTarget = _ref3.currentTarget;
                var UPDATE_FIELDS = this.store.actions.UPDATE_FIELDS;
                var value = currentTarget.value;


                UPDATE_FIELDS([{
                    key: 'title',
                    value: value
                }, {
                    key: 'err',
                    value: ''
                }]);
            },
            updateContent: function updateContent(_ref4) {
                var currentTarget = _ref4.currentTarget;
                var UPDATE_FIELDS = this.store.actions.UPDATE_FIELDS;
                var value = currentTarget.value;


                UPDATE_FIELDS([{
                    key: 'content',
                    value: value
                }, {
                    key: 'err',
                    value: ''
                }]);
            },
            updateTab: function updateTab(_ref5) {
                var currentTarget = _ref5.currentTarget;
                var UPDATE_FIELDS = this.store.actions.UPDATE_FIELDS;
                var value = currentTarget.value;


                UPDATE_FIELDS([{
                    key: 'tab',
                    value: value
                }, {
                    key: 'err',
                    value: ''
                }]);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
}(_BaseController2.default);

exports.default = _class;