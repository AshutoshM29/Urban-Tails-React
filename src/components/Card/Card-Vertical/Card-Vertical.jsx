import { useSortedProduct } from "../../../hooks/Filters/filter";
import { useCartContext } from "../../../hooks/Cart/cart-context";
import "../../../pages/Product/product.css"
export const Cards = () => {
const { sortPriceHighLow } = useSortedProduct()
const { dispatch } = useCartContext();

return (sortPriceHighLow.length === 0) ? <div className="container-card">Oh noo!! Poduct not found, try changing filters
</div> : <div className="container-card">
    {sortPriceHighLow.map((products) => {
    return (
    <div className="card card-vertical">
        <div className="img-content">
            <p className="text-badge">{products.textBadge}</p>
            <button className="btn-wishlist">
                <i className="fas fa-heart"></i>
            </button>
            <img className="card-vertical-img" src={`${products.img}`} alt={`${products.categoryName}`} />
        </div>
        <h1 className="card-head">{products.title}</h1>
        <p className="card-text">
            {products.productDesc}
        </p>
        <div className="section-review">
            <small className="rating-oa">{products.rating}<i className="fas fa-star"></i></small>
            <p className="body-cp-xsm">{products.reviews}</p>
        </div>
        <div className="section-price">
            <span className="price">₹{products.price}</span>
            <span className="initial-price">₹{products.initialPrice}</span>
            <span className="discount">({products.discount})</span>
        </div>
        <button className="btn btn-primary-outline" 
                onClick={() =>dispatch({type:"addToCartHandler",payload:products})}>
            <i className="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button className="btn btn-primary-solid" 
                onClick={() =>dispatch({type:"addToCartHandler",payload:products})}>
            <i className="fas fa-bolt"></i> Buy Now
        </button>
    </div>
    )
    })
    }
</div>
}