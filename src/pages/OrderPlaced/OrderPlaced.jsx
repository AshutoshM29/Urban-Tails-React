import React from 'react';
import { Link } from "react-router-dom";
import { orderPlaced } from "../../assets/images";
import "./orderPlaced.css";
import { Footer, Navigation } from "../../components";

const OrderPlaced = () => {

return (
<div>
  <Navigation />
  <main className="main-authentication">
    <section className="section-info">
      <h2>Order placed successfully!!</h2>
      <Link to="/" className="btn btn-primary-solid">
        Home
      </Link>
    </section>
    <div className="hero-login">
      <img src={orderPlaced} alt="Log In" />
    </div>
  </main>
  <Footer />
</div>
);
};

export { OrderPlaced };