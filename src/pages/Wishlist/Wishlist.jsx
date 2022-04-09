import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/cart-context";
import { useWishListContext } from "../../context/wishlist-context";
import "../Wishlist/wishlist.css"
import "../../pages/Product/product.css"

export const Wishlist = () => {
const { wishListState, wishDispatch } = useWishListContext();
const { state, dispatch } = useCartContext();

return <main className="main-wishlist">
  <div className="container-wishlist-head">
    <Link className="path-page" to="/Homepage">Home</Link>
    <small> <i className="fas fa-angle-double-right"></i> </small>
    <Link className="path-page" to="Wishlist">My Wishlist</Link>
  </div>
  <div className="section-wishlist">
    <div className="section-wishlist">
      {wishListState.wishItems.map((items) => {
      return <div className="card card-horizontal" key={items.id}>
        <div className="img-content">
          <button className="btn-wishlist-fixed">
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <img className="card-horizontal-img" src={items.img} alt={items.title} />
        <div>
          <h1 className="card-head">{items.title}</h1>

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
          <div className="card-horizontal-footer">
            <button className="btn btn-primary-solid" onClick={()=> dispatch({ type: "addItemHandler", payload: items })}
              disabled={wishListState.addItemMessage}><i className="fas fa-shopping-bag"></i>{wishListState.addItemMessage
              ? "In the Bag" : " Move to Bag"}
            </button>
            <button className="btn btn-secondary-outline" onClick={()=> wishDispatch({ type: "remove", payload: items })}>
              <i className="fas fa-trash"></i> Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
      })}

    </div>
  </div>
</main>
}