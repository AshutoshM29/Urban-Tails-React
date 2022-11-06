import React from 'react';
import { useDataLayer } from "../../../context";
import "../../../pages/Product/Product.css"

const VerticalCard = ({ product }) => {
  const { addToWishlist, state, handleAddToCart } = useDataLayer();
  const currentProductInWishlist = state.wishlistData.find(
    (element) => element._id === product._id
  );
  const isInWishlist = currentProductInWishlist === undefined ? false : true;

  const isInCart =
    state.cartData.find((element) => element._id === product._id) === undefined
      ? false
      : true;
return (
  <>
  <div className="container-card">
  <div className="card card-vertical">
    <div className="img-content">
      <p className="text-badge">{product.textBadge}</p>
      <button
        className={"material-icons btn-wishlist"}
        onClick={(event) => addToWishlist(event, product)}
      >
      {!isInWishlist ? "favorite_border" : "favorite"}
      </button>
      <img
        src={product.img}
        alt={product.name}
        className="card-vertical-img"
      />
    </div>
    <h1 className="card-head">{product.title}</h1>
    <p className="card-text">
      {product.productDesc}
    </p>
    <div className="section-review">
      <small className="rating-oa">
        {product.rating}
          <i className="fas fa-star"></i>
      </small>
    <p className="body-cp-xsm">{product.reviews}</p>
    </div>
    <div className="section-price">
      <span className="price">₹{product.price}</span>
      <span className="initial-price">₹{product.initialPrice}</span>
      <span className="discount">
        ({Math.floor((((product.discountedPrice / product.initialPrice * 100)-100)*-1))}% off)
      </span>
    </div>
    <button className="btn btn-primary-outline"
      onClick={(event) => handleAddToCart(event, product)}>
        <i className="fas fa-shopping-bag"></i> Add to Bag
    </button>
    <button className="btn btn-primary-solid"
      onClick={(event) => handleAddToCart(event, product)}>
        <i className="fas fa-bolt"></i> Buy Now
    </button>
    </div>
    </div>
    </>
  )
};

export { VerticalCard };