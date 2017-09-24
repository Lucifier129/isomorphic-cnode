'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UPS_REPLAY = exports.ADD_REPLY = exports.UPDATE_FIELDS = exports.UPDATE_FIELD = exports.INIT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _service = require('../../service');

var _util = require('../../share/util');

var _markdown = require('markdown');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * actions of method
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var INIT = exports.INIT = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state) {
		var location, topicId, _ref2, topic;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						location = state.location;
						topicId = location.params.topicId;
						_context.next = 4;
						return (0, _service.getTopic)(topicId);

					case 4:
						_ref2 = _context.sent;
						topic = _ref2.data;
						return _context.abrupt('return', _extends({}, state, {
							topic: topic
						}));

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function INIT(_x) {
		return _ref.apply(this, arguments);
	};
}();

var UPDATE_FIELD = exports.UPDATE_FIELD = function UPDATE_FIELD(state, _ref3) {
	var key = _ref3.key,
	    value = _ref3.value;

	if (state[key] === value) {
		return state;
	}
	return _extends({}, state, _defineProperty({}, key, value));
};

var UPDATE_FIELDS = exports.UPDATE_FIELDS = function UPDATE_FIELDS(state) {
	var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	return fields.reduce(UPDATE_FIELD, state);
};

var ADD_REPLY = exports.ADD_REPLY = function () {
	var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(state, replyId) {
		var _extends3;

		var userInfo, topic, suffix, replyToReply, replyToTopic, accesstoken, topicId, replyContent, content, create_at, newReplyId, replyItem;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						userInfo = state.userInfo, topic = state.topic, suffix = state.suffix, replyToReply = state.replyToReply, replyToTopic = state.replyToTopic;
						accesstoken = userInfo.token;
						topicId = topic.id;
						replyContent = (0, _util.linkUsers)(replyId != null ? replyToReply : replyToTopic);
						content = '<div class="markdown-text">' + _markdown.markdown.toHTML(replyContent) + '</div>' + suffix;
						create_at = new Date().getTime();
						_context2.next = 8;
						return (0, _service.addReply)({
							accesstoken: accesstoken,
							topicId: topic.id,
							replyId: replyId,
							content: content
						});

					case 8:
						newReplyId = _context2.sent;
						replyItem = {
							id: newReplyId,
							author: {
								loginname: userInfo.loginname,
								avatar_url: userInfo.avatar_url
							},
							content: content,
							ups: [],
							create_at: create_at
						};
						return _context2.abrupt('return', _extends({}, state, (_extends3 = {}, _defineProperty(_extends3, replyId ? 'replyToReply' : 'replyToTopic', ''), _defineProperty(_extends3, 'curReplyId', null), _defineProperty(_extends3, 'topic', _extends({}, topic, {
							replies: topic.replies.concat(replyItem)
						})), _extends3)));

					case 11:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function ADD_REPLY(_x3, _x4) {
		return _ref4.apply(this, arguments);
	};
}();

var UPS_REPLAY = exports.UPS_REPLAY = function () {
	var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(state, replyId) {
		var topic, _state$userInfo, accesstoken, userId, action, replies;

		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						topic = state.topic;
						_state$userInfo = state.userInfo, accesstoken = _state$userInfo.token, userId = _state$userInfo.id;
						_context3.next = 4;
						return (0, _service.upsReply)({ accesstoken: accesstoken, replyId: replyId });

					case 4:
						action = _context3.sent;
						replies = topic.replies.map(function (reply) {
							if (reply.id !== replyId) {
								return reply;
							}
							var ups = reply.ups;

							if (action === 'down') {
								ups = ups.filter(function (id) {
									return id !== userId;
								});
							} else if (action === 'up') {
								ups = ups.concat(userId);
							}
							return _extends({}, reply, {
								ups: ups
							});
						});
						return _context3.abrupt('return', _extends({}, state, {
							topic: _extends({}, topic, { replies: replies })
						}));

					case 7:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function UPS_REPLAY(_x5, _x6) {
		return _ref5.apply(this, arguments);
	};
}();