import React from 'react';
import "./App.css";
import {
  Homepage,
  Product,
  Wishlist,
  Cart,
  Login,
  Logout,
  Signup,
  OrderPlaced,
  Profile,
  NotFound,
  Forget,
} from "./pages";
import { RequiresAuth } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Product" element={<Product />} />
        <Route
          path="/Wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/Cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/OrderPlaced" element={<OrderPlaced />} />
        <Route
          path="/Profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;