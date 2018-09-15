const REQUSET_SERVICE = 'REQUSET_SERVICE';
const CANCEL_REQUSET = 'CANCEL_REQUSET';

function requestServiceAction(serviceID) {
    return {
        type: REQUSET_SERVICE,
        payload: serviceID
    };
}

function cancelRequestAction() {
    return {
        type: CANCEL_REQUSET,
        payload: 'cancel request service'
    };
}

export {
    REQUSET_SERVICE,
    CANCEL_REQUSET,
    requestServiceAction,
    cancelRequestAction
};