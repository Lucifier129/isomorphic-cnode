"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseController = _interopRequireDefault(require("../../shared/BaseController"));

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../component/Layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "View", View);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialState", {
      pageTitle: "关于"
    });

    return _this;
  }

  return _default;
}(_BaseController.default);

exports.default = _default;

function View(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  return _react.default.createElement(_Layout.default, null, _react.default.createElement("dl", {
    className: "about-info"
  }, _react.default.createElement("dt", null, "\u5173\u4E8E\u9879\u76EE"), _react.default.createElement("dd", null, "\u57FA\u4E8E cnodejs \u7684 api\uFF0C\u91C7\u7528 react-imvc \u7F16\u5199\u7684 web app"), _react.default.createElement("dt", null, "isomorphic-cnode \u6E90\u7801\u5730\u5740"), _react.default.createElement("dd", null, _react.default.createElement("a", {
    href: "https://github.com/Lucifier129/isomorphic-cnode"
  }, "https://github.com/Lucifier129/isomorphic-cnode")), _react.default.createElement("dt", null, "react-imvc \u6E90\u7801\u5730\u5740"), _react.default.createElement("dd", null, _react.default.createElement("a", {
    href: "https://github.com/Lucifier129/react-imvc"
  }, "https://github.com/Lucifier129/react-imvc")), _react.default.createElement("dt", null, "\u610F\u89C1\u53CD\u9988"), _react.default.createElement("dd", null, _react.default.createElement("a", {
    href: "https://github.com/Lucifier129/isomorphic-cnode/issues"
  }, "\u53D1\u8868\u610F\u89C1\u6216\u8005\u63D0\u9700\u6C42")), _react.default.createElement("dt", null, "\u5F53\u524D\u7248\u672C"), _react.default.createElement("dd", null, "V2.0")));
}