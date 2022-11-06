import React from 'react';
import { Link } from 'react-router-dom'
import { useDataLayer } from "../../context";
import { Footer, HorizontalCard, Navigation } from "../../components";
import "../Wishlist/Wishlist.css"
import "../../pages/Product/Product.css"

const Wishlist = () => {
  const { state } = useDataLayer();


  return (
    <>
      <Navigation />
      <main className="main-wishlist">
        {state.wishlistData.length > 0 ? (
          <div className="container-wishlist-head">
          <div className="container-card-head">
            <Link className="path" to="/Homepage">Home</Link>
              <small> <i className="fas fa-angle-double-right"></i> </small>
            <Link className="path" to="/Wishlist">My Wishlist</Link>
          </div>
        </div>
        ) : (
          ""
        )}
        {state.wishlistData.length > 0 ? (
          <div className="section-wishlist">
            <div className="section-wishlist">
            {state.wishlistData.map((element) => {
              return <HorizontalCard product={element} key={element._id} />;
            })}
            </div>
          </div>
        ) : (
            <div className="container-card-head">
              <h2 className="header-cart">
                Your wishlist is empty! :(
              </h2>
            </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export { Wishlist };