import { Link } from 'react-router-dom'
import { useCartContext } from "../../hooks/Cart/cart-context";
import { useWishContext } from "../../hooks/Wishlist/wish-context";
import "../Wishlist/wishlist.css"
import "../../pages/Product/product.css"

export const Wishlist = () => {
const { wishState, wishDispatch } = useWishContext();
const { state, dispatch } = useCartContext();

return <main className="main-wishlist">
  {/* <div className="h4">Total items: {wishState.wishCount}</div> */}
  <div class="container-wishlist-head">
            <Link class="path-page" to="/Homepage">Home</Link>
            <small> <i className="fas fa-angle-double-right"></i> </small>
            <Link class="path-page" to="Wishlist">My Wishlist</Link>
        </div>
  <div className="section-wishlist">
    <div className="section-wishlist">
      {wishState.wishItems.map((items) => {
      return <div class="card card-horizontal" key={items.id}>
      <div class="img-content">
          <button class="btn-wishlist-fixed">
              <i class="fas fa-heart"></i>
          </button>
      </div>
      <img class="card-horizontal-img" src={items.img} alt={items.title} />
      <div>
          <h1 class="card-head">{items.title}</h1>

          <div className="section-price">
            <span className="price">₹{items.price}</span>
            <span className="initial-price">₹{items.initialPrice}</span>
            <span className="discount">({(((items.discountedPrice / 2499 * 100)-100)*-1).toFixed(2)}%
              off)</span>
          </div>
          <div className="section-review">
            <small className="rating-oa">{items.rating}<i className="fas fa-star"></i></small>
            <p className="body-cp-xsm">{items.reviews}</p>
          </div>
          <div class="card-horizontal-footer">
          <button class="btn btn-primary-solid" onClick={()=> dispatch({ type: "addItemHandler", payload: items })}
                   disabled={wishState.addItemMessage}><i class="fas fa-shopping-bag"></i>{wishState.addItemMessage
                   ? "In the Bag" : " Move to Bag"}
          </button>
              <button class="btn btn-secondary-outline"
                      onClick={()=> wishDispatch({ type: "remove", payload: items })}>
                  <i class="fas fa-trash"></i> Remove from Wishlist
              </button>
          </div>
      </div>
  </div>      
      // <div className="card card-horizontal" key={items.id}>
      //   <div className="img-content">
      //     <img src={items.img} alt={items.title} />
      //   </div>
      //   <div className="text-div">
      //     <div className="header-top">
      //       <div>${items.price} <span className="line-through">${items.price + items.discountedPrice}</span> </div>
      //     </div>
      //     <div className="description">{items.title}</div>
      //     <ul>
      //       <li>
      //         <div type="button">
      //           &nbsp;
      //           {wishState.addToCartMessage = state.cartItems.some((item) => {
      //           if (item.id === items.id) {
      //           return true;
      //           }
      //           return false
      //           })
      //           }
      //           <button onClick={()=> dispatch({ type: "addToCartHandler", payload: items })}
      //             disabled={wishState.addToCartMessage}><i className="fas fa-cart-plus"></i>{wishState.addToCartMessage
      //             ? "In cart" : "Add"}</button>
      //           <button onClick={()=> wishDispatch({ type: "remove", payload: items })}>Remove</button>
      //         </div>

      //       </li>

      //     </ul>
      //   </div>
      // </div>
      })}

    </div>
  </div>
</main>
}