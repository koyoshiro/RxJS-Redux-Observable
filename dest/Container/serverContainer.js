'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _Action = require('../Action');

var _server = require('../Components/server');

function mapStateToProps(store) {
    if (store) {
        return store;
    } else {
        return {
            isRequest: false,
            requestServerId: 0,
            requestStatus: ''
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestService: function requestService(serviceId) {
            return dispatch((0, _Action.requestServiceAction)(serviceId));
        },
        cancelService: function cancelService() {
            return dispatch((0, _Action.cancelRequestAction)());
        }
    };
}

var serverContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_server.serverView);

exports.default = serverContainer;