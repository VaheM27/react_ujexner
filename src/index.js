import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ReduxTask/App";
import { BrowserRouter } from "react-router";

import { Provider } from "redux";
import store from "./ReduxTask/components/Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
