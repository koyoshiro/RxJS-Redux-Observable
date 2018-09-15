'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _requestReducer = require('./requestReducer');

var rootReducer = (0, _redux.combineReducers)({
    requestReducer: _requestReducer.requestReducer
});

exports.default = rootReducer;