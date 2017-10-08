"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseController = require("../../shared/BaseController");

var _BaseController2 = _interopRequireDefault(_BaseController);

var _View = require("./View");

var _View2 = _interopRequireDefault(_View);

var _Model = require("./Model");

var Model = _interopRequireWildcard(_Model);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.KeepAlive = true, _this.NeedLogin = true, _this.View = _View2.default, _this.Model = Model, _this.handlePublish = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var state, accesstoken, title, tab, content, params, _ref3, topic_id, targetPath;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = _this.store.getState();
              accesstoken = _this.cookie("accesstoken");
              title = state.title, tab = state.tab, content = state.content;

              if (!(title.length < 10)) {
                _context.next = 6;
                break;
              }

              _this.showAlert("标题不能少于 10 字");
              return _context.abrupt("return");

            case 6:
              if (!(content.length === 0)) {
                _context.next = 9;
                break;
              }

              _this.showAlert("正文不能为空");
              return _context.abrupt("return");

            case 9:
              params = {
                accesstoken: accesstoken,
                title: title,
                tab: tab,
                content: content
              };


              _this.showLoading("发布中……");

              _context.prev = 11;
              _context.next = 14;
              return _this.post("/topics", params);

            case 14:
              _ref3 = _context.sent;
              topic_id = _ref3.topic_id;
              targetPath = "/topic/" + topic_id;

              _this.removeFromCache();
              _this.history.replace(targetPath);
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](11);

              _this.showAlert(_context.t0.message);

            case 24:

              _this.hideLoading();

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[11, 21]]);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _class;
}(_BaseController2.default);

exports.default = _class;