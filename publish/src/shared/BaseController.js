"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = _interopRequireDefault(require("react-imvc/controller"));

var _querystring = _interopRequireDefault(require("querystring"));

var _sharedInitialState = _interopRequireDefault(require("./sharedInitialState"));

var sharedActions = _interopRequireWildcard(require("./sharedActions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "SSR", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preload", {
      main: "/css/main.css"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "NeedLogin", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideAlert", function () {
      var UPDATE_ALERT_TEXT = _this.store.actions.UPDATE_ALERT_TEXT;
      UPDATE_ALERT_TEXT("");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showAlert", function (text) {
      var UPDATE_ALERT_TEXT = _this.store.actions.UPDATE_ALERT_TEXT;
      UPDATE_ALERT_TEXT(text);
      setTimeout(_this.hideAlert, 1000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showLoading", function (content) {
      var UPDATE_LOADING_TEXT = _this.store.actions.UPDATE_LOADING_TEXT;
      UPDATE_LOADING_TEXT(content);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideLoading", function () {
      var UPDATE_LOADING_TEXT = _this.store.actions.UPDATE_LOADING_TEXT;
      UPDATE_LOADING_TEXT("");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpenMenu", function () {
      var OPEN_MENU = _this.store.actions.OPEN_MENU;
      OPEN_MENU();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseMenu", function () {
      var CLOSE_MENU = _this.store.actions.CLOSE_MENU;
      CLOSE_MENU();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLogout", function () {
      _this.removeCookie("accesstoken");

      window.location.reload();
    });

    return _this;
  }

  _createClass(_default, [{
    key: "getInitialState",
    value: function () {
      var _getInitialState = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(initialState) {
        var userInfo, isLogin, showAddButton;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getUserInfo();

              case 2:
                userInfo = _context.sent;
                isLogin = this.isLogin();
                showAddButton = isLogin;
                return _context.abrupt("return", _objectSpread({}, _sharedInitialState.default, {
                  showAddButton: showAddButton,
                  userInfo: userInfo,
                  isLogin: isLogin
                }, initialState));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialState(_x) {
        return _getInitialState.apply(this, arguments);
      }

      return getInitialState;
    }()
    /**
       * 动态合并共享的 actions
       */

  }, {
    key: "getFinalActions",
    value: function getFinalActions(actions) {
      return _objectSpread({}, actions, sharedActions);
    }
    /**
     * 数据重用后，将服务端的 userInfo 存入 context 里给其他页面使用
     */

  }, {
    key: "stateDidReuse",
    value: function stateDidReuse(state) {
      if (state.userInfo) {
        this.context.userInfo = state.userInfo;
      }
    } // 拓展字段：是否需要登录才可以访问

  }, {
    key: "shouldComponentCreate",
    value: function () {
      var _shouldComponentCreate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.NeedLogin && !this.isLogin())) {
                  _context2.next = 3;
                  break;
                }

                this.redirect("/login?redirect=".concat(this.location.raw));
                return _context2.abrupt("return", false);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function shouldComponentCreate() {
        return _shouldComponentCreate.apply(this, arguments);
      }

      return shouldComponentCreate;
    }()
  }, {
    key: "pageWillLeave",
    value: function pageWillLeave() {
      this.showLoading("加载中……");
    }
  }, {
    key: "pageDidBack",
    value: function pageDidBack() {
      this.hideLoading();
    }
  }, {
    key: "getUserInfo",
    value: function () {
      var _getUserInfo = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var context, userInfo, accesstoken;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                context = this.context; // 获取登录用户信息，将用户信息缓存在 context 里，所有页面都可以共享访问

                userInfo = null;
                _context3.prev = 2;

                if (!context.hasOwnProperty("userInfo")) {
                  _context3.next = 7;
                  break;
                }

                userInfo = context.userInfo;
                _context3.next = 12;
                break;

              case 7:
                accesstoken = this.cookie("accesstoken");
                _context3.next = 10;
                return this.fetchUserInfo(accesstoken);

              case 10:
                userInfo = _context3.sent;
                context.userInfo = userInfo;

              case 12:
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](2);
                context.userInfo = null;

              case 17:
                return _context3.abrupt("return", userInfo);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 14]]);
      }));

      function getUserInfo() {
        return _getUserInfo.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: "fetchUserInfo",
    value: function () {
      var _fetchUserInfo = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(accesstoken) {
        var data, success, error_msg, userInfo;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (accesstoken) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", null);

              case 2:
                _context4.next = 4;
                return this.post("/accesstoken", {
                  accesstoken: accesstoken
                });

              case 4:
                data = _context4.sent;
                success = data.success, error_msg = data.error_msg, userInfo = _objectWithoutProperties(data, ["success", "error_msg"]);
                return _context4.abrupt("return", userInfo);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchUserInfo(_x2) {
        return _fetchUserInfo.apply(this, arguments);
      }

      return fetchUserInfo;
    }() // 判断是否登录

  }, {
    key: "isLogin",
    value: function isLogin() {
      return !!this.context.userInfo;
    } // 封装 get 方法，处理 cnode 跨域要求

  }, {
    key: "get",
    value: function get(api, params) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options = _objectSpread({}, options, {
        credentials: "omit",
        headers: _objectSpread({}, options.headers, {
          "Content-Type": "application/x-www-form-urlencoded"
        })
      });
      return _get(_getPrototypeOf(_default.prototype), "get", this).call(this, api, params, options);
    } // 封装 post 方法，处理 cnode 跨域要求

  }, {
    key: "post",
    value: function post(api, params) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options = _objectSpread({}, options, {
        credentials: "omit",
        method: "POST",
        headers: _objectSpread({}, options.headers, {
          "Content-Type": "application/x-www-form-urlencoded"
        }),
        body: _querystring.default.stringify(params)
      });
      return this.fetch(api, options);
    } // 统一抛错, get/post 方法底层调用的是 fetch 方法

  }, {
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(url, options) {
        var data, success, error_msg, userInfo;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _get(_getPrototypeOf(_default.prototype), "fetch", this).call(this, url, options);

              case 2:
                data = _context5.sent;
                success = data.success, error_msg = data.error_msg, userInfo = _objectWithoutProperties(data, ["success", "error_msg"]);

                if (success) {
                  _context5.next = 6;
                  break;
                }

                throw new Error(error_msg);

              case 6:
                return _context5.abrupt("return", data);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetch(_x3, _x4) {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }() // 隐藏提示信息

  }]);

  return _default;
}(_controller.default);

exports.default = _default;