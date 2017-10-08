"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseController = require("../../shared/BaseController");

var _BaseController2 = _interopRequireDefault(_BaseController);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.KeepAlive = true, _this.NeedLogin = true, _this.Model = Model, _this.View = _View2.default, _this.handleTabChange = function (_ref2) {
      var currentTarget = _ref2.currentTarget;

      var tab = currentTarget.getAttribute("data-tab");
      var CHANGE_TAB = _this.store.actions.CHANGE_TAB;

      CHANGE_TAB(tab);
    }, _this.handleMarkAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var url, accesstoken;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              url = "/message/mark_all";
              accesstoken = _this.cookie("accesstoken");
              _context.next = 5;
              return _this.post(url, { accesstoken: accesstoken });

            case 5:
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              _this.showAlert(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 7]]);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "componentWillCreate",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var accesstoken, url, _ref5, data, COMPONENT_WILL_CREATE;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                accesstoken = this.cookie("accesstoken");
                url = "/messages?accesstoken=" + accesstoken;
                _context2.next = 4;
                return this.get(url);

              case 4:
                _ref5 = _context2.sent;
                data = _ref5.data;
                COMPONENT_WILL_CREATE = this.store.actions.COMPONENT_WILL_CREATE;

                COMPONENT_WILL_CREATE({
                  hasRead: data.has_read_messages,
                  hasNotRead: data.hasnot_read_messages
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillCreate() {
        return _ref4.apply(this, arguments);
      }

      return componentWillCreate;
    }()
  }]);

  return _class;
}(_BaseController2.default);

exports.default = _class;