webpackJsonp([4],{

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _BaseController = __webpack_require__(400);

	var _BaseController2 = _interopRequireDefault(_BaseController);

	var _view = __webpack_require__(425);

	var _view2 = _interopRequireDefault(_view);

	var _model = __webpack_require__(426);

	var actions = _interopRequireWildcard(_model);

	var _methods = __webpack_require__(405);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

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

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'List', _this.View = _view2.default, _this.actions = actions, _this.initialState = {
	            topics: [],
	            showMenu: false,
	            searchKey: {
	                page: 1,
	                limit: 20,
	                tab: 'all',
	                mdrender: true
	            },
	            userInfo: {}
	        }, _this.isFetching = false, _this.methods = {
	            openMenu: _methods.openMenu,
	            closeMenu: _methods.closeMenu,
	            handleScroll: function handleScroll() {
	                var _this2 = this;

	                return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                    var _store$getState, showMenu, scrollHeight, pageHeight, FETCH_NEXT_TOPICS;

	                    return regeneratorRuntime.wrap(function _callee$(_context) {
	                        while (1) {
	                            switch (_context.prev = _context.next) {
	                                case 0:
	                                    _store$getState = _this2.store.getState();
	                                    showMenu = _store$getState.showMenu;

	                                    if (!(_this2.isFetching || showMenu)) {
	                                        _context.next = 4;
	                                        break;
	                                    }

	                                    return _context.abrupt('return');

	                                case 4:
	                                    scrollHeight = window.innerHeight + window.scrollY;
	                                    pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

	                                    if (!(pageHeight - scrollHeight <= 200)) {
	                                        _context.next = 12;
	                                        break;
	                                    }

	                                    FETCH_NEXT_TOPICS = _this2.store.actions.FETCH_NEXT_TOPICS;

	                                    _this2.isFetching = true;
	                                    _context.next = 11;
	                                    return FETCH_NEXT_TOPICS();

	                                case 11:
	                                    _this2.isFetching = false;

	                                case 12:
	                                case 'end':
	                                    return _context.stop();
	                            }
	                        }
	                    }, _callee, _this2);
	                }))();
	            }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return _class;
	}(_BaseController2.default);

	exports.default = _class;

/***/ }

});