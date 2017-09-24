'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ADD_TOPIC = exports.UPDATE_FIELDS = exports.UPDATE_FIELD = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * actions of model
                                                                                                                                                                                                                                                                   */


var _service = require('../../service');

var _util = require('../../share/util');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UPDATE_FIELD = exports.UPDATE_FIELD = function UPDATE_FIELD(state, _ref) {
	var key = _ref.key,
	    value = _ref.value;

	if (state[key] === value) {
		return state;
	}
	return _extends({}, state, _defineProperty({}, key, value));
};

var UPDATE_FIELDS = exports.UPDATE_FIELDS = function UPDATE_FIELDS(state) {
	var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	return fields.reduce(UPDATE_FIELD, state);
};

var ADD_TOPIC = exports.ADD_TOPIC = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state) {
		var tab, title, content, userInfo, suffix, token, topic_id;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						tab = state.tab, title = state.title, content = state.content, userInfo = state.userInfo, suffix = state.suffix;
						token = userInfo.token;
						_context.next = 4;
						return (0, _service.addTopic)({
							tab: tab,
							title: title,
							content: content + suffix,
							accesstoken: token
						});

					case 4:
						topic_id = _context.sent;
						return _context.abrupt('return', _extends({}, state, {
							topic_id: topic_id
						}));

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function ADD_TOPIC(_x2) {
		return _ref2.apply(this, arguments);
	};
}();