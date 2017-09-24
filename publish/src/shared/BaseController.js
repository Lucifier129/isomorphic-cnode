"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require("react-imvc/controller");

var _controller2 = _interopRequireDefault(_controller);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _sharedInitialState = require("./sharedInitialState");

var _sharedInitialState2 = _interopRequireDefault(_sharedInitialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.API = {
      userInfo: "/accesstoken",
      topics: "/topics",
      topic: "/topic"
    }, _this.needLogin = false, _this.handleOpenMenu = function () {
      var state = _this.store.getState();
      var UPDATE_STATE = _this.store.actions.UPDATE_STATE;


      if (!state.showMenu) {
        UPDATE_STATE({
          showMenu: true
        });
      }
    }, _this.handleCloseMenu = function () {
      var state = _this.store.getState();
      var UPDATE_STATE = _this.store.actions.UPDATE_STATE;


      if (state.showMenu) {
        UPDATE_STATE({
          showMenu: false
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // API 集合

  // 拓展字段：是否需要登录才可以访问


  _createClass(_class, [{
    key: "getInitialState",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(initialState) {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getUserInfo();

              case 2:
                userInfo = _context.sent;
                return _context.abrupt("return", _extends({}, initialState, _sharedInitialState2.default, {
                  userInfo: userInfo
                }));

              case 4:
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
  }, {
    key: "shouldComponentCreate",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.needLogin && !this.isLogin())) {
                  _context2.next = 3;
                  break;
                }

                this.redirect("/login");
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

    // 获取登录用户信息，将用户信息缓存在 context 里，所有页面都可以共享访问

  }, {
    key: "getUserInfo",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var API, context, userInfo, accesstoken;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                API = this.API, context = this.context;

                if (!context.hasOwnProperty("userInfo")) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", context.userInfo);

              case 3:
                userInfo = null;
                accesstoken = this.cookie("accesstoken");
                _context3.prev = 5;
                _context3.next = 8;
                return this.post("userInfo", { accesstoken: accesstoken });

              case 8:
                userInfo = _context3.sent;
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](5);

                userInfo = null;

              case 14:

                context.userInfo = userInfo;
                return _context3.abrupt("return", userInfo);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 11]]);
      }));

      function getUserInfo() {
        return _ref4.apply(this, arguments);
      }

      return getUserInfo;
    }()
    // 判断是否登录

  }, {
    key: "isLogin",
    value: function isLogin() {
      return !!this.context.userInfo;
    }

    // 封装 post 方法，处理 cnode 跨域要求

  }, {
    key: "post",
    value: function post(api, params) {
      var url = this.API[api] || api;
      var options = {
        credentials: "omit",
        method: "POST",
        body: JSON.stringify(params)
      };
      return this.fetch(url, options);
    }

    // 封装 get 方法，处理 cnode 跨域要求

  }, {
    key: "get",
    value: function get(api, params) {
      var url = (this.API[api] || api) + "?" + _querystring2.default.stringify(params);
      var options = {
        credentials: "omit"
      };
      return this.fetch(url, options);
    }

    // 打开菜单


    // 关闭菜单

  }]);

  return _class;
}(_controller2.default);

exports.default = _class;