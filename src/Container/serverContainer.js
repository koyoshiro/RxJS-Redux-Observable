import {
    connect
} from 'react-redux';

import {
    requestServiceAction,
    cancelRequestAction
} from '../Action';

import {serverView} from '../Components/server';

function mapStateToProps(store) {
    if(store){
        return store;
    }else{
        return {
            isRequest: false,
            requestServerId: 0,
            requestStatus: ''
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestService: (serviceId) => dispatch(requestServiceAction(serviceId)),
        cancelService: () => dispatch(cancelRequestAction())
    }
}

const serverContainer = connect(mapStateToProps, mapDispatchToProps)(serverView);

export default serverContainer;