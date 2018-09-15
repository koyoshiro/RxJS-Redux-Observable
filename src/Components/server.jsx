import React from "react";

export default class serverView extends React.Component {

    render() {
        return (
        <div>
        <button
            onclick="(${() => {
            store.dispatch(requestService(105));
            }})();"
        >
            Request 105 Service
        </button>

        <button
            onclick="(${() => {
            store.dispatch(cancelService());
            }})();"
        >
            CANCEL Request
        </button>

        <span>${isRequest ? '(Load Data...)' : ''}</span>
        </div>
        );
    }
}