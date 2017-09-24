'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    restapi: 'https://cnodejs.org/api/v1',
    favicon: _path2.default.join(__dirname, 'favicon.ico'),
    staticEntry: 'index.html',
    alias: process.env.NODE_ENV === 'production' ? {
        'react': 'react-lite',
        'react-dom': 'react-lite'
    } : {}
};