"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxObservable = require("redux-observable");

var _requestEpic = require("./requestEpic");

var rootEpic = (0, _reduxObservable.combineEpics)(_requestEpic.requestEpic);

exports.default = rootEpic;