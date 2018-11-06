"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseController = _interopRequireDefault(require("../../shared/BaseController"));

var _View = _interopRequireDefault(require("./View"));

var Model = _interopRequireWildcard(require("./Model"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "KeepAlive", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "NeedLogin", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "View", _View.default);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Model", Model);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePublish",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var state, accesstoken, title, tab, content, params, _ref2, topic_id, targetPath;

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
              _ref2 = _context.sent;
              topic_id = _ref2.topic_id;
              targetPath = "/topic/".concat(topic_id);

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
      }, _callee, this, [[11, 21]]);
    })));

    return _this;
  }

  return _default;
}(_BaseController.default);

exports.default = _default;