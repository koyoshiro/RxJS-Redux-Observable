import React from "react";
import ReactDOM from "react-dom";
import "rxjs";
import {Provider} from "react-redux";
import {configureStore} from "./Store";
import {serverContainer} from "./Container/serverContainer";

const store = configureStore();

ReactDOM.render(
    <View>
      <Provider store={store}>
      <div component={serverContainer}></div>
      </Provider>
    </View>,
    document.getElementById('root')
);