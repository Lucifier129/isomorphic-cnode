'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UPDATE_FIELD = exports.INIT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _service = require('../../service');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * actions of model
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var INIT = exports.INIT = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state) {
		var loginname, user;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						loginname = state.location.params.loginname;
						_context.next = 3;
						return (0, _service.getUserData)(loginname);

					case 3:
						user = _context.sent;
						return _context.abrupt('return', _extends({}, state, {
							user: user
						}));

					case 5:
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

var UPDATE_FIELD = exports.UPDATE_FIELD = function UPDATE_FIELD(state, _ref2) {
	var key = _ref2.key,
	    value = _ref2.value;

	if (state[key] === value) {
		return state;
	}
	return _extends({}, state, _defineProperty({}, key, value));
};