'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * model
 */

var initialState = exports.initialState = {
	topics: [],
	searchParams: {
		page: 1,
		limit: 20,
		tab: 'all',
		mdrender: true
	}
};

var INIT = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state) {
		var searchKey, location, _ref2, data, topics;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						searchKey = state.searchKey, location = state.location;


						if (location.query.tab) {
							searchKey = _extends({}, searchKey, {
								tab: location.query.tab
							});
						}

						_context.next = 4;
						return getTopics(searchKey);

					case 4:
						_ref2 = _context.sent;
						data = _ref2.data;
						topics = data.map(function (item) {
							var content = item.content,
							    topic = _objectWithoutProperties(item, ['content']);

							return topic;
						});
						return _context.abrupt('return', _extends({}, state, {
							topics: topics,
							searchKey: searchKey
						}));

					case 8:
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

exports.INIT = INIT;
var FETCH_NEXT_TOPICS = exports.FETCH_NEXT_TOPICS = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(state) {
		var searchKey, topics, _ref4, data;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						searchKey = state.searchKey, topics = state.topics;


						searchKey = _extends({}, searchKey, {
							page: searchKey.page + 1
						});

						_context2.next = 4;
						return getTopics(searchKey);

					case 4:
						_ref4 = _context2.sent;
						data = _ref4.data;


						topics = topics.concat(data);

						return _context2.abrupt('return', _extends({}, state, {
							searchKey: searchKey,
							topics: topics
						}));

					case 8:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function FETCH_NEXT_TOPICS(_x2) {
		return _ref3.apply(this, arguments);
	};
}();

var UPDATE_FIELD = exports.UPDATE_FIELD = function UPDATE_FIELD(state, _ref5) {
	var key = _ref5.key,
	    value = _ref5.value;

	if (state[key] === value) {
		return state;
	}
	return _extends({}, state, _defineProperty({}, key, value));
};