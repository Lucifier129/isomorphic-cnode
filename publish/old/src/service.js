'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.readPic = exports.addReply = exports.upsReply = exports.markAllMessages = exports.getMessages = exports.addTopic = exports.getUserData = exports.getUserInfo = exports.getTopic = exports.getTopics = undefined;

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _util = require('./share/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * service of app
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var base = 'https://cnodejs.org/api/v1';
var fetchJSON = (0, _util.createFetchJSON)(base);

var getTopics = exports.getTopics = function getTopics(searchKey) {
	return fetchJSON('/topics?' + _querystring2.default.stringify(searchKey));
};

var getTopic = exports.getTopic = function getTopic(topicId) {
	return fetchJSON('/topic/' + topicId);
};

var getUserInfo = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accesstoken) {
		var url, options, _ref2, success, error_msg, userInfo;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						url = '/accesstoken';
						options = {
							method: 'POST',
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							body: _querystring2.default.stringify({ accesstoken: accesstoken })
						};
						_context.next = 4;
						return fetchJSON(url, options);

					case 4:
						_ref2 = _context.sent;
						success = _ref2.success;
						error_msg = _ref2.error_msg;
						userInfo = _objectWithoutProperties(_ref2, ['success', 'error_msg']);

						if (success) {
							_context.next = 10;
							break;
						}

						throw new Error(error_msg);

					case 10:
						return _context.abrupt('return', userInfo);

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getUserInfo(_x) {
		return _ref.apply(this, arguments);
	};
}();

exports.getUserInfo = getUserInfo;
var getUserData = exports.getUserData = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(loginname) {
		var _ref4, success, error_msg, data;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return fetchJSON('/user/' + loginname);

					case 2:
						_ref4 = _context2.sent;
						success = _ref4.success;
						error_msg = _ref4.error_msg;
						data = _ref4.data;

						if (success) {
							_context2.next = 8;
							break;
						}

						throw new Error(error_msg);

					case 8:
						return _context2.abrupt('return', data);

					case 9:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getUserData(_x2) {
		return _ref3.apply(this, arguments);
	};
}();

var addTopic = exports.addTopic = function () {
	var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(topic) {
		var url, options, _ref6, success, error_msg, topic_id;

		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						url = '/topics';
						options = {
							method: 'POST',
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							body: _querystring2.default.stringify(topic)
						};
						_context3.next = 4;
						return fetchJSON(url, options);

					case 4:
						_ref6 = _context3.sent;
						success = _ref6.success;
						error_msg = _ref6.error_msg;
						topic_id = _ref6.topic_id;

						if (success) {
							_context3.next = 10;
							break;
						}

						throw new Error(error_msg);

					case 10:
						return _context3.abrupt('return', topic_id);

					case 11:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function addTopic(_x3) {
		return _ref5.apply(this, arguments);
	};
}();

var getMessages = exports.getMessages = function () {
	var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(accesstoken) {
		var url, _ref8, success, error_msg, data;

		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						url = '/messages?accesstoken=' + accesstoken;
						_context4.next = 3;
						return fetchJSON(url);

					case 3:
						_ref8 = _context4.sent;
						success = _ref8.success;
						error_msg = _ref8.error_msg;
						data = _ref8.data;

						if (success) {
							_context4.next = 9;
							break;
						}

						throw new Error(error_msg);

					case 9:
						return _context4.abrupt('return', data);

					case 10:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, undefined);
	}));

	return function getMessages(_x4) {
		return _ref7.apply(this, arguments);
	};
}();

var markAllMessages = exports.markAllMessages = function () {
	var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(accesstoken) {
		var url, options, _ref10, success;

		return regeneratorRuntime.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						url = '/message/mark_all';
						options = {
							method: 'POST',
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							body: _querystring2.default.stringify({ accesstoken: accesstoken })
						};
						_context5.next = 4;
						return fetchJSON(url, options);

					case 4:
						_ref10 = _context5.sent;
						success = _ref10.success;

						if (success) {
							_context5.next = 8;
							break;
						}

						throw new Error(error_msg);

					case 8:
						return _context5.abrupt('return', success);

					case 9:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, undefined);
	}));

	return function markAllMessages(_x5) {
		return _ref9.apply(this, arguments);
	};
}();

var upsReply = exports.upsReply = function () {
	var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref12) {
		var replyId = _ref12.replyId,
		    accesstoken = _ref12.accesstoken;

		var url, options, _ref13, success, action, error_msg;

		return regeneratorRuntime.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						url = '/reply/' + replyId + '/ups';
						options = {
							method: 'POST',
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							body: _querystring2.default.stringify({ accesstoken: accesstoken })
						};
						_context6.next = 4;
						return fetchJSON(url, options);

					case 4:
						_ref13 = _context6.sent;
						success = _ref13.success;
						action = _ref13.action;
						error_msg = _ref13.error_msg;

						if (success) {
							_context6.next = 10;
							break;
						}

						throw new Error(error_msg);

					case 10:
						return _context6.abrupt('return', action);

					case 11:
					case 'end':
						return _context6.stop();
				}
			}
		}, _callee6, undefined);
	}));

	return function upsReply(_x6) {
		return _ref11.apply(this, arguments);
	};
}();

var addReply = exports.addReply = function () {
	var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref15) {
		var topicId = _ref15.topicId,
		    accesstoken = _ref15.accesstoken,
		    content = _ref15.content,
		    replyId = _ref15.replyId;

		var url, body, options, _ref16, success, error_msg, reply_id;

		return regeneratorRuntime.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						url = '/topic/' + topicId + '/replies';
						body = {
							accesstoken: accesstoken,
							content: content
						};

						if (replyId) {
							body['reply_id'] = replyId;
						}
						options = {
							method: 'POST',
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							body: _querystring2.default.stringify(body)
						};
						_context7.next = 6;
						return fetchJSON(url, options);

					case 6:
						_ref16 = _context7.sent;
						success = _ref16.success;
						error_msg = _ref16.error_msg;
						reply_id = _ref16.reply_id;

						if (success) {
							_context7.next = 12;
							break;
						}

						throw new Error(error_msg);

					case 12:
						return _context7.abrupt('return', reply_id);

					case 13:
					case 'end':
						return _context7.stop();
				}
			}
		}, _callee7, undefined);
	}));

	return function addReply(_x7) {
		return _ref14.apply(this, arguments);
	};
}();

var readPic = exports.readPic = function () {
	var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(img) {
		var url, options, response, token;
		return regeneratorRuntime.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						url = 'http://m.yueqingwang.com/common.ashx';
						options = {
							method: 'POST',
							body: JSON.stringify({ img: img })
						};
						_context8.next = 4;
						return fetch(url, options);

					case 4:
						response = _context8.sent;
						_context8.next = 7;
						return response.text();

					case 7:
						token = _context8.sent;

						if (!(token !== 'qrcode error')) {
							_context8.next = 10;
							break;
						}

						throw new Error('二维码图片不清晰');

					case 10:
						return _context8.abrupt('return', token);

					case 11:
					case 'end':
						return _context8.stop();
				}
			}
		}, _callee8, undefined);
	}));

	return function readPic(_x8) {
		return _ref17.apply(this, arguments);
	};
}();