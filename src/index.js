import React from "react";
import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./exam/App";
import store from "./exam/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  );
