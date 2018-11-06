"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseController = _interopRequireDefault(require("../../shared/BaseController"));

var _View = _interopRequireDefault(require("./View"));

var Model = _interopRequireWildcard(require("./Model"));

var _ = _interopRequireWildcard(require("../../shared/util"));

var _markdown = require("markdown");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var replySuffix = "\n\u6765\u81EA [isomorphic-cnode](https://lucifier129.github.io/isomorphic-cnode/publish/static/)";

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "View", _View.default);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Model", Model);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleReplyForm", function (_ref) {
      var currentTarget = _ref.currentTarget;

      if (!_this.checkLogin()) {
        return;
      }

      var TOGGLE_REPLY_FORM = _this.store.actions.TOGGLE_REPLY_FORM;
      var activeReplyId = currentTarget.getAttribute("data-id");
      TOGGLE_REPLY_FORM({
        activeReplyId: activeReplyId
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLikeReply",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref2) {
        var currentTarget, LIKE_REPLY, replyId, _ref4, action;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentTarget = _ref2.currentTarget;

                if (_this.checkLogin()) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                LIKE_REPLY = _this.store.actions.LIKE_REPLY;
                replyId = currentTarget.getAttribute("data-id");
                _context.prev = 5;
                _context.next = 8;
                return _this.likeReply(replyId);

              case 8:
                _ref4 = _context.sent;
                action = _ref4.action;
                LIKE_REPLY({
                  action: action,
                  replyId: replyId
                });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](5);

                _this.showAlert(_context.t0.message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 13]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReplyTopic",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref5) {
        var currentTarget, REPLY_TO_TOPIC, state, params, data, replyId, content;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currentTarget = _ref5.currentTarget;

                if (_this.checkLogin()) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                REPLY_TO_TOPIC = _this.store.actions.REPLY_TO_TOPIC;
                state = _this.store.getState();
                params = {
                  content: state.replyOfTopic
                };

                _this.showLoading("回复中……");

                _context2.prev = 7;
                _context2.next = 10;
                return _this.postReply(params);

              case 10:
                data = _context2.sent;
                replyId = data.reply_id, content = data.content;
                REPLY_TO_TOPIC({
                  replyId: replyId,
                  content: content
                });
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](7);

                _this.showAlert(_context2.t0.message);

              case 18:
                _this.hideLoading();

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[7, 15]]);
      }));

      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReplyOther",
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_ref7) {
        var currentTarget, REPLY_TO_OTHER, state, replyId, params, data, newReplyId, content;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentTarget = _ref7.currentTarget;

                if (_this.checkLogin()) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                REPLY_TO_OTHER = _this.store.actions.REPLY_TO_OTHER;
                state = _this.store.getState();
                replyId = currentTarget.getAttribute("data-id");
                params = {
                  replyId: replyId,
                  content: state.replyOfOthers[replyId]
                };

                _this.showLoading("回复中……");

                _context3.prev = 8;
                _context3.next = 11;
                return _this.postReply(params);

              case 11:
                data = _context3.sent;
                newReplyId = data.reply_id, content = data.content;
                REPLY_TO_OTHER({
                  replyId: replyId,
                  newReplyId: newReplyId,
                  content: content
                });
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](8);

                _this.showAlert(_context3.t0.message);

              case 19:
                _this.hideLoading();

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[8, 16]]);
      }));

      return function (_x3) {
        return _ref8.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(_default, [{
    key: "componentWillCreate",
    value: function () {
      var _componentWillCreate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var COMPONENT_WILL_CREATE, state, topicId, _ref9, topic;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                COMPONENT_WILL_CREATE = this.store.actions.COMPONENT_WILL_CREATE;
                state = this.store.getState();
                topicId = state.location.params.topicId;
                _context4.prev = 3;
                _context4.next = 6;
                return this.get("/topic/".concat(topicId));

              case 6:
                _ref9 = _context4.sent;
                topic = _ref9.data;
                COMPONENT_WILL_CREATE({
                  topic: topic
                });
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](3);
                COMPONENT_WILL_CREATE({
                  topic: null
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 11]]);
      }));

      return function componentWillCreate() {
        return _componentWillCreate.apply(this, arguments);
      };
    }()
  }, {
    key: "checkLogin",
    value: function checkLogin() {
      if (!this.isLogin()) {
        this.history.push("/login?redirect=".concat(this.location.raw));
        return false;
      }

      return true;
    }
  }, {
    key: "likeReply",
    value: function likeReply(replyId) {
      var url = "/reply/".concat(replyId, "/ups");
      var accesstoken = this.cookie("accesstoken");
      return this.post(url, {
        accesstoken: accesstoken
      });
    }
  }, {
    key: "postReply",
    value: function () {
      var _postReply = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_ref10) {
        var content, replyId, topicId, url, accesstoken, params, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                content = _ref10.content, replyId = _ref10.replyId;

                if (!(!content || content.length <= 10)) {
                  _context5.next = 3;
                  break;
                }

                throw new Error("评论内容不能少于10个字");

              case 3:
                content = _.linkUsers(content) + replySuffix;
                topicId = this.location.params.topicId;
                url = "/topic/".concat(topicId, "/replies");
                accesstoken = this.cookie("accesstoken");
                params = {
                  accesstoken: accesstoken,
                  content: content
                };

                if (replyId) {
                  params["reply_id"] = replyId;
                }

                _context5.next = 11;
                return this.post(url, params);

              case 11:
                data = _context5.sent;
                return _context5.abrupt("return", _objectSpread({}, data, {
                  content: content
                }));

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function postReply(_x4) {
        return _postReply.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(_BaseController.default);

exports.default = _default;