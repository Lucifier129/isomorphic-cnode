"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseController = require("../../shared/BaseController");

var _BaseController2 = _interopRequireDefault(_BaseController);

var _View = require("./View");

var _View2 = _interopRequireDefault(_View);

var _Model = require("./Model");

var Model = _interopRequireWildcard(_Model);

var _util = require("../../shared/util");

var _ = _interopRequireWildcard(_util);

var _markdown = require("markdown");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var replySuffix = "\n\u6765\u81EA [isomorphic-cnode](https://lucifier129.github.io/isomorphic-cnode/publish/static/)";

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.KeepAlive = true, _this.View = _View2.default, _this.Model = Model, _this.handleToggleReplyForm = function (_ref2) {
      var currentTarget = _ref2.currentTarget;

      if (!_this.checkLogin()) {
        return;
      }
      var TOGGLE_REPLY_FORM = _this.store.actions.TOGGLE_REPLY_FORM;

      var activeReplyId = currentTarget.getAttribute("data-id");
      TOGGLE_REPLY_FORM({ activeReplyId: activeReplyId });
    }, _this.handleLikeReply = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4) {
        var currentTarget = _ref4.currentTarget;

        var LIKE_REPLY, replyId, _ref5, action;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.checkLogin()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                LIKE_REPLY = _this.store.actions.LIKE_REPLY;
                replyId = currentTarget.getAttribute("data-id");
                _context.prev = 4;
                _context.next = 7;
                return _this.likeReply(replyId);

              case 7:
                _ref5 = _context.sent;
                action = _ref5.action;

                LIKE_REPLY({ action: action, replyId: replyId });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);

                _this.showAlert(_context.t0.message);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 12]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.handleReplyTopic = function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref7) {
        var currentTarget = _ref7.currentTarget;
        var REPLY_TO_TOPIC, state, params, data, replyId, content;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.checkLogin()) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                REPLY_TO_TOPIC = _this.store.actions.REPLY_TO_TOPIC;
                state = _this.store.getState();
                params = {
                  content: state.replyOfTopic
                };


                _this.showLoading("回复中……");

                _context2.prev = 6;
                _context2.next = 9;
                return _this.postReply(params);

              case 9:
                data = _context2.sent;
                replyId = data.reply_id, content = data.content;

                REPLY_TO_TOPIC({ replyId: replyId, content: content });
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](6);

                _this.showAlert(_context2.t0.message);

              case 17:

                _this.hideLoading();

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[6, 14]]);
      }));

      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }(), _this.handleReplyOther = function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref9) {
        var currentTarget = _ref9.currentTarget;
        var REPLY_TO_OTHER, state, replyId, params, data, newReplyId, content;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this.checkLogin()) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                REPLY_TO_OTHER = _this.store.actions.REPLY_TO_OTHER;
                state = _this.store.getState();
                replyId = currentTarget.getAttribute("data-id");
                params = {
                  replyId: replyId,
                  content: state.replyOfOthers[replyId]
                };


                _this.showLoading("回复中……");

                _context3.prev = 7;
                _context3.next = 10;
                return _this.postReply(params);

              case 10:
                data = _context3.sent;
                newReplyId = data.reply_id, content = data.content;

                REPLY_TO_OTHER({ replyId: replyId, newReplyId: newReplyId, content: content });
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](7);

                _this.showAlert(_context3.t0.message);

              case 18:

                _this.hideLoading();

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[7, 15]]);
      }));

      return function (_x3) {
        return _ref8.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "componentWillCreate",
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var COMPONENT_WILL_CREATE, state, topicId, _ref11, topic;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                COMPONENT_WILL_CREATE = this.store.actions.COMPONENT_WILL_CREATE;
                state = this.store.getState();
                topicId = state.location.params.topicId;
                _context4.prev = 3;
                _context4.next = 6;
                return this.get("/topic/" + topicId);

              case 6:
                _ref11 = _context4.sent;
                topic = _ref11.data;

                COMPONENT_WILL_CREATE({ topic: topic });
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](3);

                COMPONENT_WILL_CREATE({ topic: null });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 11]]);
      }));

      function componentWillCreate() {
        return _ref10.apply(this, arguments);
      }

      return componentWillCreate;
    }()
  }, {
    key: "checkLogin",
    value: function checkLogin() {
      if (!this.isLogin()) {
        this.history.push("/login?redirect=" + this.location.raw);
        return false;
      }
      return true;
    }
  }, {
    key: "likeReply",
    value: function likeReply(replyId) {
      var url = "/reply/" + replyId + "/ups";
      var accesstoken = this.cookie("accesstoken");
      return this.post(url, { accesstoken: accesstoken });
    }
  }, {
    key: "postReply",
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref13) {
        var content = _ref13.content,
            replyId = _ref13.replyId;
        var topicId, url, accesstoken, params, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(!content || content.length <= 10)) {
                  _context5.next = 2;
                  break;
                }

                throw new Error("评论内容不能少于10个字");

              case 2:

                content = _.linkUsers(content) + replySuffix;

                topicId = this.location.params.topicId;
                url = "/topic/" + topicId + "/replies";
                accesstoken = this.cookie("accesstoken");
                params = { accesstoken: accesstoken, content: content };


                if (replyId) {
                  params["reply_id"] = replyId;
                }
                _context5.next = 10;
                return this.post(url, params);

              case 10:
                data = _context5.sent;
                return _context5.abrupt("return", _extends({}, data, {
                  content: content
                }));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function postReply(_x4) {
        return _ref12.apply(this, arguments);
      }

      return postReply;
    }()
  }]);

  return _class;
}(_BaseController2.default);

exports.default = _class;