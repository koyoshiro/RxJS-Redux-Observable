import {
    REQUSET_SERVICE,
    CANCEL_REQUSET
} from '../Action';

const requestReducer = (state, action) => {
    if (!state) {
        return {};
    }

    if (action.type === REQUSET_SERVICE) {
        const serviceID = action.payload;
        return {
            isRequest: true,
            requestServerId: serviceID,
            requestStatus: 'isRequesting'
        };
    } else if (action.type === CANCEL_REQUSET) {
        const requestStatus = action.payload;
        state.isRequest = false;
        state.requestStatus = requestStatus;
        return state;
    }
};

export {
    requestReducer
};