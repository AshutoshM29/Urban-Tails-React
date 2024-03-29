import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider, DataLayerProvider } from "./context";
// import { AddressManagementProvider } from "./context/addressManagementContext/addressManagementContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataLayerProvider>
          {/* <AddressManagementProvider> */}
            <ToastContainer />
            <App />
          {/* </AddressManagementProvider> */}
        </DataLayerProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.createPortal(
  <ToastContainer
    position="bottom-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />,
  document.getElementById("notifications")
);
















// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { makeServer } from "./server";
// import { BrowserRouter as Router } from "react-router-dom";
// import { ProductProvider } from "./context/product-context";
// import { CartProvider } from "./context/cart-context";
// import { WishListProvider } from "./context/wishlist-context";

// // Call make Server
// makeServer();

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//     <ProductProvider>
//       <CartProvider>
//         <WishListProvider>
//       <App />
//       </WishListProvider>
//       </CartProvider>
//     </ProductProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );