'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FETCH_USER_INFO = exports.UPDATE_FIELD = exports.GET_TOKEN_BY_IMG = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _service = require('../../service');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * actions of model
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var GET_TOKEN_BY_IMG = exports.GET_TOKEN_BY_IMG = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state, base64Img) {
		var token;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _service.readPic)(base64Img);

					case 2:
						token = _context.sent;
						return _context.abrupt('return', _extends({}, state, {
							token: token
						}));

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function GET_TOKEN_BY_IMG(_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();

var UPDATE_FIELD = exports.UPDATE_FIELD = function UPDATE_FIELD(state, _ref2) {
	var key = _ref2.key,
	    value = _ref2.value;

	if (state[key] === value) {
		return state;
	}
	return _extends({}, state, _defineProperty({}, key, value));
};

var FETCH_USER_INFO = exports.FETCH_USER_INFO = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(state) {
		var token, userInfo;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						token = state.token;
						_context2.next = 3;
						return (0, _service.getUserInfo)(token);

					case 3:
						userInfo = _context2.sent;
						return _context2.abrupt('return', _extends({}, state, {
							userInfo: userInfo
						}));

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function FETCH_USER_INFO(_x3) {
		return _ref3.apply(this, arguments);
	};
}();