"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// routes
var _default = [{
  path: '/(index|home|list)?',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./page/home/Controller'));
    });
  }
}, {
  path: '/topic/:topicId',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./page/detail/Controller'));
    });
  }
}, {
  path: '/login',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./page/login/Controller'));
    });
  }
}, {
  path: '/user/:loginname',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./page/user/Controller'));
    });
  }
}, {
  path: '/add',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./page/add/Controller'));
    });
  }
}, {
  path: '/message',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./page/message/Controller'));
    });
  }
}, {
  path: '/about',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./page/about/Controller'));
    });
  }
}, {
  path: '*',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./page/home/Controller'));
    });
  }
}];
exports.default = _default;