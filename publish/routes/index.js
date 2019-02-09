"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;

function test(app) {
  app.use('/test', function (req, res, next) {
    res.json('ok');
  });
}