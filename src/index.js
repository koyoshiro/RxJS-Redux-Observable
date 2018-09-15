import React from "react";
import ReactDOM from "react-dom";
import "rxjs";
import {Provider} from "react-redux";
import {configureStore} from "./Store";
import {serverContainer} from "./Container/serverContainer";


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <serverContainer/>
    </Provider>,
    document.getElementById('root')
);