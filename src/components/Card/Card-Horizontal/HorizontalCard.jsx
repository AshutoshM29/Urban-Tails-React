import React from 'react';
import { useDataLayer } from "../../../context";
import "../../../pages/Product/Product.css"

const HorizontalCard = ({ product }) => {
const { addToWishlist, state, handleAddToCart } = useDataLayer();
return (
  <>
  <div className="container-card">
    <div className="card card-horizontal">
      <div className="img-content">
        <button className="btn-wishlist-fixed">
            <i className="fas fa-heart"></i>
        </button>
      </div>
      <img className="card-horizontal-img" src={product.img} alt={product.title} />
      <div className="container-details">
      <h1 className="card-head">{product.title}</h1>
      <div className="section-price">
        <span className="price">₹{product.price}</span>
        <span className="initial-price">₹{product.initialPrice}</span>
        <span className="discount"> ({Math.floor((((product.discountedPrice / product.initialPrice * 100)-100)*-1))}% off)
        </span>
      </div>
      <div className="section-review">
        <small className="rating-oa">
          {product.rating}
          <i className="fas fa-star"></i>
        </small>
        <p className="body-cp-xsm">{product.reviews}</p>
      </div>
      <div className="card-horizontal-footer">
        <button className="btn btn-primary-solid"
          onClick={(event) => handleAddToCart(event, product)}>
            <i className="fas fa-shopping-bag"></i> Move to Bag
        </button>
        <button className="btn btn-secondary-outline"
          onClick={(event) => addToWishlist(event, product)}>
            <i className="fas fa-trash"></i> Remove from Wishlist
        </button>
      </div>
      </div>
    </div>
  </div>
  </>
)
};

export { HorizontalCard };