"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseController = _interopRequireDefault(require("../../shared/BaseController"));

var _ = _interopRequireWildcard(require("../../shared/util"));

var Model = _interopRequireWildcard(require("./Model"));

var _View = _interopRequireDefault(require("./View"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default =
/*#__PURE__*/
function (_Controller) {
  _inherits(_default, _Controller);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "KeepAlive", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "View", _View.default);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Model", Model);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isFetching", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var SCROLL_TO_BOTTOM, state, scrollHeight, pageHeight, searchParams, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              SCROLL_TO_BOTTOM = _this.store.actions.SCROLL_TO_BOTTOM;
              state = _this.store.getState(); // 如果正在请求，或者呼出了菜单栏，则不去获取新数据

              if (!(_this.isFetching || state.showMenu)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              scrollHeight = window.innerHeight + window.scrollY;
              pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

              if (!(pageHeight - scrollHeight <= 400)) {
                _context.next = 15;
                break;
              }

              searchParams = _objectSpread({}, state.searchParams, {
                page: state.searchParams.page + 1
              });
              _this.isFetching = true;
              _context.next = 11;
              return _this.get("/topics", searchParams);

            case 11:
              _ref2 = _context.sent;
              data = _ref2.data;
              SCROLL_TO_BOTTOM({
                data: data,
                searchParams: searchParams
              });
              _this.isFetching = false;

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    return _this;
  }

  _createClass(_default, [{
    key: "getInitialState",
    // 动态构造初始化数据，从查询字符串里获取数据
    value: function () {
      var _getInitialState = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(initialState) {
        var state, query, searchParams, pageTitle;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _get(_getPrototypeOf(_default.prototype), "getInitialState", this).call(this, initialState);

              case 2:
                state = _context2.sent;
                query = state.location.query;
                searchParams = _objectSpread({}, state.searchParams);
                pageTitle = state.pageTitle;

                if (query.tab) {
                  searchParams.tab = query.tab;
                  pageTitle = _.getTitleByTab(query.tab);
                }

                return _context2.abrupt("return", _objectSpread({}, state, {
                  pageTitle: pageTitle,
                  searchParams: searchParams
                }));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialState(_x) {
        return _getInitialState.apply(this, arguments);
      }

      return getInitialState;
    }() // 组件创建前，获取首屏数据

  }, {
    key: "componentWillCreate",
    value: function () {
      var _componentWillCreate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var COMPONENT_WILL_CREATE, state, searchParams, _ref3, data;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                COMPONENT_WILL_CREATE = this.store.actions.COMPONENT_WILL_CREATE;
                state = this.store.getState();
                searchParams = state.searchParams;
                _context3.next = 5;
                return this.get("/topics", searchParams);

              case 5:
                _ref3 = _context3.sent;
                data = _ref3.data;
                COMPONENT_WILL_CREATE(data);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillCreate() {
        return _componentWillCreate.apply(this, arguments);
      }

      return componentWillCreate;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll); // prefetch all js bundles
      // util.getFlatList(this.routes)
      //   .map(item => item.controller)
      //   .forEach(this.loader)
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    } // 是否正在获取数据

  }]);

  return _default;
}(_BaseController.default);

exports.default = _default;