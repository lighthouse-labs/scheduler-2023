import React from "react";
import ReactDOM from "react-dom/client";

import "index.scss";

import Application from "components/Application";

import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
