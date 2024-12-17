import React from "react";
import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./Lesson20/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
