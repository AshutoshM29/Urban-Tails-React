import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/product-context";
import { CartProvider } from "./context/cart-context";
import { WishListProvider } from "./context/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ProductProvider>
      <CartProvider>
        <WishListProvider>
      <App />
      </WishListProvider>
      </CartProvider>
    </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);