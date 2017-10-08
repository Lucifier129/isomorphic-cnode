"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseController = require("../../shared/BaseController");

var _BaseController2 = _interopRequireDefault(_BaseController);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.View = View, _this.initialState = {
      pageTitle: "关于"
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _class;
}(_BaseController2.default);

exports.default = _class;


function View(_ref2) {
  var state = _ref2.state,
      handlers = _ref2.handlers;

  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      "dl",
      { className: "about-info" },
      _react2.default.createElement(
        "dt",
        null,
        "\u5173\u4E8E\u9879\u76EE"
      ),
      _react2.default.createElement(
        "dd",
        null,
        "\u57FA\u4E8E cnodejs \u7684 api\uFF0C\u91C7\u7528 react-imvc \u7F16\u5199\u7684 web app"
      ),
      _react2.default.createElement(
        "dt",
        null,
        "isomorphic-cnode \u6E90\u7801\u5730\u5740"
      ),
      _react2.default.createElement(
        "dd",
        null,
        _react2.default.createElement(
          "a",
          { href: "https://github.com/Lucifier129/isomorphic-cnode" },
          "https://github.com/Lucifier129/isomorphic-cnode"
        )
      ),
      _react2.default.createElement(
        "dt",
        null,
        "react-imvc \u6E90\u7801\u5730\u5740"
      ),
      _react2.default.createElement(
        "dd",
        null,
        _react2.default.createElement(
          "a",
          { href: "https://github.com/Lucifier129/react-imvc" },
          "https://github.com/Lucifier129/react-imvc"
        )
      ),
      _react2.default.createElement(
        "dt",
        null,
        "\u610F\u89C1\u53CD\u9988"
      ),
      _react2.default.createElement(
        "dd",
        null,
        _react2.default.createElement(
          "a",
          { href: "https://github.com/Lucifier129/isomorphic-cnode/issues" },
          "\u53D1\u8868\u610F\u89C1\u6216\u8005\u63D0\u9700\u6C42"
        )
      ),
      _react2.default.createElement(
        "dt",
        null,
        "\u5F53\u524D\u7248\u672C"
      ),
      _react2.default.createElement(
        "dd",
        null,
        "V2.0"
      )
    )
  );
}