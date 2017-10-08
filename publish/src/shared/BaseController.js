"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _controller = require("react-imvc/controller");

var _controller2 = _interopRequireDefault(_controller);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _sharedInitialState = require("./sharedInitialState");

var _sharedInitialState2 = _interopRequireDefault(_sharedInitialState);

var _sharedActions = require("./sharedActions");

var sharedActions = _interopRequireWildcard(_sharedActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // base controller class


var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.preload = {
      main: "/css/main.css"
    }, _this.NeedLogin = false, _this.hideAlert = function () {
      var UPDATE_ALERT_TEXT = _this.store.actions.UPDATE_ALERT_TEXT;

      UPDATE_ALERT_TEXT("");
    }, _this.showAlert = function (text) {
      var UPDATE_ALERT_TEXT = _this.store.actions.UPDATE_ALERT_TEXT;

      UPDATE_ALERT_TEXT(text);
      setTimeout(_this.hideAlert, 1000);
    }, _this.showLoading = function (content) {
      var UPDATE_LOADING_TEXT = _this.store.actions.UPDATE_LOADING_TEXT;

      UPDATE_LOADING_TEXT(content);
    }, _this.hideLoading = function () {
      var UPDATE_LOADING_TEXT = _this.store.actions.UPDATE_LOADING_TEXT;

      UPDATE_LOADING_TEXT("");
    }, _this.handleOpenMenu = function () {
      var OPEN_MENU = _this.store.actions.OPEN_MENU;

      OPEN_MENU();
    }, _this.handleCloseMenu = function () {
      var CLOSE_MENU = _this.store.actions.CLOSE_MENU;

      CLOSE_MENU();
    }, _this.handleLogout = function () {
      _this.removeCookie("accesstoken");
      window.location.reload();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "getInitialState",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(initialState) {
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
                return _context.abrupt("return", _extends({}, _sharedInitialState2.default, {
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
        return _ref2.apply(this, arguments);
      }

      return getInitialState;
    }()

    /**
       * 动态合并共享的 actions
       */

  }, {
    key: "getFinalActions",
    value: function getFinalActions(actions) {
      return _extends({}, actions, sharedActions);
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
    }

    // 拓展字段：是否需要登录才可以访问

  }, {
    key: "shouldComponentCreate",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.NeedLogin && !this.isLogin())) {
                  _context2.next = 3;
                  break;
                }

                this.redirect("/login?redirect=" + this.location.raw);
                return _context2.abrupt("return", false);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function shouldComponentCreate() {
        return _ref3.apply(this, arguments);
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var context, userInfo, accesstoken;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                context = this.context;
                // 获取登录用户信息，将用户信息缓存在 context 里，所有页面都可以共享访问

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
        return _ref4.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: "fetchUserInfo",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(accesstoken) {
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
                return this.post("/accesstoken", { accesstoken: accesstoken });

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
        return _ref5.apply(this, arguments);
      }

      return fetchUserInfo;
    }()

    // 判断是否登录

  }, {
    key: "isLogin",
    value: function isLogin() {
      return !!this.context.userInfo;
    }

    // 封装 get 方法，处理 cnode 跨域要求

  }, {
    key: "get",
    value: function get(api, params) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = _extends({}, options, {
        credentials: "omit",
        headers: _extends({}, options.headers, {
          "Content-Type": "application/x-www-form-urlencoded"
        })
      });
      return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "get", this).call(this, api, params, options);
    }

    // 封装 post 方法，处理 cnode 跨域要求

  }, {
    key: "post",
    value: function post(api, params) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = _extends({}, options, {
        credentials: "omit",
        method: "POST",
        headers: _extends({}, options.headers, {
          "Content-Type": "application/x-www-form-urlencoded"
        }),
        body: _querystring2.default.stringify(params)
      });
      return this.fetch(api, options);
    }

    // 统一抛错, get/post 方法底层调用的是 fetch 方法

  }, {
    key: "fetch",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url, options) {
        var data, success, error_msg, userInfo;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "fetch", this).call(this, url, options);

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

      function fetch(_x5, _x6) {
        return _ref6.apply(this, arguments);
      }

      return fetch;
    }()

    // 隐藏提示信息


    // 显示提示信息


    // 打开菜单


    // 关闭菜单


    // 退出登陆

  }]);

  return _class;
}(_controller2.default);

exports.default = _class;