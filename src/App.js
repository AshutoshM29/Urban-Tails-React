import "./App.css";
import {Routes, Route} from "react-router-dom";
import { Navigation,Footer } from "./components/component";
import {Homepage, Cart, Product, Wishlist, Login, Signup} from "./pages/pages";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main-style">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
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