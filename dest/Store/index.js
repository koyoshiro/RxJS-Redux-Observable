'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxObservable = require('redux-observable');

var _Epic = require('../Epic');

var _Reducer = require('../Reducer');

var epicMiddleware = (0, _reduxObservable.createEpicMiddleware)(_Epic.rootEpic);

function configureStore() {
    return store = (0, _redux.createStore)(_Reducer.rootReducer, (0, _redux.applyMiddleware)(epicMiddleware));
}