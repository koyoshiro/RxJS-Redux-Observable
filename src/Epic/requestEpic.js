import {
    REQUSET_SERVICE,
    CANCEL_REQUSET
} from '../Action';

const fakeAjax = url => of ({
    serviceId: url.substring(url.lastIndexOf('/') + 1),
    flightList: [{
            flightNo: 'MU001',
            flightDA: 'SHA-OSK'
        },
        {
            flightNo: 'MU002',
            flightDA: 'OSK-SHA'
        },
        {
            flightNo: 'MU003',
            flightDA: 'SHA-HGK'
        },
    ]
}).pipe(delay(1000));

export const requestEpic = action$ => action$.pipe(
    ofType(REQUSET_SERVICE),
    mergeMap(action => fakeAjax(`/api/users/${action.payload}`).pipe(
        map(response),
        delay(1000),
        mapTo({
            type: REQUSET_SERVICE,
            payload: 106
        }),
        takeUntil(action$.pipe(
            filter(action => action.type === CANCEL_REQUSET)
        ))
    ))
);