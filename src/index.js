import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Lesson33/App";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Lesson33/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
