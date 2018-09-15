import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    createEpicMiddleware
} from 'redux-observable';
import {
    rootEpic
} from '../Epic';
import {
    rootReducer
} from '../Reducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    return store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );
}