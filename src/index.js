import React from "react";
import store from "./store";
import ReactDOM from "react-dom";
import App from "./component/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
