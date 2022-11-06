import React from 'react';
import { Footer, PriceCard, CartCard, Navigation } from "../../components";
import { useDataLayer } from "../../context";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
  const { state } = useDataLayer();


  return (
    <>
      <Navigation />
      <main>
      {state.cartData.length > 0 && (
        <div className="container-cart-head">
        <div className="container-card-head">
          <Link className="path" to="/Homepage">Home</Link>
            <small> <i className="fas fa-angle-double-right"></i> </small>
          <Link className="path" to="/Cart">My Bag</Link>
        </div>
      </div>
      )}
      <div className="section-cart">
        {state.cartData.length > 0 ? (
          <>
            <div className="container-cart">
              {state.cartData.map((product) => {
                return <CartCard product={product} key={product._id} />;
              })}
            </div>
            <PriceCard />
          </>
        ) : (
          <div className="container-card-head">
            <h2 className="header-cart">
                Your bag is empty! :(
            </h2>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </>
  );
};

export { Cart };