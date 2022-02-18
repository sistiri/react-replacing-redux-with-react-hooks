import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import ProductsProvider from './context/products.context';
import configureProductsStore from "./hooks-store/product-store";
import configureCounterStore from "./hooks-store/counter-store";

configureProductsStore();
configureCounterStore();

ReactDOM.render(
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductsProvider>
  document.getElementById("root")
);
