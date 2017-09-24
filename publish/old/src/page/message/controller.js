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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'Message', _this.needLogin = true, _this.View = _view2.default, _this.actions = actions, _this.initialState = {
            showMenu: false,
            user: {},
            selectItem: 'hasnot_read',
            currentData: []
        }, _this.methods = {
            openMenu: _methods.openMenu,
            closeMenu: _methods.closeMenu,

            changeItem: function changeItem(_ref2) {
                var currentTarget = _ref2.currentTarget;
                var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;

                var selectItem = currentTarget.getAttribute('data-type');

                UPDATE_FIELD({
                    key: 'selectItem',
                    value: selectItem
                });
            },
            markAll: function markAll() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _store$actions, MARK_ALL_MESSAGES, INIT;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _store$actions = _this2.store.actions, MARK_ALL_MESSAGES = _store$actions.MARK_ALL_MESSAGES, INIT = _store$actions.INIT;
                                    _context.prev = 1;
                                    _context.next = 4;
                                    return MARK_ALL_MESSAGES();

                                case 4:
                                    _context.next = 6;
                                    return INIT();

                                case 6:
                                    _context.next = 11;
                                    break;

                                case 8:
                                    _context.prev = 8;
                                    _context.t0 = _context['catch'](1);

                                    alert(_context.t0.message);

                                case 11:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2, [[1, 8]]);
                }))();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
}(_BaseController2.default);

exports.default = _class;