import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

const options = {
  timeout: 10000,
};

ReactDOM.render(
  <Provider store={Store} {...options}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
