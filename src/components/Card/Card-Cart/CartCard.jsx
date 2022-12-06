import React from 'react';
import { useDataLayer, useAuth } from "../../../context";
import { addProductToWishlist } from "../../../services";
import { useToast } from "../../../custom-hooks/useToast";
import { decreaseQtyService, increaseQtyService } from "../../../services/cartServices/cartServices";
import "../../../pages/Cart/cart.css"

const CartCard = ({ product }) => {
  const { handleAddToCart, state, dispatch } = useDataLayer();
  const { showToast } = useToast();
  const { authToken } = useAuth();

  const handleWishlistFromCart = (event, product) => {
    handleAddToCart(event, product);
    const timer = setTimeout(() => {
      (async (product) => {
        const isInWishlist =
          state.wishlistData?.find(
            (element) => element?._id === product._id
          ) === undefined
            ? false
            : true;
        try {
          if (isInWishlist) {
            return showToast("Product is already wishlisted.", "success");
          } else {
            let {
              data: { wishlist },
            } = await addProductToWishlist(authToken, product);
            dispatch({
              type: "GET_WISHLIST_DATA",
              payload: wishlist,
            });
            showToast("Product added to wishlist", "success");
          }
        } catch (error) {
          showToast("Wishlist error", "error");
        }
      })(product);
    }, 1500);
    return () => clearTimeout(timer);
  };

  const handleProductQuantityInCart = async (authToken, productId, action) => {
    try {
      let {
        data: { cart },
      } =
        action === "increase"
          ? await increaseQtyService(authToken, productId)
          : await decreaseQtyService(authToken, productId);
      dispatch({
        type: "GET_CART_DATA",
        payload: cart,
      });
    } catch (error) {
      console.error("increase/decrease quantity error", error);
    }
  };

  return (
    <div className="container-card">
    <div className="card card-horizontal">
      <img className="card-horizontal-img" src={product.img} alt={product.title} />
      <div className="container-details">
      <h1 className="card-head">{product.title}</h1>
      <div className="section-price">
        <span className="price">₹{product.price}</span>
        <span className="initial-price">₹{product.initialPrice}</span>
        <span className="discount">
          ({Math.floor((((product.discountedPrice / product.initialPrice * 100)-100)*-1))}% off)
        </span>
      </div>
      <label className="quantity">
        <span className="title">Quantity : </span>
          <button className="btn-qty" onClick={() =>
            Number(product.qty) > 1 && handleProductQuantityInCart(authToken, product._id, "decrease")}>
              <i className="fa fa-minus-circle icon"></i>
          </button>
        <span className="value">{product.qty}</span>
        <button className="btn-qty" onClick={() => handleProductQuantityInCart(authToken, product._id, "increase")}>
          <i className="fa fa-plus-circle icon"></i>
        </button>
        </label>
      <div className="card-horizontal-footer">
        <button className="btn btn-primary-solid"
          onClick={(event) => handleWishlistFromCart(event, product)}>
            <i className="fas fa-shopping-bag"></i> Move to Wishlist
        </button>
        <button className="btn btn-secondary-outline"
          onClick={(event) => handleAddToCart(event, product)}>
            <i className="fas fa-trash"></i> Remove from Bag
        </button>
      </div>
      </div>
    </div>
    </div>
  )
};

export { CartCard };