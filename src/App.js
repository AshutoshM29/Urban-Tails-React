import "./App.css";
import {Routes, Route} from "react-router-dom";
import { Navigation,Footer } from "./components/component";
import {Homepage, Product, Cart, Wishlist, Forget, Login, Logout, Signup} from "./pages/pages";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main-style">
      <Routes>
        <Route path="*" element={<Homepage/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/forget" element={<Forget/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mock" element={<Mockman/>}></Route>
      </Routes>
      </div>
      <div>
    <Footer />
    </div>
    </div>
  );
}

export default App;