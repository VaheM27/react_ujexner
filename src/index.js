import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./Lesson5/App";
// import App from "./Lesson6/App";
// import App from "./Lesson7/App";
// import App from "./Lesson8/App";
// import App from "./Lesson9/App";
// import App from "./Lesson10/App";
// import App from "./Lesson11/App";
// import App from "./Lesson12/App";
// import App from "./Lesson13/App";
// import App from "./Lesson14/App";
// import App from "./WebSite-1/App";
// import App from "./Lesson16/App";
// import App from "./Lesson18/App";
// import App from "./Lesson19/App";
// import App from "./Lesson20/App";
// import App from "./Redux1/App";
import { Provider } from 'react-redux';
// import store from './Redux1/store'
import App from "./WeatherWebSite/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Provider>
    <App />
  // </Provider>
);
