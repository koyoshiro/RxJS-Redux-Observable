'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestReducer = undefined;

var _Action = require('../Action');

var requestReducer = function requestReducer(state, action) {
    if (!state) {
        return {};
    }

    if (action.type === _Action.REQUSET_SERVICE) {
        var serviceID = action.payload;
        return {
            isRequest: true,
            requestServerId: serviceID,
            requestStatus: 'isRequesting'
        };
    } else if (action.type === _Action.CANCEL_REQUSET) {
        var requestStatus = action.payload;
        state.isRequest = false;
        state.requestStatus = requestStatus;
        return state;
    }
};

exports.requestReducer = requestReducer;