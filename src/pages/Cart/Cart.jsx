import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/Cart/cart";
import { useWishListContext } from "../../context/wishlist-context";
import "../Cart/cart.css"
import "../../pages/Product/product.css"

export const Cart = () => {
const { state,dispatch } = useCartContext();
const { wishListState, wishDispatch } = useWishListContext();
let {addToWishListMessage}=useWishListContext();
return <div>
  {state.cartItems.length === 0 ? <h2 className="header-cart"> Your bag is empty! :(</h2> :

  <div className="section-cart">
    <div className="container-cart-head">
      <Link className="path-page" to="/Homepage">Home</Link>
      <small> <i className="fas fa-angle-double-right"></i> </small>
      <Link className="path-page" to="/Cart"> Bag</Link>
    </div>
    <div className="container-cart">
      {state.cartItems.map((items) => {

      return <div className="card card-horizontal" key={items.id}>
        <img className="card-horizontal-img" src={items.img} alt={items.title} />
        <div>
          <h1 className="card-head">{items.title}</h1>

          <div className="price-section">
            <span className="price">₹{items.price}</span>
            <span className="initial-price">₹{items.initialPrice}</span>
            <span className="discount">({Math.floor((((items.discountedPrice / items.initialPrice * 100)-100)*-1))}%
              off)</span>
          </div>
          <label className="quantity">
            <span className="title">Quantity : </span>
            <button className="btn-qty" onClick={()=> items.quantity <= 1 ? dispatch({ type: "deleteItemHandler" , payload:
                items }) : dispatch({ type: "decreaseCountHandler" , payload: items })}><i className="fa fa-minus-circle icon"></i>
            </button>
            <span className="value">{items.quantity}</span>
            <button className="btn-qty" onClick={()=> dispatch({ type: "increaseCountHandler", payload: items })}><i
                  className="fa fa-plus-circle icon"></i></button>
          </label>
          <div className="card-horizontal-footer">
            <button className="btn btn-primary-solid"
              onClick={ (()=> wishDispatch({ type: "wishlist", payload: items }))}>
              {addToWishListMessage=wishListState.wishItems.some((item) => 
              {if (item.id === items.id) {return true;}})}
              <i className="fas fa-heart"></i>
              {addToWishListMessage?" Wishlited":" Add to Wishlist"}
            </button>
            <button className="btn btn-secondary-outline" onClick={() => dispatch({ type: "deleteItemHandler", payload: items })}><i className="fas fa-trash"></i> Remove from Bag</button>
          </div>
        </div>
      </div>
      })}
    </div>


    <div className="bag-details">
                <h4 className="bag-head">Shopping Bag</h4>
                <hr/>
                <section className="bag-desc">My Bag <span className="price">{state.cartCount}</span></section>
                <section className="bag-desc">Your Savings<span className="discount">₹ {state.totalPrice}</span></section>
                <section className="bag-desc">Delivery Charges<span className="price">₹ 00.00</span></section>
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
                    <p className="price">₹ {state.totalPrice.toFixed(2)}</p>
                </section>
                <hr/>
                <p></p>
                <button className="btn btn-primary-solid">Place Order</button>
            </div>
  </div>


  }
</div>

}