"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _component = require("react-imvc/component");

var _Layout = require("../../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _BaseController = require("../../shared/BaseController");

var _BaseController2 = _interopRequireDefault(_BaseController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    var _ref,
        _this3 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.View = View, _this.initialState = {
      pageTitle: "登录",
      token: ""
    }, _this.handleLogin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this2, context, _this$store$getState, token, location, userInfo;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2 = _this, context = _this2.context;
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
      }, _callee, _this3, [[6, 16]]);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "shouldComponentCreate",
    value: function shouldComponentCreate() {
      var context = this.context,
          location = this.location;
      // 如果已经登陆，重定向离开

      if (this.isLogin()) {
        var userInfo = context.userInfo;

        var targetPath = location.query.redirect;
        if (!targetPath) {
          targetPath = context.basename + "/user/" + userInfo.loginname;
        }
        this.redirect(targetPath);
        return false;
      }
    }
  }]);

  return _class;
}(_BaseController2.default);

exports.default = _class;


function View(_ref3) {
  var state = _ref3.state,
      handlers = _ref3.handlers;
  var alertText = state.alertText,
      loadingText = state.loadingText;
  var handleLogin = handlers.handleLogin;


  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      "section",
      { className: "page-body" },
      _react2.default.createElement(
        "div",
        { className: "label" },
        _react2.default.createElement(_component.Input, {
          name: "token",
          className: "txt",
          type: "text",
          placeholder: "Access Token",
          maxLength: "36"
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "label" },
        _react2.default.createElement(
          "button",
          { className: "button", onClick: handleLogin },
          "\u767B\u5F55"
        )
      )
    )
  );
}