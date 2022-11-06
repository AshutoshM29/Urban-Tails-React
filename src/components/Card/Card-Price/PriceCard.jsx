import React from 'react';
import { useDataLayer } from "../../../context";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../custom-hooks/useToast";

const PriceCard = () => {
  const { state, handleAddToCart } = useDataLayer();
  const currentLocation = useNavigate();
  const { showToast } = useToast();

  const result = state.cartData.reduce(
    (acc, product) => {
      acc.initialPrice = acc.initialPrice + product.qty * product.initialPrice;
      acc.discountedPrice =
        acc.discountedPrice + product.qty * product.discountedPrice;
      acc.discount = acc.initialPrice - acc.discountedPrice;
      return acc;
    },
    { initialPrice: 0, discountedPrice: 0, discount: 0 }
  );

  const deliveryCharges = 40 * Number(state.cartData.length);

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (event) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      showToast("Razorpay failed to load!!", "error");
      return;
    }

    const options = {
      key: "rzp_test_h4nqMDPxVYcZ6s",
      amount: (result.discountedPrice + deliveryCharges) * 100,
      currency: "INR",
      name: "Urban Tails",
      description: "Thank you for shopping with us",
      image:
        "https://github.com/AshutoshM29/Urban-Tails-React/blob/dev/src/assets/paw.png?raw=true",
      handler: function (response) {
        state.cartData.map((item) => handleAddToCart(event, item));
        currentLocation("/OrderPlaced");
      },
      theme: {
        color: "#29852f",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
{ displayRazorpay(event); }
  };

return (
  <div className="bag-details">
  <h4 className="bag-head">Shopping Bag</h4>
  <hr/>
  <section className="bag-desc">My Bag <span className="price">{state.cartData.length} items</span></section>
  <section className="bag-desc">Price <span className="price">₹ {result.initialPrice}</span></section>
  <section className="bag-desc">Your Savings<span className="discount">₹ {result.discountedPrice}</span></section>
  <section className="bag-desc">Delivery Charges<span className="price">₹ {deliveryCharges}</span></section>
  <hr/>
  <label className="label-bag-input">
    <span className="search-bar-btn" type="submit">
      <i className="fas fa-tag"></i>
    </span>
    <input className="bag-input" type="text" placeholder=" Discount Code or Gift Card" />
  </label>
    <button className="btn btn-primary-outline">
      Apply Coupon
    </button>
    <section className="bag-desc">
      <p>TOTAL AMOUNT</p>
      <p className="price">₹ {result.discountedPrice + deliveryCharges}</p>
    </section>
    <hr/>
    <button className="btn btn-primary-solid"
      onClick={(event) => handlePlaceOrder(event)}>Place Order
    </button>
    </div>
  )
};

export { PriceCard };