import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./hooks-store/products-store";

import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products-context";

//Use store
configureStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
