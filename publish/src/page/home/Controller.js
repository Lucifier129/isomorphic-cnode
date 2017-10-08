"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseController = require("../../shared/BaseController");

var _BaseController2 = _interopRequireDefault(_BaseController);

var _util = require("../../shared/util");

var _ = _interopRequireWildcard(_util);

var _Model = require("./Model");

var Model = _interopRequireWildcard(_Model);

var _View = require("./View");

var _View2 = _interopRequireDefault(_View);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.KeepAlive = true, _this.View = _View2.default, _this.Model = Model, _this.isFetching = false, _this.handleScroll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var SCROLL_TO_BOTTOM, state, scrollHeight, pageHeight, searchParams, _ref3, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              SCROLL_TO_BOTTOM = _this.store.actions.SCROLL_TO_BOTTOM;
              state = _this.store.getState();

              // 如果正在请求，或者呼出了菜单栏，则不去获取新数据

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

              searchParams = _extends({}, state.searchParams, {
                page: state.searchParams.page + 1
              });

              _this.isFetching = true;
              _context.next = 11;
              return _this.get("/topics", searchParams);

            case 11:
              _ref3 = _context.sent;
              data = _ref3.data;

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
      }, _callee, _this2);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "getInitialState",

    // 动态构造初始化数据，从查询字符串里获取数据
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(initialState) {
        var state, query, searchParams, pageTitle;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "getInitialState", this).call(this, initialState);

              case 2:
                state = _context2.sent;
                query = state.location.query;
                searchParams = _extends({}, state.searchParams);
                pageTitle = state.pageTitle;


                if (query.tab) {
                  searchParams.tab = query.tab;
                  pageTitle = _.getTitleByTab(query.tab);
                }

                return _context2.abrupt("return", _extends({}, state, {
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
        return _ref4.apply(this, arguments);
      }

      return getInitialState;
    }()

    // 组件创建前，获取首屏数据

  }, {
    key: "componentWillCreate",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var COMPONENT_WILL_CREATE, state, searchParams, _ref6, data;

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
                _ref6 = _context3.sent;
                data = _ref6.data;

                COMPONENT_WILL_CREATE(data);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillCreate() {
        return _ref5.apply(this, arguments);
      }

      return componentWillCreate;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }

    // 是否正在获取数据

    // 滚动到底部时，加载新的数据

  }]);

  return _class;
}(_BaseController2.default);

exports.default = _class;