"use strict";

var path = require('path');

module.exports = {
  restapi: 'https://cnodejs.org/api/v1',
  favicon: path.join(__dirname, 'favicon.ico'),
  staticEntry: 'index.html' // bundleAnalyzer: true,

};