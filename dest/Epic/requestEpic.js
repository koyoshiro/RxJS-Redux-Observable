'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestEpic = undefined;

var _Action = require('../Action');

var fakeAjax = function fakeAjax(url) {
    return of({
        serviceId: url.substring(url.lastIndexOf('/') + 1),
        flightList: [{
            flightNo: 'MU001',
            flightDA: 'SHA-OSK'
        }, {
            flightNo: 'MU002',
            flightDA: 'OSK-SHA'
        }, {
            flightNo: 'MU003',
            flightDA: 'SHA-HGK'
        }]
    }).pipe(delay(1000));
};

var requestEpic = exports.requestEpic = function requestEpic(action$) {
    return action$.pipe(ofType(_Action.REQUSET_SERVICE), mergeMap(function (action) {
        return fakeAjax('/api/users/' + action.payload).pipe(map(response), delay(1000), mapTo({
            type: _Action.REQUSET_SERVICE,
            payload: 106
        }), takeUntil(action$.pipe(filter(function (action) {
            return action.type === _Action.CANCEL_REQUSET;
        }))));
    }));
};