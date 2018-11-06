"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

var _Layout = _interopRequireDefault(require("../../component/Layout"));

var _BaseController = _interopRequireDefault(require("../../shared/BaseController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "View", View);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialState", {
      pageTitle: "登录",
      token: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLogin",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _assertThisInitialize, context, _this$store$getState, token, location, userInfo;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)), context = _assertThisInitialize.context;
              _this$store$getState = _this.store.getState(), token = _this$store$getState.token, location = _this$store$getState.location;

              if (!(!token || token.length !== 36)) {
                _context.next = 5;
                break;
              }

              _this.showAlert("令牌格式错误, 应为36位UUID字符串");

              return _context.abrupt("return");

            case 5:
              _this.showLoading("登录中……");

              _context.prev = 6;
              _context.next = 9;
              return _this.fetchUserInfo(token);

            case 9:
              userInfo = _context.sent;

              if (userInfo) {
                _context.next = 12;
                break;
              }

              throw new Error("登陆失败，请重试");

            case 12:
              _this.cookie("accesstoken", token);

              window.location.reload();
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](6);

              _this.showAlert(_context.t0.message);

            case 19:
              _this.hideLoading();

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 16]]);
    })));

    return _this;
  }

  _createClass(_default, [{
    key: "shouldComponentCreate",
    value: function shouldComponentCreate() {
      var context = this.context,
          location = this.location; // 如果已经登陆，重定向离开

      if (this.isLogin()) {
        var userInfo = context.userInfo;
        var targetPath = location.query.redirect;

        if (!targetPath) {
          targetPath = "".concat(context.basename, "/user/").concat(userInfo.loginname);
        }

        this.redirect(targetPath);
        return false;
      }
    }
  }]);

  return _default;
}(_BaseController.default);

exports.default = _default;

function View(_ref2) {
  var state = _ref2.state,
      handlers = _ref2.handlers;
  var alertText = state.alertText,
      loadingText = state.loadingText;
  var handleLogin = handlers.handleLogin;
  return _react.default.createElement(_Layout.default, null, _react.default.createElement("section", {
    className: "page-body"
  }, _react.default.createElement("div", {
    className: "label"
  }, _react.default.createElement(_component.Input, {
    name: "token",
    className: "txt",
    type: "text",
    placeholder: "Access Token",
    maxLength: "36"
  })), _react.default.createElement("div", {
    className: "label"
  }, _react.default.createElement("button", {
    className: "button",
    onClick: handleLogin
  }, "\u767B\u5F55"))));
}